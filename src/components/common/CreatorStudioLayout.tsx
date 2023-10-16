import CreatorStudio from '@components/creator-studio';
import CreatorStudioNavbar from '@components/creator-studio/CreatorStudioNavbar';
import CreatorStudioSidebar from '@components/creator-studio/CreatorStudioSidebar';
import StyleBeingGenerated from '@components/creator-studio/style-generator/StyleBeingGenerated';
import StyleGeneratorNext from '@components/creator-studio/style-generator/StyleGeneratorNext';
import HoverModal from '@components/list/HoverModal';
import React, { useState } from 'react';

const CreatorStudioLayout = ({ children }: any) => {
  const [shrinkSideBar, setShrinkSideBar] = useState<boolean>(false);
  const [styleGenNext, setStyleGenNext] = useState<boolean>(false);

  // guided tour
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);
  const [tourCount, setTourCount] = useState<number>(-1);

  const startTour = () => {
    setIsTourOpen(true);
  };

  const closeTour = () => {
    setIsTourOpen(false);
  };

  const tourSteps = [
    {
      id: 0,
      title: 'Set up profile',
      content:
        "Edit your character's profile and personalize to find more followers."
    },
    {
      id: 1,
      title: 'Personality',
      content:
        "Edit your character's profile and personalize to find more followers."
    },
    {
      id: 2,
      title: 'Generate images',
      content:
        "Edit your character's profile and personalize to find more followers."
    },
    {
      id: 3,
      title: 'Create style',
      content:
        'Select character from style dropdown, upload your characters images, and generate character style!'
    },
    {
      id: 4,
      title: 'Create own gifts',
      content:
        "Edit your character's profile and personalize to find more followers."
    }
    // Add more steps as needed
  ];
  // guided tour End

  return (
    <React.Fragment>
      <main className='mx-auto h-screen min-h-screen max-w-[1440px] overflow-hidden'>
        <CreatorStudioNavbar
          shrinkSideBar={shrinkSideBar}
          setShrinkSideBar={setShrinkSideBar}
          styleGenNext={styleGenNext}
          setStyleGenNext={setStyleGenNext}
        />

        <div className='relative flex gap-8 '>
          <CreatorStudioSidebar
            shrinkSideBar={shrinkSideBar}
            setShrinkSideBar={setShrinkSideBar}
            IsOpen={isTourOpen}
            OnClose={closeTour}
            TourSteps={tourSteps}
            tourCount={tourCount}
            setTourCount={setTourCount}
          />
          <div className='creator-studio-components main-content-scroller relative mt-8 h-[calc(100vh-104px)] flex-grow overflow-y-auto overflow-x-hidden bg-main-background pb-5 pr-4 lg:min-w-[600px]'>
            {styleGenNext ? (
              <div className='flex flex-col gap-5'>
                <StyleBeingGenerated />
                <StyleGeneratorNext />
              </div>
            ) : (
              <>
                {children ? (
                  <>{children}</>
                ) : (
                  <CreatorStudio
                    IsOpen={isTourOpen}
                    OnClose={closeTour}
                    TourSteps={tourSteps}
                    SetIsTourOpen={setIsTourOpen}
                    tourCount={tourCount}
                    setTourCount={setTourCount}
                  />
                )}
              </>
            )}
          </div>
          {/* Guide  */}
          {/* <div>
            <HoverModal
              isOpen={isTourOpen}
              onClose={closeTour}
              tourSteps={tourSteps}
            />
          </div> */}
          {/* Guide End  */}
          {/* <div
            style={{
              borderRadius: '4px',
              position: 'absolute',
              backgroundColor: 'transparent',
              height: '115px',
              left: '830px',
              opacity: 1,
              pointerEvents: 'auto',
              top: '48px',
              transition: 'opacity 0.2s ease 0s',
              width: '115px',
              zIndex: 9999,
              border: '1px solid red'
            }}
          ></div> */}
        </div>
      </main>
    </React.Fragment>
  );
};

export default CreatorStudioLayout;
