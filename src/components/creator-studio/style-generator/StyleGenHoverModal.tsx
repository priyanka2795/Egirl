import Image from 'next/image';
import React, { useState } from 'react';
import downArrow from '@/assets/down-arrow-img.webp';

const StyleGenHoverModal = () => {
  return (
    <div className='absolute invisible group-hover:visible group-hover:opacity-100'>
      <div className='w-[169px] top-[657px] right-[11px] flex justify-center items-center px-3 py-[6px] rounded-[6px] bg-[#303030] text-white text-center text-[12px] font-normal leading-4'>
          Add images for style generation
      </div>
      <div className='absolute top-[690px] right-[88px] w-3 h-[6px]'>
          <Image className='w-full h-full' src={downArrow} alt={''} />
      </div>
    </div>
  );
};

export default StyleGenHoverModal;
