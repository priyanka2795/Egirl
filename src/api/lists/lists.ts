import {
  getListsByUser,
  getFollowerListsByUser,
  addCharacterIdsToListByUser,
  addCustomList,
  getBlockedCharactersByUser,
  getBlockedProfilesByUser
} from '../utils/lists';

// import { supabaseClient } from '../../config/supabaseClient';

/// Lists

/// Getters

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

// Get blocked characters
export async function getBlockedCharacters(user_id: string, client: any) {
  const lists = await getBlockedCharactersByUser(user_id, client);
  return lists;
}

// Get blocked profiles
export async function getBlockedProfiles(user_id: string, client: any) {
  const lists = await getBlockedProfilesByUser(user_id, client);
  return lists;
}

/// Setters

// Create custom list
export async function createCustomList(
  user_id: string,
  list_name: string,
  character_ids: number[],
  client: any
) {
  const newCharacterIdList = await addCustomList(
    user_id,
    list_name,
    character_ids,
    client
  );
  return newCharacterIdList;
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
// createCustomList(
//   'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
//   'furries2',
//   [2, 3],
//   supabaseClient
// );
// addCharactersToList(
//   'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
//   [3, 2],
//   supabaseClient
// );

//getBlockedCharacters('e8a2be37-76f6-4ebb-bfd8-b9e370046a41', supabaseClient);
//getBlockedProfiles('e8a2be37-76f6-4ebb-bfd8-b9e370046a41', supabaseClient);
