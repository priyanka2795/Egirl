import React, { useState } from 'react';
import Image from 'next/image';
import sendIcon from '../../../public/assets/send-icon.png'
import userAddIcon from '../../../public/assets/user-add-icon.png'
import percentageIcon from '../../../public/assets/percentage-icon.png'
import linkIcon from '../../../public/assets/link-icon2.png';
import graph from '../../../public/assets/referral-graph.png';
import informationIcon from '../../../public/assets/circle-information2.png';
import arc1 from '../../../public/assets/referral-arc2.png';
import arc2 from '../../../public/assets/referral-arc1.png';
import TierModal from './TierModal';
import ConvertCreditsModal from './ConvertCreditsModal';
import ConfirmConversionModal from './ConfirmConversionModal';
import Chart from './Chart';

const programSteps = [
  {
    image: sendIcon,
    step: 'Step 1',
    action: 'Share referral link',
    work: 'Share your link to as many people as you wish'
  },
  {
    image: userAddIcon,
    step: 'Step 2',
    action: 'Users register',
    work: 'Users will click on your link and register on Egirls.ai'
  },
  {
    image: percentageIcon,
    step: 'Step 3',
    action: 'Get a % of spending',
    work: 'Earn up to 15% of your referrals spending'
  },
];

const array2 = [
  {
    number: '$0',
    name: 'Total cash earned'
  },
  {
    number: '0',
    name: 'People you have referred '
  },
];

// const buttons = [
//   {
//     button: 'Convert to credits'
//   },
//   {
//     button: 'Cash out'
//   },
// ];


const ReferralsIndex = () => {
  const [showModal, setShowModal] = useState(false);
  const [showConvertCredits, setshowConvertCredits] = useState(false);
  const [confirmModal, setconfirmModal] = useState(false);
  return (
    <>
    <div className='flex flex-col items-center gap-20 w-[1020px] px-40 py-20'>
      <div className='flex flex-col items-center gap-10'>
        <div className='flex flex-col gap-3 w-[417px]'>
          <div className='text-[#FFFFFF] text-[32px] font-bold leading-10 text-center'>Referral Program</div>
          <div className='text-center text-[#979797] text-[15px] font-normal leading-5'>Earn up to 15% of your referrals spending on Egirls.ai</div>
        </div>
        <div className='w-[700px] justify-between items-center grid grid-cols-3 relative'>
          {programSteps.map((item) => {
            return(
              <div className='flex w-[182px] flex-col items-center gap-5'>
                <div className='flex p-6 rounded-[100px] bg-white/[0.05]'>
                  <Image className='w-full h-full' src={item.image} alt={''} />
                </div>
                <div className='flex flex-col gap-[10px] items-center'>
                  <div className='flex w-[181px] flex-col items-center'>
                    <div className='text-[#979797] text-[14px] font-bold leading-6 text-center'>{item.step}</div>
                    <div className='text-center text-[18px] font-bold leading-6 text-[#FFFFFF]'>{item.action}</div>
                  </div>
                  <div className='text-center text-[#979797] text-[14px] font-normal leading-[18px]'>{item.work}</div>
                </div>
              </div>
            );
          })}
          <div className='absolute top-[24px] left-[169px] w-[77px] h-[6px]'>
            <Image className='w-full h-full' src={arc1} alt={''} />
          </div>
          <div className='absolute top-[28px] right-[221px] w-[77px] h-[6px]'>
            <Image className='w-full h-full' src={arc2} alt={''} />
          </div>
        </div>
      </div>

      <div className='flex flex-col w-full gap-6'>
        <div className='text-[#FFFFFF] items-center text-[32px] text-center font-bold leading-10'>Referral Link</div>
        <div className='flex items-start w-full gap-2 '>
          <div className='grow flex pl-[20px] pr-[12px] py-4 items-center gap-2 rounded-[12px] bg-white/[0.05]'>
            <div className='w-6 h-6'>
              <Image className='w-full h-full' src={linkIcon} alt={''} />
            </div>
            <div className='text-[#979797] text-[14px] font-normal leading-5'>egirls.com/qwert1234</div>
          </div>
          <button className='w-max flex items-center justify-center px-6 py-4 bg-[#5848BC] rounded-[16px] text-[#FFFFFF] text-[18px] font-bold leading-6'>Copy link</button>
        </div>
      </div>

      <div className='flex flex-col w-full gap-6'>
        <div className='text-[#FFFFFF] text-center text-[32px] font-bold leading-10'>Your earnings</div>
        <div className='flex flex-col w-full gap-2'>
          <div className='flex items-center justify-center gap-12 py-8 px-14 rounded-[20px] bg-white/[0.05]'>
            <div className='w-[49%] h-[144px] relative '>
              <div className='mt-2 flex flex-col items-center gap-2 absolute top-[39px] left-[1px] bottom-[10px] w-full h-full'>
                <div className='text-[#FFFFFF] text-center text-[26px] font-bold leading-8'>5%</div>
                <div className='text-[#FFFFFF] text-center text-[26px] font-bold leading-8'>Earnings</div>
                <div className='text-[#979797] text-[14px] font-normal leading-[18px]'>0/100 people referred</div>
              </div>
              {/* <Image className='w-full h-full' src={graph} alt={''} /> */}
              <Chart/>
            </div>
            <div className='w-[49%] flex flex-col items-start gap-1'>
              <div className='text-[#FFFFFF] text-[36px] font-bold leading-12'>$0</div>
              <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Available to cash out</div>
              <div className='flex gap-1'>
                <div className='text-[#979797] text-[14px] font-normal leading-[18px] cursor-pointer' onClick={() =>{setShowModal(true)}}>Earnings – Tier 1</div>
                <div className='w-[18px] h-[18px]'>
                  <Image className='w-full h-full' src={informationIcon} alt={''} />
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-2'>
            {array2.map((item) => {
              return(
                <div className='flex flex-col items-center justify-center gap-1 py-6 pl-6 pr-10 rounded-[14px] bg-white/[0.05]'>
                  <div className='text-center text-[#FFFFFF] text-[30px] font-bold leading-10'>{item.number}</div>
                  <div className='text-[#979797] text-center text-[13px] font-normal leading-[18px]'>{item.name}</div>
                </div>
              );
            })}
          </div>
          
          <div className='grid grid-cols-2 gap-2'>
            <button className='flex items-center justify-center rounded-[16px] bg-[#5848BC] text-[#FFFFFF] text-[18px] font-bold leading-6 px-6 py-4' onClick={() =>{setshowConvertCredits(true)}}>Convert to tokens</button>
            <button className='flex items-center justify-center rounded-[16px] bg-[#5848BC] text-[#FFFFFF] text-[18px] font-bold leading-6 px-6 py-4'>Cash out</button>
          </div>
        </div>
      </div>
    </div>
    {
      showModal && 
      <TierModal closeModalState={setShowModal} />
    }
    {
      showConvertCredits && 
      <ConvertCreditsModal closeConvertCredits={setshowConvertCredits} confirmModal={setconfirmModal} heading={'Convert to tokens'} available={'Available to convert'} amount={'$1,000'} buttonText={'Convert'} />
    }
    {
    confirmModal &&      
       <ConfirmConversionModal closeConfirmModal={setconfirmModal} convertCredits={setshowConvertCredits}/>  
    }
    </>
  )
}

export default ReferralsIndex
