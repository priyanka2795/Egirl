import Link from 'next/link';
import React from 'react';
import { StarIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Logo from './assets/Logo';
import { NextImage } from '@components/ui/next-image';
import SarahCarterAvatar from './assets/Subscribe/SarahCarterAvatar';
import JennieYoonAvatar from './assets/Subscribe/JennieYoonAvatar';
import MikaChanAvatar from './assets/Subscribe/MikaChanAvatar';
import dynamic from 'next/dynamic';

const MikaPost = dynamic(() => import('./assets/Subscribe/MikaPost'), {
  loading: () => (
    <div className='h-[414px] w-[349px] text-black'>Loading SVG...</div>
  ),
  ssr: false
});

const SarahPost = dynamic(() => import('./assets/Subscribe/SarahPost'), {
  loading: () => (
    <div className='h-[414px] w-[349px] text-black'>Loading SVG...</div>
  ),
  ssr: false
});

const JenniePost = dynamic(() => import('./assets/Subscribe/JenniePost'), {
  loading: () => (
    <div className='h-[414px] w-[349px] text-black'>Loading SVG...</div>
  ),
  ssr: false
});

const Subscribe = () => {
  return (
    <div className='w-full bg-[#F6F6F6] px-24 lg:px-[100px] 2xl:px-[120px]'>
      <div className='py-20'>
        <div className=''>
          <div className=''>
            <div className='flex justify-center lg:justify-start'>
              <div className='mb-1'>
                <span className='select-none text-center text-[14px] font-[500] text-[#949698] md:text-start md:text-[18px]'>
                  SPICY CONTENT AWAITS
                </span>
              </div>
            </div>
            <div className='flex justify-center space-x-3 text-center lg:justify-start'>
              <span className='select-none text-[24px] font-[600] text-[#000000] lg:text-[48px]'>
                Subscribe to see{' '}
                <span className='font-[400] italic'>exclusive</span> content
              </span>
            </div>
          </div>
          <div className='mt-[32px] md:mt-10'>
            <div className='items-center justify-around space-y-8 lg:flex lg:space-x-10 lg:space-y-0'>
              <div className='flex  flex-col items-center  drop-shadow-xl'>
                <div className='justify-left flex w-[397px] items-center rounded-t-2xl bg-[#E7E8E8] pt-6 pb-5 pl-6'>
                  <SarahCarterAvatar />
                  <div className='ml-[12px] '>
                    <span className='select-none text-lg font-medium text-[#000000]'>
                      Sarah Carter
                    </span>
                  </div>
                </div>
                <div className='flex flex-col items-center rounded-b-2xl bg-white'>
                  <div className='w-[349px] pt-5'>
                    <span className='select-none text-[16px] font-[400] text-[#000000] md:text-[15px]'>
                      Beach days are always so soothing, you guys need to come
                      relax with me!
                    </span>
                  </div>
                  <SarahPost className='m-6 h-[414px] w-[349px]' />
                </div>
              </div>

              <div className='flex  flex-col items-center drop-shadow-xl'>
                <div className='justify-left flex w-[397px] items-center rounded-t-2xl bg-[#E7E8E8] pt-6 pb-5 pl-6 '>
                  <JennieYoonAvatar />
                  <div className='ml-[12px] '>
                    <span className='select-none text-lg font-medium text-[#000000]'>
                      Yoon Jennie
                    </span>
                  </div>
                </div>
                <div className='flex flex-col items-center rounded-b-2xl bg-white'>
                  <div className='w-[349px] pt-5'>
                    <span className='select-none text-[16px] font-[400] text-[#000000] md:text-[15px]'>
                      I was worried I would drop my phone in the water · 폰을
                      물에 빠뜨릴까봐 걱정했는데
                    </span>
                  </div>
                  <JenniePost className='m-6 h-[414px] w-[349px]' />
                </div>
              </div>
              <div className='flex  flex-col items-center drop-shadow-xl'>
                <div className='justify-left flex w-[397px] items-center rounded-t-2xl bg-[#E7E8E8] pt-6 pb-5 pl-6 '>
                  <MikaChanAvatar />
                  <div className='ml-[12px] '>
                    <span className='select-none text-lg font-medium text-[#000000]'>
                      Mika-chan
                    </span>
                  </div>
                </div>
                <div className='flex flex-col items-center rounded-b-2xl bg-white'>
                  <div className='w-[349px] pt-5'>
                    <span className=' select-none text-[16px] font-[400] text-[#000000] md:text-[15px]'>
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
