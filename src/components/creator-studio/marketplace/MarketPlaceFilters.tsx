import React, { useState, useRef, useEffect } from 'react';
import arrowDown from '@/assets/arrow-down.webp';
import arrowUp from '@/assets/arrow-up.webp';
import Image from 'next/image';
const MarketPlaceFilters = () => {
  const [accessories, setAccessories] = useState<boolean>(false);
  const [style, setStyle] = useState<boolean>(false);
  const [subCategory, setSubCategory] = useState<boolean>(false);
  const [price, setPrice] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('Realistic');
  const [selectedSub, setSelectedSub] = useState<string>('Choose Clothing');
  const [selectedClothing, setSelectedClothing] = useState<string>('Choose Accessories');
  const [selectedPrice, setSelectedPrice] = useState<string>('Free');

  const accessoriesArr = ['Realistic', 'Dress', 'Gold Chain', 'Jacket', 'Jeans', 'Sneakers'];
  const accessoriesArr1 = ['Choose Clothing', 'Dress', 'Gold Chain', 'Jacket', 'Jeans', 'Sneakers'];
  const accessoriesArr2 = ['Choose Accessories', 'Dress', 'Gold Chain', 'Jacket', 'Jeans', 'Sneakers'];
  const accessoriesArr3 = ['Free', 'Dress', 'Gold Chain', 'Jacket', 'Jeans', 'Sneakers'];

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
  const handleSelectedSub = (ele: string) => {
    setSelectedSub(ele);
  };
  const handleSelectedClothing = (ele: string) => {
    setSelectedClothing(ele);
  };
  const handleSelectedPrice = (ele: string) => {
    setSelectedPrice(ele);
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
      setStyle(false);
      setAccessories(false);
      setPrice(false);
      setSubCategory(false);
    }
  };
  return (
    <div className='mt-8'>
      <div className='grid self-stretch grid-cols-4 gap-3' ref={dropdownRef}>
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
              <div className='text-[15px] text-[#FFF]'>{selectedFilter}</div>
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
              <div className='text-[15px] text-[#FFF]'>{selectedSub}</div>
              <Image
                src={accessories ? arrowUp : arrowDown}
                alt=''
                className='object-cover'
              />
            </div>
            {accessories && (
              <div className='absolute right-0 top-[55px] z-50 w-full rounded-xl bg-[#1E1E1E] px-2 py-3'>
                {accessoriesArr1.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer px-2 py-1 ${
                        selectedSub === e
                          ? 'rounded-md bg-white bg-opacity-10'
                          : ''
                      }`}
                      onClick={() => handleSelectedSub(e)}
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
              <div className='text-[15px] text-[#FFF]'>{selectedClothing}</div>
              <Image
                src={subCategory ? arrowUp : arrowDown}
                alt=''
                className='object-cover'
              />
            </div>
            {subCategory && (
              <div className='absolute right-0 top-[55px] z-50 w-full rounded-xl bg-[#1E1E1E] px-2 py-3'>
                {accessoriesArr2.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer px-2 py-1 ${
                        selectedClothing === e
                          ? 'rounded-md bg-white bg-opacity-10'
                          : ''
                      }`}
                      onClick={() => handleSelectedClothing(e)}
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
              <div className='text-[15px] text-[#FFF]'>{selectedPrice}</div>
              <Image
                src={price ? arrowUp : arrowDown}
                alt=''
                className='object-cover'
              />
            </div>
            {price && (
              <div className='absolute right-0 top-[55px] z-50 w-full rounded-xl bg-[#1E1E1E] px-2 py-3'>
                {accessoriesArr3.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer px-2 py-1 ${
                        selectedPrice === e
                          ? 'rounded-md bg-white bg-opacity-10'
                          : ''
                      }`}
                      onClick={() => handleSelectedPrice(e)}
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