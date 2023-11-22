import { getBookmarksByUser, createUserBookmark } from '../utils/bookmarks';



/// Bookmarks

// Get bookmarks
export async function getBookmarks(user_id: string, client: any) {
  const bookmarks = await getBookmarksByUser(user_id, client);
  return bookmarks;
}

// Create bookmark
export async function createBookmark(
  user_id: string,
  post_id: number,
  media_id: number,
  client: any
) {
  const bookmark = await createUserBookmark(user_id, post_id, media_id, client);
  return bookmark;
}



