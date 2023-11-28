import React, { useState } from 'react';
import Banner from '@components/list/Banner';
import PostCard from '@components/list/PostCard';
import UserSection from '@components/list/UserSection';
import PostInput from '@components/list/PostInput';
import CreateCharacter from '@components/list/CreateCharacter';
import SetUpYourCharacter from '@components/list/SetUpYourCharacter';
import AllCharactersCards from '@components/list/AllCharactersCards';
import EditProfileModal from '@components/list/EditProfileModal';
import FinishStepModal from '@components/list/finishStep/finishStepModal';

interface CreatorStudio {
  IsOpen: any;
  OnClose: any;
  TourSteps: any;
  setIsTourOpen: any;
  tourCount: number;
  setTourCount: React.Dispatch<React.SetStateAction<number>>;
  setProfileInfoPage: any;
  setUserDetails: any;
  userDetails: any;
  btnSteps?: any;
  setBtnSteps?: any;
  activeStep?: any;
  setActiveStep?: any;
  UserGuide?: any;
  setUserGuide?: any;
  setCreateCharacterData:any;
  createCharacterData:any;
  activeProfile:any;
  setActiveProfile:any;
  bannerData:any;
  updateCharacterToggle:boolean;
  setUpdateCharacterToggle:React.Dispatch<React.SetStateAction<boolean>>
}
const CreatorStudio = ({
  IsOpen,
  OnClose,
  TourSteps,
  tourCount,
  setIsTourOpen,
  setTourCount,
  setProfileInfoPage,
  setUserDetails,
  userDetails,
  btnSteps,
  setBtnSteps,
  activeStep,
  setActiveStep,
  UserGuide,
  setUserGuide,
  setCreateCharacterData,
  createCharacterData,
  activeProfile,
  setActiveProfile,
  bannerData,
  updateCharacterToggle,
  setUpdateCharacterToggle
}: CreatorStudio) => {
  // const [UserGuide, setUserGuide] = useState(true);

   

  return (
    <>
      {
      UserGuide &&
      !activeProfile
       ? (
        <CreateCharacter
          setUserGuide={setUserGuide}
          setCreateCharacterData={setCreateCharacterData}
          setIsTourOpen={setIsTourOpen}
          setTourCount={setTourCount}
          UserGuide={UserGuide}
          setActiveProfile={setActiveProfile}
        />
      ) : (
        <div className='mb-5'>
          {/* <AllCharactersCards /> */}
          <Banner
            styleProperty={'px-0 pt-2'}
            followBtnStyle={
              'border border-[#7362C6] bg-transparent text-[#7362C6]'
            }
            followText={'Follow'}
            component={'CreatorStudioProfile'}
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            activeProfile={activeProfile}
            bannerData={bannerData}
            setUpdateCharacterToggle={setUpdateCharacterToggle}
            updateCharacterToggle={updateCharacterToggle}
            // setEditProfileModal={setEditProfileModal}
          />
          <div>
            <SetUpYourCharacter
              IsOpen={IsOpen}
              OnClose={OnClose}
              TourSteps={TourSteps}
              tourCount={tourCount}
              setIsTourOpen={setIsTourOpen}
              setTourCount={setTourCount}
              setProfileInfoPage={setProfileInfoPage}
              btnSteps={btnSteps}
              setBtnSteps={setBtnSteps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </div>
          <div className='flex max-w-[1196px] justify-between gap-5'>
            <div className='flex w-full max-w-[59%] flex-col'>
              <PostInput />
              <PostCard postCardStyle={'w-full'} />
            </div>
            <div className='max-w-[39%]'>
              <UserSection userSectionStyle={'w-full'} />
            </div>
          </div>
        </div>
      )}
      {/* {
        editProfileModal && <EditProfileModal closeState={setEditProfileModal} />
      }  */}
    </>
  );
};

export default CreatorStudio;
