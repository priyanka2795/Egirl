import Image from 'next/image';
import React from 'react';
import model2 from '@/assets/golden-shoulder-girl-2.webp';
import micaChan from '@/assets/Mica-chan-2.webp';
// import cardBlueImg from '@/assets/latest-tans-card-img.png';


const collectionFrame = [
    {
      image: model2,
      name: 'Sarah Scarlet',
      amount: '$19.99',
      date: '05/23/23',
      status: 'Completed'
    },
    {
      image: micaChan,
      name: 'Mica-chan',
      amount: '$19.99',
      date: '05/23/23',
      status: 'Failed'
    }
];

const LatestTransaction = () => {
  return (
    <div className='flex flex-col gap-4 px-6 pt-4 pb-6'>
        {collectionFrame.map((item) => {
          return (
            <div className='relative flex flex-col items-start self-stretch overflow-hidden group rounded-2xl bg-white/10'>
              <div className='relative flex h-full !max-h-[200px] w-full justify-center self-stretch overflow-hidden'>
                <Image className='object-cover' src={item.image} alt={''} />
              </div>
              <div className='flex flex-col w-full gap-3 px-4 pt-4 pb-6 cursor-pointer'>
                <div className='flex flex-col gap-[1px]'>
                    <div className='text-[12px] font-normal leading-4 text-[#979797]'>
                      Subscription{' '}
                    </div>
                    <div className='text-[15px] font-semibold leading-5 text-[#FFFFFF]'>
                      {item.name}
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex w-1/2 flex-col gap-[2px]'>
                      <div className='text-[12px] font-normal leading-4 text-[#979797]'>
                        Amount:
                      </div>
                      <div className='text-[15px] font-semibold leading-5 text-[#FFFFFF]'>
                        {item.amount}
                      </div>
                    </div>
                    <div className='flex w-1/2 flex-col gap-[2px]'>
                      <div className='text-[12px] font-normal leading-4 text-[#979797]'>
                        Date
                      </div>
                      <div className='text-[15px] font-semibold leading-5 text-[#FFFFFF]'>
                        {item.date}
                      </div>
                    </div>
                </div>
              </div>
              <div className={`rounded-tl-0 rounded-tr-0 rounded-bl-0 absolute left-0 top-0 gap-2 rounded-br-[16px] bg-[#070707] px-3 py-2 text-[14px] font-semibold leading-[18px] ${item.status === 'Failed' ? 'text-[#FF5336]' : 'text-[#5AD02E]'}`}>
                {item.status}
              </div>
            </div>
          );
        })}
    </div>
  )
}

export default LatestTransaction;
