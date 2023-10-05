import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import SelectImage from './selectImage';
import CreateCategory from './createCategory';

interface giftCreateModalProp {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  GiftsView: React.Dispatch<React.SetStateAction<boolean>>;
  GiftName: string[];
  SetGiftName: React.Dispatch<React.SetStateAction<string[]>>;
  AddCategory: string[];
  SetCategory: React.Dispatch<React.SetStateAction<string[]>>;
}
function giftCreateModal({
  closeModal,
  GiftsView,
  GiftName,
  SetGiftName,
  AddCategory,
  SetCategory
}: giftCreateModalProp) {
  const [steps, setSteps] = useState<number>(1);
  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col h-auto rounded-[14px] bg-[#1A1A1A]'
        closeModal={() => closeModal(false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className={'h-max w-auto overflow-y-auto'}>
          {steps === 2 ? (
            <SelectImage
              closeState={closeModal}
              GiftsView={GiftsView}
              AddCategory={AddCategory}
              SetCategory={SetCategory}
              GiftName={GiftName}
              SetGiftName={SetGiftName}
            />
          ) : (
            ''
          )}
        </div>
      </Modal>

      {steps === 1 ? (
        <CreateCategory
          CategoryClose={closeModal}
          Steps={setSteps}
          AddCategory={AddCategory}
          Previous
          SetCategory={SetCategory}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default giftCreateModal;
