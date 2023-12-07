import Image from 'next/image';
import React, { useState } from 'react';
import mikaChanImg from '@/assets/mikaChan.webp';
import sarahScarlet from '@/assets/sarahScarlet.webp';
import galleryTabImg3 from '@/assets/gallery-tab-img.webp';
import galleryTabImg4 from '@/assets/mirandalImg.webp';
import galleryTabImg5 from '@/assets/gallery-tab-img-2.webp';
import galleryTabImg6 from '@/assets/gallery-tab-img-3.webp';
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
  const [showStyleModal, setShowStyleModal] = useState<boolean>(false);
  const handleStyleModal = () => {
    setShowStyleModal(true);
  };
  return (
    <>
      <div className='grid grid-cols-3 gap-3'>
        {exploreGallery.map((items, index) => {
          return (
            <div
              key={index}
              className='gallery-card-collection sub-banner group relative max-h-[346px] cursor-pointer'
            >
              <Image
                src={items.mainImg}
                alt=''
                className='object-cover rounded-xl'
              />

              <div className='absolute bottom-0 right-0 flex flex-col items-start justify-start justify-end w-full h-full px-6 pb-3 hover:backdrop-brightness-50 '>
                <div className='absolute left-0 top-0 inline-flex h-6 w-[276px] items-center  justify-start gap-1.5 px-6 pt-6'>
                  <div className='relative flex h-6 w-6 rounded-[100px] '>
                    <Image
                      className='absolute left-0 top-0 h-6 w-6 rounded-[100px]'
                      src={items.userProfile}
                      alt=''
                    />
                  </div>
                  <div className='text-[15px] font-semibold leading-5 text-white'>
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
                  {items.categoryList.map((data, index) => {
                    return (
                      <div
                        key={index}
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
      {showStyleModal && <FavoriteStyleModal closeModal={setShowStyleModal} />}
    </>
  );
};

export default MarketPlaceCards;
