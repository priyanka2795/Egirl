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

  interface UserToCharacterMessage {
    id: number;
    sender_id: string;
    recipient_id: number;
    message: string;
    created_at: string;
  }

  interface CharacterToUserMessage {
    id: number;
    sender_id: string;
    recipient_id: number;
    message: string;
    created_at: string;
  }

  // adding who_is_sender field to user messages
  const userMessagesWithSender = userMessages.map(
    (message: UserToCharacterMessage) => ({
      ...message,
      who_is_sender:
        typeof message.sender_id === 'number' ? 'character' : 'user'
    })
  );

  // adding who_is_sender field to character messages
  const characterMessagesWithSender = characterMessages.map(
    (message: CharacterToUserMessage) => ({
      ...message,
      who_is_sender:
        typeof message.sender_id === 'number' ? 'character' : 'user'
    })
  );

  // merging and sorting messages by created_at field in ascending order
  const messages = [...userMessagesWithSender, ...characterMessagesWithSender];
  messages.sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  // extracting messages content with who_is_sender from messsages array
  const arrMessages = messages.map((message) => ({
    message: message.message,
    who_is_sender: message.who_is_sender
  }));

  //   const messages = [...userMessages, ...characterMessages];

  //   messages.sort(
  //     (a, b) =>
  //       new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  //   );

  //   const arrMessages = messages.map((message) => message.message);
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

  interface UserToCharacterMessage {
    id: number;
    sender_id: string;
    recipient_id: number;
    message: string;
    created_at: string;
  }

  interface CharacterToUserMessage {
    id: number;
    sender_id: string;
    recipient_id: number;
    message: string;
    created_at: string;
  }

  // adding who_is_sender field to user messages
  const userMessagesWithSender = userMessages.map(
    (message: UserToCharacterMessage) => ({
      ...message,
      who_is_sender:
        typeof message.sender_id === 'number' ? 'character' : 'user'
    })
  );

  // adding who_is_sender field to character messages
  const characterMessagesWithSender = characterMessages.map(
    (message: CharacterToUserMessage) => ({
      ...message,
      who_is_sender:
        typeof message.sender_id === 'number' ? 'character' : 'user'
    })
  );

  // merging and sorting messages by created_at field in ascending order
  const messages = [...userMessagesWithSender, ...characterMessagesWithSender];
  messages.sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  // extracting latest 20 messages content with who_is_sender from messsages array
  const latestMessages = messages.slice(0, 20).map((message) => ({
    message: message.message,
    who_is_sender: message.who_is_sender
  }));

  // -------------

  //   // this uses the spread operator to concatenate the userMessages and characterMessages arrays
  //   const messages = [...userMessages, ...characterMessages];
  //     console.log(messages)

  //   // sorting messages by created_at field in ascending order
  //   messages.sort(
  //     (a, b) =>
  //       new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  //   );

  //   // extracting latest 20 messages content from messsages array
  //   // const latestMessages = messages.slice(0, 20).map((message) => message.message);
  //   const latestMessages = messages.slice(-20).map((message) => message.message);

  // -------------

  console.log(latestMessages);
  return latestMessages;
}
getLastTwentyUserCharChat(
  'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
  1,
  supabaseClient
);

// add who is the sender

// {
//     id: 1,
//     sender_id: 1,
//     recipient_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
//     message: 'hey uwu uwu something something',
//     who_is_sender: 'character'
//     created_at: '2016-07-24T03:32:45.678'
// }
