import { supabaseClient } from '../../config/supabaseClient';

// interface reference
// interface UserToCharMessage {
//     id: number;
//     sender_id: number;
//     recipient_id: string;
//     message: string;
//     created_at: string;
// }

// getting messages from a user to a character with a limit
export async function getUserToCharacterMessagesLim(
  sender_id: string,
  recipient_id: number,
  limit: number,
  client: any
) {
  let { data, error, status } = await client
    .from('messages_user_to_character')
    .select('id, sender_id, recipient_id, message, created_at')
    .eq('sender_id', sender_id)
    .eq('recipient_id', recipient_id)
    .limit(limit);
  if ((error && status !== 406) || !data) {
    throw error;
  }
  return data;
}

// getting messages from a user to a character without a limit
export async function getUserToCharacterMessages(
  sender_id: string,
  recipient_id: number,
  client: any
) {
  let { data, error, status } = await client
    .from('messages_user_to_character')
    .select('id, sender_id, recipient_id, message, created_at')
    .eq('sender_id', sender_id)
    .eq('recipient_id', recipient_id);
  if ((error && status !== 406) || !data) {
    throw error;
  }
  return data;
}

async function testUserToChar() {
  try {
    const messages = await getUserToCharacterMessagesLim(
      'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      1,
      20,
      supabaseClient
    );
    console.log(messages);
  } catch (error) {
    console.error(error);
  }
}
testUserToChar();

// getting messages from a character to a user with a limit
export async function getCharacterToUserMessagesLim(
  sender_id: number,
  recipient_id: string,
  limit: number,
  client: any
) {
  let { data, error, status } = await client
    .from('messages_character_to_user')
    .select('id, sender_id, recipient_id, message, created_at')
    .eq('sender_id', sender_id)
    .eq('recipient_id', recipient_id)
    .limit(limit);
  if ((error && status !== 406) || !data) {
    throw error;
  }
  return data;
}

// getting messages from a character to a user without a limit
export async function getCharacterToUserMessages(
  sender_id: number,
  recipient_id: string,
  client: any
) {
  let { data, error, status } = await client
    .from('messages_character_to_user')
    .select('id, sender_id, recipient_id, message, created_at')
    .eq('sender_id', sender_id)
    .eq('recipient_id', recipient_id);
  if ((error && status !== 406) || !data) {
    throw error;
  }
  return data;
}

async function testCharToUser() {
  try {
    const messages = await getCharacterToUserMessagesLim(
      1,
      'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      20,
      supabaseClient
    );
    console.log(messages);
  } catch (error) {
    console.error(error);
  }
}
testCharToUser();
