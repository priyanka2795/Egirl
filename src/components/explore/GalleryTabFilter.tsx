//@ts-nocheck

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
import useClickOutside from '../../api/utils/useClickOutside';
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
  const [selectedTags, setSelectedTags] = useState({});
  const [appliedFilter, setAppliedFilter] = useState({});
  const [filterTagsBy, setFilterTagsBy] = useState('A');
  const [filteredTags, setFilteredTags] = useState([]);
  const { ref, isOpen, setIsOpen } = useClickOutside<HTMLDivElement>(false); // Initialize isOpen as false
  const {
    ref: filterRef,
    isOpen: filterOpen,
    setIsOpen: filterIsopen
  } = useClickOutside<HTMLDivElement>(false);

  const toggleModal = () => {
    if (filterOpen) {
      filterIsopen(false);
    } else {
      filterIsopen(true);
    }
    setIsOpen(false);
  };

  const [Tags, setTags] = useState([
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
    let data = Tags?.filter((i) => String(i).startsWith(filterTagsBy));
    console.log({ data });
    setFilteredTags(data);
  }, [filterTagsBy]);

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
    if (!isOpen && Object.keys(selectedTags)?.length) {
      let TagsOrder = [];
      for (let item of Tags) {
        if (selectedTags[item]) {
          TagsOrder.unshift(item);
        } else {
          TagsOrder.push(item);
        }
      }
      setTags([...TagsOrder]);
    }
  }, [isOpen]);

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
    filterIsopen(false);
    setIsOpen(true);
  };

  const closeFilterModal = () => {
    filterIsopen(false);
    setIsOpen(false);
  };

  const getSelectedTagOnClick = (item: any) => {
    if (selectedTags[item]) {
      let copySelectedTags = { ...selectedTags };
      copySelectedTags[item] = false;
      setSelectedTags({ ...copySelectedTags });
      return;
    }
    if (Object.keys(selectedTags)?.length >= 4) {
      let copySelectedTags = { ...selectedTags };
      let array = Object.keys(copySelectedTags);
      delete copySelectedTags[array[array.length - 1]];
      setSelectedTags({ ...copySelectedTags, [item]: true });
      return;
    }
    setSelectedTags({ ...selectedTags, [item]: true });
  };

  const applyAllFilters = () => {
    closeFilterModal();
    let copyAppliedFilter = {};
    if (Object.keys(selectedTags)?.length) {
      for (let item of Object.keys(selectedTags)) {
        if (selectedTags[item]) {
          copyAppliedFilter['tag'] = copyAppliedFilter['tag']
            ? [...copyAppliedFilter['tag'], item]
            : [item];
          console.log({ keys: copyAppliedFilter });
        }
      }
      setAppliedFilter(copyAppliedFilter);
    }
  };

  const removeAppliedFilters = (KEY, item) => {
    let copyAppliedFilter = { ...appliedFilter };
    let copySelectedTags = { ...selectedTags };
    let filterApplied = copyAppliedFilter[KEY]?.filter((i) => i !== item);
    copyAppliedFilter[KEY] = filterApplied;
    copySelectedTags[item] = false;
    setAppliedFilter(copyAppliedFilter);
    setSelectedTags(copySelectedTags);
  };

  const clearAll = () => {
    setAppliedFilter({});
    setSelectedTags({});
  };

  return (
    <>
      {isOpen && (
        <ViewAllTags
          getSelectedTagOnClick={getSelectedTagOnClick}
          selectedTags={selectedTags}
          closeAllTagsModal={toggleModal}
          setSelectedTags={setSelectedTags}
          setFilterTagsBy={setFilterTagsBy}
          filterTagsBy={filterTagsBy}
          filteredTags={filteredTags}
        />
      )}
      {singleProfileState === false ? (
        <>
          <div className='flex h-fit w-full flex-col items-center justify-center'>
            <div className='mt-2 block w-full'>
              <SearchBar
                searchBy={searchBy}
                setSearchBy={setSearchBy}
                placeholder='Search'
              />
            </div>
            <div className='mb-6 flex w-full'>
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
              {Object.keys(appliedFilter).length ? (
                Object.keys(appliedFilter)?.map((item) => {
                  return appliedFilter[item]?.map((i) => (
                    <div className='font-normal flex flex-shrink-0 cursor-pointer items-center gap-1 rounded-lg bg-white/10 px-[10px] py-1 text-xs leading-none text-white'>
                      <UserProfile />
                      <div className='text-[13px]'>{i}</div>
                      <Image
                        src={xMark}
                        alt=''
                        className='object-cover'
                        onClick={() => removeAppliedFilters(item, i)}
                      />
                    </div>
                  ));
                })
              ) : (
                <div className='font-normal pointer-none flex flex-shrink-0 cursor-pointer items-center gap-1 rounded-lg bg-white/10 px-[10px] py-1 text-xs leading-none text-white'>
                  <UserProfile />
                  <div className='text-[13px]'>All</div>
                  <Image
                    src={xMark}
                    alt=''
                    className='object-cover'
                  />
                </div>
              )}
            </div>
            <div className='flex items-center gap-3'>
              {/* <SearchIcon /> */}
              <div className='relative'>
                <FilterIcon
                  onClick={() => {
                    toggleModal(); 
                  }}
                  className={`${filterOpen && 'white-stroke'} cursor-pointer`}
                />
                {filterOpen && Tags?.length && (
                  <GalleryFilterCheckbox
                    applyAllFilters={applyAllFilters}
                    openAllTagsModal={openAllTagsModal}
                    Tags={Tags}
                    filterCloseForm={filterIsopen}
                    selectedTags={selectedTags}
                    getSelectedTagOnClick={getSelectedTagOnClick}
                    clearAll={clearAll}
                  />
                )}
              </div>
              <div className='flex cursor-pointer gap-2 border-l border-white/10 pl-2'>
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
