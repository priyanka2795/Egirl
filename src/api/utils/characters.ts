import { getPosts } from './posts';
import { getSubscriptions } from './subscriptions';

/// Getters

// Get character by id
export async function getCharacterById(character_id: number, client: any) {
  let { data, error, status } = await client
    .from('characters')
    .select(
      `username, display_name, is_verified, bio, creator_id, profile_picture, profile_banner_picture, character_profile_tag_ids, created_at`
    )
    .filter('id', 'eq', character_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  const character_id_str = '(' + character_id + ')';
  const posts = await getPosts(true, 20, client, undefined, character_id_str);
  const numPosts = posts.clientData.length;

  let user_subscriptions = await getUserSubscriptionsByCharacterId(
    character_id,
    client
  );

  const subscription_metadata = await getSubscriptions(client);

  user_subscriptions = user_subscriptions.map((sub: any) => {
    const subscription = subscription_metadata.find(
      (m: any) => m.id === sub.subscription_id
    );
    return {
      ...sub,
      subscription_name: subscription.subscription_name,
      subscription_price: subscription.subscription_price,
      subscription_tier: subscription.subscription_tier
    };
  });

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

  const character_profile_tag_ids = data[0]['character_profile_tag_ids'];

  const character_profile_tags = await getCharacterProfileTagsByProfileTagIds(
    '(' + character_profile_tag_ids.join(',') + ')',
    client
  );

  // Can extend this later for loading list of followers
  const followers = await getFollowersByCharacterId(character_id, client);
  const follower_count = followers.length;

  return {
    data,
    numPosts,
    posts,
    total_subscriptions,
    user_subscriptions,
    character_profile_tags,
    follower_count,
    followers
  };
}

// Get characters by profile tag ids
export async function getCharactersByProfileTags(
  character_profile_tag_ids: string,
  limit: number,
  client: any
) {
  let { data, error, status } = await client
    .from('characters')
    .select(
      `id, username, display_name, is_verified, bio, creator_id, profile_picture, profile_banner_picture, character_profile_tag_ids, created_at`
    )
    .filter('character_profile_tag_ids', 'cs', character_profile_tag_ids)
    .limit(limit);

  if ((error && status !== 406) || !data) {
    console.log('Error getting characters by profile tags: ', error);
    throw error;
  }

  let final_subscriptions: any = {};
  let final_profile_tags: any = {};
  let final_follower_count: any = {};

  for (let i = 0; i < data.length; i++) {
    const character_id = data[i].id;
    const user_subscriptions = await getUserSubscriptionsByCharacterId(
      character_id,
      client
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

    final_subscriptions[i] = total_subscriptions;

    const character_profile_tag_ids = data[0]['character_profile_tag_ids'];
    console.log('character_profile_tag_ids: ', character_profile_tag_ids);

    const character_profile_tags = await getCharacterProfileTagsByProfileTagIds(
      '(' + character_profile_tag_ids.join(',') + ')',
      client
    );

    console.log('character_profile_tags: ', character_profile_tags);

    final_profile_tags[i] = character_profile_tags;

    // Can extend this later for loading list of followers
    const followers = await getFollowersByCharacterId(character_id, client);
    const follower_count = followers.length;

    final_follower_count[i] = follower_count;
  }

  // combine clientData, final_post_likes, final_comments, final_media, final_profile_tags into one list of Post JSON
  for (let i = 0; i < data.length; i++) {
    data[i]['total_subscriptions'] = final_subscriptions[i];
    data[i]['character_profile_tags'] = final_profile_tags[i];
    data[i]['follower_count'] = final_follower_count[i];
  }

  return data;
}

// Get characters by ids
export async function getCharactersByIds(character_ids: string, client: any) {
  let { data, error, status } = await client
    .from('characters')
    .select(
      `id, username, display_name, is_verified, bio, creator_id, profile_picture, profile_banner_picture, character_profile_tag_ids, created_at`
    )
    .filter('id', 'in', character_ids);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return { data };
}

// Get subscriptions by character id
export async function getUserSubscriptionsByCharacterId(
  character_id: number,
  client: any
) {
  let { data, error, status } = await client
    .from('user_subscriptions')
    .select(`id, user_id, character_id, subscription_id, created_at`)
    .filter('character_id', 'eq', character_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

// Get character profile tags by info tag ids
export async function getCharacterProfileTagsByProfileTagIds(
  character_profile_tag_ids: string,
  client: any
) {
  let { data, error, status } = await client
    .from('profile_tags')
    .select(`id, name, created_at`)
    .filter('id', 'in', character_profile_tag_ids);

  if ((error && status !== 406) || !data) {
    console.log(
      'Error getting character profile tags by profile tag ids: ',
      error
    );
    throw error;
  }

  return data;
}

// Get followers by character id
export async function getFollowersByCharacterId(
  character_id: number,
  client: any
) {
  let { data, error, status } = await client
    .from('followers')
    .select(`id, follower_id, followed_id, created_at`)
    .filter('followed_id', 'eq', character_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

/// Setters

// Create character profile
export async function createCharacterProfile(
  username: string,
  display_name: string,
  is_verified: boolean,
  bio: string,
  creator_id: number,
  profile_picture: string,
  profile_banner_picture: string,
  infotag_ids: number[],
  client: any
) {
  let character_profile_data = {
    username,
    display_name,
    is_verified,
    bio,
    creator_id,
    profile_picture,
    profile_banner_picture,
    infotag_ids
  };

  let { data, error, status } = await client
    .from('characters')
    .insert([character_profile_data])
    .single();

  if (error && status !== 201) {
    throw error;
  }

  return character_profile_data;
}
