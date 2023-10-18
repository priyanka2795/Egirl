import React, { useState } from 'react';
import Image from 'next/image';
import arrowUp from '../../../public/assets/chevron-up-grey.png';
import homeIcon from '../../../public/assets/house-line.png';
import Palette from '../creator-studio/svg/palette-grey.svg';
import SidebarMenuItem from '@components/common/Sidebar/SidebarMenuItem';
import PartnerProgram from '../creator-studio/svg/users-alt.svg';
import Monetization from '../creator-studio/svg/coins-alt.svg';
import Link from 'next/link';

const LearningCenterSidebar = () => {
  return (
    <div className='flex h-[calc(100vh-72px)] w-full max-w-[300px] flex-col justify-between overflow-y-auto border-r-[1px] border-white/[0.16]'>
      <div className='mx-6 my-5 max-w-[276px] max-[1279px]:mx-2 '>
        <div className=' flex w-full cursor-pointer items-center gap-2 rounded-[12px] bg-white/[0.08] px-3 py-2.5'>
          <Image src={homeIcon} alt='' />
          <div className='text-[15px] text-white'>Home</div>
        </div>

        <div className='flex cursor-pointer items-center justify-between py-5 pl-3'>
          <div className='flex gap-2'>
            <Palette strokeClasses='stroke-[#515151]' />
            <span className='text-[15px] font-semibold text-white'>
              Character Creation
            </span>
          </div>
          <Image src={arrowUp} alt='' />
        </div>
        <div className='flex flex-col'>
          <Link href=''>
            <a className='py-3 pl-12 text-[15px] font-semibold text-white'>
              Profile
            </a>
          </Link>
          <Link href=''>
            <a className='py-3 pl-12 text-[15px] font-semibold text-white'>
              Personality
            </a>
          </Link>
          <Link href=''>
            <a className='py-3 pl-12 text-[15px] font-semibold text-white'>
              Image generator
            </a>
          </Link>
          <Link href=''>
            <a className='py-3 pl-12 text-[15px] font-semibold text-white'>
              Style generator
            </a>
          </Link>
          <Link href=''>
            <a className='py-3 pl-12 text-[15px] font-semibold text-white'>
              Voice
            </a>
          </Link>
          <Link href=''>
            <a className='py-3 pl-12 text-[15px] font-semibold text-white'>
              Gifts
            </a>
          </Link>

          {/* <SidebarMenuItem
            text='Profile'
            href='/learnig-center/profile'
            Icon={}
            IconActive={icon}
            StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto pl-3`}
            sideBarMenuText={`max-[1279px]:!hidden w-full flex justify-center `}
          /> */}
          {/* <SidebarMenuItem
            text='Personality'
            href='/learnig-center/personality'
            Icon={''}
            IconActive={''}
            StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto pl-3`}
            sideBarMenuText={`max-[1279px]:!hidden w-full flex justify-center `}
          />  */}
        </div>
        <SidebarMenuItem
          text='Monetization'
          href='/monetization'
          Icon={Monetization}
          IconActive={Monetization}
          StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto pl-3`}
          sideBarMenuText={`max-[1279px]:!hidden w-full flex justify-center `}
        />
        <SidebarMenuItem
          text='Partner Program'
          href='/partner-program'
          Icon={PartnerProgram}
          IconActive={PartnerProgram}
          StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto pl-3`}
          sideBarMenuText={`max-[1279px]:!hidden w-full flex justify-center `}
        />
      </div>
    </div>
  );
};

export default LearningCenterSidebar;
