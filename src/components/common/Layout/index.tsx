import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className=' mx-auto flex min-h-screen max-w-[1580px]'>
        {/* mx-auto flex min-h-screen max-w-7xl */}
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </>
  );
};

export default Layout;
