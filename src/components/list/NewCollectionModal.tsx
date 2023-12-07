import { Modal } from '@components/modal/modal';
import React, { useState } from 'react';
import Image from 'next/image';
import xMark from '@/assets/xmark.webp';
import cameraIcon from '@/assets/cameraIcon.webp';
import avatar from '@/assets/avatar.webp';
import CloseIcon from '@/assets/svgImages/close-icon.svg';

interface CollectionModalProp {
  closeModalItem: any;
  closeDropdown: any;
}
const NewCollectionModal = ({
  closeModalItem,
  closeDropdown
}: CollectionModalProp) => {
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[468px]'
      closeModal={() => closeModalItem(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <div>
        <div className='flex w-full justify-between gap-2 border-b border-white/[0.08] p-6'>
          <div className='font-bold flex w-[286px] flex-col items-start gap-1 text-lg text-[#FFFFFF]'>
            Edit collection
          </div>
          <div
            className='top-[7px] flex h-[24px] w-[24px] items-start gap-4 object-contain'
            onClick={() => {
              closeModalItem(false), closeDropdown('');
            }}
          >
            <CloseIcon />
          </div>
        </div>

        <div className='flex items-center w-full gap-4 px-6 pt-6 pb-3'>
          <div className='relative'>
            <Image className='h-[72px] w-[72px]' src={avatar} alt={''} />
            <div className='absolute left-[19px] top-[19px] h-4'>
              <Image
                className='bottom-4 right-[51px] h-[16px] w-[16px]'
                src={cameraIcon}
                alt={''}
              />
            </div>
          </div>
          <div className='flex h-[46px] flex-col items-start gap-[2px]'>
            <div className='font-bold self-stretch text-[15px] text-[#FFFFFF]'>
              Collection Cover
            </div>
            <div className='font-normal text-sm text-[#979797]'>
              Click on the photo to edit
            </div>
          </div>
        </div>

        <div className='w-full px-6 pt-3 pb-6'>
                    <div className='flex flex-col text-[#979797] '>
            <label htmlFor='Name' className='pb-[6px] text-[13px]'>
            Name of List
            </label>
            <input
              type='text'
              id='Name'
              placeholder='Cat girls'
              className='h-12 rounded-[14px] border-none bg-[#FFFFFF0D] px-4 text-white placeholder:text-[#979797] focus:border-[#5848BC] focus:ring-[#5848BC] active:border-[#5848BC]'
              name='Name'
            />
          </div>

          <div className='mt-[24px] flex w-full gap-[12px]'>
            <button
              className='font-bold w-1/2 rounded-[14px] border border-white/[0.32] px-[20px] py-[13px] text-[16px]'
              onClick={() => {
                closeModalItem(false), closeDropdown('');
              }}
            >
              Cancel
            </button>
            <button
              className='font-bold w-1/2 rounded-[14px] bg-[#5848BC] px-[20px] py-[13px] text-[16px] text-[#FFFFFF]'
              onClick={() => {
                closeModalItem(false), closeDropdown('');
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NewCollectionModal;
