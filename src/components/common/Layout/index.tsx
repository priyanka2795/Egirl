import React, { ReactNode } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='mx-auto flex w-full flex-col bg-slate-200 xl:w-[1200px]'>
      <Topbar />
      <div className='flex' style={{ height: 'calc(100vh - 64px)' }}>
        <Sidebar />
        {/* main */}
        <div className='h-full w-full overflow-y-scroll bg-gray-800'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
