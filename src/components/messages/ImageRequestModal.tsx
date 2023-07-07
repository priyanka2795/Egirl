import React, { useState } from 'react';
import RandomImageToggle from './Toggler';
import CloseIcon from './svg/close-icon.svg';
import ImgIcon from './svg/img-icon.svg';
import gridImg1 from '../../../public/assets/messages/grid-img-6.png';
import gridImg2 from '../../../public/assets/messages/grid-img-7.png';
import gridImg3 from '../../../public/assets/messages/grid-img-8.png';
import gridImg4 from '../../../public/assets/messages/grid-img-9.png';
import gridImg5 from '../../../public/assets/messages/grid-img-10.png';
import gridImg6 from '../../../public/assets/messages/grid-img-11.png';
import gridImg7 from '../../../public/assets/messages/grid-img-12.png';
import gridImg8 from '../../../public/assets/messages/grid-img-13.png';
import Image from 'next/image';

type ImageRequestModal = {
  closeModal?: () => void;
};
const ImageRequestModal = ({ closeModal }: ImageRequestModal) => {
  const [randomImageState, setRandomImageState] = useState(true);
  return (
    <div className='flex h-[618px] w-[530px] flex-col items-center justify-start rounded-2xl bg-zinc-900'>
      <div className='inline-flex items-start justify-start gap-2 self-stretch border-b border-white border-opacity-10 p-6'>
        <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-1'>
          <div className='w-[286px] text-[18px] font-bold leading-normal text-white'>
            Image request
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <RandomImageToggle
            handleToggleState={() => setRandomImageState(!randomImageState)}
            toggleState={randomImageState}
            toggleText={'Random'}
          />
          <span className='h-5 border-l-[2px] border-white/10 text-xl text-white/10'></span>
          <CloseIcon />
        </div>
      </div>
      <div className='flex h-[546px] flex-col items-start justify-start self-stretch'>
        <div className='flex h-[338px] flex-col items-start justify-start gap-5 self-stretch px-6 pb-5'>
          <div className='mt-6 flex gap-3'>
            <button
              className={`rounded-xl bg-white bg-opacity-20 px-4 py-2 font-bold text-[#979797] text-white`}
            >
              Clothes
            </button>
            <button
              className={`rounded-xl px-4 py-2 font-bold text-[#979797] `}
            >
              Accessories
            </button>
            <button
              className={`rounded-xl px-4 py-2 font-bold text-[#979797] `}
            >
              Poses
            </button>
            <button
              className={`rounded-xl px-4 py-2 font-bold text-[#979797] `}
            >
              Locations
            </button>
          </div>

          <div className='grid grid-cols-4 gap-[10px]'>
            <div className='relative'>
              <Image
                src={gridImg1}
                alt=''
                className='rounded-xl object-cover'
              />
              <p className='absolute bottom-[6px] left-0 h-max w-full bg-black/60 p-2 text-center  text-[13px] font-semibold'>
                Red Dress
              </p>
            </div>
            <div className='relative'>
              <Image
                src={gridImg2}
                alt=''
                className='rounded-xl object-cover'
              />
              <p className='absolute bottom-[6px] left-0 h-max w-full bg-black/60 p-2 text-center  text-[13px] font-semibold'>
                Shorts
              </p>
            </div>
            <div className='relative'>
              <Image
                src={gridImg3}
                alt=''
                className='rounded-xl object-cover'
              />
              <p className='absolute bottom-[6px] left-0 h-max w-full bg-black/60 p-2 text-center  text-[13px] font-semibold'>
                Red Dress
              </p>
            </div>
            <div className='relative'>
              <Image
                src={gridImg4}
                alt=''
                className='rounded-xl object-cover'
              />
              <p className='absolute bottom-[6px] left-0 h-max w-full bg-black/60 p-2 text-center text-[13px] font-semibold'>
                Red Dress
              </p>
            </div>
            <div className='relative'>
              <Image
                src={gridImg5}
                alt=''
                className='rounded-xl object-cover'
              />
              <p className='absolute bottom-[6px] left-0 h-max w-full bg-black/60 p-2 text-center text-[13px] font-semibold'>
                Red Dress
              </p>
            </div>
            <div className='relative'>
              <Image
                src={gridImg6}
                alt=''
                className='rounded-xl object-cover'
              />
              <p className='absolute bottom-[6px] left-0 h-max w-full bg-black/60 p-2 text-center text-[13px] font-semibold'>
                Red Dress
              </p>
            </div>
            <div className='relative'>
              <Image
                src={gridImg7}
                alt=''
                className='rounded-xl object-cover'
              />
              <p className='absolute bottom-[6px] left-0 h-max w-full bg-black/60 p-2 text-center text-[13px] font-semibold'>
                Red Dress
              </p>
            </div>
            <div className='relative'>
              <Image
                src={gridImg8}
                alt=''
                className='rounded-xl object-cover'
              />
              <p className='absolute bottom-[6px] left-0 h-max w-full bg-black/60 p-2 text-center text-[13px] font-semibold'>
                Red Dress
              </p>
            </div>
          </div>
        </div>
        <div className='flex h-28 flex-col items-start justify-start gap-2.5 self-stretch bg-neutral-900 px-6 pt-6'>
          <div className='inline-flex items-start justify-start gap-3 self-stretch rounded-2xl bg-[#1A1A1A] p-5'>
            <div className='flex items-start justify-start gap-2.5 rounded-[100px] bg-white bg-opacity-5 p-3.5'>
              {/* <div className='relative w-5 h-5' /> */}
              <ImgIcon />
            </div>
            <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-3'>
              <div className='flex h-[42px] flex-col items-start justify-start gap-1.5 self-stretch'>
                <div className='self-stretch text-[14px] font-bold leading-none text-white'>
                  Image request
                </div>
                <div className='self-stretch text-[14px] font-normal leading-none text-neutral-400'>
                  The selected styles will be displayed here.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='inline-flex items-end justify-end gap-3 self-stretch bg-neutral-900 p-6'>
          <button
            className='rounded-2xl border border-white border-opacity-30 px-5 py-[13px] text-[16px] font-bold leading-snug text-white'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className='rounded-2xl bg-indigo-700 px-5 py-[13px] text-[16px] font-bold leading-snug text-white'
            onClick={closeModal}
          >
            Send request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageRequestModal;
