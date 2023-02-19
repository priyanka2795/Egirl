/// Getters

// Get blocked characters by user
export async function getBlockedCharactersByUser(user_id: string, client: any) {
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
