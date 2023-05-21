import React from 'react';
import News from './News';
const Widgets = () => {
  return (
    // flex-grow works very well here
    <div className=' hidden space-y-5 lg:inline xl:w-[600px]'>
      <div className='sticky top-0 z-50 w-[90%] bg-white py-1.5 xl:w-[75%]'>
        <div className='relative flex items-center rounded-full  p-3'>
          {/* <SearchIcon className='z-50 h-5 text-gray-500' /> */}
          <input
            className='absolute inset-0 rounded-full border-gray-500 bg-gray-100 pl-11 text-gray-700 focus:bg-white focus:shadow-lg '
            type='text'
            placeholder='Search Twitter'
          />
        </div>
      </div>

      {/* <div className='sticky top-0 z-50'>
        <div className='h-[72px] items-center border-b-[1px] border-b-[#242424] bg-main-bar'></div>
        <div className='w-[90%]  py-1.5 xl:w-[75%]'>
          <div className='relative flex items-center rounded-full bg-red-300 p-3'>
            <SearchIcon className='z-50 h-5 text-gray-500' />
            <div className='z-50 h-5 w-5 text-gray-500'>I</div>
            <input
              className='absolute inset-0 rounded-full border-gray-500 bg-gray-100 pl-11 text-gray-700 focus:bg-white focus:shadow-lg '
              type='text'
              placeholder='Search Twitter'
            />
          </div>
        </div>
      </div> */}

      <div className='w-[90%] space-y-3 rounded-xl bg-gray-100 pt-2 text-gray-700 xl:w-[75%]'>
        <h4 className='px-4 text-xl font-bold'>What's happening</h4>
        <News />
        <News />
        <News />
        <button
          onClick={() => {}}
          className='pb-3 pl-4 text-blue-300 hover:text-blue-400'
        >
          Show more
        </button>
      </div>

      {Array(30)
        .fill(0)
        .map((_, i) => (
          <p key={i}>Main content line {i + 1}</p>
        ))}
    </div>
  );
};

export default Widgets;
