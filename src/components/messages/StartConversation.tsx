import SearchIcon from '@components/common/Search/SearchIcon';
import { Modal } from '@components/modal/modal';
import React, { Dispatch, SetStateAction, useState } from 'react';
import ChatIcon from '@/assets/message-circle-lines-alt.webp';
import UserList from './UserList';
import CloseIcon from './svg/close-icon.svg';
import ImageRequestModal from './ImageRequestModal';
import Image from 'next/image';

type startConversation = {
  startConversationModal: boolean;
  //   setStartConversationModal: boolean;
  handleCloseConversationModal: () => void;
  userSelected: any;
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
        <div className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#FFFFFF0D]'>
          <Image src={ChatIcon} alt='' />
        </div>
        <h3 className='font-bold mb-6 text-center text-[22px] text-[#515151]'>
          Select a chat to start messaging
        </h3>
        <button
          className='font-bold rounded-[14px] bg-[#1E1E1E] px-5 py-[13px] text-base text-[#979797]'
          onClick={handleCloseConversationModal}
        >
          Start a conversation
        </button>
      </div>

      {startConversationModal === true && (
        <Modal
          open={startConversationModal}
          modalClassName='flex flex-col gap-5 max-w-xl bg-zinc-900 !w-[517px] rounded-2xl shadow relative bg-[#1A1A1A] rounded-[20px]'
          modalOverlayStyle='!bg-black/80'
          closeModal={handleCloseConversationModal}
        >
          <div className='flex justify-between border-b border-[#515151] p-6'>
            <div className='font-bold children'>New Message</div>
            <CloseIcon
              onClick={handleCloseConversationModal}
              className='cursor-pointer'
            />
          </div>

          <div className='px-6 pb-6'>
            <div className='relative flex w-full mt-2 mb-3'>
              <div className='absolute left-4 top-3'>
                <SearchIcon
                  strokeclasses={`${
                    isInputActive ? 'stroke-[#5848BC]' : 'stroke-[#515151]'
                  } transition duration-100 bg-white bg-opacity-5`}
                />
              </div>
              <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className='py-auto font-light h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] leading-6 text-[#979797] transition duration-100 focus:ring-[#5848BC]'
                type='text'
                placeholder='Search'
              />
            </div>
            <UserList userSelected={userSelected} />
          </div>
        </Modal>
      )}
      {/* <Modal
        open={startConversationModal}
        modalClassName='flex flex-col gap-5 max-w-xl bg-zinc-900 !w-[517px] rounded-2xl shadow relative bg-[#1A1A1A] rounded-[20px]'
        modalOverlayStyle='!bg-black/80'
        closeModal={handleCloseConversationModal}
      >
        <ImageRequestModal />
      </Modal> */}
    </div>
  );
};

export default StartConversation;
