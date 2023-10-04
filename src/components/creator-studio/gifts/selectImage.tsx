import Image from 'next/image';
import React, { useState } from 'react';
import crossIcon from '../../../../public/assets/xmark (1).png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import AlbumSecound from '../../../../public/assets/mirandalImg.png';
import { Modal } from '@components/modal/modal';
import CreateGift from './createGift';

interface CategoryPopup {
  closeState: React.Dispatch<React.SetStateAction<boolean>>;
  GiftsView: boolean;
  GiftName: string[];
  SetGiftName: React.Dispatch<React.SetStateAction<string[]>>;
  AddCategory: string[];
  SetCategory: React.Dispatch<React.SetStateAction<string[]>>;
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
function SelectImage({
  closeState,
  GiftsView,
  AddCategory,
  SetCategory,
  GiftName,
  SetGiftName
}: CategoryPopup) {
  const [createGift, setCreateGift] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {createGift ? (
        <CreateGift
          createGiftClose={closeState}
          GiftsView={GiftsView}
          AddCategory={AddCategory}
          SetCategory={SetCategory}
          Previous={setCreateGift}
          GiftName={GiftName}
          SetGiftName={SetGiftName}
        />
      ) : (
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
                  onClick={() => setCreateGift(true)}
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
              className='w-full rounded-xl bg-[#FFFFFF14] px-4 py-[10px] font-bold'
              onClick={() => setToggle(!toggle)}
            >
              Show all albums
            </button>
            {toggle && (
              <div>
                <p className='pb-3 font-semibold'>All photos</p>
                <div className='grid grid-cols-2 gap-2'>
                  {albumdata.map((item) => (
                    <div
                      className='relative h-[300px] w-[300px] cursor-pointer overflow-hidden rounded-xl'
                      onClick={() => setCreateGift(true)}
                    >
                      <Image
                        className='object-cover w-full h-full'
                        src={item.imgPath}
                        alt={''}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default SelectImage;
