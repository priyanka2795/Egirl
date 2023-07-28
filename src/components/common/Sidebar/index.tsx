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
import { useState } from 'react';
import SubscriptionModal from '../SubscriptionModal';
import ReferalWhiteIcon from './svg/ReferalWhiteIcon';
import HomeActiveIcon from './svg/HomeActiveIcon';
import ExploreActiveIcon from './svg/ExploreActiveIcon';
import MessageActiveIcon from './svg/MessageActiveIcon';
import ListsIconActive from './svg/ListIconActive';
import AddCardActiveIcon from './svg/AddCardActiveIcon';
import UserImg from './svg/user-img.svg';
import MoreMenuOption from './MoreMenuOption';
import UserDetailModal from './userDetailModal';

// sideBarClasses={'!w-[88px]'}
// sideBarLogoClasses={'!hidden'}
// sideBarMenuText={'!hidden'}
// sideBarMenuArrowClasses={'rotate-180'}

type sideBarProp = {
  sideBarClasses?: string;
  sideBarMenuText?: string;
  sideBarLogoClasses?: string;
  sideBarMenuArrowClasses?: string;
  moreOptionItem?: React.Dispatch<React.SetStateAction<string>>;
  activeMoreOption?: string;
  // shrinkSidebar?: boolean;
  // sideBarWidth?: () => void;
};
export default function Sidebar({
  sideBarClasses,
  sideBarMenuText,
  sideBarLogoClasses,
  sideBarMenuArrowClasses,
  moreOptionItem,
  activeMoreOption
}: // sideBarWidth,
// shrinkSidebar
sideBarProp) {
  // const [shrinkSidebar, setShrinkSidebar] = useState(false);
  // console.log(shrinkSidebar, 'shrinkSidebar');
  const [subscribeModal, setSubscribeModal] = useState(false);
  const [moreOption, setMoreOption] = useState(false);
  const [userAccountMenu , setUserAccountMenu] = useState(false)
  const sidebarVariable = sessionStorage.getItem('sideBarCollapse');
  const [shrinkSidebar, setShrinkSidebar] = useState(
    sidebarVariable ? sidebarVariable : ''
  );
  console.log(sidebarVariable, 'shrinkSidebar sidebarVariable');
  const handleSidebarWidth = () => {
    if (shrinkSidebar) {
      setShrinkSidebar('');
      console.log('reduce');
      sessionStorage.setItem('sideBarCollapse', '');
    } else {
      setShrinkSidebar('true');
      console.log('reduce');
      sessionStorage.setItem('sideBarCollapse', 'true');
    }
  };
  return (
    // border: border-r border-[#2F2F2F]
    <div
      className={`h-full w-[88px] flex-col overflow-y-auto border-r-[2px] border-[rgb(37,37,37)] bg-[#070707] sm:flex xl:w-[300px] xl:items-start ${sideBarClasses} ${
        shrinkSidebar === 'true' ? '!w-[88px]' : ''
      }`}
    >
      <div
        className={`flex h-[72px] w-full items-center  px-6 ${
          shrinkSidebar ? 'justify-center' : 'justify-between'
        }`}
      >
        <Logo
          className={`hidden xl:inline ${sideBarLogoClasses} ${
            shrinkSidebar === 'true' ? '!hidden' : ''
          }`}
        />

        <div
          className={`flex cursor-pointer  items-center ${
            sideBarMenuArrowClasses ? 'w-full justify-center' : ''
          }`}
        >
          {/* <NavMenuIcon /> */}
          <NavMenuArrow
            className={`${sideBarMenuArrowClasses} ${
              shrinkSidebar === 'true' ? 'rotate-180' : ''
            }`}
            onClick={handleSidebarWidth}
            // onClick={sideBarWidth}
          />
        </div>
      </div>

      {/* Menu */}

      <div className='mb-2.5 mt-3 w-full pr-6 xl:items-start xl:pl-4'>
        <SidebarMenuItem
          text='Home'
          href='/home'
          Icon={HomeIcon}
          IconActive={HomeActiveIcon}
          sideBarMenuText={`${sideBarMenuText} ${
            shrinkSidebar === 'true' ? '!hidden' : 'w-full'
          }`}
        />
        <SidebarMenuItem
          text='Explore'
          href='/explore'
          Icon={ExploreIcon}
          IconActive={ExploreActiveIcon}
          sideBarMenuText={`${sideBarMenuText} ${
            shrinkSidebar === 'true' ? '!hidden' : 'w-full'
          }`}
        />
        <SidebarMenuItem
          text='Messages'
          href='/messages'
          Icon={MessagesIcon}
          IconActive={MessageActiveIcon}
          sideBarMenuText={`${sideBarMenuText} ${
            shrinkSidebar === 'true' ? '!hidden' : 'w-full'
          }`}
        />
        <SidebarMenuItem
          text='Lists'
          href='/lists'
          Icon={ListsIcon}
          IconActive={ListsIconActive}
          sideBarMenuText={`${sideBarMenuText} ${
            shrinkSidebar === 'true' ? '!hidden' : 'w-full'
          }`}
        />
        <SidebarMenuItem
          text='Add Card'
          href='/add-card'
          Icon={AddCardIcon}
          IconActive={AddCardActiveIcon}
          sideBarMenuText={`${sideBarMenuText} ${
            shrinkSidebar === 'true' ? '!hidden' : 'w-full'
          }`}
        />
        <SidebarMenuItem
          text='Referrals'
          href='/referrals'
          Icon={ReferralsIcon}
          IconActive={ReferalWhiteIcon}
          sideBarMenuText={`${sideBarMenuText} ${
            shrinkSidebar === 'true' ? '!hidden' : 'w-full'
          }`}
        />
        <div onClick={() => setSubscribeModal(true)}>
          <SidebarMenuItem
            IconActive={ReferalWhiteIcon}
            text='Egirls+'
            Icon={EgirlsPlusIcon}
            sideBarMenuText={`${sideBarMenuText} ${
              shrinkSidebar === 'true' ? '!hidden' : 'w-full'
            }`}
          />
        </div>
        <SidebarMenuItem
          IconActive={ReferalWhiteIcon}
          text='Creator Studio'
          href='/asdf'
          Icon={CreatorStudioIcon}
          sideBarMenuText={`${sideBarMenuText} ${
            shrinkSidebar === 'true' ? '!hidden' : 'w-full'
          }`}
        />
        <div className='relative'>
          <div onClick={() => setMoreOption(!moreOption)}>
            <SidebarMenuItem
              IconActive={ReferalWhiteIcon}
              // text='More'
              text={moreOption ? 'Show Less' : 'More' }
              Icon={MoreIcon}
              sideBarMenuText={`${sideBarMenuText} ${
                shrinkSidebar === 'true' ? '!hidden' : 'w-full'
              }`}
            />
          </div>
          {moreOption && (
            <MoreMenuOption
              classes={`${shrinkSidebar === 'true' ? 'fixed ' : 'absolute left-[10px] top-[60px] '}`}
              activeMoreOption={activeMoreOption}
              moreOptionItem={moreOptionItem}
             
            />
           )}
        </div>
      </div>

      {subscribeModal && <SubscriptionModal closeState={setSubscribeModal} />}

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

      <div className='flex items-center justify-between w-full px-6 mt-auto mb-6'>
        <div className='flex items-center gap-1'>
          {/* <img
            src='https://www.adscientificindex.com/pictures/0b/50734.jpg'
            alt='user-img'
            className='w-10 h-10 rounded-full xl:mr-2'
          /> */}
          <div onClick={() =>{setUserAccountMenu(!userAccountMenu)}}>
           <UserImg />
          </div>
          {/* <div className="w-10 h-10 rounded-full">
              
          </div> */}
          <div
            className={`hidden leading-5 xl:inline ${sideBarLogoClasses} ${
              shrinkSidebar ? '!hidden' : ''
            }`}
          >
            <h4 className='text-sm font-bold leading-[18px]'>Username</h4>
            <p className='text-[13px] font-light leading-[18px] text-[#979797]'>
              @Username
            </p>
          </div>
        </div>
        {/* <TestIcon className='hidden h-5 xl:inline' /> */}
     <div onClick={() =>{setUserAccountMenu(!userAccountMenu)}}>
     <DotsVerticalIcon 
          className={`hidden h-5 xl:inline ${sideBarLogoClasses} ${
            shrinkSidebar ? '!hidden' : ''
          }`}
        />
         {
      userAccountMenu &&
     <UserDetailModal styleClasses={`${shrinkSidebar === 'true' ? 'fixed left-[18px]' : 'absolute  right-[34px] '}`}/>
     }
     </div>
    
      </div>
    </div>
  );
}

// old sidebar widths
// <div className='fixed hidden h-full flex-col bg-red-400 sm:flex xl:ml-24 xl:w-[242px] xl:items-start'>

// old sidebar padding to the right of the screen
// <div className='fixed hidden h-full flex-col bg-main-bar sm:flex xl:ml-24 xl:w-[380px] xl:items-start'>
