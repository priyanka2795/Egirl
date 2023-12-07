import Image from 'next/image';
import React, { useState, createRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import filterImg1 from '@/assets/filter-img-1.webp';
import filterImg2 from '@/assets/filter-img-3.webp';
import filterImg3 from '@/assets/filter-img-2.webp';

const galleryArray = [
  {
    id: 1,
    filterText: 'Anime',
    filterImg: filterImg1
  },
  {
    id: 2,
    filterText: 'Furry',
    filterImg: filterImg2
  },
  {
    id: 3,
    filterText: 'Pokemon',
    filterImg: filterImg1
  },
  {
    id: 4,
    filterText: 'Catgirl',
    filterImg: filterImg2
  },
  {
    id: 5,
    filterText: 'Jacket',
    filterImg: filterImg3
  },
  {
    id: 6,
    filterText: 'AI Character',
    filterImg: filterImg2
  },
  {
    id: 7,
    filterText: 'AI Character',
    filterImg: filterImg2
  },
  {
    id: 8,
    filterText: 'Furry',
    filterImg: filterImg3
  },
  {
    id: 9,
    filterText: 'Anime',
    filterImg: filterImg1
  }
];

const MarketPlaceSlider = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  const handleSelectedFilter = (e: React.MouseEvent<HTMLElement>) => {
    setSelectedFilter((e.target as HTMLElement).innerText);
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

  const sliderRef = createRef<any>();
  useEffect(() => {
    let slickListDiv = document.getElementsByClassName('slick-list')[0];
    slickListDiv.addEventListener('wheel', (event: any) => {
      event.preventDefault();
      event.deltaY > 0
        ? sliderRef?.current?.slickNext()
        : sliderRef?.current?.slickPrev();
    });
  }, []);

  return (
    <div className='w-full px-3 my-6'>
      <Slider
        {...settings}
        ref={sliderRef}
        className='explore-gallery-filter marketplace-slider flex w-[993px] w-full'
      >
        {galleryArray.map((items) => {
          return (
            <div
              onClick={(e) => handleSelectedFilter(e)}
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
                <Image
                  className='w-16 h-8 rounded-full'
                  src={items.filterImg}
                  alt=''
                />
              </div>

              <div className='text-[15px] font-semibold leading-5 text-white'>
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
