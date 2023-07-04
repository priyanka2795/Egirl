import React from 'react';
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

interface MessageProps {
  src: string;
  alt: string;
  name: string;
  time: string;
  message: string;
  gridImage?: boolean;
  messageIcons?: boolean;
  rateResponse?: boolean;
}

const Message: React.FC<MessageProps> = ({
  src,
  alt,
  name,
  time,
  message,
  gridImage,
  messageIcons,
  rateResponse
}) => {
  return (
    <div className='flex w-full items-start py-4'>
      <Image
        key={0}
        src={src} // Change to your image path
        alt={alt} // Change to your alt text
        width={40}
        height={40}
        className='rounded-full'
      />
      <div className='ml-3 flex w-full flex-col'>
        <div className='mb-[2px] flex items-center'>
          <span className='mr-2 text-[15px] font-semibold leading-5'>
            {name}
          </span>
          <span className='text-xs font-light text-[#979797]'>{time}</span>
        </div>

        {messageIcons ? (
          <span className='flex w-full items-start justify-between text-xs font-light leading-[18px]'>
            {message}
            <div className='flex gap-1'>
              <Link href='#'>
                <RefreshIcon />
              </Link>
              <Link href='#'>
                <EmojiIcon />
              </Link>
              <Link href='#'>
                <CopyIcon />
              </Link>
            </div>
          </span>
        ) : (
          <span className='text-xs font-light leading-[18px]'>{message}</span>
        )}

        {gridImage === true ? (
          <div className='w-full max-w-[324px]'>
            <div className='my-2 grid grid-cols-2 gap-2'>
              <Image className='object-cover' src={gridImgFirst} alt='' />
              <Image className='object-cover' src={gridImgSecond} alt='' />
            </div>
            <div className='my-2 grid grid-cols-3 gap-2'>
              <Image className='object-contain' src={gridImgThird} alt='' />
              <Image className='object-contain' src={gridImgFourth} alt='' />
              <Image className='object-contain' src={gridImgFifth} alt='' />
            </div>
          </div>
        ) : (
          ''
        )}

        {rateResponse ? (
          <div className='mt-3 flex'>
            <div className='item-center flex gap-4 bg-[#1E1E1E] px-4 py-[5px]'>
              <p className='text-[13px] '>Rate this response</p>
              <div className='flex'>
                <Link href='#'>
                  <StarIcon />
                </Link>

                <Link href='#'>
                  <StarIcon />
                </Link>

                <Link href='#'>
                  <StarIcon />
                </Link>

                <Link href='#'>
                  <StarIcon />
                </Link>

                <Link href='#'>
                  <StarIcon />
                </Link>
              </div>
            </div>
            <div></div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Message;
