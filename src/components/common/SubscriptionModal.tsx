import { Modal } from '@components/modal/modal';
import React, { useState } from 'react';
import Bolt from './svg/boltIcon.svg';
import BoltPrimary from './svg/bolt-primary.svg';
import SubscriptionEgirlContent from './SubscriptionEgirlContent';
import SubscriptionBuyContent from './SubscriptionBuyContent';
import CloseIcon from '@/assets/svgImages/close-icon.svg'
import SubscriptionEgirlPlan from './SubscriptionEgirlPlan';
import CircleQuestion from './svg/circle-question.svg';
import TokenUser from './TokenUses';
import ErrorPage from '@components/add-card/ErrorPage';
import SuccessPage from '@components/add-card/SuccessPage';

interface subscription {
  closeState?: any;
  showSubscription?: boolean;
}
const tabOption = ['Egirls+', 'Buy Tokens'];
const featureOpt = [
  '200 credits per month',
  '2 free subs per month',
  'Faster generation times',
  'Access to all premium features, present and future'
];
const SubscriptionModal = ({ closeState, showSubscription }: subscription) => {
  const [tokenModal, setTokenModal] = useState(false)
  const [tabSelectedOpt, setTabSelectedOpt] = useState(showSubscription ? 'Buy Tokens' : 'Egirls+');
  const handleActiveTab = (items: any) => {
    setTabSelectedOpt(items)
    console.log(items, "hweee>>>>");
  }
  const [showErrorPage, setShowErrorPage] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  
  return (
    <div>
      {tokenModal ?
        <TokenUser modalState={setTokenModal} /> :
        <Modal
          open={true}
          modalClassName={`flex flex-col gap-6 w-full p-6 rounded-2xl h-max max-w-[608px] max-h-[474px] relative ${tabSelectedOpt === "Egirls+" ? "bg-[#121212]" : "bg-[#121212]"} `}
          closeModal={() => closeState(false)}
          modalOverlayStyle='!bg-black/80'
        >
          { showSuccessPage ? (
            <SuccessPage closeSuccessPage={setShowSuccessPage} message={'You have purchased XXXX tokens. You can check your tokens in the profile menu'}  />
            ): showErrorPage? (
              <ErrorPage closeErrorPage={setShowErrorPage} />
            ):
            <>
              <div className='absolute cursor-pointer right-5 top-5' onClick={() => closeState(false)}>
                <CloseIcon />
              </div>

              <div className='mx-auto flex max-w-[376px] items-center rounded-full border p-1.5 border-[#ffffff46]'>

                {tabOption.map((items) => {
                  return (
                    <div
                      onClick={(e) => handleActiveTab(items)}
                      className={`max-w-[188px] cursor-pointer px-3 py-[10px] text-center flex items-center flex-shrink-0 justify-between gap-1 ${tabSelectedOpt === items
                        ? 'rounded-full bg-white text-[#121212] '
                        : ''
                        }`}
                    >
                      {items}
                      {items === 'Egirls+' ? <div className={`text-xs py-[4px] px-2 rounded-full flex items-center flex-shrink-0 bg-[#5748bc33]  ${tabSelectedOpt === "Egirls+" ? 'text-[#5848BC]' : 'text-[#ADA3DD]' } `}> <BoltPrimary />Save up to 25%</div>
                        :''
                      }

                    </div>
                  );
                })}
              </div>

              {
                showSubscription ? <SubscriptionBuyContent closeErrorPage={setShowErrorPage} closeSuccessPage={setShowSuccessPage} /> : (tabSelectedOpt === "Egirls+" ? <SubscriptionEgirlPlan closeModal={closeState} /> : <SubscriptionBuyContent closeErrorPage={setShowErrorPage} closeSuccessPage={setShowSuccessPage} />)
                // showSubscription ? <SubscriptionBuyContent/> : (tabSelectedOpt === "Egirls+" ? <SubscriptionEgirlContent /> : <SubscriptionBuyContent/>)
              }
              <div className='flex items-center justify-center gap-1'>
                <button className='text-xs text-center ' onClick={() => setTokenModal(true)}>
                  How are tokens used
                </button>
                <CircleQuestion />
              </div>
            </>
          }
        </Modal>

      }

    </div>
  );
};

export default SubscriptionModal;
