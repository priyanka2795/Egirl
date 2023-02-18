import {
  getUserToCharacterMessages,
  getCharacterToUserMessages,
  getUserToCharacterMessagesLim,
  getCharacterToUserMessagesLim
} from '../utils/messages';

import { supabaseClient } from '../../config/supabaseClient';

// this will grab the entire chat history between the user and the character
export async function getAllUserCharChat(
  user_id: string,
  character_id: number,
  client: any
) {
  let userMessages = await getUserToCharacterMessages(
    user_id,
    character_id,
    client
  );
  let characterMessages = await getCharacterToUserMessages(
    character_id,
    user_id,
    client
  );

  const messages = [...userMessages, ...characterMessages];

  messages.sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  const arrMessages = messages.map((message) => message.message);
  console.log(arrMessages);
  return arrMessages;
}
// getAllUserCharChat('e8a2be37-76f6-4ebb-bfd8-b9e370046a41', 1, supabaseClient);

// --------------------------------------------------------------------------------

// this will grab the last 20 chats between the User and Character
// chats will simply be the last twenty rows of the table from the chat between BOTH users
// this means if the user or character has sent 20 chats in a row, those will be the ones that are grabbed
// First index: Most recent message (of the 20)
// Last index: Most non-recent message (of the 20)
export async function getLastTwentyUserCharChat(
  user_id: string,
  character_id: number,
  client: any
) {
  let userMessages = await getUserToCharacterMessagesLim(
    user_id,
    character_id,
    20,
    client
  );
  let characterMessages = await getCharacterToUserMessagesLim(
    character_id,
    user_id,
    20,
    client
  );

  // this uses the spread operator to concatenate the userMessages and characterMessages arrays
  const messages = [...userMessages, ...characterMessages];

  // sorting messages by created_at field in descending order
  messages.sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  // extracting latest 20 messages content from messsages array
  // const latestMessages = messages.slice(0, 20).map((message) => message.message);
  const latestMessages = messages.slice(-20).map((message) => message.message);

  console.log(latestMessages);
  return latestMessages;
}
// getLastTwentyUserCharChat('e8a2be37-76f6-4ebb-bfd8-b9e370046a41', 1, supabaseClient);
