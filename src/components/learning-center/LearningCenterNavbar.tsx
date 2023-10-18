import React from 'react';
import Image from 'next/image';
import Logo from '../common/Sidebar/svg/logo.svg';
import searchIcon from '../../../public/assets/search-icon.png';
const LearningCenterNavbar = () => {
  return (
    <>
      <div className='flex items-center justify-between py-5'>
        <div>
          <Logo />
        </div>
        <div className='flex items-center gap-[2px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
          <div className='h-5 w-7'>
            <Image className='h-full w-full' src={searchIcon} alt={''} />
          </div>
          <input
            type='text'
            placeholder='Search for answers'
            className='font-light border-none bg-transparent p-0 text-[15px] leading-6 text-[#979797] placeholder:text-[15px] focus:ring-0'
          />
        </div>
      </div>
    </>
  );
};

export default LearningCenterNavbar;
