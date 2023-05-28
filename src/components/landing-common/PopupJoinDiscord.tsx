import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import ExperienceTheFuture from './assets/ExperienceTheFuture';

interface Props {
  setBetaAccess: () => void;
  showBetaAccess: boolean;
}

const PopupJoinDiscord = ({ setBetaAccess, showBetaAccess }: Props) => {
  return (
    <div>
      <div
        className={`fixed top-0 z-10 grid h-screen  w-full place-items-center bg-black ${
          showBetaAccess ? 'flex' : 'hidden'
        }`}
      >
        <div className='grid w-full place-items-center px-[10px] md:w-[646px] md:px-0'>
          <button className='mb-6 flex items-center justify-center rounded-lg bg-[#1B1A25] px-3 py-[10px] text-[15px] font-[500] text-white'>
            <ExperienceTheFuture className='mr-2' />
            Join us
          </button>
          <h1 className='mb-5 text-center text-[40px] font-[600] text-white md:text-[48px]'>
            Secure your spot on the waitlist
          </h1>
          <h2 className='mb-12 text-center text-[16px] font-[400] text-[#807F85] md:text-left md:text-[18px]'>
            Select the Beta Tester role when joining the discord
          </h2>
          <a
            href='https://discord.gg/uvAaAkbhEm'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center rounded-[12px] bg-[#5848BC] px-[24px] py-[16px] drop-shadow'
          >
            <span className='text-[16px] lg:text-[18px]'>Join Discord</span>
          </a>
        </div>
        <button
          onClick={() => {
            setBetaAccess();
          }}
          className='absolute right-10 top-10'
        >
          <XMarkIcon className='h-[40px] w-[40px] cursor-pointer fill-[white] md:h-20 md:w-20 lg:h-10 lg:w-10'></XMarkIcon>
        </button>
      </div>
    </div>
  );
};

export default PopupJoinDiscord;
