import React, { useState, useEffect, useRef } from 'react';
import ViewImagesTab from './ViewImagesTab';
import VIMainImageBlock from './VIMainImageBlock';
import Image from 'next/image';
import arrowUpArrowDown from '@/assets/arrow-down-arrow-up2.webp';
import Prev from '@/assets/arrow-left.svg';
import filter from '@/assets/filter.webp';
import ViewImagesDropDown from './ViewImagesDropDown';
import threeDots from '@/assets/dots-horizontal3.webp';
import image6 from '@/assets/vi-image-6.webp';
import AlbumImg from '@/assets/album1.webp';
import AlbumImg1 from '@/assets/album2.webp';
import AlbumImg2 from '@/assets/album3.webp';
import AlbumImg3 from '@/assets/album4.webp';
import image1 from '@/assets/vi-image-1.webp';
import image2 from '@/assets/vi-image-2.webp';
import image3 from '@/assets/vi-image-3.webp';
import image4 from '@/assets/vi-image-4.webp';
import image5 from '@/assets/vi-image-5.webp';
import image7 from '@/assets/vi-image-7.webp';
import plusIcon from '@/assets/plus-gray.webp';
import user from '@/assets/circle-user.webp';
import imageSquare from '@/assets/image-square.webp';
import image from '@/assets/image.webp';
import undo from '@/assets/Undo.webp';
import deleteIcon from '@/assets/trash-blank-alt.webp';
import { getImageGeneration } from 'services/services';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useRouter } from 'next/router';
import { tokenRefresh } from 'redux/api/RefreshTokenApi';
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
  const dispatch = useAppDispatch();
  const router = useRouter();
  const token:any = Cookies.get("accessToken")
  const refreshTokenData: any = useAppSelector(
    (state) => state.tokenRefresh?.tokenData
  );
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
  //---------- get image generation api -----------
  const [allImgData, setAllImgData] = useState([])
  const [imageUpdate, setImageUpdate] = useState(false)
 useEffect(()=>{
  if (refreshTokenData) {
    Cookies.set('accessToken', refreshTokenData);
  }
  getImageGeneration(1,10,token)
  .then((res:any)=>{
    console.log("get image generation res----",res)
    setAllImgData(res?.data)
    if(res?.response?.status === 401){
      dispatch(tokenRefresh())
    }
  })
  .catch((err)=>{
    console.log("get image generation err---",err)
  })
 },[refreshTokenData, router.pathname, imageUpdate])
  //-----------------------------------------------
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
              <div className='sub-banner group relative h-full w-full rounded-[16px]'>
                <Image
                  className='w-full rounded-[16px] object-cover cursor-pointer'
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
              allImgData={allImgData}
              imageUpdate={imageUpdate}
              setImageUpdate={setImageUpdate}
            />
          ) : (
            <VIMainImageBlock
              ToggleMenu={false}
              // SetAlbumImages
              SetAlbumImages={setAlbumImages}
              AlbumData={albumData}
              allImgData={allImgData}
              imageUpdate={imageUpdate}
              setImageUpdate={setImageUpdate}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ViewImagesMainPage;
