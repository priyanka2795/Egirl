import React from 'react';
import HeartIcon from './svg/heart-icon.svg';
import StarIcon from './svg/star-icon.svg';
import PointedStarIcon from './svg/pointed-star-icon.svg';
import { Modal } from '@components/modal/modal';
import CloseIcon from '@/assets/svgImages/close-icon.svg';
import Token from './svg/token2.svg';
import TokenPrimary from './svg/tokenprimary.svg';
import Image from 'next/image';
import downArrow from '@/assets/down-arrow-img.webp';
const featureOpt = [
  '2000 tokens per month',
  '2 free subs per month ',
  '5 free gifts per month',
  'Early access to all new features'
];

const currentPlan = [
  'The free plan includes 50 free tokens a month',
  '1 message = 1 token',
  'If you use up all your tokens, you can purchase more or upgrade to Egirls+'
];

const tokenData = [
  {
    title: 'Text messages',
    count: 1,
    text: 'Enjoy 5% earnings based on user spending, no referrals required'
  },
  {
    title: 'Voice messages',
    count: 5,
    text: 'Enjoy 5% earnings based on user spending, no referrals required'
  },
  {
    title: 'Gifts',
    count: 10,
    text: 'Level up to 10% earnings by referring 100 people'
  },
  {
    title: 'Image requests',
    count: 10,
    text: 'Rich the pinnacle of 15% earnings by referring 1000 people'
  }
];

interface CurrentPlaneProp {
  closeState: React.Dispatch<React.SetStateAction<boolean>>;
}
const CurrentPlaneModal = ({ closeState }: CurrentPlaneProp) => {
  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col gap-6 w-full  rounded-2xl h-max bg-[#121212] max-w-[430px] relative'
        closeModal={() => closeState(false)}
        modalOverlayStyle='!bg-black/80'
      >
        {/* <div
          className='absolute cursor-pointer right-6 top-6'
          onClick={() => closeState(false)}
        >
          <CloseIcon />
        </div> */}

        {/* <div>
          <h3 className='text-[22px] font-bold leading-loose text-white '>
            You are currently on a free plan
          </h3>
          <ul className='ml-[14px] max-w-[80%] list-disc'>
            {currentPlan.map((items) => {
              return <li className='text-[15px] text-[#979797]'>{items}</li>;
            })}
          </ul>
        </div>
        <div className='flex items-center justify-between p-8 blue-gradient rounded-xl '>
          <div className='flex items-center gap-4'>
            <HeartIcon />
            <h4 className='text-[26px] font-bold'>Egirls+</h4>
          </div>
          <button className='flex h-max items-center gap-1 rounded-[10px] border-none bg-[#5848bc]/[0.48] px-3 py-[7px] text-sm outline-none'>
            <StarIcon />
            Subscription
          </button>
        </div>
        <div className='rounded-[14px] border border-[#5848BC] bg-[#1A1A1A] p-8'>
          <h5 className='mb-4 text-[22px] font-bold text-white'>Features:</h5>
          {featureOpt.map((items) => {
            return (
              <div className='flex items-center gap-1 mb-3 last:mb-0'>
                <PointedStarIcon />
                <p className='text-[15px]'>{items}</p>
              </div>
            );
          })}
        </div>
        <button
          className='mt-4 w-full rounded-[14px] bg-[#5848BC] py-5 py-[13px] font-bold'
          onClick={() => closeState(false)}
        >
          $14.99 per month
        </button> */}
        <div className='pt-6 pb-8 '>
          <div className='flex justify-between border-b-[1px] border-zinc-800 px-7 pb-4'>
            <h3 className='text-[18px] font-bold leading-loose text-white '>
              Token uses
            </h3>
            <div className='flex items-center gap-5 '>
              <div className='flex items-center gap-1 '>
                <div className='relative flex flex-col items-center group'>
                  <Token className='cursor-pointer' />
                  <div className='absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex'>
                    <span className='whitespace-no-wrap relative z-10  rounded-sm bg-[#303030] p-2 text-xs font-normal leading-none text-white shadow-lg'>
                      Token
                    </span>
                    <div className='-mt-2 h-3 w-3 rotate-45 bg-[#303030]'></div>
                  </div>
                </div>

                <div className='text-[15px] font-semibold text-[#979797]'>
                  50
                </div>
              </div>
              <div
                className='cursor-pointer '
                onClick={() => closeState(false)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>

          <div className='px-8 pt-5 pb-2'>
            {tokenData.map((items, index) => {
              return (
                <div
                  className='mb-3 border-b-[1px] border-zinc-800 py-1 pb-5 last:mb-0 last:border-b-0'
                  key={index}
                >
                  <div className='flex gap-4'>
                    <h5 className=' text-[22px] font-bold text-white'>
                      {items.title}
                    </h5>
                    <div className='flex h-[30px] w-[50px] items-center justify-center gap-1 rounded-[8px] bg-[#26233f]'>
                      <div className='relative flex flex-col items-center group'>
                        <TokenPrimary className='cursor-pointer' />
                        <div className='absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex'>
                          <span className='whitespace-no-wrap relative z-10 rounded-md bg-[#303030] p-2 text-xs font-normal leading-none text-white shadow-lg'>
                            Token
                          </span>
                          <div className='-mt-2 h-3 w-3 rotate-45 bg-[#303030]'></div>
                        </div>
                      </div>
                      <div className='text-[13px]'>{items.count}</div>
                    </div>
                  </div>
                  <p className='pt-1 text-[14px] text-[#979797]'>
                    {items.text}
                  </p>
                </div>
              );
            })}
          </div>
          <div className='px-8'>
            <button
              className=' w-full rounded-[14px] bg-[#5848BC]  py-5 py-[13px] font-bold'
              onClick={() => closeState(false)}
            >
              Get more tokens
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CurrentPlaneModal;
