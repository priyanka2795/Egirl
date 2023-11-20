import React, { useState, useEffect, useRef } from 'react';
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
import image1 from '../../../../public/assets/vi-image-1.png';
import image2 from '../../../../public/assets/vi-image-2.png';
import image3 from '../../../../public/assets/vi-image-3.png';
import image4 from '../../../../public/assets/vi-image-4.png';
import image5 from '../../../../public/assets/vi-image-5.png';
import image7 from '../../../../public/assets/vi-image-7.png';
import plusIcon from '../../../../public/assets/plus-gray.png';
import user from '../../../../public/assets/circle-user.png';
import imageSquare from '../../../../public/assets/image-square.png';
import image from '../../../../public/assets/image.png';
import undo from '../../../../public/assets/Undo.png';
import deleteIcon from '../../../../public/assets/trash-blank-alt.png';
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

const images = [
  {
    image: image1
  },
  {
    image: image2
  },
  {
    image: image3
  },
  {
    image: image4
  },
  {
    image: image5
  },
  {
    image: image6
  },
  {
    image: image7
  },
  {
    image: image6
  }
];
const toggleImages = [
  {
    image: plusIcon,
    text: 'Create new post'
  },
  {
    image: image,
    text: 'Make album cover'
  },
  {
    image: user,
    text: 'Make profile picture'
  },
  {
    image: imageSquare,
    text: 'Make profile cover'
  },
  {
    image: undo,
    text: 'Move to album'
  },
  {
    image: deleteIcon,
    text: 'Delete'
  }
];
const ViewImagesMainPage = () => {
  const [exploreSelectedTab, setExploreSelected] =
    useState<string>('All images');
  const [allImage, setAllImage] = useState<number>();
  const [albumData, setAlbumData] = useState(album);

  // const [toaster, setToaster] = useState(false);

  // setTimeout(() => {
  //   setToaster(false);
  // }, 5000);

  const [albumImages, setAlbumImages] = useState<boolean>(false);

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
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setAllImage(undefined);
    }
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
                  <Image src={filter} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-3' ref={dropdownRef}>
            {images.map((items, index: number) => (
              <div className='sub-banner group relative h-full w-full rounded-[16px]' >
                <Image
                  className='w-full rounded-[16px] object-cover'
                  src={items.image}
                  alt={''}
                />
                <div
                  className='invisible absolute right-[7px] top-[7px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black/[0.48] group-hover:visible group-hover:opacity-100'
                  onClick={() => AllImageToggle(index)}
                >
                  <Image className='' src={threeDots} alt={''} />
                </div>
                {allImage === index && (
                  <div className='absolute z-50 right-3 top-12'>
                    <div className='flex w-[218px] flex-col rounded-[14px] bg-[#1A1A1A]'>
                      {toggleImages.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={`flex cursor-pointer gap-2 px-4 py-[10px]`}
                          >
                            <Image src={item.image} alt={''} />
                            <div className='font-normal text-[14px] leading-[18px] text-[#FFFFFF]'>
                              {item.text}
                            </div>
                          </div>
                        );
                      })}
                    </div>
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
