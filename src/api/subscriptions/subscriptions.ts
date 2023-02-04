import { getSubscriptionsByUser } from '../utils/subscriptions';

// import { supabaseClient } from '../../config/supabaseClient';

/// Subscriptions

// Get subscriptions
export async function getSubscriptions(user_id: string, client: any) {
  const subscriptions = await getSubscriptionsByUser(user_id, client);
  return subscriptions;
}

// getSubscriptions('1dd94d8b-c048-4b21-8571-583296db317e', supabaseClient);
