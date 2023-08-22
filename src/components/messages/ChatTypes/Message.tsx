import React, { useState } from 'react';
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
  isLast
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
      <div
        className={`refresh-icon-parent flex py-4 last:pb-0 ${
          chatName === 'Bubble chat' && name === 'You'
            ? 'rounded-br-0 ml-auto !w-[300px] items-end justify-end'
            : chatName === 'Bubble chat'
            ? 'mr-auto w-[350px] items-start items-end'
            : 'w-full items-start '
        }`}
      >
        {chatName === 'Bubble chat' && name === 'You' ? (
          ''
        ) : (
          <Image
            key={0}
            src={src} // Change to your image path
            alt={alt} // Change to your alt text
            width={40}
            height={40}
            className='object-contain rounded-full '
          />
        )}
        <div className='flex flex-col w-full ml-3 group'>
          {chatName === 'Bubble chat' ? (
            <></>
          ) : (
            <div className='mb-[2px] flex items-center'>
              <span className='mr-2 cursor-pointer text-[15px] font-medium leading-5'>
                {name}
              </span>
              <span className='text-[12px] font-normal leading-4 text-[#979797]'>
                {time}
              </span>
            </div>
          )}

          {messageIcons ? (
            <>
              <div className='relative flex gap-[18px]'>
                <span
                  className={`refresh-icon w-full text-[16px] font-normal leading-6                  
                  ${
                    chatName === 'Bubble chat' && name === 'You'
                      ? 'rounded-br-0 max-w-[300px] items-end justify-end rounded-bl-[10px] rounded-tl-[10px] rounded-tr-[10px] bg-[#5848BC] p-3'
                      : chatName === 'Bubble chat' && name !== 'you'
                      ? 'rounded-br-0 justify-end rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] bg-[#272727] p-4 '
                      : 'w-full items-start'
                  }`}
                >
                  {message}
                </span>

                <div
                  className={`${
                    chatName === 'Bubble chat' && name === 'You'
                      ? 'absolute -left-[97px] flex h-full items-center'
                      : chatName === 'Bubble chat' && name !== 'You'
                      ? 'absolute -right-[97px] flex h-full items-center'
                      : ''
                  }`}
                >
                  <div
                    className={`flex w-[78px] gap-3 opacity-0 group-hover:flex group-hover:opacity-100 ${
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
                    <CopyIcon className='h-5 cursor-pointer' />
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
          <BubbleViewTimeStamp
            chatName={chatName}
            userName={name}
            timeStamp={time}
          />

          {feedbackSent ? (
            <FeedbackSent />
          ) : showFeedText ? (
            <FeedbackTexts
              showFeedText={showFeedText}
              setShowFeedText={setShowFeedText}
              setFeedbackSent={setFeedbackSent}
            />
          ) : rateResponse ? (
            <div className='flex items-center justify-between w-full pl-[47px]'>
              <Rating selectedStars={selectedStars} handleStarClick={handleStarClick} handleStarHover={handleStarHover} handleStarHoverOut={handleStarHoverOut}/>
              <div className='flex gap-2'>
               <ArrowLeft/>
                <p className='text-[13px] font-semibold text-[#979797]'>2/2</p>
               <ArrowRight/>
              </div>
            </div>
          ) : (
            ''
          )}
    </>
  );
};

export default Message;
