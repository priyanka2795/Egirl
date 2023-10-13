import React,{useState} from 'react'
import PersonalityContent from './PersonalityContent'

const PersonalityIndex = () => {
    const [shrinkSideBar , setShrinkSideBar] = useState<boolean>(false);
  return (
   <PersonalityContent/>
  )
}

export default PersonalityIndex