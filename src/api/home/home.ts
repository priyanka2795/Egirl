import { getCharacterById, getCharactersByInfoTags } from '../utils/characters';
import { getPostsByInfoTags, getPosts } from '../utils/posts';
import {
  getProfileInterests,
  getUserSubscriptionsByUserId,
  getCharacterFollowsByUserId
} from '../utils/profiles';

/// Character posts

// Get posts for characters that user is subscribed to
export async function getHomePostsSubscribedTo(user_id: string) {
  const subscriptions = await getUserSubscriptionsByUserId(user_id);
  const character_ids = subscriptions.map(
    (subscription: any) => subscription.character_id
  );
  const character_ids_str = '(' + character_ids.join(',') + ')';
  const posts = await getPosts(true, 20, undefined, character_ids_str);
  return posts;
}

// Get posts for characters that user is following
export async function getHomePostsFollowing(user_id: string) {
  const follows = await getCharacterFollowsByUserId(user_id);
  const character_ids = follows.map((character: any) => character.followed_id);
  const character_ids_str = '(' + character_ids.join(',') + ')';
  const posts = await getPosts(true, 20, undefined, character_ids_str);
  return posts;
}

// Get posts by infotags based on user interests
export async function getHomePostsByInfoTags(user_id: string) {
  const interests = await getProfileInterests(user_id);
  const infotags = interests.map((interest: any) => interest.infotag_id);
  const infotags_str = '{' + infotags.join(',') + '}';
  const posts = await getPostsByInfoTags(infotags_str, 20);
  return posts;
}

// Get latest Posts
export async function getHomePostsLatest() {
  const posts = await getPosts(true, 20, undefined, undefined);
  return posts;
}

/// Character profiles

// Get suggested characters by infotags based on user interests
export async function getHomeCharacterSuggestionsByInfotags(user_id: string) {
  const interests = await getProfileInterests(user_id);
  const infotags = interests.map((interest: any) => interest.infotag_id);
  const infotags_str = '{' + infotags.join(',') + '}';
  const characters = await getCharactersByInfoTags(infotags_str, 20);
  return characters;
}

//getHomePostsSubscribedTo('1dd94d8b-c048-4b21-8571-583296db317e');
//getHomePostsFollowing('1dd94d8b-c048-4b21-8571-583296db317e');
//getHomePostsByInfoTags('1dd94d8b-c048-4b21-8571-583296db317e');
//getHomePostsLatest();
//getHomeCharacterSuggestionsByInfotags('1dd94d8b-c048-4b21-8571-583296db317e');
