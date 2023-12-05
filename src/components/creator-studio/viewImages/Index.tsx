import React, { useState } from 'react';
import ViewImagesMainPage from './ViewImagesMainPage';
import Image from 'next/image';
import plusIcon from '@/assets/plus-large.webp';
import EditImageGeneration from '../image-generator/editImagegeneration';

const ViewImagesIndex = () => {
  
  return (
    <>
      <div className='flex justify-between'>
        <div className='text-[22px] font-bold leading-8 text-[#FFFFFF]'>
          View Images
        </div>
        <button className='flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#5848BC] px-4 py-[10px]'>
          <Image className='h-[18px] w-[18px]' src={plusIcon} alt={''} />
          Create
        </button>
      </div>

      <ViewImagesMainPage />
    </>
  );
};

export default ViewImagesIndex;
