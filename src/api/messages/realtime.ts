

// TODO: need to do inference on chatbot model
// for actually generating the msgs
// and then replace hardcoded msgs below

// TODO: where is loop?
// Is it on client side in realtime params?

// TODOs: timeouts, closing channel logic
// step 1: FE fetches existing msg history for room
// step 2: on subscribe -> enters new msg into db and passes to FE
// step 3: channel.unsubscribe() when closes

const characterMsgModelEndpoint =
  'https://api-inference.huggingface.co/models/gpt2';

async function getLatestMsgId(client: any) {
  const { data, error } = await client
    .from('messages_character_to_user')
    .select('id')
    .order('id', { ascending: false })
    .limit(1);

  if (error) {
    console.log(error);
  }

  return data[0].id;
}

// Get character message to user
export async function getCharacterMessageToUser(
  roomId: number,
  characterId: number,
  userId: string,
  message: string,
  client: any
) {
  let modelMsg = message;
  // let modelMsg = await fetch(characterMsgModelEndpoint, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //         inputs: 'Welcome to Realtime!',
  //         parameters: {
  //           max_length: 100,
  //           temperature: 0.7,
  //           }
  //           })})
  //           .then((res) => res.json())
  //           .then((res) => res.generated_text)
  //           .catch((err) => console.log(err));
  //           console.log(modelMsg);

  const nextMsgId = (await getLatestMsgId(client)) + 1;
  console.log('This is the next msg id: ', nextMsgId);
  const new_msg = {
    id: nextMsgId,
    room_id: roomId,
    recipient_id: userId,
    sender_id: characterId,
    message: modelMsg
  };
  const res = await client.from('messages_character_to_user').insert(new_msg);
  console.log('Res from inserting msg: ', res);
}


export async function setupChannel(
  setCallHistory: any,
  callHistory: any,
  roomId: number,
  characterId: number,
  userId: string,
  initialBalance: number,
  costPerMsg: number,
  timeoutThreshold: number, // in seconds
  unsubscribe: () => boolean,
  client: any
) {
  const channel = client.channel(`room:${roomId}`, { pingInterval: 1 });

  let balance = initialBalance;
  let cost = costPerMsg;

  let latestCharacterMsgTime = new Date();
  let timedOut = false;

  channel
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'messages_character_to_user',
        filter: `room_id=eq.${roomId}`
      },
      (payload: any) => {
        console.log('Watching postgres changes: ', payload);
        // FE needs to update state for this
        // i.e. setPosts([...posts, payload]);
        setCallHistory(...callHistory, payload.new);
      }
    )
    .subscribe(async (status: any) => {
      console.log('Channel subscribed, status is: ', status);
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
        console.log('Subscribed');
        balance -= cost;
        /// Optional - sleep
        //await new Promise((f) => setTimeout(f, 1000));
      } else if (
        status == 'CLOSED' ||
        balance < cost ||
        timedOut ||
        unsubscribe()
      ) {
        // TODO: add this elsewhere based on user action
        console.log('Channel closed');
        channel.unsubscribe(); // closes channel
      }
    });
}

export async function testRealTime() {
  // Example
  const setCallHistory = () => {};
  const callHistory: any = [];
  const roomId = 1;
  const characterId = 1;
  const userId = 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41';
  const initialBalance = 0.5;
  const costPerMsg = 0.1;
  const timeoutThreshold = 30;
  let message = 'Realtime testing 4';
  let unsubscribe = () => false;

  // await setupChannel(
  //   setCallHistory,
  //   callHistory,
  //   roomId,
  //   characterId,
  //   userId,
  //   initialBalance,
  //   costPerMsg,
  //   timeoutThreshold,
  //   unsubscribe,
 
  // );

  // await getCharacterMessageToUser(
  //   roomId,
  //   characterId,
  //   userId,
  //   message,

  // );

  console.log('Done with testRealTime()..');
}

testRealTime();
