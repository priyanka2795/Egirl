import { supabaseClient } from '../../config/supabaseClient';

export async function getCharacterById(character_id: number) {
  let { data, error, status } = await supabaseClient
    .from('characters')
    .select(
      `username, display_name, is_verified, bio, creator_id, profile_picture, profile_banner_picture, info_tags, created_at`
    )
    .filter('id', 'eq', character_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  const user_subscriptions = await getUserSubscriptionsByCharacterId(
    character_id
  );
  const total_subscriptions = user_subscriptions.reduce(
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

  const info_tags = await getInfoTagsByInfoTagIds(data[0]['info_tags']);

  // Can extend this later for loading list of followers
  const followers = await getFollowersByCharacterId(character_id);
  const follower_count = followers.length;

  return { data, total_subscriptions, info_tags, follower_count };
}

export async function getUserSubscriptionsByCharacterId(character_id: number) {
  let { data, error, status } = await supabaseClient
    .from('user_subscriptions')
    .select(`id, user_id, character_id, subscription_tier, created_at`)
    .filter('character_id', 'eq', character_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

export async function getInfoTagsByInfoTagIds(infotag_ids: number[]) {
  let { data, error, status } = await supabaseClient
    .from('info_tags')
    .select(`id, created_by, name, created_at`)
    .filter('id', 'in', infotag_ids);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

export async function getFollowersByCharacterId(character_id: number) {
  let { data, error, status } = await supabaseClient
    .from('followers')
    .select(`id, follower_id, followed_id, created_at`)
    .filter('followed_id', 'eq', character_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}
