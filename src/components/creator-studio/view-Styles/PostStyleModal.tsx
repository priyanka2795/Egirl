import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React from 'react';
import xMark from '@/assets/xmark (1).webp';
import modalImg from '@/assets/post-style-modal-img.webp';

interface PostStyleModalProp {
  setPostStyleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostStyleModal = ({ setPostStyleModal }: PostStyleModalProp) => {
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[758px]'
      closeModal={() => setPostStyleModal(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <div className='flex justify-between border-b border-white/[0.08] p-6'>
        <div className='text-[18px] font-bold leading-6 text-white'>
          Post Style
        </div>
        <Image
          onClick={() => {
            setPostStyleModal(false);
          }}
          className='cursor-pointer'
          src={xMark}
          alt={''}
        />
      </div>
      <div className='flex gap-5 p-6'>
        <div className='w-[38%]'>
          <Image
            className='object-contain w-full h-full'
            src={modalImg}
            alt={''}
          />
        </div>
        <div className='flex w-[62%] flex-col gap-4'>
          <div className='flex flex-col gap-6px'>
            <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
              Style Name
            </div>
            <input
              type='text'
              className='rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] font-normal leading-6 text-white placeholder:text-[#979797] focus:ring-0'
              placeholder='Enter your price'
              // value={"Anime"}
            />
            
          </div>
          <div className='flex flex-col gap-6px'>
            <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
              Pricing
            </div>
            <input
              type='text'
              className='text-white rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] font-normal leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
              placeholder='Enter your price'
            />
          </div>
          <div className='flex flex-col gap-6px'>
            <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
              Description
            </div>
            <textarea className='resize-none rounded-[14px] border-none bg-white/[0.05] py-3 pl-4 pr-3 text-[15px] font-normal leading-6 text-white focus:ring-0'>
              This is a model I’m making for bunny girls.This is a model I’m
              making for bunny girls.
            </textarea>
          </div>
        </div>
      </div>
      <div className='flex items-end justify-end gap-3 p-6'>
        <button
          className='items-center justify-center rounded-[14px] border border-white/[0.32] px-4 py-[13px] text-[16px] font-bold leading-[22px]'
          onClick={() => {
            setPostStyleModal(false);
          }}
        >
          Cancel
        </button>
        <button
          className='items-center justify-center rounded-[14px] border border-transparent bg-[#5848BC] px-4 py-[13px] text-[16px] font-bold leading-[22px]'
          onClick={() => {
            setPostStyleModal(false);
          }}
        >
          Post
        </button>
      </div>
    </Modal>
  );
};

export default PostStyleModal;
