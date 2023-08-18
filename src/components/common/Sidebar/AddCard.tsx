import Image from 'next/image';
import React, { useState } from 'react';
import card from '../../../../public/assets/credit-card-plus.png'


interface AddCardProps{
    seletedAddCard?:string
}

const AddCardSidebar = ({seletedAddCard}:AddCardProps) => {
  const tab = ['Add card', 'Latest transactions'];
  const [activeTab, setActiveTab] = useState('Add Card');
  console.log(seletedAddCard,'activeItem');

  return (
   <div className="z-10 top-4 left-4 bg-[#1A1A1A] absolute w-[364px] h-[804px] flex flex-col rounded-[14px]">
    <div className='flex pl-6 pr-4 pt-4 pb-3 border-b border-white/[0.08]'>
      {tab.map((item) => {
        return(
          <div className={`cursor-pointer px-4 py-2 rounded-[12px] justify-center items-center text-[15px] font-bold leading-5 ${activeTab === item ? 'bg-white/[0.16] text-[#FFFFFF]' : 'text-[#979797]'}`} onClick={() => {setActiveTab(item)}}>{item}</div>
        );
      })}
    </div>
    <div className='flex flex-col items-center justify-center h-full gap-6 px-6 py-0'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='flex p-5 rounded-full bg-white/[0.05] w-max'>
          <Image src={card} alt={''} />
        </div>
        <div className='flex flex-col gap-1'>
          <div className='text-center text-[#515151] text-[22px] font-bold leading-8'>You don’t have any cards</div>
          <div className='text-center text-[#515151] text-[14px] font-semibold leading-6'>Only one card may be added currently</div>
        </div>
      </div>
      <button className='px-5 py-[13px] justify-center items-center rounded-[14px] bg-white/[0.08] text-[#FFFFFF] text-[16px] font-bold leading-[22px]'>Add card</button>
    </div>
   </div>
  )
}

export default AddCardSidebar