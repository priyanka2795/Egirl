import CreatorStudioLayout from '@components/common/CreatorStudioLayout';
import CreatorStudio from '@components/creator-studio';
import ProfileInfoModal from '@components/list/ProfileInfoModal';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { getAllCharacter } from 'services/services';

const creatorStudio = () => {
  const [profileInfoPage, setProfileInfoPage] = useState(false);
  const characterId = Cookies.get('character_id') || '';
  const [allCharacterData , setAllCharacterData] = useState<any>()
  const token: any = Cookies.get('accessToken');
  const [activeProfile, setActiveProfile] = useState<any>();
  const [createCharacterData , setCreateCharacterData] = useState({
    username:'',
    display_name:''
  })
  const [UserGuide, setUserGuide] = useState(true);
  const [btnSteps, setBtnSteps] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState(0);
  const [userDetails, setUserDetails] = useState({
    character_id : characterId,
    username: createCharacterData?.username,
    display_name: createCharacterData?.display_name,
    bio: 'UNCHANGED',
    location: 'UNCHANGED',
    profile_picture_media_id: 'UNCHANGED',
    profile_banner_media_id: 'UNCHANGED',
    profile_tags: "UNCHANGED"
  });

  useEffect(()=>{
    getAllCharacter(token)
    .then((res:any)=>{
      setAllCharacterData(res?.data)
    })
    .catch((err:any)=>{
      console.log(err);
    })
  },[])

  
  useEffect(() => {
    console.log(activeProfile, '????active');
  }, [activeProfile]);

  

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
          btnSteps={btnSteps}
          setBtnSteps={setBtnSteps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          UserGuide={UserGuide}
          setUserGuide={setUserGuide}
          createCharacterData={createCharacterData}
          setCreateCharacterData={setCreateCharacterData}
          allCharacterData={allCharacterData}
          setActiveProfile={setActiveProfile}
          activeProfile={activeProfile}
        />
      )}
    </div>
  );
};

export default creatorStudio;
