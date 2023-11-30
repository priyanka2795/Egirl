import Image from 'next/image';
import React, { createRef, useEffect, useState } from 'react';
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
import { exploreGallery } from 'services/services';
import Cookies from 'js-cookie';
import SearchBar from '@components/common/Search/SearchBar';
import ViewAllTags from '@components/common/ViewAllTags';

const galleryArray = [
  {
    id: 1,
    filterText: 'All',
    userProfileImg
  },
  {
    id: 2,
    filterText: 'Anime'
  },
  {
    id: 3,
    filterText: 'Furry'
  },
  {
    id: 4,
    filterText: ' AI Character'
  },
  {
    id: 5,
    filterText: 'Catgirl'
  },
  {
    id: 6,
    filterText: 'Jacket'
  },
  {
    id: 7,
    filterText: 'Pokemon'
  },
  {
    id: 8,
    filterText: 'AI Character'
  },
  {
    id: 9,
    filterText: 'Furry'
  },
  {
    id: 10,
    filterText: 'Furry2'
  },
  {
    id: 11,
    filterText: 'Furry3'
  }
];

interface GalleryTabFilterProps {
  singleProfileState: boolean;
  setSingleProfileState: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
}
const GalleryTabFilter = ({
  singleProfileState,
  setSingleProfileState,
  userId
}: GalleryTabFilterProps) => {
  const token: any = Cookies.get('accessToken');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filterForm, setFilterForm] = useState(false);
  const [galleryData, setGalleryData] = useState<any>();
  const [searchBy, setSearchBy] = useState<string>('');
  const [showAllTags, setShowAllTags] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [appliedFilter, setAppliedFilter] = useState([]);

  const [Tags] = useState([
    'Furry',
    'Ahegao',
    'NSFW',
    'Roleplay',
    'Fashion Model',
    'Furry2',
    'Ahegao2',
    'NSFW2',
    'Roleplay2',
    'Fashion Model2'
  ]);

  if (selectedFilter === undefined || selectedFilter.length < 1) {
    setSelectedFilter('All');
  }
  const handleSelectedFilter = (item: string) => {
    setSelectedFilter(item);
  };

  useEffect(() => {
    exploreGallery(1, 10, token)
      .then((res: any) => {
        setGalleryData(res?.data);
        console.log(res, 'exploreGallaryRes????');
      })
      .catch((err) => {
        console.log(err, 'exploreError????');
      });
  }, []);

  useEffect(() => {
    if (selectedTags?.length >= 4) {
      closeAllTagsModal();
    }
  }, [JSON.stringify(selectedTags)]);

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

  const openAllTagsModal = () => {
    setFilterForm(false);
    setShowAllTags(true);
  };

  const closeAllTagsModal = () => {
    if (filterForm) {
      setFilterForm(false);
    } else {
      setFilterForm(true);
    }
    setShowAllTags(false);
  };

  const closeFilterModal = () => {
    setFilterForm(false);
    setShowAllTags(false);
  };

  const getSelectedTagOnClick = (item: any) => {
    console.log({ item });
    if (selectedTags.includes(item)) {
      let data = selectedTags?.filter((i) => i !== item);
      setSelectedTags(data);
      return;
    }
    setSelectedTags([...selectedTags, item]);
  };

  const applyAllFilters = () => {
    closeFilterModal();
    setAppliedFilter([...appliedFilter, ...selectedTags]);
  };

  const removeAppliedFilters = (item) => {
    let data = appliedFilter?.filter((i) => i !== item);
    setSelectedTags(data);
    setAppliedFilter(data);
  };

  const clearAll = () =>{
    setSelectedTags([])
  }

  return (
    <>
      {showAllTags && (
        <ViewAllTags
          getSelectedTagOnClick={getSelectedTagOnClick}
          selectedTags={selectedTags}
          Tags={Tags}
          closeAllTagsModal={closeAllTagsModal}
        />
      )}
      {singleProfileState === false ? (
        <>
          <div className='flex h-fit w-full flex-col items-center justify-center'>
            <div className='mt-8 block w-full'>
              <SearchBar
                searchBy={searchBy}
                setSearchBy={setSearchBy}
                placeholder='Search'
              />
            </div>
            <div className='mb-7 mt-6 flex w-full'>
              <Slider
                {...settings}
                ref={sliderRef}
                className='explore-gallery-filter marketplace-slider flex w-full'
              >
                {galleryArray.map((items, index) => {
                  return (
                    <div
                      onClick={(e) => handleSelectedFilter(items.filterText)}
                      key={index}
                      className={`list-last-item relative z-10 !flex w-max cursor-pointer items-center justify-start gap-2 rounded-full px-4 py-3 last:mr-0  ${
                        selectedFilter === items.filterText
                          ? '!bg-[#5848BC]'
                          : 'bg-white bg-opacity-10 '
                      } `}
                    >
                      <div className='text-[15px] font-semibold leading-tight text-white'>
                        <p>{items.filterText}</p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>

          <div className='mb-[23px] flex justify-between gap-2'>
            <div className='flex h-fit w-full justify-start gap-2'>
              {appliedFilter.length ? (
                appliedFilter?.map((item) => (
                  <div
                    className={`font-normal flex flex-shrink-0 cursor-pointer items-center gap-1 rounded-lg bg-white/10 px-[10px] py-1 text-xs leading-none text-white ${
                      selectedFilter === 'All' ? '' : 'py-3'
                    }`}
                  >
                    <UserProfile />
                    <div className='text-[13px]'>{item}</div>
                    <Image
                      src={xMark}
                      alt=''
                      className='object-cover'
                      onClick={() => removeAppliedFilters(item)}
                    />
                  </div>
                ))
              ) : (
                <div className='font-normal All flex cursor-pointer items-center  gap-1 rounded-lg px-[10px] py-1 text-xs leading-none text-white'></div>
              )}
            </div>
            <div className='flex items-center gap-3'>
              <SearchIcon />
              <div className='relative'>
                <FilterIcon
                  onClick={() => {
                    closeAllTagsModal();
                  }}
                  className={`${filterForm && 'white-stroke'} cursor-pointer`}
                />
                {filterForm && (
                  <GalleryFilterCheckbox
                    applyAllFilters={applyAllFilters}
                    openAllTagsModal={openAllTagsModal}
                    Tags={Tags}
                    filterCloseForm={setFilterForm}
                    selectedTags={selectedTags}
                    getSelectedTagOnClick={getSelectedTagOnClick}
                    clearAll= {clearAll}
                  />
                )}
              </div>
              <div className='flex gap-2 border-l border-white/10 pl-2'>
                <p>Newest</p>
                <Image src={arrowDown} alt='' className='object-cover' />
              </div>
            </div>
          </div>
        </>
      ) : null}
      <GalleryCardCollection
        selectedFilter={selectedFilter}
        singleProfileState={singleProfileState}
        setSingleProfileState={setSingleProfileState}
      />
    </>
  );
};

export default GalleryTabFilter;
