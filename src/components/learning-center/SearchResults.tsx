import React from 'react';
import Image from 'next/image';
import arrowRight from '@/assets/chevron-right-small.webp';

const searchData = [
  {
    head: 'Profile',
    text: `Your character's name is their identity in this virtual world. Choose a name that resonates with their personality, interest and traits.`,
    subText: 'Profile'
  },
  {
    head: 'Personality',
    text: `Once you have carefully selected to the perfect name and username, you will be ready to delve deeper into your character's persona. You will have the opportunity to define their likes...`,
    subText: 'Personality'
  },
  {
    head: 'Image generator',
    text: `Your character's username is their digital handle the tag that identifies them to other users in the app. Its like their online nickname. Get creative with it! It could be related to their...`,
    subText: 'Image generator'
  },
  {
    head: 'Monetization',
    text: `Balancing uniqueness, relevance and memorability is key when choosing both the name and username for your AI character's. This choices will shape how users will interact with your...`,
    subText: 'Monetization'
  }
];
const SearchResults = () => {
  return (
    <div className='px-6'>
      <div className='text-[26px] font-black text-white'>
        Results for "character"
      </div>
      {searchData.map((e, i) => {
        return (
          <div className='my-4 w-full rounded-[20px] bg-white/[0.05] p-6'>
            <div className='text-[22px] font-black text-white'>{e.head}</div>
            <div className='w-[700px] text-[15px] text-[#979797]'>{e.text}</div>
            <div className='flex items-center'>
              <span className='text-[14px] font-semibold text-white/[0.32]'>
                Learning Center
              </span>
              <Image src={arrowRight} alt='' />
              <span className='text-[14px] font-semibold text-white/[0.32]'>
                Character Creation
              </span>
              <Image src={arrowRight} alt='' />
              <span className='text-[14px] font-semibold text-white/[0.32]'>
                {e.subText}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
