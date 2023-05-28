import { getUserSubscriptionsByUserId } from './profiles';
import { getCharactersByIds } from './characters';
import { getUserSubscriptionsByCharacterId } from '../utils/characters';

/// Getters

// Get subscriptions
export async function getSubscriptions(client: any) {
  let { data, error, status } = await client
    .from('subscriptions')
    .select(
      `id, subscription_name, subscription_price, stripe_product_id, subscription_tier, created_at`
    );

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

// Get subscriptions by user
export async function getSubscriptionsByUser(user_id: string, client: any) {
  let subscriptions = await getUserSubscriptionsByUserId(user_id, client);

  const character_ids = subscriptions.map(
    (subscription: any) => subscription.character_id
  );
  const character_ids_str = '(' + character_ids.join(',') + ')';

  const characters = await getCharactersByIds(character_ids_str, client);

  for (let i = 0; i < subscriptions.length; i++) {
    subscriptions[i].character = characters.data[i];
  }

  return { subscriptions, characters };
}
