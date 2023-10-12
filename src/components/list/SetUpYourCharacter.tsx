import React, { useState } from 'react';
import Image from 'next/image';
import bookUser from '../../../public/assets/book-user.png';
import userPenIcon from '../../../public/assets/user-pen.png';
import personalityIcon from '../../../public/assets/user.png';
import imagePlusIcon from '../../../public/assets/image-plus.png';
import palette from '../../../public/assets/palette.png';
import flag from '../../../public/assets/flag.png';
import HoverModal from './HoverModal';

interface SetUpYourCharacter {
  IsOpen: any;
  OnClose: any;
  TourSteps: any;
}
function SetUpYourCharacter({
  IsOpen,
  OnClose,
  TourSteps
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
          <button className='flex items-center gap-2 rounded-xl bg-[#5848BC] px-4 py-2.5'>
            <Image src={bookUser} alt={''} />
            Guided Character Creator
          </button>
          {/* <button onClick={startTour}>Start Guided Tour</button> */}
          {IsOpen && (
            <>
              {GuideStep === 0 && (
                <HoverModal
                  // name={'Set up profile'}
                  // text={
                  //   "Edit your character's profile and personalize to find more followers."
                  // }
                  // step={'Step 1/5'}

                  isOpen={IsOpen}
                  onClose={OnClose}
                  tourSteps={TourSteps}
                />
              )}
            </>
          )}
        </div>
      </div>

      <div className='flex gap-5'>
        <div className='flex gap-4'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#5848BC]'>
            <Image src={userPenIcon} alt='' />
          </div>
          <div>
            <p className='text-[15px]'>
              Profile info <span className='pl-1 text-[#979797]'>2/4</span>
            </p>
            <div className='mt-1 h-1 w-[155px] rounded-xl bg-[#5848BC] bg-opacity-[40%]'>
              <div className='h-1 w-3/6 rounded-xl bg-[#5848BC] '></div>
            </div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] '>
            <Image src={personalityIcon} alt='' />
          </div>
          <div>
            <p className='text-[15px]'>
              Personality <span className='pl-1 text-[#979797]'>0/5</span>
            </p>
            <div className='mt-1 h-1 w-[155px] rounded-xl bg-white/[0.12]'></div>
          </div>
        </div>
        <div className='flex gap-4 '>
          <div className='setup_character flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] '>
            <Image src={imagePlusIcon} alt='' />
          </div>
          <div>
            <p className='text-[15px]'>
              Images <span className='pl-1 text-[#979797]'>0/4</span>
            </p>
            <div className='mt-1 h-1 w-[155px] rounded-xl bg-white/[0.12]'></div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08]'>
            <Image src={palette} alt='' />
          </div>
          <div>
            <p className='text-[15px]'>
              Style <span className='pl-1 text-[#979797]'>0/1</span>
            </p>
            <div className='mt-1 h-1 w-[155px] rounded-xl bg-white/[0.12]'></div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08]'>
            <Image src={flag} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetUpYourCharacter;
