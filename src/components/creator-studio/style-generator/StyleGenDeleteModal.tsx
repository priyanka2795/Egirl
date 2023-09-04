import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import xMark from '../../../../public/assets/xmark (1).png';

interface StyleGenDeleteModalProp {
    setDeleteModal: any;
    setShowCards: any;
}

const StyleGenDeleteModal = ( {setDeleteModal, setShowCards} : StyleGenDeleteModalProp ) => {
//   const [styleGenHoverModal, setStyleGenHoverModal] = useState(false);
  return (
    <div>
      <Modal
        open={true}
        modalClassName='flex flex-col max-w-xl w-full rounded-2xl h-max bg-[#1A1A1A] max-w-[494px]'
        closeModal={() => setDeleteModal (false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='flex p-6 justify-between border-b border-white/[0.08]'>
            <div className='text-white text-[18px] font-bold leading-6'>Delete all images</div>
            <Image className='object-contain' onClick={() => setDeleteModal(false)} src={xMark} alt={''} />
        </div>

        <div className='flex flex-col gap-8 p-6'>
            <div className='text-center text-white text-[15px] font-normal leading-5'>Are you sure you want to delete all added images?</div>
            <div className='flex gap-3'>
                <button className='w-1/2 px-5 py-[13px] justify-center items-center rounded-[14px] border border-white/[0.32] text-white text-[16px] font-bold leading-[22px]' onClick={() => {setDeleteModal(false), setShowCards(true)}}>Cancel</button>
                <button className='w-1/2 px-5 py-[13px] justify-center items-center rounded-[14px] border border-transparent bg-[#FF5336] text-white text-[16px] font-bold leading-[22px]' onClick={() => {setDeleteModal(false), setShowCards(false)}}>Delete</button>
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default StyleGenDeleteModal;
