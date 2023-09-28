import Image from 'next/image';
import React, { useState } from 'react';
import crossIcon from '../../../../public/assets/xmark (1).png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import AlbumSecound from '../../../../public/assets/mirandalImg.png';
import Images1 from '../../../../public/assets/vi-image-6.png';
import Images2 from '../../../../public/assets/vi-image-3.png';
import Images3 from '../../../../public/assets/vi-image.png';
import { Modal } from '@components/modal/modal';
import InpaintingModals from './inpaintingModals';
interface SelectImage {
  CloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  SetInpaintingModal: React.Dispatch<React.SetStateAction<boolean>>;
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
function SelectImage({ CloseModal, SetInpaintingModal }: SelectImage) {
  const [toggle, setToggle] = useState(true);

  const SelectImg = () => {
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
            className='h-6 w-6 cursor-pointer'
            onClick={() => CloseModal(false)}
          >
            <Image className='h-full w-full' src={crossIcon} alt={''} />
          </div>
        </div>
        <div className='flex flex-col gap-3 overflow-y-auto p-6 '>
          <p className='font-semibold'>Albums</p>
          <div className='grid grid-cols-2 gap-2 '>
            {albumdata.map((item) => (
              <div
                className='relative h-[300px] w-[300px] cursor-pointer overflow-hidden rounded-xl'
                onClick={() => SelectImg()}
              >
                <Image
                  className='h-full w-full object-cover'
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
              <div
                className='grid grid-cols-2 gap-2'
                onClick={() => SelectImg()}
              >
                {allImages.map((item) => (
                  <div className='relative cursor-pointer overflow-hidden rounded-xl'>
                    <Image
                      className='h-full w-full object-cover'
                      src={item.img}
                      alt={''}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}

export default SelectImage;
