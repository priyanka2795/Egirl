import { getUserSubscriptionsByUserId } from './profiles';
import { getCharactersByIds } from './characters';

export async function getSubscriptionsByUser(user_id: string, client: any) {
  let subscriptions = await getUserSubscriptionsByUserId(user_id, client);

  const character_ids = subscriptions.map(
    (subscription: any) => subscription.character_id
  );
  const character_ids_str = '(' + character_ids.join(',') + ')';

  const characters = await getCharactersByIds(character_ids_str, client);

  for (let i = 0; i < subscriptions.length; i++) {
    subscriptions[i].character = characters.data[i];
  }

  return { subscriptions, characters };
}
