import React from 'react'

import userProfileImg from '@/assets/user-profile.webp';
import filterImg1 from '@/assets/filter-img-1.webp';
import filterImg2 from '@/assets/filter-img-3.webp';
import filterImg3 from '@/assets/filter-img-2.webp';
import Image from 'next/image';
import { UserEditProfile } from '@components/user/user-edit-profile';
import UserProfile from './svg/user-profile.svg';

interface GalleryTabFilterTileProps{
    selectedFilter: any
    handleSelectedFilter:any
}
const GalleryTabFilterTile = ({selectedFilter , handleSelectedFilter}: GalleryTabFilterTileProps) => {
    
const galleryArray = [
    {
      id: 1,
      filterText: 'All',
      filterImg: userProfileImg
    },
    {
      id: 2,
      filterText: 'Anime',
      filterImg: filterImg1
    },
    {
      id: 3,
      filterText: 'Furry',
      filterImg: filterImg2
    },
    {
      id: 4,
      filterText: 'Pokemon',
      filterImg: filterImg1
    },
    {
      id: 5,
      filterText: 'Catgirl',
      filterImg: filterImg2
    },
    {
      id: 6,
      filterText: 'Jacket',
      filterImg: filterImg3
    },
    {
      id: 7,
      filterText: 'AI Character',
      filterImg: filterImg2
    }
  ];

  return (
    <div className="flex">
      {galleryArray.map((items) => {
          return (
            <div
              onClick={(e) => handleSelectedFilter(e)}
              key={items.id}
              className={`w-max relative z-10 mr-3 flex h-[56px] w-max cursor-pointer items-center justify-start gap-2 rounded-full py-3 pl-3 pr-4 
              last:mr-0 list-last-item [&>*:nth-child(7)]:filter-bg-gradient ${
                selectedFilter === items.filterText
                  ? '!bg-[#5848BC]'
                  : 'bg-white bg-opacity-10 '
              }`}
            >
              <div
                className={`flex items-center justify-center rounded-3xl bg-white bg-opacity-5 `}
              >
                {items.filterText === 'All' ? (
                  <UserProfile className='white-stroke' />
                ) : (
                  <Image
                    className='w-16 h-8 rounded-full'
                    src={items.filterImg}
                    alt=''
                  />
                )}
              </div>
              <div className='text-[15px] font-semibold leading-tight text-white'>
                <p>{items.filterText}</p>
              </div>
            </div>
          );
        })} 
    </div>
  )
}

export default GalleryTabFilterTile
