import { getListsByUser } from '../utils/lists';

// import { supabaseClient } from '../../config/supabaseClient';

/// Lists

// Get lists
export async function getLists(user_id: string, client: any) {
  const lists = await getListsByUser(user_id, client);
  return lists;
}

// getLists('1dd94d8b-c048-4b21-8571-583296db317e', supabaseClient);
