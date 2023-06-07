import { getPosts } from './posts';

/// Getters

// Get profile by user id
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

// Get profiles by ids
export async function getProfilesByIds(user_ids: string, client: any) {
  let { data, error, status } = await client
    .from('profile')
    .select(
      `user_id, username, display_name, bio, profile_picture, profile_banner_picture, created_at`
    )
    .filter('user_id', 'in', user_ids);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return { data };
}

// Get profile tag based interests by user id
export async function getProfileInterests(user_id: string, client: any) {
  let { data, error, status } = await client
    .from('user_interests')
    .select(`id, user_id, profile_tag_id, created_at`)
    .filter('user_id', 'eq', user_id);
  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

// Get character follows by user id
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

/// Setters

// Create user profile
export async function createUserProfile(
  user_id: string,
  username: string,
  display_name: string,
  bio: string,
  location: string,
  profile_picture: string,
  profile_banner_picture: string,
  client: any
) {
  let profile_data = {
    user_id,
    username,
    display_name,
    bio,
    location,
    profile_picture,
    profile_banner_picture
  };

  let { data, error, status } = await client
    .from('profile')
    .insert([profile_data])
    .single();

  if (error && status !== 201) {
    throw error;
  }

  return profile_data;
}

// Add user interest
export async function addUserInterest(
  user_id: string,
  profile_tag_id: number,
  client: any
) {
  let interest_data = {
    user_id,
    profile_tag_id
  };

  let { data, error, status } = await client
    .from('user_interests')
    .insert([interest_data])
    .single();

  if (error && status !== 201) {
    throw error;
  }

  return interest_data;
}
