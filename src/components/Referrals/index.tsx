import React, { useState } from 'react';
import Image from 'next/image';
import sendIcon from '../../../public/assets/send-icon.png';
import userAddIcon from '../../../public/assets/user-add-icon.png';
import percentageIcon from '../../../public/assets/percentage-icon.png';
import linkIcon from '../../../public/assets/link-icon2.png';
import graph from '../../../public/assets/referral-graph.png';
import informationIcon from '../../../public/assets/circle-information2.png';
import arc1 from '../../../public/assets/referral-arc2.png';
import arc2 from '../../../public/assets/referral-arc1.png';
import TierModal from './TierModal';
import ConvertCreditsModal from './ConvertCreditsModal';
import ConfirmConversionModal from './ConfirmConversionModal';
import Chart from './Chart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  }
];

const array2 = [
  {
    number: '$0',
    name: 'Total cash earned'
  },
  {
    number: '0',
    name: 'People you have referred '
  }
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
  const [confirmModal, setConfirmModal] = useState(false);

  const notify = (): void => {
    setConfirmModal(false), toast.success('Cashout successful');
  };
  return (
    <>
      <div className='flex w-[1020px] flex-col items-center gap-20 px-40 py-20'>
        <div className='flex flex-col items-center w-full gap-10'>
          <div className='flex flex-col gap-3'>
            <div className='text-center text-[32px] font-bold leading-10 text-[#FFFFFF]'>
              Referral Program
            </div>
            <div className='text-center text-[15px] font-normal leading-5 text-[#979797]'>
              Earn up to 15% of your referrals spending on Egirls.ai
            </div>
          </div>
          <div className='relative flex justify-between w-full'>
            {programSteps.map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex max-w-[182px] flex-col items-center gap-5'
                >
                  <div className='flex rounded-[100px] bg-white/[0.05] p-6'>
                    <Image
                      className='w-full h-full'
                      src={item.image}
                      alt={''}
                    />
                  </div>
                  <div className='flex flex-col items-center gap-[10px]'>
                    <div className='flex w-[181px] flex-col items-center'>
                      <div className='text-center text-[14px] font-bold leading-6 text-[#979797]'>
                        {item.step}
                      </div>
                      <div className='text-center text-[18px] font-bold leading-6 text-[#FFFFFF]'>
                        {item.action}
                      </div>
                    </div>
                    <div className='text-center text-[14px] font-normal leading-[18px] text-[#979797]'>
                      {item.work}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className='absolute left-[169px] top-[24px]'>
              <Image className='w-full h-full' src={arc1} alt={''} />
            </div>
            <div className='absolute right-[186px] top-[29px]'>
              <Image className='w-full h-full' src={arc2} alt={''} />
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full gap-6'>
          <div className='items-center text-center text-[32px] font-bold leading-10 text-[#FFFFFF]'>
            Referral Link
          </div>
          <div className='flex items-start w-full gap-2 '>
            <div className='flex grow items-center gap-2 rounded-[12px] bg-white/[0.05] py-4 pl-[20px] pr-[12px]'>
              <div className='w-6 h-6'>
                <Image className='w-full h-full' src={linkIcon} alt={''} />
              </div>
              <div className='text-[14px] font-normal leading-5 text-[#979797]'>
                egirls.com/qwert1234
              </div>
            </div>
            <button className='flex w-max items-center justify-center rounded-[16px] bg-[#5848BC] px-6 py-4 text-[18px] font-bold leading-6 text-[#FFFFFF]'>
              Copy link
            </button>
          </div>
        </div>

        <div className='flex flex-col w-full gap-6'>
          <div className='text-center text-[32px] font-bold leading-10 text-[#FFFFFF]'>
            Your earnings
          </div>
          <div className='flex flex-col w-full gap-2'>
            <div className='flex items-center justify-center gap-12 rounded-[20px] bg-white/[0.05] px-14 py-8'>
              <div className='relative h-[144px] w-[49%] '>
                <div className='absolute bottom-[10px] left-[1px] top-[39px] mt-2 flex h-full w-full flex-col items-center gap-2'>
                  <div className='text-center text-[26px] font-bold leading-8 text-[#FFFFFF]'>
                    5%
                  </div>
                  <div className='text-center text-[26px] font-bold leading-8 text-[#FFFFFF]'>
                    Earnings
                  </div>
                  <div className='text-[14px] font-normal leading-[18px] text-[#979797]'>
                    0/100 people referred
                  </div>
                </div>
                {/* <Image className='w-full h-full' src={graph} alt={''} /> */}
                <Chart />
              </div>
              <div className='flex w-[49%] flex-col items-start gap-1'>
                <div className='leading-12 text-[36px] font-bold text-[#FFFFFF]'>
                  $0
                </div>
                <div className='text-[18px] font-bold leading-6 text-[#FFFFFF]'>
                  Available to cash out
                </div>
                <div className='flex gap-1'>
                  <div
                    className='cursor-pointer text-[14px] font-normal leading-[18px] text-[#979797]'
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    Earnings – Tier 1
                  </div>
                  <div className='h-[18px] w-[18px]'>
                    <Image
                      className='w-full h-full'
                      src={informationIcon}
                      alt={''}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-2'>
              {array2.map((item) => {
                return (
                  <div className='flex flex-col items-center justify-center gap-1 rounded-[14px] bg-white/[0.05] py-6 pl-6 pr-10'>
                    <div className='text-center text-[30px] font-bold leading-10 text-[#FFFFFF]'>
                      {item.number}
                    </div>
                    <div className='text-center text-[13px] font-normal leading-[18px] text-[#979797]'>
                      {item.name}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className='grid grid-cols-2 gap-2'>
              <button
                className='flex items-center justify-center rounded-[16px] bg-[#5848BC] px-6 py-4 text-[18px] font-bold leading-6 text-[#FFFFFF]'
                onClick={() => {
                  setshowConvertCredits(true);
                }}
              >
                Convert to tokens
              </button>
              <button className='flex items-center justify-center rounded-[16px] bg-[#5848BC] px-6 py-4 text-[18px] font-bold leading-6 text-[#FFFFFF]'>
                Cash out
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <TierModal closeModalState={setShowModal} />}
      {showConvertCredits && (
        <ConvertCreditsModal
          closeConvertCredits={setshowConvertCredits}
          confirmModal={setConfirmModal}
          heading={'Convert to tokens'}
          available={'Available to convert'}
          amount={'$1,000'}
          buttonText={'Convert'}
        />
      )}
      {confirmModal && (
        <ConfirmConversionModal
          closeConfirmModal={setConfirmModal}
          convertCredits={setshowConvertCredits}
          setShowErrorModal={()=>false}
          notify={notify}
          converting={`You're converting`}
          credits={'$250 into 1000 credits'}
          text={
            '. This action cannot be undone. Please review the details carefully before confirming.'
          }
        />
      )}
       <ToastContainer
        position='bottom-center'
        pauseOnHover
        theme='colored'
        hideProgressBar={true}
        autoClose={5000}
      />
    </>
  );
};

export default ReferralsIndex;
