import News from './News';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RightSide from './Right side.svg';
import UsersSection from './Users section.svg';
import SearchIcon from './SearchIcon.svg';
import useScrollDirection from '../../../../hooks/useScrollDirection';
import YouMightLike from './YouMightLike';

export default function Widgets() {
  const scrollDirection = useScrollDirection();

  return (
    <div className='hidden bg-main-background lg:inline xl:w-[600px]'>
      <div
        className={`fixed z-50 ${
          scrollDirection == 'down' ? '-translate-y-[96px] transform' : 'top-0'
        } flex  h-[96px] w-full max-w-[376px] bg-yellow-400 transition-all duration-200 `}
      >
        <div className='mr-2 w-full pb-3 pt-5'>
          <div className='flex h-[64px] items-center justify-between rounded-r-[14px] bg-main-bar'>
            <div className='relative w-full '>
              <div className='absolute left-4 top-3'>
                <SearchIcon />
              </div>
              <input
                className='py-auto h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] font-light leading-6 text-[#979797]'
                type='text'
                placeholder='Search'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='sticky top-0 mt-[96px] max-w-[376px] bg-red-400'>
        <YouMightLike />
      </div>
    </div>
  );
}

// used to have margin left of 8 (32px)
// <div className='ml-8 hidden space-y-5 bg-orange-400 lg:inline xl:w-[600px]'>
