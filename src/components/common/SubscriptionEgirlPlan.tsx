import React from 'react';
import PointedStarIcon from './svg/pointed-star-icon.svg';
import heartIcon from '../../../public/assets/heart-icon.png';
import starIcon from '../../../public/assets/blue-start-icon.png';
import Image from 'next/image';

const egirlPlan = [
  '2000 tokens per month',
  '2 free subs per month',
  '5 free gifts per month'
];

const freePlan = ['50 free tokens a month'];

interface EgirlPlanProp{
    closeModal: any
}
const SubscriptionEgirlPlan = ({closeModal}:EgirlPlanProp) => {
  return (
    <>
      {/* <h5 className='mb-4 text-[22px] font-bold text-white'>Features:</h5> */}
      <div className='grid grid-cols-2 gap-4'>
        <div className='rounded-[14px] bg-[#121212]  px-8 pb-6 pt-8'>
          <div className='flex gap-4 pb-6'>
            <Image src={starIcon} alt='' className='w-[56px] object-contain' />
            <div>
              <h6 className='text-[15px] text-[#979797]'>Current</h6>
              <h3 className='text-[26px] font-bold'>Free</h3>
            </div>
          </div>
          {freePlan.map((items) => {
            return (
              <>
                <div className='flex items-center gap-1 mb-3 last:mb-0 '>
                  <PointedStarIcon />
                  <p className='text-[14px]'>{items}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className='rounded-[14px] bg-[#121212] px-8 pb-6 pt-8'>
          <div className='flex gap-4 pb-6'>
            <Image src={heartIcon} alt='' className='w-[56px] object-contain' />
            <div>
              <h6 className='text-[15px] text-[#979797]'>Egirls+</h6>
              <h3 className='text-[26px] font-bold'>$19.99</h3>
            </div>
          </div>
          {egirlPlan.map((items) => {
            return (
              <>
                <div className='flex items-center gap-1 mb-3 last:mb-0 '>
                  <PointedStarIcon />
                  <p className='text-[14px]'>{items}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <button className='mt-4 w-full rounded-[14px] py-5 py-[13px] font-bold border border-white border-opacity-30' onClick={() => closeModal(false)}>
          Cancel
        </button>
        <button className='mt-4 w-full rounded-[14px] bg-[#5848BC] py-5 py-[13px] font-bold' onClick={() => closeModal(false)}>
          Subscribe
        </button>
      </div>
    </>
  );
};

export default SubscriptionEgirlPlan;
