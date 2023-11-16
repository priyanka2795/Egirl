import React, { useState, useEffect } from 'react';
import PersonalityContent from './PersonalityContent';

const PersonalityIndex = () => {
  const [shrinkSideBar, setShrinkSideBar] = useState<boolean>(false);
  const [personalityData, setPersonalityData] = useState({
    character_id: '',
    base_type: '',
    creativity: 0,
    general_description: '',
    world_description: '',
    likes: [],
    traits: [
      {
        tag_id: 0,
        weight: 0
      }
    ]
  });

  useEffect(() => {
    console.log(personalityData, 'personality data');
  }, [personalityData]);
  return (
    <PersonalityContent
      SetBtnSteps
      personalityData={personalityData}
      setPersonalityData={setPersonalityData}
    />
  );
};

export default PersonalityIndex;
