import React, { useState } from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import crossIcon from '../../../../public/assets/xmark (1).png';
import ImageLeftIcon from '../../../../public/assets/image-rotate-left.png';
import ImageRightIcon from '../../../../public/assets/image-rotate-right.png';
import UploadImage from '../../../../public/assets/uploadimage.png';
import plusIcon from '../../../../public/assets/plus-large24.png';
import MinusIcon from '../../../../public/assets/minus.png';
import LeftArrowIcon from '../../../../public/assets/arrow-left.png';
import RangePicker from '@components/creator-studio/common/RangePicker';
import Tooltip from '@components/common/tooltip';
interface EditProfilePhoto {
  CloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  SetSelectProfilePhoto: React.Dispatch<React.SetStateAction<boolean>>;
}
const EditProfilePhoto = ({
  CloseModal,
  SetSelectProfilePhoto
}: EditProfilePhoto) => {
  const [first, setfirst] = useState(false);
  const [zoom, setZoom] = useState<number[]>([0]);
  const incrementZoomValue = () => {
    const updatedZoom = [...zoom]; // Create a copy of the 'zoom' array
    updatedZoom[0] += 3; // Increment the value at index 0 (assuming it's the only value)
    setZoom(updatedZoom); // Update the state with the new array
  };

  const decrementZoomValue = () => {
    const updatedZoom = [...zoom]; // Create a copy of the 'zoom' array
    updatedZoom[0] -= 3; // Increment the value at index 0 (assuming it's the only value)
    setZoom(updatedZoom); // Update the state with the new array
  };

  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[484px] '
        closeModal={() => CloseModal(false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6'>
          <div className='flex items-center gap-2 '>
            <Image
              src={LeftArrowIcon}
              className='h-full w-full cursor-pointer'
              onClick={() => SetSelectProfilePhoto(true)}
            />
            <h2 className='text-lg font-semibold'>Upload new photo</h2>
          </div>
          <div
            className='h-6 w-6 cursor-pointer'
            onClick={() => CloseModal(false)}
          >
            <Image className='h-full w-full' src={crossIcon} alt={''} />
          </div>
        </div>
        <div className='flex flex-col gap-6 p-6'>
          <p className='text-[14px] text-[#979797]'>
            The selected area will be displayed on your page. If the image is
            oriented incorrectly, the photo can be rotated.
          </p>
          <div className='relative flex w-full justify-center bg-[#121212]'>
            <Image src={UploadImage} className='h-full w-full ' />
            <div className='absolute top-0 h-full w-full bg-[#000000CC]'></div>
            <button className=' absolute right-3 top-3 rounded-[10px] bg-[#FFFFFF14] p-2 font-semibold'>
              Reset
            </button>
            <div className='absolute bottom-2 right-2 flex items-center gap-1 rounded-lg bg-[#0000007A] px-3 py-[10px]'>
              <button className='group relative h-[20px] w-[20px]'>
                <Image src={ImageLeftIcon} className='h-full w-full' />
                <div className='absolute -left-12 -top-9 z-50 w-max -translate-x-0 -translate-y-2/4 transform transition-all'>
                  <Tooltip Text={'90° left turn'} />
                </div>
              </button>
              <button className='h-[20px] w-[20px]'>
                <Image src={ImageRightIcon} className='h-full w-full' />
                <div className='absolute -left-12 -top-9 z-50 w-max -translate-x-0 -translate-y-2/4 transform transition-all'>
                  <Tooltip Text={'90° right turn'} />
                </div>
              </button>
            </div>
          </div>
          <div>
            <p className='text-[12px] font-semibold text-[#979797]'>Zoom</p>
            <div className='flex items-center gap-4'>
              <Image
                src={MinusIcon}
                className='h-full w-full cursor-pointer'
                onClick={decrementZoomValue}
              />
              <RangePicker values={zoom} setValues={setZoom} />{' '}
              <Image
                src={plusIcon}
                className='h-full w-full cursor-pointer'
                onClick={incrementZoomValue}
              />
            </div>
          </div>
          <div className='flex flex-row gap-3 self-stretch '>
            <button
              onClick={() => CloseModal(false)}
              className='font-bold flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px]'
            >
              Cancel
            </button>
            <button
              // onClick={() => SetOpenStyle(false)}
              className='font-bold flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-[#5848BC] bg-[#5848BC] px-5 py-[13px]'
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditProfilePhoto;
