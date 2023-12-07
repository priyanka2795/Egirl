import SidebarMenuItem from './SidebarMenuItem';
import Logo from './svg/logo.svg';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import SubscriptionModal from '../SubscriptionModal';
import MoreMenuOption from './MoreMenuOption';
import UserDetailModal from './UserDetailModal';
import AddCardActiveIcon from './svg/AddCardActiveIcon';
import AddCardIcon from './svg/AddCardIcon';
import CreatorStudioIcon from './svg/CreatorStudioIcon';
import EgirlsPlusIcon from './svg/EgirlsPlusIcon';
import ExploreActiveIcon from './svg/ExploreActiveIcon';
import ExploreIcon from './svg/ExploreIcon';
import HomeActiveIcon from './svg/HomeActiveIcon';
import HomeIcon from './svg/HomeIcon';
import ListsIconActive from './svg/ListIconActive';
import ListsIcon from './svg/ListsIcon';
import MessageActiveIcon from './svg/MessageActiveIcon';
import MessagesIcon from './svg/MessagesIcon';
import MoreIcon from './svg/MoreIcon';
import ReferalWhiteIcon from './svg/ReferalWhiteIcon';
import ReferralsIcon from './svg/ReferralsIcon';
import DotsVerticalIcon from './svg/dots-vertical-icon.svg';
import NavMenuArrow from './svg/nav-menu-arrow.svg';
import UserImg from './svg/user-img.svg';

// sideBarClasses={'!w-[88px]'}
// sideBarLogoClasses={'!hidden'}
// sideBarMenuText={'!hidden'}
// sideBarMenuArrowClasses={'rotate-180'}

type sideBarProp = {
  sideBarClasses?: string;
  sideBarMenuText?: string;
  sideBarLogoClasses?: string;
  sideBarMenuArrowClasses?: string;
  moreOptionItem?: any;
  activeMoreOption?: string;
  activeItem?: any;
  // shrinkSidebar?: boolean;
  // sideBarWidth?: () => void;
};
export default function Sidebar({
  sideBarClasses,
  sideBarMenuText,
  sideBarLogoClasses,
  sideBarMenuArrowClasses,
  moreOptionItem,
  activeMoreOption,
  activeItem
}: // sideBarWidth,
  // shrinkSidebar
  sideBarProp) {
  // const [shrinkSidebar, setShrinkSidebar] = useState(false);
  // console.log(shrinkSidebar, 'shrinkSidebar');
  const [subscribeModal, setSubscribeModal] = useState(false);
  const [moreOption, setMoreOption] = useState(false);
  const [userAccountMenu, setUserAccountMenu] = useState(false);
  const [addCardState, setAddCardState] = useState(false);
  const sidebarVariable = sessionStorage.getItem('sideBarCollapse');
  const sideBarCollapse = sessionStorage.getItem('sideBarCollapse');

  const [shrinkSidebar, setShrinkSidebar] = useState(
    sidebarVariable ? sidebarVariable : ''
  );
  useEffect(() => {
    setShrinkSidebar(sidebarVariable ? sidebarVariable : '');
  }, [sidebarVariable]);

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
      className={`h-full w-[88px] flex-col border-r-[2px] border-[rgb(37,37,37)] bg-[#070707] sm:flex xl:w-[300px] xl:items-start ${sideBarClasses} ${shrinkSidebar === 'true' ? '!w-[88px]' : ''
        }`}
    >
      <div
        className={`flex h-[72px] w-full items-center  px-6 ${shrinkSidebar ? 'justify-center' : 'justify-between'
          }`}
      >
        <Logo
          className={`hidden xl:inline ${sideBarLogoClasses} ${shrinkSidebar === 'true' ? '!hidden' : ''
            }`}
        />

        <div
          className={`flex cursor-pointer  items-center ${sideBarMenuArrowClasses ? 'w-full justify-center' : ''
            }`}
        >
          {/* <NavMenuIcon /> */}
          <Link href={'#'}>
            <NavMenuArrow
              className={`${sideBarMenuArrowClasses} ${shrinkSidebar === 'true' ? 'rotate-180' : ''
                }`}
              onClick={handleSidebarWidth}
            // onClick={sideBarWidth}
            />
          </Link>

        </div>
      </div>

      {/* Menu */}

      <div className='mb-2.5 mt-3 w-full pr-6 xl:items-start xl:pl-4'>
        <SidebarMenuItem
          text='Home'
          href='/home'
          Icon={HomeIcon}
          IconActive={HomeActiveIcon}
          sideBarMenuText={`${sideBarMenuText} ${shrinkSidebar === 'true' ? '!hidden' : 'w-full'
            }`}
        />
        <SidebarMenuItem
          text='Explore'
          href='/explore'
          Icon={ExploreIcon}
          IconActive={ExploreActiveIcon}
          sideBarMenuText={`${sideBarMenuText} ${shrinkSidebar === 'true' ? '!hidden' : 'w-full'
            }`}
        />
        <div
          onClick={() => {
            activeItem('messages');
          }}
        >
          <SidebarMenuItem
            text='Messages'
            href='/messages'
            Icon={MessagesIcon}
            IconActive={MessageActiveIcon}
            sideBarMenuText={`${sideBarMenuText} ${shrinkSidebar === 'true' ? '!hidden' : 'w-full'
              }`}
          />
        </div>

        <SidebarMenuItem
          text='Lists'
          href='/lists'
          Icon={ListsIcon}
          IconActive={ListsIconActive}
          sideBarMenuText={`${sideBarMenuText} ${shrinkSidebar === 'true' ? '!hidden' : 'w-full'
            }`}
        />
        <div
          onClick={() => {
            activeItem('Add Card')
            // moreOptionItem('')
          }}
        >
          <SidebarMenuItem
            text='Add Card'
            href='/add-card'
            Icon={AddCardIcon}
            IconActive={AddCardActiveIcon}
            sideBarMenuText={`${sideBarMenuText} ${shrinkSidebar === 'true' ? '!hidden' : 'w-full'
              }`}
          />
        </div>
        <SidebarMenuItem
          text='Referrals'
          href='/referrals'
          Icon={ReferralsIcon}
          IconActive={ReferalWhiteIcon}
          sideBarMenuText={`${sideBarMenuText} ${shrinkSidebar === 'true' ? '!hidden' : 'w-full'
            }`}
        />
        <div onClick={() => setSubscribeModal(true)}>
          <SidebarMenuItem
            IconActive={ReferalWhiteIcon}
            text='Egirls+'
            Icon={EgirlsPlusIcon}
            sideBarMenuText={`${sideBarMenuText} ${shrinkSidebar === 'true' ? '!hidden' : 'w-full'
              }`}
          />
        </div>
        <SidebarMenuItem
          IconActive={ReferalWhiteIcon}
          text='Creator Studio'
          href='/creator-studio'
          Icon={CreatorStudioIcon}
          sideBarMenuText={`${sideBarMenuText} ${shrinkSidebar === 'true' ? '!hidden' : 'w-full'
            }`}
          changeTab={'CreatorStudioActive'}
        />

        <div className='relative'>
          <div onClick={() => setMoreOption(!moreOption)}>
            <SidebarMenuItem
              IconActive={ReferalWhiteIcon}
              // text='More'
              text={moreOption ? 'Show Less' : 'More'}
              Icon={MoreIcon}
              sideBarMenuText={`${sideBarMenuText} ${shrinkSidebar === 'true' ? '!hidden' : 'w-full'
                }`}
            />
          </div>
          {moreOption && (
            <MoreMenuOption
              classes={`${sideBarCollapse ? ' absolute bottom-5 left-[90px]' : 'absolute bottom-16 left-10'
                }`}
              activeMoreOption={activeMoreOption}
              moreOptionItem={moreOptionItem}
              activeItem={activeItem}
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

      <div
        className='mb-6 mt-auto flex w-full cursor-pointer items-center justify-between px-[18px]'
        onClick={() => {
          setUserAccountMenu(!userAccountMenu);
        }}
      >
        <div className='flex items-center gap-1'>
          {/* <img
            src='https://www.adscientificindex.com/pictures/0b/50734.jpg'
            alt='user-img'
            className='w-10 h-10 rounded-full xl:mr-2'
          /> */}
          <div>
            <UserImg />
          </div>
          <div
            className={`hidden leading-5 xl:inline ${sideBarLogoClasses} ${shrinkSidebar ? '!hidden' : ''
              }`}
          >
            <h4 className='font-bold text-sm leading-[18px]'>Username</h4>
            <p className='font-light text-[13px] leading-[18px] text-[#979797]'>
              @Username
            </p>
          </div>
        </div>
        <div>
          <DotsVerticalIcon
            className={`hidden h-5 xl:inline ${sideBarLogoClasses} ${shrinkSidebar ? '!hidden' : ''
              }`}
          />
          {userAccountMenu && (
            <UserDetailModal
              setUserAccountMenu={setUserAccountMenu}
              userAccountMenu={userAccountMenu}
              styleClasses={`${shrinkSidebar === 'true'
                ? 'fixed left-[18px]'
                : 'absolute  right-[34px] '
                }`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// old sidebar widths
// <div className='fixed hidden h-full flex-col bg-red-400 sm:flex xl:ml-24 xl:w-[242px] xl:items-start'>

// old sidebar padding to the right of the screen
// <div className='fixed hidden h-full flex-col bg-main-bar sm:flex xl:ml-24 xl:w-[380px] xl:items-start'>