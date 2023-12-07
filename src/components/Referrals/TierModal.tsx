import React, { useState } from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import crossIcon from '@/assets/xmark (1).webp'

const tierInfo = [
    {
        percent: '5%',
        tier: 'Tier 1',
        description: 'Enjoy 5% earnings based on user spending, no referrals required'
    },
    {
        percent: '10%',
        tier: 'Tier 2',
        description: 'Level up to 10% earnings by referring 100 people'
    },
    {
        percent: '15%',
        tier: 'Tier 3',
        description: 'Reach the pinnacle of 15% earnings by referring 1000 people'
    }
];

interface TierModalProp{
    closeModalState: React.Dispatch<React.SetStateAction<boolean>>
}
const TierModal = ({closeModalState}: TierModalProp) => {

  return (
    <div>
        <Modal
            open={true}
            modalClassName='flex flex-col gap-6 w-full rounded-2xl h-max bg-[#121212] max-w-[400px] pb-2'
            closeModal={() => closeModalState(false)}
            modalOverlayStyle='!bg-black/80'
        >
            <div className='flex flex-col w-full'>
            <div className='px-6 flex py-6 gap-2 justify-between border-b border-white/[0.08]'>
            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Tier info</div>
            <div className='w-6 h-6' onClick={() => closeModalState(false)} >
                <Image className='w-full h-full' src={crossIcon} alt={''} />
            </div>
        </div>

        <div className='flex flex-col gap-6 px-6 mt-6 '>
        {tierInfo.map((item) => {
            return(
                <div className={`flex flex-col gap-2 pb-6 ${item.tier !== 'Tier 3'
                    ? ' border-b border-[#272727] '
                    : ''
                }`}>
                    <div className='flex gap-3'>
                        <div className='text-[#FFFFFF] text-[22px] font-bold leading-8'>{item.percent}</div>
                        <div className='flex px-4 py-2 rounded-[8px] bg-[#5848BC]/[0.32] text-[#CEC7EA] text-[13px] font-semibold leading-[18px]'>{item.tier}</div>
                    </div>
                    <div className='text-[#979797] text-[14px] font-normal leading-[18px]'>{item.description}</div>
                </div>
            );
        })}
        </div>
            </div>
        </Modal>
    </div>
    
  )
}

export default TierModal;
