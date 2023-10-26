import React from 'react';
import SocialMediaContent from '../SocialMediaContent';
const ProfileContentSec = () => {
  return (
    <div className='w-[990px] py-2'>
      <div className='text-[13px] uppercase text-[#515151]'>Contents</div>
      <div className='mt-2 leading-8'>
        <div className='border-l-[1px] border-white/[0.12] pl-3 text-[15px] text-[#979797] '>
          <a href='#character_profile'>What is a character Profile?</a>
        </div>
        <div className='border-l-[1px] border-white/[0.12] pl-3 text-[15px] text-[#979797] '>
          <a href='#unique_username'> Unique Username</a>
        </div>
        <div className='border-l-[1px] border-white/[0.12] pl-3 text-[15px] text-[#979797] '>
          <a href='#general_benefits'> General benefits</a>
        </div>
      </div>
      <SocialMediaContent/>
    </div>
  );
};

export default ProfileContentSec;