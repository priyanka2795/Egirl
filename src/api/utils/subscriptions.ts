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

// Get user subscriptions by user id
export async function getUserSubscriptionsByUserId(
  user_id: string,
  client: any
) {
  let { data, error, status } = await client
    .from('user_subscriptions')
    .select(
      `id, user_id, character_id, subscription_id, stripe_subscription_id, created_at`
    )
    .filter('user_id', 'eq', user_id);

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

/// Setters

// Create user subscription
export async function createUserSubscription(
  user_id: string,
  character_id: number,
  subscription_id: number,
  stripe_subscription_id: string,
  client: any
) {
  let { data, error, status } = await client
    .from('user_subscriptions')
    .insert([
      {
        user_id,
        character_id,
        subscription_id,
        stripe_subscription_id,
      },
    ]);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}