import Image from 'next/image'
import React from 'react'
import deleteOrange from '../../../public/assets/orange-delete-icon.png'

const DeleteModal = () => {
  return (
    <div className='flex flex-col w-[400px] bg-[#1A1A1A] rounded-[20px] mt-5'>
        <div className='flex flex-col items-center justify-center px-10 py-13'>
            <div className='flex flex-col items-center gap-4'>
                <div className='pt-[26px] px-6 py-6 justify-center items-center bg-[#FF5336]/[0.16] rounded-full'>
                    <Image src={deleteOrange} alt={''} />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-center text-[#FFFFFF] text-[22px] font-bold leading-8'>Do you want to delete **1234 card?</div>
                    <div className='text-center text-[#979797] text-[15px] font-normal leading-5'>After deleting, you can add a card again at any time</div>
                </div>
            </div>
        </div>
        <div className='flex gap-3 px-6 py-4'>
            <button className='w-1/2 px-5 py-[13px] flex justify-center items-center rounded-[14px] border border-white/[0.32] text-[#FFFFFF] text-[16px] font-bold leading-[22px]'>Cancel</button>
            <button className='w-1/2 px-5 py-[13px] flex justify-center items-center rounded-[14px] bg-[#FF5336] text-[#FFFFFF] text-[16px] font-bold leading-[22px]'>Clear</button>
        </div>
    </div>
  )
}

export default DeleteModal
