import React from 'react'
import Isymbol from './svg/Isymbol'
import Roleplay from './svg/Roleplay'
import ConversationalIcon from './svg/ConversationalIcon'

const PersonalityS1 = () => {
  return (
    
      <div className=' items-start gap-4 flex w-full' >
          <div className='flex w-1/2 p-[24px] flex-col items-start gap-4 bg-[#121212] rounded-[14px]'>
            <div className='flex items-center gap-1.5 self-stretch'>
                <h6 className='text-lg font-bold leading-6'>Base type</h6>
                <div className='w-4 h-4'>
                  <Isymbol/>
                </div>
            </div>
            <div className='flex items-center gap-2 self-stretch'>
                <div className='w-5 h-5'>
                 <Roleplay/>
                </div>
                <b className='text-sm font-normal leading-[18px] text-[#FFFFFF]'>
                Roleplay
                </b>
            </div>
            <div className='flex items-center gap-2 self-stretch'>
                <div className='w-5 h-5 stroke-1'>
                 <ConversationalIcon/>
                </div>
                <b className='text-sm font-normal leading-[18px] text-[#FFFFFF]'>
                Conversational
                </b>
            </div>
          </div>


          <div className='flex w-1/2 p-[24px] flex-col items-start gap-4 bg-[#121212] rounded-[14px]'>
            <div className='gap-10 pl-6 pt-4 '>
              <h2 className='pb-5'>
                <div className='flex gap-2'>
                  <b className='text-lg'>Base type</b>
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
              <input
                type='radio'
                name='baseType'
                className='mr-[5px] h-5 w-5'
              />{' '}
              <label className='text-sm'>Roleplay</label>
              <br />
              <input
                type='radio'
                name='baseType'
                className='mr-[5px] h-5 w-5'
              />{' '}
              <label className='text-sm'>Conversational</label>
            </div>
          </div>
        </div>
    
  )
}

export default PersonalityS1
