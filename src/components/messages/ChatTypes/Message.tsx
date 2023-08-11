import React, { useState } from 'react';
import Image from 'next/image';
import gridImgFirst from '../../../../public/assets/messages/grid-img-1.png';
import gridImgSecond from '../../../../public/assets/messages/grid-img-2.png';
import gridImgThird from '../../../../public/assets/messages/grid-img-3.png';
import gridImgFourth from '../../../../public/assets/messages/grid-img-4.png';
import gridImgFifth from '../../../../public/assets/messages/grid-img-5.png';
import RefreshIcon from '../svg/refresh-icon.svg';
import EmojiIcon from '../svg/emoji-icon.svg';
import CopyIcon from '../svg/copy-icon.svg';
import StarIcon from '../svg/star-icon.svg';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import MessageSlider from '../MessageSlider';
import { Modal } from '@components/modal/modal';
import ChatReactionEmoji from '../ChatReactionEmoji';
import { Emoji } from 'emoji-picker-react';

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

  const handleStarClick = (starCount: number) => {
    setSelectedStars(starCount);
  };

  const handleStarHover = (starCount: number) => {
    if (selectedStars !== starCount) {
      setSelectedStars(starCount);
    }
  };

  return (
      <div className={`flex py-4 refresh-icon-parent last:pb-0 ${chatName === 'Bubble chat' ? 'w-[52%]' : 'w-full'} ${chatName === 'Bubble chat' && name === 'You' ? 'justify-end items-end rounded-tl-[10px] rounded-tr-[10px] rounded-br-0 rounded-bl-[10px] bg-[#5848BC] ml-auto' : 'items-start w-full'}`}>
        {chatName === 'Bubble chat' && name === 'You' ? '' : 
        <Image
          key={0}
          src={src} // Change to your image path
          alt={alt} // Change to your alt text
          width={40}
          height={40}
          className='rounded-full'
        />}
        <div className='flex flex-col w-full ml-3 group'>
          <div className='mb-[2px] flex items-center'>
            <span className='mr-2 text-[15px] font-semibold leading-5'>
              {name}
            </span>
            <span className='text-[12px] font-normal leading-4 text-[#979797]'>
              {time}
            </span>
          </div>

          {messageIcons ? (
            <>
              <div className='flex gap-[18px]'>
                <span className='refresh-icon w-full items-start justify-between text-[16px] font-normal leading-6 '>
                  {message}
              
                </span>
                <div className=''>
                  <div className='flex gap-3 opacity-0 group-hover:flex group-hover:opacity-100 w-[78px] justify-end'>
                    {regenerateIcon && <RefreshIcon className="cursor-pointer" />}
                    <div
                      onClick={() => {
                        setShowSelectedEmojiList(!showSelectedEmojiList),
                          setMessgeIdEmoji(messageId);
                      }}
                      className='relative'
                    >
                      {name !== 'You' && 
                      <EmojiIcon className="cursor-pointer"/>
                      }
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
                <div className="rounded-full bg-neutral-800 px-[10px] py-[6px] w-max mt-2">
                  <Emoji unified={showSelectedEmoji} size={12} />
                </div>
              )}
            </>
          ) : (
            <span className='text-[16px] font-normal leading-6'>{message}</span>
          )}

          {gridImage === true ? (
            <div className='w-full max-w-[324px]'>
              <div className='grid grid-cols-2 gap-2 my-2'>
                <Image className='object-cover' src={gridImgFirst} alt='' />
                <Image className='object-cover' src={gridImgSecond} alt='' />
              </div>
              <div className='grid grid-cols-3 gap-2 my-2'>
                <Image className='object-contain' src={gridImgThird} alt='' />
                <Image className='object-contain' src={gridImgFourth} alt='' />
                <Image className='object-contain' src={gridImgFifth} alt='' />
              </div>
            </div>
          ) : (
            ''
          )}

          {rateResponse ? (
            <div className='flex items-center justify-between mt-3'>
              {/* <div className='item-center flex gap-4 rounded-xl bg-[#1E1E1E] px-4 py-[5px]'> */}
              {/* <p className='text-[13px] '>Rate this response</p> */}
              <div
                className='flex cursor-pointer rating'
                // onClick={() => setGoldenSvg(!goldenSvg)}
              >
                <Link href='#'>
                  <StarIcon
                    className={`${selectedStars >= 1 ? 'goldenSvg' : ''}`}
                    onMouseEnter={() => handleStarHover(1)}
                    onClick={() => handleStarClick(1)}
                  />
                </Link>

                <Link href='#'>
                  <StarIcon
                    className={`${selectedStars >= 2 ? 'goldenSvg' : ''}`}
                    onMouseEnter={() => handleStarHover(2)}
                    onClick={() => handleStarClick(2)}
                  />
                </Link>

                <Link href='#'>
                  <StarIcon
                    className={`${selectedStars >= 3 ? 'goldenSvg' : ''}`}
                    onMouseEnter={() => handleStarHover(3)}
                    onClick={() => handleStarClick(3)}
                  />
                </Link>

                <Link href='#'>
                  <StarIcon
                    className={`${selectedStars >= 4 ? 'goldenSvg' : ''}`}
                    onMouseEnter={() => handleStarHover(4)}
                    onClick={() => handleStarClick(4)}
                  />
                </Link>

                <Link href='#'>
                  <StarIcon
                    className={`${selectedStars >= 5 ? 'goldenSvg' : ''}`}
                    onMouseEnter={() => handleStarHover(5)}
                    onClick={() => handleStarClick(5)}
                  />
                </Link>
              </div>
              {/* </div> */}
              <div className='flex gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                >
                  <path
                    d='M12.5 5L7.5 10L12.5 15'
                    stroke='#979797'
                    stroke-width='1.8'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <p className='text-[13px] font-semibold text-[#979797]'>2/2</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                >
                  <path
                    d='M7.5 5L12.5 10L7.5 15'
                    stroke='#979797'
                    stroke-width='1.8'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

  );
};

export default Message;
