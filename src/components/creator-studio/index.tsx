import React, { useState } from 'react'
import CreatorStudioNavbar from './CreatorStudioNavbar'
import CreatorStudioSidebar from './CreatorStudioSidebar'
import CreatorStudioMainContent from './CreatorStudioMainContent'
import Voice from './Voice/Voice'
import VoiceIndex from './Voice'

// import Personality from './Personality'
import Personality from './Personality'


const CreatorStudio = () => {
  const [shrinkSideBar , setShrinkSideBar] = useState(false)
  const [mainContent ,setMainContent] = useState();
  return (
    <div className="mx-auto max-w-[1320px] ">
    <CreatorStudioNavbar shrinkSideBar={shrinkSideBar} setShrinkSideBar={setShrinkSideBar}/>
    <div className="flex h-[calc(100vh-104px)] ">
        <CreatorStudioSidebar shrinkSideBar={shrinkSideBar} setShrinkSideBar={setShrinkSideBar}/>
        <CreatorStudioMainContent/>
        {/* <Personality/> */}
        {/* <VoiceIndex /> */}
        {/* <Personality/> */}
    </div>
    </div>
  )
}

export default CreatorStudio