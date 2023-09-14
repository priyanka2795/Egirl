import React from 'react';
import FilterDropdown from './FilterDropdown';

const MarketPlaceFilters = () => {
  return (
    <div className='mt-8'>
      <div className='grid grid-cols-4 gap-[14px] self-stretch'>
        <div>
          <div className='text-[13px] text-[#979797]'>Style</div>
          <FilterDropdown filteredValue='Realistic' />
        </div>
        <div>
          <div className='text-[13px] text-[#979797]'>Subcategory</div>
          <FilterDropdown filteredValue='Choose Clothing' />
        </div>
        <div>
          <div className='text-[13px] text-[#979797]'>
            Clothing & Accessories
          </div>
          <FilterDropdown filteredValue='Choose Accessories' />
        </div>
        <div>
          <div className='text-[13px] text-[#979797]'>Price</div>
          <FilterDropdown filteredValue='Free' />
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceFilters;
