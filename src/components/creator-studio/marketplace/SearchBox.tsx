import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SearchIcon from '../svg/search.svg';
import crossIcon from '@/assets/xmark4.webp';

const TagData = [
  'Anime',
  'Animal crossing',
  'Artistic photography',
  'content',
  'Anesthetically',
  'Astrologyes',
  'Nimes',
  ' crossing',
  'Artistic ',
  'ASMR',
  'Aesthetically'
];
const SearchBox = () => {
  const [searchItems, setSearchItems] = useState('');
  const [isActive, setActive] = useState<boolean>(false);
  const [marketPleaseMenu, setMarketPleaseMenu] = useState<boolean>(false);
  const [filteredTags, setFilteredTags] = useState<string[]>(TagData);
  const handleSearchInput = (e: any) => {
    const value = e.target.value;
    setSearchItems(value);

    // Filter tags based on input
    const filtered = TagData.filter((tag) =>
      tag.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTags(filtered);

    // Show/hide the menu based on input
    setMarketPleaseMenu(value !== '');
  };

  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='font-bold text-[22px] leading-8 text-[#FFFFFF]'>
          Marketplace
        </div>
        <div>
          <button
            className={`relative ${isActive ? 'w-[360px]' : 'h-9 w-[30px]'}`}
          >
            <span
              className={`absolute left-2 z-50 cursor-pointer ${
                isActive ? 'top-[8px]' : 'top-2'
              }
            `}
              onClick={() => {
                setActive(!isActive);
              }}
            >
              <SearchIcon className='h-[24px] w-[24px]' />
            </span>
            <div className='relative'>
              <input
                value={searchItems}
                onChange={handleSearchInput}
                type='text'
                className={` h-10 w-full rounded-[14px] border-none px-4 text-[14px] placeholder:text-[#979797] focus:border-[#FFFFFF52] focus:ring-transparent active:border-[#FFFFFF52] ${
                  isActive ? 'bg-[#FFFFFF0D] pl-10' : 'bg-transparent pl-4'
                }`}
                placeholder='Search'
              />

              {marketPleaseMenu && (
                <div className='absolute left-0 top-[50px] z-50 w-full rounded-xl bg-[#1E1E1E] px-2 py-3'>
                  {filteredTags.length > 0 ? (
                    <>
                      {filteredTags.map((items: any, index: number) => {
                        return (
                          <div
                            className='px-2 py-1 cursor-pointer text-start hover:rounded-md hover:bg-white hover:bg-opacity-10'
                            onClick={() => {
                              setSearchItems(items), setMarketPleaseMenu(false);
                            }}
                          >
                            {items}
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div>NOT FOUND</div>
                  )}
                </div>
              )}
            </div>

            {isActive ? (
              <span
                className='absolute right-2 top-[10px]'
                onClick={() => {
                  setActive(!isActive), setSearchItems('');
                }}
              >
                <Image className='w-full h-full' src={crossIcon} alt={''} />
              </span>
            ) : (
              ''
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
