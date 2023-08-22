import React from 'react';
import PersonalityS1 from './PersonalityS1';
import PersonalityLikeSection from './PersonalityLikeSection';
import PersonalityTraitsSection from './PersonalityTraitsSection';

const Personality = () => {
  return (
    <>
      <div className='flex p-8 flex-col items-start gap-4 self-stretch'>
        <PersonalityS1 />

        <PersonalityLikeSection />

        <PersonalityTraitsSection />

        <div className='mx-2.5 my-3  max-w-full rounded-lg bg-zinc-900 pb-8 pl-5 pr-5 pt-8'>
          <h2 className='pb-5'>
            <div className='flex gap-2'>
              <b>Description</b>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                className='mt-1'
              >
                <g clip-path='url(#clip0_3296_2197)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M7.99935 2.00008C4.68564 2.00008 1.99935 4.68637 1.99935 8.00008C1.99935 11.3138 4.68564 14.0001 7.99935 14.0001C11.3131 14.0001 13.9993 11.3138 13.9993 8.00008C13.9993 4.68637 11.3131 2.00008 7.99935 2.00008ZM0.666016 8.00008C0.666016 3.94999 3.94926 0.666748 7.99935 0.666748C12.0494 0.666748 15.3327 3.94999 15.3327 8.00008C15.3327 12.0502 12.0494 15.3334 7.99935 15.3334C3.94926 15.3334 0.666016 12.0502 0.666016 8.00008Z'
                    fill='#515151'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M8.00065 7.33325C8.36884 7.33325 8.66732 7.63173 8.66732 7.99992V10.6666C8.66732 11.0348 8.36884 11.3333 8.00065 11.3333C7.63246 11.3333 7.33398 11.0348 7.33398 10.6666V7.99992C7.33398 7.63173 7.63246 7.33325 8.00065 7.33325Z'
                    fill='#515151'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M7.33398 5.33341C7.33398 4.96522 7.63246 4.66675 8.00065 4.66675H8.00732C8.37551 4.66675 8.67398 4.96522 8.67398 5.33341C8.67398 5.7016 8.37551 6.00008 8.00732 6.00008H8.00065C7.63246 6.00008 7.33398 5.7016 7.33398 5.33341Z'
                    fill='#515151'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3296_2197'>
                    <rect width='16' height='16' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </h2>
          <div className='flex flex-row  '>
            <div className='flex h-32 max-h-max w-4/5 flex-col gap-2'>
              <div className='flex w-11/12 flex-row  justify-between p-1'>
                <label className='text-xs'>Description</label>
                <label className='text-xs text-stone-700'>0/2000</label>
              </div>

              <textarea
                placeholder='Enter a descrition here...'
                className='h-5/6 w-11/12 resize-none rounded-lg bg-white/[0.05]'
              ></textarea>
            </div>

            <div className='flex h-32 max-h-min w-4/5 flex-col gap-2'>
              <div className='flex w-11/12 flex-row  justify-between p-1'>
                <label className='text-xs'>Word Description</label>
                <label className='text-xs text-stone-700'>0/2000</label>
              </div>
              <textarea
                placeholder='Enter a world descrition here...'
                className='h-5/6 w-11/12 resize-none rounded-lg bg-white/[0.05]'
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personality;
