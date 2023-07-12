import Sidebar from '@components/common/Sidebar';
import ExploreIndex from '@components/explore';
import React from 'react';

const explore = () => {
  return (
    <main className='mx-auto flex min-h-screen max-w-[1276px] '>
      <div>
        {' '}
        <Sidebar />
      </div>
      <div className='max-w-[1020px] flex-grow bg-main-background sm:ml-[88px] lg:min-w-[600px] xl:ml-[300px]'>
        <ExploreIndex />
      </div>
    </main>
  );
};

export default explore;
