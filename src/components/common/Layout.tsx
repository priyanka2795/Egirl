import React, { Children } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <main className='mx-auto flex min-h-screen max-w-[1320px] '>
        <div className='sticky top-0 flex h-screen'>
          <Sidebar />
        </div>
        <div className='flex-grow bg-main-background lg:min-w-[600px] '>
          {children}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Layout;
