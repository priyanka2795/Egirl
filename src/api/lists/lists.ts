import { getCustomListsByUser, getFollowerListsByUser } from '../utils/lists';

// import { supabaseClient } from '../../config/supabaseClient';

/// Lists

// Get custom lists
export async function getCustomLists(user_id: string, client: any) {
  const lists = await getCustomListsByUser(user_id, client);
  return lists;
}

// Get followers (default list)
export async function getFollowerLists(user_id: string, client: any) {
  const lists = await getFollowerListsByUser(user_id, client);
  console.log('lists: ', lists);
  return lists;
}

// getCustomLists('e8a2be37-76f6-4ebb-bfd8-b9e370046a41', supabaseClient);
// getFollowerLists('e8a2be37-76f6-4ebb-bfd8-b9e370046a41', supabaseClient);
