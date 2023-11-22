import {
  getCharacterById,
  getCharactersByProfileTags
} from '../utils/characters';
import {
  getPostsByProfileTags,
  getPosts,
  createPost,
  getPostsLikedByUser
} from '../utils/posts';
import {
  getProfileInterests,
  getCharacterFollowsByUserId
} from '../utils/profiles';
import {
  getUserSubscriptionsByUserId
} from '../utils/subscriptions';
import { getBlockedCharacterIdsByUser } from '../utils/blocks';

import { getBookmarkedPostIdsByUser } from '../utils/bookmarks';

/// Getters

/// For you posts

/// Character posts

// Get posts for characters that user is subscribed to, i.e. subscription feed
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
  let posts = await getPosts(true, 20, client, undefined, character_ids_str);

  // Add bookmarked bool to each post
  posts = await addBookmarkedPostIdsToPosts(posts, user_id, client);
  console.log('getHomePostsSubscribedTo posts:', posts);
  return posts;
}

// Get posts for characters that user is following
export async function getHomePostsFollowing(user_id: string, client: any) {
  const follows = await getCharacterFollowsByUserId(user_id, client);
  const character_ids = follows.map((character: any) => character.followed_id);
  const character_ids_str = '(' + character_ids.join(',') + ')';
  let posts = await getPosts(true, 20, client, undefined, character_ids_str);
  posts = await addBookmarkedPostIdsToPosts(posts, user_id, client);
  console.log('getHomePostsFollowing posts:', posts);
  return posts;
}

// Get posts by profile tags based on user interests
// i.e. if interested in cat girl profiles, get posts of such profiles
export async function getHomePostsByProfileTags(user_id: string, client: any) {
  const interests = await getProfileInterests(user_id, client);
  const profile_tags = interests.map(
    (interest: any) => interest.profile_tag_id
  );
  const profile_tags_str = '{' + profile_tags.join(',') + '}';
  let posts = await getPostsByProfileTags(profile_tags_str, 20, client);
  
  // Add bookmarked bool to each post
  posts = await addBookmarkedPostIdsToPosts(posts, user_id, client);
  console.log('getHomePostsByProfileTags posts:', posts);
  return posts;
}

// Get posts liked by user
export async function getHomePostsLikedByUser(user_id: string, client: any) {
  const posts = await getPostsLikedByUser(user_id, client);
  console.log('getHomePostsLikedByUser posts:', posts);
  return posts;
}

// Get latest Posts
export async function getHomePostsLatest(client: any) {
  const posts = await getPosts(true, 20, client, undefined, undefined);
  return posts;
}

/// For you profiles

// Get suggested characters by profile tags based on user interests
export async function getHomeCharacterSuggestionsByProfileTags(
  user_id: string,
  client: any
) {
  const interests = await getProfileInterests(user_id, client);
  const profile_tag_ids = interests.map(
    (interest: any) => interest.profile_tag_id
  );
  const profile_tags_str = '{' + profile_tag_ids.join(',') + '}';
  console.log('THIS IS PROFILE TAGS STR', profile_tags_str);
  const characters = await getCharactersByProfileTags(
    profile_tags_str,
    20,
    client
  );
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
  profile_tag_ids: number[],
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
    profile_tag_ids,
    client
  );
  return post;
}

/// Utils

// Add bookmarked bool to each post
export async function addBookmarkedPostIdsToPosts(
  posts: any[],
  user_id: string,
  client: any
) {
  const bookmarkedPostIds = await getBookmarkedPostIdsByUser(user_id, client);
  const bookmarkedPostIdsArr = bookmarkedPostIds.map(
    (bookmark: any) => bookmark.post_id
  );
  posts.forEach((post: any) => {
    if (bookmarkedPostIdsArr.includes(post.id)) {
      post.is_bookmarked = true;
    } else {
      post.is_bookmarked = false;
    }
  });
  return posts;
}

