import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React from 'react';
import xMark from '../../../../public/assets/xmark (1).png';
import modalImg from '../../../../public/assets/post-style-modal-img.png';

interface PostStyleModalProp {
    setPostStyleModal: any;
}

const PostStyleModal = ({setPostStyleModal}: PostStyleModalProp) => {
  return (
    <Modal
    open={true}
    modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[758px]'
    closeModal={() => setPostStyleModal(false)}
    modalOverlayStyle='!bg-black/80'
    >
        <div className='flex justify-between p-6 border-b border-white/[0.08]'>
            <div className='text-white text-[18px] font-bold leading-6'>Post Style</div>
            <Image onClick={() => {setPostStyleModal(false)}} className='cursor-pointer' src={xMark} alt={''} />
        </div>
        <div className='flex gap-5 p-6'>
            <div className='w-[38%]'>
                <Image className='object-contain w-full h-full' src={modalImg} alt={''} />
            </div>
            <div className='flex flex-col w-[62%] gap-4'>
                <div className='flex flex-col gap-6px'>
                    <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Style Name</div>
                    <div className='px-4 py-3 rounded-[14px] bg-white/[0.05] text-white text-[15px] font-normal leading-6'>Anime</div>
                </div>
                <div className='flex flex-col gap-6px'>
                    <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Pricing</div>
                    <input type='text' className='focus:ring-0 border-none px-4 py-3 rounded-[14px] bg-white/[0.05] placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' placeholder='Enter your price' />
                </div>
                <div className='flex flex-col gap-6px'>
                    <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Description</div>
                    <textarea className='resize-none focus:ring-0 border-none pl-4 pr-3 py-3 rounded-[14px] bg-white/[0.05] text-white text-[15px] font-normal leading-6'>This is a model I’m making for bunny girls.This is a model I’m making for bunny girls.</textarea>
                </div>
            </div>
        </div>
        <div className='flex items-end justify-end gap-3 p-6'>
            <button className='px-4 py-[13px] justify-center items-center rounded-[14px] border border-white/[0.32] text-[16px] font-bold leading-[22px]' onClick={() => {setPostStyleModal(false)}}>Cancel</button>
            <button className='px-4 py-[13px] justify-center items-center rounded-[14px] border border-transparent bg-[#5848BC] text-[16px] font-bold leading-[22px]' onClick={() => {setPostStyleModal(false)}}>Post</button>
        </div>
    </Modal>
  )
}

export default PostStyleModal;
