import React, { useState } from 'react'
import ViewImagesMainPage from './ViewImagesMainPage'
import Image from 'next/image';
import plusIcon from '../../../../public/assets/plus-large.png';
import CreateCategory from '../gifts/createCategory';
import CreateGift from '../gifts/createGift';

const ViewImagesIndex = () => {
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const [showCreateGift, setShowCreateGift] = useState(false);
  return (
    <>
    <div className="flex justify-between">
      <div className="text-[22px] font-bold leading-8 text-[#FFFFFF]">View Images</div>
      <button className="cursor-pointer bg-[#5848BC] flex items-center justify-center h-10 gap-1.5 rounded-xl px-4 py-[10px]" onClick={() => {setShowCreateCategory(true)}}>
        <Image className='h-[18px] w-[18px]' src={plusIcon} alt={''} />
        Create
      </button>
    </div>
    <ViewImagesMainPage />

    </>
  )
}

export default ViewImagesIndex