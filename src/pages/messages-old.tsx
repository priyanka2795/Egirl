import { AnimatePresence } from 'framer-motion';
// import { useWindow } from '@lib/context/window-context';
// import { Input } from '@components/input/input';
import { toast } from 'react-hot-toast';

import {
  BlankLayout,
  HomeLayout,
  ProtectedLayout
} from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common-old/seo';
import { MainContainer } from '@components/home-old/main-container';
import { UpdateUsername } from '@components/home-old/update-username';
import { MainHeader } from '@components/home-old/main-header';
import { Tweet } from '@components/tweet/tweet';
import { Loading } from '@components/ui/loading';
import { Error } from '@components/ui/error';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import {
  getHomePostsFollowing,
  getHomePostsSubscribedTo
} from '../api/home/home';

import type { ImagesPreview, ImageData } from '@lib/types/file';
import { getFlexUserCharChat } from 'api/messages/messages';
import { Message } from '@components/messages-old/Message';
import { MessagesContainer } from '@components/home-old/messages-container';
import { CharChat } from '@components/messages-old/CharChat';
import { useModal } from '@lib/hooks/useModal';
import { ImageRequestModal } from '@components/messages-old/ImageRequestModal';
import { Modal } from '@components/modal/modal';
import { getFollowerLists } from 'api/lists/lists';

export default function Messages(): JSX.Element {
 
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
 
  };

  const getFollowedChars = async () => {
   
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
        <section className='flex flex-col w-full max-w-xl bg-blue-400'>
          <input
            type='text'
            className='p-2'
            placeholder='Search Conversations'
          />
          <div className='flex my-4 select-none gap-x-2'>
            <button className='p-2 text-sm text-black bg-gray-200 rounded hover:bg-gray-300 focus:bg-gray-300'>
              Followed
            </button>
            <button className='p-2 text-sm text-black bg-gray-200 rounded hover:bg-gray-300 focus:bg-gray-300'>
              Subscribed
            </button>
            <button className='p-2 text-sm text-black bg-gray-200 rounded hover:bg-gray-300 focus:bg-gray-300'>
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
          <div className='flex flex-col py-2 select-none gap-y-2'>
            <div className='flex justify-between w-full'>
              <button className='p-1 text-sm text-black bg-gray-200 rounded hover:bg-gray-300 focus:bg-gray-300'>
                Subscribe
              </button>
              <button className='p-1 text-sm text-white bg-green-400 rounded hover:bg-green-500 focus:bg-green-500'>
                Free Messaging
              </button>
            </div>
            <div className='flex justify-between w-full'>
              <button
                onClick={openModal}
                className='p-1 text-sm text-black bg-gray-200 rounded hover:bg-gray-300 focus:bg-gray-300'
              >
                Image Request
              </button>
              <button
                onClick={openModal}
                className='p-1 text-sm text-white bg-green-400 rounded hover:bg-green-500 focus:bg-green-500'
              >
                Your Heart's Desire
              </button>
            </div>
          </div>
          <div className='flex w-full'>
            <input
              className='w-full p-4 text-gray-800 rounded-l'
              type='text'
              placeholder='message...'
              value={enteredMessage}
              onChange={onChangeMessageHandler}
            />
            <button
              onClick={sendImageRequestHandler}
              className='p-4 bg-green-400 rounded-r hover:bg-green-500 focus:bg-green-500'
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
