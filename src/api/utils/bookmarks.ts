import { getPosts } from './posts';

/// Getters

// Get bookmarks by user
export async function getBookmarksByUser(user_id: string, client: any) {
  let { data, error, status } = await client
    .from('bookmarks')
    .select(`user_id, post_id, media_id, created_at`)
    .filter('user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  const post_ids = data.map((bookmark: any) => bookmark.post_id);
  const post_id_str = '(' + post_ids.join(',') + ')';

  const posts = await getPosts(true, 20, client, undefined, post_id_str);

  return { data, posts };
}

// Get bookmarked post ids by user
export async function getBookmarkedPostIdsByUser(user_id: string, client: any) {
  let { data, error, status } = await client
    .from('bookmarks')
    .select(`user_id, post_id, media_id, created_at`)
    .filter('user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }
  return data;
}

/// Setters

// Create user bookmark
export async function createUserBookmark(
  user_id: string,
  post_id: number,
  media_id: number,
  client: any
) {
  let { data, error, status } = await client
    .from('bookmarks')
    .insert([
      {
        user_id,
        post_id,
        media_id,
        created_at: new Date().toISOString(),
      },
    ])
    .single();

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}