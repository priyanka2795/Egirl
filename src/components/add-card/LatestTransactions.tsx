import React, { useState } from 'react'
import Image from 'next/image';
import model2 from '@/assets/gallery-tab-img.webp';
import micaChan from '@/assets/mikaChan.webp';
import cardBlueImg from '@/assets/latest-tans-card-img.webp';


const collectionFrame = [
    {
        image: model2,
        name: 'Sarah Scarlet',
        amount: '$20',
        date: '29.05.23',
        status: 'Completed'
    },
    {
        image: cardBlueImg,
        name: 'Egirls+',
        amount: '$15',
        date: '29.05.23',
        status: 'Completed'
    },
    {
        image: micaChan,
        name: 'Mica-chan',
        amount: '$20',
        date: '29.05.23',
        status: 'Completed'
    },
];

const LatestTransactions = () => {
 
  return (
    <div className='h-[800px] p-8'>
        <div className='grid grid-cols-3 gap-3'>
            {collectionFrame.map((item) => {
                return(
                    <div className='relative flex flex-col items-start self-stretch overflow-hidden group rounded-2xl bg-white/10'>
                <div className='flex h-full max-h-[180px] w-full justify-center self-stretch overflow-hidden relative !max-h-[230px]'>
                    <Image className='object-cover' src={item.image} alt={''} />
                </div>
                <div className='flex items-start w-full cursor-pointer'>     
                    <div className='flex flex-col w-full gap-3 px-4 pt-4 pb-6'>
                        <div className='flex flex-col gap-[1px]'>
                            <div className='text-[#979797] text-[12px] font-normal leading-4'>Subscription </div>
                            <div className='text-[#FFFFFF] text-[15px] font-semibold leading-5'>{item.name}</div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-[2px] w-1/2'>
                                <div className='text-[#979797] text-[12px] font-normal leading-4'>Amount:</div>
                                <div className='text-[#FFFFFF] text-[15px] font-semibold leading-5'>{item.amount}</div>
                            </div>
                            <div className='flex flex-col gap-[2px] w-1/2'>
                                <div className='text-[#979797] text-[12px] font-normal leading-4'>Date</div>
                                <div className='text-[#FFFFFF] text-[15px] font-semibold leading-5'>{item.date}</div>
                            </div>
                        </div>
                    </div>       
                </div>
                <div className='absolute gap-2 px-3 py-2 top-0 left-0 rounded-br-[16px] rounded-tl-0 rounded-tr-0 rounded-bl-0 bg-[#070707] text-[#515151] text-[14px] font-semibold leading-[18px]'>{item.status}</div>
            </div>
                );
            })}
        </div>
    </div>
  )
}

export default LatestTransactions;
