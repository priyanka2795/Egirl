import React from 'react';
import arrowDown from '../../../../public/assets/arrow-down.png';
import Image from 'next/image';

interface filterValueProp {
  filteredValue: string;
}
const FilterDropdown = ({ filteredValue }: filterValueProp) => {
  return (
    <div className='mt-2 flex justify-between rounded-xl bg-white/10 p-3'>
      <div className='text-[15px] text-[#FFF]'>{filteredValue}</div>
      <Image src={arrowDown} alt='' className='object-cover' />
    </div>
  );
};

export default FilterDropdown;
