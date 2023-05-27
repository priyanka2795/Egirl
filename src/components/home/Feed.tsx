import React, { useState } from 'react';
import Image from 'next/image';
import DotsHorizontalIcon from './Post/svg/dots-horizontal.svg';
import useScroll from '../../../hooks/useScroll';
import LocationPinIcon from './Post/svg/location-pin.svg';
import CommentIcon from './Post/svg/comment.svg';
import HeartIcon from './Post/svg/heart.svg';
import SaveIcon from './Post/svg/save.svg';
import ReturnIcon from './Post/svg/return-icon.svg';
import EyeIcon from './Post/svg/eye.svg';

CommentIcon;
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

        <div className='flex w-full flex-col gap-y-4 rounded-[14px] bg-main-bar p-6'>
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
                @mikachan • 6h
              </p>
            </div>
            <div className='ml-auto'>
              <DotsHorizontalIcon />
            </div>
          </div>
          <div>
            <p className='w-full text-sm leading-[18px] text-white'>
              Hello dears, my mood today is 🤗
            </p>
            <div className='flex items-center gap-x-[6px]'>
              <p className='mt-1 text-sm font-light leading-[18px] text-[#8476C4]'>
                #girl
              </p>
              <p className='mt-1 text-sm font-light leading-[18px] text-[#8476C4]'>
                #mood
              </p>
              <p className='mt-1 text-sm font-light leading-[18px] text-[#8476C4]'>
                #relaxtime
              </p>
            </div>
          </div>
          <div className='flex h-auto w-full flex-col gap-y-5'>
            <Image
              // src='https://www.shutterstock.com/image-vector/lock-glass-morphism-trendy-style-260nw-2047414109.jpg' // Change to your image path
              src='/dummy-img.png'
              alt='Locked Post' // Change to your alt text
              width={512}
              height={512}
              className='rounded-xl'
            />
            <div className='flex w-full'>
              <LocationPinIcon />
              <span className='ml-2'>Warsaw, Old Town</span>
            </div>
            <div className='flex w-full gap-x-3 text-[15px] font-light leading-5'>
              <button className='transition-duration-100 flex items-center rounded-full bg-[#282828] px-3 py-2 hover:bg-[#252525]'>
                <HeartIcon className='text-[#979797]' />
                <span className='ml-[6px] '>6.2k</span>
              </button>
              <button className='transition-duration-100 flex items-center rounded-full bg-[#282828] px-3 py-2 hover:bg-[#252525]'>
                <CommentIcon className='text-[#979797]' />
                <span className='ml-[6px]'>98</span>
              </button>
              <button className='transition-duration-100 flex items-center rounded-full bg-[#282828] px-3 py-2 hover:bg-[#252525]'>
                <SaveIcon className='text-[#979797]' />
              </button>
              <button className='transition-duration-100 flex items-center rounded-full bg-[#282828] px-3 py-2 hover:bg-[#252525]'>
                <ReturnIcon className='text-[#979797]' />
              </button>
              <button className='transition-duration-100 ml-auto flex items-center rounded-full bg-[#282828] px-3 py-2 hover:bg-[#252525]'>
                <EyeIcon className='text-[#979797]' />
                <span className='ml-[6px]'>1.8k</span>
              </button>
            </div>
          </div>
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
