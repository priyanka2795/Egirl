import React from 'react'
import ListFilter from './ListFilter'
import heartIcon from '../../../public/assets/heart-with-plus.png';
import Image from 'next/image';

interface FollowingProps {
    icon: any;
}

const Following = ({icon} : FollowingProps) => {
  return (
    <div className='flex flex-col items-start gap-[14px] self-stretch'>
        <ListFilter />
        <div className='flex flex-col gap-5 w-[308px] h-[390px] px-6 py-0 cursor-pointer rounded-[16px] justify-center items-center border border-white/[0.08] bg-[#121212]'>
            <div className='flex flex-col items-center justify-center gap-3'>
                <div className='p-5 rounded-full bg-white/[0.05] w-max'>
                    <div className='w-6 h-6'>
                        <Image className='w-full h-full' src={icon} alt={''} />
                    </div>
                </div>
                <div className='text-center text-[#FFFFFF] text-[14px] font-semibold leading-[18px]'>Check out explore tab to see more</div>
            </div>
            <button className='flex px-3 py-[7px] justify-center items-center rounded-[10px] bg-white/[0.08] text-[#FFFFFF] text-[12px] font-bold leading-[18px]'>Start explore</button>
        </div>
    </div>
  )
}

export default Following
