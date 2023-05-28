import React from 'react';
import StarIcon from '@components/landing-creator/assets/HowItWorks/StarIcon';
import dynamic from 'next/dynamic';
import Right1Loading from './assets/HowItWorks/Right1Loading';
import Left1Loading from './assets/HowItWorks/Left1Loading';
import Right2Loading from './assets/HowItWorks/Right2Loading';
import Image from 'next/image';

const Left1 = dynamic(() => import('./assets/HowItWorks/Left1'), {
  loading: () => <Left1Loading />,
  ssr: false
});

const Right1 = dynamic(() => import('./assets/HowItWorks/Right1'), {
  loading: () => <Right1Loading />,
  ssr: false
});

const Right2 = dynamic(() => import('./assets/HowItWorks/Right2'), {
  loading: () => <Right2Loading />,
  ssr: false
});

const Header = () => {
  return (
    <div className='bg-[#FFFFFF] px-[24px] py-[100px] md:px-[40px] lg:px-[100px] 2xl:px-[120px]'>
      <div className='flex select-none justify-center space-x-2'>
        <span className='text-[48px] font-[600] text-[black] lg:text-[48px]'>
          How it
        </span>
        <span className='text-[48px] font-[500] italic text-[black] lg:text-[48px]'>
          works?
        </span>
      </div>
      {/* section 1 */}
      <div className='flex flex-col gap-y-[120px]'>
        <div className='flex flex-col'>
          <div className='mx-[60px] mt-[32px] flex flex-col-reverse justify-between gap-x-[40px] md:mt-[80px] lg:flex-row'>
            <div className='flex select-none flex-col justify-center'>
              <button className='mb-[40px] w-min rounded-lg bg-[#EAE8FD] px-[20px] py-[8px] text-[#7362C6]'>
                <span className='max-lines-1'>STEP&nbsp;1</span>
              </button>
              <h3 className='mb-[32px] text-[34px] font-[600] text-black'>
                Make an Egirl
              </h3>
              <div className='space-y-4 text-[24px] font-[400] text-black'>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Pick a name</p>
                </div>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Give her a unique personality</p>
                </div>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Design her looks & voice</p>
                </div>
              </div>
            </div>
            {/* <Right1 className='mb-[40px] h-[620px] w-full p-1 lg:mb-0 lg:w-[500px]' /> */}
            <div className='mb-[40px] hidden lg:flex'>
              <Image
                src={'/assets2/CreatorLanding/Right1/Right12x.png'}
                layout='fixed'
                width={620}
                height={555}
              />
            </div>
            <div className='mb-[40px] h-auto w-full lg:hidden'>
              <Image
                src={'/assets2/CreatorLanding/Right1/Right12x.png'}
                layout='responsive'
                width={620}
                height={555}
              />
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className='flex flex-col'>
          <div className='mx-[60px] flex flex-col justify-between gap-x-[40px] lg:flex-row'>
            {/* <Left1 className='mb-[40px] h-[620px] w-full lg:mb-0 lg:w-[500px]' /> */}
            <div className='mb-[40px] hidden lg:flex'>
              <Image
                src={'/assets2/CreatorLanding/Left1/Left12x.png'}
                layout='fixed'
                width={620}
                height={555}
              />
            </div>
            <div className='mb-[40px] h-auto w-full lg:hidden'>
              <Image
                src={'/assets2/CreatorLanding/Left1/Left12x.png'}
                layout='responsive'
                width={620}
                height={555}
              />
            </div>
            <div className='mr-[60px] flex select-none flex-col items-start justify-center'>
              <button className='mb-[40px] w-min rounded-lg bg-[#EAE8FD] px-[20px] py-[8px] text-[#7362C6]'>
                <span className='max-lines-1'>STEP&nbsp;2</span>
              </button>
              <h3 className='mb-[32px] text-[34px] font-[600] text-black'>
                Customize Your Profile
              </h3>
              <div className='space-y-4 text-[24px] font-[400] text-black'>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Write an eye-catching bio</p>
                </div>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Select subscription tiers & pricing</p>
                </div>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Choose what your subs can request</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className='flex flex-col'>
          <div className='mx-[60px] mt-[32px] flex flex-col-reverse justify-between gap-x-[40px] md:mt-[80px] lg:flex-row'>
            <div className='flex select-none flex-col justify-center'>
              <button className='mb-[40px] w-min rounded-lg bg-[#EAE8FD] px-[20px] py-[8px] text-[#7362C6]'>
                <span className='max-lines-1'>STEP&nbsp;3</span>
              </button>
              <h3 className='mb-[32px] text-[34px] font-[600] text-black'>
                Grow Your Audience
              </h3>
              <div className='space-y-4 text-[24px] font-[400] text-black'>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Create spicy content</p>
                </div>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Tell followers about your Egirl</p>
                </div>
                <div className='flex items-center'>
                  <StarIcon className='mr-3' />
                  <p>Post updates & stay active</p>
                </div>
              </div>
            </div>
            {/* <Right2 className='mb-[40px] h-[620px] w-full p-1 lg:mb-0 lg:w-[500px]' /> */}
            <div className='mb-[40px] hidden lg:flex'>
              <Image
                src={'/assets2/CreatorLanding/Right2/Right22x.png'}
                layout='fixed'
                width={620}
                height={555}
              />
            </div>
            <div className='mb-[40px] h-auto w-full lg:hidden'>
              <Image
                src={'/assets2/CreatorLanding/Right2/Right22x.png'}
                layout='responsive'
                width={620}
                height={555}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
