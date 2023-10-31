import React from 'react';
import Content from '../Content';

const profileContentData = [
  {
    title:"What is a character Profile?",
    id:"#character_profile"
  },
  {
    title:"Unique Username",
    id:"#unique_username"
  },
  {
    title:"General benefits",
    id:"#general_benefits"
  }
]
const ProfileContentSec = () => {
  return (
    <div className='w-[990px] py-2 relative z-[60]'>
      <Content contentData={profileContentData}  />
    </div>
  );
};

export default ProfileContentSec;
