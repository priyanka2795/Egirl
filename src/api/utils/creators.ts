import { supabaseClient } from '../../config/supabaseClient';

export async function getCreator(creator_id: number, client: any) {
  let { data, error, status } = await client
    .from('creators')
    .select(
      `id, user_id, is_verified, bio, creator_id, profile_picture, profile_banner_picture, info_tags, created_at`
    )
    .filter('creator_id', 'eq', creator_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  const creator_subscriptions = await getCreatorSubscriptionsByCreatorId(
    creator_id,
    client
  );
  const total_subscriptions = creator_subscriptions.reduce(
    (count: number[], sub: any) => {
      if (sub.subscription_tier === '') {
        return [count[0] + 1, count[1], count[2], count[3]];
      }
      if (sub.subscription_tier === 'TIER 1') {
        return [count[0], count[1] + 1, count[2], count[3]];
      }
      if (sub.subscription_tier === 'TIER 2') {
        return [count[0], count[1], count[2] + 1, count[3]];
      }
      if (sub.subscription_tier === 'TIER 3') {
        return [count[0], count[1], count[2], count[3] + 1];
      }
      return count;
    },
    [0, 0, 0, 0] // Total, Tier 1, Tier 2, Tier 3
  );

  const characters = getCharactersByCreatorId(creator_id, client);

  return { data, total_subscriptions, characters };
}

export async function getCharactersByCreatorId(
  creator_id: number,
  client: any
) {
  let { data, error, status } = await client
    .from('characters')
    .select(
      `username, display_name, is_verified, bio, creator_id, profile_picture, profile_banner_picture`
    )
    .filter('creator_id', 'eq', creator_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

export async function getCreatorSubscriptionsByCreatorId(
  creator_id: number,
  client: any
) {
  let { data, error, status } = await client
    .from('creator_subscriptions')
    .select(`id, subscriber_id, subscription_tier, created_at`)
    .filter('subscriber_id', 'eq', creator_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}
