import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React from 'react';
import greenArrows from '@/assets/arrows-horizontal-green.webp';

interface ConfirmConversionProp {
  closeConfirmModal: React.Dispatch<React.SetStateAction<boolean>>;
  convertCredits: React.Dispatch<React.SetStateAction<boolean>>;
  setShowErrorModal?: React.Dispatch<React.SetStateAction<boolean>>;
  converting: string;
  credits: string;
  text: string;
  notify: () => void;
}
const ConfirmConversionModal = ({
  closeConfirmModal,
  convertCredits,
  setShowErrorModal,
  converting,
  credits,
  text,
  notify
}: ConfirmConversionProp) => {
  return (
    <div>
      <Modal
        open={true}
        modalClassName='flex flex-col w-full rounded-2xl h-max bg-[#121212] max-w-[400px]'
        closeModal={() => closeConfirmModal(false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='flex flex-col items-center gap-4 px-10 py-16'>
          <div className='flex items-center justify-center rounded-[100px] bg-[#5AD02E]/[0.16] px-6 pb-6 pt-[26px]'>
            <Image className='w-8 h-8' src={greenArrows} alt={''} />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-center text-[22px] font-bold leading-8 text-[#FFFFFF]'>
              Confirm conversion
            </div>
            <div className='text-center text-[15px] font-normal leading-5 text-[#979797]'>
              {converting}{' '}
              <span className='text-[15px] font-semibold leading-5 text-[#FFFFFF]'>
                {credits}
              </span>
              {text}
            </div>
          </div>
        </div>

        <div className='flex gap-3 px-6 py-4'>
          <button
            className='flex w-1/2 items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-[16px] font-bold leading-[22px] text-[#FFFFFF]'
            onClick={() => {
              closeConfirmModal(false),
                convertCredits(true),
                setShowErrorModal?.(true);
            }}
          >
            Cancel
          </button>
          <button
            className='flex w-1/2 items-center justify-center rounded-[14px] bg-[#5848BC] px-5 py-[13px] text-[16px] font-bold leading-[22px] text-[#FFFFFF]'
            onClick={notify}
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmConversionModal;
