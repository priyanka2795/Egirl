import {
  loadStripe,
  Stripe as StripeObj,
  StripeCardElement
} from '@stripe/stripe-js';
import Stripe from 'stripe';
import { toDateTime } from './helpers';
// import { supabaseClient } from '../../config/supabaseClient';

let stripePromise: Promise<StripeObj | null>;

export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE ??
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ??
        ''
    );
  }

  return stripePromise;
}

// TODO: edit
export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY_LIVE ?? process.env.STRIPE_SECRET_KEY ?? '',
  {
    apiVersion: '2022-11-15',
    appInfo: {
      name: 'TODO',
      version: '0.0.1'
    }
  }
);

// Create or retrieve Stripe customer
export async function createOrRetrieveCustomer(
  email: string,
  uuid: string,
  client: any
) {
  const { data, error } = await client
    .from('customers')
    .select('stripe_customer_id')
    .eq('id', uuid)
    .single();
  if (error || !data?.stripe_customer_id) {
    console.log('Creating customer, uuid: ', uuid);
    const customerData: { metadata: { supabaseUUID: string }; email?: string } =
      {
        metadata: {
          supabaseUUID: uuid
        }
      };
    if (email) customerData.email = email;
    const customer = await stripe.customers.create(customerData);
    console.log('This is new customer from Stripe: ', customer);
    // Insert customer id into Supabase
    const { error: supabaseError } = await client.from('customers').insert([
      {
        user_id: uuid,
        stripe_customer_id: customer.id,
        created_at: new Date()
      }
    ]);
    if (supabaseError) {
      console.log(
        'In createOrRetrieveCustomer(), supabaseError: ',
        supabaseError
      );
      throw supabaseError;
    }
    console.log(`New customer created and inserted for ${uuid}.`);
    return customer.id;
  }
  return data.stripe_customer_id;
}

// Process card payment
export async function processCardPayment(data: any) {
  const { amount, currency, cardNumber, cardExpMonth, cardExpYear, cardCVC } =
    data;

  // Create payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000, // cents
    currency: 'usd',
    payment_method_types: ['card']
  });

  // Collect the customer card details and create payment method
  const paymentMethod = await stripe.paymentMethods.create({
    type: 'card',
    card: {
      number: cardNumber,
      exp_month: cardExpMonth,
      exp_year: cardExpYear,
      cvc: cardCVC
    }
  });

  // Attach the payment method to customer
  await stripe.paymentMethods.attach(paymentMethod.id, {
    customer: paymentIntent.customer as string
  });

  // Confirm the payment intent with the attached payment method
  const confirmedPaymentIntent = await stripe.paymentIntents.confirm(
    paymentIntent.id,
    {
      payment_method: paymentMethod.id
    }
  );

  return confirmedPaymentIntent;
}

// Upsert a Stripe product record
export async function upsertProductRecord(
  product: Stripe.Product,
  client: any
) {
  const productData: any = {
    id: product.id,
    active: product.active,
    name: product.name,
    description: product.description ?? undefined,
    image: product.images?.[0] ?? null,
    metadata: product.metadata
  };

  const { error } = await client.from('products').upsert([productData]);
  if (error) throw error;
  console.log(`Product inserted/updated: ${product.id}`);
}

// Upsert Stripe product price record
export async function upsertPriceRecord(price: Stripe.Price, client: any) {
  const priceData: any = {
    id: price.id,
    product_id: typeof price.product === 'string' ? price.product : '',
    active: price.active,
    currency: price.currency,
    description: price.nickname ?? undefined,
    type: price.type,
    unit_amount: price.unit_amount ?? undefined,
    interval: price.recurring?.interval,
    interval_count: price.recurring?.interval_count,
    trial_period_days: price.recurring?.trial_period_days,
    metadata: price.metadata
  };

  const { error } = await client.from('prices').upsert([priceData]);
  if (error) throw error;
  console.log(`Price inserted/updated: ${price.id}`);
}

// Copies the billing details from the payment method to the customer object
const copyBillingDetailsToCustomer = async (
  uuid: string,
  payment_method: Stripe.PaymentMethod,
  client: any
) => {
  //Todo: check this assertion
  const customer = payment_method.customer as string;
  const { name, phone, address } = payment_method.billing_details;
  if (!name || !phone || !address) return;
  //@ts-ignore
  await stripe.customers.update(customer, { name, phone, address });
  const { error } = await client
    .from('users')
    .update({
      billing_address: { ...address },
      payment_method: { ...payment_method[payment_method.type] }
    })
    .eq('id', uuid);
  if (error) throw error;
};

// Subscription status change
export async function manageSubscriptionStatusChange(
  subscriptionId: string,
  customerId: string,
  createAction = false,
  client: any
) {
  // Get customer's UUID from customers table
  const { data: customerData, error: noCustomerError } = await client
    .from('customers')
    .select('id')
    .eq('stripe_customer_id', customerId)
    .single();
  if (noCustomerError) throw noCustomerError;

  const { id: uuid } = customerData!;

  const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
    expand: ['default_payment_method']
  });

  // Upsert the latest status of the subscription object
  const subscriptionData: any = {
    id: subscription.id,
    user_id: uuid,
    metadata: subscription.metadata,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
    //TODO check quantity on subscription
    // @ts-ignore
    quantity: subscription.quantity,
    cancel_at_period_end: subscription.cancel_at_period_end,
    cancel_at: subscription.cancel_at
      ? toDateTime(subscription.cancel_at).toISOString()
      : null,
    canceled_at: subscription.canceled_at
      ? toDateTime(subscription.canceled_at).toISOString()
      : null,
    current_period_start: toDateTime(
      subscription.current_period_start
    ).toISOString(),
    current_period_end: toDateTime(
      subscription.current_period_end
    ).toISOString(),
    created: toDateTime(subscription.created).toISOString(),
    ended_at: subscription.ended_at
      ? toDateTime(subscription.ended_at).toISOString()
      : null,
    trial_start: subscription.trial_start
      ? toDateTime(subscription.trial_start).toISOString()
      : null,
    trial_end: subscription.trial_end
      ? toDateTime(subscription.trial_end).toISOString()
      : null
  };

  const { error } = await client
    .from('stripe_subscriptions')
    .upsert([subscriptionData]);
  if (error) throw error;
  console.log(
    `Inserted/updated Stripe subscription [${subscription.id}] for user [${uuid}]`
  );

  // For a new subscription copy the billing details to the customer object
  // NOTE: This is a costly operation and should happen at the very end
  if (createAction && subscription.default_payment_method && uuid)
    // TODO: add create action on stripe side
    //@ts-ignore
    await copyBillingDetailsToCustomer(
      uuid,
      subscription.default_payment_method as Stripe.PaymentMethod
    );
}

// console.log('Testing stripe utils: ');
// createOrRetrieveCustomer(
//   'test@gmail.com',
//   'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
//   supabaseClient
// );
