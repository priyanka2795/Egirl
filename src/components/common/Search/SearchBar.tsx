import Image from 'next/image'
import React from 'react'
import searchIcon from '../../../../public/assets/search-alt.png';

const SearchBar = () => {
  return (
    <div className="px-7 py-4 border- border-white/[0.08]">
    <div className='flex w-full gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
       <div className='h-6 w-6'>
         <Image className='h-full w-full' src={searchIcon} alt={''} />
       </div>
       <input
         type='text'
         className='border-none bg-transparent p-0 text-[15px] font-light leading-6 text-[#979797] focus:ring-0 '
       />
     </div>
    </div>
  )
}

export default SearchBar