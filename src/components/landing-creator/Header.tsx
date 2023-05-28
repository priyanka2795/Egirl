import React from 'react';
import { StarIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import HeaderIllustration from './assets/Header/HeaderIllustration';
import ExperienceTheFuture from '../landing-user/assets/ExperienceTheFuture';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  setBetaAccess: () => void;
}

const Header = ({ setBetaAccess }: Props) => {
  return (
    <div className='flex flex-col bg-[#000000]  px-[24px] pt-[188px] md:px-[40px] lg:flex-row lg:px-[100px] lg:pt-[96px] xl:justify-around 2xl:px-[140px]'>
      <div className='flex flex-col items-center justify-center lg:items-start'>
        {/* <div className='mt-[40px] flex h-[80px] items-center space-x-2 rounded-[8px] bg-[#1414] px-[8px] py-[12px] md:mt-[64px] md:w-[320px] lg:mt-0 lg:h-[40px] lg:w-[175px]'>
          <StarIcon className='mr-[6px] h-[16px] w-[16px] fill-[#5848BC] md:mr-[8px] md:h-[20px] md:w-[20px]'></StarIcon>
          <div className='flex'>
            <span className='text-[14px] font-[500] text-[white] md:text-[24px] lg:text-[15px]'>
              become a creator
            </span>
          </div>
        </div> */}
        <div className='flex select-none items-center justify-center bg-[#1414] px-[10px] py-[8px] text-[15px] md:px-[12px]'>
          <ExperienceTheFuture className='mr-[6px] h-[16px] w-[16px] md:mr-[8px] md:h-[20px] md:w-[20px]' />
          become a creator
        </div>
        <h1 className='max-lines-1 mt-6 select-none text-center text-[32px] font-[600] text-white md:text-[56px] lg:text-left'>
          LET YOUR <span className='font-[500] italic'>IMAGINATION</span>
          <br />
          RUN WILD
        </h1>
        <div className='flex'>
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
      <div className='mt-[48px] flex items-center justify-center md:mb-[74px] md:mt-[40px] lg:my-[80px]'>
        {/* <HeaderIllustration className='h-auto w-full lg:w-[578px]' /> */}
        <div className='hidden md:flex'>
          <Image
            src={'/assets2/CreatorLanding/HeaderImg/HeaderImg2x.png'}
            layout='fixed'
            width={558}
            height={540}
          />
        </div>
        <div className='relative h-[300px] w-full sm:h-[400px] md:hidden'>
          <Image
            src={'/assets2/CreatorLanding/HeaderImg/HeaderImg2x.png'}
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
