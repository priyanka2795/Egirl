import { Modal } from '@components/modal/modal';
import React from 'react';
import CloseIcon from '@/assets/svgImages/close-icon.svg';

interface DeleteCollectionModalProp {
  closeDeleteModal: any;
  closeDropdown: any;
  setRemoveCover:any;
}
const DeleteProfileCover = ({
  closeDeleteModal,
  closeDropdown,
  setRemoveCover
}: DeleteCollectionModalProp) => {
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[468px]'
      // closeModal={() => closeModalItem(false)}
      closeModal={() => {
        closeDeleteModal(false), closeDropdown(false);
      }}
      modalOverlayStyle='!bg-black/80'
    >
      <div>
        <div className='flex w-full justify-between gap-2 border-b border-white/[0.08] p-6'>
          <div className='flex w-[286px] flex-col items-start gap-1 text-lg font-bold text-white'>
            Delete profile cover
          </div>
          <div
            className='top-[7px] flex h-[24px] w-[24px] cursor-pointer items-start gap-4 object-contain'
            onClick={() => {
              closeDeleteModal(false), closeDropdown(false);
            }}
          >
            <CloseIcon />
          </div>
        </div>

        <div className='flex items-center w-full gap-4 px-6 pt-6 pb-3'>
          <p className='mx-auto w-full max-w-[290px] text-center text-base'>
            Are you sure you want to delete your profile cover?
          </p>
        </div>

        <div className='w-full px-6 pt-5 pb-6'>
          <div className='flex gap-3 w-ful'>
            <button
              className='w-1/2 rounded-[14px] border border-white/[32] px-[20px] py-[11px] text-base font-bold'
              onClick={() => {
                closeDeleteModal(false), closeDropdown(false);
              }}
            >
              Cancel
            </button>
            <button
              className='w-1/2 rounded-[14px] bg-[#5848BC] px-[20px] py-[11px] text-base font-bold text-white'
              onClick={() => {
                closeDeleteModal(false), closeDropdown(false), setRemoveCover('');
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteProfileCover;
