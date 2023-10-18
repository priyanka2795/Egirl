import React from 'react';
import Image from 'next/image';
import ProfileIcon from '../../creator-studio//svg/ProfileIcon';
import PersonalityHeartIcon from '../../creator-studio//svg/PersonalityHeartIcon';
import profileIcon from '../../../../public/assets/circle-user.png';
import ImageIcon from '../../creator-studio/svg/ImageGeneratorIcon';
import StyleIcon from '../../creator-studio//svg/StyleGenerator';
import VoiceIcon from '../../creator-studio/svg/VoiceIcon';
import GiftIcon from '../../creator-studio/svg/GiftIcon';

const CreationCards = () => {
  return (
    <>
      <div className='mb-3 mt-4 text-[26px] font-black text-white'>
        Character Creation
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <div className=' rounded-[40px] border border-white/[0.16] bg-white/[0.08] p-8'>
          <div className='mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/[0.05]'>
            <ProfileIcon />
          </div>
          <div className='text-[22px] font-black text-white'>Profile</div>
          <div className='text-[15px] text-white'>
            Start your onboarding journey with beginner-friendly tips.
          </div>
        </div>
        <div className=' rounded-[40px]  bg-white/[0.08] p-8'>
          <div className='mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/[0.05]'>
            <PersonalityHeartIcon />
          </div>
          <div className='text-[22px] font-black text-white'>Personality</div>
          <div className='text-[15px] text-white'>
            Start your onboarding journey with beginner-friendly tips.
          </div>
        </div>

        <div className=' rounded-[40px]  bg-white/[0.08] p-8'>
          <div className='mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/[0.05]'>
            <ImageIcon />
          </div>
          <div className='text-[22px] font-black text-white'>Images</div>
          <div className='text-[15px] text-white'>
            Start your onboarding journey with beginner-friendly tips.
          </div>
        </div>
        <div className=' rounded-[40px]  bg-white/[0.08] p-8'>
          <div className='mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/[0.05]'>
            <StyleIcon />
          </div>
          <div className='text-[22px] font-black text-white'>Styles</div>
          <div className='text-[15px] text-white'>
            Start your onboarding journey with beginner-friendly tips.
          </div>
        </div>
        <div className=' rounded-[40px]  bg-white/[0.08] p-8'>
          <div className='mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/[0.05]'>
            <VoiceIcon />
          </div>
          <div className='text-[22px] font-black text-white'>Voice</div>
          <div className='text-[15px] text-white'>
            Start your onboarding journey with beginner-friendly tips.
          </div>
        </div>
        <div className=' rounded-[40px]  bg-white/[0.08] p-8'>
          <div className='mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/[0.05]'>
            <GiftIcon />
          </div>
          <div className='text-[22px] font-black text-white'>Gifts</div>
          <div className='text-[15px] text-white'>
            Start your onboarding journey with beginner-friendly tips.
          </div>
        </div>
      </div>
    </>
  );
};

export default CreationCards;
