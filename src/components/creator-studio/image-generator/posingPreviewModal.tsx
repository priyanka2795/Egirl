import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React from 'react';
import PoseImageSelect from '@/assets/poseimageselect.webp';
import CloseIcon from '@/assets/xmark-large.webp';

interface PosingPreviewModal {
  PosingPreviewClose: React.Dispatch<React.SetStateAction<boolean>>;
  PoseCreated: React.Dispatch<React.SetStateAction<void>>;
}
const PosingPreviewModal = ({
  PosingPreviewClose,
  PoseCreated
}: PosingPreviewModal) => {
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[1012px] relative'
      closeModal={() => PosingPreviewClose(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <Image src={PoseImageSelect} className='w-full h-full ' />
      <div className='absolute right-6 top-6'>
        <button
          className='h-[24px] w-[24px]'
          onClick={() => PosingPreviewClose(false)}
        >
          <Image src={CloseIcon} className='' />
        </button>
      </div>
      <div className='absolute bottom-0 left-0 h-[96px] w-full bg-[#00000066] p-6'>
        <div className='flex items-center justify-end gap-3 font-semibold'>
          <button
            className='rounded-[14px] bg-[#FFFFFF14] px-5 py-3'
            onClick={() => PosingPreviewClose(false)}
          >
            Return to edit
          </button>
          <button
            className='rounded-[14px] bg-[#5848BC] px-5 py-3'
            onClick={() => PoseCreated()}
          >
            Create
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PosingPreviewModal;
