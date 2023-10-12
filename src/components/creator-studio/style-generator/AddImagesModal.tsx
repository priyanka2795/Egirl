import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import xMark from '../../../../public/assets/xmark (1).png';
import img1 from '../../../../public/assets/style-gen-img1.png';
import img2 from '../../../../public/assets/style-gen-img2.png';
import img3 from '../../../../public/assets/style-gen-img3.png';
import img4 from '../../../../public/assets/style-gen-img4.png';

interface AddImagesModalProps {
  setAddImagesModal?: any;
  setStyleGeneratorNext?: any;
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
    image: img3
  },
  {
    image: img4
  },
  {
    image: img3
  },
  {
    image: img4
  }
];

const AddImagesModal = ({
  setAddImagesModal,
  setStyleGeneratorNext
}: AddImagesModalProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  //   const [styleGenHoverModal, setStyleGenHoverModal] = useState(false);

  return (
    <div>
      <Modal
        open={true}
        modalClassName='flex flex-col max-w-xl w-full rounded-2xl h-max bg-[#1A1A1A] max-w-[656px]'
        closeModal={() => setAddImagesModal(false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='flex justify-between border-b border-white/[0.08] p-6'>
          <div className='flex gap-1'>
            <div className='text-[18px] font-bold leading-6 text-white'>
              Add images{' '}
            </div>
            <div className='text-[18px] font-bold leading-6 text-[#979797]'>
              0/40
            </div>
          </div>
          <Image
            className='object-contain'
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
              className='flex cursor-pointer items-center justify-center rounded-[12px] bg-white/[0.08] px-4 py-[10px] text-[14px] font-bold leading-5 text-white'
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
                    >
                      <Image src={item.image} alt={''} />
                      <div className='absolute top-0 right-0 w-full h-full custom-checkbox'>
                        <div className='pt-4 pr-4 text-right'>
                          <input type='checkbox' id={`checked-${index}`} />
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
            className='w-1/2 items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-[16px] font-bold leading-[22px] text-white'
            onClick={() => setAddImagesModal(false)}
          >
            Cancel
          </button>
          <button
            className='w-1/2 items-center justify-center rounded-[14px] border border-transparent bg-[#5848BC] px-5 py-[13px] text-[16px] font-bold leading-[22px] text-white'
            onClick={() => {
              setAddImagesModal(false), setStyleGeneratorNext(true);
            }}
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddImagesModal;
