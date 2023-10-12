import React, { useState } from 'react';
import CloseIcon from '../../../public/assets/svgImages/close-icon.svg';
import arrowLeft from '../../../public/assets/arrow-left.png';
import downArrow from '../../../public/assets/down-arrow-img.png';
import Image from 'next/image';

interface HoverModalProp {
  // name: string;
  // step: string;
  // text: string;
  isOpen: any;
  onClose: any;
  tourSteps: any;
}

const HoverModal = ({ isOpen, onClose, tourSteps }: HoverModalProp) => {
  // Guide
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    // setCurrentStep(currentStep + 1);
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleClose = () => {
    setCurrentStep(0);
    onClose();
  };
  // Guide  End
  const GuideStep = tourSteps[currentStep].id;
  return (
    // ${step === 'Step 1/5' ? '' : 'fixed z-50'}
    // ${
    //   step === 'Step 1/5'
    //     ? '-left-[80px] bottom-[62px]'
    //     : '-bottom-[138px] left-[162px]'
    // }
    <>
      <div
        className={`visible ${currentStep === 0 ? '' : 'fixed z-50'} ${
          isOpen ? 'open' : ''
        }  
        `}
      >
        {isOpen && (
          <>
            {GuideStep === currentStep ? (
              <>
                <div
                  className={`absolute         
            ${
              currentStep === 0
                ? '-left-[80px] bottom-[62px]'
                : '-bottom-[138px] left-[162px]'
            }
           bottom-[62px] w-[330px] rounded-[14px] bg-[#1A1A1A] p-4 text-xs text-white transition-all `}
                >
                  <div className='flex justify-between border-b-[1px] border-zinc-700 pb-3'>
                    <h4 className=' font-bold text-[18px]'>
                      {tourSteps[currentStep].title}
                    </h4>
                    <div onClick={handleClose}>
                      <CloseIcon />
                    </div>
                  </div>
                  {/* <p className='font-normal mt-3 text-[14px] leading-5'>{text}</p> */}
                  <p className='font-normal mt-3 text-[14px] leading-5'>
                    {tourSteps[currentStep].content}
                  </p>
                  <div className='flex items-center justify-between mt-3'>
                    {/* <p className='font-normal text-[14px] text-[#979797]'>{step}</p> */}
                    <p className='font-normal text-[14px] text-[#979797]'>
                      Step {currentStep}/5
                    </p>
                    <div className='flex items-center gap-4'>
                      <button
                        className='flex h-9 w-9 items-center justify-center rounded-full border-[1px] border-white/[0.32]'
                        onClick={handlePrevStep}
                        disabled={currentStep === 0}
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
                  className={`absolute -top-[30px] right-[20px] h-[24px] w-[20px]`}
                >
                  <Image className='w-full h-full' src={downArrow} alt={''} />
                </div>
              </>
            ) : (
              ''
            )}
          </>
        )}
      </div>

      {/* <div className={`visible  ${step === 'Step 1/5' ? '' : 'fixed z-50'}`}>
<div
  className={`absolute ${
    step === 'Step 1/5'
      ? '-left-[80px] bottom-[62px]'
      : '-bottom-[138px] left-[162px]'
  } bottom-[62px] w-[330px] rounded-[14px] bg-[#2b2a2a] p-4 text-xs text-white transition-all `}
>
  <div className='flex justify-between border-b-[1px] border-zinc-700 pb-3'>
    <h4 className=' font-bold text-[18px]'>{name}</h4>
    <div>
      <CloseIcon />
    </div>
  </div>
  <p className='font-normal mt-3 text-[14px] leading-5'>{text}</p>
  <div className='flex items-center justify-between mt-3'>
    <p className='font-normal text-[14px] text-[#979797]'>{step}</p>
    <div className='flex items-center gap-4'>
      <div className='flex h-9 w-9 items-center justify-center rounded-full border-[1px] border-white/[0.32]'>
        <Image src={arrowLeft} alt='' />
      </div>
      <button className=' font-bold rounded-xl bg-[#5848BC] px-4 py-2 text-[14px] leading-[22px]'>
        Next
      </button>
    </div>
  </div>
</div>

<div className={`absolute -top-[30px] right-[20px] h-[24px] w-[20px]`}>
  <Image className='w-full h-full' src={downArrow} alt={''} />
</div>
</div> */}
    </>
  );
};

export default HoverModal;
