import Image from 'next/image';
import React from 'react';
import crossIcon from '@/assets/xmark (1).webp';
import { Modal } from '@components/modal/modal';

interface DeletePopup {
  DeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  Heading: string;
  Content: string;
  deleteImageGenerationIndex: number;
  DeleteGeneration: React.Dispatch<React.SetStateAction<number>>;
}
function DeleteGenerationModal({
  DeleteModal,
  Heading,
  Content,
  DeleteGeneration,
  deleteImageGenerationIndex
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
              <button
                className='rounded-[14px] bg-[#FF5336] px-5 py-3'
                onClick={() => DeleteGeneration(deleteImageGenerationIndex)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default DeleteGenerationModal;
