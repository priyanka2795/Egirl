import React, { useRef, useState } from 'react';
import Image from 'next/image';
import RefreshIcon from '../svg/refresh-icon.svg';
import EmojiIcon from '../svg/emoji-icon.svg';
import CopyIcon from '../svg/copy-icon.svg';
import ArrowLeft from '../svg/arrow-left.svg';
import ArrowRight from '../svg/arrow-right.svg';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import MessageSlider from '../MessageSlider';
import { Modal } from '@components/modal/modal';
import ChatReactionEmoji from '../ChatReactionEmoji';
import { Emoji } from 'emoji-picker-react';
import FeedbackSent from '../FeedbackSent';
import FeedbackTexts from '../FeedbackTexts';
import ChatGridImg from './ChatGridImg';
import BubbleViewTimeStamp from './BubbleViewTimeStamp';
import Rating from './Rating';


interface MessageProps {
  src: string;
  alt: string;
  name: string;
  time: string;
  message: string;
  gridImage?: boolean;
  messageIcons?: boolean;
  regenerateIcon?: boolean;
  rateResponse?: boolean;
  isLast?: boolean;
  messageId?: any;
  chatName: string;
  copyMessage:any
}

const Message: React.FC<MessageProps> = ({
  src,
  alt,
  name,
  time,
  message,
  gridImage,
  messageIcons,
  rateResponse,
  regenerateIcon,
  messageId,
  chatName,
  isLast,
  copyMessage
}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  // const handkeCloseModal = () => {};
  const [goldenSvg, setGoldenSvg] = useState(false);
  const [selectedStars, setSelectedStars] = useState(0);
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [showSelectedEmojiList, setShowSelectedEmojiList] = useState(false);
  const [messageIdEmoji, setMessgeIdEmoji] = useState(0);
  const [showSelectedEmoji, setShowSeletedEmoji] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [showFeedText, setShowFeedText] = useState(false);
  const messageRef=useRef(null)

  console.log({message,rateResponse})

  const handleStarClick = (starCount: number) => {
    setSelectedStars(starCount);
    setShowFeedText(true);
  };

  const handleStarHover = (starCount: number) => {
    if (selectedStars !== starCount) {
      setSelectedStars(starCount);
    }
  };

  const handleStarHoverOut = (starCount: number) => {
      setSelectedStars(starCount);
      console.log("mouseLeave>>>>");
  };



  return (
    <>
      <div className='w-full flex mb-3 gap-2'>
      {chatName === 'Bubble chat' && name === 'You' ? (
          ''
        ) : (
          <Image
            key={0}
            src={src} // Change to your image path //profile
            alt={alt} // Change to your alt text
            width={40}
            height={40}
            className='object-contain rounded-full '
          />
        )}
        <div className='w-full'>
        <div
        className={` my-1 rounded-lg relative py-3  min-w-[50px] max-w-[300px] text-left text-white ${name==="You" ? "float-right rounded-br-none bg-[#5848BC] pl-3 pr-3.5" : "rounded-bl-none bg-[#1E1E1E]  pl-3.5 pr-3"}`}
      >
        
        <div className='flex flex-col w-full ml-3 group'>
          

          {messageIcons ? (
            <>
              <div className='relative flex'>
                <span
                ref={messageRef}
                  className='mx-2'
                >
                  {message}
                </span>

                <div
                  className={`${
                    chatName === 'Bubble chat' && name === 'You'
                      ? 'absolute -left-[120px] flex h-full items-center z-50'
                      : chatName === 'Bubble chat' && name !== 'You'
                      ? 'absolute -right-[97px] flex h-full items-center'
                      : ''
                  }`}
                >
                  <div
                    className={`flex w-[78px] gap-2 opacity-0 group-hover:flex group-hover:opacity-100 ${
                      chatName === 'Bubble chat' && name === 'You'
                        ? 'justify-end'
                        : chatName === 'Bubble chat' && name !== 'You'
                        ? 'justify-start'
                        : 'justify-end'
                    }`}
                  >
                    {regenerateIcon && (
                      <RefreshIcon className='cursor-pointer' />
                    )}
                    <div
                      onClick={() => {
                        setShowSelectedEmojiList(!showSelectedEmojiList),
                          setMessgeIdEmoji(messageId);
                      }}
                      className='relative'
                    >
                      {name !== 'You' && (
                        <EmojiIcon className='cursor-pointer' />
                      )}
                      {showSelectedEmojiList === true &&
                      messageIdEmoji === messageId ? (
                        <ChatReactionEmoji
                          setShowSeletedEmoji={setShowSeletedEmoji}
                        />
                      ) : null}
                    </div>
                    <CopyIcon className='h-5 cursor-pointer' onClick={()=>copyMessage(message)}/>
                  </div>
                </div>
              </div>
              {showSelectedEmoji !== '' && (
                <div className='mt-2 w-max rounded-full bg-neutral-800 px-[10px] py-[6px]'>
                  <Emoji unified={showSelectedEmoji} size={12} />
                </div>
              )}
            </>
          ) : (
            <span className='text-[16px] font-normal leading-6'>{message}</span>
          )}

          {gridImage === true ? <ChatGridImg /> : ''}

        </div>
      </div>
      <div className={`w-full text-xs flex items-center gap-2 ${name==="You" ? "justify-end" : "justify-start"}`}>
        <p>09:25pm</p>
        {feedbackSent ? (
            <FeedbackSent />
          ) : showFeedText ? (
            <FeedbackTexts
              showFeedText={showFeedText}
              setShowFeedText={setShowFeedText}
              setFeedbackSent={setFeedbackSent}
            />
          ) : rateResponse ? (
            <div className='flex items-center justify-between w-full w-full'>
              <Rating selectedStars={selectedStars} handleStarClick={handleStarClick} handleStarHover={handleStarHover} handleStarHoverOut={handleStarHoverOut}/>
              <div className='flex gap-2'>
               {/* <ArrowLeft/>
                <p className='text-[13px] font-semibold text-[#979797]'>2/2</p>
               <ArrowRight/> */}
              </div>
            </div>
          ) : (
            ''
          )}
      </div>
        </div>
      </div>
      
          {/* <BubbleViewTimeStamp
            chatName={chatName}
            userName={name}
            timeStamp={time}
          /> */}

        
    </>
  );
};

export default Message;
