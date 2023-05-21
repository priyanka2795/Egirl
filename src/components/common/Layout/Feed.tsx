import React from 'react';

export default function Feed() {
  return (
    <div className='max-w-xl flex-grow border-l border-r  border-gray-200 sm:ml-[73px] lg:min-w-[576px] xl:ml-[370px]'>
      <div className='sticky top-0 z-50 '>
        <div className='h-[72px] items-center border-b-[1px] border-b-[#242424] bg-main-bar '></div>
        <div className='flex border-b border-gray-200 px-3 py-2'>
          <h2 className='cursor-pointer text-lg font-bold sm:text-xl'>Home</h2>
          <div className='hoverEffect ml-auto flex h-9 w-9 items-center justify-center px-0'>
            <div className='h-[10px] w-[10px] bg-gray-300'>I</div>
          </div>
        </div>
      </div>

      {Array(100)
        .fill(0)
        .map((_, i) => (
          <p key={i}>Main content line {i + 1}</p>
        ))}
    </div>
  );
}
