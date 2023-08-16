import React, { useState } from 'react';
import CreateStudioLogo from './svg/creator-studio-logo.svg';
import MenuIcon from './svg/menu.svg';
import UserImg from './svg/user-img.svg';
import BellIcon from './svg/bell.svg';
import NotificationModal from './NotificationModal';

const CreatorStudioNavbar = () => {
  const [notificationModal, setNotificationModal] = useState(false);

  return (
    <>
    <div className='flex justify-between px-4 py-6 '>
      <div className="flex gap-5">
        <MenuIcon />
        <CreateStudioLogo />
      </div>

      <div className="flex items-center justify-center gap-6">
        <BellIcon onClick={() => setNotificationModal(!notificationModal)}/>
        <UserImg/>
      </div>
    </div>
    {
      notificationModal && <NotificationModal />
    }
    </>
  );
};

export default CreatorStudioNavbar;
