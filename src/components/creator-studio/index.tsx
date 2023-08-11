import React from 'react'
import CreatorStudioNavbar from './CreatorStudioNavbar'
import CreatorStudioSidebar from './CreatorStudioSidebar'
import CreatorStudioMainContent from './CreatorStudioMainContent'

const CreatorStudio = () => {
  return (
    <div className="mx-auto h-screen min-h-screen max-w-[1320px] ">
    <CreatorStudioNavbar/>
    <div className="flex h-screen">
        <CreatorStudioSidebar/>
        <CreatorStudioMainContent/>
    </div>
    </div>
  )
}

export default CreatorStudio