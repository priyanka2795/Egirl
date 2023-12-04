import Image from 'next/image';
import React from 'react';
import leftArrow from '@/assets/left-arrow-grey.webp';
import rightArrow from '@/assets/right-arrow-grey.png';
import checkIcon from '@/assets/check-icon-grey.webp';

const FeedbackSent = () => {
  return (
    <div className='flex justify-between pl-[47px] w-full'>
      <div className='flex gap-2'>
        <div className='w-5 h-5'>
            <Image className='w-full h-full' src={checkIcon} alt={''} />
        </div>
        <div className='text-[#979797] text-[15px] font-semibold leading-5'>Feedback sent</div>
      </div>
      <div className='flex gap-2'>
            <div className='w-5 h-5'>
                <Image className='w-full h-full' src={leftArrow} alt={''} />
            </div>
            <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>3/3</div>
            <div className='w-5 h-5'>
                <Image className='w-full h-full' src={rightArrow} alt={''} />
            </div>
        </div>
    </div>
  )
}

export default FeedbackSent;
