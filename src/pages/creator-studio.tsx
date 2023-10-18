import CreatorStudioLayout from '@components/common/CreatorStudioLayout';
import CreatorStudio from '@components/creator-studio';
import ProfileInfoModal from '@components/list/ProfileInfoModal';
import React, { useState } from 'react';

const creatorStudio = () => {
  const [profileInfoPage, setProfileInfoPage] = useState(false);
  return(
    <div>
      {profileInfoPage ? 
      <ProfileInfoModal /> : 
      <CreatorStudioLayout setProfileInfoPage={setProfileInfoPage} />
      }
    </div>
  );
};

export default creatorStudio;
