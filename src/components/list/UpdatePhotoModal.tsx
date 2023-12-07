import React, { useState, createRef } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import CloseIcon from '@/assets/svgImages/close-icon.svg';
import { Modal } from '@components/modal/modal';
import PreviewProfile from './PreviewProfile';

interface UpdatePhotoProps {
  closeModalState: any;
  closeDropdown: any;
  image: any;
  setImage: any;
  cropData: any;
  setCropData: any;
  setUpdatedProfile: any;
}

const defaultSrc =
  'https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg';
const UpdatePhotoModal = ({
  closeModalState,
  closeDropdown,
  image,
  setImage,
  cropData,
  setCropData,
  setUpdatedProfile
}: UpdatePhotoProps) => {
  const [isPreview, setIsPreview] = useState(false);
  const cropperRef = createRef<ReactCropperElement>();

  const handleShowPreview = () => {
    if (image) {
      if (typeof cropperRef.current?.cropper !== 'undefined') {
        setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      }
      setIsPreview(true);
    }
  };

  const handleSaveButton = () => {
    if(isPreview) {
      closeModalState(false);
      closeDropdown(false);
      setUpdatedProfile(true);
    } else {
      closeModalState(false);
      closeDropdown(false);
      setUpdatedProfile(true);

      if (image) {
        if (typeof cropperRef.current?.cropper !== 'undefined') {
          setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
        }
      // setIsPreview(true);
      }
    }
  };

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

  return (
    <Modal
      open={true}
      modalClassName='flex flex-col h-max w-[753px] rounded-[20px] bg-[#121212] overflow-hidden mt-10 mb-10 ml-5 bookmark-img-text'
      closeModal={() => {
        closeModalState(false), closeDropdown(false);
      }}
      modalOverlayStyle='!bg-black/80'
    >
      <div className='flex gap-2 border-b border-white/[0.08] p-6'>
        <div className='flex text-[18px] font-bold leading-6 text-white'>
          {isPreview ? 'Preview' : 'Upload new photo'}
        </div>
        <div
          className={`${
            isPreview ? 'ml-[605px]' : 'ml-[519px]'
          } mt-1 h-6 w-6 cursor-pointer`}
          onClick={() => {
            closeModalState(false), closeDropdown(false);
          }}
        >
          <CloseIcon />
        </div>
      </div>
      <div className='p-5 pb-0'>
        {isPreview ? (
          <PreviewProfile cropData={cropData} />
        ) : (
          <div className='w-full'>
            <input type='file' onChange={onChange} className='mb-5' />
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
        )}
      </div>

      <div
        className={`flex items-center ${
          isPreview ? 'justify-end' : 'justify-between'
        } `}
      >
        {isPreview ? (
          ''
        ) : (
          <button
            className='ml-5 flex items-center justify-center rounded-xl border-none bg-zinc-800 px-4 py-[10px] text-[14px] font-bold text-[#FFFFFF]'
            onClick={handleShowPreview}
          >
            Preview
          </button>
        )}

        <div className='flex items-end justify-end gap-3 px-6 py-4'>
          {isPreview ? (
            <button
              className='flex items-center justify-center rounded-xl border border-white/[0.32] px-4 py-[10px] text-[14px] font-bold text-[#FFFFFF]'
              onClick={() => setIsPreview(false)}
            >
              Return to edit
            </button>
          ) : (
            <button
              className='flex items-center justify-center rounded-xl border border-white/[0.32] px-4 py-[10px] text-[14px] font-bold text-[#FFFFFF]'
              onClick={() => {
                closeModalState(false), closeDropdown(false);
              }}
            >
              Cancel
            </button>
          )}

          <button
            className='flex items-center justify-center rounded-xl bg-[#5848BC] px-4 py-[10px] text-[14px] font-bold text-[#FFFFFF]'
            onClick={handleSaveButton}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UpdatePhotoModal;
