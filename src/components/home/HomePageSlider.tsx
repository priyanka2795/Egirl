import React from 'react'
import Image from 'next/image'
import TinderNopeBtn from '@components/explore/TinderNopeBtn';
import TinderLikeBtn from '@components/explore/TinderLikeBtn';
import blueDressGirl from '../../../public/assets/blue-dress-girl.png';
import arrowNext from '../../../public/assets/arrow-next.png';

const HomePageSlider = () => {
  return (
    <div className='rounded-[14px] max-h-[274px] bg-[#5848BC14]/[0.08] relative'>
        <Image className='w-full h-full' src={blueDressGirl} alt={''} />
        <div className='absolute w-full h-full ml-auto top-[7px] right-[131px] -rotate-[27deg]'>
            <div className='ml-auto mr-5 mt-[47px] flex h-[50px] w-[100px] rotate-[12deg] items-center justify-start gap-4 rounded-3xl border-2 border-orange-700 px-8 py-5'>
                <div className='text-[23px] font-bold text-orange-700 uppercase -ml-[15px]'>Nope</div>
            </div>
        </div>
        <div className='absolute top-[205px] -right-[130px] rotate-[27deg] w-full h-full ml-auto'>
            <div className='flex h-[50px] w-[86px] rotate-[-12deg] items-center justify-start gap-4 rounded-3xl border-2 border-green-600 px-8 py-5'>
                <div className='text-[23px] -ml-[14px] font-bold uppercase text-green-600'>like</div>
            </div>
        </div>
        <button className='relative flex gap-[6px] w-[296px] justify-center items-center bg-[#5848BC] px-4 py-[10px] rounded-[12px] text-[#FFFFFF]'>
            <div className='text-[14px] font-bold leading-5'>Explore more</div>
            <Image className='w-[18px] h-[18px]' src={arrowNext} alt={''} />
        </button>
    </div>
  )
}

export default HomePageSlider
