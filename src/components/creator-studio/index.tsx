import React, { useState } from 'react'
import CreatorStudioNavbar from './CreatorStudioNavbar'
import CreatorStudioSidebar from './CreatorStudioSidebar'
import CreatorStudioMainContent from './CreatorStudioMainContent'

const CreatorStudio = () => {
  const [shrinkSideBar , setShrinkSideBar] = useState(false)
  return (
    <div className="mx-auto h-screen min-h-screen max-w-[1320px] ">
    <CreatorStudioNavbar shrinkSideBar={shrinkSideBar} setShrinkSideBar={setShrinkSideBar}/>
    <div className="flex h-screen">
        <CreatorStudioSidebar shrinkSideBar={shrinkSideBar} setShrinkSideBar={setShrinkSideBar}/>
        <CreatorStudioMainContent/>
    </div>
    </div>
  )
}

export default CreatorStudio