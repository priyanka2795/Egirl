import React from 'react';
import Image from 'next/image';
import CreateStudioLogo from '../creator-studio/svg/creator-studio-logo.svg';
import searchIcon from '../../../public/assets/search-icon.png';
import Link from 'next/link';
const LearningCenterNavbar = () => {
  return (
    <>
      <div className='flex items-center justify-between border-b-[1px] border-white/[0.16] bg-[#070707] px-7 py-4'>
        <div className='cursor-pointer'>
          <Link href='/learning-center' passHref>
            <a>
              <CreateStudioLogo />
            </a>
          </Link>
        </div>
        <div className='flex items-center gap-6'>
          <div className=' text-[15px] text-white'>Guide</div>
          <div className='flex w-[300px] items-center gap-3 rounded-[10px] bg-white/[0.05] px-4 py-2'>
            <Image src={searchIcon} alt={''} />
            <input
              type='search'
              placeholder='Search...'
              className='font-light w-full border-none bg-transparent p-0 text-[14px] leading-6 placeholder:text-[15px] placeholder:text-[#979797] focus:ring-0'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningCenterNavbar;
