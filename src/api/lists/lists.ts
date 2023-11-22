import {
  getListsByUser,
  getFollowerListsByUser,
  addCharacterIdsToListByUser,
  addCustomList,
  getBlockedCharactersByUser,
  getBlockedProfilesByUser
} from '../utils/lists';


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

