import React, { useState } from 'react';
import Image from 'next/image';
import CreateStudioLogo from '../creator-studio/svg/creator-studio-logo.svg';
import searchIcon from '@/assets/search-icon.webp';
import arrowRight from '@/assets/chevron-right-small.webp';
import Link from 'next/link';

interface NavbarProps {
  setShowSearchResult: any;
}
const LearningCenterNavbar = ({ setShowSearchResult }: NavbarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

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
          <div className=''>
            <div className='relative flex w-[378px] items-center gap-3 rounded-[14px] bg-white/[0.05] px-4 py-2'>
              <Image src={searchIcon} alt={''} />
              <input
                type='search'
                placeholder='Search...'
                className='font-light w-full border-none bg-transparent p-0 text-[15px] leading-6 placeholder:text-[15px] placeholder:text-[#979797] focus:ring-0'
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </div>
            {searchTerm && (
              <div className='absolute right-6 top-[65px] z-[50] w-[380px] rounded-[14px] bg-[#1A1A1A] p-2 shadow'>
                <div
                  className='cursor-pointer rounded-lg p-2 hover:bg-white/[0.05]'
                  onClick={() => {
                    setShowSearchResult(true), setSearchTerm('');
                  }}
                >
                  <div className='text-[15px] font-semibold text-white'>
                    Create Character
                  </div>
                  <div className='flex items-center text-[13px] text-[#979797]'>
                    <span>Learning Center</span>
                    <Image src={arrowRight} alt='' />
                    <span>Character Creation</span>
                    <Image src={arrowRight} alt='' />
                    <span>Profile</span>
                  </div>
                </div>
                <div className='cursor-pointer rounded-lg p-2 hover:bg-white/[0.05]'>
                  <div className='text-[15px] font-semibold text-white'>
                    Unique name for your Character
                  </div>
                  <div className='flex items-center text-[13px] text-[#979797]'>
                    <span>Learning Center</span>
                    <Image src={arrowRight} alt='' />
                    <span>Character Creation</span>
                    <Image src={arrowRight} alt='' />
                    <span>Profile</span>
                  </div>
                </div>
                <div className='cursor-pointer rounded-lg p-2 hover:bg-white/[0.05]'>
                  <div className='text-[15px] font-semibold text-white'>
                    Generate Images
                  </div>
                  <div className='flex items-center text-[13px] text-[#979797]'>
                    <span>Learning Center</span>
                    <Image src={arrowRight} alt='' />
                    <span>Character Creation</span>
                    <Image src={arrowRight} alt='' />
                    <span>Image Generator</span>
                  </div>
                </div>
                <div className='cursor-pointer rounded-lg p-2 hover:bg-white/[0.05]'>
                  <div className='text-[15px] font-semibold text-white'>
                    Earn money on your characters
                  </div>
                  <div className='flex items-center text-[13px] text-[#979797]'>
                    <span>Learning Center</span>
                    <Image src={arrowRight} alt='' />
                    <span>Monetization</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningCenterNavbar;
