import React from 'react'
import HeartIcon from './svg/heart-icon.svg';
import StarIcon from './svg/star-icon.svg';
import PointedStarIcon from './svg/pointed-star-icon.svg';

const featureOpt = [
    '200 credits per month',
    '2 free subs per month',
    'Faster generation times',
    'Access to all premium features, present and future'
  ];
const SubscriptionEgirlContent = () => {
  return (
    <>
       <div className='flex items-center justify-between p-8 blue-gradient rounded-xl '>
          <div className='flex items-center gap-4'>
            <HeartIcon />
            <h4 className='text-[26px] font-bold'>Egirls+</h4>
          </div>
          <button className='flex h-max items-center gap-1 rounded-[10px] border-none bg-[#5848bc]/[0.48] px-3 py-[7px] outline-none text-sm'>
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

        <button className='mt-4 w-full rounded-[14px] bg-[#5848BC] py-5 py-[13px] font-bold'>
          $14.99 per month
        </button>
    </>
  )
}

export default SubscriptionEgirlContent
