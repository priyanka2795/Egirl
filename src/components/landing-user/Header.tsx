import React from 'react';
import { NextImage } from '@components/ui/next-image';
import ExperienceTheFuture from '@components/landing-common/assets/ExperienceTheFuture';

const Header = () => {
  return (
    <div className='w-full bg-[#F6F6F6] px-24 pt-[96px] lg:px-[100px]'>
      <div className='py-20'>
        <div className='justify-center gap-[100px] xs:justify-center sm:grid sm:grid-cols-1 sm:justify-center md:grid md:grid-cols-2 md:justify-center md:max-xl:grid md:max-lg:grid-cols-1 lg:grid lg:grid-cols-2'>
          <div className=''>
            <div className='flex justify-center lg:justify-start'>
              <div className='flex items-center rounded-[8px] bg-[#EAE8FD] px-[8px] py-[12px]'>
                {/* <StarIcon className='h-[40px] w-[40px] fill-[#5848BC] pr-[8px] lg:h-[20px] lg:w-[20px]'></StarIcon> */}
                <ExperienceTheFuture className='h-[40px] w-[40px] pr-[8px] lg:h-[20px] lg:w-[20px]' />
                <div className='flex '>
                  <span className='text-[32px] font-[500] text-[#5848BC] md:text-[24px] lg:text-[16px]'>
                    experience the future
                  </span>
                </div>
              </div>
            </div>
            <div className='pt-12 text-center lg:text-start'>
              <span className='text-[104px] font-[600] text-black lg:text-[52px]'>
                YOUR FAVOURITE <span className='font-[500] italic'>EGIRLS</span>
                , ALL IN ONE PLACE
              </span>
            </div>
            {/* <div className='pt-[48px] text-center lg:text-start'>
                <span className='text-[36px] font-[400] text-black lg:text-[18px]'>
                  Join our waitlist for beta access, 3000 people have joined so
                  far!
                </span>
              </div> */}
            <div className='flex justify-center pt-[20px] lg:justify-start'>
              {/* <div className='flex w-1/2 lg:w-full'>
                  <input
                    type='email'
                    className='form-input w-[395px] rounded-l-[12px] border-transparent px-4 py-3 text-[36px] text-[#949698] drop-shadow lg:text-[18px]'
                    placeholder='Enter your email'
                  />
                  <div className='flex items-center justify-center rounded-r-[12px] bg-[#5848BC] px-[24px] py-[16px] drop-shadow'>
                    <span className='text-[36px] lg:text-[18px]'>Join</span>
                  </div>
                </div> */}
              <button className='mt-12 rounded-xl bg-[#5848BC] py-4 px-[30px] text-lg font-semibold text-white'>
                Join us
              </button>
            </div>
          </div>
          <div className='flex shrink-0 items-center justify-center pt-16 lg:mt-0 lg:pt-0'>
            <div className='flex shrink-0'>
              <NextImage
                width={558}
                height={540}
                src={'/assets/svgImages/userHeader.svg'}
                alt={'user header'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
