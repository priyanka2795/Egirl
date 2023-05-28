import React from 'react';
import { NextImage } from '@components/ui/next-image';
import ExperienceTheFuture from '@components/landing-common/assets/ExperienceTheFuture';
import Link from 'next/link';
import Image from 'next/image';
import HeaderImg from './assets/HeaderImg';

interface Props {
  setBetaAccess: () => void;
}

const Header = ({ setBetaAccess }: Props) => {
  return (
    <div className='flex w-full flex-col items-center bg-[#F6F6F6] px-[24px] pt-[188px] md:px-[40px] lg:flex-row lg:px-[100px] lg:pt-[96px] 2xl:px-[120px]'>
      <div className='flex w-full flex-col items-center justify-center lg:items-start'>
        <div className='flex justify-center lg:justify-start'>
          <div className='flex  items-center rounded-[8px] bg-[#EAE8FD] px-[8px] py-[12px]'>
            {/* <ExperienceTheFuture className='h-[40px] w-[40px] pr-[8px] lg:h-[20px] lg:w-[20px]' /> */}
            <div className='mr-[8px] flex justify-center'>
              <Image
                src='/assets/final/starIcon.svg'
                height='20'
                width='20'
                alt='starIcon'
              />
            </div>
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
          <button
            onClick={() => {
              setBetaAccess();
            }}
            className='mt-12 rounded-xl bg-[#5848BC] px-[30px] py-4 text-[16px] font-semibold text-white transition duration-100 hover:bg-[#4D37DA] md:text-lg'
          >
            Join us
          </button>
        </div>
      </div>
      <div className='flex w-full items-center justify-center pb-[40px] pt-[48px] md:pb-[74px] md:pt-[40px] lg:py-[80px]'>
        {/* <NextImage
              width={558}
              height={540}
              src={'/assets/svgImages/userHeader.svg'}
              alt={'user header'}
            /> */}
        {/* <Image
              src='/assets/final/userHeader.svg'
              width='558px'
              height='540'
              alt='headerIllus'
              className='h-[540px] w-[558px]'
            /> */}
        {/* <HeaderImg className=' h-[290px] w-full md:h-[540px] md:w-[558px]' /> */}
        {/* <div className='relative h-[290px] w-full bg-red-400 md:h-[540px] md:w-[558px]'>
              <Image
                alt={'Header Image'}
                src='/assets2/UserLanding/HeaderImg/Header2x.png'
                layout='fill'
                objectFit='cover'
              />
            </div> */}

        <div className='hidden md:flex'>
          <Image
            src={'/assets2/UserLanding/HeaderImg/Header2x.png'}
            layout='fixed'
            width={558}
            height={540}
          />
        </div>
        <div className='relative h-[300px] w-full sm:h-[400px] md:hidden'>
          <Image
            src={'/assets2/UserLanding/HeaderImg/Header2x.png'}
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            quality={75}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
