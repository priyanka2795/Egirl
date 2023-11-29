import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import circleInformation from '../../../../public/assets/circle-information.png';
import deleteIcon from '../../../../public/assets/trash-blank2.png';
import plus from '../../../../public/assets/plus-large4.png';
import img1 from '../../../../public/assets/style-gen-img5.png';
import img2 from '../../../../public/assets/style-gen-img6.png';
import img3 from '../../../../public/assets/style-gen-img7.png';
import img4 from '../../../../public/assets/style-gen-img8.png';
import img5 from '../../../../public/assets/style-gen-img9.png';
import crossIcon from '../../../../public/assets/xmark-style.png';
import StyleGenHoverModal from './StyleGenHoverModal';
import AddImagesModal from './AddImagesModal';
import image from '../../../../public/assets/image-plus.png';
import downArrow from '../../../../public/assets/down-arrow-img.png';
import AlbumDelete from '../viewImages/albumDelete';
import chevronDown from '../../../../public/assets/chevron-down2.png';
import chevronUp from '../../../../public/assets/chevron-up.png';
import AddStyleImagesModal from './addStyleImagesModal';

const options = [
  'Choose category',
  'Character',
  'Clothing',
  'Accessories',
  'Locations',
  'Object'
];
interface StyleGeneratorNextProps {
  setStyleGeneratorNext?: React.Dispatch<React.SetStateAction<boolean>>;
}

const images = [
  {
    image: img1
  },
  {
    image: img2
  },
  {
    image: img3
  },
  {
    image: img4
  },
  {
    image: img5
  }
];

const StyleGeneratorNext = ({
  setStyleGeneratorNext
}: StyleGeneratorNextProps) => {
  const [deleteStyleGenModal, setDeleteStyleGenModal] = useState<boolean>(false);
  const [showCards, setShowCards] = useState<boolean>(true);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectCategory, setSelectCategory] = useState<string>('Choose category');
  const [addImagesModal, setAddImagesModal] = useState<boolean>(false);
  const [image, setImages] = useState<boolean>(false);

  return (
    <>
      <div className='flex flex-col rounded-[14px] bg-white/[0.05]'>
        <div className='flex flex-col gap-6 p-6'>
          <div className='font-bold text-[22px] leading-8 text-white'>
            Style Generator
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-[6px]'>
              <h6 className='text-[13px] text-[#979797]'>Name</h6>
              <input
                type='text'
                name='name'
                placeholder='Ex. Bunny girl'
                className='rounded-[14px] border border-none border-transparent bg-white/[0.05] px-4 py-3 text-white placeholder:text-[#979797] focus:ring-0'
              />
            </div>
            <div className='relative flex flex-col gap-[6px]'>
              <h6 className='text-[13px] text-[#979797]'>Category</h6>
              <div
                className={`relative flex cursor-pointer justify-between rounded-[14px] px-4 py-3 ${
                  showDropDown
                    ? 'border border-[#515151]'
                    : 'border border-transparent bg-white/[0.05]'
                }`}
                onClick={() => {
                  setShowDropDown(!showDropDown);
                }}
              >
                <div
                  className={`${
                    showDropDown || selectCategory !== 'Gender'
                      ? 'text-white'
                      : 'text-[#979797]'
                  } font-normal text-[15px] leading-6`}
                >
                  {selectCategory}
                </div>
                <Image src={showDropDown ? chevronUp : chevronDown} alt={''} />
                {showDropDown && (
                  <div className='absolute left-0 top-14 z-50 flex w-full flex-col rounded-[14px] bg-[#1A1A1A] px-0 py-1'>
                    {options.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className='font-normal mx-2 my-1 cursor-pointer bg-[#1A1A1A] px-2 py-[6px] text-[14px] leading-[18px] text-white hover:rounded-[8px] hover:bg-white/[0.05]'
                          onClick={() => {
                            setSelectCategory(item), setShowDropDown(false);
                          }}
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-1'>
                <div className='font-bold text-[18px] leading-6 text-white'>
                  Images{' '}
                </div>
                <div className='font-bold text-[18px] leading-6 text-[#979797]'>
                  0/40
                </div>
              </div>
              <div className='flex gap-2'>
                <Image src={circleInformation} alt={''} />
                <div className='font-normal text-[12px] leading-4 text-[#979797]'>
                  You need to select a minimum of 4 images to generate the style
                </div>
              </div>
            </div>
            <div className='flex gap-[10px]'>
              <div
                className='group relative flex h-max items-center justify-center rounded-[12px] border border-white/[0.32] p-[10px]'
                onClick={() => setDeleteStyleGenModal(true)}
              >
                <Image className='' src={deleteIcon} alt={''} />
                <div className='invisible group-hover:visible group-hover:opacity-100'>
                  <div className='font-normal absolute -right-[39px] -top-[48px] flex h-[34px] w-[119px] items-center justify-center rounded-[6px] bg-[#303030] px-3 py-[6px] text-center text-[12px] leading-4 text-white'>
                    Delete all images
                  </div>
                  <div className='absolute -right-[15px] -top-[25px] h-[24px] w-10'>
                    <Image className='w-full h-full' src={downArrow} alt={''} />
                  </div>
                </div>
              </div>
              <button
                className='flex h-max items-center justify-center gap-[6px] rounded-[12px] border border-transparent bg-white/[0.08] px-4 py-[9px]'
                onClick={() => {
                  setAddImagesModal(true);
                }}
              >
                <Image src={plus} alt={''} />
                <div className='font-bold text-[14px] leading-5 text-white'>
                  Add images
                </div>
              </button>
            </div>
          </div>

          <div className='flex h-[320px] flex-col items-center justify-center gap-5'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <div className='flex rounded-[100px] bg-white/[0.05] p-4'>
                <Image src={image} alt={''} />
              </div>
              <div className='font-normal text-center text-[13px] leading-[18px] text-[#979797]'>
                Add images for style generation
              </div>
            </div>
            <button
              className='font-bold items-center justify-center rounded-[12px] bg-white/[0.08] px-4 py-[10px] text-[14px] leading-5 text-white'
              onClick={() => {
                setAddImagesModal(!addImagesModal);
              }}
            >
              Add images
            </button>
          </div>

          {/* <div className='grid grid-cols-3 gap-5'>
            {images.map((item, index) => {
              return (
                <div
                  key={index}
                  className='relative flex flex-col rounded-[14px]'
                >
                  <Image src={item.image} alt={''} />
                  <div className='flex h-[128px] flex-col gap-2 bg-[#1A1A1A] p-4'>
                    <div className='h-full rounded-[14px] bg-white/[0.03] py-3 pl-4 pr-3'>
                      <div className='flex items-center justify-between'>
                        <div className='font-normal text-[15px] leading-6 text-[#979797]'>
                          Add label
                        </div>
                        <div className='font-normal text-[13px] leading-[18px] text-[#515151]'>
                          100
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>

        <div className='flex flex-col items-end justify-center border-t border-white/[0.08] p-6 p-6 '>
          <div className='font-bold group relative flex cursor-pointer items-center justify-center rounded-[14px] bg-[#5848BC]/[0.32] px-5 py-[13px] text-[16px] leading-[22px] text-white'>
            Generate
            <div className='invisible group-hover:visible group-hover:opacity-100'>
              <div className='font-normal absolute -left-[30px] bottom-[62px] flex h-[34px] w-[169px] items-center justify-center rounded-[6px] bg-[#303030] px-3 py-[6px] text-center text-[12px] leading-4 text-white'>
                Please fill in labels
              </div>
              <div className='absolute -top-[25px] right-[20px] h-[24px] w-10'>
                <Image className='w-full h-full' src={downArrow} alt={''} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {deleteStyleGenModal && (
        <AlbumDelete
          DeleteModal={setDeleteStyleGenModal}
          Heading={'Delete all images'}
          Content={'Are you sure you want to delete all added images?'}
          setShowCards={setShowCards}
          component={'StyleGeneration'}
        />
      )}
      {addImagesModal && (
        <AddStyleImagesModal
          addImagesModal={addImagesModal}
          setAddImagesModal={setAddImagesModal}
          setStyleGeneratorNext={setStyleGeneratorNext}
        />
      )}
    </>
  );
};

export default StyleGeneratorNext;
