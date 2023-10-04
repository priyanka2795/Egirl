import React, { useState } from 'react';
import ViewImagesTab from './ViewImagesTab';
import VIMainImageBlock from './VIMainImageBlock';
import Image from 'next/image';
import arrowUpArrowDown from '../../../../public/assets/arrow-down-arrow-up2.png';
import Prev from '../../../../public/assets/arrow-left.svg';
import filter from '../../../../public/assets/filter.png';
import ViewImagesDropDown from './ViewImagesDropDown';
import threeDots from '../../../../public/assets/dots-horizontal3.png';
import image6 from '../../../../public/assets/vi-image-6.png';
import AlbumImg from '../../../../public/assets/album1.png';
import AlbumImg1 from '../../../../public/assets/album2.png';
import AlbumImg2 from '../../../../public/assets/album3.png';
import AlbumImg3 from '../../../../public/assets/album4.png';
import image4 from '../../../../public/assets/vi-image-4.png';
import image5 from '../../../../public/assets/vi-image-5.png';
const tabContent = ['All images', 'Posted', 'Not posted', 'Albums'];

const album = [
  {
    id: 1,
    image: image5,
    albumName: 'Giant dog chasing a bunch of ...',
    albumImageCount: '8'
  },
  {
    id: 2,
    image: image4,
    albumName: 'Fantasy world & nature',
    albumImageCount: '4'
  },
  {
    id: 3,
    image: AlbumImg1,
    albumName: 'Fantasy world & nature',
    albumImageCount: '5'
  },
  {
    id: 4,
    image: AlbumImg2,
    albumName: 'Fantasy world & nature',
    albumImageCount: '4'
  },
  {
    id: 5,
    image: AlbumImg3,
    albumName: 'Fantasy world & nature',
    albumImageCount: '4'
  },
  {
    id: 6,
    image: AlbumImg,
    albumName: 'Fantasy world & nature',
    albumImageCount: '4'
  }
];
const ViewImagesMainPage = () => {
  const [exploreSelectedTab, setExploreSelected] = useState('All images');
  const [allImage, setAllImage] = useState<number>();
  const [albumData, setAlbumData] = useState(album);

  // const [toaster, setToaster] = useState(false);

  // setTimeout(() => {
  //   setToaster(false);
  // }, 5000);

  const [albumImages, setAlbumImages] = useState(false);

  const AllImageToggle = (index: number) => {
    setAllImage((prev) => (prev === index ? undefined : index));
  };

  // ViewImagesTab
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const filteredItems = album.filter((user) => {
      // user.albumName.toLowerCase().includes(searchTerm.toLowerCase())
      const searchString =
        user.albumName.toLowerCase() + ' ' + user.albumName.toLowerCase();
      return searchString.includes(searchTerm.toLowerCase());
    });
    setAlbumData(filteredItems);
  };

  return (
    <div className='mt-6 flex flex-col gap-5 rounded-[14px] bg-[#121212] p-6'>
      {albumImages ? (
        <>
          <div className='flex justify-between border-b border-white/[0.08] pb-5'>
            <div className='flex items-center gap-2'>
              <button onClick={() => setAlbumImages(false)}>
                <Prev />
              </button>
              <p className='text-lg font-bold'>
                Giant dog chasing a bunch of cats
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='relative flex'>
                <div
                  className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full `}
                >
                  <Image src={arrowUpArrowDown} alt={''} />
                </div>
                <div
                  className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full `}
                >
                  <Image src={filter} alt={''} />
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-3'>
            {Array(5)
              .fill('0')
              .map((_, index: number) => (
                <div className='sub-banner group relative h-full w-full'>
                  <Image
                    className='w-full object-cover '
                    src={image6}
                    alt={''}
                  />
                  <div
                    className='invisible absolute right-[7px] top-[7px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black/[0.48] group-hover:visible group-hover:opacity-100'
                    onClick={() => AllImageToggle(index)}
                  >
                    <Image className='' src={threeDots} alt={''} />
                  </div>
                  {allImage === index && (
                    <div className='absolute right-3 top-12 z-50'>
                      <ViewImagesDropDown DeleteImage />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </>
      ) : (
        <>
          <ViewImagesTab
            tabContent={tabContent}
            exploreSelectedTab={exploreSelectedTab}
            setExploreSelected={setExploreSelected}
            HandleSearch={handleSearch}
            SearchTerm={searchTerm}
          />
          {exploreSelectedTab === 'Albums' ? (
            <VIMainImageBlock
              ToggleMenu={true}
              SetAlbumImages={setAlbumImages}
              AlbumData={albumData}
            />
          ) : (
            <VIMainImageBlock
              ToggleMenu={false}
              // SetAlbumImages
              SetAlbumImages={setAlbumImages}
              AlbumData={albumData}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ViewImagesMainPage;
