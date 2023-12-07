import React, { useState } from 'react';
import Banner from '@components/list/Banner';
import PostCard from '@components/list/PostCard';
import UserSection from '@components/list/UserSection';
import PostInput from '@components/list/PostInput';
import CreateCharacter from '@components/list/CreateCharacter';
import SetUpYourCharacter from '@components/list/SetUpYourCharacter';
import AllCharactersCards from '@components/list/AllCharactersCards';
import EditProfileModal from '@components/list/EditProfileModal';
import Image from 'next/image';
import AddUser from '@/assets/user-add-icon.webp';

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
  activeStep?: any;
  UserGuide?: any;
  setUserGuide?: any;
  setCreateCharacterData: any;
  activeProfile: any;
  setActiveProfile: any;
  bannerData: any;
  updateCharacterToggle: boolean;
  setUpdateCharacterToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setCreateCharacterToggle: React.Dispatch<React.SetStateAction<boolean>>;
  createCharacterToggle: boolean;
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
  activeStep,
  UserGuide,
  setUserGuide,
  setCreateCharacterData,
  activeProfile,
  setActiveProfile,
  bannerData,
  updateCharacterToggle,
  setUpdateCharacterToggle,
  setCreateCharacterToggle,
  createCharacterToggle
}: CreatorStudio) => {
  // const [UserGuide, setUserGuide] = useState(true);
  const SignUp = sessionStorage.getItem('true');

  const [signUpStore, setSignUpStore] = useState(SignUp);
  return (
    <>
      {UserGuide && !activeProfile ? (
        <CreateCharacter
          setUserGuide={setUserGuide}
          setCreateCharacterData={setCreateCharacterData}
          setIsTourOpen={setIsTourOpen}
          setTourCount={setTourCount}
          UserGuide={UserGuide}
          setActiveProfile={setActiveProfile}
          setCreateCharacterToggle={setCreateCharacterToggle}
          createCharacterToggle={createCharacterToggle}
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
              activeStep={activeStep}
            />
          </div>
          <div className='flex max-w-[1196px] justify-between gap-5'>
            <div className='flex w-full max-w-[59%] flex-col'>
              <PostInput />
              <PostCard postCardStyle={'w-full'} />
            </div>
            <div className='max-w-[39%]'>
              {signUpStore === '' ? (
                <UserSection userSectionStyle={'w-full'} />
              ) : (
                <div className='mt-5 flex flex-col gap-4 rounded-[14px] bg-[#121212] p-6'>
                  <div className='flex items-center gap-1 text-[#979797]'>
                    <Image
                      src={AddUser}
                      className='h-[16px] w-[16px] object-cover'
                    />
                    <p className='text-sm'>Progress of a completed character</p>
                  </div>
                  <div className='flex w-full flex-col gap-[10px]'>
                    <div className='flex items-center gap-[6px] '>
                      <h3 className='text-2xl font-[700] '>25%</h3>{' '}
                      <h6 className='self-end text-lg font-[700] text-[#979797]'>
                        complete
                      </h6>
                    </div>

                    <div className='h-1.5 w-[100%] rounded-md  border-[#5AD02E29] bg-[#5AD02E29] '>
                      <div className='h-1.5 w-[25%] rounded-md bg-[#5AD02E]'></div>
                    </div>
                  </div>

                  <p className='text-base text-[#979797]'>
                    To start chatting with this character fill all info |
                    |finish all steps / complete creation progression. You need
                    to reach 100% for users to interact with your character
                  </p>
                </div>
              )}
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
