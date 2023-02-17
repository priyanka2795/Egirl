import { getPosts } from './posts';

export async function getProfile(user_id: string, client: any) {
  let { data, error, status } = await client
    .from('profile')
    .select(
      `user_id, username, display_name, bio, location, profile_picture, profile_banner_picture, created_at`
    )
    .filter('user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  const user_id_str = '(' + user_id + ')';
  const posts = await getPosts(true, 20, client, user_id_str, undefined);
  const numPosts = posts.clientData.length;

  return { data, numPosts, posts };
}

export async function getProfileInterests(user_id: string, client: any) {
  let { data, error, status } = await client
    .from('interests')
    .select(`id, user_id, infotag_id, created_at`)
    .filter('user_id', 'eq', user_id);
  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

export async function getCharacterFollowsByUserId(
  user_id: string,
  client: any
) {
  let { data, error, status } = await client
    .from('followers')
    .select(`id, follower_id, followed_id, created_at`)
    .filter('follower_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

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
