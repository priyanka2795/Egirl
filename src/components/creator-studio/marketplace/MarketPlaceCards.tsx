import Image from 'next/image';
import React, { useState } from 'react';
import mikaChanImg from '../../../../public/assets/mikaChan.png';
import sarahScarlet from '../../../../public/assets/sarahScarlet.png';
import galleryTabImg3 from '../../../../public/assets/gallery-tab-img.png';
import galleryTabImg4 from '../../../../public/assets/mirandalImg.png';
import galleryTabImg5 from '../../../../public/assets/gallery-tab-img-2.png';
import galleryTabImg6 from '../../../../public/assets/gallery-tab-img-3.png';
import HeartIcon from '../svg/heart-white.svg';
import FavoriteStyleModal from '../view-Styles/FavoriteStyleModal';

const exploreGallery = [
  {
    id: 1,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg3,
    userTitle: 'A-Zovya Photoreal',
    categoryList: ['Clothing', 'Handbag', 'Dress']
  },
  {
    id: 2,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg4,
    userTitle: 'A-Zovya Photoreal',
    categoryList: ['Clothing', 'Handbag', 'Dress', '+2']
  },
  {
    id: 3,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg6,
    userTitle: 'A-Zovya Photoreal',
    categoryList: ['Clothing', 'Handbag', 'Dress']
  },
  {
    id: 4,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: mikaChanImg,
    userTitle: 'A-Zovya Photoreal',
    categoryList: ['Clothing', 'Handbag', 'Dress']
  },
  {
    id: 5,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: sarahScarlet,
    userTitle: 'A-Zovya Photoreal',
    categoryList: ['Clothing', 'Handbag', 'Dress']
  },
  {
    id: 6,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg5,
    userTitle: 'A-Zovya Photoreal',
    categoryList: ['Clothing', 'Handbag', 'Dress']
  }
];

const MarketPlaceCards = () => {
  const [showStyleModal, setShowStyleModal] = useState(false);
  const handleStyleModal = () => {
    setShowStyleModal(true);
  };
  return (
    <>
      <div className='grid grid-cols-3 gap-4 '>
        {exploreGallery.map((items) => {
          return (
            <div className='gallery-card-collection sub-banner group relative cursor-pointer'>
              <Image
                src={items.mainImg}
                alt=''
                className='rounded-xl object-cover'
              />

              <div className='absolute bottom-0 right-0 flex h-full w-full flex-col items-start justify-start justify-end px-6 pb-6 hover:backdrop-brightness-50 '>
                <div className='absolute left-0 top-0 inline-flex h-6 w-[276px] items-center  justify-start gap-1.5 px-6 pt-6'>
                  <div className='relative flex h-6 w-6 rounded-[100px] '>
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
                <div className='invisible absolute right-0 top-0 inline-flex h-6 w-[276px] items-center justify-end gap-1.5 px-6 pt-6 opacity-0 group-hover:visible group-hover:opacity-100'>
                  <HeartIcon />
                </div>
                <div className='mb-2'>
                  <div
                    className='text-[15px] font-semibold  text-white'
                    onClick={handleStyleModal}
                  >
                    {items.userTitle}
                  </div>
                </div>
                <div className='flex items-start justify-start gap-1.5'>
                  {items.categoryList.map((data) => {
                    return (
                      <div
                        className={`show-card"} flex items-center justify-start gap-1 rounded-md bg-white bg-opacity-10 px-2 py-[3px] text-center text-sm font-normal leading-[18px] text-white`}
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
      {showStyleModal && (
        <FavoriteStyleModal setFavoriteStyleModal={setShowStyleModal} />
      )}
    </>
  );
};

export default MarketPlaceCards;
