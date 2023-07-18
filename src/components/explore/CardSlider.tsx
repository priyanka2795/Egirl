import React from 'react';
import cardImg from '../../../public/assets/explore/explore-img.png';
import Image from 'next/image';
import RedCloseIcon from './svg/red-cross-icon.svg';
import UserIcon from './svg/user-icon.svg';
import GreenHeartIcon from './svg/green-heart-icon.svg';
import VerifiedIcon from './svg/verified-icon.svg';
import InfoIcon from './svg/info-icon.svg';
import Card from './Card';

const CardSlider = () => {
  return (
    <div className='relative mx-auto mt-[77px] w-max'>
      <Image src={cardImg} alt='' />
      <div className='absolute bottom-0 right-0 inline-flex w-full items-center justify-start bg-gradient-to-b from-transparent to-black px-6 pb-6 pt-[205px]'>
        <div className='flex-col items-center self-stretch justify-start w-full gap-8 '>
          <div className='flex flex-col items-start justify-center gap-2'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center text-[26px] font-bold leading-[26px] leading-loose text-white'>
                Mika-chan
                <VerifiedIcon />
              </div>
              <div>
                <InfoIcon />
              </div>
            </div>

            <div className='inline-flex items-start justify-start gap-1.5'>
              <div className='flex items-center justify-start gap-1 rounded-md bg-white bg-opacity-10 px-2 py-[3px]'>
                <div className='text-center text-sm font-normal leading-[18px] text-white'>
                  NSFW
                </div>
              </div>
              <div className='group relative flex cursor-pointer items-center justify-start gap-1 rounded-md bg-white bg-opacity-10 px-2 py-[3px] hover:bg-opacity-20'>
                <div className='text-center text-sm font-normal leading-[18px] text-white'>
                  Roleplay
                </div>
                <div className='absolute -left-[130px] bottom-[30px] hidden w-[323px] bg-zinc-900 p-4 group-hover:block'>
                  <h5 className='text-[15px] font-semibold'>Roleplay</h5>
                  <p className='text-xs text-white text-opacity-80'>
                    The term "roleplay" refers to a form of interactive
                    storytelling or improvisational acting in which participants
                    take on the roles of fictional characters and engage in a
                    simulated scenario or setting.
                  </p>
                </div>
              </div>
              <div className='flex items-center justify-start gap-1 rounded-md bg-white bg-opacity-10 px-2 py-[3px]'>
                <div className='text-center text-sm font-normal leading-[18px] text-white'>
                  Roleplay
                </div>
              </div>
              <div className='flex items-center justify-start gap-1 rounded-md bg-white bg-opacity-10 px-2 py-[3px]'>
                <div className='text-center text-sm font-normal leading-[18px] text-white'>
                  Roleplay
                </div>
              </div>
            </div>
          </div>
          <div className='inline-flex items-center justify-center w-full gap-8 mt-8'>
            <div className='flex items-start justify-start gap-2.5 rounded-[100px] border-2 border-red-500 p-6 backdrop-blur-[15px]'>
              <div className='relative w-8 h-8'>
                <RedCloseIcon />
              </div>
            </div>
            <div className='flex items-start justify-start gap-2.5 rounded-[100px] border-2 border-indigo-700 p-6'>
              <div className='relative h-8 w-8 backdrop-blur-[88px]'>
                <UserIcon />
              </div>
            </div>
            <div className='flex h-20 w-20 items-center justify-center gap-2.5 rounded-[100px] border-2   border-lime-500 px-6 pb-6 pt-[26px] backdrop-blur-[15px]'>
              <div className='relative w-8 h-8'>
                <GreenHeartIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
