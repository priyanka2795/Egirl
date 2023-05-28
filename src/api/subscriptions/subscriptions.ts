import { getSubscriptionsByUser } from '../utils/subscriptions';

import { getUserSubscriptionsByCharacterId } from '../utils/characters';

// import { supabaseClient } from '../../config/supabaseClient';

/// Subscriptions

// Get subscriptions
export async function getSubscriptions(user_id: string, client: any) {
  const subscriptions = await getSubscriptionsByUser(user_id, client);
  return subscriptions;
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

// getSubscriptions('e8a2be37-76f6-4ebb-bfd8-b9e370046a41', supabaseClient);
