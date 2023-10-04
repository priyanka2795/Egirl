import Image from 'next/image';
import React from 'react';
import crossIcon from '../../../../public/assets/xmark (1).png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import { Modal } from '@components/modal/modal';

interface DeletePopup {
  DeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  Heading: string;
  Content: string;
  Img: boolean;
  DeleteGift: any;
  DeleteIndex: any;
  DeleteAllGift: any;
  DeleteBtnStep: number;
  DeleteActionCategory: any;
  CategoryActionIndex: any;
}
function GiftCardDelete({
  DeleteModal,
  Heading,
  Content,
  Img,
  DeleteGift,
  DeleteIndex,
  DeleteAllGift,
  DeleteBtnStep,
  DeleteActionCategory,
  CategoryActionIndex
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
              className='w-6 h-6 cursor-pointer'
              onClick={() => DeleteModal(false)}
            >
              <Image className='w-full h-full' src={crossIcon} alt={''} />
            </div>
          </div>
          <div className='p-6'>
            <div className='m-auto mb-5 max-w-[290px] text-center'>
              {Img ? (
                ''
              ) : (
                <div className='m-auto mb-4 max-h-[100px] max-w-[100px] overflow-hidden rounded-xl'>
                  <Image
                    className='object-cover w-full h-full'
                    src={AlbumFirst}
                  />
                </div>
              )}
              <p>
                {Content}
                <span className='font-semibold'></span>
              </p>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-6 font-semibold text-white'>
              <button
                className='rounded-[14px] border border-[#FFFFFF52] px-5 py-3'
                onClick={() => DeleteModal(false)}
              >
                Cancel
              </button>
              {DeleteBtnStep === 1 ? (
                <button
                  className='rounded-[14px] bg-[#FF5336] px-5 py-3'
                  onClick={() => DeleteGift(DeleteIndex)}
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
