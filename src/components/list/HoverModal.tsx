import React, { useState } from 'react';
import CloseIcon from '../../../public/assets/svgImages/close-icon.svg';
import arrowLeft from '../../../public/assets/arrow-left.png';
import downArrow from '../../../public/assets/arrow-down-grey.png';
// import downArrow from '../../../public/assets/down-arrow-img.png';
import Image from 'next/image';

interface HoverModalProp {
  isOpen: any;
  onClose: any;
  tourSteps: any;
  tourCount: number;
  SetIsTourOpen?: any;
  setTourCount: React.Dispatch<React.SetStateAction<number>>;
}

const HoverModal = ({
  isOpen,
  onClose,
  tourSteps,
  tourCount,
  SetIsTourOpen,
  setTourCount
}: HoverModalProp) => {
  const handleNextStep = () => {
    setTourCount(tourCount + 1);
  };
  console.log(tourCount, 'tourCount added');

  const handlePrevStep = () => {
    console.log(tourCount, 'test count');
    setTourCount(tourCount - 1);
  };

  const handleClose = () => {
    setTourCount(0);
    onClose();
  };
  // Guide  End
  return (
    <div
      className={` ${isOpen ? ' ' : ''}  
        `}
    >
      {isOpen && (
        <div>
          <div
            className={`      
            ${
              tourCount === 0
                ? 'absolute bottom-[19px] right-[0px]'
                : 'fixed ml-[20px]'
            }
            z-[4] w-[330px] rounded-[14px] bg-[#1A1A1A] p-4 text-xs text-white transition-all `}
          >
            <div className='flex justify-between border-b-[1px] border-zinc-700 pb-3'>
              <h4 className=' font-bold text-[18px]'>
                {tourSteps[tourCount].title}
              </h4>
              <div onClick={handleClose}>
                <CloseIcon />
              </div>
            </div>
            {/* <p className='font-normal mt-3 text-[14px] leading-5'>{text}</p> */}
            <p className='font-normal mt-3 text-[14px] leading-5'>
              {tourSteps[tourCount].content}
            </p>
            <div className='mt-3 flex items-center justify-between'>
              {/* <p className='font-normal text-[14px] text-[#979797]'>{step}</p> */}
              <p className='font-normal text-[14px] text-[#979797]'>
                Step {tourCount + 1}/5
              </p>
              <div className='flex items-center gap-4'>
                <button
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-[1px] border-white/[0.32] ${tourCount}`}
                  onClick={handlePrevStep}
                  disabled={tourCount === 0}
                >
                  <Image src={arrowLeft} alt='' />
                </button>
                <button
                  className=' font-bold rounded-xl bg-[#5848BC] px-4 py-2 text-[14px] leading-[22px]'
                  onClick={handleNextStep}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <div
            className={`h-[24px] w-[20px] ${
              tourCount === 0
                ? 'absolute -top-[29px] right-[12px]'
                : 'fixed ml-[7px] rotate-90'
            }`}
          >
            <Image className='h-full w-full' src={downArrow} alt={''} />
          </div>
        </div>
      )}

      <div className='fixed left-0 top-0 z-[1] h-screen w-[1920px] overflow-hidden bg-black/70 backdrop-sepia-0'></div>
    </div>
  );
};

export default HoverModal;
