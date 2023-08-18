import Image from 'next/image';
import React, { useState } from 'react';
import InitialPage from './InitialPage';
import AddedCard from './AddedCard';
import LatestTransaction from './LatestTransaction';


interface AddCardProps{
    seletedAddCard?:string
}

const AddCardSidebar = ({seletedAddCard}:AddCardProps) => {
  const tab = ['Add card', 'Latest transactions'];
  const [activeTab, setActiveTab] = useState('Add card');
  const [addedCard, setAddedCard] = useState(false);

  return (
   <div className={`fixed z-10 top-4 left-4 bg-[#1A1A1A] absolute 
   ${activeTab === 'Latest transactions' ? 'h-[804px]' : addedCard ? 'h-[804px]' : 'h-[100vh]'} w-[364px] flex flex-col rounded-[14px]`}>
    <div className='flex pl-6 pr-4 pt-4 pb-3 border-b border-white/[0.08]'>
      {tab.map((item) => {
        return(
          <div className={`cursor-pointer px-4 py-2 rounded-[12px] justify-center items-center text-[15px] font-bold leading-5 ${activeTab === item ? 'bg-white/[0.16] text-[#FFFFFF]' : 'text-[#979797]'}`} onClick={() => {setActiveTab(item)}}>{item}</div>
        );
      })}
    </div>
    {activeTab === 'Add card' ? <>{addedCard ? <AddedCard setAddedCard={setAddedCard}/> : <InitialPage setAddedCard={setAddedCard}/>}</> : <LatestTransaction />}
    
    
   </div>
  )
}

export default AddCardSidebar