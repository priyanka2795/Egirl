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
    <div className='w-full bg-[#F7F7F7] px-24 lg:px-[100px]'>
      <div className='py-20'>
        <div className=''>
          <div className=''>
            <div className='flex justify-center lg:justify-start'>
              <div className='mb-1'>
                <span className='text-[36px] font-[500] text-[#949698] lg:text-[18px]'>
                  SPICY CONTENT AWAITS
                </span>
              </div>
            </div>
            <div className='flex justify-center space-x-3 text-center lg:justify-start'>
              <span className='text-[64px] font-[600] text-[#000000] lg:text-[48px]'>
                Subscribe to see{' '}
                <span className='font-[400] italic'>exclusive</span> content
              </span>
            </div>
          </div>
          <div className='mt-5  lg:mt-10'>
            <div className='items-center justify-around space-y-8 lg:flex lg:space-x-10 lg:space-y-0'>
              <div className='flex w-[379px] justify-center'>
                <div className='rounded-t-2xl border'>
                  <div className='justify-left flex items-center rounded-t-2xl bg-[#6c6e7229] pt-6 pb-5 pl-6 '>
                    <SarahCarterAvatar />

                    <div className='ml-[12px] '>
                      <span className='text-lg font-medium text-[#000000]'>
                        Sarah Carter
                      </span>
                    </div>
                  </div>
                  <div className=''>
                    <div className='mx-6 mt-5'>
                      <span className='text-[30px] font-[400] text-[#000000] lg:text-[15px]'>
                        What do you guys think of my goth cosplay? uwu ·
                        私のゴスコスプレについてどう思いますか？uwu
                      </span>
                    </div>
                    {/* <NextImage
                        width={700}
                        height={800}
                        src={'/assets/mikaChanContent.png'}
                        alt={'mikaChanContent'}
                        imgClassName='rounded-[15px]'
                      /> */}
                    <SarahPost className='m-6' />
                  </div>
                </div>
              </div>

              <div className='flex justify-center pt-10 lg:pt-0'>
                <div className='rounded-t-2xl border'>
                  <div className='justify-left flex items-center rounded-t-2xl bg-[#6c6e7229] py-10 pt-6 pb-5 pl-6 lg:h-[80px]'>
                    <JennieYoonAvatar />

                    <div className='ml-[12px]'>
                      <span className='text-lg font-medium text-[#000000] '>
                        Jennie Yoon
                      </span>
                    </div>
                  </div>
                  <div className='mx-[24px] mt-[12px]'>
                    <span className='text-[30px] font-[400] text-[#000000] lg:text-[15px]'>
                      Do I look cuter with short hair? · 짧은 머리가 더 귀엽게
                      보이나요?
                    </span>
                  </div>
                  <div className='mt-[14px] mb-[14px] flex items-center justify-center lg:mb-0'>
                    {/* <NextImage
                      width={700}
                      height={800}
                      src={'/assets/jennieContent.png'}
                      alt={'jennieContent'}
                      imgClassName='rounded-[15px]'
                    /> */}
                    <JenniePost />
                  </div>
                </div>
              </div>

              <div className='flex justify-center pt-10 lg:pt-0'>
                <div className='w-full rounded-t-2xl border'>
                  <div className='justify-left flex items-center rounded-t-2xl bg-[#6c6e7229] py-10 pt-6 pb-5 pl-6 lg:h-[80px]'>
                    <MikaChanAvatar />

                    <div className='ml-[12px]'>
                      <span className='text-lg font-medium text-[#000000]'>
                        Mika-chan
                      </span>
                    </div>
                  </div>
                  <div className='mx-[24px] mt-[12px]'>
                    <span className='text-[30px] font-[400] text-[#000000] lg:text-[15px]'>
                      Trying out my new amber contacts at the beach
                    </span>
                  </div>
                  <div className='mt-[14px] mb-[14px] flex items-center justify-center lg:mt-[30px] lg:mb-0'>
                    {/* <NextImage
                      width={700}
                      height={800}
                      src={'/assets/mirandaContent.png'}
                      alt={'mirandaContent'}
                      imgClassName='rounded-[15px]'
                    /> */}
                    <MikaPost />
                  </div>
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
