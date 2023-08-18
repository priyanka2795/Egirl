import React, { ReactNode } from 'react';
import Sidebar from '../common/Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Layout from '@components/common/Layout';

const Home = () => {
  return (
    <>
      {/*  max-w-[1650px] */}
      {/* <main className=' mx-auto flex min-h-screen max-w-[1276px] '>
        <Sidebar />
        <Feed />
        <Widgets />
      </main> */}
      <Layout>
        <div className='flex'>
          <Feed />
          <Widgets />
        </div>
      </Layout>
    </>
  );
};

export default Home;
