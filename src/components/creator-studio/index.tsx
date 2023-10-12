import React, { useState } from 'react';
import Banner from '@components/list/Banner';
import PostCard from '@components/list/PostCard';
import UserSection from '@components/list/UserSection';
import PostInput from '@components/list/PostInput';
import CreateCharacter from '@components/list/CreateCharacter';
import SetUpYourCharacter from '@components/list/SetUpYourCharacter';
import AllCharactersCards from '@components/list/AllCharactersCards';

const CreatorStudio = () => {
  return (
  <>
    <div className='mb-5'>
      <CreateCharacter />
      {/* <AllCharactersCards /> */}
      <Banner
        styleProperty={'px-0 pt-2'}
        followBtnStyle={'border border-[#7362C6] bg-transparent text-[#7362C6]'}
        followText={'Follow'}
        component={'CreatorStudioProfile'}
      />
      <div>
        <SetUpYourCharacter />
      </div>
      <div className='flex max-w-[1196px] justify-between gap-5'>
        <div className='flex w-full max-w-[59%] flex-col'>
          <PostInput />
          <PostCard postCardStyle={'w-full'} />
        </div>
        <div className='max-w-[39%]'>
          <UserSection userSectionStyle={'w-full'} />
        </div>
      </div>
    </div>
  </>
  );
};

export default CreatorStudio;
