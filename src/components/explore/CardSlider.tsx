import React, { useState } from 'react';
import cardImg from '../../../public/assets/explore/explore-img.png';
import Image from 'next/image';
import RedCloseIcon from './svg/red-cross-icon.svg';
import UserIcon from './svg/user-icon.svg';
import GreenHeartIcon from './svg/green-heart-icon.svg';
import VerifiedIcon from './svg/verified-icon.svg';
import InfoIcon from './svg/info-icon.svg';
import Card from './Card';
import SubscriptionPlan from './SubscriptionPlan';
import TinderCardTab from './TinderCardTab';

interface cardSliderProp {
  infoModalCard: boolean;
  setInfoModalCard: React.Dispatch<React.SetStateAction<boolean>>;
}
const CardSlider = ({ infoModalCard, setInfoModalCard }: cardSliderProp) => {
  const [subscriptionModalState, setSubscriptionModalState] = useState(false);
  return (
    <>
      {/* <div className='relative mx-auto mt-[77px] w-max'> */}
      {/* <Image src={cardImg} alt='' /> */}
      <div className='absolute bottom-0 right-0 inline-flex w-full items-center justify-start bg-gradient-to-b from-transparent to-black px-6 pb-6 pt-[205px]'>
        <div className='flex-col items-center self-stretch justify-start w-full gap-8 '>
          <div className='flex flex-col items-start justify-center gap-2'>
            {/* {infoModalCard === false ? ( */}
              <>
                <div className='flex items-center justify-between w-full'>
                  <div className='flex items-center text-[26px] font-bold leading-[26px] leading-loose text-white'>
                    Mika-chan
                    <VerifiedIcon />
                  </div>
                  <div className="cursor-pointer" 
                  // onClick={() => setInfoModalCard(true)}
                  >
                    <InfoIcon />
                  </div>
                </div>

                <TinderCardTab />
               </>
          {/*  ) : null} */}
          </div>
          <div className='inline-flex items-center justify-center w-full gap-8 mt-8'>
            <div className='card-bottom-button flex items-start justify-start gap-2.5 rounded-[100px] border-2 border-red-500 p-6 backdrop-blur-[15px]'>
              <div className='relative w-8 h-8'>
                <RedCloseIcon />
              </div>
            </div>
            <div
              className='card-bottom-button relative z-[40] flex items-start justify-start gap-2.5 rounded-[100px] border-2 border-indigo-700 p-6'
              onClick={() => {
                setSubscriptionModalState(true);
              }}
            >
              <div className='relative h-8 w-8 backdrop-blur-[88px]'>
                <UserIcon />
              </div>
            </div>
            <div className='card-bottom-button flex h-20 w-20 items-center justify-center gap-2.5 rounded-[100px] border-2   border-lime-500 px-6 pb-6 pt-[26px] backdrop-blur-[15px]'>
              <div className='relative w-8 h-8'>
                <GreenHeartIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {subscriptionModalState && (
        <SubscriptionPlan closeDefaulModal={setSubscriptionModalState} />
      )}
    </>
  );
};

export default CardSlider;
