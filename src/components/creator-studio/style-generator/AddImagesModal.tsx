import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import xMark from '@/assets/xmark (1).webp';
import img1 from '@/assets/style-gen-img1.webp';
import img2 from '@/assets/style-gen-img2.webp';
import img3 from '@/assets/style-gen-img3.webp';
import img4 from '@/assets/style-gen-img4.webp';
import ProfileCropper from '@components/common/ProfileCropper';

interface AddImagesModalProps {
  updateProfileState?: boolean;
  setUpdateProfileState: React.Dispatch<React.SetStateAction<boolean>>;
  setStyleGeneratorNext?: any;
  setCroppedImage?: React.Dispatch<React.SetStateAction<string | null>>;
}

const albums = [
  {
    image: img1,
    text: 'Fantasy world & nature',
    number: '124'
  },
  {
    image: img2,
    text: 'Face, body and hair',
    number: '32'
  }
];

const allPhotos = [
  {
    image: img3,
    selected: false
  },
  {
    image: img4,
    selected: false
  },
  {
    image: img3,
    selected: false
  },
  {
    image: img4,
    selected: false
  }
];

const AddImagesModal = ({
  updateProfileState,
  setUpdateProfileState,
  setStyleGeneratorNext,
  setCroppedImage
}: AddImagesModalProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  //   const [styleGenHoverModal, setStyleGenHoverModal] = useState(false);
  const [updateProfileImg, setUpdateProfileImg] = useState<boolean>(true);
  const [selectProfileImage, setSelectProfileImage] = useState<any>([]);
  const [allImage, setAllImages] = useState(allPhotos);

  const handleImageClick = (index: number) => {
    const updatedPhotos = allPhotos.map((item, i) => ({
      ...item,
      selected: i === index ? !item.selected : false
    }));

    setSelectProfileImage(updatedPhotos.filter((item) => item.selected));
    setAllImages(updatedPhotos);
  };

  return (
    <>
      {updateProfileState && (
        <>
          {updateProfileImg ? (
            <Modal
              open={true}
              modalClassName='flex flex-col max-w-xl w-full rounded-2xl h-max bg-[#1A1A1A] max-w-[656px]'
              closeModal={() => setUpdateProfileState(false)}
              modalOverlayStyle='!bg-black/80'
            >
              <div className='flex justify-between border-b border-white/[0.08] p-6'>
                <div className='flex gap-1'>
                  <div className='font-bold text-[18px] leading-6 text-white'>
                    Add images{' '}
                  </div>
                  <div className='font-bold text-[18px] leading-6 text-[#979797]'>
                    0/40
                  </div>
                </div>
                <Image
                  className='object-contain cursor-pointer'
                  onClick={() => setUpdateProfileState(false)}
                  src={xMark}
                  alt={''}
                />
              </div>

              <div className='flex flex-col gap-6 px-6 pt-6'>
                <div className='flex flex-col gap-3'>
                  <div className='text-[15px] font-semibold leading-5 text-white'>
                    Albums
                  </div>
                  <div className='grid h-[256px] grid-cols-2 gap-2 overflow-hidden rounded-[12px]'>
                    {albums.map((item, index) => {
                      return (
                        <div key={index} className='relative'>
                          <Image src={item.image} alt={''} />
                          <div className='absolute right-0 flex justify-between w-full px-4 bottom-5'>
                            <div className='text-[15px] font-semibold leading-5 text-white'>
                              {item.text}
                            </div>
                            <div className='text-[15px] font-semibold leading-5 text-white'>
                              {item.number}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className='font-bold flex cursor-pointer items-center justify-center rounded-[12px] bg-white/[0.08] px-4 py-[10px] text-[14px] leading-5 text-white'
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    Show all albums
                  </div>
                </div>
                {toggle && (
                  <div className='flex flex-col gap-3'>
                    <div className='text-[15px] font-semibold leading-5 text-white'>
                      All photos
                    </div>
                    <div className='grid grid-cols-2 gap-2 overflow-hidden rounded-[12px]'>
                      {allImage.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className='add-to-collection relative h-[256px]'
                          >
                            <Image src={item.image} alt={''} />
                            <div className='absolute top-0 right-0 w-full h-full custom-checkbox'>
                              <div className='pt-4 pr-4 text-right'>
                                <input
                                  type='checkbox'
                                  id={`checked-${index}`}
                                  checked={item.selected}
                                  onChange={() => handleImageClick(index)}
                                />
                                <label htmlFor={`checked-${index}`}></label>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <div className='flex gap-3 p-6'>
                <button
                  className='font-bold w-1/2 items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-[16px] leading-[22px] text-white'
                  onClick={() => setUpdateProfileState(false)}
                >
                  Cancel
                </button>
                <button
                  className='font-bold w-1/2 items-center justify-center rounded-[14px] border border-transparent bg-[#5848BC] px-5 py-[13px] text-[16px] leading-[22px] text-white'
                  onClick={() => {
                    selectProfileImage.length === 0
                      ? ''
                      : setUpdateProfileImg(false);
                  }}
                  disabled={selectProfileImage.length === 0 ? true : false}
                >
                  Save
                </button>
              </div>
            </Modal>
          ) : (
            <Modal
              open={true}
              modalClassName='flex flex-col w-full rounded-[14px] items-start h-max bg-[#1A1A1A] max-w-[484px] relative'
              closeModal={() => setUpdateProfileImg(!updateProfileImg)}
              modalOverlayStyle='!bg-black/80'
            >
              <ProfileCropper
                setUpdateProfileImg={setUpdateProfileImg}
                setAddImagesModal={setUpdateProfileState}
                selectProfileImage={selectProfileImage}
                setCroppedImage={setCroppedImage}
              />
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default AddImagesModal;
