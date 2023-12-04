import Image from 'next/image';
import React from 'react';
import downArrow from '@/assets/down-arrow-img.webp'

const PersonalityHoverModal = () => {
  return (
    <>
    <div className='w-[238px] top-[125px] left-[0px] absolute px-3 py-[6px] justify-center items-center rounded-[6px] bg-[#303030]'>
      <div className='text-center text-[#FFFFFF] text-[12px] font-normal leading-4'>Likes are an essential aspect of your AI character's identity within the social media app.</div>
    </div>
    <div className='absolute top-[174px] left-[76px] w-3 h-[6px]'>
        <Image className='w-full h-full' src={downArrow} alt={''} />
    </div>
    </>
  )
}

export default PersonalityHoverModal;
