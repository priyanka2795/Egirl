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
import arrowNarrowRight from '../../../../public/assets/arrow-narrow-right.png';
import ConvertCreditsModal from '@components/Referrals/ConvertCreditsModal';
import ConfirmConversionModal from '@components/Referrals/ConfirmConversionModal';
import ErrorModal from './ErrorModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectIcon from '../svg/short_select.svg';
import UnSelectIcon from '../svg/short_border.svg';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { type } from 'os';

const month = [
  { name: 'JAN' },
  { name: 'FEB' },
  { name: 'MAR' },
  { name: 'APR' },

  { name: 'MAY' },
  { name: 'JUN' },
  { name: 'JUL' },
  { name: 'AUG' },

  { name: 'SEP' },
  { name: 'OCT' },
  { name: 'NOV' },
  { name: 'DEC' }
];

const amount = [
  { name: '150k' },
  { name: '100k' },
  { name: '50k' },
  { name: '10k' },
  { name: '1k' }
];

const types = [
  'All',
  'Subs',
  'Request',
  'Gifts',
  'General chatting',
  'Style roaylties'
];

const data = [
  {
    // name: 'JAN',

    pv: 9000,
    qv: 1000,
    rv: 4000,
    sv: 4000,
    uv: 4000
  },
  {
    // name: 'FEB',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    // name: 'MAR',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    // name: 'APR',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    // name: 'MAY',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    // name: 'JUN',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    // name: 'JUL',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    // name: 'AUG',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    // name: 'SEP',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    // name: 'OCT',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    // name: 'NOV',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    // name: 'DEC',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

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

const progressBarData = [
  {
    id: 1,
    color: '#403BAC',
    title: 'Subs',
    amount: '$10,128',
    percent: '25%',
    width: '47%'
  },
  {
    id: 2,
    color: '#4F43B6',
    title: 'Requests',
    amount: '$12k',
    percent: '12.5%',
    width: '17%'
  },
  {
    id: 3,
    color: '#5848BC',
    title: 'Gifts',
    amount: '$10,128',
    percent: '8%',
    width: '17%'
  },
  {
    id: 4,
    color: '#7362C6',
    title: 'General chatting',
    amount: '$10,128',
    percent: '4%',
    width: '10%'
  },
  {
    id: 5,
    color: '#8C7DD0',
    title: 'Style royalties',
    amount: '$10,128',
    percent: '<1%',
    width: '9%'
  }
];
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

  const [shortTab, setShortTab] = useState(1);
  const [selectIndex, setSelectIndex] = useState();
  const [selectSub, setSelectSub] = useState('');
  const [selectAll, setSelectAll] = useState('');

  const SelectShort = (index: any) => {
    setShortTab(index);
    setSelectIndex(index);
    if (index == 0) {
      console.log('all');
      setSelectAll(index);
      setSelectSub('');
    }
    if (index == 1) {
      console.log('sub');
      setSelectSub(index);
      console.log('sub select', selectSub);
      setSelectAll('');
    }
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

        <div className='mt-6 grid grid-cols-3 gap-4'>
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
                      <div className='h-5 w-5'>
                        <Image
                          className='h-full w-full'
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

        <div className='mt-4 flex gap-4'>
          <div className='flex w-2/3 flex-col gap-4'>
            <div className='flex  flex-col gap-2 rounded-[16px] bg-[#121212] p-5'>
              {/* top */}
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
                    Year
                  </div>
                  <Image src={arrowDown} alt={''} />
                </div>
              </div>
              {/* bottom */}
              <div className='flex flex-col items-start gap-8 self-stretch'>
                {/* values */}
                <div className='flex items-start justify-between self-stretch'>
                  {/* total revenue */}
                  <div className='flex flex-col items-start gap-1 '>
                    <div className='flex	 flex-col items-start gap-0.5'>
                      <label className='text-[13px] font-normal leading-[18px] text-[#979797]'>
                        Total Revenue
                      </label>
                      <div className='text-4xl font-bold leading-[48px]'>
                        {showChanges ? '$42,726' : '$0'}
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center gap-1'>
                        <div className='h-5 w-5'>
                          {showChanges ? (
                            <Image src={greenArrowUp} />
                          ) : (
                            <Image src={arrowNarrowRight} />
                          )}
                        </div>
                        {showChanges ? (
                          <div className='text-[15px] font-normal leading-5 text-[#5AD02E]'>
                            20.7%
                          </div>
                        ) : (
                          <div className='text-[15px] font-normal leading-5 text-[#979797]'>
                            0%
                          </div>
                        )}
                      </div>
                      <div className='text-[15px] font-normal leading-5'>
                        {showChanges
                          ? '+ $7k earnings this month'
                          : '+ $0 earnings this month'}
                      </div>
                    </div>
                  </div>
                  {/* available cash */}
                  <div className='flex items-center gap-[50px] self-stretch border-l border-white/[0.08] border-l-white/[0.08] pl-0'>
                    <div className='flex flex-col items-start gap-1 pl-10'>
                      <label className='font-[13px] font-normal leading-[18px] text-[#979797]'>
                        Available to cashout
                      </label>
                      <div className='flex items-center gap-2'>
                        <div className='text-3xl font-bold leading-10'>
                          {showChanges ? '$22,121.5' : '$0'}
                        </div>
                      </div>
                    </div>
                    <button className='items-center justify-center gap-1.5 rounded-xl bg-[#5848BC] px-4	py-2.5'>
                      <div
                        className='text-[14px] font-bold leading-5'
                        onClick={() => {
                          setShowCashoutModal(true), setAnalyticsPage(true);
                        }}
                      >
                        Cash out
                      </div>
                    </button>
                  </div>
                </div>
                {/* graph */}
                <div className='flex items-start gap-3 self-stretch'>
                  {/* amount */}
                  <div className='mt-4 flex h-[174px] flex-col items-end justify-between text-[#979797]'>
                    {amount.map((data) => {
                      return (
                        <div className='text-center text-[11px] font-bold uppercase leading-4 tracking-[0.3px]'>
                          {data.name}
                        </div>
                      );
                    })}
                  </div>
                  {/* dates graph */}
                  <div className='flex flex-col items-start gap-4 '>
                    {/* graph */}
                    <div className='flex h-[174px] flex-col items-center justify-center self-stretch'>
                      {showChanges ? (
                        <div>
                          <div className='relative mt-9  flex w-[600px] flex-col items-start gap-10'>
                            <div className='h-px w-[100%] shrink-0 self-stretch bg-white/[0.08]'></div>
                            <div className='h-px w-[100%] shrink-0 self-stretch bg-white/[0.08]'></div>
                            <div className='h-px w-[100%] shrink-0 self-stretch bg-white/[0.08]'></div>
                            <div className='h-px w-[100%] shrink-0 self-stretch bg-white/[0.08]'></div>
                            <div className='h-px w-[100%] shrink-0 self-stretch bg-white/[0.08]'></div>

                            <div className='absolute mt-[-82px]'>
                              {selectSub ? (
                                <BarChart
                                  width={620}
                                  height={300}
                                  data={data}
                                  margin={{
                                    top: 20,
                                    right: 30,
                                    left: 10,
                                    bottom: 24
                                  }}
                                >
                                  {/* <CartesianGrid /> */}
                                  <XAxis dataKey='name' />
                                  {/* <YAxis /> */}
                                  {/* <Tooltip /> */}
                                  {/* <Legend /> */}
                                  <Bar
                                    dataKey='pv'
                                    stackId='a'
                                    fill='#996BE0'
                                    radius={[0, 0, 5, 5]}
                                    className='cursor-pointer '
                                  />
                                  <Bar
                                    dataKey='pv'
                                    stackId='a'
                                    fill='#996BE0'
                                    className='cursor-pointer '
                                  />
                                  <Bar
                                    dataKey='pv'
                                    stackId='a'
                                    fill='#996BE0'
                                    className='cursor-pointer '
                                  />
                                  <Bar
                                    dataKey='uv'
                                    stackId='a'
                                    fill='#996BE0'
                                    className='cursor-pointer '
                                  />
                                  <Bar
                                    dataKey='pv'
                                    stackId='a'
                                    fill='#996BE0'
                                    radius={[5, 5, 0, 0]}
                                    className='cursor-pointer '
                                  />
                                </BarChart>
                              ) : (
                                <BarChart
                                  width={620}
                                  height={300}
                                  data={data}
                                  margin={{
                                    top: 20,
                                    right: 30,
                                    left: 10,
                                    bottom: 24
                                  }}
                                >
                                  {/* <CartesianGrid /> */}
                                  <XAxis dataKey='name' />
                                  {/* <YAxis /> */}
                                  {/* <Tooltip /> */}
                                  {/* <Legend /> */}
                                  <Bar
                                    dataKey='pv'
                                    stackId='a'
                                    fill='#996BE0'
                                    radius={[0, 0, 5, 5]}
                                    className='cursor-pointer '
                                  />
                                  <Bar
                                    dataKey='pv'
                                    stackId='a'
                                    fill='#E295F9'
                                    className='cursor-pointer '
                                  />
                                  <Bar
                                    dataKey='pv'
                                    stackId='a'
                                    fill='#779DF8'
                                    className='cursor-pointer '
                                  />
                                  <Bar
                                    dataKey='uv'
                                    stackId='a'
                                    fill='#EFAC6A'
                                    className='cursor-pointer '
                                  />
                                  <Bar
                                    dataKey='pv'
                                    stackId='a'
                                    fill='#E2F47A'
                                    radius={[5, 5, 0, 0]}
                                    className='cursor-pointer '
                                  />
                                </BarChart>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className='relative mt-9  flex w-[600px] flex-col items-start gap-10'>
                            <div className='h-px w-[100%] shrink-0 self-stretch bg-white/[0.08]'></div>
                            <div className='h-px w-[100%] shrink-0 self-stretch bg-white/[0.08]'></div>
                            <div className='h-px w-[100%] shrink-0 self-stretch bg-white/[0.08]'></div>
                            <div className='h-px w-[100%] shrink-0 self-stretch bg-white/[0.08]'></div>
                            <div className='h-px w-[100%] shrink-0 self-stretch bg-white/[0.08]'></div>
                          </div>
                        </div>
                      )}
                    </div>
                    {showChanges ? (
                      <div>
                        {/* bottom line */}
                        <div className='ml-5 mt-4 flex items-center gap-[26px] self-stretch'>
                          {month.map((data) => {
                            return (
                              <div className='text-[11px] font-bold uppercase leading-4 tracking-[0.3px] text-[#979797]'>
                                {data.name}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                {/* here  */}
                {showChanges ? (
                  <div className='flex flex-col'>
                    <div className='mt-2 flex items-center justify-center gap-6 self-stretch'>
                      {/* item */}

                      <div className='flex items-center gap-2'>
                        <div
                          className={`h-2.5 w-4 rounded-sm bg-[#996BE0]`}
                        ></div>
                        <label className='text-[13px] font-normal leading-[18px]'>
                          Subs
                        </label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div
                          className={`h-2.5 w-4 rounded-sm bg-[#E295F9]`}
                        ></div>
                        <label className='text-[13px] font-normal leading-[18px]'>
                          Requests
                        </label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div
                          className={`h-2.5 w-4 rounded-sm bg-[#779DF8]`}
                        ></div>
                        <label className='text-[13px] font-normal leading-[18px]'>
                          Gifts
                        </label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div
                          className={`h-2.5 w-4 rounded-sm bg-[#EFAC6A]`}
                        ></div>
                        <label className='text-[13px] font-normal leading-[18px]'>
                          General chatting
                        </label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div
                          className={`h-2.5 w-4 rounded-sm bg-[#E2F47A]`}
                        ></div>
                        <label className='text-[13px] font-normal leading-[18px]'>
                          Style royalties
                        </label>
                      </div>
                    </div>
                    {/* types */}

                    <div className='mt-5 flex items-center justify-center gap-6 self-stretch '>
                      {types.map((item, index) => (
                        <div
                          className='flex items-center gap-2'
                          onClick={() => SelectShort(index)}
                        >
                          {shortTab == index ? (
                            <SelectIcon />
                          ) : (
                            <UnSelectIcon />
                          )}
                          <p className='text-sm font-normal leading-[18px]'>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
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
                <div className='flex w-1/2 flex-col gap-4'>
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
          <div className='flex w-1/3 flex-col gap-4'>
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
