import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import crossIcon from '@/assets/xmark (1).webp';
import Star from '../svg/star.svg';
import AlbumFirst from '@/assets/gallery-tab-img.webp';
import Pencil from '@/assets/pen.svg';
import image1 from '@/assets/vi-image-1.webp';
import user from '@/assets/circle-user.webp';
import imageSquare from '@/assets/image-square.webp';
import image from '@/assets/image.webp';
import undo from '@/assets/Undo.webp';
import deleteIcon from '@/assets/trash-blank-alt.webp';
import image2 from '@/assets/vi-image-2.webp';
import image3 from '@/assets/vi-image-3.webp';
import image4 from '@/assets/vi-image-4.webp';
import image5 from '@/assets/vi-image-5.webp';
import image6 from '@/assets/vi-image-6.webp';
import image7 from '@/assets/vi-image-7.webp';

const CoverImage = [
  {
    image: image,
    text: 'Make album cover'
  },
  {
    image: user,
    text: 'Make profile picture'
  },
  {
    image: imageSquare,
    text: 'Make profile cover'
  },
  {
    image: undo,
    text: 'Move to album'
  },
  {
    image: deleteIcon,
    text: 'Delete'
  }
];

const imagesCover = [
  {
    id: 1,
    image: image1
  },
  {
    id: 2,
    image: image3
  },
  {
    id: 3,
    image: image4
  },
  {
    id: 4,
    image: image2
  },
  {
    id: 5,
    image: image6
  },
  {
    id: 6,
    image: image4
  },
  {
    id: 7,
    image: image5
  },
  {
    id: 8,
    image: image3
  },
  {
    id: 9,
    image: image1
  },
  {
    id: 10,
    image: image5
  }
];

const images = [
  {
    image: image1
  },
  {
    image: image2
  },
  {
    image: image3
  },
  {
    image: image4
  },
  {
    image: image5
  },
  {
    image: image6
  },
  {
    image: image6
  },
  {
    image: image4
  },
  {
    image: image5
  }
];

interface EditAlbum {
  CloseModal: any;
}
const EditAlbum = ({ CloseModal }: EditAlbum) => {
  const [editAlbumImg, setEditAlbumImg] = useState<number | null>(null);
  const [coverImg, setCoverImg] = useState<boolean>(false);
  const EditAlbumImgToggle = (index: number) => {
    setEditAlbumImg((prev) => (prev === index ? null : index));
  };
  return (
    <Modal
      open={true}
      modalClassName={`flex flex-col h-fit rounded-[14px] bg-[#1A1A1A] ${
        coverImg ? 'w-[844px]' : 'w-[799px]'
      }`}
      closeModal={() => CloseModal(false)}
      modalOverlayStyle='!bg-black/80'
    >
      {coverImg ? (
        <>
          <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6'>
            <h5 className='text-lg font-semibold'>
              Choose a cover for the Fantasy world & nature album
            </h5>
            <div
              className='w-6 h-6 cursor-pointer'
              onClick={() => setCoverImg(false)}
            >
              <Image className='w-full h-full' src={crossIcon} alt={''} />
            </div>
          </div>
          <div className='h-[calc(100%-80px)] overflow-y-auto p-6'>
            <div className='grid grid-cols-4 gap-2'>
              {imagesCover.map((items, index) => (
                <div
                  key={index}
                  className='sub-banner h-[193px] w-[193px]'
                  onClick={() => setCoverImg(false)}
                >
                  <Image src={items.image} className='w-full h-full' />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6 '>
            <h5 className='text-lg font-semibold'>Edit album</h5>
            <div
              className='w-6 h-6 cursor-pointer'
              onClick={() => CloseModal(false)}
            >
              <Image className='w-full h-full' src={crossIcon} alt={''} />
            </div>
          </div>
          <div className='p-6'>
            <div className='flex gap-4 border-b border-[#FFFFFF14] pb-5'>
              <div className='relative h-[200px] w-[257px] overflow-hidden rounded-[14px]'>
                <Image
                  src={AlbumFirst}
                  className='object-cover w-full h-full'
                />
                <div
                  className='absolute bottom-0 left-0 flex h-10 w-full cursor-pointer items-center justify-center gap-[6px] bg-[#000000A3]'
                  onClick={() => setCoverImg(true)}
                >
                  <Pencil />
                  <p> Edit cover</p>
                </div>
              </div>

              <div className='flex-1'>
                <div className='mb-3 flex flex-col text-[#979797]'>
                  <label
                    htmlFor='category'
                    className='pb-[6px] text-[13px] font-semibold'
                  >
                    Album Name
                  </label>
                  <input
                    type='text'
                    id='category'
                    placeholder='Fantasy world & nature'
                    className='h-12 w-full rounded-[14px] border-none bg-[#FFFFFF0D] text-white placeholder:text-[#979797] focus:border-[#5848BC] focus:ring-[#5848BC] active:border-[#5848BC]'
                    name='category'
                  />
                </div>
                <div className='flex flex-col text-[#979797] '>
                  <label
                    htmlFor='Description'
                    className='pb-[6px] text-[13px] font-semibold'
                  >
                    Description (Optional)
                  </label>
                  <textarea
                    rows={3}
                    id='Description'
                    className='w-full resize-none rounded-[14px]  border-none bg-[#FFFFFF0D] text-white placeholder:text-[#979797] focus:border-[#5848BC] focus:ring-[#5848BC] active:border-[#5848BC]'
                    placeholder='Type a description...'
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='pt-6'>
              <p className='pb-3 text-[15px] font-semibold'>Images</p>
              <div className='h-[calc(86vh-482px)] overflow-y-auto overflow-x-hidden'>
                <div className='grid grid-cols-3 gap-2 '>
                  {images.map((item, index) => (
                    <div
                      className='sub-banner relative h-[190px]  w-[240px] '
                      key={index}
                    >
                      <Image src={item.image} className='object-cover' />
                      <div
                        className='absolute right-2 top-2 cursor-pointer rounded-full bg-[#0000007A] p-1.5'
                        onClick={() => EditAlbumImgToggle(index)}
                      >
                        <Pencil />
                      </div>
                      {editAlbumImg === index && (
                        <div className='absolute z-50 right-3 top-12'>
                          <div className='flex w-[218px] flex-col rounded-[14px] bg-[#1A1A1A]'>
                            {CoverImage.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`flex cursor-pointer gap-2 px-4 py-[10px]`}
                                >
                                  <Image src={item.image} alt={''} />
                                  <div className='text-[14px] font-normal leading-[18px] text-[#FFFFFF]'>
                                    {item.text}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='flex items-center justify-end gap-3 mt-6 font-semibold text-white'>
              <button
                className='rounded-[14px] border border-[#FFFFFF52] px-5 py-3'
                onClick={() => CloseModal(false)}
              >
                Cancel
              </button>
              <button
                className='rounded-[14px] bg-[#5848BC] px-5 py-3 '
                onClick={() => CloseModal()}
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
};

export default EditAlbum;
