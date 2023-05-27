import React, { useState } from 'react';

import useScroll from '../../../hooks/useScroll';
import Post from './Post';

export default function Feed() {
  const [showForYou, setShowForYou] = useState(true);
  const [sticky, animate] = useScroll();

  const handleFeedSwitch = (feedType: string) => {
    if (feedType === 'forYou' && !showForYou) {
      setShowForYou(true);
    } else if (feedType === 'subscribed' && showForYou) {
      setShowForYou(false);
    }
  };

  return (
    <div className='max-w-[640px] flex-grow bg-main-background sm:ml-[88px] lg:min-w-[640px] xl:ml-[300px]'>
      {/* 108px topbar with margins */}
      <div
        className={`sticky z-50  ${
          sticky && animate ? 'top-0' : '-top-[108px]'
        } h-[108px] max-w-[640px] bg-main-background transition-all duration-[300ms] ease-in lg:min-w-[640px]`}
      >
        <div className='ml-8 pb-5 pt-6'>
          <div className='flex h-[64px] items-center justify-between rounded-l-[14px] bg-main-bar'>
            <div className=''>
              <button
                onClick={() => handleFeedSwitch('forYou')}
                className={`ml-2 mr-2 h-[48px] rounded-[14px] border border-[#1A1A1A] px-8 text-sm font-bold transition duration-100 hover:bg-[#1A1A1A] ${
                  showForYou ? 'bg-[#1A1A1A]' : 'bg-main-background'
                }`}
              >
                For you
              </button>
              <button
                onClick={() => handleFeedSwitch('subscribed')}
                className={`h-[48px] rounded-[14px] border border-[#1A1A1A] px-8 text-sm font-bold transition duration-100 hover:bg-[#1A1A1A] ${
                  !showForYou ? 'bg-[#1A1A1A]' : 'bg-main-background'
                }`}
              >
                Subscribed
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='px-[32px]'>
        {/* {Array(100)
          .fill(0)
          .map((_, i) => (
            <p key={i}>Main content line {i + 1}</p>
          ))} */}
        <Post
          imageUrl='https://media.istockphoto.com/id/638756792/photo/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=AanwEr0pmrS-zhkVJEgAwxHKwnx14ywNh5dmzwbpyLk='
          altText='Character Profile Picture'
          name='Mika-chan'
          username='@mikachan'
          postText='Hello dears, my mood today is 🤗'
          commentsNumber='98'
          heartsNumber='6.2k'
          viewsNumber='1.8k'
          tags={['#girl', '#mood', '#relaxtime']}
          location='Warsaw, Old Town'
          hours="6h"
        />
      </div>
    </div>
  );
}

// dimensions with padding
// there is a 32 pixel padding diff on xl screens ml:370px -> ml:338px
// <div className='max-w-xl flex-grow border-l border-r border-gray-200  bg-green-400 sm:ml-[73px] lg:min-w-[576px] xl:ml-[370px]'>

// dimensions where width of this is 576 (like twitter) I changed it to 640 (576 + 32 + 32) to have 32 padding on either side
// <div className='max-w-xl flex-grow bg-main-background sm:ml-[40px] lg:min-w-[576px] xl:ml-[476px]'>
