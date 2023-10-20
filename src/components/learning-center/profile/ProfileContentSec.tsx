import React from 'react';
import Discord from '../../../../public/assets/learning-center/discord.svg';
import Twitter from '../../../../public/assets/learning-center/twitter.svg';
import Instagram from '../../../../public/assets/learning-center/instagram.svg';
import Reddit from '../../../../public/assets/learning-center/reddit.svg';

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
      <div className='flex gap-4 px-4 mt-5'>
        <Discord />
        <Twitter />
        <Instagram />
        <Reddit />
      </div>
    </div>
  );
};

export default ProfileContentSec;
