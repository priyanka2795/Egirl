import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React from 'react'

import crossIcon from '../../../../public/assets/xmark (1).png';
import GiftCardDelete from './giftCardDelete';


interface EditCategoryPopup {
  closeModal: any;
  EditCategoryActionModal: any;
}

function EditCategoryAction({ closeModal, EditCategoryActionModal }: EditCategoryPopup) {
  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A]'
        closeModal={() => closeModal(false)}
        modalOverlayStyle='!bg-black/80'
      >
        {EditCategoryActionModal === 1 ?
          <div className='w-[385px]'>
            <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
              <h5 className='text-lg font-semibold'>Edit category</h5>
              <div className='w-6 h-6 cursor-pointer' onClick={() => closeModal(false)}>
                <Image className='w-full h-full' src={crossIcon} alt={''} />
              </div>
            </div>
            <div className='p-6'>
              <div className=' flex flex-col text-[#979797] '>
                <label htmlFor="category" className='text-[13px] pb-1'>Category Name</label>
                <input type="text" id='category' placeholder='Type a category name' className='bg-[#FFFFFF0D] rounded-[14px] h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC]' />
              </div>

              <div className='grid grid-cols-2 mt-6 gap-3 text-white font-semibold'>
                <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => closeModal(false)}>Cancel</button>
                <button className='bg-[#5848BC] rounded-[14px] px-5 py-3'>Save</button>

              </div>
            </div>
          </div>
          :''}

      </Modal>
      {EditCategoryActionModal === 2 ?
        <GiftCardDelete DeleteModal={closeModal} Heading={'Delete category'} Content={'Are you sure you want to delete the Date category?'} Img={true} />
        : ''}

    </>
  )
}

export default EditCategoryAction;