import React from 'react';
import { StarIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { NextImage } from '@components/ui/next-image';
import ExperienceTheFuture from '../landing-user/assets/ExperienceTheFuture';
import RoundedCreatingTagIcon from '@components/svg-assets/RoundedCreatingTagIcon';
import RoundedEgirlIcon from '@components/svg-assets/RoundedEgirlTagIcon';
import CreatorRoundIcon1 from '@components/svg-assets/CreatorRoundIcon1';
import EGirlIcon from '@components/svg-assets/EGirlIcon';
import HeaderGraphics from '@components/landing-creator/assets/Header/HeaderGraphics';
import Chick1 from './assets/Header/Chick1';
import Chick2 from './assets/Header/Chick2';

const Header = () => {
  return (
    <div className='bg-[#000000] px-[100px]'>
      <HeaderGraphics className='mt-[196px]  w-full' />

      <div className='flex flex-col items-center'>
        <div className='mt-[2px]  flex rounded-[8px] bg-[#141414] px-[12px] py-[10px]'>
          <ExperienceTheFuture className='mr-2' />

          <p className='text-[30px] font-[500] text-[white] md:text-[24px] lg:text-[15px]'>
            become a creator
          </p>
        </div>
        <div className='mt-6'>
          <div className='flex-none items-center justify-center space-x-5 text-center'>
            <div className='flex items-center justify-center space-x-3'>
              <span className='text-[112px] font-[600] uppercase text-[white] lg:text-[56px]'>
                Let
              </span>
              <div className='flex justify-center'>
                {/* <CreatorRoundIcon1 className='l' /> */}
                <Chick1 />
              </div>
              <span className='text-[112px] font-[600] uppercase text-[white] lg:text-[56px]'>
                Your
              </span>
            </div>
            <div className='flex items-center justify-center space-x-3'>
              <span className='text-[112px] font-[600] uppercase italic text-[white] lg:text-[56px]'>
                Imagination
              </span>
              <div className='flex justify-center'>
                {/* <NextImage
                  width={40}
                  height={40}
                  src={'/assets/svgImages/roundCreatorIcon.svg'}
                  alt={'round creator icon'}
                /> */}
                <Chick2 />
              </div>
              <span className='text-[112px] font-[600] uppercase text-[white] lg:text-[56px]'>
                Run
              </span>
            </div>
            <div>
              <span className='text-[112px] font-[600] uppercase text-[white] lg:text-[56px]'>
                Wild
              </span>
            </div>
          </div>
        </div>
        <button className='mb-[176px] mt-12 rounded-xl bg-[#5848BC] py-4 px-[30px] text-lg font-semibold text-white'>
          Join us
        </button>
      </div>
    </div>
  );
};

export default Header;
