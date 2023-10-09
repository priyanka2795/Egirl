import React from 'react';
import Image from 'next/image';
import bookUser from '../../../public/assets/book-user.png';
import userPenIcon from '../../../public/assets/user-pen.png';
import personalityIcon from '../../../public/assets/user.png';
import imagePlusIcon from '../../../public/assets/image-plus.png';
import palette from '../../../public/assets/palette.png';
import flag from '../../../public/assets/flag.png';
import CloseIcon from '../../../public/assets/svgImages/close-icon.svg';
import arrowLeft from '../../../public/assets/arrow-left.png';
import downArrow from '../../../public/assets/down-arrow-img.png';
function SetUpYourCharacter() {
  return (
    <div className='mt-5 rounded-[14px] bg-[#121212] p-6'>
      <div className='mb-6 flex items-center justify-between'>
        <h3 className='text-[22px] font-bold leading-[22px]'>
          Setup your character
        </h3>

        <div className='group relative flex cursor-pointer items-center justify-center rounded-[14px]  text-[16px] font-bold leading-[22px] text-white'>
          <button className='flex items-center gap-2 rounded-xl bg-[#5848BC] px-4 py-2.5'>
            <Image src={bookUser} alt={''} />
            Guided Character Creator
          </button>
          <div className='invisible group-hover:visible group-hover:opacity-100'>
            <div className='absolute -left-[80px] bottom-[62px]  w-[169px] w-[330px] scale-0  rounded-[14px] bg-[#2b2a2a] p-4 text-xs text-white transition-all group-hover:scale-100'>
              <div className='flex justify-between border-b-[1px] border-zinc-700 pb-3'>
                <h4 className=' text-[18px] font-bold'>Set up profile</h4>
                <div>
                  <CloseIcon />
                </div>
              </div>
              <p className='mt-3 text-[14px] font-normal leading-5'>
                Edit your character's profile and personalize to find more
                followers.
              </p>
              <div className='mt-3 flex items-center justify-between'>
                <p className='text-[14px] font-normal text-[#979797]'>
                  Step 1/5
                </p>
                <div className='flex items-center gap-4'>
                  <div className='flex h-9 w-9 items-center justify-center rounded-full border-[1px] border-white/[0.32]'>
                    <Image src={arrowLeft} alt='' />
                  </div>
                  <button className=' rounded-xl bg-[#5848BC] px-4 py-2 text-[14px] font-bold leading-[22px]'>
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className='absolute -top-[30px] right-[20px] h-[24px] w-[20px] '>
              <Image className='h-full w-full' src={downArrow} alt={''} />
            </div>
          </div>
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
