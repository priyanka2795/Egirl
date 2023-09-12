import Image from 'next/image';
import React, { useState } from 'react';
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
import arrowDownSolid from '../../../../public/assets/down-arrow-img.png';

import ConvertCreditsModal from '@components/Referrals/ConvertCreditsModal';
import ConfirmConversionModal from '@components/Referrals/ConfirmConversionModal';
import ErrorModal from './ErrorModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const accountAnalytics = [
  {
    icon: heartWithPlus,
    name: 'Subscribers',
    amount: '20,735',
    image: greenArrowUp,
    percentage: '20.7%',
    color: '#5AD02E',
    status: '0 followers this month',
    updatedStatus: '+164 followers this month'
  },
  {
    icon: userCheck,
    name: 'Followers',
    amount: '190,827',
    image: redArrowDown,
    percentage: '2%',
    color: '#FF5336',
    status: '0 followers this month',
    updatedStatus: '-13 followers this month'
  },
  {
    icon: heart,
    name: 'Likes',
    amount: '980,274',
    image: greenArrowUp,
    percentage: '6.3%',
    color: '#5AD02E',
    status: '0 likes this month',
    updatedStatus: '+1,825 likes this month'
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
  }
];

const side2 = [
  {
    text: 'General chatting',
    amount: '$8k'
  },
  {
    text: 'Style royalties',
    amount: '$7k'
  }
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
  }
];

const progressBarData= [
    {
        id:1,
        color: "#403BAC",
        title: "Subs",
        amount: "$10,128",
        percent: '25%',
        width: "47%"
    },
    {
        id:2,
        color: "#4F43B6",
        title: "Requests",
        amount: "$12k",
        percent: '12.5%',
        width:"17%",
    },
    {       
        id:3,
        color: "#5848BC",
        title: "Gifts",
        amount: "$10,128",
        percent: '8%',
        width:'17%'
    },
    {
        id:4,
        color: "#7362C6",
        title: "General chatting",
        amount: "$10,128",
        percent: '4%',
        width:'10%',
    },
    {
        id:5,
        color: "#8C7DD0",
        title: "Style royalties",
        amount: "$10,128",
        percent: '<1%',
        width:'9%'
    }
]
const colors = [
  '#272727',
  '#232323',
  '#1F1F1F',
  '#1A1A1A',
  '#181818',
  '#161616',
  '#141414',
  '#141414',
  '#141414'
];

const AnalyticsMainPage = () => {
  const [showChanges, setShowChanges] = useState(false);
  const [showCashoutModal, setShowCashoutModal] = useState(false);
  const [analyticsPage, setAnalyticsPage] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showErrormModal, setShowErrormModal] = useState(false);
  const [showUpdatedFilterInBar, setShowUpdatedFilterInBar] = useState('');

  const notify = () => {
    setShowConfirmModal(false), toast.success('Cashout successful');
  };

  return (
    <>
      <div className='flex flex-col'>
        <div
          className='cursor-pointer text-[22px] font-bold leading-8 text-white'
          onClick={() => {
            setShowChanges(!showChanges);
          }}
        >
          Account Analytics
        </div>

        <div className='grid grid-cols-3 gap-4 mt-6'>
          {accountAnalytics.map((item, index) => {
            return (
              <div
                key={index}
                className='flex flex-col gap-8 rounded-[16px] bg-[#121212] p-5'
              >
                <div className='flex items-center gap-3'>
                  <div className='flex rounded-[100px] bg-white/[0.08] p-2'>
                    <Image src={item.icon} alt={''} />
                  </div>
                  <div className='text-[15px] font-normal leading-5 text-white'>
                    {item.name}
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='text-[32px] font-bold leading-10 text-white'>
                    {showChanges ? item.amount : '–'}
                  </div>
                  <div className='flex gap-3'>
                    <div className='flex gap-1'>
                      <div className='w-5 h-5'>
                        <Image
                          className='w-full h-full'
                          src={showChanges ? item.image : arrowRight}
                          alt={''}
                        />
                      </div>
                      <div
                        className={`${
                          showChanges
                            ? `text-[${item.color}]`
                            : 'text-[#979797]'
                        } text-[15px] font-normal leading-5`}
                      >
                        {showChanges ? item.percentage : '0%'}
                      </div>
                    </div>
                    <div className='text-[15px] font-normal leading-5 text-white'>
                      {showChanges ? item.updatedStatus : item.status}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='flex gap-4 mt-4'>
          <div className='flex flex-col w-2/3 gap-4'>
            <div className='flex flex-col gap-2 rounded-[16px] bg-[#121212] p-5'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='flex rounded-[100px] bg-white/[0.08] p-2'>
                    <Image src={wallet} alt={''} />
                  </div>
                  <div className='text-[15px] font-normal leading-5 text-white'>
                    Revenue
                  </div>
                </div>
                <div className='flex gap-2'>
                  <div className='text-[15px] font-normal leading-5 text-white'>
                    Month
                  </div>
                  <Image src={arrowDown} alt={''} />
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                  <div className='flex flex-col gap-2'>
                    <div className='text-center text-[13px] font-normal leading-[18px] text-[#979797]'>
                      Total earnings
                    </div>
                    <div className='leading-[48px] text-center text-[36px] font-bold text-white'>
                      {showChanges ? '$42,726' : '$0'}
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-3'>
                    <div className='flex gap-1'>
                      <Image
                        src={showChanges ? greenArrowUp : arrowRight}
                        alt={''}
                      />
                      <div
                        className={`${
                          showChanges ? 'text-[#5AD02E]' : 'text-[#979797]'
                        } text-[15px] font-normal leading-5`}
                      >
                        {showChanges ? '20.7%' : '0%'}
                      </div>
                    </div>
                    <div className='text-[15px] font-normal leading-5 text-white'>
                      {showChanges
                        ? '+ $7k earnings this month'
                        : '$0 earnings this month'}
                    </div>
                  </div>
                </div>
                {showChanges ? (
                  <div className='flex h-[32px] items-center rounded-[100px] text-[12px] font-semibold leading-4 text-white'>
                   { progressBarData.map((item) =>{
                    return(
                        <div key={item.id}
                        className={`group cursor-pointer relative w-[${item.width}] first:rounded-bl-[8px] first:rounded-tl-[8px] last:rounded-br-[8px] last:rounded-tr-[8px] bg-[${item.color}] py-1 text-center hover:rounded-b-[8px] hover:rounded-t-[8px] hover:bg-[${item.color}] hover:py-2`}
                        onMouseEnter={() => setShowUpdatedFilterInBar(`${item.title}`)}
                      >                           
                        {item.percent}
                        <div className='invisible absolute left-0 top-[-63px] w-full opacity-0 group-hover:visible group-hover:opacity-[100]'>
                          <div className='mx-[auto] w-max rounded-[12px] bg-[#272727] px-[14px] py-3'>
                            <h6 className='text-xs text-[#979797]'>{item.title}</h6>
                            <p className='text-sm font-bold'>{item.amount}</p>
                          </div>
                          <div className='-mt-[6px]'>
                            <Image
                              src={arrowDownSolid}
                              className='object-contain'
                            />
                          </div>
                        </div>
                      </div>
                    )
                   })}

                    {/* <div
                      className='group relative w-[47%] rounded-bl-[8px] rounded-tl-[8px] bg-[#403BAC] py-1 text-center hover:rounded-b-[8px] hover:rounded-t-[8px] hover:bg-[#403BAC] hover:py-2'
                      onMouseEnter={() => setShowUpdatedFilterInBar('Subs')}
                    >
                      25%
                      <div className='invisible absolute left-0 top-[-63px] w-full opacity-0 group-hover:visible group-hover:opacity-[100]'>
                        <div className='mx-[auto] w-max rounded-[12px] bg-[#272727] px-[14px] py-3'>
                          <h6 className='text-xs text-[#979797]'>Subs</h6>
                          <p className='text-sm font-bold'>$10,128</p>
                        </div>
                        <div className='-mt-[6px]'>
                          <Image
                            src={arrowDownSolid}
                            className='object-contain'
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className='group relative w-[17%] bg-[#4F43B6] py-1 text-center hover:rounded-[8px] hover:bg-[#4F43B6] hover:py-2'
                      onMouseEnter={() => setShowUpdatedFilterInBar('Requests')}
                    >
                      12.5%
                      <div className='invisible absolute left-0 top-[-63px] w-full opacity-0 group-hover:visible group-hover:opacity-[100]'>
                        <div className='mx-[auto] w-max rounded-[12px] bg-[#272727] px-[14px] py-3'>
                          <h6 className='text-xs text-[#979797]'>Requests</h6>
                          <p className='text-sm font-bold'>$10,128</p>
                        </div>
                        <div className='-mt-[6px]'>
                          <Image
                            src={arrowDownSolid}
                            className='object-contain'
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className='group relative w-[17%] bg-[#4F43B6] py-1 text-center hover:rounded-[8px] hover:bg-[#4F43B6] hover:py-2'
                      onMouseEnter={() => setShowUpdatedFilterInBar('Gifts')}
                    >
                      12.5%
                      <div className='invisible absolute left-0 top-[-63px] w-full opacity-0 group-hover:visible group-hover:opacity-[100]'>
                        <div className='mx-[auto] w-max rounded-[12px] bg-[#272727] px-[14px] py-3'>
                          <h6 className='text-xs text-[#979797]'>Gifts</h6>
                          <p className='text-sm font-bold'>$10,128</p>
                        </div>
                        <div className='-mt-[6px]'>
                          <Image
                            src={arrowDownSolid}
                            className='object-contain'
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className='group relative w-[17%] bg-[#5848BC] py-1 text-center hover:rounded-[8px] hover:bg-[#5848BC] hover:py-2'
                      onMouseEnter={() =>
                        setShowUpdatedFilterInBar('General chatting')
                      }
                    >
                      8%
                      <div className='invisible absolute left-0 top-[-63px] w-full opacity-0 group-hover:visible group-hover:opacity-[100]'>
                        <div className='mx-[auto] w-max rounded-[12px] bg-[#272727] px-[14px] py-3'>
                          <h6 className='text-xs text-[#979797]'>General chatting</h6>
                          <p className='text-sm font-bold'>$10,128</p>
                        </div>
                        <div className='-mt-[6px]'>
                          <Image
                            src={arrowDownSolid}
                            className='object-contain'
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className='relative group w-[10%] bg-[#7362C6] py-1 text-center hover:rounded-[8px] hover:bg-[#7362C6] hover:py-2'
                      onMouseEnter={() =>
                        setShowUpdatedFilterInBar('Style royalties')
                      }
                    >
                      4%
                      <div className='invisible absolute left-0 top-[-63px] w-full opacity-0 group-hover:visible group-hover:opacity-[100]'>
                        <div className='mx-[auto] w-max rounded-[12px] bg-[#272727] px-[14px] py-3'>
                          <h6 className='text-xs text-[#979797]'>Subs</h6>
                          <p className='text-sm font-bold'>$10,128</p>
                        </div>
                        <div className='-mt-[6px]'>
                          <Image
                            src={arrowDownSolid}
                            className='object-contain'
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className='w-[9%] rounded-br-[8px] rounded-tr-[8px] bg-[#8C7DD0] py-1 text-center hover:rounded-bl-[8px] hover:rounded-tl-[8px] hover:bg-[#8C7DD0] hover:py-2'
                      onMouseEnter={() =>
                        setShowUpdatedFilterInBar('Style royalties')
                      }
                    >
                      1%
                    </div> */}
                  </div>
                ) : (
                  <div className='items-center rounded-[100px] bg-white/[0.05] py-1 text-center text-[12px] font-semibold leading-4 text-[#515151]'>
                    0%
                  </div>
                )}
                <div className='flex gap-6 pb-4'>
                  <div className='flex w-1/2 flex-col gap-[10px]'>
                    {side1.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`${
                            showUpdatedFilterInBar === item.text
                              ? 'opacity-100'
                              : 'opacity-40'
                          } flex justify-between`}
                        >
                          <div className='flex items-center gap-2'>
                            <Image src={circleBlue} alt={''} />
                            <div className='text-[13px] font-normal leading-[18px] text-[#979797]'>
                              {item.text}
                            </div>
                          </div>
                          <div className='text-[13px] font-semibold leading-[18px] text-white'>
                            {showChanges ? item.amount : '$0'}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className='flex w-1/2 flex-col gap-[10px]'>
                    {side2.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`flex justify-between ${
                            showUpdatedFilterInBar === item.text
                              ? 'opacity-100'
                              : 'opacity-40'
                          }`}
                        >
                          <div className='flex items-center gap-2'>
                            <Image src={circleBlue} alt={''} />
                            <div className='text-[13px] font-normal leading-[18px] text-[#979797]'>
                              {item.text}
                            </div>
                          </div>
                          <div className='text-[13px] font-semibold leading-[18px] text-white'>
                            {showChanges ? item.amount : '$0'}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className='mt-[9px] flex flex-col gap-1 border-t border-[#272727] pt-[9px]'>
                <div className='text-[13px] font-normal leading-[18px] text-[#979797]'>
                  Available to cashout
                </div>
                <div className='flex justify-between'>
                  <div className='text-[30px] font-bold leading-10 text-white'>
                    {showChanges ? '$22,121.5' : '$0'}
                  </div>
                  <button
                    className={`flex h-max items-center justify-center rounded-[10px] px-4 py-[10px] ${
                      showChanges
                        ? 'bg-[#5848BC] text-white'
                        : 'bg-[#5848BC]/[0.3] text-white/[0.32] pointer-events-none'
                    } text-[14px] font-bold leading-5`}
                    onClick={() => {
                      setShowCashoutModal(true), setAnalyticsPage(true);
                    }}
                  >
                    Cash out
                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-8 rounded-[16px] bg-[#121212] px-5 pb-12 pt-5'>
              <div className='flex items-center gap-3'>
                <div className='flex rounded-[100px] bg-white/[0.08] p-2'>
                  <Image src={mic} alt={''} />
                </div>
                <div className='text-[18px] font-bold leading-6 text-white'>
                  Requests
                </div>
              </div>
              <div className='flex gap-12'>
                <div className='flex w-1/2 flex-col gap-4 border-r border-white/[0.08]'>
                  <div className='text-[15px] font-normal leading-5 text-[#979797]'>
                    Voice requests
                  </div>
                  <div className='flex flex-col gap-3'>
                    <div className='text-[32px] font-bold leading-10 text-white'>
                      {showChanges ? '1,835' : '–'}
                    </div>
                    <div className='flex gap-3'>
                      <div className='flex gap-1'>
                        <Image
                          src={showChanges ? greenArrowUp : arrowRight}
                          alt={''}
                        />
                        <div
                          className={`${
                            showChanges ? 'text-[#5AD02E]' : 'text-[#979797]'
                          } text-[15px] font-normal leading-5`}
                        >
                          {showChanges ? '10.7%' : '0%'}
                        </div>
                      </div>
                      <div className='text-[15px] font-normal leading-5 text-white'>
                        {showChanges
                          ? '+27 requests this week'
                          : '0 requests this week'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-1/2 gap-4'>
                  <div className='text-[15px] font-normal leading-5 text-[#979797]'>
                    Image requests
                  </div>
                  <div className='flex flex-col gap-3'>
                    <div className='text-[32px] font-bold leading-10 text-white'>
                      {showChanges ? '826' : '–'}
                    </div>
                    <div className='flex gap-3'>
                      <div className='flex gap-1'>
                        <Image
                          src={showChanges ? greenArrowUp : arrowRight}
                          alt={''}
                        />
                        <div
                          className={`${
                            showChanges ? 'text-[#5AD02E]' : 'text-[#979797]'
                          } text-[15px] font-normal leading-5`}
                        >
                          {showChanges ? '23.2%' : '0%'}
                        </div>
                      </div>
                      <div className='text-[15px] font-normal leading-5 text-white'>
                        {showChanges
                          ? '+109 requests this week'
                          : '0 requests this week'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-1/3 gap-4'>
            <div className='flex flex-col gap-8 rounded-[16px] bg-[#121212] p-5'>
              <div className='flex items-center gap-3'>
                <div className='flex rounded-[100px] bg-white/[0.08] p-2'>
                  <Image src={gift} alt={''} />
                </div>
                <div className='text-[15px] font-normal leading-5 text-white'>
                  Gifts
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='text-[32px] font-bold leading-10 text-white'>
                  {showChanges ? '980' : '–'}
                </div>
                <div className='flex gap-3'>
                  <div className='flex gap-1'>
                    <Image
                      src={showChanges ? greenArrowUp : arrowRight}
                      alt={''}
                    />
                    <div
                      className={`${
                        showChanges ? 'text-[#5AD02E]' : 'text-[#979797]'
                      } text-[15px] font-normal leading-5`}
                    >
                      {showChanges ? '12.5%' : '0%'}
                    </div>
                  </div>
                  <div className='text-[15px] font-normal leading-5 text-white'>
                    {showChanges
                      ? '+123 Gifts this month'
                      : '0 Gifts this month'}
                  </div>
                </div>
              </div>
            </div>
            <div className='flex grow flex-col gap-6 rounded-[16px] bg-[#121212] p-5'>
              <div className='flex items-center justify-between'>
                <div className='flex gap-3'>
                  <div className='rounded-[100px] bg-white/[0.08] px-2 pt-2'>
                    <Image className='mb-1' src={globe} alt={''} />
                  </div>
                  <div className='mt-[3px] text-[18px] font-bold leading-6 text-white'>
                    Visits by Country
                  </div>
                </div>
                <Image src={arrowUpRight} alt={''} />
              </div>

              {showChanges ? (
                <div className='flex flex-col gap-5'>
                  {countries.map((item, index) => {
                    return (
                      <div key={index} className='flex justify-between'>
                        <div className='flex gap-2'>
                          <Image src={item.flag} alt={''} />
                          <div className='text-[15px] font-normal leading-5 text-white'>
                            {item.country}
                          </div>
                        </div>
                        <div className='text-[15px] font-normal leading-5 text-white'>
                          {item.percentage}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className='flex flex-col gap-5'>
                  {colors.map((item, index) => {
                    return (
                      <div key={index} className='flex justify-between'>
                        <div className='flex gap-2'>
                          <div
                            className={`h-[24px] w-[32px] rounded-[4px]`}
                            style={{ backgroundColor: `${item}` }}
                          ></div>
                          <div
                            className={`h-[24px] w-[160px] rounded-[4px]`}
                            style={{ backgroundColor: `${item}` }}
                          ></div>
                        </div>
                        <div className='text-[15px] font-normal leading-5 text-white'>
                          –
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {showCashoutModal && (
        <ConvertCreditsModal
          confirmModal={setShowConfirmModal}
          analyticsPage={analyticsPage}
          setAnalyticsPage={setAnalyticsPage}
          closeConvertCredits={setShowCashoutModal}
          heading={'Cash out'}
          available={'Available to cash out'}
          amount={'22,121.5'}
          buttonText={'Cash out'}
        />
      )}
      {showConfirmModal && (
        <ConfirmConversionModal
          closeConfirmModal={setShowConfirmModal}
          convertCredits={setShowCashoutModal}
          setShowErrormModal={setShowErrormModal}
          notify={notify}
          converting={`You’re about to cash out `}
          credits={'5,530'}
          text={
            '. This action cannot be undone. Please review the details carefully before confirming.'
          }
        />
      )}
      {showErrormModal && (
        <ErrorModal
          closeConfirmModal={setShowConfirmModal}
          convertCredits={setShowCashoutModal}
          setShowErrormModal={setShowErrormModal}
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

export default AnalyticsMainPage;
