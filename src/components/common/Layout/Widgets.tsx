import News from './News';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Widgets() {
  return (
    <div className='ml-8 hidden space-y-5 lg:inline xl:w-[600px]'>
      <div className='sticky top-0 z-50 w-[90%] bg-white py-1.5 xl:w-[75%]'>
        <div className='relative flex items-center rounded-full  p-3'>
          <input
            className='absolute inset-0 rounded-full border-gray-500 bg-gray-100 pl-11 text-gray-700 focus:bg-white focus:shadow-lg '
            type='text'
            placeholder='Search Twitter'
          />
        </div>
      </div>

      <div className='w-[90%] space-y-3 rounded-xl bg-gray-100 pt-2 text-gray-700 xl:w-[75%]'>
        <h4 className='px-4 text-xl font-bold'>Whats happening</h4>

        <News />
        <button
          onClick={() => {}}
          className='pb-3 pl-4 text-blue-300 hover:text-blue-400'
        >
          Show more
        </button>
      </div>
      <div className='sticky top-16 w-[90%] space-y-3 rounded-xl bg-gray-100 pt-2 text-gray-700 xl:w-[75%]'>
        <h4 className='px-4 text-xl font-bold'>Who to follow</h4>

        <div className='flex cursor-pointer items-center px-4  py-2 transition duration-500 ease-out hover:bg-gray-200'>
          <div className='h-[40px] w-[40px] bg-red-400'></div>
          <div className='ml-4 truncate leading-5'>
            <h4 className='truncate text-[14px] font-bold hover:underline'>
              {'username'}
            </h4>
            <h5 className='truncate text-[13px] text-gray-500'>
              {'holland pleskac'}
            </h5>
          </div>
          <button className='ml-auto rounded-full bg-black px-3.5 py-1.5 text-sm font-bold text-white'>
            Follow
          </button>
        </div>
        <div className='flex cursor-pointer items-center px-4  py-2 transition duration-500 ease-out hover:bg-gray-200'>
          <div className='h-[40px] w-[40px] bg-red-400'></div>
          <div className='ml-4 truncate leading-5'>
            <h4 className='truncate text-[14px] font-bold hover:underline'>
              {'username'}
            </h4>
            <h5 className='truncate text-[13px] text-gray-500'>
              {'holland pleskac'}
            </h5>
          </div>
          <button className='ml-auto rounded-full bg-black px-3.5 py-1.5 text-sm font-bold text-white'>
            Follow
          </button>
        </div>
        <button
          onClick={() => {}}
          className='pb-3 pl-4 text-blue-300 hover:text-blue-400'
        >
          Show more
        </button>
      </div>
    </div>
  );
}
