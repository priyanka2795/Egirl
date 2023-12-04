// import {
//   stripe,
//   upsertProductRecord,
//   upsertPriceRecord,
//   manageSubscriptionStatusChange,
//   createOrRetrieveCustomer
// } from '../../../api/utils/stripe';
// import { NextApiRequest, NextApiResponse } from 'next';
// import Stripe from 'stripe';
// import { Readable } from 'node:stream';

// // Stripe requires the raw body to construct the event
// export const config = {
//   api: {
//     bodyParser: false
//   }
// };

// async function buffer(readable: Readable) {
//   const chunks = [];
//   for await (const chunk of readable) {
//     chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
//   }
//   return Buffer.concat(chunks);
// }

// const relevantEvents = new Set([
//   'product.created',
//   'product.updated',
//   'price.created',
//   'price.updated',
//   'checkout.session.completed',
//   'customer.created',
//   'customer.subscription.created',
//   'customer.subscription.updated',
//   'customer.subscription.deleted'
// ]);

// // Handler for webhook
// export default async function webhookHandler(
//   req: NextApiRequest,
//   res: NextApiResponse,
//   client: any
// ) {
//   if (req.method === 'POST') {
//     const buf = await buffer(req);
//     const sig = req.headers['stripe-signature'];
//     const webhookSecret =
//       process.env.STRIPE_WEBHOOK_SECRET_LIVE ??
//       process.env.STRIPE_WEBHOOK_SECRET;
//     let event: Stripe.Event;

//     try {
//       if (!sig || !webhookSecret) return;
//       event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
//     } catch (err: any) {
//       console.log(`❌ Error message: ${err.message}`);
//       return res.status(400).send(`Webhook Error: ${err.message}`);
//     }

//     if (relevantEvents.has(event.type)) {
//       try {
//         switch (event.type) {
//           case 'product.created':
//           case 'product.updated':
//             await upsertProductRecord(
//               event.data.object as Stripe.Product,
//               client
//             );
//             break;
//           case 'price.created':
//           case 'price.updated':
//             await upsertPriceRecord(event.data.object as Stripe.Price, client);
//             break;
//           case 'customer.created':
//             const object = event.data.object as Stripe.Customer;
//             await createOrRetrieveCustomer(
//               object.email as string,
//               object.id,
//               client
//             );
//           case 'customer.subscription.created':
//             let created_subscription = event.data.object as Stripe.Subscription;
//             await manageSubscriptionStatusChange(
//               created_subscription.id,
//               created_subscription.customer as string,
//               event.type === 'customer.subscription.created',
//               client
//             );
//           case 'customer.subscription.updated':
//             let updated_subscription = event.data.object as Stripe.Subscription;
//             await manageSubscriptionStatusChange(
//               updated_subscription.id,
//               updated_subscription.customer as string,
//               event.type === 'customer.subscription.updated',
//               client
//             );
//           case 'customer.subscription.canceled':
//             let canceled_subscription = event.data.object as Stripe.Subscription;
//             await manageSubscriptionStatusChange(
//               canceled_subscription.id,
//               canceled_subscription.customer as string,
//               event.type === 'customer.subscription.canceled',
//               client
//             );
//           case 'customer.subscription.deleted':
//             let deleted_subscription = event.data.object as Stripe.Subscription;
//             await manageSubscriptionStatusChange(
//               deleted_subscription.id,
//               deleted_subscription.customer as string,
//               event.type === 'customer.subscription.deleted',
//               client
//             );
//             break;
//           case 'checkout.session.completed':
//             const checkoutSession = event.data
//               .object as Stripe.Checkout.Session;
//             if (checkoutSession.mode === 'subscription') {
//               const subscriptionId = checkoutSession.subscription;
//               await manageSubscriptionStatusChange(
//                 subscriptionId as string,
//                 checkoutSession.customer as string,
//                 true,
//                 client
//               );
//             }
//             break;
//           default:
//             throw new Error('Unhandled relevant event!');
//         }
//       } catch (error) {
//         console.log(error);
//         return res
//           .status(400)
//           .send('Webhook error: "Webhook handler failed. View logs."');
//       }
//     }

//     res.json({ received: true });
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }
