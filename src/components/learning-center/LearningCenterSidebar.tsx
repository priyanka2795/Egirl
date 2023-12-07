import React, { useState } from 'react';
import Image from 'next/image';
import arrowUp from '@/assets/chevron-up-grey.webp';
import arrowDown from '@/assets/chevron-down2.webp';
import homeIcon from '@/assets/house-line.webp';
import Palette from '../creator-studio/svg/palette-grey.svg';
import SidebarMenuItem from '@components/common/Sidebar/SidebarMenuItem';
import PartnerProgram from '../creator-studio/svg/users-alt.svg';
import Monetization from '../creator-studio/svg/coins-alt.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

const sidebarLinkData = [
  {
    title: 'Profile',
    pathname: '/learning-center-profile'
  },
  {
    title: 'Personality',
    pathname: '/learning-center-personality'
  },
  {
    title: 'Image generator',
    pathname: '/learning-center-imageGenerator'
  },
  {
    title: 'Style generator',
    pathname: '/learning-center-styleGenerator'
  },
  {
    title: 'Voice',
    pathname: '/learning-center-voice'
  },
  {
    title: 'Gifts',
    pathname: '/learning-center-gifts'
  }
];

interface SidebarProps {
  setShowSearchResult: any;
}
const LearningCenterSidebar = ({ setShowSearchResult }: SidebarProps) => {
  const router = useRouter();

  const [showDropDown, setShowDropDown] = useState(true);
  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <div className='flex h-[calc(100vh-72px)] w-full max-w-[300px] flex-col justify-between overflow-y-auto border-r-[1px] border-white/[0.16]'>
      <div className='mx-6 my-5 max-w-[276px] max-[1279px]:mx-2 '>
        <Link href='/learning-center'>
          <a
            className={`${
              router.asPath === '/learning-center' ? 'bg-white/[0.08]' : ''
            } flex w-full cursor-pointer items-center gap-2 rounded-[12px]  px-3 py-2.5 hover:bg-white/[0.08]`}
            onClick={() => setShowSearchResult(false)}
          >
            <Image src={homeIcon} alt='' />
            <div className='text-[15px] text-white'>Home</div>
          </a>
        </Link>

        <div
          className='flex items-center justify-between pt-5 pb-3 pl-3 cursor-pointer'
          onClick={handleDropDown}
        >
          <div className='flex gap-2'>
            <Palette strokeclasses='stroke-[#515151]' />
            <span className='text-[15px] font-semibold text-white'>
              Character Creation
            </span>
          </div>
          <Image src={arrowUp} alt='' />
        </div>
        {showDropDown && (
          <div className='flex flex-col'>
            {sidebarLinkData.map((ele, index) => {
              return (
                <Link href={ele.pathname} key={index}>
                  <a
                    className={` ${
                      router.asPath === ele.pathname ? 'bg-white/[0.08]' : ''
                    } ml-7 rounded-[12px] mt-2  py-2.5 pl-4 text-[15px] font-semibold text-white hover:bg-white/[0.08]`}
                  >
                    {ele.title}
                  </a>
                </Link>
              );
            })}
          </div>
        )}
         <Link href='/learning-center-monetization'>
          <a
            className={`${
              router.asPath === '/learning-center-monetization' ? 'bg-white/[0.08]' : ''
            } flex w-full cursor-pointer items-center gap-2 rounded-[12px] mt-2  px-3 py-2.5 hover:bg-white/[0.08]`}
            onClick={() => setShowSearchResult(false)}
          >
            <Monetization />
            <div className='text-[15px] text-white'>Monetization</div>
          </a>
        </Link>
        <Link href='/learning-center-partnerProgram'>
          <a
            className={`${
              router.asPath === '/learning-center-partnerProgram' ? 'bg-white/[0.08]' : ''
            } flex w-full cursor-pointer items-center gap-2 rounded-[12px] mt-2  px-3 py-2.5 hover:bg-white/[0.08]`}
            onClick={() => setShowSearchResult(false)}
          >
            <PartnerProgram />
            <div className='text-[15px] text-white'>Partner Program</div>
          </a>
        </Link>
        {/* <SidebarMenuItem
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
        /> */}
      </div>
    </div>
  );
};

export default LearningCenterSidebar;
