// import { stripe, createOrRetrieveCustomer } from '../../../api/utils/stripe';
// import { getURL } from '../../../api/utils/helpers';

// // TODO: edit, auth?
// export default async function createCheckoutSession(
//   req: any,
//   res: any,
//   client: any
// ) {
//   if (req.method === 'POST') {
//     const { price, quantity = 1, metadata = {} } = req.body;

//     try {
//       const {
//         data: { user }
//       } = await client.auth.getUser();

//       const customer = await createOrRetrieveCustomer(
//         user?.email || '',
//         user?.id || '',
//         client
//       );

//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         billing_address_collection: 'required',
//         customer,
//         line_items: [
//           {
//             price: price.id,
//             quantity
//           }
//         ],
//         mode: 'subscription',
//         allow_promotion_codes: true,
//         subscription_data: {
//           trial_from_plan: true,
//           metadata
//         },
//         success_url: `${getURL()}/account`,
//         cancel_url: `${getURL()}/`
//       });

//       return res.status(200).json({ sessionId: session.id });
//     } catch (err: any) {
//       console.log(err);
//       res
//         .status(500)
//         .json({ error: { statusCode: 500, message: err.message } });
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }

// export default async function createCheckoutSession ()