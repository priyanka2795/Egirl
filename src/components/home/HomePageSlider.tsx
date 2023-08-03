import React from 'react'
import Image from 'next/image'
import TinderNopeBtn from '@components/explore/TinderNopeBtn';
import TinderLikeBtn from '@components/explore/TinderLikeBtn';
import blueDressGirl from '../../../public/assets/blue-dress-girl.png';

const HomePageSlider = () => {
  return (
    <div className='relative'>
        <Image className='w-full max-h-[100px] h-full' src={blueDressGirl} alt={''} />
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
        <button className='relative w-full justify-center items-center bg-[#5848BC] px-6 py-3 -top-[150px] rounded-[16px] text-[#FFFFFF] text-[18px] font-bold leading-6'>Explore more</button>
    </div>
  )
}

export default HomePageSlider
