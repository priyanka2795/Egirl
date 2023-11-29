import Image from 'next/image';
import React, { useState } from 'react';
import InitialPage from './InitialPage';
import AddedCard from './AddedCard';
import LatestTransaction from './LatestTransaction';

interface AddCardProps {
  seletedAddCard?: string;
  SetseletedAddCard?:any;
}

const AddCardSidebar = ({ seletedAddCard,SetseletedAddCard }: AddCardProps) => {
  const tab = ['Add card', 'Latest transactions'];
  const [activeTab, setActiveTab] = useState('Add card');
  const [addedCard, setAddedCard] = useState(false);

  return (

    <div className={`transitions z-[80] ${seletedAddCard === 'Add Card' ? 'fixed !bg-black/80  w-full h-full': 'absolute w-0'} flex `} >
      <div
      className={`transitions mt-4 inline-flex h-[calc(100vh-24px)] w-[504px] flex-col items-start justify-start rounded-[14px] bg-zinc-900 pb-6 ${
        seletedAddCard === 'Add Card' 
          ? 'ml-4'
          : 'invisible -ml-[280px] w-0 '
      }`}
    >
    <div
      className={`sticky top-0 w-full`}
    >
      <div className='flex border-b border-white/[0.08] pb-3 pl-6 pr-4 pt-4'>
        {tab.map((item) => {
          return (
            <div
              className={`cursor-pointer items-center justify-center rounded-[12px] px-4 py-2 text-[15px] leading-5 ${
                activeTab === item
                  ? 'bg-white/[0.16] text-[#FFFFFF]'
                  : 'text-[#979797]'
              }`}
              onClick={() => {
                setActiveTab(item);
              }}
              style={ activeTab === item ? {fontWeight: '700'} : {fontWeight: '500'}}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className='h-[85vh] overflow-y-auto '>
        {activeTab === 'Add card' ? (
          <>
            {addedCard ? (
              <AddedCard setAddedCard={setAddedCard} />
            ) : (
              <InitialPage setAddedCard={setAddedCard} />
            )}
          </>
        ) : (
          <LatestTransaction />
        )}
      </div>
    </div>
    </div>
    <div className='w-full h-full' onClick={()=>SetseletedAddCard('')}>

    </div>
    </div>
  );
};

export default AddCardSidebar;
