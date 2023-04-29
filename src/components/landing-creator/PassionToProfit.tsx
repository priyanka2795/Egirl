import React, { lazy, Suspense } from 'react';
import StarIcon from './assets/PassionToProfit/StarIcon';

const PassionToProfit = () => {
  return (
    <div className='select-none bg-[#F7F7F7] px-[24px] pb-[80px] pt-[80px] md:px-[40px] lg:px-[100px] 2xl:px-[120px]'>
      <div className=''>
        <div className=''>
          <div className=''>
            <div className='flex justify-center md:justify-start'>
              <div className=''>
                <span className='text-[18px] font-[500] text-[#949698]'>
                  GET PAID
                </span>
              </div>
            </div>
            <div className='flex justify-center space-x-3  md:justify-start lg:w-auto'>
              <span className='text-[48px] font-[600] text-[#000000]'>
                Turn your passion into
                <span className='ml-2 block font-[400] italic md:flex'>
                  profit
                </span>
              </span>
            </div>
          </div>
          <div className='mt-[48px]'>
            <div className='items-center justify-between space-y-8 lg:flex lg:space-x-[24px] lg:space-y-0'>
              <div className='flex justify-center'>
                <div className='h-[236px] rounded-2xl border bg-[#FFFFFF] lg:h-[266px] lg:min-w-[397px]'>
                  <div className='mx-[36px] my-[40px]'>
                    <StarIcon />

                    <div className='mb-[2px] mt-[24px]'>
                      <span className='text-[24px] font-[600] text-[#000000]'>
                        Subscriptions & PPV
                      </span>
                    </div>
                    <div>
                      <span className='text-[18px] font-[400] text-[#000000]'>
                        Earn monthly income from fans via subscriptions.
                        Pay-per-view allows you to earn fees on ultra exclusive
                        content.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='h-[236px] rounded-2xl border bg-[#FFFFFF] lg:h-[266px] lg:min-w-[397px]'>
                  <div className='mx-[36px] my-[40px]'>
                    <StarIcon className='h-[32px] w-[32px]' />
                    <div className='mb-[2px] mt-[24px]'>
                      <span className='text-[24px] font-[600] text-[#000000]'>
                        Chatbots
                      </span>
                    </div>
                    <div>
                      <span className='text-[18px] font-[400] text-[#000000]'>
                        Gain a percentage of profit generated each time users
                        chat with your Egirl, and on any requests made to your
                        Egirl.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='h-[236px] rounded-2xl border bg-[#FFFFFF] lg:h-[266px] lg:min-w-[397px]'>
                  <div className='mx-[36px] my-[40px]'>
                    <StarIcon />

                    <div className='mb-[2px] mt-[24px]'>
                      <span className='text-[24px] font-[600] text-[#000000]'>
                        AI Models
                      </span>
                    </div>
                    <div>
                      <span className=' text-[18px] font-[400] text-[#000000]'>
                        Create your own unique AI models and list them on our
                        creator marketplace. Earn fees on every image
                        generation.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassionToProfit;
