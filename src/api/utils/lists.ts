import { getPosts } from './posts';
import { getCharactersByIds } from './characters';

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
