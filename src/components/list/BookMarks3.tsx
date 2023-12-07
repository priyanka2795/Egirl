import React from 'react'
import Image from 'next/image';
import orangeDeleteIcon from '@/assets/orange-delete-icon.webp'


const BookMarks3 = () => {
  return (
    <div className='flex flex-col w-[400px] h-[400px] rounded-[20px] bg-[#1A1A1A] ml-24 mb-4'>
        <div className='flex px-10 py-12'>
            <div className='flex flex-col gap-4'>
                <div className='flex w-[80px] h-[80px] px-6 py-[26px] justify-center items-center rounded-[100px] bg-[#FF5336]/[0.16]'>
                    <div className='w-8 h-8'>
                        <Image className='w-full h-full' src={orangeDeleteIcon} alt={''} />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <div className='text-[#FFFFFF] text-center text-[22px] font-bold leading-[32px]'>Do you want to clear all your bookmarks?</div>
                    <div className='text-[#979797] text-center text-[15px] font-normal leading-5'>When confirming, note that the bookmark list cannot be restored</div>
                </div>
            </div>
        </div>

        <div className='flex gap-3 px-6 py-4'>
            <button className='w-1/2 flex px-5 py-[13px] rounded-[14px] border border-white/[0.32]'>
                <div className='text-[#FFFFFF] text-[16px] font-bold'>Cancel</div>
            </button>
            <button className='w-1/2 flex px-5 py-[13px] rounded-[14px] bg-[#FF5336] text-[#FFFFFF] text-[16px] font-bold'>Clear</button>
        </div>
    </div>
  )
}

export default BookMarks3
