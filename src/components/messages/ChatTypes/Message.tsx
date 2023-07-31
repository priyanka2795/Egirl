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

interface MessageProps {
  src: string;
  alt: string;
  name: string;
  time: string;
  message: string;
  gridImage?: boolean;
  messageIcons?: boolean;
  rateResponse?: boolean;
  isLast?: boolean;
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
  isLast
}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const handkeCloseModal = () => {};
  const [goldenSvg, setGoldenSvg] = useState(false);
  return (
    <div className='flex items-start w-full py-4 refresh-icon-parent '>
      <Image
        key={0}
        src={src} // Change to your image path
        alt={alt} // Change to your alt text
        width={40}
        height={40}
        className='rounded-full'
      />
      <div className='flex flex-col w-full ml-3 group'>
        <div className='mb-[2px] flex items-center'>
          <span className='mr-2 text-[15px] font-medium leading-5'>
            {name}
          </span>
          <span className='text-xs font-light text-[#979797]'>{time}</span>
        </div>

        {messageIcons ? (
          <span className='flex items-start justify-between w-full gap-[56px] text-sm font-light leading-5 refresh-icon '>
            {message}
            <div className='flex gap-1'>
                <div className='hidden group-hover:flex'>
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
            </div>
          </span>
        ) : (
          <span className='text-xs font-light leading-[18px]'>{message}</span>
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
              onClick={() => setGoldenSvg(!goldenSvg)}
            >
              <Link href='#'>
                <StarIcon
                  className={`${goldenSvg === true ? 'goldenSvg' : ''}`}
                />
              </Link>

              <Link href='#'>
                <StarIcon
                  className={`${goldenSvg === true ? 'goldenSvg' : ''}`}
                />
              </Link>

              <Link href='#'>
                <StarIcon
                  className={`${goldenSvg === true ? 'goldenSvg' : ''}`}
                />
              </Link>

              <Link href='#'>
                <StarIcon
                  className={`${goldenSvg === true ? 'goldenSvg' : ''}`}
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
      {/* <MessageSlider /> */}
      {/* open: boolean;
  children: ReactNode;
  className?: string;
  modalAnimation?: Variants;
  modalClassName?: string;
  closePanelOnClick?: boolean;
  closeModal: () => void; */}
      {/* <Modal
        open={true}
        modalClassName='flex flex-col gap-6 max-w-xl bg-main-background w-full p-8 rounded-2xl h-[576px]'
        closeModal={handkeCloseModal}
        modalOverlayStyle='!bg-black/80'
      >
        Hello
      </Modal> */}
    </div>
  );
};

export default Message;
