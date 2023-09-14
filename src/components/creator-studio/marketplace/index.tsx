import React, { useState } from 'react';
import SearchIcon from '../svg/search.svg';
import crossIcon from '../../../../public/assets/xmark (1).png';
import MarketPlaceSlider from './MarketPlaceSlider';
import MarketPlaceFilters from './MarketPlaceFilters';
import AllStylesCollection from './AllStylesCollection';
import Image from 'next/image';
function MarketPlaceIndex() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleShowSearchBar = () => {
    setShowSearchBar(true);
  };
  return (
    <div>
      <div className='flex justify-between'>
        <div className='text-[22px] font-bold leading-8 text-[#FFFFFF]'>
          Marketplace
        </div>
        <div>
          {showSearchBar ? (
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
                />
              </div>
              <div
                className='h-6 w-6 cursor-pointer'
                onClick={() => setShowSearchBar(false)}
              >
                <Image className='h-full w-full' src={crossIcon} alt={''} />
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
      <MarketPlaceSlider />
      <MarketPlaceFilters />
      <AllStylesCollection />
    </div>
  );
}

export default MarketPlaceIndex;
