import React, { ReactNode } from 'react';
import Sidebar from '../common/Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

const Home = () => {
  return (
    <>
      {/*  max-w-[1650px] */}
      <main className=' mx-auto flex min-h-screen max-w-[1276px] '>
        {/* mx-auto flex min-h-screen max-w-7xl */}
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </>
  );
};

export default Home;
