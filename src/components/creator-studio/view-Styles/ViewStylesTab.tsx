import React, { useState } from 'react';
import grid2 from '../../../../public/assets/grid-horizontal.png';
import arrowUpArrowDown from '../../../../public/assets/arrow-down-arrow-up2.png';
import filter from '../../../../public/assets/filter.png';
import arrowLeft from '../../../../public/assets/arrow-left2.png';
import search from '../../../../public/assets/search-alt (2).png';
import Image from 'next/image';

interface ViewStylesTabProps {
  component: string;
  setGeneratedStyle?: any;
  generatedStyle? : boolean;
}

const images = [
    {
        image: search
    },
    {
        image: grid2
    },
    {
        image: arrowUpArrowDown
    },
    {
        image: filter
    },
];

const ViewStylesTab = ({component, setGeneratedStyle, generatedStyle} : ViewStylesTabProps) => {
    const tabContent = ['Your Styles', 'Favorite Styles', 'Platform Styles'];
    const [exploreSelectedTab, setExploreSelected] = useState('Your Styles');

    const handleExploreSelected = (e: any) => {
        setExploreSelected(e.target.innerText);
    };
    
  return (
    <>
    <div className='flex justify-between pb-5 border-b border-white/[0.08] mt-6'>
      {component === 'mainPage' ? 
       <div className='flex items-start justify-start gap-3'>
       {tabContent.map((items: any, index: any) => {
         return (
           <div
             key={index}
             onClick={(e) => handleExploreSelected(e)}
             className={`flex cursor-pointer gap-2.5 rounded-xl px-4 py-2 text-[15px] font-bold ${exploreSelectedTab === items
               ? ' bg-white bg-opacity-20 text-white  '
               : 'text-neutral-400'
               }`}
           >
             {items}
           </div>
         );
       })}
       </div> :
       <div className='flex items-center gap-2'>
          <Image className='object-contain' onClick={() => {setGeneratedStyle(false)}} src={arrowLeft} alt={''} />
          <div className='flex gap-1'>
            <div className='text-white text-[18px] font-bold leading-6'>Generated Styles </div>
            <div className='text-[#979797] text-[18px] font-bold leading-6'>(8)</div>
          </div>
        </div>
      }
       
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
    </>
  )
}

export default ViewStylesTab
