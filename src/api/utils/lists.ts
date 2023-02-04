import { getPosts } from './posts';
import { getCharactersByIds } from './characters';
import { getCharacterFollowsByUserId } from './profiles';

export async function getCustomListsByUser(user_id: string, client: any) {
  let { data, error, status } = await client
    .from('custom_lists')
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

export async function getFollowerListsByUser(user_id: string, client: any) {
  let characterFollows = await getCharacterFollowsByUserId(user_id, client);

  let character_ids = characterFollows.map((follow: any) => follow.followed_id);

  const character_ids_str = '(' + character_ids.join(',') + ')';
  const characters = await getCharactersByIds(character_ids_str, client);
  return { characters };
}
