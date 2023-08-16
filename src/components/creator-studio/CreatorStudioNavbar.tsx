import React, { useEffect, useState } from 'react';
import CreateStudioLogo from './svg/creator-studio-logo.svg';
import MenuIcon from './svg/menu.svg';
import UserImg from './svg/user-img.svg';
import BellIcon from './svg/bell.svg';
import NotificationModal from './NotificationModal';
import BalanceModal from './BalanceModal';

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

  return (
    <>
      <div className='flex justify-between px-4 py-6 '>
        <div className='flex items-center gap-5 p-2'>
          <div
            className='duration-80 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full ease-in hover:bg-[#252525]'
            onClick={() => {
              setShrinkSideBar(!shrinkSideBar);
            }}
          >
            <MenuIcon />
          </div>
          <CreateStudioLogo />
        </div>

        <div className='flex items-center justify-center gap-6'>
          <div className='relative cursor-pointer'>
            <BellIcon
              onClick={() => setNotificationModal(!notificationModal)}
            />
            {notificationModal && <NotificationModal />}
          </div>
          <div className="relative">
            <UserImg
              className='cursor-pointer'
              onClick={() => setBalanceModal(!balanceModal)}
            />
            {balanceModal && <BalanceModal />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorStudioNavbar;
