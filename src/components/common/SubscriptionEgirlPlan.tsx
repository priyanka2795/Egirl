import React from 'react';
import PointedStarIcon from './svg/pointed-star-icon.svg';
import Ellipse from './svg/ellipse.svg';
import Star from './svg/star.svg';
import heartIcon from '@/assets/heart-icon.webp';
import starIcon from '@/assets/blue-start-icon.webp';
import Image from 'next/image';

const egirlPlan = [
  '2000 tokens per month',
  '2 free subs per month',
  '5 free gifts per month'
];

const freePlan = ['50 free tokens a month'];

interface EgirlPlanProp {
  closeModal: any
}
const SubscriptionEgirlPlan = ({ closeModal }: EgirlPlanProp) => {
  return (
    <>
      {/* <h5 className='mb-4 text-[22px] font-bold text-white'>Features:</h5> */}
      <div className='grid grid-cols-2 gap-4'>
        <div className='rounded-[14px] bg-[#1A1A1A]  '>

          {/* <Image src={starIcon} alt='' className='w-[56px] object-contain' /> */}
          <div className='border-b-2 border-[#ffffff0e] p-5 pb-4'>
            <h6 className='text-[15px] text-[#979797]'>Default</h6>
            <h3 className='text-[30px] font-bold'>Free</h3>
            <button className='mt-4 w-full rounded-[14px] py-[13px] font-bold bg-[#FFFFFF14] opacity-30' onClick={() => closeModal(false)}>
              Current
            </button>
          </div>
          <div className='p-5'>
            <p className='pb-2 font-semibold'>Features:</p>

            {freePlan.map((items) => {
              return (
                <>
                  <div className='flex items-center gap-1 mb-3 last:mb-0 '>
                    <Ellipse />
                    <p className='text-[14px]'>{items}</p>
                  </div>
                </>
              );
            })}
          </div>

        </div>
        <div className='rounded-[14px] bg-[#5848BC]'>
          <div className='p-5 pb-4 border-b-2 border-[#ffffff0e] '>
            <div className='flex justify-between '>
              <div>
                <h6 className='text-[15px] text-[#FFFFFFCC]'>Egirls+</h6>
                <h3 className='text-[30px] font-bold'>$19.99</h3>
              </div>
              <div className='min-h-[26px] w-[92px] flex justify-center items-center self-start gap-1 border border-[#ffffff21] rounded-full break-all '>
                <Star />
                <p className='text-xs'>Best value</p>
              </div>
            </div>
            <button className='mt-4 w-full text-black rounded-[14px] bg-[#fff] py-[13px] font-bold' onClick={() => closeModal(false)}>
              Subscribe
            </button>
          </div>
          <div className='p-5'>
            <p className='pb-2 font-semibold'>Features:</p>
            {egirlPlan.map((items) => {
              return (
                <>
                  <div className='flex items-center gap-1 mb-3 leading-3 last:mb-0'>
                    <Ellipse />
                    <p className='text-[14px]'>{items}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>

      </div>

  
    </>
  );
};

export default SubscriptionEgirlPlan;
