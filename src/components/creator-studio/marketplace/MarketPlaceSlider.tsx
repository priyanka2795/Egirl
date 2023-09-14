import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import userProfileImg from '../../../../public/assets/user-profile.png';
import filterImg1 from '../../../../public/assets/filter-img-1.png';
import filterImg2 from '../../../../public/assets/filter-img-3.png';
import filterImg3 from '../../../../public/assets/filter-img-2.png';
import UserProfile from '../svg/user-profile.svg';

const galleryArray = [
  //   {
  //     id: 1,
  //     filterText: 'All',
  //     filterImg: userProfileImg
  //   },
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
  },
  {
    id: 8,
    filterText: 'AI Character',
    filterImg: filterImg2
  },
  {
    id: 9,
    filterText: 'Furry',
    filterImg: filterImg3
  }
];

const MarketPlaceSlider = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  //   if (selectedFilter === undefined || selectedFilter.length < 1) {
  //     setSelectedFilter('All');
  //   }
  const handleSelectedFilter = (e: any) => {
    setSelectedFilter(e.target.innerText);
  };

  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    variableWidth: true
  };

  return (
    <div className='mb-8 mt-8 flex '>
      <Slider {...settings} className='explore-gallery-filter flex w-[907px]'>
        {galleryArray.map((items) => {
          return (
            <div
              onClick={(e) => handleSelectedFilter(e)}
              // onWheel={(e) => sliderScroll(e)}
              key={items.id}
              className={`list-last-item relative z-10 mr-3 !flex h-[56px] w-max cursor-pointer items-center justify-start gap-2 rounded-full py-3 pl-3 
            pr-4 last:mr-0  ${
              selectedFilter === items.filterText
                ? 'bg-[#5848BC]'
                : 'bg-white bg-opacity-10 '
            } ${items.id === 7 && 'filter-bg-gradient'}`}
            >
              <div
                className={`flex items-center justify-center rounded-3xl bg-white bg-opacity-5`}
              >
                {items.filterText === 'All' ? (
                  <UserProfile className='white-stroke' />
                ) : (
                  <Image
                    className='h-8 w-16 rounded-full'
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
      </Slider>
    </div>
  );
};

export default MarketPlaceSlider;
