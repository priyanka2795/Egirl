//@ts-nocheck
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import xMark from '@/assets/xmark (1).webp';
import img1 from '@/assets/style-gen-img1.webp';
import img2 from '@/assets/style-gen-img2.webp';
import img3 from '@/assets/style-gen-img3.webp';
import img4 from '@/assets/style-gen-img4.webp';
import img5 from '@/assets/vi-image-1.webp';
import img6 from '@/assets/vi-image.webp';
import img7 from '@/assets/vi-image-2.webp';

interface SelectExploreImages {
  setAttachingImages?: any;
  setExploreImages?: any;
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


const SelectExploreImages = ({
  setAttachingImages,
  setExploreImages
}: SelectExploreImages) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectExploreImage, setSelectExploreImage] = useState([]);
  const [selectAlbumImages, setSelectAlbumImages] = useState(false);


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
    setAttachingImages(false);
    setExploreImages(selectExploreImage);
  };

  return (
    <Modal
      open={true}
      modalClassName='flex flex-col max-w-xl w-full rounded-2xl h-max bg-[#1A1A1A] max-w-[656px]'
      closeModal={() => setAttachingImages(false)}
      modalOverlayStyle='!bg-black/80'
    >
      {selectAlbumImages ? (
        <>
          <div className='flex justify-between border-b border-white/[0.08] p-6'>
            <div className='flex gap-1'>
              <div className='font-bold text-[18px] leading-6 text-white'>
                Fantasy world & nature
              </div>
            </div>
            <Image
              className='object-contain'
              onClick={() => setAttachingImages(false)}
              src={xMark}
              alt={''}
            />
          </div>
          <div className='flex flex-col gap-6 px-6 pt-6'>
            <div className='grid grid-cols-2 gap-2'>
              {allPhotos.map((items, index) => {
                return (
                  <div
                    key={index}
                    className={`add-to-collection relative h-[256px] `}
                  >
                    <Image src={items.image} alt={''} />
                    <div
                      className={`custom-checkbox absolute right-0 top-0 h-full w-full ${items.selected ?'bg-[#000000CC]':''} `}
                    >
                      <div className='pt-4 pr-4 text-right'>
                        <input
                          type='checkbox'
                          id={`checked-${index}`}
                          checked={items.selected}
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
          <div className='flex gap-3 p-6'>
            <button
              className='font-bold w-1/2 items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-[16px] leading-[22px] text-white'
              onClick={() => {
                setAttachingImages(false);
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
        </>
      ) : (
        <>
          <div className='flex justify-between border-b border-white/[0.08] p-6'>
            <div className='flex gap-1'>
              <div className='font-bold text-[18px] leading-6 text-white'>
                Attaching a photo
              </div>
            </div>
            <Image
              className='object-contain'
              onClick={() => setAttachingImages(false)}
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
                setAttachingImages(false);
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
        </>
      )}
    </Modal>
  );
};

export default SelectExploreImages;
