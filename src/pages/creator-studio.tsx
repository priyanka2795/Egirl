import CreatorStudioLayout from '@components/common/CreatorStudioLayout';
import CreatorStudio from '@components/creator-studio';
import CreatorStudioMainContent from '@components/creator-studio/CreatorStudioMainContent';
import React from 'react';

const creatorStudio = () => {
  return (
    // <div>
    //   <CreatorStudio />
    // </div>
    <CreatorStudioLayout>
      <CreatorStudioMainContent/>   
    </CreatorStudioLayout>
  );
};

export default creatorStudio;
