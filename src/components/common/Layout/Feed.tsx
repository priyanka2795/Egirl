import React, { useState } from 'react';
import Image from 'next/image';
import RightSide from './Right side.svg';

import useScrollDirection from '../../../../hooks/useScrollDirection';
import useScroll from '../../../../hooks/useScrollDirection';

export default function Feed() {
  const [showForYou, setShowForYou] = useState(true);
  const scrollDirection = useScrollDirection();

  const handleFeedSwitch = (feedType: string) => {
    if (feedType === 'forYou' && !showForYou) {
      setShowForYou(true);
    } else if (feedType === 'subscribed' && showForYou) {
      setShowForYou(false);
    }
  };

  return (
    <div className='max-w-[640px] flex-grow bg-main-background sm:ml-[40px] lg:min-w-[640px] xl:ml-[380px]'>
      {/* 108px topbar with margins */}
      <div
        className={`fixed z-50 ${
          scrollDirection == 'down' ? '-translate-y-[96px] transform' : 'top-0'
        } h-[96px] transition-all duration-200`}
      >
        <div className='ml-8 pb-3 pt-5'>
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

      <div className='mt-[96px] px-[32px]'>
        {/* {Array(100)
          .fill(0)
          .map((_, i) => (
            <p key={i}>Main content line {i + 1}</p>
          ))} */}

        <div className='flex w-full flex-col gap-y-4 rounded-[14px] bg-orange-400 p-6'>
          {/* Profile Section */}
          <div className='flex items-center'>
            <Image
              src='https://media.istockphoto.com/id/638756792/photo/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=AanwEr0pmrS-zhkVJEgAwxHKwnx14ywNh5dmzwbpyLk=' // Change to your image path
              alt='Character Profile Picture' // Change to your alt text
              width={48}
              height={48}
              className='rounded-full'
            />
            <div className='ml-4 flex items-center'>
              <h3 className='mr-2 text-lg font-bold leading-6'>Mika-chan</h3>
              <p className='size-[15px] font-light leading-5 text-[#979797]'>
                @mikachan
              </p>
            </div>
          </div>
          <p className='w-full text-sm leading-[18px] text-white'>
            What do you guys think of my goth cosplay? uwu -
            私のゴスコスプレについてどう思いますか？uwu
          </p>
          <Image
            // src='https://www.shutterstock.com/image-vector/lock-glass-morphism-trendy-style-260nw-2047414109.jpg' // Change to your image path
            src='/dummy-img.png'
            alt='Locked Post' // Change to your alt text
            width={512}
            height={512}
            className='rounded-xl'
          />
        </div>
        <div className='flex w-full flex-col gap-y-4 bg-main-bar p-6'>
          {/* Profile Section */}
          <div className='flex items-center'>
            <Image
              src='https://media.istockphoto.com/id/638756792/photo/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=AanwEr0pmrS-zhkVJEgAwxHKwnx14ywNh5dmzwbpyLk=' // Change to your image path
              alt='Character Profile Picture' // Change to your alt text
              width={48}
              height={48}
              className='rounded-full'
            />
            <div className='ml-4 flex items-center'>
              <h3 className='mr-2 text-lg font-bold leading-6'>Mika-chan</h3>
              <p className='size-[15px] font-light leading-5 text-[#979797]'>
                @mikachan
              </p>
            </div>
          </div>
          <p className='w-full text-sm leading-[18px] text-white'>
            What do you guys think of my goth cosplay? uwu -
            私のゴスコスプレについてどう思いますか？uwu
          </p>
          <Image
            // src='https://www.shutterstock.com/image-vector/lock-glass-morphism-trendy-style-260nw-2047414109.jpg' // Change to your image path
            src='/dummy-img.png'
            alt='Locked Post' // Change to your alt text
            width={512}
            height={512}
            className='rounded-xl'
          />
        </div>
        <div className='flex w-full flex-col gap-y-4 bg-main-bar p-6'>
          {/* Profile Section */}
          <div className='flex items-center'>
            <Image
              src='https://media.istockphoto.com/id/638756792/photo/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=AanwEr0pmrS-zhkVJEgAwxHKwnx14ywNh5dmzwbpyLk=' // Change to your image path
              alt='Character Profile Picture' // Change to your alt text
              width={48}
              height={48}
              className='rounded-full'
            />
            <div className='ml-4 flex items-center'>
              <h3 className='mr-2 text-lg font-bold leading-6'>Mika-chan</h3>
              <p className='size-[15px] font-light leading-5 text-[#979797]'>
                @mikachan
              </p>
            </div>
          </div>
          <p className='w-full text-sm leading-[18px] text-white'>
            What do you guys think of my goth cosplay? uwu -
            私のゴスコスプレについてどう思いますか？uwu
          </p>
          <Image
            // src='https://www.shutterstock.com/image-vector/lock-glass-morphism-trendy-style-260nw-2047414109.jpg' // Change to your image path
            src='/dummy-img.png'
            alt='Locked Post' // Change to your alt text
            width={512}
            height={512}
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
  );
}

// dimensions with padding
// there is a 32 pixel padding diff on xl screens ml:370px -> ml:338px
// <div className='max-w-xl flex-grow border-l border-r border-gray-200  bg-green-400 sm:ml-[73px] lg:min-w-[576px] xl:ml-[370px]'>

// dimensions where width of this is 576 (like twitter) I changed it to 640 (576 + 32 + 32) to have 32 padding on either side
// <div className='max-w-xl flex-grow bg-main-background sm:ml-[40px] lg:min-w-[576px] xl:ml-[476px]'>
