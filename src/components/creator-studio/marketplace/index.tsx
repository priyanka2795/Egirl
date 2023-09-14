import React from 'react';
import MarketPlaceSlider from './MarketPlaceSlider';
import MarketPlaceFilters from './MarketPlaceFilters';
import AllStylesCollection from './AllStylesCollection';
import SearchBox from './SearchBox';

function MarketPlaceIndex() {
  return (
    <>
      <SearchBox />
      <MarketPlaceSlider />
      <MarketPlaceFilters />
      <AllStylesCollection />
    </>
  );
}

export default MarketPlaceIndex;
