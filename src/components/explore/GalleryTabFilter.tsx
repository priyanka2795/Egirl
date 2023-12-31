//@ts-nocheck

import Image from 'next/image';
import React, { createRef, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import userProfileImg from '@/assets/user-profile.webp';
import filterImg1 from '@/assets/filter-img-1.webp';
import filterImg2 from '@/assets/filter-img-3.webp';
import filterImg3 from '@/assets/filter-img-2.webp';
import arrowDown from '@/assets/arrow-down.webp';
import xMark from '@/assets/xmark.webp';
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
import Dropdown from '@components/common/Dropdown';
import arrowUpArrowDown from '../../../public/assets/arrow-down-arrow-up2.webp';
import UnSelectIcon from '../../components/creator-studio/svg/short_border.svg';
import SelectIcon from '../../components/creator-studio/svg/short_select.svg';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
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
const short = ['Newest first', 'Oldest first'];

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
  const dispatch = useAppDispatch()
  const token: any = Cookies.get('accessToken');
  const refreshTokenData:string | undefined = useAppSelector((state)=> state.tokenRefresh?.tokenData)
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filterForm, setFilterForm] = useState(false);
  const [galleryData, setGalleryData] = useState<any>();
  const [searchBy, setSearchBy] = useState<string>('');
  const [showAllTags, setShowAllTags] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState({});
  const [appliedFilter, setAppliedFilter] = useState({});
  const [filterTagsBy, setFilterTagsBy] = useState('A');
  const [filteredTags, setFilteredTags] = useState([]);
  const [shortSelect, setShortSelect] = useState<boolean>(false);
  const [shortTab, setShortTab] = useState<number>(1);
  const allFiltersRef=useRef(null);
  const buttonRef=useRef(null);
  const shortSelectRef=useRef(null);
  const shortButtonRef=useRef(null);

  const { ref, isOpen, setIsOpen } = useClickOutside<HTMLDivElement>(false); // Initialize isOpen as false
  const {
    ref: filterRef,
    isOpen: filterOpen,
    setIsOpen: filterIsopen
  } = useClickOutside<HTMLDivElement>(false);

  console.log({ selectedTags });
  console.log({ selectedTags });

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
    if(refreshTokenData){
      Cookies.set("accessToken", refreshTokenData)
    }
    exploreGallery(1, 10, refreshTokenData?refreshTokenData:token)
      .then((res: any) => {
        setGalleryData(res?.data);
        if(res?.response?.status === 401){
          dispatch(tokenRefresh())
        }
        console.log(res, 'exploreGallaryRes????');
      })
      .catch((err) => {
        console.log(err, 'exploreError????');
      });
  }, [refreshTokenData]);

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
    if (Object.keys(selectedTags)?.length === 4) {
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

  const SelectShort = (index: number) => {
    setShortTab(index);
  };
  const clearAll = () => {
    setAppliedFilter({});
    setSelectedTags({});
  };

  useEffect(()=>{
    document.addEventListener('mousedown',handleClickOutside);
    return ()=>{
      document.removeEventListener('mousedown',handleClickOutside)
    }
  },[]);

  const handleClickOutside=(event)=>{
    console.log({event:event.target,ff:allFiltersRef.current})
    if(allFiltersRef.current && !allFiltersRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)){
      closeFilterModal();
    }
    if(shortSelectRef.current && !shortSelectRef.current.contains(event.target) && shortButtonRef.current && !shortButtonRef.current.contains(event.target)){
      setShortSelect(false);
    }
  }

  useEffect(()=>{
    console.log("curr",allFiltersRef.current)
  },[])



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
          closeFilterModal={closeFilterModal}
        />
        
      )}
      {singleProfileState === false ? (
        <>
          <div className='flex flex-col items-center justify-center w-full h-fit'>
            <div className='block w-full mt-2'>
              <SearchBar
                searchBy={searchBy}
                setSearchBy={setSearchBy}
                placeholder='Search'
              />
            </div>
            <div className='flex w-full mb-6'>
              <Slider
                {...settings}
                ref={sliderRef}
                className='flex w-full explore-gallery-filter marketplace-slider'
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
            <div className='flex justify-start gap-2 h-fit'>
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
                  <Image src={xMark} alt='' className='object-cover' />
                </div>
              )}
            </div>
            <div className='flex items-center gap-3'>
              {/* <SearchIcon /> */}
             
               <div className='relative flex'>
                <div ref={buttonRef} onClick={() => {
                    toggleModal();
                  }}>
                <FilterIcon
                    
                  
                  className={`${
                    filterOpen && 'white-stroke'
                  }  cursor-pointer`}
                />
                </div>
                
               
                {filterOpen && Tags?.length && (
                  <GalleryFilterCheckbox
                    applyAllFilters={applyAllFilters}
                    openAllTagsModal={openAllTagsModal}
                    Tags={Tags}
                    filterCloseForm={filterIsopen}
                    selectedTags={selectedTags}
                    getSelectedTagOnClick={getSelectedTagOnClick}
                    clearAll={clearAll}
                    ref={allFiltersRef}
                  />
                )} 
              </div>
              {/* <Dropdown buttonTitle="Newest" options={Tags}/> */}
              <div className='relative flex'>
                <div
                ref={shortButtonRef}
                  r={shortSelectRef}
                  className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full ${
                    shortSelect && 'bg-[#FFFFFF14]'
                  }`}
                  onClick={() => {
                    setShortSelect(!shortSelect);
                  }}
                >
                  <Image src={arrowUpArrowDown} alt={''} />
                </div>
                {shortSelect && (
                  <div ref={shortSelectRef} className='shadow-[0px 8px 12px 0px #0000001F] absolute right-0 top-12 z-50 flex w-[170px] flex-col gap-2 rounded-[14px] bg-[#1A1A1A] px-3 py-4'>
                    {short.map((item, index) => (
                      <div
                        className='flex items-center gap-2 cursor-pointer'
                        onClick={() => SelectShort(index)}
                        key={index}
                      >
                        {shortTab == index ? <SelectIcon /> : <UnSelectIcon />}
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className='flex gap-2 pl-2 border-l cursor-pointer border-white/10'>
                <p>Newest</p>
                <Image src={arrowDown} alt='' className='object-cover' />
              </div>
              {/* <Dropdown buttonTitle='Newest' options={Tags} /> */}
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
