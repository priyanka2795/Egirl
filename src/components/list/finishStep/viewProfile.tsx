import React, { useState } from 'react';
import CameraIcon from '../../../../public/assets/camera.png';
import ImagePlusIcon from '../../../../public/assets/image-plus2.png';
import InformationIcon from '../../../../public/assets/circle-information24.png';
import Image from 'next/image';
import SelectProfilePhoto from './selectProfilePhoto';
import EditProfilePhoto from './editProfilePhoto';
import CoverImageModel from './coverImageModel';
import SelectExploreImages from './selectExploreImages';
function ViewProfile() {
  const [selectProfilePhoto, setSelectProfilePhoto] = useState(false);
  const [uploadImg, setUploadImg] = useState<boolean>(false);
  const [uploadCoverImg, setUploadCoverImg] = useState<boolean>(false);
  const [attachingImages, setAttachingImages] = useState<boolean>(false);
  const UploadImgModal = () => {
    setUploadImg(true);
    setSelectProfilePhoto(false);
  };

  //   upload image code

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      // Check if the selected file is an image
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e) => {
          setSelectedImage(e.target.result);
        };

        reader.readAsDataURL(file);
      } else {
        alert('Please select an image file.');
      }
    }
  };

  return (
    <>
      <div className='flex w-full max-w-[468px] flex-col items-center justify-center gap-6'>
        <div className='flex w-full flex-col gap-3'>
          <h2 className='text-[22px] font-black'>Profile view</h2>
          <div className='relative h-[172px] w-full overflow-hidden  rounded-[14px] bg-[#FFFFFF0D]'>
            <div
              className='absolute right-3 top-3 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[10px] bg-[#FFFFFF14]'
              onClick={() => setUploadCoverImg(true)}
            >
              <Image src={CameraIcon} className='h-full w-full' />
            </div>
            
            {/* {selectedImage && <img src={selectedImage} alt="Selected" className='h-full w-full object-center' style={{ maxWidth: '100%', maxHeight: '300px' }} />} */}

            <div className='absolute bottom-0 flex h-[84px] w-full items-center gap-4 bg-[#121212] pb-[16px] pl-[24px] pt-[24px]'>
              <div
                className='mb-[35px] flex h-[88px] w-[88px] cursor-pointer items-center justify-center rounded-full border-[3px] border-[#121212] bg-[#272727]'
                onClick={() => setSelectProfilePhoto(true)}
              >
                <Image src={ImagePlusIcon} />
              </div>
              <div>
                <h2 className='text-lg font-black'>Mika-chan</h2>
                <p className='text-[14px] text-[#979797]'>@mikachan</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <h2 className='text-[22px] font-black'>Explore view</h2>
            <Image src={InformationIcon} />
          </div>
          <div className='rounded-[14px] bg-[#121212] px-6 py-5'>
            <div className='flex flex-col gap-4 '>
              <div className='text-[15px] font-semibold'>
                Images <span className='text-[#979797]'> 0/4</span>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                {Array(4)
                  .fill('0')
                  .map(() => (
                    <div className='flex h-[204px] w-[204px] items-center justify-center rounded-xl bg-[#FFFFFF0D]'>
                      <div
                        className='flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFFF0D]'
                        onClick={() => setAttachingImages(true)}
                      >
                        <Image src={ImagePlusIcon} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '300px' }} />}
    </div> */}

      {selectProfilePhoto && (
        <SelectProfilePhoto
          CloseModal={setSelectProfilePhoto}
          UploadImgModal={UploadImgModal}
        />
      )}
      {uploadImg && (
        <EditProfilePhoto
          CloseModal={setUploadImg}
          SetSelectProfilePhoto={setSelectProfilePhoto}
        />
      )}
      {uploadCoverImg && <CoverImageModel CloseModal={setUploadCoverImg} />}
      {attachingImages && (
        <SelectExploreImages setAttachingImages={setAttachingImages} />
      )}
    </>
  );
}

export default ViewProfile;
