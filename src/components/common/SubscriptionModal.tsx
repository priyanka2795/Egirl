import { Modal } from '@components/modal/modal';
import React, { useState } from 'react';
import Bolt from './svg/boltIcon.svg';
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
          <Bolt />
          <div className='text-sm font-normal leading-none text-center text-white Get25MoreTokenValueWithEgirls'>
            Get 25% more token value with Egirls+
          </div>
        </div>
        {
          showSubscription ? <SubscriptionBuyContent/> : (tabSelectedOpt === "Egirls+" ? <SubscriptionEgirlContent /> : <SubscriptionBuyContent/>)
        }
        
      </Modal>
    </div>
  );
};

export default SubscriptionModal;
