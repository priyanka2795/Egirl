import React, { useState } from 'react';
import crossIcon from '@/assets/xmark (1).webp';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import image1 from '@/assets/vi-image-1.webp';
import image2 from '@/assets/vi-image-2.webp';
import image3 from '@/assets/vi-image-3.webp';
import image4 from '@/assets/vi-image-4.webp';
import AlbumImg from '@/assets/album1.webp';
import AlbumImg1 from '@/assets/album2.webp';
import AlbumImg2 from '@/assets/album3.webp';
import AlbumImg3 from '@/assets/album4.webp';
import { bool } from 'yup';

const MoveAlbum = [
  {
    name: 'Giant dog chasing a bun...',
    gifts: '8',
    image: AlbumImg
  },
  {
    name: 'Fantasy world & nature',
    gifts: '8',
    image: AlbumImg1
  },
  {
    name: 'Fantasy world & nature',
    gifts: '9',
    image: AlbumImg2
  },
  {
    name: 'Fantasy world & nature',
    gifts: '7',
    image: AlbumImg3
  }
];
interface MoveAlbumModal {
  MoveModalClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const MoveAlbumModal = ({ MoveModalClose }: MoveAlbumModal) => {
  // const [selectTab, setSelectTab] = useState(0);
  // const [categoryHide, setCategoryHide] = useState(false);

  // const handleChange = (e: any) => {

  // }
  // const AllCategory = () => {
  //     setCategoryHide(true);
  // }

  return (
    <Modal
      open={true}
      modalClassName='flex flex-col rounded-[14px] bg-[#1A1A1A] w-[968px]'
      closeModal={() => MoveModalClose(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6'>
        <h5 className='text-lg font-semibold'>Move to album</h5>
        <div
          className='w-6 h-6 cursor-pointer'
          onClick={() => MoveModalClose(false)}
        >
          <Image className='w-full h-full' src={crossIcon} alt={''} />
        </div>
      </div>

      <div className='max-h-[700px] overflow-y-auto p-6'>
        <div className='grid grid-cols-3 gap-[10px]'>
          {MoveAlbum.map((items, index) => (
            <div key={index} className='relative sub-banner group'>
              <Image
                className='object-cover w-full h-full '
                src={items.image}
                alt={''}
              />
              <div className=' absolute bottom-0 flex h-[150px] w-full items-end justify-between bg-gradient-to-t from-[#000000CC] to-[#00000000] px-5 pb-3 font-semibold'>
                <p>{items.name}</p>
                <p>{items.gifts}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default MoveAlbumModal;
