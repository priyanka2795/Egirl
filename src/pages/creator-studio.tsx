import CreatorStudioLayout from '@components/common/CreatorStudioLayout';
import CreatorStudio from '@components/creator-studio';
import ProfileInfoModal from '@components/list/ProfileInfoModal';
import React, { useState } from 'react';

const creatorStudio = () => {
  const [profileInfoPage, setProfileInfoPage] = useState(false);
  const [UserGuide, setUserGuide] = useState(true);
  // Stepper Code
  const [btnSteps, setBtnSteps] = useState<boolean>(false);

  const [activeStep, setActiveStep] = useState(0);
  // Stepper Code End
console.log(UserGuide,'UserGuide');


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
        <CreatorStudioLayout setProfileInfoPage={setProfileInfoPage} btnSteps={btnSteps}
        setBtnSteps={setBtnSteps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        UserGuide={UserGuide}
setUserGuide={setUserGuide}
        />
      )}
    </div>
  );
};

export default creatorStudio;
