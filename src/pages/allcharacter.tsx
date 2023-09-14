import CreatorStudioLayout from '@components/common/CreatorStudioLayout'
import AnalyticsIndex from '@components/creator-studio/Analytics'
import Create from '@components/creator-studio/AllCharacter'
import React from 'react'

const analytics = () => {
  return (
    <CreatorStudioLayout>
        {/* <AnalyticsIndex /> */}
        <Create/>
    </CreatorStudioLayout>
  )
}

export default analytics