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
    <div className='max-w-[600px] flex-grow bg-main-background sm:ml-[88px] lg:min-w-[600px] xl:ml-[300px]'>
      {/* 108px topbar with margins */}
      <div
        className={`sticky z-50  ${
          sticky && animate ? 'top-0' : '-top-[108px]'
        } h-[108px] max-w-[600px] bg-main-background transition-all duration-[300ms] ease-in lg:min-w-[600px]`}
      >
        <div className='ml-8 pb-5 pt-6'>
          <div className='flex h-[64px] items-center justify-between rounded-l-[14px] bg-main-bar pr-5'>
            <div
              onClick={() => handleFeedSwitch('forYou')}
              className={` ${
                showForYou
                  ? 'border-b-[#8C7DD0] text-[#8C7DD0]'
                  : 'border-main-bar text-[#979797]'
              } flex h-full w-1/2 cursor-pointer items-center justify-center rounded-l-[14px] border-b text-[15px] font-light leading-5 transition duration-100`}
            >
              For you
            </div>
            <div
              onClick={() => handleFeedSwitch('subscribed')}
              className={` ${
                !showForYou
                  ? 'border-b-[#8C7DD0] text-[#8C7DD0]'
                  : 'border-main-bar text-[#979797]'
              } flex h-full w-1/2 cursor-pointer items-center justify-center border-b text-[15px] font-light leading-5 transition duration-100`}
            >
              Subscriptions
            </div>
          </div>
        </div>
      </div>
      <div className='px-[20px]'>
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
          hours='6h'
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
