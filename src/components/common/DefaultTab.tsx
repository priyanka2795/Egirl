import Image from 'next/image';
import React, { useState } from 'react';
import deleteIcon from '../../../public/assets/delete-icon.png';
import ClearBookMarkModal from '@components/list/ClearBookMarkModal';

interface DefaultTabProp {
  activeListTab: string;
  setActiveTab: any;
  tabContentArray: string[];
}
const DefaultTab = ({
  activeListTab,
  setActiveTab,
  tabContentArray
}: DefaultTabProp) => {
  const [exploreSelectedTab, setExploreSelected] = useState(activeListTab);
  const [deleteBookmarkState , setDeleteBookmarkState] = useState(false)

  const handleExploreSelected = (e: any) => {
    setExploreSelected(e.target.innerText);
    setActiveTab(e.target.innerText);
  };
  return (
    <div className='border-b border-white border-opacity-10 flex justify-between items-center'>
      <div className='flex justify-between px-8 py-4'>
        <div className='flex items-start justify-start gap-3'>
          {tabContentArray.map((items: string, index: number) => {
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
      </div>
      {activeListTab === 'Bookmarks' && 
       <button className='flex gap-[6px] rounded-[10px] bg-white/[0.08] px-3 py-[7px] h-max' onClick={() => {setDeleteBookmarkState(true)}}>
       <Image className='h-[16px] w-[16px]' src={deleteIcon} alt={''} />
       <div className='text-xs font-bold text-[#979797]'>Clear All</div>
     </button>
      }
     {
      deleteBookmarkState && <ClearBookMarkModal closeModalItem={setDeleteBookmarkState}/> 
     }
    </div>
  );
};

export default DefaultTab;
