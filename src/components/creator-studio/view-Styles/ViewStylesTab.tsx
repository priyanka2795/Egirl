import React, { useState } from 'react';
import grid2 from '../../../../public/assets/grid-horizontal.png';
import arrowUpArrowDown from '../../../../public/assets/arrow-down-arrow-up2.png';
import filter from '../../../../public/assets/filter.png';
import arrowLeft from '../../../../public/assets/arrow-left2.png';
import search from '../../../../public/assets/search-alt (2).png';
import Image from 'next/image';
import Sort from './Sort';
import crossIcon from '../../../../public/assets/xmark (1).png';

interface ViewStylesTabProps {
  component?: string;
  setGeneratedStyle?: any;
  setAddedStyle?: any;
  setPostedStyle?: any;
  tabContent?: any;
  exploreSelectedTab?: any;
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

const ViewStylesTab = ({component, setGeneratedStyle, setAddedStyle, setPostedStyle, tabContent, exploreSelectedTab, setExploreSelected} : ViewStylesTabProps) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [showSort, setShowSort] = useState(false);
    const [isActive, setActive] = useState(false);
    
    const handleActionButtons = (index:any) => {
      setActiveIndex(index);
      if(index === 0) {
        setActive(!isActive);
      }
      else if(index === 2) {
        setShowSort(!showSort);
      }
    }
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
       <Image className='object-contain' onClick={() => {setAddedStyle(false)}} src={arrowLeft} alt={''} />
       <div className='flex gap-1'>
         <div className='text-white text-[18px] font-bold leading-6'>Added Styles </div>
         <div className='text-[#979797] text-[18px] font-bold leading-6'>(128)</div>
       </div>
       </div> :
       component === 'PostedStyle' ?
       <div className='flex items-center gap-2'>
       <Image className='object-contain' onClick={() => {setPostedStyle(false)}} src={arrowLeft} alt={''} />
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
                <div className={`relative flex ${isActive ? "w-[360px]" : ''}`}>
                  <div className={`flex py-2 px-[10px] justify-center items-center rounded-[100px] ${activeIndex === index ? 'bg-white/[0.05]' : ''}`} onClick={() => handleActionButtons(index)}>
                    <Image className='mt-[3px]' src={item.image} alt={''} />
                  </div>
                  {index === 0 && isActive && 
                  <div className='absolute right-2 top-2' onClick={() => setActive(!isActive)}>
                    <input type="text" className={`border border-[#FFFFFF52] bg-transparent rounded-[14px] h-10 px-4 placeholder:text-white active:border-[#FFFFFF52] focus:border-[#FFFFFF52] focus:ring-transparent pl-10 text-[14px] w-full ${isActive ? "border" : 'border-none'}`} placeholder='Search' />
                    <Image className='w-full h-full' src={crossIcon} alt={''} />
                  </div>
                  }
                  
                  {
                    index === 2 && showSort && <Sort />
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
