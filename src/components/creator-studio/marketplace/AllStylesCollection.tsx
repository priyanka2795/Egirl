import React from 'react';
import Image from 'next/image';
import arrowDown from '../../../../public/assets/arrow-down.png';
import MarketPlaceCards from './MarketPlaceCards';
const AllStylesCollection = () => {
  return (
    <>
      <div className='mb-3 mt-5 flex justify-between'>
        <div className='text-[18px] font-bold text-[#FFF]'>All Styles</div>
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex gap-2 pl-2'>
            <p>Newest</p>
            <Image src={arrowDown} alt='' className='object-cover' />
          </div>
          <div className='flex gap-2 border-l border-white/10 pl-2'>
            <p>Month</p>
            <Image src={arrowDown} alt='' className='object-cover' />
          </div>
        </div>
      </div>
      <MarketPlaceCards />
    </>
  );
};

export default AllStylesCollection;
