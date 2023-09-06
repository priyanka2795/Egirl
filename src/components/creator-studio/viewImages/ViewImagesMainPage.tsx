import React, { useState } from 'react'
import ViewImagesTab from './ViewImagesTab'
import VIMainImageBlock from './VIMainImageBlock'
import Image from 'next/image';
import arrowUpArrowDown from '../../../../public/assets/arrow-down-arrow-up2.png';
import Prev from '../../../../public/assets/arrow-left.svg';
import filter from '../../../../public/assets/filter.png';
import ViewImagesDropDown from './ViewImagesDropDown';
import threeDots from '../../../../public/assets/dots-horizontal3.png'
import image6 from '../../../../public/assets/vi-image-6.png'

const tabContent = ['All images', 'Posted', 'Not posted', 'Albums'];

const ViewImagesMainPage = () => {
  const [exploreSelectedTab, setExploreSelected] = useState('All images');
  const [allImage, setAllImage] = useState(null);
  // const [toaster, setToaster] = useState(false);

  // setTimeout(() => {
  //   setToaster(false);
  // }, 5000);

  const [albumImages, setAlbumImages] = useState(false)

  const AllImageToggle = (index: any) => {
    setAllImage((prev) => (prev === index ? null : index));

  }

  return (
    <div className='flex flex-col gap-5 p-6 rounded-[14px] bg-[#121212] mt-6'>
      {albumImages ?
        <>
          <div className='flex justify-between pb-5 border-b border-white/[0.08]'>
            <div className='flex items-center gap-2'>
              <button onClick={()=>setAlbumImages(false)}>
                <Prev />
              </button>
              <p className='text-lg font-bold'>Giant dog chasing a bunch of cats</p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='relative flex'>
                <div className={`cursor-pointer w-9 h-9 flex justify-center items-center rounded-full `}>
                  <Image src={arrowUpArrowDown} alt={''} />
                </div>
                <div className={`cursor-pointer w-9 h-9 flex justify-center items-center rounded-full `}>
                  <Image src={filter} alt={''} />
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-3'>
            {Array(5).fill('0').map((_,index) => (
              <div className='relative group w-full h-full'  >
                <Image className='w-full object-cover ' src={image6} alt={''} />
                <div className='cursor-pointer invisible w-[30px] h-[30px] flex items-center justify-center group-hover:visible group-hover:opacity-100 absolute top-[7px] right-[7px] rounded-full bg-black/[0.48]'onClick={() => AllImageToggle(index)} >
                  <Image className='' src={threeDots} alt={''} />
                </div>
                {allImage === index && (
                  <div className='absolute top-12 right-3 z-50' >
                    <ViewImagesDropDown DeleteImage />
                  </div>
                )}
              </div>
            ))}

          </div>
        </>
        :
        <>
          <ViewImagesTab tabContent={tabContent} exploreSelectedTab={exploreSelectedTab} setExploreSelected={setExploreSelected} />
          {exploreSelectedTab === 'Albums' ?
            <VIMainImageBlock ToggleMenu={true} SetAlbumImages={setAlbumImages} /> : <VIMainImageBlock ToggleMenu={false} SetAlbumImages />
          }
        </>
      }


    </div>
  )
}

export default ViewImagesMainPage
