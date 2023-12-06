import CreatorStudioLayout from '@components/common/CreatorStudioLayout';
import ProfileInfoModal from '@components/list/ProfileInfoModal';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { getAllCharacter, profileCharacter } from 'services/services';

const creatorStudio = () => {
  const [profileInfoPage, setProfileInfoPage] = useState(false);
  const [allCharacterData , setAllCharacterData] = useState<any>()
  const token: any = Cookies.get('accessToken');
  const [activeProfile, setActiveProfile] = useState<any>();
  const [bannerData , setBannerData] = useState<any>()
  const [createCharacterData , setCreateCharacterData] = useState({
    username:'',
    display_name:''
  })
  const [UserGuide, setUserGuide] = useState(true);
  const [btnSteps, setBtnSteps] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState(0);
  const [userDetails, setUserDetails] = useState();
  const [updateCharacterToggle , setUpdateCharacterToggle] = useState<boolean>(false)
  const [createCharacterToggle , setCreateCharacterToggle] = useState<boolean>(false)

  useEffect(()=>{
    const characterId = Cookies.get('character_id')
    setActiveProfile(characterId)
 },[createCharacterToggle , allCharacterData ])

  useEffect(()=>{
    getAllCharacter(token)
    .then((res:any)=>{
      setAllCharacterData(res?.data)
      const characterIdFromCookies = Cookies.get('character_id');
        if (!characterIdFromCookies || (characterIdFromCookies == undefined) || (characterIdFromCookies == null) || (characterIdFromCookies == "")) {
          Cookies.set('character_id', res?.data[0]?.id);
          setActiveProfile(res?.data[0]?.id); 
        }

    })
    .catch((err:any)=>{
      console.log(err);
    })
  },[createCharacterToggle])


  useEffect(()=>{
    profileCharacter(activeProfile , token)
    .then((res:any)=>{
      setBannerData(res?.data[0])
    })
    .catch((err:any)=>{
      console.log(err);
    })
  },[activeProfile , updateCharacterToggle , allCharacterData ])


  useEffect(()=>{
    if(!activeProfile){
      setActiveProfile(allCharacterData?.[0]?.id)
    }
  },[allCharacterData])

  return (
    <div>
      {profileInfoPage ? (
        <ProfileInfoModal
          setProfileInfoPage={setProfileInfoPage}
          btnSteps={btnSteps}
          setBtnSteps={setBtnSteps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setUserGuide={setUserGuide}
        />
      ) : (
        <CreatorStudioLayout
          setProfileInfoPage={setProfileInfoPage}
          activeStep={activeStep}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          UserGuide={UserGuide}
          setUserGuide={setUserGuide}
          createCharacterData={createCharacterData}
          setCreateCharacterData={setCreateCharacterData}
          allCharacterData={allCharacterData}
          setActiveProfile={setActiveProfile}
          activeProfile={activeProfile}
          bannerData={bannerData}
          setBannerData={setBannerData}
          setUpdateCharacterToggle={setUpdateCharacterToggle}
          updateCharacterToggle={updateCharacterToggle}
          setCreateCharacterToggle={setCreateCharacterToggle}
          createCharacterToggle={createCharacterToggle}
        />
      )}
    </div>
  );
};

export default creatorStudio;
