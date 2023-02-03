import { getCharacterById, getCharactersByInfoTags } from '../utils/characters';

//import { supabaseClient } from '../../config/supabaseClient';

/// Character profile

// Get character profile
export async function getCharacter(character_id: number, client: any) {
  const character = await getCharacterById(character_id, client);
  return character;
}

//getCharacter(3, supabaseClient);
