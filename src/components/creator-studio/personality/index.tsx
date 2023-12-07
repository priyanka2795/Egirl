import React, { useState } from 'react';
import PersonalityContent from './PersonalityContent';
import { postCharacterPersonality } from 'services/services';
import Cookies from 'js-cookie';

const PersonalityIndex = () => {
  const token :any = Cookies.get('accessToken');
  const characterId = Cookies.get('character_id') || '';
  const [personalityAPIData , setPersonalityAPIData] = useState<any>()
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
      personalityAPIData={personalityAPIData}
    />
  );
};

export default PersonalityIndex;
