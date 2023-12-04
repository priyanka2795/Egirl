import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import circleInformation from '@/assets/circle-information.webp';
import deleteIcon from '@/assets/trash-blank2.webp';
import plus from '@/assets/plus-gray.webp';
import crossIcon from '@/assets/xmark-style.webp';
import image from '@/assets/image-plus.webp';
import downArrow from '@/assets/down-arrow-img.webp';
import AlbumDelete from '../viewImages/albumDelete';
import chevronDown from '@/assets/chevron-down2.webp';
import chevronUp from '@/assets/chevron-up.webp';
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

const StyleGeneratorNext = ({
  setStyleGeneratorNext
}: StyleGeneratorNextProps) => {
  const [deleteStyleGenModal, setDeleteStyleGenModal] =
    useState<boolean>(false);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectCategory, setSelectCategory] =
    useState<string>('Choose category');
  const [addImagesModal, setAddImagesModal] = useState<boolean>(false);
  const [selectStyleGenerator, setSelectStyleGenerator] = useState<any[]>([]);

  const handleDeleteImage = (index: number) => {
    const updatedExploreImages = [...selectStyleGenerator];

    updatedExploreImages.splice(index, 1);

    setSelectStyleGenerator(updatedExploreImages);
  };

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
                  {selectStyleGenerator.length}/40
                </div>
              </div>
              <div className='flex gap-2'>
                <Image src={circleInformation} alt={''} />
                <div className='font-normal text-[12px] leading-4 text-[#979797]'>
                  You need to select a minimum of 4 images to generate the style
                </div>
              </div>
            </div>
            {selectStyleGenerator.length > 0 ? (
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
                      <Image
                        className='w-full h-full'
                        src={downArrow}
                        alt={''}
                      />
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
            ) : (
              ''
            )}
          </div>
          {selectStyleGenerator.length > 0 ? (
            <div className='grid grid-cols-3 gap-5'>
              {selectStyleGenerator.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='w-full overflow-hidden rounded-[14px] bg-[#1A1A1A]'
                  >
                    <div className='group relative h-[320px] cursor-pointer'>
                      <img
                        src={item?.image?.src}
                        alt=''
                        className='w-full h-full'
                      />
                      <div
                        className='absolute right-[6px] top-3 hidden h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#0000007A] group-hover:flex'
                        onClick={() => handleDeleteImage(index)}
                      >
                        <Image src={crossIcon} alt='' />
                      </div>
                    </div>
                    <div className='p-4'>
                      <div className='relative rounded-[14px] bg-white/[0.05]'>
                        <div className='absolute right-3 top-2 text-[13px] text-[#515151]'>
                          100
                        </div>
                        <textarea
                          name=''
                          id=''
                          cols={26}
                          rows={3}
                          placeholder='Add label'
                          className='resize-none border  border-none border-transparent bg-transparent  px-4 py-3 text-white placeholder:text-[#979797] focus:ring-0'
                        ></textarea>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
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
          )}
        </div>

        <div className='flex flex-col items-end justify-center border-t border-white/[0.08] p-6 '>
          {selectStyleGenerator.length >= 4 ? (
            <button
              className={`font-bold group relative flex cursor-pointer items-center justify-center rounded-[14px] bg-[#5848BC] px-5 py-[13px] text-[16px] leading-[22px] text-white `}
            >
              Generate
            </button>
          ) : (
            <button
              className={`font-bold group relative flex cursor-pointer items-center justify-center rounded-[14px] bg-[#5848BC]/[0.32] px-5 py-[13px] text-[16px] leading-[22px] text-white `}
            >
              Generate
              <div className='invisible group-hover:visible group-hover:opacity-100'>
                <div className='font-normal absolute -left-[30px] bottom-[62px] flex  w-[169px] items-center justify-center rounded-[6px] bg-[#303030] px-3 py-[6px] text-center text-[12px] leading-4 text-white'>
                  You need to select a minimum of 4 images to generate the style
                </div>
                <div className='absolute -top-[25px] right-[20px] h-[24px] w-10'>
                  <Image className='w-full h-full' src={downArrow} alt={''} />
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
      {deleteStyleGenModal && (
        <AlbumDelete
          DeleteModal={setDeleteStyleGenModal}
          Heading={'Delete all images'}
          Content={'Are you sure you want to delete all added images?'}
          component={'StyleGeneration'}
          setSelectStyleGenerator={setSelectStyleGenerator}
        />
      )}
      {addImagesModal && (
        <AddStyleImagesModal
          addImagesModal={addImagesModal}
          setAddImagesModal={setAddImagesModal}
          setSelectStyleGenerator={setSelectStyleGenerator}
          selectStyleGenerator={selectStyleGenerator}
        />
      )}
    </>
  );
};

export default StyleGeneratorNext;
