import Image from 'next/image';
import React, { useState } from 'react';
import card from '@/assets/credit-card-plus.webp';

interface InitialPageProps {
    setAddedCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const InitialPage = ( {setAddedCard} : InitialPageProps ) => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-6 px-6 py-0'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='flex w-max rounded-full bg-white/[0.05] p-5'>
            <Image src={card} alt={''} />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-center text-[22px] font-bold leading-8 text-[#515151]'>
              You don’t have any cards
            </div>
            <div className='text-center text-[14px] font-semibold leading-6 text-[#515151]'>
              Only one card may be added currently
            </div>
          </div>
        </div>
        <button className='items-center justify-center rounded-[14px] bg-white/[0.08] px-5 py-[13px] text-[16px] font-bold leading-[22px] text-[#FFFFFF]' onClick={() => {setAddedCard(true)}}>
          Add card
        </button>
      </div>
  );
};

export default InitialPage;
