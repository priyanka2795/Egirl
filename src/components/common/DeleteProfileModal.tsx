import Image from 'next/image';
import React from 'react';
import crossIcon from '@/assets/xmark (1).webp';
// import { Button } from "./Button";

interface DeleteProfileProp {
  deleteProfileState: boolean;
  setDeleteProfileState: React.Dispatch<React.SetStateAction<boolean>>;
  setCroppedImage: React.Dispatch<React.SetStateAction<any>>;
}
const DeleteProfileModal = ({
  setDeleteProfileState,
  deleteProfileState,
  setCroppedImage
}: DeleteProfileProp) => {
  return (
    <>
      <div className='w-full'>
        <div className='font-bold flex items-center justify-between border-b border-white/[08] p-[24px]'>
          <div>Delete profile photo</div>
          <Image
            src={crossIcon}
            alt=''
            className='cursor-pointer'
            onClick={() => setDeleteProfileState(!deleteProfileState)}
          />
        </div>
        <div className='relative flex w-full flex-[0_0_auto] flex-col items-center gap-[32px] self-stretch p-[24px]'>
          <p className='relative mx-auto max-w-[290px] text-center'>
            Are you sure you want to delete your profile photo?
          </p>
          <div className='relative flex w-full flex-[0_0_auto] items-start gap-[12px] self-stretch'>
            <button
              className='inline-flex h-12 w-[204px] items-center justify-center gap-2 rounded-[14px] border border-white border-opacity-30 px-5'
              onClick={() => setDeleteProfileState(!deleteProfileState)}
            >
              <div className="font-bold font-['Open Sans'] text-base leading-snug text-white">
                Cancel
              </div>
            </button>

            <button
              className='inline-flex h-12 w-[204px] items-center justify-center gap-2 rounded-[14px] bg-[#5848BC] px-5'
              onClick={() => {
                setDeleteProfileState(!deleteProfileState),
                  setCroppedImage(null);
              }}
            >
              <div className="font-bold font-['Open Sans'] text-base leading-snug text-white">
                Delete
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteProfileModal;
