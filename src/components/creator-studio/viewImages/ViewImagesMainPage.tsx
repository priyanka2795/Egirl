import React, { useState } from 'react'
import ViewImagesTab from './ViewImagesTab'
import VIMainImageBlock from './VIMainImageBlock'
import SuccessModal from './successModal';
import CreateGift from './createGift';
import CreateCategory from './createCategory';

const ViewImagesMainPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [categoryClose, setCategoryClose] = useState(false)
  const [createGiftClose, setCreateGiftClose] = useState(false);

  const ActiveTabs = (index: any) => {
    setActiveIndex(index)
    if (index === 1) {
      setCategoryClose(true);
    }
  }
  const [toaster, setToaster] = useState(false)
  setTimeout(() => {
    setToaster(false);
  }, 5000);
  return (
    <div className='flex flex-col gap-5 p-6 rounded-[14px] bg-[#121212] mt-6'>
      <ViewImagesTab />
      <VIMainImageBlock ActiveTabs={ActiveTabs}/>


      {categoryClose &&
        <CreateCategory CategoryClose={setCategoryClose} CreateGiftClose={setCreateGiftClose} />
      }
      {createGiftClose &&
        <CreateGift CreateGiftClose={setCreateGiftClose} SetToaster={setToaster} />
      }
      <div className={`fixed bottom-5 anim ${toaster ? 'right-0' : '-right-[400px]'}`}>
        <SuccessModal SetToaster={setToaster} />
      </div>
    </div>
  )
}

export default ViewImagesMainPage
