import React, { useEffect, useState } from 'react';
import MarketPlaceSlider from './MarketPlaceSlider';
import MarketPlaceFilters from './MarketPlaceFilters';
import AllStylesCollection from './AllStylesCollection';
import SearchBox from './SearchBox';

function MarketPlaceIndex() {

  return (
    <div className=''>
      <SearchBox />
      <MarketPlaceSlider />
      <MarketPlaceFilters />
      <AllStylesCollection />
   
    </div>
  );
}

export default MarketPlaceIndex;
