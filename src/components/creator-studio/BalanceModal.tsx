import React from 'react';
import Image from 'next/image';
import arrowLeft from '../../../public/assets/arrow-left-orange.png';

const BalanceModal = () => {
  return (
    <div className='absolute top-[49px] right-0 flex w-[218px] px-0 py-2 rounded-[14px] bg-[#1A1A1A] flex-col z-[1]'>
      <div className='flex px-4 pt-1 pb-3 border-b border-white/[0.08] flex-col'>
        <div className='text-white/[0.32] text-[15px] font-normal leading-5'>Your balance</div>
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
                <div className='text-[#FFFFFF] text-[36px] font-bold leading-12'>234</div>
                <div className='text-[#979797] text-[15px] font-normal leading-5 mt-[23px]'>Tokens</div>
            </div>
            <button className='px-3 py-[7px] justify-center items-center bg-white/[0.08] rounded-[10px] text-[12px] text-[#979797] font-bold leading-[18px]'>Get more</button>
        </div>
      </div>
      <div className='px-4 py-[10px] flex gap-2 bg-[#1A1A1A]'>
        <div className='w-[18px] h-[18px]'>
            <Image className='w-full h-full' src={arrowLeft} alt={''} />
        </div>
        <div className='text-[#FF5336] text-[14px] font-normal leading-[18px]'>Log out</div>
      </div>
    </div>
  )
}

export default BalanceModal
