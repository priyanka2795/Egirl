import React from 'react'
import CloseIcon from '../../../public/assets/svgImages/close-icon.svg';
import arrowLeft from '../../../public/assets/arrow-left.png';
import downArrow from '../../../public/assets/down-arrow-img.png';
import Image from 'next/image';

const HoverModal = () => {
  return (
    <div className='invisible group-hover:visible group-hover:opacity-100'>
            <div className='absolute -left-[80px] bottom-[62px] w-[169px] w-[330px] scale-0 rounded-[14px] bg-[#2b2a2a] p-4 text-xs text-white transition-all group-hover:scale-100'>
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
              <div className='flex items-center justify-between mt-3'>
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
              <Image className='w-full h-full' src={downArrow} alt={''} />
            </div>
          </div>
  )
}

export default HoverModal;
