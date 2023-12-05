import React from 'react'
import Image from 'next/image'
import TinderNopeBtn from '@components/explore/TinderNopeBtn';
import TinderLikeBtn from '@components/explore/TinderLikeBtn';
import blueDressGirl from '@/assets/blue-dress-girl.webp';
import arrowNext from '@/assets/arrow-next.webp';

const HomePageSlider = () => {
  return (
    <div className='rounded-[14px] max-h-[274px] bg-[#5848BC14]/[0.08] relative overflow-hidden'>
        <Image className='w-full h-full' src={blueDressGirl} alt={''} />
        <div className='absolute px-4 py-[10px] justify-center items-center top-[57px] right-[244px] -rotate-[10deg] rounded-[12px] border-[3px] border-[#FF5336]'>
            <div className='text-[20px] font-bold text-[#FF5336] uppercase'>Nope</div>
        </div>
        <div className='absolute top-[143px] -right-[14px] rotate-[17deg] px-4 py-[10px] justify-center items-center rounded-[12px] border-[3px] border-[#5AD02E]'>
            <div className='text-[20px] font-bold text-[#5AD02E] uppercase'>like</div>
        </div>
        <button className='absolute top-[220px] right-[16px] flex gap-[6px] w-[296px] justify-center items-center bg-[#5848BC] px-4 py-[10px] rounded-[12px] text-[#FFFFFF]'>
            <div className='text-[14px] font-bold leading-5'>Explore more</div>
            <Image className='w-[18px] h-[18px]' src={arrowNext} alt={''} />
        </button>
    </div>
  )
}

export default HomePageSlider
