import {
  getCharacterById,
  getCharactersByInfoTags
} from 'api/utils/characters';
import { getPostsByInfoTags, getPosts } from 'api/utils/posts';
import {
  getProfileInterests,
  getUserSubscriptionsByUserId,
  getCharacterFollowsByUserId
} from 'api/utils/profiles';

/// Character posts

// Get posts for characters that user is subscribed to
export async function getHomePostsSubscribedTo(user_id: string) {
  const subscriptions = await getUserSubscriptionsByUserId(user_id);
  const character_ids = subscriptions.map(
    (subscription: any) => subscription.character_id
  );
  return await getPosts(true, 20, undefined, character_ids);
}

// Get posts for characters that user is following
export async function getHomePostsFollowing(user_id: string) {
  const follows = await getCharacterFollowsByUserId(user_id);
  const character_ids = follows.map((character: any) => character.followed_id);
  return await getPosts(true, 20, undefined, character_ids);
}

// Get posts by infotags based on user interests
export async function getHomePostsByInfotags(user_id: string) {
  const interests = await getProfileInterests(user_id);
  const infotags = interests.map((interest: any) => interest.infotag_id);
  return await getPostsByInfoTags(infotags, 20);
}

// Get latest Posts
export async function getHomePostsLatest() {
  return await getPosts(true, 20, undefined, undefined);
}

/// Character profiles

// Get suggested characters by infotags based on user interests
export async function getHomeCharacterSuggestionsByInfotags(user_id: string) {
  const interests = await getProfileInterests(user_id);
  const infotags = interests.map((interest: any) => interest.infotag_id);
  return await getCharactersByInfoTags(infotags, 20);
}
