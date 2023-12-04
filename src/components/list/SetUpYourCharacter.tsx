import React from 'react';
import Image from 'next/image';
import bookUser from '@/assets/book-user.webp';
import userPenIcon from '@/assets/user-pen.webp';
import personalityIcon from '@/assets/user.webp';
import imagePlusIcon from '@/assets/image-plus.webp';
import palette from '@/assets/palette.webp';
import flag from '@/assets/flag.webp';
import HoverModal from './HoverModal';
import paletteWhiteIcon from '@/assets/palette-white.webp';
import RightIcon from '@/assets/check-cs.webp';
import personalityWhiteIcon from '@/assets/user-white.webp';
import imagePlusWhiteIcon from '@/assets/image-plus-white.webp';
import flagWhite from '@/assets/flag-white.webp';

interface SetUpYourCharacter {
  IsOpen: any;
  OnClose: any;
  TourSteps: any;
  tourCount: number;
  setTourCount: React.Dispatch<React.SetStateAction<number>>;
  setIsTourOpen: React.Dispatch<React.SetStateAction<number>>;
  setProfileInfoPage: any;
  activeStep?: any;
}
function SetUpYourCharacter({
  IsOpen,
  OnClose,
  TourSteps,
  tourCount,
  setIsTourOpen,
  setTourCount,
  setProfileInfoPage,
  activeStep,
}: SetUpYourCharacter) {
  {
    /*
  // guided tour
  const [isTourOpen, setIsTourOpen] = useState(false);

  const startTour = () => {
    setIsTourOpen(true);
  };

  const closeTour = () => {
    setIsTourOpen(false);
  };

  const tourSteps = [
    {
      title: 'Set up profile',
      content:
        'Edit your characters profile and personalize to find more followers.'
    },
    {
      title: 'Personality',
      content: 'Step 2: This is the second step.'
    }
    // Add more steps as needed
  ];
  // guided tour End
*/
  }

  const GuideStep = TourSteps[0].id;
  return (
    <div className='mt-5 rounded-[14px] bg-[#121212] p-6'>
      <div className='flex items-center justify-between mb-6'>
        <h3 className='font-bold text-[22px] leading-[22px]'>
          Setup your character
        </h3>

        <div className='font-bold group relative flex cursor-pointer items-center justify-center  rounded-[14px] text-[16px] leading-[22px] text-white'>
          <div className='relative'>
            <button
              className={`flex items-center gap-2 rounded-xl bg-[#5848BC] px-4 py-2.5 ${
                GuideStep === tourCount ? 'relative z-[2]' : ''
              }`}
              onClick={() => {
                setProfileInfoPage(true);
              }}
            >
              <Image src={bookUser} alt={''} />
              Guided Character Creator
            </button>
            {/* {/ <button onClick={startTour}>Start Guided Tour</button> /} */}
            <div className='absolute top-0 right-0'>
              {IsOpen && (
                <>
                  {GuideStep === tourCount ? (
                    <HoverModal
                      isOpen={IsOpen}
                      onClose={OnClose}
                      tourSteps={TourSteps}
                      tourCount={tourCount}
                      setIsTourOpen={setIsTourOpen}
                      setTourCount={setTourCount}
                    />
                  ) : (
                    ''
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center gap-4'>
        <div className='flex items-center gap-4'>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full text-white                  ${
              activeStep === 0
                ? 'bg-[#5848BC]'
                : activeStep >= 1
                ? 'bg-[#2EAA1B]'
                : 'bg-[#FFFFFF14]' // Set a default color for other steps
            }                  
                  `}
          >
            {/* ${
                    activeStep === 0 ? 'bg-[#5848BC]' : 'bg-[#2EAA1B]'
                  } */}
            <Image src={activeStep === 0 ? userPenIcon : RightIcon} alt='' />
          </div>
          <div>
            <p className='text-[15px]'>
              Profile info
              <span className='pl-1 text-[#979797]'>4/4</span>
            </p>
            <div
              className={`mt-1 h-1 w-[155px] rounded-xl ${
                activeStep === 0 ? 'bg-[#5848BC]' : ''
              } bg-opacity-[40%]`}
            >
               <div
                    className={`h-1  ${
                      activeStep === 0 ? '' : '!bg-[#2EAA1B] w-full '
                    }w-0 rounded-xl bg-[#5848BC]  `}
                  ></div> 
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${
              activeStep === 1
                ? 'bg-[#5848BC]'
                : activeStep >= 1
                ? 'bg-[#2EAA1B]'
                : 'bg-[#FFFFFF14]' // Set a default color for other steps
            }
                  `}
          >
            <Image
              src={
                activeStep === 1
                  ? personalityWhiteIcon
                  : activeStep >= 1
                  ? RightIcon
                  : personalityIcon
              }
              alt=''
              className='text-white'
            />
          </div>
          <div>
            <p className='text-[15px]'>
              Personality
              <span className='pl-1 text-[#979797]'>0/5</span>
            </p>
            <div
              className={`mt-1 h-1 w-[155px] rounded-xl  ${
                activeStep === 1
                  ? 'bg-[#5848BC] bg-opacity-[40%]'
                  : 'bg-[#FFFFFF1F]  '
              }`}
            >
              <div
                className={`h-1 w-0 ${
                  activeStep === 1
                    ? 'bg-[#5848BC]'
                    : activeStep >= 1
                    ? 'w-full !bg-[#2EAA1B]'
                    : 'bg-[#5848BC]'
                } rounded-xl`}
              ></div>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div
            className={`setup_character flex h-10 w-10 items-center justify-center rounded-full text-white 
                  ${
                    activeStep === 2
                      ? 'bg-[#5848BC]'
                      : activeStep >= 2
                      ? 'bg-[#2EAA1B]'
                      : 'bg-[#FFFFFF14]'
                  }
                  `}
          >
            <Image
              src={
                activeStep === 2
                  ? imagePlusWhiteIcon
                  : activeStep >= 2
                  ? RightIcon
                  : imagePlusIcon
              }
              alt=''
              className='text-white'
            />
          </div>
          <div>
            <p className='text-[15px]'>
              Images
              <span className='pl-1 text-[#979797]'>0/4</span>
            </p>
            <div
              className={`mt-1 h-1 w-[155px] rounded-xl  ${
                activeStep === 2
                  ? 'bg-[#5848BC] bg-opacity-[40%]'
                  : 'bg-[#FFFFFF1F]  '
              }`}
            >
              <div
                className={`h-1 w-0 ${
                  activeStep === 2
                    ? 'bg-[#5848BC]'
                    : activeStep >= 2
                    ? 'w-[100%] !bg-[#2EAA1B]'
                    : 'bg-[#5848BC]'
                } rounded-xl `}
              ></div>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full text-white
                  ${
                    activeStep === 3
                      ? 'bg-[#5848BC]'
                      : activeStep >= 3
                      ? 'bg-[#2EAA1B]'
                      : 'bg-[#FFFFFF14]'
                  }`}
          >
            <Image
              src={
                activeStep === 3
                  ? paletteWhiteIcon
                  : activeStep >= 3
                  ? RightIcon
                  : palette
              }
              alt=''
              className='text-white'
            />
          </div>
          <div>
            <p className='text-[15px]'>
              Style
              <span className='pl-1 text-[#979797]'>0/1</span>
            </p>
            <div
              className={`mt-1 h-1 w-[155px] rounded-xl  ${
                activeStep === 3
                  ? 'bg-[#5848BC] bg-opacity-[40%]'
                  : 'bg-[#FFFFFF1F]  '
              }`}
            >
              <div
                className={`h-1 w-0 ${
                  activeStep === 3
                    ? 'bg-[#5848BC]'
                    : activeStep >= 3
                    ? 'w-[100%] !bg-[#2EAA1B]'
                    : 'bg-[#5848BC]'
                } rounded-xl `}
              ></div>
            </div>
          </div>
        </div>

        <div className='flex gap-4'>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full  ${
              activeStep === 4 ? 'active bg-[#5848BC] ' : 'bg-[#FFFFFF14] '
            }`}
          >
            <Image src={activeStep === 4 ? flagWhite : flag} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetUpYourCharacter;
