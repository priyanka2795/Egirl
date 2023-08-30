import React, { useState } from 'react';
import grid from '../../../../public/assets/grid-horizontal.png';
import arrowUpArrowDown from '../../../../public/assets/arrow-down-arrow-up2.png';
import filter from '../../../../public/assets/filter.png';
import Image from 'next/image';

const images = [
    {
        image: grid
    },
    {
        image: arrowUpArrowDown
    },
    {
        image: filter
    },
];

const ViewImagesTab = () => {
    const tabContent = ['All images', 'Posted', 'Not posted', 'Albums'];
    const [exploreSelectedTab, setExploreSelected] = useState('All images');

    const handleExploreSelected = (e: any) => {
        setExploreSelected(e.target.innerText);
        // setExploreSelectedTab(e.target.innerText);
      };
  return (
    <div className='flex justify-between pb-5 border-b border-white/[0.08]'>
        <div className='flex items-start justify-start gap-3'>
            {tabContent.map((items, index) => {
              return (
                <div
                  key={index}
                  onClick={(e) => handleExploreSelected(e)}
                  className={`flex cursor-pointer gap-2.5 rounded-xl px-4 py-2 text-[15px] font-bold ${
                    exploreSelectedTab === items
                      ? ' bg-white bg-opacity-20 text-white  '
                      : 'text-neutral-400'
                  }`}
                >
                  {items}
                </div>
              );
            })}
          </div>
          
        <div className='flex'>
        {images.map((item) => {
            return(
                <div className='flex'>
                    <div className='p-2'>
                        <Image src={item.image} alt={''} />
                    </div>
                </div>
            );
        })}
        </div>
        
    </div>
  )
}

export default ViewImagesTab;
