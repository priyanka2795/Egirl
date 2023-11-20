import CreatorStudioLayout from '@components/common/CreatorStudioLayout';
import CreatorStudio from '@components/creator-studio';
import ProfileInfoModal from '@components/list/ProfileInfoModal';
import React, { useState } from 'react';

const creatorStudio = () => {
  const [profileInfoPage, setProfileInfoPage] = useState(false);

  // Stepper Code
  const [btnSteps, setBtnSteps] = useState<boolean>(false);

  const [activeStep, setActiveStep] = useState(0);
  // Stepper Code End

  return (
    <div>
      {profileInfoPage ? (
        <ProfileInfoModal
          setProfileInfoPage={setProfileInfoPage}
          btnSteps={btnSteps}
          setBtnSteps={setBtnSteps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      ) : (
        <CreatorStudioLayout setProfileInfoPage={setProfileInfoPage} btnSteps={btnSteps}
        setBtnSteps={setBtnSteps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}/>
      )}
    </div>
  );
};

export default creatorStudio;
