import { supabaseClient } from '../../config/supabaseClient';

// TODOs: timeouts, closing channel logic
// step 1: FE fetches existing msg history for room
// step 2: on subscribe -> enters new msg into db and passes to FE
// step 3: channel.unsubscribe() when closes

export async function setupChannel(
  setCallHistory: any,
  callHistory: any,
  roomId: number,
  characterId: number,
  userId: string
) {
  const channel = supabaseClient.channel(`room:${roomId}`);

  channel.on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'messages_character_to_user',
      filter: `room_id=eq.${roomId}`
    },
    (payload) => {
      console.log(payload);
    }
  );

  channel.subscribe(async (status) => {
    if (status === 'SUBSCRIBED') {
      // TODO: edit hardcoded id
      const new_msg = {
        id: 3,
        room_id: roomId,
        recipient_id: userId,
        sender_id: characterId,
        message: 'Welcome to Realtime!'
      };
      const res = await supabaseClient
        .from('messages_character_to_user')
        .insert(new_msg);
      console.log(res);
      setCallHistory(...callHistory, new_msg);
    } else if (status == 'CLOSED') {
      // TODO: add this elsewhere based on user action
      console.log('Channel closed');
      channel.unsubscribe();
    }
  });
}

// Example
const setCallHistory = () => {};
const callHistory: any = [];
const roomId = 1;
const characterId = 1;
const userId = 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41';

setupChannel(setCallHistory, callHistory, roomId, characterId, userId);
