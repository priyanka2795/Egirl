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
    <div className='px-5 pb-5'>
      <h6 className='text-[13px] font-semibold text-[#979797]'>
        Image Dimensions
      </h6>
      <div className='mt-2 grid grid-cols-2 gap-2 border-b border-white/[0.08] pb-5'>
        {imageDimesions.map((items) => {
          return (
            <div
              className={`${items.id} rounded-[12px] border border-[#515151] px-3 py-[10px] text-center`}
            >
              <h6 className='text-sm font-bold'>{items.area}</h6>
              <p className='text-xs text-[#979797]'>{items.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageDimension;
