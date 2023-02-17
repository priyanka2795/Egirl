import {
  getListsByUser,
  getFollowerListsByUser,
  addCharacterIdsToListByUser
} from '../utils/lists';

import { supabaseClient } from '../../config/supabaseClient';

/// Lists

// Get custom lists
export async function getCustomLists(user_id: string, client: any) {
  const lists = await getListsByUser(user_id, client);
  return lists;
}

// Get followers (default list)
export async function getFollowerLists(user_id: string, client: any) {
  const lists = await getFollowerListsByUser(user_id, client);
  return lists;
}

// Add characters to lists
export async function addCharactersToList(
  user_id: string,
  character_ids: number[],
  client: any
) {
  const newCharacterIdList = await addCharacterIdsToListByUser(
    user_id,
    character_ids,
    client
  );
  return newCharacterIdList;
}

//getCustomLists('e8a2be37-76f6-4ebb-bfd8-b9e370046a41', supabaseClient);
// getFollowerLists('e8a2be37-76f6-4ebb-bfd8-b9e370046a41', supabaseClient);
// addCharactersToList(
//   'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
//   [3, 2],
//   supabaseClient
// );
