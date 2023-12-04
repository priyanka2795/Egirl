import React, { useState } from 'react';
import circleInformation from '@/assets/circle-information.webp';
import bankCard from '@/assets/bank-card.webp';
import chip from '@/assets/chip.webp';
import threeDots from '@/assets/dots-horizontal-white.webp';
import deleteIcon from '@/assets/trash-blank.webp';
import Image from 'next/image';

interface AddedCardProps {
    setAddedCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddedCard = ( {setAddedCard} : AddedCardProps ) => {
    const [deleteDiv, setDeleteDiv] = useState(false);
    
  return (
    <div className='flex flex-col gap-4 px-6 pt-4 pb-6 custom-scroll-bar'>
        <div className='flex gap-1'>
            <div className='w-4 h-4'>
                <Image className='w-full h-full' src={circleInformation} alt={''} />
            </div>
            <div className='text-[#979797] text-[12px] font-normal leading-4'>Only one card may be added currently</div>
        </div>
        <div className='relative rounded-[16px]'>
            <Image className='w-full h-full' src={bankCard} alt={''} />
            <div className='absolute top-[102px] flex justify-between w-full p-6'>
                <div className='flex flex-col gap-[2px]'>
                    <div className='text-[#ADA3DD] text-[12px] font-semibold leading-4'>Card added </div>
                    <div className='text-[#FFFFFF] text-[22px] font-bold leading-8'>03.08.23</div>
                </div>
                <div className='w-[33px] h-[25px] mt-2'>
                    <Image className='w-full h-full' src={chip} alt={''} />
                </div>
            </div>
            <div className='absolute cursor-pointer top-2 right-2 p-2 rounded-[133px] bg-white/[0.32]' onClick={() => {setDeleteDiv(!deleteDiv)}}>
                <div className='w-6 h-6'>
                    <Image className='w-full h-full' src={threeDots} alt={''} />
                </div>
            </div>
            {deleteDiv && 
            <div className='absolute top-[56px] right-[8px] w-[218px] px-0 py-2 rounded-[14px] bg-[#1A1A1A]' onClick={() => {setAddedCard(false)}}>
            <div className='flex gap-2 px-4 py-[10px]  cursor-pointer'>
                <div className='w-[18px] h-[18px]'>
                    <Image className='w-full h-full' src={deleteIcon} alt={''} />
                </div>
                <div className='text-[#FF5336] text-[14px] font-normal leading-[18px]'>Delete</div>
            </div>
            </div>
        }
        </div>
    </div>
  )
}

export default AddedCard
