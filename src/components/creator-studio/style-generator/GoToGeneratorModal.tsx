import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import xMark from '@/assets/xmark (1).webp';
import image from '@/assets/image-plus.webp';

interface GoToGeneratorModalProp {
  setGoToModal: React.Dispatch<React.SetStateAction<boolean>>;
  setAddImagesModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const GoToGeneratorModal = ({
  setGoToModal,
  setAddImagesModal
}: GoToGeneratorModalProp) => {
  //   const [styleGenHoverModal, setStyleGenHoverModal] = useState(false);
  return (
    <div>
      <Modal
        open={true}
        modalClassName='flex flex-col max-w-xl w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[656px]'
        closeModal={() => setGoToModal(false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='flex justify-between border-b border-white/[0.08] p-6'>
          <div className='flex gap-1'>
            <div className='text-[18px] font-bold leading-6 text-white'>
              Add images{' '}
            </div>
            <div className='text-[18px] font-bold leading-6 text-[#979797]'>
              0/40
            </div>
          </div>
          <Image
            onClick={() => {
              setGoToModal(false);
            }}
            src={xMark}
            alt={''}
          />
        </div>
        <div className='flex h-[372px] flex-col items-center justify-center gap-5'>
          <div className='flex flex-col items-center justify-center gap-3'>
            <div className='w-max rounded-[100px] bg-white/[0.05] px-[24px] py-5'>
              <Image className='!mt-[3px]' src={image} alt={''} />
            </div>
            <div className='flex flex-col gap-1'>
              <div className='text-center text-[15px] font-normal leading-5'>
                You don’t have any images
              </div>
              <div className='text-center text-[13px] font-normal leading-[18px]'>
                Click on the button to generate images for model generation.
              </div>
            </div>
          </div>
          <button
            className='items-center justify-center rounded-[12px] bg-white/[0.08] px-4 py-[10px] text-[14px] font-bold leading-5 text-white'
            onClick={() => {
              setAddImagesModal(true), setGoToModal(false);
            }}
          >
            Go to Image Generator
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default GoToGeneratorModal;
