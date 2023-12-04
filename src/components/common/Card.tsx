import React from 'react'
import blueTick from '@/assets/badge-check.webp'
import Image from 'next/image'

interface CardProps{
    cardMainImg: any;
    verified?:boolean;
    characterName:string;
    characterType?:string;
    availableCount?:string;
}
const Card = ({cardMainImg ,verified, characterName, characterType, availableCount }:CardProps) => {
  return (
    <div className='flex flex-col items-start self-stretch overflow-hidden cursor-pointer rounded-2xl bg-white/10'>
    <div className='flex self-stretch justify-center h-full overflow-hidden'>
        <Image className='object-cover w-full' src={cardMainImg} alt={''} />
    </div>
    <div className='flex flex-col gap-2 p-4'>
        <div className='flex items-center gap-1'>
            <div className='text-[#FFFFFF] text-[14px] font-semibold leading-[18px]'>{characterName}</div>
            <Image className={`w-[16px] h-[16px]  ${verified === true ? "show" : "!hidden"}`} src={blueTick} alt={''}/>
        </div>
        {
            characterType &&
            <div className='flex items-center gap-1'>
                <div className='flex justify-center items-center px-[10px] py-1 rounded-[8px] bg-white/[0.08] text-[#FFFFFF] text-[12px] font-normal leading-4'>{characterType}</div>
                <div className='flex justify-center items-center px-[10px] py-1 rounded-[8px] bg-white/[0.08] text-[#FFFFFF] text-[12px] font-normal leading-4'>{availableCount}</div>
            </div>
        }
    </div>
</div>
  )
}

export default Card
