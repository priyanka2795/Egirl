import React,{useState} from 'react'
import Personality from '../Personality'
import CreatorStudioNavbar from '../CreatorStudioNavbar'
import CreatorStudioSidebar from '../CreatorStudioSidebar'

const PersonalityIndex = () => {
    const [shrinkSideBar , setShrinkSideBar] = useState(false)
  return (
        <Personality/>   
  )
}

export default PersonalityIndex