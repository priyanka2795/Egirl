import React, { useState } from 'react';
import CloseIcon from '../../../public/assets/svgImages/close-icon.svg';
import Image from 'next/image';
import { Modal } from '@components/modal/modal';

interface UpdatePhotoProps {
  closeModalState: any;
}
const UpdatePhotoModal = ({ closeModalState }: UpdatePhotoProps) => {
  const [selectImg, setSelectImg] = useState();
  const handleSelectPhoto = (e: any) => {
    setSelectImg(e.target.files[0]);
  };
  console.log(selectImg);
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col h-max w-[753px] rounded-[20px] bg-[#121212] overflow-hidden mt-10 mb-10 ml-5 bookmark-img-text'
      closeModal={() => closeModalState(false)}
      modalOverlayStyle='!bg-black/80'
    >
      {/* <div className=' h-max rounded-[20px] bg-[#1A1A1A] ml-20 mb-5'> */}
      <div className='flex gap-2 border-b border-white/[0.08] p-6'>
        <div className='flex text-[18px] font-bold leading-6 text-white'>
          Upload new photo
        </div>
        <div
          className='ml-[519px] mt-1 h-6 w-6 cursor-pointer'
          onClick={() => closeModalState(false)}
        >
          {/* <Image className='w-full h-full' src={crossIcon} alt={''} /> */}
          <CloseIcon />
        </div>
      </div>
      <div className='p-5 pb-0'>
        <input type='file' className='' onChange={handleSelectPhoto} />
        <div className='mt-5'>
          {selectImg && (
            <Image
              src={URL.createObjectURL(selectImg)}
              className=''
              height='100%'
              width='100vw'
              alt=''
            />
          )}
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <button className='ml-5 flex items-center justify-center rounded-xl border-none bg-zinc-800 px-4 py-[10px] text-[14px] font-bold text-[#FFFFFF]'>
          Preview
        </button>
        <div className='flex items-end justify-end gap-3 px-6 py-4'>
          <button
            className='flex items-center justify-center rounded-xl border border-white/[0.32] px-4 py-[10px] text-[14px] font-bold text-[#FFFFFF]'
            onClick={() => closeModalState(false)}
          >
            Cancel
          </button>
          <button
            className='flex items-center justify-center rounded-xl bg-[#5848BC] px-4 py-[10px] text-[14px] font-bold text-[#FFFFFF]'
            onClick={() => closeModalState(false)}
          >
            Save
          </button>
        </div>
      </div>

      {/* </div> */}
    </Modal>
  );
};

export default UpdatePhotoModal;
