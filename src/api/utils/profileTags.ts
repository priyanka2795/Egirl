// Getters

// Get profile tags for a character
export async function getCharacterProfileTagsByCharacter(
  character_id: number,
  client: any
) {
  let { data, error, status } = await client
    .from('character_profile_tags')
    .select(`id, character_id, character_profile_tag, created_at`)
    .filter('character_id', 'eq', character_id);

  if (error && status !== 406) {
    throw error;
  }

  return data;
}

// Get profile tag id by name
export async function getProfileTagIdByName(name: string, client: any) {
  let { data, error, status } = await client
    .from('profile_tags')
    .select(`id, name, created_at`)
    .filter('name', 'eq', name)
    .single();

  if (error && status !== 406) {
    throw error;
  }

  return data['id'];
}

// Get all profile tags
export async function getAllProfileTags(client: any) {
  let { data, error, status } = await client
    .from('profile_tags')
    .select('*')
    .order('created_at', { ascending: false });

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

// Get all characters that have a particular profile tag
export async function getCharactersByProfileTag(name: string, client: any) {
  let profile_tag_id = await getProfileTagIdByName(name, client);
  let { data, error, status } = await client
    .from('character_profile_tags')
    .select('*')
    .filter('character_profile_tag_id', 'eq', profile_tag_id)
    .order('created_at', { ascending: false });

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

// Setters

// Create a profile tag
export async function createProfileTag(name: string, client: any) {
  let { data, error, status } = await client
    .from('profile_tags')
    .insert([{ name }])
    .single();

  if (error && status !== 201) {
    throw error;
  }

  return data;
}

// Create a character profile tag
export async function createCharacterProfileTag(
  character_id: number,
  name: string,
  client: any
) {
  let character_profile_tag_id = await getProfileTagIdByName(name, client);
  let { data, error, status } = await client
    .from('character_profile_tags')
    .insert([{ character_id, character_profile_tag_id }])
    .single();

  if (error && status !== 201) {
    throw error;
  }

  return data;
}
