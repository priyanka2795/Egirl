import React, { useState, createRef, useRef } from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import crossIcon from '@/assets/xmark (1).webp';
// import CoverImage1 from '@/assets/bg.webp';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { postUploadMedia } from 'services/services';
import Cookies from 'js-cookie';

interface CoverImageModel {
  CloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  coverImage: any;
  setCoverImage: React.Dispatch<React.SetStateAction<string>>;
  image: any;
  setImage: any;
  handleCoverImage:any
}
const CoverImageModel = ({
  CloseModal,
  coverImage,
  setCoverImage,
  image,
  setImage,
  handleCoverImage
}: CoverImageModel) => {
  const cropperRef = createRef<ReactCropperElement>();
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const token = Cookies.get('accessToken')

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };



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
            className='w-6 h-6 cursor-pointer'
            onClick={() => CloseModal(false)}
          >
            <Image className='w-full h-full' src={crossIcon} alt={''} />
          </div>
        </div>

        <div className='p-8'>
          <div>
            {/* <Image src={CoverImage1} className='object-cover w-full h-full' /> */}
            <input
              type='file'
              onChange={onChange}
              className='hidden mb-5'
              accept='image/*'
              ref={fileInputRef}
            />
            <button
              // onClick={() => SetOpenStyle(false)}
              className='font-bold mb-5 flex h-[48px] items-center justify-center rounded-[14px] bg-[#FFFFFF14] px-5 py-[13px]'
              onClick={handleUploadButtonClick}
            >
              Upload Image
            </button>
            <Cropper
              ref={cropperRef}
              zoomTo={0.5}
              initialAspectRatio={1}
              preview='.img-preview'
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
              guides={true}
              className='w-full h-full'
            />
          </div>

          <div className='flex items-center justify-between mt-6'>
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
                onClick={() => handleCoverImage()}
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
