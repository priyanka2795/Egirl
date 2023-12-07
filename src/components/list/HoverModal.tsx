import React, { useEffect, useRef, useState } from 'react';
import CloseIcon from '@/assets/svgImages/close-icon.svg';
import arrowLeft from '@/assets/arrow-left.webp';
import downArrow from '@/assets/arrow-down-grey.webp';
// import downArrow from '@/assets/down-arrow-img.webp';
import Image from 'next/image';

interface HoverModalProp {
  isOpen: any;
  onClose: any;
  tourSteps: any;
  tourCount: number;
  setIsTourOpen?: any;
  setTourCount: React.Dispatch<React.SetStateAction<number>>;
}

const HoverModal = ({
  isOpen,
  onClose,
  tourSteps,
  tourCount,
  setIsTourOpen,
  setTourCount
}: HoverModalProp) => {
  const handleNextStep = () => {
    setTourCount(tourCount + 1);
    handleChange()
  };

  const handlePrevStep = () => {
    console.log(tourCount, 'test count');
    setTourCount(tourCount - 1);
  };

  const handleClose = () => {
    setTourCount(0);
    onClose();
  };
  // Guide  End

  // Position Get

  const boxRef = useRef<HTMLDivElement>(null);


  const [positionY, setPositionY] = useState<number | undefined>();

  const getPosition = () => {
    const positionY = boxRef.current?.offsetTop;
    setPositionY(positionY);
    setValue(true)
  };
  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', getPosition);
  }, []);

  console.log(positionY, 'Y position In Guid Box');
  const [value, setValue] = useState(false)
  const handleChange = () => {
    setValue(true)
    console.log("clickkk")
  }
  console.log("object", value)
  return (
    <div
      className={` ${isOpen ? ' ' : ''}  
        `}
    >
      {isOpen && (
        <div >
          <div
            className={`      
            ${
              tourCount === 0
                ? 'absolute bottom-[19px] right-[0px]'
                : 'fixed ml-[20px]'
            }
            z-[4] w-[330px] rounded-[14px] bg-[#1A1A1A] p-4 text-xs text-white transition-all `}
            ref={boxRef}
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
            <div className='flex items-center justify-between mt-3'>
              {/* <p className='font-normal text-[14px] text-[#979797]'>{step}</p> */}
              <p className='font-normal text-[14px] text-[#979797]'>
                Step {tourCount + 1}/5
              </p>
              <div className='flex items-center gap-4'>
               {
                tourCount == 0 ?null: <button
                className={`flex h-9 w-9 items-center justify-center rounded-full border-[1px] border-white/[0.32] ${tourCount}`}
                onClick={handlePrevStep}
                disabled={tourCount === 0}
              >
                <Image src={arrowLeft} alt='' />
              </button>
               }
                <button
                  className=' font-bold rounded-xl bg-[#5848BC] px-4 py-2 text-[14px] leading-[22px]'
                  onClick={() => {
                    handleChange(),handleNextStep(),getPosition(), window.scrollTo({ top: positionY, behavior: "smooth" });
                  }}
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
            <Image className='w-full h-full' src={downArrow} alt={''} />
          </div>
        </div>
      )}

      <div className='fixed left-0 top-0 z-[1] h-screen w-[1920px] overflow-hidden bg-black/70 backdrop-sepia-0'></div>
    </div>
  );
};

export default HoverModal;
