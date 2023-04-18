import Link from 'next/link';
import React from 'react';
import { StarIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Logo from './assets/Logo';
import { NextImage } from '@components/ui/next-image';

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
          <div className='mt-10  lg:mt-5'>
            <div className='items-center justify-around space-y-8 lg:flex lg:space-x-10 lg:space-y-0'>
              <div className='flex justify-center'>
                <div className='rounded-t-2xl border lg:h-[600px] lg:w-[400px]'>
                  <div className='justify-left flex items-center rounded-t-2xl bg-[#6c6e7229] py-10 lg:h-[80px] '>
                    <div className='ml-[24px] hidden rounded-full lg:block'>
                      <NextImage
                        width={36}
                        height={36}
                        src={'/assets/mikaChanIcon.png'}
                        alt={'mikaChanIcon'}
                        imgClassName='rounded-full'
                      />
                    </div>
                    <div className='ml-[24px] rounded-full lg:hidden'>
                      <NextImage
                        width={72}
                        height={72}
                        src={'/assets/mikaChanIcon.png'}
                        alt={'mikaChanIcon'}
                        imgClassName='rounded-full'
                      />
                    </div>
                    <div className='ml-[12px] '>
                      <span className='text-[48px] font-[600] text-[#000000] lg:text-[24px]'>
                        Mika-Chan
                      </span>
                    </div>
                  </div>
                  <div className='mx-[24px] mt-[12px]'>
                    <span className='text-[30px] font-[400] text-[#000000] lg:text-[15px]'>
                      What do you guys think of my goth cosplay? uwu ·
                      私のゴスコスプレについてどう思いますか？uwu
                    </span>
                  </div>
                  <div className='mt-[14px] mb-[14px] flex items-center justify-center lg:mb-0'>
                    <NextImage
                      width={700}
                      height={800}
                      src={'/assets/mikaChanContent.png'}
                      alt={'mikaChanContent'}
                      imgClassName='rounded-[15px]'
                    />
                  </div>
                </div>
              </div>

              <div className='flex justify-center pt-10 lg:pt-0'>
                <div className='rounded-lg border lg:h-[600px] lg:w-[400px]'>
                  <div className='justify-left flex items-center bg-[#6c6e7229] py-10 lg:h-[80px]'>
                    <div className='ml-[24px] hidden rounded-full lg:block'>
                      <NextImage
                        width={36}
                        height={36}
                        src={'/assets/jennieIcon.png'}
                        alt={'jennieIcon'}
                        imgClassName='rounded-full'
                      />
                    </div>
                    <div className='ml-[24px] rounded-full lg:hidden'>
                      <NextImage
                        width={72}
                        height={72}
                        src={'/assets/jennieIcon.png'}
                        alt={'jennieIcon'}
                        imgClassName='rounded-full'
                      />
                    </div>
                    <div className='ml-[12px]'>
                      <span className='text-[48px] font-[600] text-[#000000] lg:text-[24px]'>
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
                    <NextImage
                      width={700}
                      height={800}
                      src={'/assets/jennieContent.png'}
                      alt={'jennieContent'}
                      imgClassName='rounded-[15px]'
                    />
                  </div>
                </div>
              </div>

              <div className='flex justify-center pt-10 lg:pt-0'>
                <div className='w-full rounded-lg border lg:h-[600px] lg:w-[400px]'>
                  <div className='justify-left flex items-center bg-[#6c6e7229] py-10 lg:h-[80px]'>
                    <div className='ml-[24px] hidden rounded-full lg:block'>
                      <NextImage
                        width={36}
                        height={36}
                        src={'/assets/mirandaIcon.png'}
                        alt={'mirandaIcon'}
                        imgClassName='rounded-full'
                      />
                    </div>
                    <div className='ml-[24px] rounded-full lg:hidden'>
                      <NextImage
                        width={72}
                        height={72}
                        src={'/assets/mirandaIcon.png'}
                        alt={'mirandaIcon'}
                        imgClassName='rounded-full'
                      />
                    </div>
                    <div className='ml-[12px]'>
                      <span className='text-[48px] font-[600] text-[#000000] lg:text-[24px]'>
                        Miranda Wilde
                      </span>
                    </div>
                  </div>
                  <div className='mx-[24px] mt-[12px]'>
                    <span className='text-[30px] font-[400] text-[#000000] lg:text-[15px]'>
                      Trying out my new amber contacts at the beach
                    </span>
                  </div>
                  <div className='mt-[14px] mb-[14px] flex items-center justify-center lg:mt-[30px] lg:mb-0'>
                    <NextImage
                      width={700}
                      height={800}
                      src={'/assets/mirandaContent.png'}
                      alt={'mirandaContent'}
                      imgClassName='rounded-[15px]'
                    />
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
