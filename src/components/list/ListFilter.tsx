import Image from 'next/image'
import React from 'react'
import searchIcon from '../../../public/assets/search-icon.png'
import arrowDownArrowUp from '../../../public/assets/arrow-down-arrow-up.png'
import filterIcon from '../../../public/assets/filter-icons.png'

const ListFilter = () => {
  return (
    <div className='flex items-center gap-[33rem] justify-between'>
            <div className='flex flex-col w-[320px] items-start justify-center gap-[6px] shrink-0 rounded-[12px]'>
                <div className='flex items-start self-stretch gap-2 py-[10px] pl-[14px] pr-[12px] rounded-[12px] bg-white/10'>
                    <Image className='w-[20px] h-[20px]' src={searchIcon} alt={''}/>
                    <div className='text-[#979797] text-sm font-normal'>Search</div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Image className='w-[20px] h-[20px]' src={arrowDownArrowUp} alt={''}/>
                <Image className='w-[20px] h-[20px]' src={filterIcon} alt={''}/>
            </div>
        </div>
  )
}

export default ListFilter
