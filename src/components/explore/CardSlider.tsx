import React, { useState } from 'react';
import RedCloseIcon from './svg/xmark.svg';
import UserIcon from './svg/user-check-alt-1.svg';
import GreenHeartIcon from './svg/heart.svg';
import VerifiedIcon from './svg/verified-icon.svg';
import InfoIcon from './svg/info-icon.svg';
import CardArrowDown from './svg/cardArrowDown.svg';
import SubscriptionPlan from './SubscriptionPlan';
import TinderCardTab from './TinderCardTab';

interface cardSliderProp {
  infoModalCard: boolean;
  subscriptionModalState: boolean;
  setInfoModalCard: React.Dispatch<React.SetStateAction<boolean>>;
  showSingleProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setSubscriptionModalState: React.Dispatch<React.SetStateAction<boolean>>;
}
const CardSlider = ({
  infoModalCard,
  setInfoModalCard,
  showSingleProfile,
  subscriptionModalState,
  setSubscriptionModalState
}: cardSliderProp) => {
  const [largeContentState, setLargeContentState] = useState(false);
  return (
    <>
      <div
        className={`absolute bottom-0 right-0 inline-flex w-full items-center justify-start px-6 pb-6 ${
          largeContentState
            ? 'bg-[#121212] pt-6'
            : 'bg-gradient-to-b from-transparent to-black pt-[205px]'
        }`}
      >
        <div className='z-[10] w-full flex-col items-center justify-start gap-8 self-stretch'>
          <div className='flex flex-col items-start justify-center gap-2'>
            <div className='flex w-full items-center justify-between'>
              <div className='font-bold flex items-center text-[26px] leading-[26px] leading-loose text-white'>
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
          <div className='mt-8 flex w-full items-center justify-center gap-8'>
            <div className='flex h-[80px] w-[80px] items-center justify-center rounded-full border-[3px] border-[#FF5336]'>
              <div className='h-8 w-8 '>
                <RedCloseIcon />
              </div>
            </div>
            <div
              className='flex h-[80px] w-[80px] items-center justify-center rounded-full border-[3px] border-[#5848BC]'
              onClick={() => {
                setSubscriptionModalState(true);
              }}
            >
              <div className='h-8 w-8 '>
                <UserIcon />
              </div>
            </div>
            <div className='flex h-[80px] w-[80px] items-center justify-center rounded-full border-[3px] border-[#5AD02E]'>
              <div className='h-8 w-8 '>
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
