import { getSubscriptionsByUser } from '../utils/subscriptions';

// import { supabaseClient } from '../../config/supabaseClient';

/// Subscriptions

// Get subscriptions
export async function getSubscriptions(user_id: string, client: any) {
  const subscriptions = await getSubscriptionsByUser(user_id, client);
  return subscriptions;
}

// getSubscriptions('e8a2be37-76f6-4ebb-bfd8-b9e370046a41', supabaseClient);
