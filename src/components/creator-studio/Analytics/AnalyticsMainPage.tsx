import Image from 'next/image';
import React, { useState } from 'react'
import heartWithPlus from '../../../../public/assets/heart-with-plus2.png';
import arrowRight from '../../../../public/assets/arrow-narrow-right (1).png';
import userCheck from '../../../../public/assets/user-check.png';
import heart from '../../../../public/assets/heart.png';
import wallet from '../../../../public/assets/wallet.png';
import arrowDown from '../../../../public/assets/chevron-down.png';
import circleBlue from '../../../../public/assets/circle-blue.png';
import mic from '../../../../public/assets/mic.png';
import gift from '../../../../public/assets/gift-alt.png';
import arrowUpRight from '../../../../public/assets/arrow-up-right.png';
import greenArrowUp from '../../../../public/assets/up-arrow-green.png';
import redArrowDown from '../../../../public/assets/trending-down-outline.png';
import globe from '../../../../public/assets/globe.png';
import usaFlag from '../../../../public/assets/usa-flag.png';
import uk from '../../../../public/assets/united-kingdom.png';
import canada from '../../../../public/assets/canada.png';
import poland from '../../../../public/assets/poland.png';
import spain from '../../../../public/assets/spain.png';
import china from '../../../../public/assets/china.png';
import ConvertCreditsModal from '@components/Referrals/ConvertCreditsModal';

const accountAnalytics = [
    {
        icon: heartWithPlus,
        name: 'Subscribers',
        amount: '20,735',
        image: greenArrowUp,
        percentage: '20.7%',
        color: '#5AD02E',
        status: '0 followers this month',
        updatedStatus: '+164 followers this month',
    },
    {
        icon: userCheck,
        name: 'Followers',
        amount: '190,827',
        image: redArrowDown,
        percentage: '2%',
        color: '#FF5336',
        status: '0 followers this month',
        updatedStatus: '-13 followers this month',
    },
    {
        icon: heart,
        name: 'Likes',
        amount: '980,274',
        image: greenArrowUp,
        percentage: '6.3%',
        color: '#5AD02E',
        status: '0 likes this month',
        updatedStatus: '+1,825 likes this month',
    }
];

const side1 = [
    {
        text: 'Subs',
        amount: '$10.1k'
    },
    {
        text: 'Requests',
        amount: '$12k'
    },
    {
        text: 'Gifts',
        amount: '$12k'
    },
];

const side2 = [
    {
        text: 'General chatting',
        amount: '$8k'
    },
    {
        text: 'Style royalties',
        amount: '$7k'
    },
];

const countries = [
    {
        flag: usaFlag,
        country: 'United States',
        percentage: '54%'
    },
    {
        flag: uk,
        country: 'United Kingdom',
        percentage: '24%'
    },
    {
        flag: canada,
        country: 'Canada',
        percentage: '17%'
    },
    {
        flag: poland,
        country: 'Poland',
        percentage: '13%'
    },
    {
        flag: spain,
        country: 'Spain',
        percentage: '23%'
    },
    {
        flag: china,
        country: 'China',
        percentage: '48%'
    },
    {
        flag: usaFlag,
        country: 'United States',
        percentage: '54%'
    },
    {
        flag: spain,
        country: 'Spain',
        percentage: '23%'
    },
    {
        flag: uk,
        country: 'United Kingdom',
        percentage: '24%'
    },
];

const colors = ['#272727', '#232323', '#1F1F1F', '#1A1A1A', '#181818', '#161616', '#141414', '#141414', '#141414'];

const AnalyticsMainPage = () => {
    const [showChanges, setShowChanges] = useState(false);
    const [showCashoutModal, setShowCashoutModal] = useState(false);
    const [analyticsPage, setAnalyticsPage] = useState(false);

  return (
    <>
    <div className='flex flex-col py-8'>
        <div className='cursor-pointer text-[#FFFFFF] text-[22px] font-bold leading-8' onClick={() => {setShowChanges(!showChanges)}}>Account Analytics</div>

        <div className='grid grid-cols-3 gap-4 mt-6'>
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
                    <div className='text-[#FFFFFF] text-[32px] font-bold leading-10'>{showChanges ? item.amount : '–'}</div>
                    <div className='flex gap-3'>
                        <div className='flex gap-1'>
                            <div className='w-5 h-5'>
                                <Image className='w-full h-full' src={showChanges ? item.image : arrowRight} alt={''} />
                            </div>
                            <div className={`${showChanges ? `text-[${item.color}]` : 'text-[#979797]'} text-[15px] font-normal leading-5`}>{showChanges ? item.percentage : '0%'}</div>
                        </div>
                        <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>{showChanges ? item.updatedStatus : item.status}</div>
                    </div>
                </div>
            </div>
                );
            })}
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
                                <div className='text-center text-[#FFFFFF] text-[36px] font-bold leading-12'>{showChanges ? '$42,726' : '$0'}</div>
                            </div>
                            <div className='flex items-center justify-center gap-3'>
                                <div className='flex gap-1'>
                                    <Image src={showChanges ? greenArrowUp : arrowRight} alt={''} />
                                    <div className={`${showChanges ? 'text-[#5AD02E]' : 'text-[#979797]'} text-[15px] font-normal leading-5`}>{showChanges ? '20.7%' : '0%'}</div>
                                </div>
                                <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>{showChanges ? '+ $7k earnings this month' : '$0 earnings this month'}</div>
                            </div>
                        </div>
                        <div className='py-1 text-center items-center rounded-[100px] bg-white/[0.05] text-[#515151] text-[12px] font-semibold leading-4'>0%</div>
                        <div className='flex gap-6 pb-4'>
                            <div className='w-1/2 flex flex-col gap-[10px]'>
                                {side1.map((item,index) => {
                                    return(
                                        <div key={index} className='flex justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <Image src={circleBlue} alt={''} />
                                                <div className='text-[#979797] text-[13px] font-normal leading-[18px]'>{item.text}</div>
                                            </div>
                                            <div className='text-[#FFFFFF] text-[13px] font-semibold leading-[18px]'>{showChanges ? item.amount : '$0'}</div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className='w-1/2 flex flex-col gap-[10px]'>
                            {side2.map((item,index) => {
                                    return(
                                        <div key={index} className='flex justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <Image src={circleBlue} alt={''} />
                                                <div className='text-[#979797] text-[13px] font-normal leading-[18px]'>{item.text}</div>
                                            </div>
                                            <div className='text-[#FFFFFF] text-[13px] font-semibold leading-[18px]'>{showChanges ? item.amount : '$0'}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 border-t border-[#272727] mt-[9px] pt-[9px]'>
                        <div className='text-[#979797] text-[13px] font-normal leading-[18px]'>Available to cashout</div>
                        <div className='flex justify-between'>
                            <div className='text-[#FFFFFF] text-[30px] font-bold leading-10'>{showChanges ? '$22,121.5' : '$0'}</div>
                            <button className={`h-max flex px-4 py-[10px] justify-center items-center rounded-[10px] ${showChanges ? 'bg-[#5848BC] text-[#FFFFFF]' : 'bg-[#5848BC]/[0.3] text-white/[0.32]'} text-[14px] font-bold leading-5`} onClick={() => {setShowCashoutModal(true), setAnalyticsPage(true)}}>Cash out</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-8 px-5 pt-5 pb-12 rounded-[16px] bg-[#121212]'>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 rounded-[100px] bg-white/[0.08]'>
                            <Image src={mic} alt={''} />
                        </div>
                        <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Requests</div>
                    </div>
                    <div className='flex gap-12'>
                        <div className='w-1/2 flex flex-col gap-4 border-r border-white/[0.08]'>
                            <div className='text-[#979797] text-[15px] font-normal leading-5'>Voice requests</div>
                            <div className='flex flex-col gap-3'>
                                <div className='text-[#FFFFFF] text-[32px] font-bold leading-10'>{showChanges ? '1,835' : '–'}</div>
                                <div className='flex gap-3'>
                                    <div className='flex gap-1'>
                                        <Image src={showChanges ? greenArrowUp : arrowRight} alt={''} />
                                        <div className={`${showChanges ? 'text-[#5AD02E]' : 'text-[#979797]'} text-[15px] font-normal leading-5`}>{showChanges ? '10.7%' : '0%'}</div>
                                    </div>
                                    <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>{showChanges ? '+27 requests this week' : '0 requests this week'}</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-1/2 gap-4'>
                            <div className='text-[#979797] text-[15px] font-normal leading-5'>Image requests</div>
                            <div className='flex flex-col gap-3'>
                                <div className='text-[#FFFFFF] text-[32px] font-bold leading-10'>{showChanges ? '826' : '–'}</div>
                                <div className='flex gap-3'>
                                    <div className='flex gap-1'>
                                        <Image src={showChanges ? greenArrowUp : arrowRight} alt={''} />
                                        <div className={`${showChanges ? 'text-[#5AD02E]' : 'text-[#979797]'} text-[15px] font-normal leading-5`}>{showChanges ? '23.2%' : '0%'}</div>
                                    </div>
                                    <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>{showChanges ? '+109 requests this week' : '0 requests this week'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-1/3 gap-4'>
                <div className='flex flex-col gap-8 p-5 rounded-[16px] bg-[#121212]'>
                    <div className='flex gap-3'>
                        <Image src={gift} alt={''} />
                        <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>Gifts</div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='text-[#FFFFFF] text-[32px] font-bold leading-10'>{showChanges ? '980' : '–'}</div>
                            <div className='flex gap-3'>
                                <div className='flex gap-1'>
                                    <Image src={showChanges ? greenArrowUp : arrowRight} alt={''} />
                                    <div className={`${showChanges ? 'text-[#5AD02E]' : 'text-[#979797]'} text-[15px] font-normal leading-5`}>{showChanges ? '12.5%' : '0%'}</div>
                                </div>
                            <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>{showChanges ? '+123 Gifts this month' : '0 Gifts this month'}</div>
                        </div>
                    </div>
                </div>
                <div className='grow flex flex-col gap-6 p-5 rounded-[16px] bg-[#121212]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-3'>
                            <div className='pt-2 px-2 rounded-[100px] bg-white/[0.08]'>
                                <Image className='mb-1' src={globe} alt={''} />
                            </div>
                            <div className='mt-[3px] text-[#FFFFFF] text-[18px] font-bold leading-6'>Visits by Country</div>
                        </div>
                        <Image src={arrowUpRight} alt={''} />
                    </div>
                   
                        {showChanges ? 
                        <div className='flex flex-col gap-5'>
                           {countries.map((item,index) => {
                           return(
                               <div key={index} className='flex justify-between'>
                                   <div className='flex gap-2'>
                                       <Image src={item.flag} alt={''} />
                                       <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>{item.country}</div>
                                   </div>
                                   <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>{item.percentage}</div>
                               </div>
                           );
                       })}
                       </div>
             
                        : 
                        <div className='flex flex-col gap-5'>
                        {colors.map((item,index) => {
                        return(
                            <div key={index} className='flex justify-between'>
                                <div className='flex gap-2'>
                                    <div className={`w-[32px] h-[24px] rounded-[4px]`} style={{backgroundColor: `${item}`}}></div>
                                    <div className={`w-[160px] h-[24px] rounded-[4px]`} style={{backgroundColor: `${item}`}}></div>
                                </div>
                                <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>–</div>
                            </div>
                        );
                    })}
                    </div>
                        }
                   
                </div>
            </div>
        </div>
    </div>
    {
        showCashoutModal && <ConvertCreditsModal analyticsPage={analyticsPage} setAnalyticsPage={setAnalyticsPage} closeConvertCredits={setShowCashoutModal} heading={'Cash out'} available={'Available to cash out'} amount={'$22,121.5'} buttonText={'Cash out'}/>
    }
    </>
  )
}

export default AnalyticsMainPage;
