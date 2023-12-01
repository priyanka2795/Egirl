import React, { useState, useEffect } from 'react';
import PersonalityContent from './PersonalityContent';
import { postCharacterPersonality } from 'services/services';
import Cookies from 'js-cookie';

const PersonalityIndex = () => {
  const [shrinkSideBar, setShrinkSideBar] = useState<boolean>(false);
  const token :any = Cookies.get('accessToken');
  const characterId = Cookies.get('character_id') || '';
  const [personalityData, setPersonalityData] = useState({
    character_id: characterId,
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


  const handleSavePersonality=()=>{
    postCharacterPersonality(personalityData , token)
    .then((res:any)=>{
      console.log(res);
    })
    .catch((err:any)=>{
      console.log(err);
    })
  }



  return (
    <PersonalityContent
      personalityData={personalityData}
      setPersonalityData={setPersonalityData}
      handleSavePersonality={handleSavePersonality}
    />
  );
};

export default PersonalityIndex;
