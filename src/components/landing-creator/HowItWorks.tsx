import React from 'react';
import { NextImage } from '@components/ui/next-image';
import ExperienceTheFuture from '../landing-user/assets/ExperienceTheFuture';
import RoundedCreatingTagIcon from '@components/svg-assets/RoundedCreatingTagIcon';
import RoundedEgirlIcon from '@components/svg-assets/RoundedEgirlTagIcon';
import CreatorRoundIcon1 from '@components/svg-assets/CreatorRoundIcon1';
import EGirlIcon from '@components/svg-assets/EGirlIcon';
import HeaderGraphics from '@components/landing-creator/assets/Header/HeaderGraphics';
import StarIcon from '@components/landing-creator/assets/HowItWorks/StarIcon';
import Right1 from './assets/HowItWorks/Right1';
import Left1 from './assets/HowItWorks/Left1';
import Right2 from './assets/HowItWorks/Right2';

const Header = () => {
  return (
    <div className='bg-[#FFFFFF] px-[100px] py-[100px] lg:px-[100px]'>
      <div className='flex select-none justify-center space-x-2'>
        <span className='text-[96px] font-[600] text-[black] lg:text-[48px]'>
          How it
        </span>
        <span className='text-[96px] font-[500] italic text-[black] lg:text-[48px]'>
          works?
        </span>
      </div>
      {/* section 1 */}
      <div className='flex flex-col gap-y-[120px]'>
        <div className='flex flex-col'>
          <div className='mx-[60px] mt-[80px] flex justify-between'>
            <div className='flex select-none flex-col justify-center'>
              <button className='mb-[40px] w-min rounded-lg bg-[#EAE8FD] px-[20px] py-[8px] text-[#7362C6]'>
                <span className='max-lines-1'>STEP&nbsp;1</span>
              </button>
              <h3 className='mb-[32px] text-[34px] font-[600] text-black'>
                Make an Egirl
              </h3>
              <div className='space-y-4 text-[24px] font-[400] text-black'>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Pick a name</p>
                </div>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Give her a unique personality</p>
                </div>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Design her looks & voice</p>
                </div>
              </div>
            </div>
            <Right1 className='h-[620px] w-[500px]' />
          </div>
        </div>

        {/* section 2 */}
        <div className='flex flex-col'>
          <div className='mx-[60px] flex justify-between'>
            <Left1 className='h-[620px] w-[500px]' />
            <div className='mr-[60px] flex select-none flex-col items-start justify-center'>
              <button className='mb-[40px] w-min rounded-lg bg-[#EAE8FD] px-[20px] py-[8px] text-[#7362C6]'>
                <span className='max-lines-1'>STEP&nbsp;2</span>
              </button>
              <h3 className='mb-[32px] text-[34px] font-[600] text-black'>
                Customize Your Profile
              </h3>
              <div className='space-y-4 text-[24px] font-[400] text-black'>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Write an eye-catching bio</p>
                </div>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Select subscription tiers & pricing</p>
                </div>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Choose what your subs can request</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className='flex flex-col'>
          <div className='mx-[60px] flex justify-between'>
            <div className='flex select-none flex-col justify-center'>
              <button className='mb-[40px] w-min rounded-lg bg-[#EAE8FD] px-[20px] py-[8px] text-[#7362C6]'>
                <span className='max-lines-1'>STEP&nbsp;3</span>
              </button>
              <h3 className='mb-[32px] text-[34px] font-[600] text-black'>
                Grow Your Audience
              </h3>
              <div className='space-y-4 text-[24px] font-[400] text-black'>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Create spicy content</p>
                </div>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Tell followers about your Egirl</p>
                </div>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Post updates & stay active</p>
                </div>
              </div>
            </div>
            <Right2 className='h-[620px] w-[500px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
