import React, { useState } from 'react';
import Banner from '@components/list/Banner';
import PostCard from '@components/list/PostCard';
import UserSection from '@components/list/UserSection';
import PostInput from '@components/list/PostInput';
import CreateCharacter from '@components/list/CreateCharacter';
import SetUpYourCharacter from '@components/list/SetUpYourCharacter';
import AllCharactersCards from '@components/list/AllCharactersCards';
import EditProfileModal from '@components/list/EditProfileModal';

interface CreatorStudio {
  IsOpen: any;
  OnClose: any;
  TourSteps: any;
  SetIsTourOpen: any;
  tourCount: number;
  setTourCount: React.Dispatch<React.SetStateAction<number>>;
  setProfileInfoPage: any;
}
const CreatorStudio = ({
  IsOpen,
  OnClose,
  TourSteps,
  tourCount,
  SetIsTourOpen,
  setTourCount,
  setProfileInfoPage
}: CreatorStudio) => {

  const [UserGuide, setUserGuide] = useState(true);
  const [editProfileModal, setEditProfileModal] = useState(false);

  return (
    <>
      {UserGuide ? (
        <CreateCharacter
          SetUserGuide={setUserGuide}
          SetIsTourOpen={SetIsTourOpen}
          setTourCount={setTourCount}
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
            setEditProfileModal={setEditProfileModal}
          />
          <div>
            <SetUpYourCharacter
              IsOpen={IsOpen}
              OnClose={OnClose}
              TourSteps={TourSteps}
              tourCount={tourCount}
              SetIsTourOpen={SetIsTourOpen}
              setTourCount={setTourCount}
              setProfileInfoPage={setProfileInfoPage}
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
      {
        editProfileModal && <EditProfileModal closeState={setEditProfileModal} />
      }
    </>
  );
};

export default CreatorStudio;
