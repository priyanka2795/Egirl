import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import mikaChanImg from '../../../public/assets/mikaChan.webp';
import galleryTabImg3 from '../../../public/assets/explore-gallery-image2.webp';
import galleryTabImg4 from '../../../public/assets/explore-gallery-Image.webp';
import galleryTabImg5 from '../../../public/assets/explore-gallery-image3.webp';
import UserPlusIcon from '../../../public/assets/user-plus-alt-1.webp';
import RemoveProfile from '@components/list/RemoveProfile';

const exploreGallery = [
  {
    id: 1,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg4,
    categoryList: ['Anime', 'Fashion Model', '+2']
  },
  {
    id: 2,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg3,
    categoryList: ['Anime', 'Fashion Model', '+2']
  },
  {
    id: 3,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg5,
    // categoryList: ['Anime', 'Fashion Model', '+2']
    categoryList: ['list']
  },
  {
    id: 4,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg3,
    categoryList: ['Anime', 'Fashion Model', '+2']
  },
  {
    id: 5,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg4,
    categoryList: ['Anime', 'Fashion Model', '+2']
  },
  {
    id: 6,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg5,
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
  const SideBarCollapse = sessionStorage.getItem('sideBarCollapse');
  const [sideBarCollapses, setSideBarCollapses] = useState(SideBarCollapse);
  const [showUserInfo, setShowUserInfo] = useState(false);
  useEffect(() => {
    setSideBarCollapses(SideBarCollapse);
  }, [SideBarCollapse]);

  return singleProfileState ? (
    <RemoveProfile backFromProfile={setSingleProfileState} />
  ) : (
    <div className='flex items-center justify-center'>
      {/* <div className={`grid  ${sideBarCollapses?'grid-cols-3':'grid-cols-2'} gap-4`}> */}
      <div className='grid grid-cols-3 gap-4'>
        {exploreGallery.map((items, index) => {
          return (
            <div
              className='gallery-card-collection group relative h-full w-full cursor-pointer overflow-hidden rounded-[14px]'
              key={index}
            >
              <Image
                src={items.mainImg}
                alt=''
                className=' h-full w-full object-cover hover:bg-[#000000A3]'
              />
              <div className='absolute inset-0 transition duration-300 cursor-pointer group-hover:bg-black/50'></div>
              <div className='absolute hidden right-3 top-3 group-hover:block '>
                <Image src={UserPlusIcon} />
              </div>
              <div className='hidden group-hover:block  absolute bottom-0 right-0 w-full flex-col items-center justify-start bg-gradient-to-b from-transparent to-black px-6 pb-6 pt-[150px]'>
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
    </div>
  );
};

export default GalleryCardCollection;
