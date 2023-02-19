import { getPosts } from './posts';
import { getCharactersByIds } from './characters';
import { getCharacterFollowsByUserId } from './profiles';
import {
  getBlockedCharactersForUser,
  getBlockedProfilesForUser
} from './blocks';

/// Getters

// Get custom lists by user
export async function getListsByUser(user_id: string, client: any) {
  let { data, error, status } = await client
    .from('lists')
    .select(`user_id, list_name, character_ids, created_at`)
    .filter('user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  let final_characters: any = {};

  for (let i = 0; i < data.length; i++) {
    const character_ids = data[i].character_ids;
    const character_ids_str = '(' + character_ids.join(',') + ')';
    const characters = await getCharactersByIds(character_ids_str, client);
    final_characters[i] = characters;
  }

  return { data, final_characters };
}

// Get follower lists by user
export async function getFollowerListsByUser(user_id: string, client: any) {
  let characterFollows = await getCharacterFollowsByUserId(user_id, client);

  let character_ids = characterFollows.map((follow: any) => follow.followed_id);

  const character_ids_str = '(' + character_ids.join(',') + ')';
  const characters = await getCharactersByIds(character_ids_str, client);
  return { characters };
}

// Get blocked characters
export async function getBlockedCharactersByUser(user_id: string, client: any) {
  let blockedCharacters = await getBlockedCharactersForUser(user_id, client);
  return { blockedCharacters };
}

// Get blocked profiles
export async function getBlockedProfilesByUser(user_id: string, client: any) {
  let blockedProfiles = await getBlockedProfilesForUser(user_id, client);
  return { blockedProfiles };
}

/// Setters

// Add custom list
export async function addCustomList(
  user_id: string,
  list_name: string,
  character_ids: number[],
  client: any
) {
  let user_data = {
    user_id,
    list_name,
    character_ids,
    created_at: new Date().toISOString()
  };
  let { data, error, status } = await client.from('lists').insert([user_data]);

  if (error && status !== 201) {
    console.log('Error in addCustomList:', error);
    throw error;
  }

  return user_data;
}

// Add character ids to list by user
export async function addCharacterIdsToListByUser(
  user_id: string,
  character_ids: number[],
  client: any
) {
  let { data, error, status } = await client
    .from('lists')
    .select(`id, user_id, list_name, character_ids, created_at`)
    .filter('user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  if (data.length > 1) {
    throw 'More than one list for user';
  }

  let character_ids_to_add = character_ids;

  let current_character_ids = data[0].character_ids;

  character_ids_to_add = character_ids_to_add.filter(
    (id: number) => !current_character_ids.includes(id)
  );

  let list_id = data[0].id;
  let list_name = data[0].list_name;

  character_ids_to_add = current_character_ids.concat(character_ids_to_add);

  let {
    data: dataInsert,
    error: errorInsert,
    status: statusInsert
  } = await client.from('lists').upsert([
    {
      id: list_id,
      list_name: list_name,
      user_id: user_id,
      character_ids: character_ids_to_add
    }
  ]);

  if (errorInsert && statusInsert !== 201) {
    throw errorInsert;
  }

  return character_ids_to_add;
}
