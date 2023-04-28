import React, { lazy, Suspense } from 'react';
import StarIcon from './assets/PassionToProfit/StarIcon';

const PassionToProfit = () => {
  return (
    <div className='select-none bg-[#F7F7F7] px-[100px] pt-[80px] pb-[80px] 2xl:px-[120px]'>
      <div className=''>
        <div className=''>
          <div className=''>
            <div className='flex justify-center lg:justify-start'>
              <div className=''>
                <span className='text-[36px] font-[500] text-[#949698] lg:text-[18px]'>
                  GET PAID
                </span>
              </div>
            </div>
            <div className='flex justify-center space-x-3 text-center lg:justify-start'>
              <span className='text-[96px] font-[600] text-[#000000] lg:text-[48px]'>
                Turn your passion into
                <span className='ml-2 font-[400] italic'>profit</span>
              </span>
            </div>
          </div>
          <div className='mt-[48px]'>
            <div className='items-center justify-between space-y-8 lg:flex lg:space-x-2 lg:space-y-0'>
              <div className='flex justify-center'>
                <div className='h-[400px] rounded-2xl border bg-[#FFFFFF] lg:h-[266px] lg:w-[397px]'>
                  <div className='mt-[40px] ml-[24px] mr-[24px]'>
                    <StarIcon />

                    <div className='mt-[24px] mb-[2px]'>
                      <span className='text-[48px] font-[600] text-[#000000] lg:text-[24px]'>
                        Subscriptions & PPV
                      </span>
                    </div>
                    <div>
                      <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                        Earn monthly income from fans via subscriptions.
                        Pay-per-view allows you to earn fees on ultra exclusive
                        content.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='h-[400px] rounded-2xl border bg-[#FFFFFF] lg:h-[266px] lg:w-[397px]'>
                  <div className='mt-[40px] ml-[24px] mr-[24px]'>
                    <StarIcon />
                    <div className='mb-[2px] mt-[24px]'>
                      <span className='text-[48px] font-[600] text-[#000000] lg:text-[24px]'>
                        Chatbots
                      </span>
                    </div>
                    <div>
                      <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                        Gain a percentage of profit generated each time users
                        chat with your Egirl, and on any requests made to your
                        Egirl.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='h-[400px] rounded-2xl border bg-[#FFFFFF] lg:h-[266px] lg:w-[397px]'>
                  <div className='mt-[40px] ml-[24px] mr-[24px]'>
                    <StarIcon />

                    <div className='mb-[2px] mt-[24px]'>
                      <span className='text-[48px] font-[600] text-[#000000] lg:text-[24px]'>
                        AI Models
                      </span>
                    </div>
                    <div>
                      <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
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
