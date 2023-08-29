import React from 'react';
import avatar from '../../../public/assets/Avatar.png';
import circleInformation from '../../../public/assets/circle-information6.png';
import threeDots from '../../../public/assets/three-dots-horizontal.png';
import Image from 'next/image';

const ChatContent = () => {
  return (
    <div className='flex flex-col '>
        <div className='flex justify-between bg-[#121212] px-6 py-4'>
            <div className='flex items-center gap-3'>
                <Image className='w-full h-full' src={avatar} alt={''} />
                <div className='text-[#FFFFFF] text-[15px] font-semibold leading-5'>Mika-chan</div>
            </div>
            <div className='flex gap-4'>
                <div className='flex gap-[6px] pr-4'>
                    <div className='flex gap-[10px] items-center'>
                        <div className='overflow-hidden flex w-[41px] h-[24px] bg-[#272727] rounded-[100px]'>
                            <div className='w-1/2 bg-white rounded-full'></div>
                            <div></div>
                        </div>
                        <div className='text-[#FFFFFF] text-[14px] font-normal leading-[18px]'>Voice Mode</div>
                    </div>
                    <Image className='object-contain w-full h-full' src={circleInformation} alt={''} />
                </div>
                <Image className='object-contain w-full h-full' src={threeDots} alt={''} />
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default ChatContent;
