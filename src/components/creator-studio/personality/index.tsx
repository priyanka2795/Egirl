import React,{useState} from 'react'
import Personality from '../Personality'
import CreatorStudioNavbar from '../CreatorStudioNavbar'
import CreatorStudioSidebar from '../CreatorStudioSidebar'

const PersonalityIndex = () => {
    const [shrinkSideBar , setShrinkSideBar] = useState(false)
  return (
    <div className="mx-auto max-w-[1320px] ">
    <CreatorStudioNavbar shrinkSideBar={shrinkSideBar} setShrinkSideBar={setShrinkSideBar}/>
    <div className="flex h-[calc(100vh-104px)] ">
        <CreatorStudioSidebar shrinkSideBar={shrinkSideBar} setShrinkSideBar={setShrinkSideBar}/>
       
        <Personality/>
    </div>
    </div>
  )
}

export default PersonalityIndex