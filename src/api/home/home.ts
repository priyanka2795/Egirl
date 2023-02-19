import { getCharacterById, getCharactersByInfoTags } from '../utils/characters';
import { getPostsByInfoTags, getPosts, createPost } from '../utils/posts';
import {
  getProfileInterests,
  getUserSubscriptionsByUserId,
  getCharacterFollowsByUserId
} from '../utils/profiles';
import { getBlockedCharacterIdsByUser } from '../utils/blocks';
//import { supabaseClient } from '../../config/supabaseClient';

/// Getters

/// Character posts

// Get posts for characters that user is subscribed to
export async function getHomePostsSubscribedTo(user_id: string, client: any) {
  const subscriptions = await getUserSubscriptionsByUserId(user_id, client);
  const character_ids = subscriptions.map(
    (subscription: any) => subscription.character_id
  );
  const blockedCharacterIds = await getBlockedCharacterIdsByUser(
    user_id,
    client
  );
  const final_character_ids = character_ids.filter(
    (character: any) => !blockedCharacterIds.includes(character)
  );
  const character_ids_str = '(' + final_character_ids.join(',') + ')';
  const posts = await getPosts(true, 20, client, undefined, character_ids_str);
  return posts;
}

// Get posts for characters that user is following
export async function getHomePostsFollowing(user_id: string, client: any) {
  const follows = await getCharacterFollowsByUserId(user_id, client);
  const character_ids = follows.map((character: any) => character.followed_id);
  const character_ids_str = '(' + character_ids.join(',') + ')';
  const posts = await getPosts(true, 20, client, undefined, character_ids_str);
  return posts;
}

// Get posts by infotags based on user interests
export async function getHomePostsByInfoTags(user_id: string, client: any) {
  const interests = await getProfileInterests(user_id, client);
  const infotags = interests.map((interest: any) => interest.infotag_id);
  const infotags_str = '{' + infotags.join(',') + '}';
  const posts = await getPostsByInfoTags(infotags_str, 20, client);
  return posts;
}

// Get latest Posts
export async function getHomePostsLatest(client: any) {
  const posts = await getPosts(true, 20, client, undefined, undefined);
  return posts;
}

/// Character profiles

// Get suggested characters by infotags based on user interests
export async function getHomeCharacterSuggestionsByInfotags(
  user_id: string,
  client: any
) {
  const interests = await getProfileInterests(user_id, client);
  const infotags = interests.map((interest: any) => interest.infotag_id);
  const infotags_str = '{' + infotags.join(',') + '}';
  const characters = await getCharactersByInfoTags(infotags_str, 20, client);
  return characters;
}

/// Setters

export async function createCharacterPost(
  user_id: number,
  character_id: number,
  title: string,
  description: string,
  prompt_description: string,
  is_ppv: boolean,
  is_character_post: boolean,
  infotags_id: number[],
  client: any
) {
  // TODO: validation
  const post = await createPost(
    user_id,
    character_id,
    title,
    description,
    prompt_description,
    is_ppv,
    is_character_post,
    infotags_id,
    client
  );
  return post;
}

// getHomePostsSubscribedTo(
//   'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
//   supabaseClient
// );
//getHomePostsSubscribedTo('e8a2be37-76f6-4ebb-bfd8-b9e370046a41');
//getHomePostsFollowing('e8a2be37-76f6-4ebb-bfd8-b9e370046a41', supabaseClient);
//getHomePostsByInfoTags('e8a2be37-76f6-4ebb-bfd8-b9e370046a41', supabaseClient);
//getHomePostsLatest(supabaseClient);
// getHomeCharacterSuggestionsByInfotags(
//   'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
//   supabaseClient
// );
