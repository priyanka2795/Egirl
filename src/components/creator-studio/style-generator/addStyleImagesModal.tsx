import React, { useState } from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import xMark from '../../../../public/assets/xmark (1).png';
import img1 from '../../../../public/assets/style-gen-img1.png';
import img2 from '../../../../public/assets/style-gen-img2.png';
import img3 from '../../../../public/assets/style-gen-img3.png';
import img4 from '../../../../public/assets/style-gen-img4.png';
import img5 from '../../../../public/assets/vi-image-1.png';
import img6 from '../../../../public/assets/vi-image.png';
import img7 from '../../../../public/assets/vi-image-2.png';

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
    image: img5,
    selected: false
  },
  {
    image: img6,
    selected: false
  },
  {
    image: img7,
    selected: false
  }
];
interface AddStyleImagesModalProps {
  addImagesModal: any;
  setAddImagesModal: any;
  setStyleGeneratorNext: any;
}
const AddStyleImagesModal = ({
  addImagesModal,
  setAddImagesModal,
  setStyleGeneratorNext
}: AddStyleImagesModalProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectExploreImage, setSelectExploreImage] = useState<any>([]);

  const handleImageClick = (index: any) => {
    const updatedSelectedImages = [...selectExploreImage];

    if (!allPhotos[index].selected && updatedSelectedImages.length < 4) {
      allPhotos[index].selected = true;
      updatedSelectedImages.push(allPhotos[index]);
    } else {
      allPhotos[index].selected = false;
      const imageIndex = updatedSelectedImages.findIndex(
        (item) => item.image === allPhotos[index].image
      );
      updatedSelectedImages.splice(imageIndex, 1);
    }

    setSelectExploreImage(updatedSelectedImages);
  };
  const handleExploreImageSet = () => {
    setAddImagesModal(false);
    // setExploreImages(selectExploreImage);
  };
console.log(selectExploreImage,'selectExploreImage');

  return (
    <Modal
      open={true}
      modalClassName='flex flex-col max-w-xl w-full rounded-2xl h-max bg-[#1A1A1A] max-w-[656px]'
      closeModal={() => setAddImagesModal(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <div className='flex justify-between border-b border-white/[0.08] p-6'>
        <div className='flex gap-1'>
          <div className='font-bold text-[18px] leading-6 text-white'>
          Add images 0/40
          </div>
        </div>
        <Image
          className='object-contain cursor-pointer'
          onClick={() => setAddImagesModal(false)}
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
                  <div
                    className='absolute right-0 flex justify-between w-full px-4 cursor-pointer bottom-5'
                    onClick={() => setSelectAlbumImages(true)}
                  >
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
              {allPhotos.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='add-to-collection relative h-[256px]'
                    // onClick={() => handleImageClick(index)}
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
          onClick={() => {
            setAddImagesModal(false);
          }}
        >
          Cancel
        </button>
        <button
          className='font-bold w-1/2 items-center justify-center rounded-[14px] border border-transparent bg-[#5848BC] px-5 py-[13px] text-[16px] leading-[22px] text-white'
          onClick={() => handleExploreImageSet()}
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default AddStyleImagesModal;
