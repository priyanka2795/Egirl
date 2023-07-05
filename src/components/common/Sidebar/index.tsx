import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import TestIcon from './TestIcon';
import Logo from './svg/logo.svg';
import BellMenuIcon from './svg/bell-menu-icon.svg';

import NavMenuIcon from './svg/nav-menu-icon.svg';
import NavMenuArrow from './svg/nav-menu-arrow.svg';
import ExploreIcon from './svg/ExploreIcon';
import AddCardIcon from './svg/AddCardIcon';
import CreatorStudioIcon from './svg/CreatorStudioIcon';
import MessagesIcon from './svg/MessagesIcon';
import ListsIcon from './svg/ListsIcon';
import ReferralsIcon from './svg/ReferralsIcon';
import MoreIcon from './svg/MoreIcon';
import HomeIcon from './svg/HomeIcon';
import DotsVerticalIcon from './svg/dots-vertical-icon.svg';
import EgirlsPlusIcon from './svg/EgirlsPlusIcon';
import EyeIcon from '../../home/Post/svg/eye.svg';

type sideBarProp = {
  sideBarClasses?: string;
  sideBarMenuText?: string;
  sideBarLogoClasses?: string;
  sideBarMenuArrowClasses?: string;
};
export default function Sidebar({
  sideBarClasses,
  sideBarMenuText,
  sideBarLogoClasses,
  sideBarMenuArrowClasses
}: sideBarProp) {
  return (
    // border: border-r border-[#2F2F2F]
    <div
      className={`custom-scroll-bar fixed hidden h-full w-[88px] flex-col overflow-y-auto border-r-[2px] border-[rgb(37,37,37)] bg-[#070707] sm:flex xl:w-[300px] xl:items-start ${sideBarClasses}`}
    >
      <div className='flex h-[72px] w-full items-center justify-between px-6'>
        <Logo className={`hidden xl:inline ${sideBarLogoClasses}`} />

        <div
          className={`flex items-center  ${
            sideBarMenuArrowClasses ? 'w-full justify-center' : ''
          }`}
        >
          {/* <NavMenuIcon /> */}
          <NavMenuArrow className={`${sideBarMenuArrowClasses}`} />
        </div>
      </div>

      {/* Menu */}

      <div className='mb-2.5 mt-3 xl:ml-4 xl:items-start'>
        <SidebarMenuItem
          text='Explore'
          href='/explore'
          Icon={ExploreIcon}
          sideBarMenuText={sideBarMenuText}
        />
        <SidebarMenuItem
          text='Messages'
          href='/messages'
          Icon={MessagesIcon}
          sideBarMenuText={sideBarMenuText}
        />
        <SidebarMenuItem
          text='Lists'
          href='/asdf'
          Icon={ListsIcon}
          sideBarMenuText={sideBarMenuText}
        />
        <SidebarMenuItem
          text='Add Card'
          href='/asdf'
          Icon={AddCardIcon}
          sideBarMenuText={sideBarMenuText}
        />
        <SidebarMenuItem
          text='Referrals'
          href='/asdf'
          Icon={ReferralsIcon}
          sideBarMenuText={sideBarMenuText}
        />
        <SidebarMenuItem
          text='Egirls+'
          href='/explore'
          Icon={EgirlsPlusIcon}
          sideBarMenuText={sideBarMenuText}
        />
        <SidebarMenuItem
          text='Creator Studio'
          href='/asdf'
          Icon={CreatorStudioIcon}
          sideBarMenuText={sideBarMenuText}
        />
        <SidebarMenuItem
          text='More'
          href='/asdf'
          Icon={MoreIcon}
          sideBarMenuText={sideBarMenuText}
        />
      </div>

      {/* Button */}

      {/* <button className='hidden w-56 h-12 text-lg font-bold text-white bg-blue-400 rounded-full shadow-md hover:brightness-95 xl:inline'>
        Tweet
      </button> */}

      {/* Mini-Profile */}

      {/* <div className='flex items-center justify-center mt-auto text-gray-700 hoverEffect xl:justify-start'>
        <img
          src='https://www.adscientificindex.com/pictures/0b/50734.jpg'
          alt='user-img'
          className='w-10 h-10 rounded-full xl:mr-2'
        />
        <div className='hidden leading-5 xl:inline'>
          <h4 className='font-bold'>Sahand Ghavidel</h4>
          <p className='text-gray-500'>@codewithsahand</p>
        </div>
        <TestIcon className='hidden h-5 xl:ml-8 xl:inline' />
      </div> */}

      <div className='mb-6 mt-auto flex w-full items-center justify-between px-6'>
        <div className='flex items-center'>
          <img
            src='https://www.adscientificindex.com/pictures/0b/50734.jpg'
            alt='user-img'
            className='h-10 w-10 rounded-full xl:mr-2'
          />
          <div className={`hidden leading-5 xl:inline ${sideBarLogoClasses}`}>
            <h4 className='text-sm font-bold leading-[18px]'>Username</h4>
            <p className='text-[13px] font-light leading-[18px] text-[#979797]'>
              @Username
            </p>
          </div>
        </div>
        {/* <TestIcon className='hidden h-5 xl:inline' /> */}
        <DotsVerticalIcon
          className={`hidden h-5 xl:inline ${sideBarLogoClasses}`}
        />
      </div>
    </div>
  );
}

// old sidebar widths
// <div className='fixed hidden h-full flex-col bg-red-400 sm:flex xl:ml-24 xl:w-[242px] xl:items-start'>

// old sidebar padding to the right of the screen
// <div className='fixed hidden h-full flex-col bg-main-bar sm:flex xl:ml-24 xl:w-[380px] xl:items-start'>
