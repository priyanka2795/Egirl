import React, { useState } from 'react';
import ArrowLeft from './svg/arrow-left.svg';
import ArrowRight from './svg/arrow-right.svg';
import ArrowRightWhite from './svg/arrow-right-white.svg';
import Image from 'next/image';
import Slider from './svg/slider.svg';

enum StateType {
  State1 = 1,
  State2,
  State3,
  State4
}

const YouMightLike = () => {
  const [state, setState] = useState<StateType>(StateType.State1);

  const moveStateForward = () => {
    if (state < StateType.State4) {
      setState((prevState) => prevState + 1);
    }
  };

  const moveStateBack = () => {
    if (state > StateType.State1) {
      setState((prevState) => prevState - 1);
    }
  };

  return (
    <div className='flex w-full max-w-[376px] flex-col rounded-[14px] bg-main-bar '>
      <div className='flex items-center justify-between border-b border-gray-200 border-opacity-[0.08] py-6'>
        <p className='ml-6 text-lg font-bold leading-6'>You might like</p>
        <div className='flex items-center mr-6'>
          <button>
            <ArrowLeft onClick={moveStateBack} className='mr-3' />
          </button>
          <button onClick={moveStateForward}>
            <ArrowRight />
          </button>
        </div>
      </div>
      {state !== StateType.State4 && (
        <div className='flex flex-col items-center justify-center px-6 mt-6'>
          <p className='ml-6 text-lg font-bold leading-6'>
            Want to explore further?
          </p>
          <div className='grid w-full grid-cols-4 grid-rows-2 gap-4 px-2 mt-4'>
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <Image
                  key={index}
                  src='/dummy-char.png' // Change to your image path
                  alt={`Character Profile Picture ${index + 1}`} // Change to your alt text
                  width={66}
                  height={66}
                  className='rounded-full'
                />
              ))}
          </div>
          <button className='mt-6 w-full rounded-[14px] bg-[#252525] py-[13px] text-[16px] text-base font-bold leading-[22px]	'>
            Explore more
          </button>
          <Slider className='mb-6 mt-[40px]' />
        </div>
      )}
      {state === StateType.State4 && (
        <div className='flex flex-col items-center px-6 mt-6'>
          <div className='relative flex'>
            <Image
              src='/assets2/Home/ExploreMorePic.png'
              alt='Explore More'
              width={328} // replace with your desired image width
              height={274} // replace with your desired image height
            />
            <button className='absolute bottom-4 left-4 right-4 flex items-center justify-center rounded-xl bg-[#5848BC] py-[10px] text-sm font-bold text-white transition duration-100 hover:bg-[#5342be]'>
              Explore more
              <ArrowRightWhite className=' ml-[6px]' />
            </button>
          </div>
          <Slider className='mb-6 mt-[28px]' />
        </div>
      )}
    </div>
  );
};

export default YouMightLike;
