import Image from 'next/image';
import React, { useState } from 'react';
import Search from '@/assets/search-alt (1).webp';

const ViewStyleFilter = () => {
  const filterTabText = ['Realistic', 'Semi-Realistic', 'Anime'];
  const clothing = ['Dress', 'Jacket', 'Jeans', 'Top'];
  const clothingViewAll = [
    'Dress',
    'Jacket',
    'Jeans',
    'Top',
    'style1',
    'style2',
    'style3'
  ];
  const accessories = ['Bag', 'Chain', 'Rings', 'Rings'];
  const accessoriesViewAll = [
    'Bag',
    'Chain',
    'Rings',
    'Rings',
    'style1',
    'style2',
    'style3'
  ];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [clothingAll, setClothingAll] = useState<boolean>(false);
  const [accessoriesAll, setAccessoriesAll] = useState<boolean>(false);
  const [filterValues, setFilterValues] = useState<object>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    console.log(`${value} is ${checked}`);

    if (checked) {
      setFilterValues({
        ...filterValues,
        [value]: true
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setFilterValues({
        ...filterValues,
        [value]: false
      });
    }
  };

  const handleReset = (e: React.MouseEvent<HTMLElement>) => {
    setFilterValues({});
  };

  return (
    <div className='absolute right-0 top-12 z-50 flex w-[392px] flex-col rounded-[14px] border border-white/[0.05] bg-[#1A1A1A]'>
      <form>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between px-6 py-5'>
            <div className='text-[18px] font-bold leading-6 text-white'>
              Filters
            </div>
            <button
              onClick={handleReset}
              type='reset'
              className='text-[14px] font-normal leading-[18px] text-[#979797]'
            >
              Clear all
            </button>
          </div>
          <div className='relative px-6 pb-5'>
            <div className='absolute left-[31px] top-[9px] mr-[6px]'>
              <Image src={Search} className='' />
            </div>
            <input
              type='text'
              id='category'
              placeholder='Search'
              className='h-10 w-full rounded-[14px] border-none bg-[#FFFFFF0D] pl-8 text-white placeholder:text-[#979797] focus:border-none focus:ring-0 active:border-none'
              name='category'
            />
          </div>
        </div>
        <div className='flex flex-col gap-5 px-4'>
          <div className='flex flex-col gap-3'>
            <div className='text-[15px] font-semibold leading-5 text-white'>
              Style
            </div>
            <div className='flex overflow-hidden rounded-[16px] border border-[#3A3A3A] items-center self-start'>
              {filterTabText.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`cursor-pointer items-center justify-center px-6 py-3 text-[15px] font-semibold leading-5 text-white ${
                      index !== 2 ? 'border-r border-[#3A3A3A]' : ''
                    } ${activeIndex === index ? 'bg-[#5848BC]' : ''}`}
                    onClick={() => {
                      setActiveIndex(index);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className='flex flex-col gap-4 border-b border-white/[0.08] pb-5'>
            <div className='text-[15px] font-semibold leading-5 text-white'>
              Clothing
            </div>
            <div className='flex flex-col gap-4'>
              {clothingAll ? (
                <>
                  {clothingViewAll.map((item, index) => {
                    return (
                      <div key={index} className='flex gap-2'>
                        <input
                          className='h-5 w-5 rounded border-[#FFFFFF3D] bg-transparent text-[#5848BC] focus:ring-0 dark:ring-offset-0  dark:focus:ring-0 '
                          type='checkbox'
                          value={item}
                          onChange={handleChange}
                        />
                        <label htmlFor={item}>{item}</label>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  {clothing.map((item, index) => {
                    return (
                      <div key={index} className='flex gap-2'>
                        <input
                          className='h-5 w-5 rounded border-[#FFFFFF3D] bg-transparent text-[#5848BC] focus:ring-0 dark:ring-offset-0 dark:focus:ring-0'
                          type='checkbox'
                          value={item}
                          onChange={handleChange}
                        />
                        <label htmlFor={item}>{item}</label>
                      </div>
                    );
                  })}
                  <div
                    className='cursor-pointer text-[14px] font-semibold leading-[18px] text-[#8C7DD0]'
                    onClick={() => {
                      setClothingAll(true);
                    }}
                  >
                    View all
                  </div>
                </>
              )}
            </div>
          </div>
          <div className='flex flex-col gap-4 border-b border-white/[0.08] pb-5'>
            <div className='text-[15px] font-semibold leading-5 text-white'>
              Accessories
            </div>
            <div className='flex flex-col gap-4'>
              {accessoriesAll ? (
                <>
                  {accessoriesViewAll.map((item, index) => {
                    return (
                      <div key={index} className='flex gap-2'>
                        <input
                          className='h-5 w-5 rounded border-[#FFFFFF3D] bg-transparent text-[#5848BC] focus:ring-0 dark:ring-offset-0  dark:focus:ring-0 '
                          type='checkbox'
                        />
                        <label htmlFor={item}>{item}</label>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  {accessories.map((item, index) => {
                    return (
                      <div key={index} className='flex gap-2'>
                        <input
                          className='h-5 w-5 rounded border-[#FFFFFF3D] bg-transparent text-[#5848BC] focus:ring-0 dark:ring-offset-0  dark:focus:ring-0 '
                          type='checkbox'
                        />
                        <label htmlFor={item}>{item}</label>
                      </div>
                    );
                  })}
                  <div
                    className='cursor-pointer text-[14px] font-semibold leading-[18px] text-[#8C7DD0]'
                    onClick={() => {
                      setAccessoriesAll(true);
                    }}
                  >
                    View all
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <button className='flex w-full border-t border-white/[0.08] p-6'>
          <div className='w-full items-center justify-center rounded-[12px] bg-[#5848BC] px-4 py-[10px] text-[14px] font-bold leading-5 text-white'>
            Apply
          </div>
        </button>
      </form>
    </div>
  );
};

export default ViewStyleFilter;
