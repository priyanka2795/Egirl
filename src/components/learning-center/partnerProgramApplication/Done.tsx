import React from 'react';
import Image from 'next/image';
import leftArrow from '@/assets/left-arrow-grey.webp';
import confetti from '@/assets/confetti_green.webp'

interface identityProps {
  setSteps: any;
}
function Done({ setSteps }: identityProps) {
 return (
    <>
      <div className='flex items-center justify-between '>
        <div
          className='flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-xl bg-white/[0.08]'
          onClick={() => setSteps(4)}
        >
          <Image src={leftArrow} alt='' />
        </div>
        <div className='text-center text-[26px] font-black text-white'>
          Partner Program Application
        </div>
        <span></span>
      </div>
      <div className='flex flex-col items-center '>
        <div className='mt-8 flex flex-col justify-center items-center gap-1.5 border border-white/[0.12] pt-8 pb-6 px-6 rounded-[22px]'>
        <div className='flex items-center justify-center bg-[#111111] w-[90px] h-[90px] rounded-full partner_program'>
            <Image src={confetti} alt="" className='' />
        </div>
        <div className='text-white text-[18px] font-black pt-2'>Congratulations!</div>
        <div className='text-[#979797] text-[15px] font-normal text-center'>You've submitted your partner program application. <br></br>Your application is under review, this process may take <br></br> up to 4-5 business days.</div>
        <button
          className='mt-7 flex h-12 w-[420px] items-center justify-center  gap-2 rounded-[14px] bg-white/[0.08] px-5 py-[13px] text-base font-black leading-[22px] text-white'
        >
          Done
        </button>
        </div>
      </div>
    </>
  );
}

export default Done;



