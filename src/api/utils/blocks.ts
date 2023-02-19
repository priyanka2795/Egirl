import { getCharactersByIds } from './characters';

/// Getters

// Get blocked characters by user
export async function getBlockedCharacterIdsByUser(
  user_id: string,
  client: any
) {
  let { data, error, status } = await client
    .from('user_blocks')
    .select(`user_id, blocked_profile_id, blocked_character_id, created_at`)
    .filter('user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  const character_ids = data.map((blocks: any) => blocks.blocked_character_id);
  const character_ids_str = '(' + character_ids.join(',') + ')';

  return character_ids;
}

/// Get blocked profiles by user
export async function getBlockedProfilesByUser(user_id: string, client: any) {
  let { data, error, status } = await client
    .from('user_blocks')
    .select(`user_id, blocked_profile_id, blocked_character_id, created_at`)
    .filter('user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  const profile_ids = data.map((blocks: any) => blocks.blocked_profile_id);
  const profile_ids_str = '(' + profile_ids.join(',') + ')';

  return profile_ids;
}

// Get blocked characters
export async function getBlockedCharactersForUser(
  user_id: string,
  client: any
) {
  let characterBlocks = await getBlockedCharacterIdsByUser(user_id, client);

  let blocked_character_ids = characterBlocks.map(
    (follow: any) => follow.blocked_character_id
  );

  const character_ids_str = '(' + blocked_character_ids.join(',') + ')';
  const characters = await getCharactersByIds(character_ids_str, client);
  return { characters };
}
