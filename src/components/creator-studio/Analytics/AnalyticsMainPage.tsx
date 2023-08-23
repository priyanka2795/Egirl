import Image from 'next/image';
import React from 'react'
import heartWithPlus from '../../../../public/assets/heart-with-plus2.png';
import arrowRight from '../../../../public/assets/arrow-narrow-right (1).png';
import userCheck from '../../../../public/assets/user-check.png';
import heart from '../../../../public/assets/heart.png';
import wallet from '../../../../public/assets/wallet.png';
import arrowDown from '../../../../public/assets/chevron-down.png';

const accountAnalytics = [
    {
        icon: heartWithPlus,
        name: 'Subscribers',
        status: '0 followers this month'
    },
    {
        icon: userCheck,
        name: 'Followers',
        status: '0 followers this month'
    },
    {
        icon: heart,
        name: 'Likes',
        status: '0 likes this month'
    }
];

const AnalyticsMainPage = () => {
  return (
    <div className='flex flex-col py-8'>
        <div className='text-[#FFFFFF] text-[22px] font-bold leading-8'>Account Analytics</div>

        <div className='grid grid-cols-3 gap-[16px] mt-6'>
            {accountAnalytics.map((item,index) => {
                return(
                    <div key={index} className='flex flex-col gap-8 p-5 rounded-[16px] bg-[#121212]'>
                <div className='flex items-center gap-3'>
                    <div className='flex p-2 rounded-[100px] bg-white/[0.08]'>
                        <Image src={item.icon} alt={''} />
                    </div>
                    <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>{item.name}</div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-[#FFFFFF] text-[32px] font-bold leading-10'>–</div>
                    <div className='flex gap-3'>
                        <div className='flex gap-1'>
                            <div className='w-5 h-5'>
                                <Image className='w-full h-full' src={arrowRight} alt={''} />
                            </div>
                            <div className='text-[#979797] text-[15px] font-normal leading-5'>0%</div>
                        </div>
                        <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>{item.status}</div>
                    </div>
                </div>
            </div>
                );
            })}
            
            <div></div>
            <div></div>
        </div>

        <div className='flex gap-4 mt-4'>
            <div className='flex flex-col w-2/3 gap-4'>
                <div className='flex flex-col gap-2 p-5 rounded-[16px] bg-[#121212]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='flex p-2 rounded-[100px] bg-white/[0.08]'>
                                <Image src={wallet} alt={''} />
                            </div>
                            <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>Revenue</div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>Month</div>
                            <Image src={arrowDown} alt={''} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-col gap-2'>
                                <div className='text-center text-[#979797] text-[13px] font-normal leading-[18px]'>Total earnings</div>
                                <div className='text-center text-[#FFFFFF] text-[36px] font-bold leading-12'>$0</div>
                            </div>
                            <div className='flex items-center justify-center gap-3'>
                                <div className='flex gap-1'>
                                    <Image src={arrowRight} alt={''} />
                                    <div className='text-[#979797] text-[15px] font-normal leading-5'>0%</div>
                                </div>
                                <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>$0 earnings this month</div>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
                <div></div>
            </div>
            <div className='w-1/3'></div>
        </div>
    </div>
  )
}

export default AnalyticsMainPage;
