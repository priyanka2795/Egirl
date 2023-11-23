import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import SelectImage from './selectImage';
import CreateCategory from './createCategory';
import CreateGift from './createGift';

interface giftCreateModalProp {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  GiftsView: React.Dispatch<React.SetStateAction<boolean>>;
  GiftName: string[];
  SetGiftName: React.Dispatch<React.SetStateAction<string[]>>;
  AddCategory: string[];
  SetCategory: React.Dispatch<React.SetStateAction<string[]>>;
  giftImageSet: string;
  setGiftImageSet: React.Dispatch<React.SetStateAction<string>>;
  giftCategory:any,
  setCreateCategory : React.Dispatch<React.SetStateAction<boolean>>,
  createCategory: boolean;
  setCreateCategoryToggle:React.Dispatch<React.SetStateAction<boolean>>,
  createCategoryToggle:boolean
}
function giftCreateModal({
  closeModal,
  GiftsView,
  GiftName,
  SetGiftName,
  AddCategory,
  SetCategory,
  giftImageSet,
  setGiftImageSet,
  giftCategory,
  setCreateCategory,
  createCategory,
  setCreateCategoryToggle,
  createCategoryToggle
}: giftCreateModalProp) {
  const [steps, setSteps] = useState<number>(1);
  // const [giftImageSet, setGiftImageSet] = useState('');

  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col h-auto rounded-[14px] bg-[#1A1A1A]'
        closeModal={() => {
          closeModal(false), SetCategory([]);
        }}
        modalOverlayStyle='!bg-black/80'
      >
        <div className={'h-max w-auto overflow-y-auto'}>
          {steps === 2 ? (
            <CreateGift
              createGiftClose={closeModal}
              GiftsView={GiftsView}
              AddCategory={AddCategory}
              SetCategory={SetCategory}
              giftCategory={giftCategory}
              setCreateCategory={setCreateCategory}
              Steps={setSteps}
              GiftName={GiftName}
              SetGiftName={SetGiftName}
              GiftImageSet={giftImageSet}
              createCategory={createCategory}
            />
          ) : steps === 3 ? (
            <SelectImage
              closeState={closeModal}
              SetGiftImageSet={setGiftImageSet}
              Steps={setSteps}
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
          SetCategory={SetCategory}
          setCreateCategoryToggle={setCreateCategoryToggle}
          createCategoryToggle={createCategoryToggle}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default giftCreateModal;