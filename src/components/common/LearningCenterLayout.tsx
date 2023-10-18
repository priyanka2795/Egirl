import LearningCenterMain from '@components/learning-center/LearningCenterMain';
import LearningCenterNavbar from '@components/learning-center/LearningCenterNavbar';
import LearningCenterSidebar from '@components/learning-center/LearningCenterSidebar';
import React from 'react';

const LearningCenterLayout = () => {
  return (
    <>
      <main className='mx-auto h-screen min-h-screen max-w-[1440px] overflow-hidden px-20'>
        <LearningCenterNavbar />
        <div className='flex gap-10'>
          <LearningCenterSidebar />
          <div className='main-content-scroller h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden'>
            <LearningCenterMain />
          </div>
        </div>
      </main>
    </>
  );
};

export default LearningCenterLayout;
