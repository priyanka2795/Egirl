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
    <div className='mt-[96px] bg-[#000000] px-24 lg:px-[100px]'>
      <div className='py-20'>
        <div className=''>
          <div className='lg:hidden'>
            <EGirlIcon className='overflow-visible' />
          </div>
          <div className='flex justify-end lg:hidden'>
            <RoundedEgirlIcon />
          </div>
          <div className='flex items-center justify-center lg:justify-between'>
            <div className='hidden lg:block'>
              <EGirlIcon className='overflow-visible' />
            </div>
            <div className='flex h-[80px] w-[320px] items-center space-x-2 rounded-[8px] bg-[#313131] px-[8px] py-[12px] lg:h-[40px] lg:w-[175px]'>
              <StarIcon className='h-[40px] w-[40px] fill-[#5848BC] pr-[8px] lg:h-[20px] lg:w-[20px]'></StarIcon>
              <div className='flex'>
                <span className='text-[30px] font-[500] text-[white] md:text-[24px] lg:text-[15px]'>
                  become a creator
                </span>
              </div>
            </div>
            <div className='hidden lg:block lg:w-[100px]'></div>
          </div>
          <div className='flex items-center justify-center pt-[24px] lg:justify-between'>
            <div className='hidden lg:block lg:w-[80px]'></div>
            <div className=''>
              <div className='flex-none items-center justify-center space-x-5 text-center'>
                <div className='flex items-center justify-center space-x-3'>
                  <span className='text-[112px] font-[600] uppercase text-[white] lg:text-[56px]'>
                    Let
                  </span>
                  <div className='flex justify-center'>
                    <CreatorRoundIcon1 className='l' />
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
                    <NextImage
                      width={40}
                      height={40}
                      src={'/assets/svgImages/roundCreatorIcon.svg'}
                      alt={'round creator icon'}
                    />
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
            <div className='hidden lg:block'>
              <RoundedEgirlIcon />
            </div>
          </div>
        </div>
        <div className='pt-[30px]'>
          <div className='hidden lg:block'>
            <RoundedCreatingTagIcon />
          </div>
          <div className='flex justify-center'>
            <span className='text-[36px] font-[400] text-[white] lg:text-[18px]'>
              Join our waitlist for beta access, 3000 people have joined so far!
            </span>
          </div>
          <div className='flex justify-center pt-[20px]'>
            <div className='flex w-[515px]'>
              <input
                type='email'
                className='form-input w-[395px] rounded-l-[12px] border-transparent bg-[#313131] px-4 py-3 text-[36px] text-[#949698] drop-shadow lg:text-[18px]'
                placeholder='Enter your email'
              />
              <div className='flex w-[158px] items-center justify-center rounded-r-[12px] bg-[#5848BC] px-[24px] py-[16px] drop-shadow'>
                <span className='text-[36px] lg:text-[18px]'>Join</span>
              </div>
            </div>
          </div>
          <div>
            <div className='mt-10 lg:hidden'>
              <RoundedCreatingTagIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
