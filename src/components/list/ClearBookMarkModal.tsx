import { Modal } from '@components/modal/modal';
import React from 'react';
import Image from 'next/image';
import orangeDeleteIcon from '../../../public/assets/orange-delete-icon.png';

interface clearBookMarkProp {
  closeModalItem?: any;
  heading: string;
  paragraph: string;
  setClearChat?: any;
  setMoreOptionDropdown?: any;
  setBookMarkList?: any;
}
const ClearBookMarkModal = ({
  closeModalItem,
  heading,
  paragraph,
  setClearChat,
  setMoreOptionDropdown,
  setBookMarkList
}: clearBookMarkProp) => {
  const handleCancelButton = () => {
    if (heading === 'Clear chat history') {
      closeModalItem(false);
      setMoreOptionDropdown(false);
    } else {
      closeModalItem(false);
    }
  };

  const handleClearButton = () => {
    if (heading === 'Clear chat history') {
      closeModalItem(false);
      setClearChat(true);
      setMoreOptionDropdown(false);
    } else {
      closeModalItem(false);
      setBookMarkList([])
    }
  };

  return (
    <Modal
      open={true}
      modalClassName='flex flex-col h-max  max-w-[400px] w-full rounded-[20px] bg-[#121212] overflow-hidden mt-10 mb-10'
      closeModal={() => closeModalItem(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <>
        <div className='flex px-10 py-14'>
          <div className='flex flex-col items-center gap-4'>
            <div className='flex h-[80px] w-[80px] items-center justify-center rounded-[100px] bg-[#FF5336]/[0.16] px-6 py-[26px]'>
              <div className='w-8 h-8'>
                <Image
                  className='w-full h-full'
                  src={orangeDeleteIcon}
                  alt={''}
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='font-bold text-center text-[22px] leading-[32px] text-white'>
                {heading}
              </div>
              <div className='font-normal text-center text-[15px] leading-5 text-[#979797]'>
                {paragraph}
              </div>
            </div>
          </div>
        </div>

        <div className='flex gap-3 px-6 py-4'>
          <button
            className='font-bold flex w-1/2 justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-[16px] leading-[22px] text-white'
            onClick={handleCancelButton}
          >
            Cancel
          </button>
          <button
            className='font-bold flex w-1/2 justify-center rounded-[14px] bg-[#FF5336] px-5 py-[13px] text-[16px] leading-[22px] text-white'
            onClick={handleClearButton}
          >
            Clear
          </button>
        </div>
      </>
    </Modal>
  );
};

export default ClearBookMarkModal;
