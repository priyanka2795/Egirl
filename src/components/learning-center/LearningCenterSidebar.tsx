import React, { useState } from 'react';
import Image from 'next/image';
import arrowRight from '../../../public/assets/chevron-right-white.png';
import arrowDown from '../../../public/assets/chevron-down-white.png';

const LearningCenterSidebar = () => {
  const [showSubCategory, setShowSubCategory] = useState(true);
  const handleCategory = () => {
    setShowSubCategory(!showSubCategory);
  };
  return (
    <div className='flex  w-full max-w-[320px] flex-col justify-between overflow-y-auto border-r-[1px] border-white/[0.08] '>
      <div className='max-w-[290px]'>
        <div className=' bg-white/[0.05] px-4 py-2.5 text-[16px] text-white'>
          Welcome to Egirls Book!
        </div>
        <div className='flex items-center justify-between px-4 py-2.5'>
          <span className='text-[16px] text-white'>Category</span>
          <Image src={arrowRight} alt='' />
        </div>
        <div className='flex items-center justify-between px-4 py-2.5'>
          <span className='text-[16px] text-white'>Category</span>
          <Image src={arrowRight} alt='' />
        </div>

        <div className='px-4 py-2.5' onClick={handleCategory}>
          <div className='flex items-center justify-between '>
            <span className='text-[16px] text-white'>Category</span>
            <Image src={showSubCategory ? arrowDown : arrowRight} alt='' />
          </div>
          {showSubCategory && (
            <>
              <div className='px-4 py-2 text-[16px] text-[#979797]'>
                Subcategory
              </div>
              <div className='px-4 py-2 text-[16px] text-[#979797]'>
                Subcategory
              </div>
              <div className='px-4 py-2 text-[16px] text-[#979797]'>
                Subcategory
              </div>
              <div className='px-4 py-2 text-[16px] text-[#979797]'>
                Subcategory
              </div>
              <div className='px-4 py-2 text-[16px] text-[#979797]'>
                Subcategory
              </div>
            </>
          )}
        </div>
        <div className='flex items-center justify-between px-4 py-2.5'>
          <span className='text-[16px] text-white'>Category</span>
          <Image src={arrowRight} alt='' />
        </div>
        <div className='flex items-center justify-between px-4 py-2.5'>
          <span className='text-[16px] text-white'>Category</span>
          <Image src={arrowRight} alt='' />
        </div>
        <div className='flex items-center justify-between px-4 py-2.5'>
          <span className='text-[16px] text-white'>Category</span>
          <Image src={arrowRight} alt='' />
        </div>
        <div className='flex items-center justify-between px-4 py-2.5'>
          <span className='text-[16px] text-white'>Category</span>
          <Image src={arrowRight} alt='' />
        </div>
        <div className='flex items-center justify-between px-4 py-2.5'>
          <span className='text-[16px] text-white'>Category</span>
          <Image src={arrowRight} alt='' />
        </div>
      </div>
    </div>
  );
};

export default LearningCenterSidebar;
