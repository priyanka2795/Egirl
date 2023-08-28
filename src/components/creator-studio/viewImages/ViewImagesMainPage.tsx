import React from 'react'
import ViewImagesTab from './ViewImagesTab'
import VIMainImageBlock from './VIMainImageBlock'

const ViewImagesMainPage = () => {
  return (
    <div className='flex flex-col gap-5 p-6 rounded-[14px] bg-[#121212] mt-6'>
      <ViewImagesTab />
      <VIMainImageBlock />
    </div>
  )
}

export default ViewImagesMainPage
