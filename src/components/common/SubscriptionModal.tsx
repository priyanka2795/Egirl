import { Modal } from '@components/modal/modal';
import React, { useState } from 'react';
import Bolt from './svg/boltIcon.svg';
import HeartIcon from './svg/heart-icon.svg';
import StarIcon from './svg/star-icon.svg';
import PointedStarIcon from './svg/pointed-star-icon.svg';
import SubscriptionEgirlContent from './SubscriptionEgirlContent';
import SubscriptionBuyContent from './SubscriptionBuyContent';
import CloseIcon from '../../../public/assets/svgImages/close-icon.svg'

interface subscription {
  closeState?: any;
  showSubscription: boolean;
}
const tabOption = ['Egirls+', 'Buy Tokens'];
const featureOpt = [
  '200 credits per month',
  '2 free subs per month',
  'Faster generation times',
  'Access to all premium features, present and future'
];
const SubscriptionModal = ({ closeState, showSubscription }: subscription) => {
  const [tabSelectedOpt, setTabSelectedOpt] = useState(showSubscription ? 'Buy Tokens' : 'Egirls+');
  const handleActiveTab = (items: any) =>{
    setTabSelectedOpt(items)
    console.log(items , "hweee>>>>")
  }
  return (
    <div>
      <Modal
        open={true}
        modalClassName='flex flex-col gap-6 max-w-xl w-full p-8 rounded-2xl h-max bg-[#121212] max-w-[550px] relative'
        closeModal={() => closeState(false)}
        modalOverlayStyle='!bg-black/80'
      >
         <div className='absolute cursor-pointer right-5 top-5' onClick={() => closeState(false)}>
              <CloseIcon/>
          </div>
         
        <div className='mx-auto flex max-w-[376px] items-center rounded-full bg-white/10'>
       
          {tabOption.map((items) => {
            return (
              <div
                onClick={(e) => handleActiveTab(items)}
                className={`w-[188px] cursor-pointer px-4 py-[10px] text-center ${
                  tabSelectedOpt === items
                    ? 'rounded-full bg-white text-[#121212] '
                    : ''
                }`}
              >
                {items}
              </div>
            );
          })}
        </div>

        <div className='mx-auto inline-flex h-8 w-max items-center justify-center gap-1 rounded-3xl border border-white border-opacity-20 px-3 py-1.5'>
          {/* <div className='relative w-4 h-4 Bolt' /> */}
          <Bolt />
          <div className='text-sm font-normal leading-none text-center text-white Get25MoreTokenValueWithEgirls'>
            Get 25% more token value with Egirls+
          </div>
        </div>

        {/* <div className='flex items-center justify-between p-8 blue-gradient rounded-xl '>
          <div className='flex gap-4'>
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
        </button> */}
        {
          showSubscription ? (<> {() => {handleActiveTab('Buy Tokens')}} <SubscriptionBuyContent/> </>) : (tabSelectedOpt === "Egirls+" ? <SubscriptionEgirlContent /> : <SubscriptionBuyContent/>)
        }
        
      </Modal>
    </div>
  );
};

export default SubscriptionModal;
