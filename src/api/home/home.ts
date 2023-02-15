import { getCharacterById, getCharactersByInfoTags } from '../utils/characters';
import { getPostsByInfoTags, getPosts } from '../utils/posts';
import {
  getProfileInterests,
  getUserSubscriptionsByUserId,
  getCharacterFollowsByUserId
} from '../utils/profiles';
import { getBlockedCharactersByUser } from '../utils/blocks';
//import { supabaseClient } from '../../config/supabaseClient';

/// Character posts

// Get posts for characters that user is subscribed to
export async function getHomePostsSubscribedTo(user_id: string, client: any) {
  const subscriptions = await getUserSubscriptionsByUserId(user_id, client);
  const character_ids = subscriptions.map(
    (subscription: any) => subscription.character_id
  );
  const blockedCharacters = await getBlockedCharactersByUser(user_id, client);
  const final_character_ids = character_ids.filter(
    (character: any) => !blockedCharacters.includes(character)
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
export async function getHomePostsLatest() {
  const posts = await getPosts(true, 20, undefined, undefined);
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

// getHomePostsSubscribedTo(
//   'a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd',
//   supabaseClient
// );
//getHomePostsSubscribedTo('e8a2be37-76f6-4ebb-bfd8-b9e370046a41');
//getHomePostsFollowing('e8a2be37-76f6-4ebb-bfd8-b9e370046a41');
//getHomePostsByInfoTags('e8a2be37-76f6-4ebb-bfd8-b9e370046a41');
//getHomePostsLatest();
//getHomeCharacterSuggestionsByInfotags('e8a2be37-76f6-4ebb-bfd8-b9e370046a41');
