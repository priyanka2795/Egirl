import React, { useState } from 'react';
import crossIcon from '../../../../public/assets/xmark (1).png';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import image1 from '../../../../public/assets/vi-image-1.png';
import image2 from '../../../../public/assets/vi-image-2.png';
import image3 from '../../../../public/assets/vi-image-3.png';
import image4 from '../../../../public/assets/vi-image-4.png';
import AlbumImg from '../../../../public/assets/album1.png';
import AlbumImg1 from '../../../../public/assets/album2.png';
import AlbumImg2 from '../../../../public/assets/album3.png';
import AlbumImg3 from '../../../../public/assets/album4.png';
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
          className='h-6 w-6 cursor-pointer'
          onClick={() => MoveModalClose(false)}
        >
          <Image className='h-full w-full' src={crossIcon} alt={''} />
        </div>
      </div>

      <div className='max-h-[700px] overflow-y-auto p-6'>
        <div className='grid grid-cols-3 gap-[10px]'>
          {MoveAlbum.map((items, index) => (
            <div key={index} className='sub-banner group relative'>
              <Image
                className='h-full w-full object-cover '
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
