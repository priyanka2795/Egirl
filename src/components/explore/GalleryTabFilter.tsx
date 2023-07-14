import Image from 'next/image';
import React, { useState } from 'react';

const galleryArray = [
  {
    id: 1,
    filterText: 'All',
    filterImg: ''
  },
  {
    id: 2,
    filterText: 'Anime',
    filterImg: ''
  },
  {
    id: 3,
    filterText: ' Furry',
    filterImg: ''
  },
  {
    id: 4,
    filterText: 'Pokemon',
    filterImg: ''
  },
  {
    id: 5,
    filterText: 'Catgirl',
    filterImg: ''
  },
  {
    id: 6,
    filterText: 'Jacket',
    filterImg: ''
  },
  {
    id: 7,
    filterText: 'AI Character',
    filterImg: ''
  }
];
const GalleryTabFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const handleSelectedFilter = (e: any) => {
    setSelectedFilter(e.target.innerText);
  };
  return (
    <div className='mb-8 mt-8 flex px-8'>
      {galleryArray.map((items) => {
        return (
          <div
            onClick={(e) => handleSelectedFilter(e)}
            key={items.id}
            className={`mr-4 inline-flex w-max cursor-pointer items-center justify-start gap-2 rounded-full bg-white bg-opacity-10 py-3 pl-3 pr-4`}
          >
            <div className='flex h-8 items-center justify-center rounded-3xl bg-white bg-opacity-5'>
              <Image className='h-9 w-16' src={items.filterImg} alt='' />
            </div>
            <div className='text-base font-semibold leading-tight text-white'>
              <p>{items.filterText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GalleryTabFilter;
