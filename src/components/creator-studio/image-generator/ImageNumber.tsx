import React from 'react';

const ImageNumber = () => {
  const numberArray = ['1', '2', '3', '4', '5', '6', '7', '8'];
  return (
    <div className='px-5 pt-5 pb-6'>
      <h6 className='text-[13px] font-semibold text-[#979797]'>
        Number of Images
      </h6>
      <div className='grid grid-cols-4 gap-2 mt-2'>
        {numberArray.map((items, index) => {
          return (
            <div
              key={index}
              className='rounded-[16px] border border-white/[0.32] px-[18px] py-3 text-white text-[18px] font-bold leading-6'
            >
              {items}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageNumber;
