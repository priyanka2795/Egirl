import React, { useState } from 'react';
import Image from 'next/image';
import CloseIcon from '@/assets/svgImages/close-icon.svg';
import searchIcon from '@/assets/search-icon.webp';
import plusIcon from '@/assets/plus-block-icon.webp';
import MainImage from '@/assets/gallery-tab-img-3.webp';
import pinkMobGirl from '@/assets/gallery-tab-img-2.webp';
import { Modal } from '@components/modal/modal';

const collectionFrame = [
  {
    image: MainImage,
    imageName: 'Realistic'
  },
  {
    image: MainImage,
    imageName: 'Realistic'
  },
  {
    image: MainImage,
    imageName: 'Catgirls'
  },
  {
    image: MainImage,
    imageName: 'Realistic'
  },
  {
    image: pinkMobGirl,
    imageName: 'One more long name...'
  }
];

interface AddToCollectionProps {
  closeModalState: any;
}
const AddToCollectionModal = ({ closeModalState }: AddToCollectionProps) => {
  const [newCollectionModal, setNewCollectionModal] = useState(false);
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col h-max w-[753px] rounded-[20px] bg-[#121212] overflow-hidden mt-10 mb-10 ml-5 bookmark-img-text'
      closeModal={() => closeModalState(false)}
      modalOverlayStyle='!bg-black/80'
    >
      {/* <div className=' h-max rounded-[20px] bg-[#1A1A1A] ml-20 mb-5'> */}
      <div className='flex gap-2 border-b border-white/[0.08] p-6'>
        <div className='flex text-[18px] font-bold leading-6 text-white'>
          Add to collection
        </div>
        <div
          className='ml-[528px] mt-1 h-6 w-6 cursor-pointer'
          onClick={() => closeModalState(false)}
        >
          {/* <Image className='w-full h-full' src={crossIcon} alt={''} /> */}
          <CloseIcon />
        </div>
      </div>

      <div className='w-full pt-4'>
        <div className='w-full px-6 py-2'>
          <div className=' flex w-full gap-[10px] rounded-[8px] bg-white/[0.05] px-4 py-3'>
            <div className='mt-[10px] h-6 w-6'>
              <Image className='w-full h-full' src={searchIcon} alt={''} />
            </div>
            <div className='w-full'>
              <input
                type='text'
                placeholder='Search'
                className='w-full border-none bg-transparent text-[15px] font-normal text-[#979797] focus:outline-0 focus:ring-0'
              />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-3 px-6 py-4'>
          <div className='flex h-[279px] flex-col items-center justify-center rounded-[16px] border border-white/[0.08] bg-white/[0.05]'>
            <Image src={plusIcon} alt='' className='object-contain mb-4' />
            <div
              className='flex flex-col items-center justify-center cursor-pointer'
              onClick={() => setNewCollectionModal(true)}
            >
              <h5 className='mb-[20px] text-sm font-semibold'>
                Create a new collection{' '}
              </h5>
              <div className='w-max rounded-[10px] bg-white/[0.08] px-4 py-[7px] text-xs font-bold text-white'>
                Create
              </div>
            </div>
          </div>

          {collectionFrame.map((item, index) => {
            return (
              <div
                key={index}
                className='group flex h-[279px] flex-col items-start overflow-hidden rounded-2xl bg-white/[0.05]'
              >
                <div className='relative flex items-center justify-center overflow-hidden add-to-collection'>
                  <div className='h-[227px] w-full'>
                    <Image src={item.image} alt='' className='object-cover' />
                  </div>
                  <div className='absolute top-0 right-0 w-full h-full custom-checkbox'>
                    <div className='pt-4 pr-4 text-right'>
                      <input type='checkbox' id={`checked-${index}`} />
                      <label htmlFor={`checked-${index}`}></label>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-start self-stretch gap-3 p-4'>
                  <div className='flex items-center self-stretch gap-1'>
                    <div className='text-sm font-semibold text-[#FFFFFF]'>
                      {item.imageName}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='flex items-end justify-end gap-3 px-6 py-4'>
        <button
          className='flex items-center justify-center rounded-xl border border-white/[0.32] px-4 py-[10px] text-[14px] font-bold text-[#FFFFFF]'
          onClick={() => closeModalState(false)}
        >
          Cancel
        </button>
        <button
          className='flex items-center justify-center rounded-xl bg-[#5848BC] px-4 py-[10px] text-[14px] font-bold text-[#FFFFFF]'
          onClick={() => closeModalState(false)}
        >
          Save
        </button>
      </div>
      {/* </div> */}
    </Modal>
  );
};

export default AddToCollectionModal;
