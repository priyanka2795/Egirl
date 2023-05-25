import React, { ReactNode } from 'react';
import Sidebar from '../common/Sidebar';
import Characters from './Characters';

import Chat from './Chat';

const Explore = () => {
  return (
    <>
      {/*  max-w-[1650px] */}
      <main className=' mx-auto flex min-h-screen max-w-[1288px] '>
        {/* mx-auto flex min-h-screen max-w-7xl */}
        <Sidebar />
        <Characters />
      </main>
    </>
  );
};

export default Explore;
