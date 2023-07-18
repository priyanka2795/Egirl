import React from 'react'
import blueTick from '../../../public/assets/badge-check.png'
import Image from 'next/image'

interface CardProps{
    cardMainImg: any,
    verified?:boolean,
    characterName:string
    characterType?:string
    availableCount?:string
}
const Card = ({cardMainImg ,verified, characterName, characterType, availableCount }:CardProps) => {
  return (
    <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
    <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
        <Image className='object-cover' src={cardMainImg} alt={''} />
    </div>
    <div className='flex flex-col items-start self-stretch gap-2 p-4'>
        <div className='flex items-center self-stretch gap-1'>
            <div className='text-[#FFFFFF] text-sm font-semibold'>{characterName}</div>
            <Image className={`w-[16px] h-[16px]  ${verified === true ? "show" : "!hidden"}`} src={blueTick} alt={''}/>
        </div>
        {
            characterType &&
            <div className='flex items-center self-stretch gap-1'>
            <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                <div className='text-[#FFFFFF] text-center text-xs font-normal'>{characterType}</div>
            </div>
            <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                <div className='text-[#FFFFFF] text-center text-xs font-normal'>{availableCount}</div>
            </div>
        </div>
        }
       
    </div>
</div>
  )
}

export default Card
