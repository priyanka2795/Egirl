import Image from 'next/image';
import React, { useState } from 'react';
import mikaChanImg from '../../../public/assets/mikaChan.png';
import sarahScarlet from '../../../public/assets/sarahScarlet.png';
import galleryTabImg3 from '../../../public/assets/gallery-tab-img.png';
import galleryTabImg4 from '../../../public/assets/mirandalImg.png';
import galleryTabImg5 from '../../../public/assets/gallery-tab-img-2.png';
import galleryTabImg6 from '../../../public/assets/gallery-tab-img-3.png';
import UserPlusIcon from '../../../public/assets/user-plus-alt-1.png';
import RemoveProfile from '@components/list/RemoveProfile';

const exploreGallery = [
  {
    id: 1,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: sarahScarlet,
    categoryList: ['Anime', 'Fashion Model', '+2']
  },
  {
    id: 2,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: mikaChanImg,
    categoryList: ['Anime', 'Fashion Model', '+2']
  },
  {
    id: 3,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg3,
    // categoryList: ['Anime', 'Fashion Model', '+2']
    categoryList: ['list']
  },
  {
    id: 4,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg4,
    categoryList: ['Anime', 'Fashion Model', '+2']
  },
  {
    id: 5,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg5,
    categoryList: ['Anime', 'Fashion Model', '+2']
  },
  {
    id: 6,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg6,
    categoryList: ['Anime', 'Fashion Model', '+2']
  }
];

interface GalleryCardProp {
  selectedFilter: string;
  singleProfileState: boolean;
  setSingleProfileState: React.Dispatch<React.SetStateAction<boolean>>;
}
const GalleryCardCollection = ({
  selectedFilter,
  singleProfileState,
  setSingleProfileState
}: GalleryCardProp) => {
  // const [showRemoveProfile, setShowRemoveProfile] = useState(false);
  return singleProfileState ? (
    <RemoveProfile backFromProfile={setSingleProfileState} />
  ) : (
    <div className='grid grid-cols-3 gap-4'>
      {exploreGallery.map((items) => {
        return (
          <div
            className='relative cursor-pointer gallery-card-collection group'
            onClick={() => setSingleProfileState(true)}
          >
            {/* <div className='relative group'> */}
            <Image
              src={items.mainImg}
              alt=''
              className='rounded-[14px] object-cover hover:bg-[#000000A3] w-full h-full'
            />
            {/* </div> */}
            <div className='absolute inset-0 transition duration-300 cursor-pointer group-hover:bg-black/50'></div>
            <div className='absolute hidden right-3 top-3 group-hover:block '>
              <Image src={UserPlusIcon} />
            </div>
            <div className='absolute bottom-0 right-0 w-full flex-col items-center justify-start bg-gradient-to-b from-transparent to-black px-6 pb-6 pt-[150px]'>
              <div className='inline-flex h-6 w-[276px] items-center justify-start gap-1.5'>
                <div className='relative flex h-6 w-6 rounded-[100px]'>
                  <Image
                    className='absolute left-0 top-0 h-6 w-6 rounded-[100px]'
                    src={items.userProfile}
                    alt=''
                  />
                </div>
                <div className='text-[15px] font-semibold text-white'>
                  {items.userName}
                </div>
              </div>
              <div className='flex items-start justify-start gap-1.5'>
                {items.categoryList.map((data) => {
                  return (
                    <div
                      className={`font-normal flex items-center justify-start gap-1 rounded-md bg-white bg-opacity-10 px-2 py-[3px] text-center text-sm leading-[18px] text-white ${
                        data === selectedFilter ? 'show-card' : 'hide-card'
                      }`}
                    >
                      {data}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GalleryCardCollection;
