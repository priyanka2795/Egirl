import React from 'react';

const LearningCenterFooter = () => {
  return (
    <div className=' z-[50] w-full border-t-[1px] border-white/[0.16] bg-[#070707] px-6 pb-3 pt-5'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-6'>
          <div className='text-[15px] text-white'>Privacy Policy</div>
          <div className='text-[15px] text-white'>Terms of Service</div>
        </div>
        <div className='text-[15px] text-white'>@ 2023 Creator Studio</div>
      </div>
    </div>
  );
};

export default LearningCenterFooter;
