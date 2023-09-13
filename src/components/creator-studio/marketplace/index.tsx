import React from 'react';
import SearchIcon from '../svg/search.svg';
import MarketPlaceSlider from './MarketPlaceSlider';
import MarketPlaceFilters from './MarketPlaceFilters';
import AllStylesCollection from './AllStylesCollection';
function MarketPlaceIndex() {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='text-[22px] font-bold leading-8 text-[#FFFFFF]'>
          Marketplace
        </div>
        <div>
          <SearchIcon />
        </div>
      </div>
      <MarketPlaceSlider />
      <MarketPlaceFilters />
      <AllStylesCollection />
    </div>
  );
}

export default MarketPlaceIndex;
