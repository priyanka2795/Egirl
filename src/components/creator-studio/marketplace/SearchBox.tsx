import React, { useState } from 'react';
import Image from 'next/image';
import SearchIcon from '../svg/search.svg';
import crossIcon from '../../../../public/assets/xmark (1).png';
const SearchBox = () => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);

  const handleShowSearchBar = () => {
    setShowSearchBar(true);
  };
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowSearchBox(true);
    if (!e.target.value) {
      setShowSearchBox(false);
    }
  };
  return (
    <div className='flex items-center justify-between'>
      <div className='text-[22px] font-bold leading-8 text-[#FFFFFF]'>
        Marketplace
      </div>
      <div>
        {showSearchBar ? (
          <div className='relative'>
            <div className='flex items-center gap-2'>
              <div className='relative flex w-full'>
                <div className='absolute left-4 top-2'>
                  <SearchIcon
                    strokeClasses={`stroke-[#515151] transition duration-100`}
                  />
                </div>
                <input
                  className='py-auto h-[40px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] font-light leading-6 text-[#979797] transition duration-100 focus:ring-1 focus:ring-transparent'
                  type='search'
                  placeholder='Search...'
                  onChange={handleSearchInput}
                />
                {showSearchBox && (
                  <div className='absolute left-0 top-[50px] z-50 w-full rounded-xl bg-[#1E1E1E] px-2 py-3'>
                    {Array(5)
                      .fill('')
                      .map(() => {
                        return (
                          <div className='px-2 py-1 cursor-pointer hover:rounded-md hover:bg-white hover:bg-opacity-10'>
                            annim
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
              <div
                className='w-6 h-6 cursor-pointer'
                onClick={() => {
                  setShowSearchBar(false), setShowSearchBox(false);
                }}
              >
                <Image className='w-full h-full' src={crossIcon} alt={''} />
              </div>
            </div>
          </div>
        ) : (
          <SearchIcon
            className='cursor-pointer'
            onClick={handleShowSearchBar}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBox;
