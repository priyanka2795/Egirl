import React from 'react';

const ImageDimension = () => {
  const imageDimesions = [
    {
      id: 1,
      area: '512 X 512',
      text: 'post'
    },
    {
      id: 2,
      area: '1076 X 200',
      text: 'banner'
    }
  ];

  return (
    <div className='flex flex-col px-5 pb-5 gap-[10px] border-b border-white/[0.08]'>
      <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
        Image Dimensions
      </div>
      <div className='grid grid-cols-2 gap-2'>
        {imageDimesions.map((items) => {
          return (
            <div
              className={`${items.id} rounded-[12px] border border-[#515151] px-3 py-[10px] text-center`}
            >
              <h6 className='text-[14px] font-bold leading-5 text-white'>{items.area}</h6>
              <p className='text-[12px] font-normal leading-4 text-[#979797]'>{items.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageDimension;
