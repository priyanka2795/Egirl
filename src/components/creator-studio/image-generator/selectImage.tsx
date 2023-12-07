import Image from 'next/image';
import React, { useState } from 'react';
import crossIcon from '@/assets/xmark (1).webp';
import AlbumFirst from '@/assets/gallery-tab-img.webp';
import AlbumSecound from '@/assets/mirandalImg.webp';
import Images1 from '@/assets/vi-image-6.webp';
import Images2 from '@/assets/vi-image-3.webp';
import Images3 from '@/assets/vi-image.webp';
import { Modal } from '@components/modal/modal';
import InpaintingModals from './inpaintingModals';
interface SelectImage {
  CloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  SetInpaintingModal: React.Dispatch<React.SetStateAction<boolean>>;
  allImgData: any;
  setSelectInPaintImg:any
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
const allImages = [
  {
    img: Images1
  },
  {
    img: Images3
  },
  {
    img: Images2
  },
  {
    img: AlbumFirst
  }
];
function SelectImage({
  CloseModal,
  SetInpaintingModal,
  allImgData,
  setSelectInPaintImg
}: SelectImage) {
  const [toggle, setToggle] = useState<boolean>(true);

  const SelectImg = (media_id:string,media_url:string) => {
    setSelectInPaintImg({media_id:media_id, media_url:media_url})
    SetInpaintingModal(true);
    CloseModal(false);
  };

  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[656px] py-8'
        closeModal={() => CloseModal(false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6'>
          <h5 className='text-lg font-semibold'>Select image</h5>
          <div
            className='w-6 h-6 cursor-pointer'
            onClick={() => CloseModal(false)}
          >
            <Image className='w-full h-full' src={crossIcon} alt={''} />
          </div>
        </div>
        <div className='flex flex-col gap-3 p-6 overflow-y-auto '>
          <p className='font-semibold'>Albums</p>
          <div className='grid grid-cols-2 gap-2 '>
            {albumdata.map((item, index) => (
              <div
                className='relative h-[300px] w-[300px] cursor-pointer overflow-hidden rounded-xl'
                // onClick={() => SelectImg("","")}
                key={index}
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
              <div
                className='grid grid-cols-2 gap-2'
                // onClick={() => SelectImg()}
              >
                {allImgData?.map((item: any, index: number) =>
                  item?.media?.map((e: any, i: number) => {
                    return (
                      <div
                        className='relative overflow-hidden cursor-pointer rounded-xl'
                        key={index}
                      >
                        <Image
                          className='object-cover w-full h-full'
                          src={Images2}
                          alt={''}
                          key={i}
                          onClick={()=> SelectImg(e.media_id, e.media_url)}
                        />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}

export default SelectImage;
