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

// getCustomLists('1dd94d8b-c048-4b21-8571-583296db317e', supabaseClient);
// getFollowerLists('1dd94d8b-c048-4b21-8571-583296db317e', supabaseClient);
