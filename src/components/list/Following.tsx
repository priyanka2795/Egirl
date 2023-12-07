import React from 'react';
import ListFilter from './ListFilter';
import heartIcon from '@/assets/heart-with-plus.png';
import Image from 'next/image';

interface FollowingProps {
  icon: any;
}

const Following = ({ icon }: FollowingProps) => {
  return (
    <div className='flex flex-col items-start gap-[14px] self-stretch'>
      <ListFilter />
      <div className='flex h-[390px] w-[308px] cursor-pointer flex-col items-center justify-center gap-5 rounded-[16px] border border-white/[0.08] bg-[#121212] px-6 py-0'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <div className='w-max rounded-full bg-white/[0.05] p-5'>
            <div className='h-6 w-6'>
              <Image className='h-full w-full' src={icon} alt={''} />
            </div>
          </div>
          <div className='text-center text-[14px] font-semibold leading-[18px] text-[#FFFFFF]'>
            Check out explore tab to see more
          </div>
        </div>
        <button className='flex items-center justify-center rounded-[10px] bg-white/[0.08] px-3 py-[7px] text-[12px] font-bold leading-[18px] text-[#FFFFFF]'>
          Start explore
        </button>
      </div>
    </div>
  );
};

export default Following;
