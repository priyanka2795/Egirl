import { getPosts } from './posts';

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
