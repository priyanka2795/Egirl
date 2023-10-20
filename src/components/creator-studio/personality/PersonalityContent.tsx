import React from 'react';
import PersonalityS1 from './PersonalityS1';
import PersonalityLikeSection from './PersonalityLikeSection';
import PersonalityTraitsSection from './PersonalityTraitsSection';
import Image from 'next/image';
import circleInformation from '../../../../public/assets/circle-information5.png';

const PersonalityContent = () => {
  return (
    <>
      <div className='flex flex-col items-start self-stretch gap-4'>
        <PersonalityS1 />

        <PersonalityLikeSection />

        <PersonalityTraitsSection />

        <div className='flex w-full flex-col gap-4 rounded-[14px] bg-[#121212] p-6'>
          <div className='flex gap-[6px]'>
            <div className='font-bold text-[18px] leading-6 text-[#FFFFFF]'>
              Descriptions
            </div>
            <div className='w-4 h-4'>
              <Image
                className='w-full h-full'
                src={circleInformation}
                alt={''}
              />
            </div>
          </div>
          <div className='flex w-full gap-4'>
            <div className='flex w-1/2 flex-col gap-[6px]'>
              <div className='flex justify-between'>
                <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                  Description
                </div>
                <div className='font-normal text-[14px] leading-[18px] text-[#515151]'>
                  0/2000
                </div>
              </div>
              <textarea
                className='font-normal h-[135px] resize-none rounded-[14px] border-none bg-white/[0.05] py-3 pl-4 pr-3 text-[15px] leading-6 text-[#979797] placeholder-[#979797] focus:ring-0'
                placeholder='Enter a description here...'
              ></textarea>
            </div>

            <div className='flex w-1/2 flex-col gap-[6px]'>
              <div className='flex justify-between'>
                <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                  World Description
                </div>
                <div className='font-normal text-[14px] leading-[18px] text-[#515151]'>
                  0/2000
                </div>
              </div>
              <textarea
                className='font-normal h-[135px] resize-none rounded-[14px] border-none bg-white/[0.05] py-3 pl-4 pr-3 text-[15px] leading-6 text-[#979797] placeholder-[#979797] focus:ring-0'
                placeholder='Enter a world description here...'
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalityContent;
