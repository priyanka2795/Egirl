import React, { useState } from 'react';
import CardSlider from './CardSlider';
import ExploreTabs from './ExploreTabs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrowLeftImg from '../../../public/assets/img-arrow-left.png';
import arrowRightImg from '../../../public/assets/img-arrow-right.png';
import subscribeImg from '../../../public/assets/subscribe-arrow-up.png';
import previousImg from '../../../public/assets/previous-img.png';
import nextImg from '../../../public/assets/next-img.png';
import mikaChanImg from '../../../public/assets/mikaChan.png';
import sarahScarlet from '../../../public/assets/sarahScarlet.png';
import galleryTabImg3 from '../../../public/assets/gallery-tab-img.png';
import galleryTabImg4 from '../../../public/assets/mirandalImg.png';
import galleryTabImg5 from '../../../public/assets/gallery-tab-img-2.png';
import galleryTabImg6 from '../../../public/assets/gallery-tab-img-3.png';
import mikaChan from '../../../public/assets/mikaChan.png';
import Image from 'next/image';
import Card from './Card';
import GalleryTabFilter from './GalleryTabFilter';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const exploreOptions = [
  {
    id: 1,
    images: arrowLeftImg,
    title: 'Nope'
  },
  {
    id: 2,
    images: arrowRightImg,
    title: 'Like'
  },
  {
    id: 3,
    images: subscribeImg,
    title: 'Subscribe'
  },
  {
    id: 4,
    images: previousImg,
    title: 'Previous picture'
  },
  {
    id: 5,
    images: nextImg,
    title: 'Next Picture'
  }
];

const exploreGallery = [
  {
    id: 1,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: sarahScarlet
  },
  {
    id: 2,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: mikaChanImg
  },
  {
    id: 3,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg3
  },
  {
    id: 4,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg4
  },
  {
    id: 5,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg5
  },
  {
    id: 6,
    userName: 'Leela',
    userProfile: mikaChanImg,
    mainImg: galleryTabImg6
  }
];

const ExploreIndex = () => {
  const [filterOptionShow, setFilterOptionShow] = useState(true);
  const [exploreSelectedTab, setExploreSelected] = useState('Swipe');

  return (
    <>
      <div>
        <ExploreTabs
          exploreTab={exploreSelectedTab}
          setExploreSelectedTab={setExploreSelected}
        />

        {exploreSelectedTab === 'Swipe' ? (
          <>
            <div className='explore-slider'>
              <Slider {...settings}>
                <CardSlider />
                <CardSlider />
                <CardSlider />
              </Slider>
            </div>

            <div className='mb-[32px] mt-[77px] flex justify-center gap-2'>
              <div
                className='flex cursor-pointer gap-2 rounded-[10px] bg-white/10 px-4 py-[7px] font-bold text-white'
                onClick={() => setFilterOptionShow(!filterOptionShow)}
              >
                <p>Hide</p>
              </div>
              {filterOptionShow &&
                exploreOptions.map((item) => {
                  return (
                    <div className='pointer-events-none flex cursor-pointer gap-2 rounded-[10px] px-4 py-[7px] font-semibold text-[#979797]'>
                      <Image
                        src={item.images}
                        alt=''
                        className='object-contain'
                      />
                      <p>{item.title}</p>
                    </div>
                  );
                })}
            </div>
          </>
        ) : (
          <>
            <GalleryTabFilter />
            <div className='grid grid-cols-3 gap-4 px-8'>
              {exploreGallery.map((items) => {
                return (
                  <div className='relative'>
                    <Image
                      src={items.mainImg}
                      alt=''
                      className='object-cover'
                    />
                    <div className='absolute bottom-0 right-0 w-full flex-col items-center justify-start bg-gradient-to-b from-transparent to-black px-6 pb-6 pt-[205px]'>
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
                        <div className='flex items-center justify-start gap-1 rounded-md bg-white bg-opacity-10 px-2 py-[3px] text-center text-sm font-normal leading-[18px] text-white'>
                          Anime
                        </div>
                        <div className='flex items-center justify-start gap-1 rounded-md bg-white bg-opacity-10 px-2 py-[3px] text-center text-sm font-normal leading-[18px] text-white'>
                          Fashion Model
                        </div>
                        <div className='flex items-center justify-start gap-1 rounded-md bg-white bg-opacity-10 px-2 py-[3px] text-center text-sm font-normal leading-[18px] text-white'>
                          +2
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ExploreIndex;
