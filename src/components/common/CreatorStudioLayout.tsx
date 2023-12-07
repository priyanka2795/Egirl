//@ts-nocheck
import CreatorStudio from '@components/creator-studio';
import CreatorStudioNavbar from '@components/creator-studio/CreatorStudioNavbar';
import CreatorStudioSidebar from '@components/creator-studio/CreatorStudioSidebar';
import StyleBeingGenerated from '@components/creator-studio/style-generator/StyleBeingGenerated';
import StyleGeneratorNext from '@components/creator-studio/style-generator/StyleGeneratorNext';
import React, { useState } from 'react';

interface CreatorStudioLayoutProps {
  setProfileInfoPage: any;
  setUserDetails: any;
  userDetails: any;
  children?: any;
  activeStep?: any;
  UserGuide?: any;
  setUserGuide?: any;
  setCreateCharacterData: any;
  createCharacterData: any;
  allCharacterData: any;
  setActiveProfile: any;
  activeProfile: any;
  setBannerData: any;
  bannerData: any;
  updateCharacterToggle:boolean;
  setUpdateCharacterToggle:React.Dispatch<React.SetStateAction<boolean>>
  setCreateCharacterToggle:React.Dispatch<React.SetStateAction<boolean>>
  createCharacterToggle:boolean
}

const CreatorStudioLayout = ({
  children,
  setProfileInfoPage,
  setUserDetails,
  userDetails,
  activeStep,
  UserGuide,
  setUserGuide,
  setCreateCharacterData,
  createCharacterData,
  allCharacterData,
  setActiveProfile,
  activeProfile,
  setBannerData,
  bannerData,
  updateCharacterToggle,
  setUpdateCharacterToggle,
  setCreateCharacterToggle,
  createCharacterToggle
}: CreatorStudioLayoutProps) => {
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
            setIsTourOpen={setIsTourOpen}
            allCharacterData={allCharacterData}
            setActiveProfile={setActiveProfile}
            activeProfile={activeProfile}
            setCreateCharacterData={setCreateCharacterData}
            UserGuide={UserGuide}
            setUserGuide={setUserGuide}
            setCreateCharacterToggle={setCreateCharacterToggle}
            createCharacterToggle={createCharacterToggle}
            setBannerData={setBannerData}
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
                    setUserDetails={setUserDetails}
                    OnClose={closeTour}
                    TourSteps={tourSteps}
                    setIsTourOpen={setIsTourOpen}
                    tourCount={tourCount}
                    setTourCount={setTourCount}
                    setProfileInfoPage={setProfileInfoPage}
                    userDetails={userDetails}
                    activeStep={activeStep}
                    UserGuide={UserGuide}
                    setUserGuide={setUserGuide}
                    createCharacterData={createCharacterData}
                    setCreateCharacterData={setCreateCharacterData}
                    setUserDetails={setUserDetails}
                    activeProfile={activeProfile}
                    setActiveProfile={setActiveProfile}
                    bannerData={bannerData}
                    setUpdateCharacterToggle={setUpdateCharacterToggle}
                    updateCharacterToggle={updateCharacterToggle}
                    setCreateCharacterToggle={setCreateCharacterToggle}
                    createCharacterToggle={createCharacterToggle}
                  />
                )}
              </>
            )}
          </div>
          {/* Guide 
           <div>
            <HoverModal
              isOpen={isTourOpen}
              onClose={closeTour}
              tourSteps={tourSteps}
            />
          </div> 
          Guide End */}
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
