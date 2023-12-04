import Image from 'next/image';
import React from 'react';
import crossIcon from '@/assets/xmark (1).webp';
import { Modal } from '@components/modal/modal';

interface DeletePopup {
  DeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  Heading: string;
  Content: string;
  Name?: string;
  LastName?: string;
  component?: string;
  deleteImageGenerationIndex?: number;
  DeleteGeneration?: any;
  deleteImgBySdId?:any;
  setSelectStyleGenerator?:any
}
function AlbumDelete({
  DeleteModal,
  Heading,
  Content,
  Name,
  LastName,
  component,
  deleteImageGenerationIndex,
  DeleteGeneration,
  deleteImgBySdId,
  setSelectStyleGenerator
}: DeletePopup) {
  const handleDeleteButton = () => {
    if (component === 'StyleGeneration') {
      DeleteModal(false);
      setSelectStyleGenerator([]); 
    } else if (component === 'ImageAndIdeaGeneratorTab') {
      DeleteGeneration(deleteImageGenerationIndex);
    } else {
      deleteImgBySdId()
      DeleteModal(false);
    }
  };

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
                {Content} <span className='font-semibold'>{Name}</span>{' '}
                {LastName}{' '}
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
                onClick={handleDeleteButton}
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

export default AlbumDelete;
