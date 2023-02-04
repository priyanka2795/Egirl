import { getBookmarksByUser } from '../utils/bookmarks';

//import { supabaseClient } from '../../config/supabaseClient';

/// Bookmarks

// Get bookmarks
export async function getBookmarks(user_id: string, client: any) {
  const bookmarks = await getBookmarksByUser(user_id, client);
  return bookmarks;
}

// getBookmarks('1dd94d8b-c048-4b21-8571-583296db317e', supabaseClient);
