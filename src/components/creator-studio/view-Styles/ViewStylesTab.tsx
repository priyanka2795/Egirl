import React, { useState } from 'react';
import grid2 from '../../../../public/assets/grid-horizontal.png';
import arrowUpArrowDown from '../../../../public/assets/arrow-down-arrow-up2.png';
import filter from '../../../../public/assets/filter.png';
import arrowLeft from '../../../../public/assets/arrow-left2.png';
import search from '../../../../public/assets/search-alt (2).png';
import Image from 'next/image';
import Sort from './Sort';

interface ViewStylesTabProps {
  component: string;
  setGeneratedStyle?: any;
  generatedStyle? : boolean;
  tabContent: any;
  exploreSelectedTab: any;
  setExploreSelected? : any;
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

const ViewStylesTab = ({component, setGeneratedStyle, generatedStyle, tabContent, exploreSelectedTab, setExploreSelected} : ViewStylesTabProps) => {
    const [activeIndex, setActiveIndex] = useState();
    const [showSort, setShowSort] = useState(false);
    
  return (
    <>
    <div className='flex justify-between mt-6'>
      {component === 'GeneratedStyle' ? 
       <div className='flex items-center gap-2'>
       <Image className='object-contain' onClick={() => {setGeneratedStyle(false)}} src={arrowLeft} alt={''} />
       <div className='flex gap-1'>
         <div className='text-white text-[18px] font-bold leading-6'>Generated Styles </div>
         <div className='text-[#979797] text-[18px] font-bold leading-6'>(8)</div>
       </div>
       </div> :
       component === 'AddedStyle' ? 
       <div className='flex items-center gap-2'>
       <Image className='object-contain' src={arrowLeft} alt={''} />
       <div className='flex gap-1'>
         <div className='text-white text-[18px] font-bold leading-6'>Added Styles </div>
         <div className='text-[#979797] text-[18px] font-bold leading-6'>(128)</div>
       </div>
       </div> :
       component === 'PostedStyle' ?
       <div className='flex items-center gap-2'>
       <Image className='object-contain' src={arrowLeft} alt={''} />
       <div className='flex gap-1'>
         <div className='text-white text-[18px] font-bold leading-6'>Posted Styles </div>
         <div className='text-[#979797] text-[18px] font-bold leading-6'>(8)</div>
       </div>
       </div> : 
       <div className='flex items-start justify-start gap-3'>
       {tabContent.map((items: any, index: any) => {
         return (
           <div
             key={index}
             onClick={() => {setExploreSelected(items)}}
             className={`flex cursor-pointer gap-2.5 rounded-xl px-4 py-2 text-[15px] font-bold ${exploreSelectedTab === items
               ? 'bg-white bg-opacity-20 text-white'
               : 'text-neutral-400'
               }`}
           >
             {items}
           </div>
         );
       })}
       </div>
      }
       
        <div className='flex'>
        {images.map((item, index) => {
            return(
                <div className='flex'>
                  {index === 2 ? 
                  <>
                  <div className={`px-3 py-2 justify-center items-center rounded-[100px] ${activeIndex === index ? 'bg-white/[0.05]' : ''}`} onClick={() => {setActiveIndex(index), setShowSort(!showSort)}}>
                  <Image className='mt-[3px]' src={item.image} alt={''} />
                  </div>
                  {
                    showSort && <Sort />
                  }
                  </> : 
                  <div className={`px-3 py-2 justify-center items-center rounded-[100px] ${activeIndex === index ? 'bg-white/[0.05]' : ''}`} onClick={() => setActiveIndex(index)}>
                  <Image className='mt-[3px]' src={item.image} alt={''} />
                  </div>
                  }
                </div>
            );
        })}
        </div>
        
    </div>
    </>
  )
}

export default ViewStylesTab
