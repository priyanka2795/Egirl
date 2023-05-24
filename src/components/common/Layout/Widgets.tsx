import News from './News';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RightSide from './Right side.svg';
import UsersSection from './Users section.svg';
import SearchIcon from './SearchIcon.svg';
import useScroll from '../../../../hooks/useScroll';
import YouMightLike from './YouMightLike';

export default function Widgets() {
  const [sticky, animate] = useScroll();

  return (
    <div className='hidden bg-main-background lg:inline xl:w-[600px]'>
      <div
        className={` z-50  ${sticky ? 'sticky ' : ''}  ${
          animate ? 'top-0' : '-top-[71px]'
        } h-[108px] max-w-[640px] bg-main-background transition-all duration-[300ms] ease-linear lg:min-w-[640px]`}
      >
        <div className='mr-2 w-full pb-5 pt-6'>
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

      <div className='sticky top-0 max-w-[376px] '>
        <YouMightLike />
      </div>
    </div>
  );
}

// used to have margin left of 8 (32px)
// <div className='ml-8 hidden space-y-5 bg-orange-400 lg:inline xl:w-[600px]'>
