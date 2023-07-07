import React from 'react';

const NoResultFound = () => {
  return (
    <div className='inline-flex h-[231px] w-[469px] flex-col items-center justify-center gap-12 rounded-2xl border border border border border-white border-opacity-10 bg-zinc-900 px-6 py-16 shadow'>
      <div className='flex h-[103px] w-[232px] flex-col items-center justify-start gap-2'>
        <div className='self-stretch text-center text-[18px] font-bold leading-normal text-white'>
          No Results Found
        </div>
        <div className='self-stretch text-center text-[15px] font-normal leading-normal text-white'>
          Expand your search criteria to find relevant content matching your
          interests
        </div>
      </div>
    </div>
  );
};

export default NoResultFound;
