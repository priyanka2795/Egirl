import React, { useState } from 'react';
import ApplicationSteps from '@components/learning-center/partnerProgramApplication/ApplicationSteps';
import ContactInformation from '@components/learning-center/partnerProgramApplication/ContactInformation';
import PersonalInformation from '@components/learning-center/partnerProgramApplication/PersonalInformation';
import CharacterInformation from '@components/learning-center/partnerProgramApplication/CharacterInformation';
import IdentityVerification from '@components/learning-center/partnerProgramApplication/IdentityVerification';
import Done from '@components/learning-center/partnerProgramApplication/Done';

function partnerProgramApplication() {
  const [steps, setSteps] = useState(1);
  return (
    <div className='mx-20 mt-10'>
      <ApplicationSteps steps={steps} />
      <div className='mt-12'>
        {steps === 1 && <PersonalInformation setSteps={setSteps} />}
        {steps === 2 && <ContactInformation setSteps={setSteps} />}
        {steps === 3 && <CharacterInformation setSteps={setSteps} />}
        {steps === 4 && <IdentityVerification setSteps={setSteps} />}
        {steps === 5 && <Done setSteps={setSteps} />}
      </div>
    </div>
  );
}

export default partnerProgramApplication;
