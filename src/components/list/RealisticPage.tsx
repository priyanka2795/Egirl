import React from 'react';
import arrowLeft from '@/assets/arrow-left.webp'
import plusIcon from '@/assets/plus-gray.webp'
import Image from 'next/image';
import ListFilter from './ListFilter';
import SubscriptionOptions from './SubscriptionOptions';

interface RealisticPageProps{
    showProfile: any;
    setShowRealistic: any;
}

const RealisticPage = ({showProfile, setShowRealistic} : RealisticPageProps) => {
  return (
    <div className='flex flex-col gap-[14px] pb-4'>
        <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <Image className='object-contain cursor-pointer' src={arrowLeft} alt={''} onClick={() => {setShowRealistic(false)}} />
                    <div className='flex text-[22px] font-bold leading-8 gap-1'>
                        <p className='text-white'>Realistic</p>
                        <p className='text-[#979797]'>(8)</p>
                    </div>
                </div>
                <button className='px-4 py-[10px] flex justify-center items-center gap-[6px] rounded-[12px] bg-white/[0.08]'>
                    <Image src={plusIcon} alt={''} />
                    <div className='text-[#979797] text-[14px] font-bold leading-5'>Add models</div>
                </button>
        </div>
        <SubscriptionOptions showProfile={showProfile} component={'RealisticPage'} />
    </div>
  )
}

export default RealisticPage
