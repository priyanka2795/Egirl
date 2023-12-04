import Image from 'next/image'
import React from 'react'
import star from '@/assets/star-blank.webp'
import arrowDown from '@/assets/arrow-down.webp'
import filterIcon from '@/assets/filter.webp'
import Search from '@/assets/search-alt (1).webp';

const ListFilter = () => {
  return (
    <div className='flex items-center justify-between w-full'>
        <div className='flex w-[320px] gap-[6px] px-3 py-[10px] items-center rounded-[10px] bg-white/[0.05]'>
            <Image className='w-[20px] h-[20px]' src={Search} alt={''}/>
            <input type='text' placeholder='Search' className='flex h-0 bg-transparent border-none focus:ring-0 text-[#979797] text-[14px] font-normal leading-5 placeholder:text-[#979797] pl-0' />
        </div>
        <div className='flex items-center gap-2'>
            <Image className='w-[20px] h-[20px]' src={filterIcon} alt={''}/>
            <div className='flex gap-2 border-l border-white/[0.08] pl-2'>
                <div className='text-white text-[15px] font-normal leading-5'>Newest</div>
                <Image src={arrowDown} alt={''} />
            </div>
        </div>
    </div>
  )
}

export default ListFilter
