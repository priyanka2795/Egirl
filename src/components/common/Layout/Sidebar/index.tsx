import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import TestIcon from './TestIcon';
import Logo from './svg/logo.svg';
import BellMenuIcon from './svg/bell-menu-icon.svg';

import NavMenuIcon from './svg/nav-menu-icon.svg';
import ExploreIcon from './svg/ExploreIcon';
import AddCardIcon from './svg/AddCardIcon';
import CreatorStudioIcon from './svg/CreatorStudioIcon';
import MessagesIcon from './svg/MessagesIcon';
import ListsIcon from './svg/ListsIcon';
import ReferralsIcon from './svg/ReferralsIcon';
import MoreIcon from './svg/MoreIcon';
import HomeIcon from './svg/HomeIcon';

export default function Sidebar() {
  return (
    // border: border-r border-[#2F2F2F]
    <div className='fixed hidden h-full w-[88px] flex-col  bg-main-bar sm:flex xl:w-[300px] xl:items-start'>
      <div className='flex h-[72px] w-full items-center justify-between px-6'>
        <Logo className='hidden xl:inline' />
        <div className='flex items-center'>
          <NavMenuIcon className='mr-6' />
          <NavMenuIcon />
        </div>
      </div>

      {/* Menu */}

      <div className='mb-2.5 mt-3 xl:ml-8 xl:items-start'>
        <SidebarMenuItem text='Home' href='/home' Icon={HomeIcon} />
        <SidebarMenuItem text='Explore' href='/explore' Icon={ExploreIcon} />
        <SidebarMenuItem text='Messages' href='/explore' Icon={MessagesIcon} />
        <SidebarMenuItem text='Lists' href='/explore' Icon={ListsIcon} />
        <SidebarMenuItem text='Add Card' href='/explore' Icon={AddCardIcon} />
        <SidebarMenuItem
          text='Referrals'
          href='/explore'
          Icon={ReferralsIcon}
        />
        {/* <SidebarMenuItem
          text='Egirls+'
          href='/explore'
          Icon={ReferralsIcon}
        /> */}
        <SidebarMenuItem
          text='Creator Studio'
          href='/explore'
          Icon={CreatorStudioIcon}
        />
        <SidebarMenuItem text='More' href='/explore' Icon={MoreIcon} />
      </div>

      {/* Button */}

      {/* <button className='hidden h-12 w-56 rounded-full bg-blue-400 text-lg font-bold text-white shadow-md hover:brightness-95 xl:inline'>
        Tweet
      </button> */}

      {/* Mini-Profile */}

      {/* <div className='hoverEffect mt-auto flex items-center justify-center text-gray-700 xl:justify-start'>
        <img
          src='https://www.adscientificindex.com/pictures/0b/50734.jpg'
          alt='user-img'
          className='h-10 w-10 rounded-full xl:mr-2'
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
          <div className='hidden leading-5 xl:inline'>
            <h4 className='text-sm font-bold leading-[18px]'>Username</h4>
            <p className='text-[13px] font-light leading-[18px] text-[#979797]'>
              @Username
            </p>
          </div>
        </div>
        <TestIcon className='hidden h-5 xl:inline' />
      </div>
    </div>
  );
}

// old sidebar widths
// <div className='fixed hidden h-full flex-col bg-red-400 sm:flex xl:ml-24 xl:w-[242px] xl:items-start'>

// old sidebar padding to the right of the screen
// <div className='fixed hidden h-full flex-col bg-main-bar sm:flex xl:ml-24 xl:w-[380px] xl:items-start'>
