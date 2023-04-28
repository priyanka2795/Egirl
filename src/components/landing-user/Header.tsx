import React from 'react';
import { NextImage } from '@components/ui/next-image';
import ExperienceTheFuture from '@components/landing-common/assets/ExperienceTheFuture';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex w-full flex-col items-center bg-[#F6F6F6] px-[24px] pt-[188px] md:px-[64px] lg:flex-row lg:px-[100px] lg:pt-[96px] 2xl:px-[120px]'>
      <div className='flex flex-col justify-center items-center lg:items-start w-full'>
        <div className='flex justify-center lg:justify-start'>
          <div className='flex  items-center rounded-[8px] bg-[#EAE8FD] px-[8px] py-[12px]'>
            <ExperienceTheFuture className='h-[40px] w-[40px] pr-[8px] lg:h-[20px] lg:w-[20px]' />
            <div className='flex '>
              <span className='text-[14px] font-[500] text-[#5848BC] md:text-[15px]'>
                experience the future
              </span>
            </div>
          </div>
        </div>
        <div className='w-[312px] pt-12 text-center md:w-[540px] lg:w-auto lg:text-start'>
          <span className='text-[32px] font-[600] text-black md:text-[56px]'>
            YOUR FAVOURITE <span className='font-[500] italic'>EGIRLS</span>,
            ALL IN ONE PLACE
          </span>
        </div>

        <div className='flex justify-center pt-[20px] lg:justify-start'>
          <button className='mt-12 rounded-xl bg-[#5848BC] py-4 px-[30px] text-[16px] font-semibold text-white transition duration-100 hover:bg-[#4D37DA] md:text-lg'>
            <Link href='https://discord.gg/ECAds8F8Dj'>
              Join us
            </Link>
          </button>
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <div className='flex shrink-0 items-center justify-center pt-[40px] pb-[74px] lg:py-[80px]'>
          <div className='flex shrink-0'>
            <NextImage
              width={558}
              height={540}
              src={'/assets/svgImages/userHeader.svg'}
              alt={'user header'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
