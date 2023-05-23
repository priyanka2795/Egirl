import React from 'react';
import ArrowLeft from './svg/arrow-left.svg';
import ArrowRight from './svg/arrow-right.svg';
import Image from 'next/image';
import Slider from './svg/slider.svg';

const YouMightLike = () => {
  return (
    <div className='flex w-full flex-col rounded-[14px] bg-main-bar '>
      <div className='flex items-center justify-between border-b border-gray-200 border-opacity-[0.08] py-6'>
        <p className='ml-6 text-lg font-bold leading-6'>You might like</p>
        <div className='mr-6 flex items-center'>
          <ArrowLeft className='mr-3' />
          <ArrowRight />
        </div>
      </div>
      <div className='mt-6 flex flex-col items-center justify-center  px-6'>
        <p className='ml-6 text-lg font-bold leading-6'>
          Want to explore further?
        </p>
        <div className='mt-4 grid w-full grid-cols-4 grid-rows-2 gap-4 px-6'>
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
        <button className='text-normal mt-6 w-full rounded-[14px] bg-gray-400 py-[13px] text-base	'>
          Show more
        </button>
        <Slider className='mb-6 mt-[40px]' />
      </div>
    </div>
  );
};

export default YouMightLike;
