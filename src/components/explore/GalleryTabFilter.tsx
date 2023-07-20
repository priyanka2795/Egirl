import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import userProfileImg from '../../../public/assets/user-profile.png';
import filterImg1 from '../../../public/assets/filter-img-1.png';
import filterImg2 from '../../../public/assets/filter-img-3.png';
import filterImg3 from '../../../public/assets/filter-img-2.png';
import arrowDown from '../../../public/assets/arrow-down.png';
import xMark from '../../../public/assets/xmark.png';
import UserProfile from './svg/user-profile.svg';
import SearchIcon from './svg/search.svg';
import FilterIcon from './svg/filter.svg';
import GalleryFilterCheckbox from './GalleryFilterCheckbox';
import GalleryCardCollection from './GalleryCardCollection';

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
  },
  {
    id: 8,
    filterText: 'AI Character',
    filterImg: filterImg2
  }
];
const GalleryTabFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filterForm, setFilterForm] = useState(false);

  if (selectedFilter === undefined || selectedFilter.length < 1) {
    setSelectedFilter('All');
  }
  const handleSelectedFilter = (e: any) => {
    setSelectedFilter(e.target.innerText);
    // console.log(e, 'e.target');
  };
  
  const settings = {
    dots: true,
    infinite: true,
    arrows:true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <>
      <div className='flex mt-8 mb-8'>
    
      <Slider {...settings} className="flex w-[907px] explore-gallery-filter">
    {galleryArray.map((items) => {
      return (
            <div
              onClick={(e) => handleSelectedFilter(e)}
              key={items.id}
              className={`w-max relative z-10 mr-3 !flex h-[56px] w-max cursor-pointer items-center justify-start gap-2 rounded-full py-3 pl-3 pr-4 
              last:mr-0 list-last-item  ${
                selectedFilter === items.filterText
                  ? '!bg-[#5848BC]'
                  : 'bg-white bg-opacity-10 '
              } ${items.id === 7 && 'filter-bg-gradient'}`}
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
        </Slider>
    
        
      </div>

      <div className='mb-[23px] flex justify-between gap-10'>
        <div
          className={`flex cursor-pointer items-center gap-1 rounded-lg bg-white/10 px-[10px] py-1 text-xs font-normal leading-none text-white ${
            selectedFilter === 'All' ? '' : 'py-3'
          }`}
        >
          {selectedFilter === 'All' && <UserProfile />}
          <div className='text-[13px]'>{selectedFilter}</div>
          {selectedFilter !== 'All' && (
            <Image src={xMark} alt='' className='object-cover' onClick={ () => setSelectedFilter('All')} />
          )}
        </div>
        <div className='flex items-center gap-3'>
          <SearchIcon />
          <div className='relative'>
            <FilterIcon
              onClick={() => setFilterForm(!filterForm)}
              className={`${filterForm && 'white-stroke'}`}
            />
            {filterForm && <GalleryFilterCheckbox />}
          </div>
          <div className='flex gap-2 pl-2 border-l border-white/10'>
            <p>Newest</p>
            <Image src={arrowDown} alt='' className='object-cover' />
          </div>
        </div>
      </div>

      <GalleryCardCollection selectedFilter={selectedFilter}/>
    </>
  );
};

export default GalleryTabFilter;
