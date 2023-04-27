import React from 'react';
import { StarIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import HeaderIllustration from './assets/Header/HeaderIllustration';

const Header = () => {
  return (
    <div className='flex  bg-[#000000] px-24 pt-[96px] lg:px-[100px] 2xl:px-[140px]'>
      <div className='flex flex-col justify-center'>
        <div className='flex h-[80px] w-[320px] items-center space-x-2 rounded-[8px] bg-[#1414] px-[8px] py-[12px] lg:h-[40px] lg:w-[175px]'>
          <StarIcon className='h-[40px] w-[40px] fill-[#5848BC] pr-[8px] lg:h-[20px] lg:w-[20px]'></StarIcon>
          <div className='flex'>
            <span className='text-[30px] font-[500] text-[white] md:text-[24px] lg:text-[15px]'>
              become a creator
            </span>
          </div>
        </div>
        <h1 className='max-lines-1 mt-6 text-[56px] font-[600] text-white'>
          LET YOUR <span className='font-[500] italic'>IMAGINATION</span>
          <br />
          RUN WILD
        </h1>
        <div>
          <button className='mt-12 rounded-xl bg-[#5848BC] py-4 px-[30px] text-lg font-semibold text-white transition duration-100 hover:bg-[#4D37DA]'>
            Join us
          </button>
        </div>
      </div>
      <div className='my-[80px] flex items-center justify-center'>
        <HeaderIllustration className='' />
      </div>
    </div>
  );
};

export default Header;
