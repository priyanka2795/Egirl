import React from 'react';
import BasicLink from './BasicLink';
import BasicHeading from './BasicHeading';

const Sidebar = () => {
  return (
    <div className='h-full w-[300px] bg-main-background'>
      <BasicHeading name='name' />
      <BasicLink
        name='Personality'
        component={<div className='h-[20px]  w-[20px] bg-main-gray'>s</div>}
        href='/home'
      />
    </div>
  );
};

export default Sidebar;
