import React, { useState } from 'react';
import LearningCenterNavbar from '@components/learning-center/LearningCenterNavbar';
import LearningCenterSidebar from '@components/learning-center/LearningCenterSidebar';
import LearningCenter from '@components/learning-center';
import LearningCenterFooter from '@components/learning-center/LearningCenterFooter';
import SearchResults from '@components/learning-center/SearchResults';
import ScrollToTopButton from '@components/learning-center/ScrollToTopButton';
const LearningCenterLayout = ({ children }: any) => {
  const [showSearchResult, setShowSearchResult] = useState(false);
  return (
    <>
      <main className='mx-auto h-screen min-h-screen max-w-[1440px] overflow-hidden '>
        <LearningCenterNavbar setShowSearchResult={setShowSearchResult} />
        <div className='flex '>
          <LearningCenterSidebar setShowSearchResult={setShowSearchResult} />
          <div className='creator-studio-components main-content-scroller relative  mt-6 h-[calc(100vh-104px)] flex-grow overflow-y-auto overflow-x-hidden bg-main-background lg:min-w-[600px]'>
            <>
              {children ? (
                <>{children}</>
              ) : showSearchResult ? (
                <SearchResults />
              ) : (
                <LearningCenter />
              )}
            </>
            <LearningCenterFooter />
            <ScrollToTopButton />
          </div>
        </div>
      </main>
    </>
  );
};

export default LearningCenterLayout;
