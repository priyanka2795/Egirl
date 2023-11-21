import { getSubscriptionsByUser, createUserSubscription } from '../utils/subscriptions';

import { getUserSubscriptionsByCharacterId } from '../utils/characters';


/// Subscriptions

// Get subscriptions
export async function getSubscriptions(user_id: string, client: any) {
  const subscriptions = await getSubscriptionsByUser(user_id, client);
  console.log('this is subscriptions: ', subscriptions);
  return subscriptions;
}

// Create subscription
export async function createSubscription(
  user_id: string,
  character_id: number,
  subscription_id: number,
  stripe_subscription_id: string,
  client: any
) {
  const subscription = await createUserSubscription(
    user_id,
    character_id,
    subscription_id,
    stripe_subscription_id,
    client
  );
  return subscription;
}

// TODO:

// subscriptions feed: chronological list of post from characters that used is subscribed to
//

// 1. For you:
//     - Character profile `info_tag` matching
//         - updated db to include `profile_tag` which describe the tags on Character profiles that describes the character
//     - Example:
//         - If user is interested in tag of: Cat Girl, we recommend them Cat Girl profile posts, ONLY:
//             - Free profile posts
//             - Preview posts
//     - Who you’re `following`
//     - What posts you `like`

// 1. You might like:
//     - Same thing we do for For you
//         - but instead of posts, we do the actual profiles (characters)

