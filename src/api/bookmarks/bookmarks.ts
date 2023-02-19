import { getBookmarksByUser } from '../utils/bookmarks';

//import { supabaseClient } from '../../config/supabaseClient';

/// Bookmarks

// Get bookmarks
export async function getBookmarks(user_id: string, client: any) {
  const bookmarks = await getBookmarksByUser(user_id, client);
  return bookmarks;
}

// getBookmarks('e8a2be37-76f6-4ebb-bfd8-b9e370046a41', supabaseClient);
