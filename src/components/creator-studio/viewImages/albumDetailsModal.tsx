import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React from 'react';
import crossIcon from '@/assets/xmark (1).webp';
import Pencil from '@/assets/pen.webp';
import Image1 from '@/assets/media-1.webp';
import Image2 from '@/assets/jennieYoon.webp';
import Image3 from '@/assets/jennieContent.webp';
import Image4 from '@/assets/media-3.webp';
import Image5 from '@/assets/mirandaContent.webp';
import Image6 from '@/assets/mirandalImg.webp';
import Image7 from '@/assets/sarahScarlet.webp';
import Image8 from '@/assets/style-gen-img6.webp';

const detailsImages = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8
];

interface AlbumDetailsModal {
  CloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlbumDetailsModal = ({ CloseModal }: AlbumDetailsModal) => {
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A] w-[800px]'
      closeModal={() => CloseModal(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6'>
        <h5 className='text-lg font-semibold'>Album details</h5>
        <div
          className='w-6 h-6 cursor-pointer'
          onClick={() => CloseModal(false)}
        >
          <Image className='w-full h-full' src={crossIcon} alt={''} />
        </div>
      </div>
      <div className='p-6'>
        <div className='flex flex-col gap-5 rounded-[14px] bg-[#FFFFFF0D] p-5'>
          <div className='flex items-center justify-between'>
            <p className='text-[15px] font-semibold'>
              Images <span className='ml-1 text-[#515151]'>8</span>
            </p>
            <div>
              <Image className='w-full h-full' src={Pencil} alt={''} />
            </div>
          </div>
          <div className='grid grid-cols-8 gap-2'>
            {detailsImages.map((items, index) => (
              <div
                key={index}
                className='h-[80px] w-[80px] overflow-hidden rounded-[7px]'
              >
                <Image className='w-full h-full' src={items} alt={''} />
              </div>
            ))}
          </div>
          <div className=''>
            <h5 className='pb-[6px] text-sm font-bold'>
              Fantasy world & nature album
            </h5>
            <p className='text-sm leading-5 text-[#979797]'>
              Fantasy worlds are fictional settings that are often inspired by
              mythological, historical, or imaginary places. These worlds can be
              inhabited by various creatures such as dragons, unicorns, or
              fairies, and are often characterized by magic, adventure, and
              quests.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AlbumDetailsModal;
