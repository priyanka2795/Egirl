import React, { useEffect, useState } from 'react';
import CreateStudioLogo from './svg/creator-studio-logo.svg';
import MenuIcon from './svg/menu.svg';
import UserImg from './svg/user-img.svg';
import BellIcon from './svg/bell.svg';
import NotificationModal from './NotificationModal';
import BalanceModal from './BalanceModal';
import Link from 'next/link';

interface CreatorStudioNavbarProp {
  shrinkSideBar: boolean;
  setShrinkSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreatorStudioNavbar = ({
  shrinkSideBar,
  setShrinkSideBar
}: CreatorStudioNavbarProp) => {
  const [notificationModal, setNotificationModal] = useState(false);
  const [balanceModal, setBalanceModal] = useState(false);

  const handleNotificationModal = () => {
    if(balanceModal === true) {
      setBalanceModal(false);
      setNotificationModal(!notificationModal);
    } else {
      setNotificationModal(!notificationModal)
    }
  };

  const handleBalanceModal = () => {
    if(notificationModal === true) {
      setNotificationModal(false);
      setBalanceModal(!balanceModal);
    } else {
      setBalanceModal(!balanceModal)
    }
  };

  return (
    <>
      <div className='flex justify-between px-4 py-2 bg-[#121212] shadow-white/[0.07]'>
        <div className='flex items-center gap-5 p-2'>
          <div
            className='duration-80 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full ease-in hover:bg-[#252525]'
            onClick={() => {
              setShrinkSideBar(!shrinkSideBar);
            }}
          >
            <MenuIcon />
          </div>
          <div className="cursor-pointer">
           <Link href='/creator-studio'><CreateStudioLogo /></Link>
          </div>
          
        </div>

        <div className='flex items-center justify-center gap-6'>
          <div className='relative cursor-pointer'>
            <BellIcon
              onClick={handleNotificationModal}
            />
            {notificationModal && <NotificationModal setNotificationModal={setNotificationModal} />}
          </div>
          <div className="relative">
            <UserImg
              className='cursor-pointer'
              onClick={handleBalanceModal}
            />
            {balanceModal && <BalanceModal />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorStudioNavbar;
