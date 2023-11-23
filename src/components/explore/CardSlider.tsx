import React, { useState } from 'react';
import cardImg from '../../../public/assets/explore/explore-img.png';
import Image from 'next/image';
import RedCloseIcon from './svg/xmark.svg';
import UserIcon from './svg/user-check-alt-1.svg';
import GreenHeartIcon from './svg/heart.svg';
import VerifiedIcon from './svg/verified-icon.svg';
import InfoIcon from './svg/info-icon.svg';
import CardArrowDown from './svg/cardArrowDown.svg';
import Card from './Card';
import SubscriptionPlan from './SubscriptionPlan';
import TinderCardTab from './TinderCardTab';

interface cardSliderProp {
  infoModalCard: boolean;
  setInfoModalCard: React.Dispatch<React.SetStateAction<boolean>>;
  showSingleProfile: React.Dispatch<React.SetStateAction<boolean>>;
}
const CardSlider = ({ infoModalCard, setInfoModalCard ,showSingleProfile}: cardSliderProp) => {
  const [subscriptionModalState, setSubscriptionModalState] = useState(false);
  const [largeContentState, setLargeContentState] = useState(false);
  return (
    <>
      {/* <div className='relative mx-auto mt-[77px] w-max'> */}
      {/* <Image src={cardImg} alt='' /> */}
      <div
        className={`absolute bottom-0 right-0 inline-flex w-full items-center justify-start px-6 pb-6 ${
          largeContentState
            ? 'bg-[#121212] pt-6'
            : 'bg-gradient-to-b from-transparent to-black pt-[205px]'
        }`}
      >
        <div className='z-[10] w-full flex-col items-center justify-start gap-8 self-stretch'>
          <div className='flex flex-col items-start justify-center gap-2'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center text-[26px] font-bold leading-[26px] leading-loose text-white'>
                Mika-chan
                <VerifiedIcon />
              </div>
              <div
                className='cursor-pointer'
                onClick={() => {
                  setInfoModalCard(!infoModalCard),
                    setLargeContentState(!infoModalCard);
                }}
              >
                {infoModalCard === false ? <InfoIcon /> : <CardArrowDown />}
              </div>
            </div>

            <TinderCardTab
              largeContentState={largeContentState}
              largeContent={setLargeContentState}
              showSingleProfile={showSingleProfile}
            />
          </div>
          <div className='flex items-center justify-center w-full gap-8 mt-8'>
            <div className='flex items-center justify-center rounded-full border-[3px] border-[#FF5336] w-[80px] h-[80px]'>
              <div className='w-8 h-8 '>
                <RedCloseIcon  />
              </div>
            </div>
            <div
              className='flex items-center justify-center rounded-full border-[3px] border-[#5848BC] w-[80px] h-[80px]'
              onClick={() => {
                setSubscriptionModalState(true);
              }}
            >
              <div className='w-8 h-8 '>
                <UserIcon />
              </div>
            </div>
            <div className='flex items-center justify-center rounded-full border-[3px] border-[#5AD02E] w-[80px] h-[80px]'>
              <div className='w-8 h-8 '>
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
