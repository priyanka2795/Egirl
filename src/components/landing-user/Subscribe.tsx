import Link from 'next/link';
import React from 'react';
import { StarIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Logo from './assets/Logo';
import { NextImage } from '@components/ui/next-image';
import SarahCarterAvatar from './assets/Subscribe/SarahCarterAvatar';
import JennieYoonAvatar from './assets/Subscribe/JennieYoonAvatar';
import MikaChanAvatar from './assets/Subscribe/MikaChanAvatar';
import MikaPost from './assets/Subscribe/MikaPost';
import SarahPost from './assets/Subscribe/SarahPost';
import JenniePost from './assets/Subscribe/JenniePost';

const Subscribe = () => {
  return (
    <div className='w-full bg-[#F6F6F6] px-24 lg:px-[100px]'>
      <div className='py-20'>
        <div className=''>
          <div className=''>
            <div className='flex justify-center lg:justify-start'>
              <div className='mb-1'>
                <span className='text-[36px] font-[500] text-[#949698] lg:text-[18px] select-none'>
                  SPICY CONTENT AWAITS
                </span>
              </div>
            </div>
            <div className='flex justify-center space-x-3 text-center lg:justify-start'>
              <span className='text-[64px] font-[600] text-[#000000] lg:text-[48px] select-none'>
                Subscribe to see{' '}
                <span className='font-[400] italic'>exclusive</span> content
              </span>
            </div>
          </div>
          <div className='mt-5  lg:mt-10'>
            <div className='items-center justify-around space-y-8 lg:flex lg:space-x-10 lg:space-y-0'>
              <div className='flex  flex-col items-center shadow-subscribe-card-shadow'>
                <div className='justify-left flex w-[397px] items-center rounded-t-2xl bg-[#E7E8E8] pt-6 pb-5 pl-6 '>
                  <SarahCarterAvatar />
                  <div className='ml-[12px] '>
                    <span className='text-lg font-medium text-[#000000] select-none'>
                      Sarah Carter
                    </span>
                  </div>
                </div>
                <div className='flex flex-col items-center rounded-b-2xl bg-white'>
                  <div className='w-[349px] pt-5'>
                    <span className=' text-[30px] font-[400] text-[#000000] lg:text-[15px] select-none'>
                      Beach days are always so soothing, you guys need to come
                      relax with me!
                    </span>
                  </div>
                  <SarahPost className='m-6 h-[414px] w-[349px]' />
                </div>
              </div>

              <div className='flex  flex-col items-center shadow-subscribe-card-shadow'>
                <div className='justify-left flex w-[397px] items-center rounded-t-2xl bg-[#E7E8E8] pt-6 pb-5 pl-6 '>
                  <JennieYoonAvatar />
                  <div className='ml-[12px] '>
                    <span className='text-lg font-medium text-[#000000] select-none'>
                      Yoon Jennie
                    </span>
                  </div>
                </div>
                <div className='flex flex-col items-center rounded-b-2xl bg-white'>
                  <div className='w-[349px] pt-5'>
                    <span className='text-[30px] font-[400] text-[#000000] lg:text-[15px] select-none'>
                      I was worried I would drop my phone in the water · 폰을
                      물에 빠뜨릴까봐 걱정했는데
                    </span>
                  </div>
                  <JenniePost className='m-6 h-[414px] w-[349px]' />
                </div>
              </div>
              <div className='flex  flex-col items-center shadow-subscribe-card-shadow'>
                <div className='justify-left flex w-[397px] items-center rounded-t-2xl bg-[#E7E8E8] pt-6 pb-5 pl-6 '>
                  <MikaChanAvatar />
                  <div className='ml-[12px] '>
                    <span className='text-lg font-medium text-[#000000] select-none'>
                      Mika-chan
                    </span>
                  </div>
                </div>
                <div className='flex flex-col items-center rounded-b-2xl bg-white'>
                  <div className='w-[349px] pt-5'>
                    <span className=' text-[30px] font-[400] text-[#000000] lg:text-[15px] select-none'>
                      Enjoying the view? uwu · 景色を楽しんでいますか？uwu
                    </span>
                  </div>
                  <MikaPost className='m-6 h-[414px] w-[349px]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
