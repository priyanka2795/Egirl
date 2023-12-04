import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import crossIcon from '@/assets/xmark (1).webp';
import GiftCardDelete from './giftCardDelete';

interface EditCategoryPopup {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  EditCategoryActionModal: any;
  EditName: string;
  SetEditName: React.Dispatch<React.SetStateAction<string>>;
  UpdateCategoryName: () => void;
  DeleteActionCategory: (value: number) => void;
  CategoryActionIndex: any;
  editCategoryId: number | undefined;
  characterId: string | null;
  setEditCategoryData:any
}

function EditCategoryAction({
  closeModal,
  EditCategoryActionModal,
  EditName,
  SetEditName,
  UpdateCategoryName,
  DeleteActionCategory,
  CategoryActionIndex,
  editCategoryId,
  characterId,
  setEditCategoryData
}: EditCategoryPopup) {
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    SetEditName(value);
    setEditCategoryData({
      character_id: characterId,
      name: value,
      gift_category_id: editCategoryId
    });
  };

  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A]'
        closeModal={() => closeModal(false)}
        modalOverlayStyle='!bg-black/80'
      >
        {EditCategoryActionModal === 1 ? (
          <div className='w-[385px]'>
            <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6'>
              <h5 className='text-lg font-semibold'>Edit category</h5>
              <div
                className='w-6 h-6 cursor-pointer'
                onClick={() => closeModal(false)}
              >
                <Image className='w-full h-full' src={crossIcon} alt={''} />
              </div>
            </div>
            <div className='p-6'>
              <div className=' flex flex-col text-[#979797] '>
                <label htmlFor='category' className='pb-1 text-[13px]'>
                  Category Name
                </label>
                <input
                  type='text'
                  id='category'
                  placeholder='Type a category name'
                  className='h-12 rounded-[14px] border-none bg-[#FFFFFF0D] px-4 focus:border-[#5848BC] focus:ring-[#5848BC] active:border-[#5848BC]'
                  value={EditName}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className='grid grid-cols-2 gap-3 mt-6 font-semibold text-white'>
                <button
                  className='rounded-[14px] border border-[#FFFFFF52] px-5 py-3'
                  onClick={() => closeModal(false)}
                >
                  Cancel
                </button>
                <button
                  className='rounded-[14px] bg-[#5848BC] px-5 py-3'
                  onClick={() => UpdateCategoryName()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </Modal>
      {EditCategoryActionModal === 2 ? (
        <GiftCardDelete
          DeleteModal={closeModal}
          Heading={'Delete category'}
          Content={'Are you sure you want to delete the Date category?'}
          Img={true}
          DeleteActionCategory={DeleteActionCategory}
          DeleteGift
          DeleteAllGift
          DeleteBtnStep={3}
          CategoryActionIndex={CategoryActionIndex}
         
          
        />
      ) : (
        ''
      )}
    </>
  );
}

export default EditCategoryAction;
