import { AnimatePresence } from 'framer-motion';
import { where, orderBy } from 'firebase/firestore';
// import { useWindow } from '@lib/context/window-context';
// import { Input } from '@components/input/input';
import { toast } from 'react-hot-toast';

import {
  BlankLayout,
  HomeLayout,
  ProtectedLayout
} from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common/seo';
import { MainContainer } from '@components/home/main-container';
import { UpdateUsername } from '@components/home/update-username';
import { MainHeader } from '@components/home/main-header';
import { Tweet } from '@components/tweet/tweet';
import { Loading } from '@components/ui/loading';
import { Error } from '@components/ui/error';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import {
  getHomePostsFollowing,
  getHomePostsSubscribedTo
} from '../api/home/home';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Tweet as TypeTweet } from '@lib/types/tweet';
import { User } from '@lib/types/user';
import type { ImagesPreview, ImageData } from '@lib/types/file';
import { getFlexUserCharChat } from 'api/messages/messages';
import { Message } from '@components/messages/Message';
import { MessagesContainer } from '@components/home/messages-container';
import { CharChat } from '@components/messages/CharChat';
import { useModal } from '@lib/hooks/useModal';
import { ImageRequestModal } from '@components/messages/ImageRequestModal';
import { Modal } from '@components/modal/modal';
import { getFollowerLists } from 'api/lists/lists';

export default function Messages(): JSX.Element {
  const user = useUser();
  const client = useSupabaseClient();
  const [postList, setPostList] = useState<any[]>([]);
  const [enteredMessage, setEnteredMessage] = useState<string>('');
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { open, openModal, closeModal } = useModal();

  const isMobile = false;

  const loadMore = () => {};

  const onChangeMessageHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredMessage(event.target.value);
  };

  const tweetData = null;

  const sendImageRequestHandler = () => {};

  const loadMessageData = async () => {
    const res = await getFlexUserCharChat(
      'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      1,
      20,
      client
    );
    setMessages(res);
  };

  const getFollowedChars = async () => {
    const res = await getFollowerLists(
      'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      client
    );
  };

  useEffect(() => {
    loadMessageData().then(() => {
      setLoading(false);
      getFollowedChars();
    });
  }, []);

  const modalAction = async (): Promise<void> => {
    closeModal();
    toast.success('Successfully Requested an Image');
  };

  return (
    <MessagesContainer>
      <SEO title='Messages / Eapp' />
      <MainHeader
        useMobileSidebar
        title='Messages'
        className='flex items-center justify-between'
      >
        {/* <UpdateUsername /> */}
      </MainHeader>
      {/* {!isMobile && <Input />} */}
      <Modal
        modalClassName='max-w-md bg-white w-full p-8 rounded-2xl'
        open={open}
        closeModal={closeModal}
      >
        <ImageRequestModal
          title='Add List'
          description='This can’t be undone and you’ll remove all Tweets you’ve added to your Lists.'
          mainBtnClassName='bg-accent-red hover:bg-accent-red/90 active:bg-accent-red/75 accent-tab 
                            focus-visible:bg-accent-red/90'
          mainBtnLabel='Clear'
          action={modalAction}
          closeModal={closeModal}
        />
      </Modal>
      <div className='flex'>
        <section className='flex w-full max-w-xl flex-col bg-blue-400'>
          <input
            type='text'
            className='p-2'
            placeholder='Search Conversations'
          />
          <div className='my-4 flex select-none gap-x-2'>
            <button className='rounded bg-gray-200 p-2 text-sm text-black hover:bg-gray-300 focus:bg-gray-300'>
              Followed
            </button>
            <button className='rounded bg-gray-200 p-2 text-sm text-black hover:bg-gray-300  focus:bg-gray-300'>
              Subscribed
            </button>
            <button className='rounded bg-gray-200 p-2 text-sm text-black hover:bg-gray-300 focus:bg-gray-300'>
              All
            </button>
          </div>
          <div className='h-full bg-green-400'>
            <CharChat
              name='Nikki'
              atName='@nikki'
              lastMessage='good morning baby, I hope you will have a great day today.  I would love to talk to you sometime soon asdf asdf a'
              date='Feb 18'
              profileUrl='na'
            />
          </div>
        </section>
        <section className='mt-0.5 w-full max-w-xl xs:mt-0'>
          <div className='flex h-[500px] flex-col overflow-y-auto scroll-auto bg-red-400 p-4 '>
            {loading ? (
              <Loading className='mt-5' />
            ) : !messages ? (
              <Error message='Something went wrong' />
            ) : (
              <>
                {/* <AnimatePresence mode='popLayout'> */}
                {messages?.map((message, index) => (
                  <Message
                    key={index}
                    message={message.message}
                    sender={message.who_is_sender}
                  />
                ))}
                {/* </AnimatePresence> */}
                {/* <LoadMore /> */}
              </>
            )}
          </div>
          <div className='flex select-none flex-col gap-y-2 py-2'>
            <div className='flex w-full justify-between'>
              <button className='rounded bg-gray-200 p-1 text-sm text-black hover:bg-gray-300 focus:bg-gray-300'>
                Subscribe
              </button>
              <button className='rounded bg-green-400 p-1 text-sm text-white hover:bg-green-500 focus:bg-green-500'>
                Free Messaging
              </button>
            </div>
            <div className='flex w-full justify-between'>
              <button
                onClick={openModal}
                className='rounded bg-gray-200 p-1 text-sm text-black hover:bg-gray-300 focus:bg-gray-300'
              >
                Image Request
              </button>
              <button
                onClick={openModal}
                className='rounded bg-green-400 p-1 text-sm text-white hover:bg-green-500 focus:bg-green-500'
              >
                Your Heart's Desire
              </button>
            </div>
          </div>
          <div className='flex w-full'>
            <input
              className='w-full rounded-l p-4 text-gray-800'
              type='text'
              placeholder='message...'
              value={enteredMessage}
              onChange={onChangeMessageHandler}
            />
            <button
              onClick={sendImageRequestHandler}
              className='rounded-r bg-green-400 p-4 hover:bg-green-500 focus:bg-green-500'
            >
              Send
            </button>
          </div>
        </section>
      </div>
    </MessagesContainer>
  );
}

// ProtectedLayout currently commented out (just returns children)
Messages.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <BlankLayout>{page}</BlankLayout>
    </MainLayout>
  </ProtectedLayout>
);
