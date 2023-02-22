import { supabaseClient } from '../../config/supabaseClient';

// TODOs: timeouts, closing channel logic
// step 1: FE fetches existing msg history for room
// step 2: on subscribe -> enters new msg into db and passes to FE
// step 3: channel.unsubscribe() when closes

// TODO: where is loop?
// Is it on client side in realtime params?

async function getLatestMsgId() {
  const { data, error } = await supabaseClient
    .from('messages_character_to_user')
    .select('id')
    .order('id', { ascending: false })
    .limit(1);

  if (error) {
    console.log(error);
  }

  return data[0].id;
}

export async function setupChannel(
  setCallHistory: any,
  callHistory: any,
  roomId: number,
  characterId: number,
  userId: string,
  initialBalance: number,
  costPerMsg: number,
  timeoutThreshold: number // in seconds
) {
  const channel = supabaseClient.channel(`room:${roomId}`);

  let balance = initialBalance;
  let cost = costPerMsg;

  let latestCharacterMsgTime = new Date();
  let timedOut = false;

  channel.on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'messages_character_to_user',
      filter: `room_id=eq.${roomId}`
    },
    (payload: any) => {
      console.log(payload);
    }
  );

  channel.subscribe(async (status: any) => {
    if (
      new Date().getTime() - latestCharacterMsgTime.getTime() >
      1000 * timeoutThreshold
    ) {
      console.log('Timeout threshold exceeded');
      timedOut = true;
    } else {
      latestCharacterMsgTime = new Date();
    }

    if (status === 'SUBSCRIBED' && balance >= cost && !timedOut) {
      const nextMsgId = (await getLatestMsgId()) + 1;
      const new_msg = {
        id: nextMsgId,
        room_id: roomId,
        recipient_id: userId,
        sender_id: characterId,
        message: 'Welcome to Realtime!'
      };
      const res = await supabaseClient
        .from('messages_character_to_user')
        .insert(new_msg);
      console.log(res);
      balance -= cost;
      setCallHistory(...callHistory, new_msg);
      console.log('added to call history..');
    } else if (status == 'CLOSED' || balance < cost || timedOut) {
      // TODO: add this elsewhere based on user action
      console.log('Channel closed');
      channel.unsubscribe(); // closes channel
    }
  });
}

// Example
const setCallHistory = () => {};
const callHistory: any = [];
const roomId = 1;
const characterId = 1;
const userId = 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41';
const initialBalance = 0.5;
const costPerMsg = 0.1;
const timeoutThreshold = 30;

setupChannel(
  setCallHistory,
  callHistory,
  roomId,
  characterId,
  userId,
  initialBalance,
  costPerMsg,
  timeoutThreshold
);
