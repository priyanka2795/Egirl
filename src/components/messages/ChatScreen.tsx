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
import GiftIcon from './svg/gift-icon.svg';
import PlusIcon from './svg/PlusIcon';
import RedCircle from './svg/red-circle.svg';
import DeleteIcon from './svg/delete-icon.svg';
import ChatIcon from './svg/chat-icon-small.svg';
import UploadIcon from './svg/uplaod-icon.svg';
import InfoIcon from './svg/info-icon.svg';
import { useDropzone } from 'react-dropzone';

import SendWhiteIcon from './svg/send-white-icon.svg';

import { useState } from 'react';
import Date from './ChatTypes/Date';
import Message from './ChatTypes/Message';
import VoiceModeToggle from '../common/Toggler';
import DefaultChatViewDropdown from './DefaultChatViewDropdown';
import MessageSlider from './MessageSlider';
import { Modal } from '@components/modal/modal';
import ImageRequestModal from './ImageRequestModal';
import Picker from 'emoji-picker-react';
import Theme from 'emoji-picker-react';
import NewConversationWithUser from './NewConversationWithUser';
import DummyMessage from './DummyMessage';
import Emoji from './Emoji';
import ThreeDotsDropdown from './ThreeDotsDropdown';
import GiftModal from './GiftModal';
import Gift from './Gift';
import ImageDropZone from './ImageDropZone';
import SubscriptionModal from '@components/common/SubscriptionModal';
import CurrentPlaneModal from '@components/common/CurrentPlaneModal';
import ImageRequestMsg from './ImageRequestMsg';
import MessageIndicator from './MessageIndicator';
import TextareaAutosize from 'react-textarea-autosize';
import RecordVoice from './RecordVoice';
import CrossIcon from '@/assets/xmark.webp';
import { log } from 'node:console';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type chatProps = {
  chatScreenClassName?: string;
  chatScreenMsgClassName?: string;
  chartScreenView?: string;
  setChartScreenView?: React.Dispatch<React.SetStateAction<string>>;
  selectUserState?: any;
  chatViewStyle: string;
  setChatViewStyle: React.Dispatch<React.SetStateAction<string>>;
};
export default function ChatScreen({
  chatScreenClassName,
  chatScreenMsgClassName,
  chartScreenView,
  setChartScreenView,
  selectUserState,
  chatViewStyle,
  setChatViewStyle
}: chatProps) {
  const filesButtonRef = useRef(null);
  const buttonRef = useRef(null);
  const lastMessageRef=useRef<any>(null);
  const voicemodeTimerRef=useRef<any>();
  const [sticky, animate] = useScroll();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [message, setMessage] = useState('');
  const [showInput, setShowInput] = useState(true);
  const [voiceMode, setVoiceMode] = useState(true);
  const [moreOptionDropdown, setMoreOptionDropdown] = useState(false);
  const [sendUploadImgState, setSendUploadImgState] = useState(false);
  const [chatViewOption, setChatViewOption] = useState(false);
  const [giftModal, setGiftModal] = useState(false);
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [chatView, setChatView] = useState(false);
  const [clearChat, setClearChat] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [currentPlanModal, setCurrentPlanModal] = useState(false);
  const [showGift, setShowGift] = useState('');
  const [showGiftImg, setShowGiftImg] = useState('');
  const [showGiftName, setShowGiftName] = useState('');
  const [showGiftMsg, setShowGiftMsg] = useState(false);
  const [buttonText, setButtonText] = useState('');
  // const [chatName , setChatName] = useState('');
  const [dropZoneState, setDropZoneState] = useState(false);
  // const [chatViewStyle ,setChatViewStyle] = useState('Inline chat');
  const [imageRequestMsg, setImageRequestMsg] = useState(false);
  const [typingState, setTypingState] = useState(false);
  const [messages, setMessages] = useState<any>([]);
  // const [uploadedItemState, setUploadedItemState] = useState<any>();
  const [socket, setSocket] = useState<any>(null);
  const [showVoiceModeText, setShowVoiceModeText] = useState<boolean>(false);

  const copyMessage = (message: string) => {
    navigator.clipboard.writeText(message);
    toast.success('Copy to Clipboard', {
      toastId: 'success1'
    });
  };

  const handleChatViewModal = () => {
    setChatViewOption(!chatViewOption);
    setSendUploadImgState(false);
  };
  const handleGiftModal = () => {
    setGiftModal(!giftModal);
    setSendUploadImgState(false);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }

  }, []);

  useEffect(()=>{
    scrollToBottom()
  },[messages])

  const scrollToBottom=()=>{
    lastMessageRef?.current?.scrollIntoView({behavior:'smooth'})
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      // lastMessageRef.current.scrollIntoView({behavior:'smooth'})
      e.preventDefault(); // Prevents the default behavior (form submission, new line)
      // Update state, perform any necessary action with the current value in the input
      handleMessage();
    } else if (e.key === 'Enter' && e.shiftKey) {
      // Insert a newline character when Shift + Enter is pressed
      setMessage(message + '\n');
    }
  };

  const handleViews = (e: any) => {
    if (e === 'chatView') {
      if (moreOptionDropdown) {
        setChatView(!chatView);
        setMoreOptionDropdown(!moreOptionDropdown);
      } else {
        setChatView(!chatView);
      }
    } else {
      if (chatView) {
        setMoreOptionDropdown(!moreOptionDropdown);
        setChatView(!chatView);
      } else {
        setMoreOptionDropdown(!moreOptionDropdown);
      }
    }
  };
  const handleTypingIndicator = (e: any) => {
    if (e.target.value === '') {
      setTypingState(false);
    }
  };

  const [imageUploaded, setImageUploaded] = useState<any[]>([]);

  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    acceptedFiles,
    fileRejections
  } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/jpg': [],
      'image/png': []
    },
    multiple: true,
    maxFiles: 10,
    maxSize: 2 * 1024 * 1024
  });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const newImages = acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      setSendUploadImgState(false);
      setImageUploaded((prevImages) => [...prevImages, ...newImages]);
    }
  }, [acceptedFiles]);

  const handleDeleteImage = (index: number) => {
    const updatedImages = [...imageUploaded];
    updatedImages.splice(index, 1);
    setImageUploaded(updatedImages);
  };

  useEffect(() => {
    const chatUrl =
      'wss://devapi.egirls.ai/room/ws/user/f47ac10b-58cc-4372-a567-0e02b2c3d479/room/1/character/a89df75b-4356-4118-9c9b-15dfa6e0123b/text_chat';
    const socket = new WebSocket(chatUrl);

    socket.onopen = function (e) {
      console.log('WebSocket connection established');
    };
    socket.onmessage = function (event) {
      console.log(`[message] Data received from server: ${event.data}`);
    };
    socket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages: any) => [...prevMessages, receivedMessage]);
      console.log({ receivedMessage });
    };

    setSocket(socket);
    return () => {
      socket.close();
    };
  }, []);

  const handleMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      setShowMessage(true);
      console.log('message---', message);
      const messageData = {
        message: message
      };
      socket.send(JSON.stringify(messageData));
      setMessage('');
    }
  };
  console.log({ messages });

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(voicemodeTimerRef.current)
    };


  }, []);

  const handleClickOutside = (event: any) => {
    if (
      filesButtonRef.current &&
      !filesButtonRef?.current?.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current?.contains(event.target)
    ) {
      setSendUploadImgState(false);
    }
  };

  const changeVoiceModeSetting = () => {
    setVoiceMode(!voiceMode);
    setShowVoiceModeText(true);
    voicemodeTimerRef.current=setTimeout(()=>{
      setShowVoiceModeText(false);
    },500)
  };

  return (
    <>
      <div
        className={`w-full overflow-hidden border-r-[2px] border-[#252525] bg-[#121212] lg:inline ${chatScreenClassName}`}
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
            <div className='ml-3 flex flex-col items-start'>
              <h3 className='text-[15px] font-semibold leading-5'>Mika-chan</h3>
              <h6
                className='font-normal flex cursor-pointer gap-1 text-xs text-[#979797]'
                onClick={() => setCurrentPlanModal(true)}
              >
                50 messages remaining
                <InfoIcon />
              </h6>
            </div>
          </div>
          {currentPlanModal && (
            <CurrentPlaneModal closeState={setCurrentPlanModal} />
          )}
          <div className='flex items-center gap-8'>
            <VoiceModeToggle
              handleToggleState={changeVoiceModeSetting}
              toggleState={voiceMode}
              toggleText={'Voice Mode'}
            />
            <DefaultChatViewDropdown
              chartScreenView={chartScreenView}
              setChartScreenView={setChartScreenView}
              chatView={chatView}
              setChatView={handleViews}
            />
            <div className='relative'>
              <div onClick={() => handleViews('dots')}>
                <DotsHorizontalIcon className='cursor-pointer' />
              </div>

              {moreOptionDropdown && (
                //   <>  <div className='absolute right-0 top-[100%] mt-2 inline-flex w-[218px] flex-col items-start justify-start rounded-2xl bg-zinc-900 py-2 shadow'>
                //   <div className='flex-col items-center self-stretch justify-start gap-2 cursor-pointer '>
                //     <div className='flex gap-2 px-4 py-[10px] text-sm'>
                //       <ChatIcon />
                //       Chat view
                //     </div>
                //     <div
                //       className='flex gap-2 px-4 py-[10px] text-sm'
                //       onClick={() => {setClearChat(true), setMoreOptionDropdown(false)}}
                //     >
                //       <DeleteIcon />
                //       Clear chat
                //     </div>
                //   </div>
                // </div>
                <ThreeDotsDropdown
                  setClearChat={setClearChat}
                  setMoreOptionDropdown={setMoreOptionDropdown}
                  defaultChatStyle={chatViewStyle}
                  activeChatStyle={setChatViewStyle}
                />
                // </>
              )}
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col '>
          <div
            className={`custom-scroll-bar flex overflow-y-auto pb-5 ${
              chatScreenMsgClassName
                ? chatScreenMsgClassName
                : 'h-[calc(100vh-72px-120px)] '
            } ${
              imageUploaded.length === 0
                ? 'h-[calc(100vh-72px-120px)]'
                : 'h-[calc(72vh-72px-120px)]'
            } `}
            // ${ imageUploaded.length === 0 ?'h-[calc(100vh-72px-92px)]' :'h-[calc(72vh-72px-92px)]'}
          >
            <div
              ref={containerRef}
              className={`flex h-max min-h-full w-full flex-col justify-start break-words bg-[#121212] px-6 pt-4 text-base`}
            >
              {/* {selectUserState === 'One More Mika' ? (
              <>
                <NewConversationWithUser />
                {showMessage && (
                  <Message
                    src='/dummy-char.png'
                    alt={`Character Profile Picture ${2}`}
                    time='09:23'
                    isLast={true}
                    message={message}
                    name='You'
                    messageIcons={true}
                    chatName={chatViewStyle}
                  />
                )}
              </>
            ) : (
              clearChat === false && <DummyMessage chatName={chatViewStyle} />
            )} */}
              {messages.map((msg: any, index: any) => (
                <>
                  {' '}
                  {msg.user_msg && (
                    <Message
                      key={index}
                      messageId={4}
                      src='/dummy-char.png'
                      alt={`Character Profile Picture ${2}`}
                      time='09:23'
                      isLast={true}
                      message={JSON.parse(msg.user_msg)?.message}
                      messageIcons={true}
                      regenerateIcon={true}
                      rateResponse={false}
                      chatName='Bubble chat'
                      name='You'
                      copyMessage={copyMessage}
                    />
                  )}
                  <Message
                    key={index}
                    messageId={4}
                    src='/dummy-char.png'
                    alt={`Character Profile Picture ${2}`}
                    time='09:23'
                    isLast={true}
                    message={msg?.message}
                    messageIcons={true}
                    regenerateIcon={true}
                    rateResponse={true}
                    chatName='Bubble chat'
                    name=''
                    copyMessage={copyMessage}
                  />
                  
                </>
              ))}
              <div ref={lastMessageRef}></div>
              {showGiftMsg && (
                <Gift showGiftImg={showGiftImg} showGiftName={showGiftName} />
              )}
              {imageRequestMsg && <ImageRequestMsg />}
            </div>
          </div>
          {showInput && (
            <div className='flex flex-col items-start justify-center gap-1 px-2 pt-4'>
              <div
                className={` flex w-full items-start bg-[red-400] px-6 pt-3 `}
              >
                <div className='relative mb-[10px]  self-end'>
                  <div
                    ref={buttonRef}
                    className='plus-icon mr-[10px] mt-[8px] grid h-[32px] w-[32px] min-w-[32px] cursor-pointer place-items-center rounded-full bg-[#5848BC] transition duration-100 hover:bg-[#4b3abd]'
                    onClick={() => {
                      setSendUploadImgState(!sendUploadImgState);
                    }}
                  >
                    <PlusIcon strokeclasses='stroke-[#ffffff]' />
                  </div>
                  {sendUploadImgState && (
                    <div
                      ref={filesButtonRef}
                      className='absolute -top-[152px] left-0 z-50 mt-2 inline-flex w-[218px] -translate-x-1 flex-col items-start justify-start rounded-2xl bg-zinc-900 py-2 shadow'
                    >
                      <div className='cursor-pointer flex-col items-center justify-start gap-2 self-stretch '>
                        <div
                          className='flex gap-2 px-4 py-[10px] text-sm'
                          onClick={handleChatViewModal}
                        >
                          <SendTransparentIcon />
                          Send image request
                        </div>
                        <div
                          className='flex gap-2 px-4 py-[10px] text-sm'
                          onClick={handleGiftModal}
                        >
                          <GiftIcon />
                          Send gift
                        </div>
                        {imageUploaded.length < 4 ? (
                          <div
                            className='flex gap-2 px-4 py-[10px] text-sm'
                            {...getRootProps()}
                          >
                            <UploadIcon />
                            <input
                              className='mb-5 hidden'
                              {...getInputProps()}
                            />
                            <button>Upload image</button>
                          </div>
                        ) : (
                          <div className='flex gap-2 px-4 py-[10px] text-sm'>
                            <UploadIcon />
                            <button>Upload image</button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {/* {/ {UploadedFiles} /} */}
                  {chatViewOption && (
                    <Modal
                      open={chatViewOption}
                      modalClassName='flex flex-col gap-5 max-w-xl bg-zinc-900 !w-[517px] rounded-2xl shadow relative bg-[#1A1A1A] rounded-[20px]'
                      modalOverlayStyle='!bg-black/80'
                      closeModal={handleChatViewModal}
                    >
                      <ImageRequestModal
                        closeModal={handleChatViewModal}
                        setImageRequestMsg={setImageRequestMsg}
                      />
                    </Modal>
                  )}
                  {giftModal && (
                    <Modal
                      open={giftModal}
                      modalClassName='flex flex-col max-w-xl bg-zinc-900 !w-[454px] rounded-2xl shadow relative bg-[#1A1A1A] rounded-[20px]'
                      modalOverlayStyle='!bg-black/80'
                      closeModal={handleGiftModal}
                    >
                      <GiftModal
                        setShowGiftImg={setShowGiftImg}
                        setShowGiftName={setShowGiftName}
                        setShowGiftMsg={setShowGiftMsg}
                        closeModal={handleGiftModal}
                      />
                    </Modal>
                  )}
                </div>
                <div className='relative w-full'>
                  <div className='relative flex w-full flex-col items-center rounded-[14px] bg-[#1E1E1E]'>
                    <div className='flex w-full items-start rounded-t-[14px] bg-[#1E1E1E]'>
                      {imageUploaded?.map((file: any, index: number) => (
                        <div className='relative p-2'>
                          <Image
                            src={file?.preview || ''}
                            alt=''
                            width={150}
                            height={150}
                            className='h-[150px] w-[150px] rounded-lg object-cover'
                          />
                          <div
                            className='absolute right-4 top-3 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-[#0000007A]'
                            onClick={() => handleDeleteImage(index)}
                          >
                            <Image src={CrossIcon} alt='' className='h-2 w-2' />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`'relative w-full ${
                        imageUploaded.length === 0
                          ? 'border-t-0'
                          : 'border-t border-[#FFFFFF1F] pt-2'
                      } '`}
                    >
                      <TextareaAutosize
                        className='font-light max-h-[50px] min-h-[48px] w-full resize-none rounded-[14px] border-none bg-[#1E1E1E] pr-8 pt-4 text-[15px] leading-6 text-[#979797] transition-all duration-100 focus:ring-1 focus:ring-transparent'
                        cacheMeasurements
                        value={message}
                        // onChange={ev => setValue(ev.target.value)}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={() => setTypingState(true)}
                        onBlur={(e) => handleTypingIndicator(e)}
                        onKeyDown={handleKeyPress}
                        style={{ outline: 'none' }}
                        maxRows={5}
                        placeholder='Type a message'
                      />

                      <div
                        className='absolute bottom-4 right-4'
                        onClick={() => setEmojiPicker((val) => !val)}
                      >
                        <SmileIcon />
                      </div>

                      <div className='absolute bottom-5 right-[50px]'>
                        {emojiPicker && <Emoji setMessage={setMessage} />}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mb-[10px] ml-[10px] self-end transition-all duration-100'>
                  {message ? (
                    <button onClick={handleMessage}>
                      <SendIcon />
                    </button>
                  ) : (
                    <>
                      {voiceMode ? (
                        <button
                          className='h-[26px] w-[26px]'
                          onClick={() => {
                            setShowInput(false);
                          }}
                        >
                          <VoiceIcon />
                        </button>
                      ) : (
                        <button onClick={handleMessage}>
                          <SendIcon />
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
              {typingState && <MessageIndicator />}
            </div>
          )}
        </div>

        {!showInput && (
          <>
            {/* <div className='flex h-[92px] items-center justify-between border-t border-[#252525] bg-[red-400] px-6'>
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
        </div> */}
            <div className='mx-5 flex justify-between pt-5'>
              <RecordVoice handleMessage={handleMessage} />
            </div>
          </>
        )}
        <ToastContainer
          position='bottom-right'
          pauseOnHover
          theme='colored'
          hideProgressBar={true}
          autoClose={2000}
        />
      </div>
    </>
  );
}

// used to have margin left of 8 (32px)
// <div className='ml-8 hidden space-y-5 bg-orange-400 lg:inline xl:w-[600px]'>

{
  /* <div
                    key={index}
                    className={`my-1 rounded-lg rounded-br-none py-3 pl-3 pr-3.5 relative min-w-[50px] max-w-[300px] text-left ${
                      msg.user_msg
                        ? 'ml-auto bg-[#5848BC] text-white'
                        : 'mr-auto bg-[#5848BC] text-white'
                    }`}
                  >
                    {JSON.parse(msg.user_msg)?.message}
                    <div className='absolute -bottom-4 right-1 w-full text-xs text-right'>
                        <p>9:25</p>
                    </div>
                  </div> */
}

//   <div
//   key={index}
//   className={`my-1 rounded-lg rounded-bl-none  py-3 pl-3.5 pr-3  relative min-w-[50px] text-center ${
//     msg.sender_type != 'character'
//       ? 'ml-auto bg-[#1E1E1E] text-white'
//       : 'mr-auto bg-[#1E1E1E] text-white'
//   }`}
// >
//   {msg.message}
//   <div className='absolute -bottom-4 left-1 w-full text-xs text-left'>
//         <p>09:25</p>
//     </div>
// </div>
