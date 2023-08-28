import React from 'react'
import GiftsTab from './GiftsTab';

const GiftsMainPage = () => {
  return (
    <div className='flex flex-col gap-5 p-6 rounded-[14px] bg-[#121212] mt-6'>
        <GiftsTab />
        <div></div>
    </div>
  )
}

export default GiftsMainPage;
