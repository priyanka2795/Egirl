import React, { useState } from 'react';
import arrowDown from '../../../../public/assets/arrow-down.png';
import arrowUp from '../../../../public/assets/arrow-up.png';
import Image from 'next/image';
const MarketPlaceFilters = () => {
  const [accessories, setAccessories] = useState(false);
  const [style, setStyle] = useState(false);
  const [subCategory, setSubCategory] = useState(false);
  const [price, setPrice] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');

  const accessoriesArr = ['Dress', 'Gold Chain', 'Jacket', 'Jeans', 'Sneakers'];

  const handleAccessories = () => {
    setAccessories(!accessories);
  };
  const handleStyle = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setStyle(!style);
  };
  const handleSubCategory = () => {
    setSubCategory(!subCategory);
  };
  const handlePrice = () => {
    setPrice(!price);
  };

  const handleSelectedFilter = (ele: string) => {
    setSelectedFilter(ele);
  };
  return (
    <div className='mt-8'>
      <div className='grid grid-cols-4 gap-3 self-stretch'>
        <div>
          <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
            Style
          </div>
          <div className='relative cursor-pointer' onClick={handleStyle}>
            <div
              className={`mt-2 flex justify-between rounded-xl p-3 ${
                style
                  ? 'border border-[#515151] bg-transparent'
                  : 'border border-transparent bg-white/10'
              }`}
            >
              <div className='text-[15px] text-[#FFF]'>Realistic</div>
              <Image
                src={style ? arrowUp : arrowDown}
                alt=''
                className='object-cover'
              />
            </div>
            {style && (
              <div className='absolute right-0 top-[55px] z-50 w-full rounded-xl bg-[#1E1E1E] px-2 py-3'>
                {accessoriesArr.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer px-2 py-1 ${
                        selectedFilter === e
                          ? 'rounded-md bg-white bg-opacity-10'
                          : ''
                      }`}
                      onClick={() => handleSelectedFilter(e)}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
            Subcategory
          </div>
          <div className='relative cursor-pointer' onClick={handleAccessories}>
            <div
              className={`mt-2 flex justify-between rounded-xl p-3 ${
                accessories
                  ? 'border border-[#515151] bg-transparent'
                  : 'border border-transparent bg-white/10'
              }`}
            >
              <div className='text-[15px] text-[#FFF]'>Choose Clothing</div>
              <Image
                src={accessories ? arrowUp : arrowDown}
                alt=''
                className='object-cover'
              />
            </div>
            {accessories && (
              <div className='absolute right-0 top-[55px] z-50 w-full rounded-xl bg-[#1E1E1E] px-2 py-3'>
                {accessoriesArr.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer px-2 py-1 ${
                        selectedFilter === e
                          ? 'rounded-md bg-white bg-opacity-10'
                          : ''
                      }`}
                      onClick={() => handleSelectedFilter(e)}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
            Clothing & Accessories
          </div>
          <div className='relative cursor-pointer' onClick={handleSubCategory}>
            <div
              className={`mt-2 flex justify-between rounded-xl p-3 ${
                subCategory
                  ? 'border border-[#515151] bg-transparent'
                  : 'border border-transparent bg-white/10'
              }`}
            >
              <div className='text-[15px] text-[#FFF]'>Choose Accessories</div>
              <Image
                src={subCategory ? arrowUp : arrowDown}
                alt=''
                className='object-cover'
              />
            </div>
            {subCategory && (
              <div className='absolute right-0 top-[55px] z-50 w-full rounded-xl bg-[#1E1E1E] px-2 py-3'>
                {accessoriesArr.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer px-2 py-1 ${
                        selectedFilter === e
                          ? 'rounded-md bg-white bg-opacity-10'
                          : ''
                      }`}
                      onClick={() => handleSelectedFilter(e)}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
            Price
          </div>
          <div className='relative cursor-pointer' onClick={handlePrice}>
            <div
              className={`mt-2 flex justify-between rounded-xl p-3 ${
                price
                  ? 'border border-[#515151] bg-transparent'
                  : 'border border-transparent bg-white/10'
              }`}
            >
              <div className='text-[15px] text-[#FFF]'>Free</div>
              <Image
                src={price ? arrowUp : arrowDown}
                alt=''
                className='object-cover'
              />
            </div>
            {price && (
              <div className='absolute right-0 top-[55px] z-50 w-full rounded-xl bg-[#1E1E1E] px-2 py-3'>
                {accessoriesArr.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer px-2 py-1 ${
                        selectedFilter === e
                          ? 'rounded-md bg-white bg-opacity-10'
                          : ''
                      }`}
                      onClick={() => handleSelectedFilter(e)}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceFilters;
