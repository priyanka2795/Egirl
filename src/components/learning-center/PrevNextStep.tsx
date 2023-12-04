import React from 'react';
import Image from 'next/image';
import arrowLeft from '@/assets/arrow-left-lightGrey.webp';
import arrowRight from '@/assets/arrow-right-lightGrey.webp';
function PrevNextStep() {
  return (
    <div className='grid grid-cols-2 gap-4 pt-8'>
      <div className='cursor-pointer rounded-[20px] border border-white/[0.08] bg-white/[0.08] p-5 hover:border-white/[0.05] hover:bg-white/[0.05]'>
        <div className='flex items-center gap-2'>
          <Image src={arrowLeft} alt='' />
          <span className='text-[12px] text-[#979797]'>Previous step</span>
        </div>
        <div className='pt-1 text-[18px] font-black text-white'>Profile</div>
      </div>
      <div className='flex cursor-pointer flex-col items-end rounded-[20px] border border-white/[0.08] bg-white/[0.08] p-5 hover:border-white/[0.05] hover:bg-white/[0.05]'>
        <div className='flex items-center gap-2'>
          <span className='text-[12px] text-[#979797]'>Next step</span>
          <Image src={arrowRight} alt='' />
        </div>
        <div className='pt-1 text-[18px] font-black text-white' >
          Partner Program
        </div>
      </div>
    </div>
  );
}

export default PrevNextStep;
