import Image from 'next/image';
import React from 'react';
import crossIcon from '@/assets/xmark (1).webp';
import AlbumFirst from '@/assets/gallery-tab-img.webp';
import { Modal } from '@components/modal/modal';

interface DeletePopup {
  DeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  Heading: string;
  Content: string;
  Img: boolean;
  DeleteGift: any;
  DeleteAllGift?: any;
  selectedGiftData?: any;
  DeleteBtnStep?: number;
  DeleteActionCategory?: any;
  CategoryActionIndex?: number;
  DeleteGiftImage?: string;
  GiftName?: string;
}
function GiftCardDelete({
  DeleteModal,
  Heading,
  Content,
  Img,
  DeleteGift,
  DeleteAllGift,
  selectedGiftData,
  DeleteBtnStep,
  DeleteActionCategory,
  CategoryActionIndex,
  DeleteGiftImage,
  GiftName
}: DeletePopup) {
  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A]'
        closeModal={() => DeleteModal(false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='w-[494px] '>
          <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6'>
            <h5 className='text-lg font-semibold'>{Heading}</h5>
            <div
              className='h-6 w-6 cursor-pointer'
              onClick={() => DeleteModal(false)}
            >
              <Image className='h-full w-full' src={crossIcon} alt={''} />
            </div>
          </div>
          <div className='p-6'>
            <div className='m-auto mb-5 max-w-[290px] text-center'>
              {Img ? (
                ''
              ) : (
                <div className='m-auto mb-4 max-h-[100px] max-w-[100px] overflow-hidden rounded-xl'>
                  <Image
                    className='h-full w-full object-cover'
                    src={DeleteGiftImage || ''}
                  />
                </div>
              )}
              <p>
                {Content}
                <span className='font-semibold'> {GiftName} </span>
                {GiftName ? 'gift?' : ''}
              </p>
            </div>
            <div className='mt-6 grid grid-cols-2 gap-3 font-semibold text-white'>
              <button
                className='rounded-[14px] border border-[#FFFFFF52] px-5 py-3'
                onClick={() => DeleteModal(false)}
              >
                Cancel
              </button>
              {DeleteBtnStep === 1 ? (
                <button
                  className='rounded-[14px] bg-[#FF5336] px-5 py-3'
                  onClick={() => DeleteGift(selectedGiftData)}
                >
                  Delete
                </button>
              ) : DeleteBtnStep === 2 ? (
                <button
                  className='rounded-[14px] bg-[#FF5336] px-5 py-3'
                  onClick={() => {
                    DeleteAllGift([]);
                    DeleteModal(false);
                  }}
                >
                  Delete
                </button>
              ) : (
                <button
                  className='rounded-[14px] bg-[#FF5336] px-5 py-3'
                  onClick={() => {
                    DeleteActionCategory(CategoryActionIndex);
                    DeleteModal(false);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default GiftCardDelete;
