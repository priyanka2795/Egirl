/// Getters

// Get reported characters by user
export async function getReportedCharactersByUser(
  user_id: string,
  client: any
) {
  let { data, error, status } = await client
    .from('user_reports')
    .select(`user_id, reported_profile_id, reported_character_id, created_at`)
    .filter('user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  const character_ids = data.map(
    (reports: any) => reports.reported_character_id
  );
  const character_ids_str = '(' + character_ids.join(',') + ')';

  return character_ids;
}

// Get reported profiles by user
export async function getReportedProfilesByUser(user_id: string, client: any) {
  let { data, error, status } = await client
    .from('user_reports')
    .select(`user_id, reported_profile_id, reported_character_id, created_at`)
    .filter('user_id', 'eq', user_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  const profile_ids = data.map((reports: any) => reports.reported_profile_id);
  const profile_ids_str = '(' + profile_ids.join(',') + ')';

  return profile_ids;
}
