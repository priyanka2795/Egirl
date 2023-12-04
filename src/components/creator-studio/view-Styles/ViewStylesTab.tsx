import React, { useState, useRef, useEffect } from 'react';
import grid2 from '@/assets/grid-horizontal.webp';
import arrowUpArrowDown from '@/assets/arrow-down-arrow-up2.webp';
import filter from '@/assets/filter.webp';
import arrowLeft from '@/assets/arrow-left.webp';
import search from '@/assets/search-alt (1).webp';
import Image from 'next/image';
import Sort from './Sort';
import crossIcon from '@/assets/xmark (1).webp';
import searchIcon from '@/assets/search-icon.webp';
import ViewStyleFilter from './ViewStyleFilter';

interface ViewStylesTabProps {
  component?: string;
  setGeneratedStyle?: any;
  setAddedStyle?: any;
  setPostedStyle?: any;
  tabContent?: any;
  exploreSelectedTab?: any;
  setExploreSelected?: any;
  setViewStyleGenerated?: any;
  ViewStyle?: boolean;
}

const images = [
  {
    image: search
  },
  {
    image: grid2
  },
  {
    image: arrowUpArrowDown
  },
  {
    image: filter
  }
];

const ViewStylesTab = ({
  component,
  setGeneratedStyle,
  setAddedStyle,
  setPostedStyle,
  tabContent,
  exploreSelectedTab,
  setExploreSelected,
  setViewStyleGenerated,
  ViewStyle
}: ViewStylesTabProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [showSort, setShowSort] = useState<boolean>(false);
  const [isActive, setActive] = useState<boolean>(false);
  const [viewStyleFilter, setViewStyleFilter] = useState<boolean>(false);

  const handleActionButtons = (index: number) => {
    setActiveIndex(index);
    if (index === 0) {
      setActive(!isActive);
    } else if (index === 2) {
      setShowSort(!showSort);
    } else if (index === 3) {
      setViewStyleFilter(!viewStyleFilter);
    }
  };

  const handleArrow = () => {
    if (ViewStyle === true) {
      setViewStyleGenerated(false);
    } else {
      setGeneratedStyle(false);
    }
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setShowSort(false);
      setViewStyleFilter(false);
    }
  };

  return (
    <>
      <div className='flex justify-between mt-6' ref={dropdownRef}>
        {component === 'GeneratedStyle' ? (
          <div className='flex items-center gap-2'>
            <Image
              className='object-contain'
              onClick={handleArrow}
              src={arrowLeft}
              alt={''}
            />
            <div className='flex gap-1'>
              <div className='text-[18px] font-bold leading-6 text-white'>
                Generated Styles{' '}
              </div>
              <div className='text-[18px] font-bold leading-6 text-[#979797]'>
                (8)
              </div>
            </div>
          </div>
        ) : component === 'AddedStyle' ? (
          <div className='flex items-center gap-2'>
            <Image
              className='object-contain'
              onClick={() => {
                setAddedStyle(false);
              }}
              src={arrowLeft}
              alt={''}
            />
            <div className='flex gap-1'>
              <div className='text-[18px] font-bold leading-6 text-white'>
                Added Styles{' '}
              </div>
              <div className='text-[18px] font-bold leading-6 text-[#979797]'>
                (128)
              </div>
            </div>
          </div>
        ) : component === 'PostedStyle' ? (
          <div className='flex items-center gap-2'>
            <Image
              className='object-contain'
              onClick={() => {
                setPostedStyle(false);
              }}
              src={arrowLeft}
              alt={''}
            />
            <div className='flex gap-1'>
              <div className='text-[18px] font-bold leading-6 text-white'>
                Posted Styles{' '}
              </div>
              <div className='text-[18px] font-bold leading-6 text-[#979797]'>
                (8)
              </div>
            </div>
          </div>
        ) : (
          <div className='flex items-start justify-start gap-3'>
            {tabContent.map((items: string, index: number) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setExploreSelected(items);
                  }}
                  className={`flex cursor-pointer gap-2.5 rounded-xl px-4 py-2 text-[15px] font-bold ${
                    exploreSelectedTab === items
                      ? 'bg-white bg-opacity-20 text-white'
                      : 'text-neutral-400'
                  }`}
                >
                  {items}
                </div>
              );
            })}
          </div>
        )}

        <div className='flex'>
          {images.map((item, index) => {
            return (
              <div className={`relative flex`} key={index}>
                <div
                  className={`flex items-center justify-center rounded-[100px] px-[10px] py-2 ${
                    activeIndex === index && !isActive ? 'bg-white/[0.05]' : ''
                  }`}
                  onClick={() => handleActionButtons(index)}
                >
                  <Image
                    className={`mt-[3px] ${
                      index === 0 && isActive && 'invisible'
                    }`}
                    src={item.image}
                    alt={''}
                  />
                </div>
                {index === 0 && isActive && (
                  <div className='absolute -right-[2px] -top-[2px] flex w-[360px] justify-between rounded-[10px] bg-white/[0.05] px-3 py-[10px]'>
                    <div className='flex items-center gap-[6px]'>
                      <Image className='' src={searchIcon} alt={''} />
                      <input
                        type='text'
                        className={`h-0 border-none bg-transparent pl-0 text-[14px] font-normal leading-5 text-[#979797] placeholder:text-[14px] placeholder:text-[#979797] focus:ring-0`}
                        placeholder='Search'
                      />
                    </div>
                    <Image
                      className='w-full h-full'
                      onClick={() => setActive(!isActive)}
                      src={crossIcon}
                      alt={''}
                    />
                  </div>
                )}
                {index === 2 && showSort && <Sort />}
                {index === 3 && viewStyleFilter && <ViewStyleFilter />}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ViewStylesTab;

// border border-[#FFFFFF52] bg-transparent rounded-[14px] h-10 px-4 placeholder:text-white active:border-[#FFFFFF52] focus:border-[#FFFFFF52] focus:ring-transparent pl-10 text-[14px] w-full ${isActive ? "border" : 'border-none'}
