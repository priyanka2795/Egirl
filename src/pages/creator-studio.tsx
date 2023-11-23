import CreatorStudioLayout from '@components/common/CreatorStudioLayout';
import CreatorStudio from '@components/creator-studio';
import ProfileInfoModal from '@components/list/ProfileInfoModal';
import React, { useEffect, useState } from 'react';

const creatorStudio = () => {
  const [profileInfoPage, setProfileInfoPage] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: '',
    display_name: '',
    bio: '',
    location: '',
    profile_picture_media_id: 1,
    profile_banner_media_id: 1,
    profile_tags: []
  });

  
  useEffect(() => {
    console.log(userDetails, '????details');
  }, [userDetails]);

  const [UserGuide, setUserGuide] = useState(true);
  // Stepper Code
  const [btnSteps, setBtnSteps] = useState<boolean>(false);

  const [activeStep, setActiveStep] = useState(0);
  // Stepper Code End
  console.log(UserGuide, 'UserGuide');

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
        />
      )}
    </div>
  );
};

export default creatorStudio;
