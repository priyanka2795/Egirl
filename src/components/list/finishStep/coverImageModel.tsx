import React, { useRef } from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import crossIcon from '../../../../public/assets/xmark (1).png';
import CoverImage1 from '../../../../public/assets/bg.png';

interface CoverImageModel {
  CloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const CoverImageModel = ({ CloseModal }: CoverImageModel) => {
   

  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[1124px] pb-5'
        closeModal={() => CloseModal(false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6'>
          <h5 className='text-lg font-semibold'>Upload new photo</h5>
          <div
            className='h-6 w-6 cursor-pointer'
            onClick={() => CloseModal(false)}
          >
            <Image className='h-full w-full' src={crossIcon} alt={''} />
          </div>
        </div>

        <div className='p-8'>
    

          <div>
            <Image src={CoverImage1} className='h-full w-full object-cover' />
          </div>

          <div className='mt-6 flex items-center justify-between'>
            <div>
              <button
                // onClick={() => SetOpenStyle(false)}
                className='font-bold flex h-[48px] w-[100%] items-center justify-center rounded-[14px] bg-[#FFFFFF14] px-5 py-[13px]'
              >
                Preview
              </button>
            </div>
            <div className='flex items-center gap-3'>
              <button
                onClick={() => CloseModal(false)}
                className='font-bold flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px]'
              >
                Cancel
              </button>
              <button
                onClick={() => CloseModal(false)}
                className='font-bold flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-[#5848BC] bg-[#5848BC] px-5 py-[13px]'
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CoverImageModel;
