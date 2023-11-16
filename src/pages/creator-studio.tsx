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
  return (
    <div>
      {profileInfoPage ? (
        <ProfileInfoModal setProfileInfoPage={setProfileInfoPage} />
      ) : (
        <CreatorStudioLayout
          setProfileInfoPage={setProfileInfoPage}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      )}
    </div>
  );
};

export default creatorStudio;
