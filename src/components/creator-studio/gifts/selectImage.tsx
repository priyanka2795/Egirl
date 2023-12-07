//@ts-nocheck

import Image from 'next/image';
import React, { useState } from 'react';
import crossIcon from '@/assets/xmark (1).webp';
import AlbumFirst from '@/assets/gallery-tab-img.webp';
import AlbumSecound from '@/assets/mirandalImg.webp';
import AllAlbum1 from '@/assets/gallery-tab-img-3.webp';
import AllAlbum2 from '@/assets/gallery-tab-img-2.webp';
import AllAlbum3 from '@/assets/vi-image-7.webp';
import AllAlbum4 from '@/assets/vi-image-3.webp';

interface CategoryPopup {
  closeState: React.Dispatch<React.SetStateAction<boolean>>;
  SetGiftImageSet: React.Dispatch<React.SetStateAction<string>>;
  Steps?: React.Dispatch<React.SetStateAction<number>>;

}

const albumdata = [
  {
    name: 'Fantasy world & nature',
    user: 124,
    imgPath: AlbumFirst
  },
  {
    name: 'Face, body and hair',
    user: 32,
    imgPath: AlbumSecound
  }
];
const AllAlbums=[
  {
    Img:AllAlbum1
  },
  {
    Img:AllAlbum3
  },
  {
    Img:AllAlbum2
  },
  {
    Img:AllAlbum4
  },
]
function SelectImage({
  closeState,
  SetGiftImageSet,
  Steps
}: CategoryPopup) {
  const [toggle, setToggle] = useState<boolean>(false);
  const getImgData = (image: any) => {
    SetGiftImageSet(image);
    Steps(2)
  };
  return (
    <>
      <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6'>
        <h5 className='text-lg font-semibold'>Select image</h5>
        <div
          className='w-6 h-6 cursor-pointer'
          onClick={() => closeState(false)}
        >
          <Image className='w-full h-full' src={crossIcon} alt={''} />
        </div>
      </div>
      <div className='flex flex-col gap-3 p-6 overflow-y-auto '>
        <p className='font-semibold'>Albums</p>
        <div className='grid grid-cols-2 gap-2 '>
          {albumdata.map((item) => (
            <div
              className='relative h-[300px] w-[300px] cursor-pointer overflow-hidden rounded-xl'
              onClick={() => getImgData(item.imgPath)}
            >
              <Image
                className='object-cover w-full h-full'
                src={item.imgPath}
                alt={''}
              />
              <div className='absolute bottom-0 w-full'>
                <div className='flex h-36 items-end justify-between bg-gradient-to-t from-[#000000CC] to-[#00000000] px-4 pb-3 text-[15px] font-semibold'>
                  <p>{item.name}</p>
                  <p>{item.user}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className='font-bold w-full rounded-xl bg-[#FFFFFF14] px-4 py-[10px]'
          onClick={() => setToggle(!toggle)}
        >
          Show all albums
        </button>
        {toggle && (
          <div>
            <p className='pb-3 font-semibold'>All photos</p>
            <div className='grid grid-cols-2 gap-2'>
              {AllAlbums.map((item) => (
                <div
                  className='relative h-[300px] w-[300px] cursor-pointer overflow-hidden rounded-xl'
                  onClick={() => getImgData(item.Img)}
                >
                  <Image
                    className='object-cover w-full h-full'
                    src={item.Img}
                    alt={''}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SelectImage;
