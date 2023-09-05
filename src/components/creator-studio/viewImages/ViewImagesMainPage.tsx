import React, { useState } from 'react'
import ViewImagesTab from './ViewImagesTab'
import VIMainImageBlock from './VIMainImageBlock'



const tabContent = ['All images', 'Posted', 'Not posted', 'Albums'];

const ViewImagesMainPage = () => {
  const [categoryClose, setCategoryClose] = useState(false)
  const [createGiftClose, setCreateGiftClose] = useState(false);
  const [exploreSelectedTab, setExploreSelected] = useState('All images');
  const [toaster, setToaster] = useState(false);

  setTimeout(() => {
    setToaster(false);
  }, 5000);


  return (
    <div className='flex flex-col gap-5 p-6 rounded-[14px] bg-[#121212] mt-6'>
      
      <ViewImagesTab tabContent={tabContent} exploreSelectedTab={exploreSelectedTab} setExploreSelected={setExploreSelected} />
      
      {exploreSelectedTab === 'Albums' ?
        <VIMainImageBlock ToggleMenu={true} /> : <VIMainImageBlock ToggleMenu={false}/> 
      }

    </div>
  )
}

export default ViewImagesMainPage
