import React from 'react';
import PersonalityS1 from './PersonalityS1';
import PersonalityLikeSection from './PersonalityLikeSection';
import PersonalityTraitsSection from './PersonalityTraitsSection';
import Image from 'next/image';
import circleInformation from '../../../public/assets/circle-information5.png'

const Personality = () => {
  return (
    <>
      <div className='flex flex-col items-start self-stretch gap-4'>
        <PersonalityS1 />

        <PersonalityLikeSection />

        <PersonalityTraitsSection />

        <div className='w-full flex flex-col gap-4 p-6 rounded-[14px] bg-[#121212]'>
          <div className='flex gap-[6px]'>
            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Descriptions</div>
            <div className='w-4 h-4'>
              <Image className='w-full h-full' src={circleInformation} alt={''} />
            </div>
          </div>
          <div className='flex w-full gap-4'>
            <div className='w-1/2 flex flex-col gap-[6px]'>
              <div className='flex justify-between'>
                <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Description</div>
                <div className='text-[#515151] text-[14px] font-normal leading-[18px]'>0/2000</div>
              </div>
              <textarea className='border-none h-[135px] py-3 pl-4 pr-3 rounded-[14px] bg-white/[0.05] text-[#979797] text-[15px] font-normal leading-6 focus:ring-0'>Enter a description here...</textarea>
            </div>

            <div className='w-1/2 flex flex-col gap-[6px]'>
              <div className='flex justify-between'>
                <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>World Description</div>
                <div className='text-[#515151] text-[14px] font-normal leading-[18px]'>0/2000</div>
              </div>
              <textarea className='border-none h-[135px] py-3 pl-4 pr-3 rounded-[14px] bg-white/[0.05] text-[#979797] text-[15px] font-normal leading-6 focus:ring-0'>Enter a world description here...</textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personality;
