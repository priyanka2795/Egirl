import CreatorStudioNavbar from '@components/creator-studio/CreatorStudioNavbar';
import CreatorStudioSidebar from '@components/creator-studio/CreatorStudioSidebar';
import React, { useState } from 'react';

const CreatorStudioLayout = ({ children }: any) => {
  const [shrinkSideBar, setShrinkSideBar] = useState(false);
  return (
    <React.Fragment>
      <main className='mx-auto h-screen min-h-screen max-w-[1320px] overflow-hidden'>
        <CreatorStudioNavbar
          shrinkSideBar={shrinkSideBar}
          setShrinkSideBar={setShrinkSideBar}
        />
        <div className='flex gap-8 '>
          <CreatorStudioSidebar
            shrinkSideBar={shrinkSideBar}
            setShrinkSideBar={setShrinkSideBar}
          />
        <div className='main-content-scroller relative h-[calc(100vh-104px)] flex-grow overflow-y-auto overflow-x-hidden bg-main-background lg:min-w-[600px] pr-4'>
          {children}
          </div>
        </div>
      
      </main>
    </React.Fragment>
  );
};

export default CreatorStudioLayout;
