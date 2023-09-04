import React, { useState } from 'react';
import grid2 from '../../../../public/assets/grid-horizontal.png';
import arrowUpArrowDown from '../../../../public/assets/arrow-down-arrow-up2.png';
import filter from '../../../../public/assets/filter.png';
import arrowLeft from '../../../../public/assets/arrow-left2.png';
import Image from 'next/image';

const images = [
    {
        image: grid2
    },
    {
        image: arrowUpArrowDown
    },
    {
        image: filter
    },
];

const ViewStylesTab = () => {
  return (
    <div className='flex justify-between pb-5 border-b border-white/[0.08] mt-6'>
        <div className='flex items-center gap-2'>
          <Image className='object-contain' src={arrowLeft} alt={''} />
          <div className='flex gap-1'>
            <div className='text-white text-[18px] font-bold leading-6'>Generated Styles </div>
            <div className='text-[#979797] text-[18px] font-bold leading-6'>(8)</div>
          </div>
        </div>
          
        <div className='flex'>
        {images.map((item) => {
            return(
                <div className='flex'>
                    <div className='p-2'>
                        <Image src={item.image} alt={''} />
                    </div>
                </div>
            );
        })}
        </div>
        
    </div>
  )
}

export default ViewStylesTab
