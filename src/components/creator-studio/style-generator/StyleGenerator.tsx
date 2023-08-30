import React from 'react';

const StyleGenerator = () => {
  return (
    <div className='rounded-[14px] bg-white/[0.05] p-6'>
      <h3 className='text-bold mb-[6] text-[22px]'>Style Generator</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className='flex flex-col'>
          <h6 className='text-[13px] text-[#979797]'>Name</h6>
          <input
            type='text'
            name='name'
            placeholder='Enter Name'
            className='rounded-[14px] border-none bg-white/[0.08] text-white'
          />
        </div>

        <div className='flex-col flex'>
          <h6 className='text-[13px] text-[#979797]'>Category</h6>
          <div className='px-4 py-[13px] text-[15px] bg-white/[0.08] rounded-[14px]'>Choose category</div>
          
        </div>
      </div>
    </div>
  );
};

export default StyleGenerator;
