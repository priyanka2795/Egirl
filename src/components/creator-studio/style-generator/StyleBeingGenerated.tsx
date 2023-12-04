import React from 'react';
import ClockSvg from '@/assets/svgImages/clock-img.svg';

interface StyleBeingGeneratedProps {
  setGeneratedStyle?: any;
}

const StyleBeingGenerated = ({
  setGeneratedStyle
}: StyleBeingGeneratedProps) => {
  return (
    <div className='flex items-center justify-between rounded-[14px] bg-white/[0.05] p-6'>
      <div className='flex items-center gap-4'>
        <div className='flex w-max rounded-full bg-white/[0.08] p-4'>
          <ClockSvg />
        </div>
        <div className='flex flex-col gap-[6px]'>
          <h5 className='text-[18px] font-bold leading-6 text-white'>
            Styles Being Generated
          </h5>
          <p className='text-[14px] font-normal leading-[18px] text-[#979797]'>
            You don’t have any generating styles.
          </p>
        </div>
      </div>
      <div
        className='cursor-pointer text-[15px] text-[#979797]'
        onClick={() => {
          setGeneratedStyle(true);
        }}
      >
        4 styles
      </div>
    </div>
  );
};

export default StyleBeingGenerated;
