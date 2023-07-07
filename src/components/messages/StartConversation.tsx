import SearchIcon from '@components/common/Search/SearchIcon';
import { Modal } from '@components/modal/modal';
import React, { Dispatch, SetStateAction, useState } from 'react';
import ChatIcon from './svg/chat-icon.svg';
import UserList from './UserList';
import CloseIcon from './svg/close-icon.svg';
import ImageRequestModal from './ImageRequestModal';

type startConversation = {
  startConversationModal: boolean;
  //   setStartConversationModal: boolean;
  handleCloseConversationModal: () => void;
  userSelected: () => void;
};

const StartConversation = ({
  startConversationModal,
  handleCloseConversationModal,
  userSelected
}: startConversation) => {
  const [isInputActive, setInputActive] = useState(false);
  const handleInputFocus = () => setInputActive(true);
  const handleInputBlur = () => setInputActive(false);

  return (
    <div className='flex w-full items-center justify-center border-r-[2px] border-[#252525] bg-[#070707] '>
      <div className='flex w-[240px] flex-col items-center'>
        <ChatIcon className='mb-4' />
        <h3 className='mb-6 text-center text-[22px] font-bold text-[#515151]'>
          Select a chat to start messaging
        </h3>
        <button
          className='rounded-[14px] bg-[#1E1E1E] px-5 py-[13px] text-base font-bold text-[#979797]'
          onClick={handleCloseConversationModal}
        >
          Start a conversation
        </button>
      </div>

      {startConversationModal === true && (
        <Modal
          open={startConversationModal}
          modalClassName='flex flex-col gap-5 max-w-xl bg-zinc-900 !w-[517px] rounded-2xl shadow relative bg-[#1A1A1A] rounded-[20px]'
          closeModal={handleCloseConversationModal}
        >
          <div className='flex justify-between border-b border-[#515151] p-6'>
            <div className='children font-bold'>New Message</div>
            <CloseIcon
              onClick={handleCloseConversationModal}
              className='cursor-pointer'
            />
          </div>

          <div className='px-6 pb-6'>
            <div className='relative mb-3 mt-2 flex w-full'>
              <div className='absolute left-4 top-3'>
                <SearchIcon
                  strokeClasses={`${
                    isInputActive ? 'stroke-[#5848BC]' : 'stroke-[#515151]'
                  } transition duration-100 bg-white bg-opacity-5`}
                />
              </div>
              <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className='py-auto h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] font-light leading-6 text-[#979797] transition duration-100 focus:ring-[#5848BC]'
                type='text'
                placeholder='Search'
              />
            </div>
            <UserList userSelected={userSelected} />
          </div>
          {/* <ImageRequestModal /> */}
        </Modal>
      )}
    </div>
  );
};

export default StartConversation;
