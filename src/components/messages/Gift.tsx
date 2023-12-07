import Image from 'next/image'
import React from 'react'
import userIcon from '@/assets/user-icon.webp'
import pizza from '@/assets/pizza.webp';

type GiftProp = {
    showGiftImg: any;
    showGiftName: any;
};

const Gift = ({showGiftImg, showGiftName} : GiftProp) => {
  return (
    <div className='flex w-full gap-2 py-4 pr-6'>
        <div className='px-3 py-2 rounded-full h-max bg-white/[0.08]'>
            <Image className='w-4 h-4' src={userIcon} alt={''} />
        </div>
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
                <div className='text-[#FFFFFF] text-[15px] font-semibold leading-5'>You</div>
                <div className='text-[#979797] text-[12px] font-normal leading-4'>10:14</div>
            </div>
            <div className='w-[370px] flex gap-4 py-5 pl-5 pr-7 rounded-[14px] bg-white/[0.05]'>
                <div className='flex p-[18px] justify-center items-center rounded-[12px] bg-[#121212]'>
                    <Image src={showGiftImg} alt={''} />
                </div>
                <div className='flex flex-col gap-[6px]'>
                    <div className='text-[#FFFFFF] text-[14px] font-bold leading-[18px]'>{showGiftName}</div>
                    <div className='text-[#979797] text-[14px] font-normal leading-[18px]'>
                        <p>I sent you a {showGiftName} as a gift!</p>
                        <p>I hope you enjoy it.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gift
