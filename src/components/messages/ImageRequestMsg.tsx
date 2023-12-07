import React from 'react';
import Image from 'next/image';
import userIcon from '@/assets/user-icon.webp';
import imageSquareCheck from '@/assets/image-square-check.webp';
import arrowUpFromRight from '@/assets/arrow-up-right-from-square.webp';

const ImageRequestMsg = () => {
  return (
    <div className='flex gap-2 px-6 py-[10px]'>
    <div className='px-3 py-2 rounded-full h-max bg-white/[0.08]'>
        <Image className='w-4 h-4' src={userIcon} alt={''} />
    </div>
    <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
            <div className='text-[#FFFFFF] text-[15px] font-semibold leading-5'>You</div>
            <div className='text-[#979797] text-[12px] font-normal leading-4'>10:14</div>
        </div>
        <div className='w-[341px] flex gap-3 pt-4 pb-5 px-4 rounded-[14px] bg-white/[0.05]'>
            <div className='p-[14px] bg-white/[0.05] rounded-[8px] h-max'>
                <div className='w-5 h-5'>
                    <Image className='w-full h-full' src={imageSquareCheck} alt={''} />
                </div>
            </div>
            <div className='flex flex-col gap-[6px]'>
                <div className='flex justify-between'>
                    <div className='text-[#FFFFFF] text-[14px] font-bold leading-[18px]'>Image request</div>
                    <div className='w-[18px] h-[18px]'>
                        <Image className='w-full h-full' src={arrowUpFromRight} alt={''} />
                    </div>
                </div>
                <div className='text-[#979797] text-[14px] font-normal leading-[18px]'>Hey Mika-chan, I sent you an image request.</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ImageRequestMsg;
