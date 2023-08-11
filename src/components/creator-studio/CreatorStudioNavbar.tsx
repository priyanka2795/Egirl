import React from 'react';
import CreateStudioLogo from './svg/creator-studio-logo.svg';
import MenuIcon from './svg/menu.svg';
import UserImg from './svg/user-img.svg';
import BellIcon from './svg/bell.svg';

const CreatorStudioNavbar = () => {
  return (
    <div className='flex justify-between px-4 py-6 '>
      <div className="flex gap-5">
        <MenuIcon />
        <CreateStudioLogo />
      </div>

      <div className="flex gap-6 justify-center items-center">
        <BellIcon/>
        <UserImg/>
      </div>
    </div>
  );
};

export default CreatorStudioNavbar;
