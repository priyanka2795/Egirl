import React from 'react';
import Cross from '../../../../public/assets/svgImages/close-icon.svg';
import Image from 'next/image';
import SearchIcon from '../../../../public/assets/search-alt.png';

const CharacterAdd = () => {
  return (
    <div className='inline-flex flex-col items-start rounded-[20px] bg-[1A1A1A] '>
      
      {/* input , buttons */}
      <div className='flex flex-col items-start gap-8 p-6'>
        {/* name */}
        <div className='w-[420px] gap-1.5 flex flex-col'>
          <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
            Name
          </div>
          {/* <div className='items-center gap-2.5 py-3 px-4 self-stretch rounded-[14px] bg-white/[0.05]'>
                        <input className='text-[#979797] bg-white/[0.05] text-[15px] font-normal leading-6' type='text'>
                        
                        </input>
                    </div> */}
          <div className='flex w-full gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
            <input
              placeholder='ex. Mika-chan'
              type='text'
              className='border-none bg-transparent p-0 text-[15px] font-normal leading-6 text-[#979797] focus:ring-0 '
            />
          </div>
        </div>

         {/* username */}
         <div className='w-[420px] gap-1.5 flex flex-col'>
          <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
            Username
          </div>
          
          <div className='flex w-full gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
            <input
              placeholder='ex. Mika-chan'
              type='text'
              className='border-none bg-transparent p-0 text-[15px] font-normal leading-6 text-[#979797] focus:ring-0 '
            />
          </div>
        </div>

        {/* buttons */}
        <div className='flex items-start self-stretch gap-3'>
                        <button className='py-[13px] px-5 items-center gap-2 rounded-[14px] border border-white/[0.32] w-[50%] font-bold leading-[22px] text-base'>Cancel</button>
                        <button className='py-[13px] px-5 items-center gap-2 rounded-[14px]  w-[50%] bg-[#5848BC] font-bold leading-[22px] text-base'>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CharacterAdd;
