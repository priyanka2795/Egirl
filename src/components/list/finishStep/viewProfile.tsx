//@ts-nocheck
import React, { useState } from 'react';
import CameraIcon from '@/assets/camera.webp';
import ImagePlusIcon from '@/assets/image-plus2.webp';
import InformationIcon from '@/assets/circle-information24.webp';
import DeleteWhiteIcon from '@/assets/trash-blank-alt-white.webp';
import Image from 'next/image';
import CoverImageModel from './coverImageModel';
import SelectExploreImages from './selectExploreImages';
import AddImagesModal from '@components/creator-studio/style-generator/AddImagesModal';
function ViewProfile() {
  const [selectProfilePhoto, setSelectProfilePhoto] = useState(false);
  const [uploadCoverImg, setUploadCoverImg] = useState<boolean>(false);
  const [attachingImages, setAttachingImages] = useState<boolean>(false);

  //   upload image code

  const [coverImage, setCoverImage] = useState<string>('');
  const [exploreImages, setExploreImages] = useState([
    {
      image: '',
      selected: true
    }
  ]);

  const handleDeleteImage = (index:number) => {
    const updatedExploreImages = [...exploreImages];

    updatedExploreImages.splice(index, 1);

    setExploreImages(updatedExploreImages);
  };

  const [croppedImage, setCroppedImage] = useState<string | null>(null);


  return (
    <>
      <div className='flex w-full max-w-[468px] flex-col items-center justify-center gap-6'>
        <div className='flex flex-col w-full gap-3'>
          <h2 className='text-[22px] font-black'>Profile view</h2>
          <div className='relative h-[172px] w-full overflow-hidden  rounded-[14px] bg-[#FFFFFF0D]'>
            <div
              className='absolute right-3 top-3 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[10px] bg-[#FFFFFF14]'
              onClick={() => setUploadCoverImg(true)}
            >
              <Image src={CameraIcon} className='w-full h-full' />
            </div>
            {coverImage ? (
              <img
                src={coverImage}
                className='object-center w-full h-full'
                alt='CoverImage'
              />
            ) : (
              ''
            )}

            <div className='absolute bottom-0 flex h-[84px] w-full items-center gap-4 bg-[#121212] pb-[16px] pl-[24px] pt-[24px]'>
              <div
                className='relative mb-[35px] flex h-[88px] w-[88px] cursor-pointer items-center justify-center rounded-full border-[3px] border-[#121212] bg-[#272727]'
                onClick={() => setSelectProfilePhoto(true)}
              >
                {croppedImage ? (
                  <img
                    src={croppedImage || 'none'}
                    alt=''
                    className='h-[72px] w-[72px] rounded-full'
                  />
                ) : (
                  <div className='absolute left-1/2 top-1/2 h-[32px] -translate-x-1/2 -translate-y-1/2'>
                    <Image src={ImagePlusIcon} className='' />
                  </div>
                )}
              </div>
              <div>
                <h2 className='text-lg font-black'>Mika-chan</h2>
                <p className='text-[14px] text-[#979797]'>@mikachan</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full gap-3'>
          <div className='flex items-center gap-2'>
            <h2 className='text-[22px] font-black'>Explore view</h2>
            <Image src={InformationIcon} />
          </div>
          <div className='rounded-[14px] bg-[#121212] px-6 py-5'>
            <div className='flex flex-col gap-4 '>
              <div className='text-[15px] font-semibold'>
                Images{' '}
                <span className='text-[#979797]'>{exploreImages.length}/4</span>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                {exploreImages.map((items, index) => (
                  <div className='group relative flex h-[204px] w-[204px] items-center justify-center overflow-hidden rounded-xl bg-[#FFFFFF0D]'>
                    {items.image === '' ? (
                      ''
                    ) : (
                      <div className='absolute right-[6px] top-3 hidden h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#0000007A] group-hover:flex' onClick={() => handleDeleteImage(index)}>
                        <Image src={DeleteWhiteIcon} alt='' />
                      </div>
                    )}
                    {items.image === '' ? (
                      <div
                        className='flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFFF0D]'
                        onClick={() => setAttachingImages(true)}
                      >
                        <Image src={ImagePlusIcon} />
                      </div>
                    ) : (
                      <div key={index} className='w-full h-full'>
                        <img
                          src={items?.image?.src || ''}
                          className='object-contain w-full h-full'
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectProfilePhoto && (
        <AddImagesModal    
          setAddImagesModal={setSelectProfilePhoto}
          setCroppedImage={setCroppedImage}
          AddImagesModal={selectProfilePhoto}
        />
      )}
      {uploadCoverImg && (
        <CoverImageModel
          CloseModal={setUploadCoverImg}
          coverImage={coverImage}
          setCoverImage={setCoverImage}
        />
      )}
      {attachingImages && (
        <SelectExploreImages
          setAttachingImages={setAttachingImages}
          setExploreImages={setExploreImages}
        />
      )}
    </>
  );
}

export default ViewProfile;
