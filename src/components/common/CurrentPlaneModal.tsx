import React from 'react';
import HeartIcon from './svg/heart-icon.svg';
import StarIcon from './svg/star-icon.svg';
import PointedStarIcon from './svg/pointed-star-icon.svg';
import { Modal } from '@components/modal/modal';
import CloseIcon from '../../../public/assets/svgImages/close-icon.svg'

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

interface CurrentPlaneProp{
    closeState:React.Dispatch<React.SetStateAction<boolean>>,
}
const CurrentPlaneModal = ({closeState}:CurrentPlaneProp) => {
  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col gap-6 w-full pt-10 pb-8 px-8 rounded-2xl h-max bg-[#121212] max-w-[550px] relative'
        closeModal={() => closeState(false)}
        
        modalOverlayStyle='!bg-black/80'
      >
         <div className='absolute cursor-pointer right-6 top-6' onClick={() => closeState(false)}><CloseIcon/></div>
        
        <div>
          <h3 className='text-[22px] font-bold leading-loose text-white '>
            You are currently on a free plan
          </h3>
          <ul className="ml-[14px] list-disc max-w-[80%]">
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
        <button className='mt-4 w-full rounded-[14px] bg-[#5848BC] py-5 py-[13px] font-bold' onClick={() => closeState(false)}>
          $14.99 per month
        </button>
      </Modal>
    </>
  );
};

export default CurrentPlaneModal;
