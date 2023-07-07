import SearchIcon from './svg/search-icon.svg';
import useScroll from '../../../hooks/useScroll';
import YouMightLike from '../home/YouMightLike';
import Image from 'next/image';
import DotsHorizontalIcon from './svg/dots-horizontal-icon.svg';
import { useEffect, useRef } from 'react';
import Button from './Button.svg';
import VoiceIcon from './svg/voice-icon.svg';
import SmileIcon from './svg/smile-icon.svg';
import SendIcon from './svg/send-icon.svg';
import SendTransparentIcon from './svg/send-transparent-icon.svg';
import PlusIcon from './svg/PlusIcon';
import RedCircle from './svg/red-circle.svg';
import DeleteIcon from './svg/delete-icon.svg';
import ChatIcon from './svg/chat-icon-small.svg';
import UploadIcon from './svg/uplaod-icon.svg';

import SendWhiteIcon from './svg/send-white-icon.svg';

import { useState } from 'react';
import Date from './ChatTypes/Date';
import Message from './ChatTypes/Message';
import VoiceModeToggle from './Toggler';
import DefaultChatViewDropdown from './DefaultChatViewDropdown';
import MessageSlider from './MessageSlider';
import { Modal } from '@components/modal/modal';
import ImageRequestModal from './ImageRequestModal';

type chatProps = {
  chatScreenClassName?: string;
  chatScreenMsgClassName?: string;
  chartScreenView?: string;
  setChartScreenView: React.Dispatch<React.SetStateAction<string>>;
};
export default function ChatScreen({
  chatScreenClassName,
  chatScreenMsgClassName,
  chartScreenView,
  setChartScreenView
}: chatProps) {
  const [sticky, animate] = useScroll();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [message, setMessage] = useState('');
  const [showInput, setShowInput] = useState(true);
  const [voiceMode, setVoiceMode] = useState(true);
  const [moreOptionDropdown, setMoreOptionDropdown] = useState(false);
  const [sendUploadImgState, setSendUploadImgState] = useState(false);
  const [chatViewOption, setChatVierwOption] = useState(false);

  const handleChatViewModal = () => {
    setChatVierwOption(!chatViewOption);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div
      className={`w-full border-r-[2px] border-[#252525] bg-[#121212] lg:inline ${chatScreenClassName}`}
    >
      <div className='flex h-[72px] w-full items-center justify-between border-b border-[#252525] px-6'>
        <div className='flex items-center'>
          <Image
            key={0}
            src='/dummy-char.png' // Change to your image path
            alt={`Character Profile Picture ${0 + 1}`} // Change to your alt text
            width={40}
            height={40}
            className='rounded-full'
          />
          <h3 className='ml-3 text-[15px] font-semibold leading-5'>
            Mika-chan
          </h3>
        </div>
        {/* <div className='flex items-center bg-red-400 cursor-pointer'>
          <DotsHorizontalIcon />          
        </div> */}
        <div className='flex items-center gap-8'>
          <VoiceModeToggle
            handleToggleState={() => setVoiceMode(!voiceMode)}
            toggleState={voiceMode}
            toggleText={'Voice Mode'}
          />
          <DefaultChatViewDropdown
            chartScreenView={chartScreenView}
            setChartScreenView={setChartScreenView}
          />
          <div className='relative'>
            <div onClick={() => setMoreOptionDropdown(!moreOptionDropdown)}>
              <DotsHorizontalIcon className='cursor-pointer' />
            </div>
            {moreOptionDropdown && (
              <div className='absolute right-0 top-[100%] mt-2 inline-flex w-[218px] flex-col items-start justify-start rounded-2xl bg-zinc-900 py-2 shadow'>
                <div className='cursor-pointer flex-col items-center justify-start gap-2 self-stretch '>
                  <div className='flex gap-2 px-4 py-[10px] text-sm'>
                    <ChatIcon />
                    Chat view
                  </div>
                  <div className='flex gap-2 px-4 py-[10px] text-sm'>
                    <DeleteIcon />
                    Clear chat
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`custom-scroll-bar overflow-y-auto ${
          chatScreenMsgClassName
            ? chatScreenMsgClassName
            : 'h-[calc(100vh-72px-92px)] '
        }`}
      >
        <div
          ref={containerRef}
          className={`flex flex-col justify-end bg-[#121212] px-6 pt-4`}
        >
          <Date date='May, 11 2023' />
          {/* <Message
          src='/dummy-char.png'
          alt={`Character Profile Picture ${0}`}
          time='09:22'
          message='hey, how are you?'
          name='You'
        />
        <Message
          src='/dummy-char.png'
          alt={`Character Profile Picture ${1}`}
          time='09:23'
          message='Doing well, thank you. How may I assist you?'
          name='Mika-chan'
        /> */}
          <Message
            src='/dummy-char.png'
            alt={`Character Profile Picture ${0}`}
            time='09:24'
            message='It’s me :) '
            name='Mika-chan'
            gridImage={true}
          />

          <Message
            src='/dummy-char.png'
            alt={`Character Profile Picture ${1}`}
            time='09:23'
            message='Some text'
            name='Mika-chan'
            messageIcons={true}
          />

          <Message
            src='/dummy-char.png'
            alt={`Character Profile Picture ${2}`}
            time='09:23'
            message='Hey Mika-chan, can you send me a picture of you with your arms raised while wearing a black |'
            name='You'
            messageIcons={true}
          />

          <Message
            src='/dummy-char.png'
            alt={`Character Profile Picture ${2}`}
            time='09:23'
            message='Hey Mika-chan, can you send me a picture of you with your arms raised while wearing a black dress and black bow?'
            name='Mika-chan'
            messageIcons={true}
            rateResponse={true}
          />
          {/* <MessageSlider /> */}
        </div>
      </div>
      {showInput && (
        <div className='flex h-[92px] items-center border-t  border-[#252525] bg-[red-400] px-6'>
          <div className='relative'>
            <div
              className='plus-icon mr-[10px] grid h-[32px] w-[32px] min-w-[32px] cursor-pointer place-items-center rounded-full bg-[#5848BC] transition duration-100 hover:bg-[#4b3abd]'
              onClick={() => setSendUploadImgState(!sendUploadImgState)}
            >
              <PlusIcon strokeClasses='stroke-[#ffffff]' />
            </div>
            {sendUploadImgState && (
              <div className='absolute -top-[120px] left-0 mt-2 inline-flex w-[218px] flex-col items-start justify-start rounded-2xl bg-zinc-900 py-2 shadow'>
                <div className='cursor-pointer flex-col items-center justify-start gap-2 self-stretch '>
                  <div
                    className='flex gap-2 px-4 py-[10px] text-sm'
                    onClick={handleChatViewModal}
                  >
                    <SendTransparentIcon />
                    Send image request
                  </div>
                  <div className='flex gap-2 px-4 py-[10px] text-sm'>
                    <UploadIcon />
                    Upload image
                  </div>
                </div>
              </div>
            )}
            {chatViewOption && (
              <Modal
                open={chatViewOption}
                modalClassName='flex flex-col gap-5 max-w-xl bg-zinc-900 !w-[517px] rounded-2xl shadow relative bg-[#1A1A1A] rounded-[20px]'
                modalOverlayStyle='!bg-black/80'
                closeModal={handleChatViewModal}
              >
                <ImageRequestModal closeModal={handleChatViewModal} />
              </Modal>
            )}
          </div>
          <div className='relative w-full'>
            <div className='absolute right-4 top-3'>
              <SmileIcon />
            </div>
            <input
              className='h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] py-4 pl-4 pr-[50px] text-[15px] font-light leading-6 text-[#979797] transition-all duration-100 focus:ring-1 focus:ring-transparent'
              type='text'
              placeholder='Type a message'
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              style={{ outline: 'none' }}
            />
          </div>
          <div className='ml-[10px] transition-all duration-100'>
            {message ? (
              <button
                onClick={() => {
                  console.log('sending message');
                }}
              >
                <SendIcon />
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowInput(false);
                }}
              >
                <VoiceIcon />
              </button>
            )}
          </div>
        </div>
      )}
      {!showInput && (
        <div className='flex h-[92px] items-center justify-between border-t border-[#252525] bg-[red-400] px-6'>
          <button
            onClick={() => {
              setShowInput(true);
            }}
            className='text-[15px] font-light leading-5 text-[#979797]'
          >
            Cancel
          </button>
          <div className='flex items-center text-[15px] font-light leading-5'>
            <RedCircle />
            <span className='ml-2 text-[15px] font-light leading-5'>00:12</span>
          </div>
          <button className='grid h-[54px] min-h-[54px] w-[54px] min-w-[54px] place-items-center rounded-full bg-[#5848BC] transition duration-100 hover:bg-[#4b3abd]'>
            <SendWhiteIcon />
          </button>
        </div>
      )}
    </div>
  );
}

// used to have margin left of 8 (32px)
// <div className='ml-8 hidden space-y-5 bg-orange-400 lg:inline xl:w-[600px]'>
