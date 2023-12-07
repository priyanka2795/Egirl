//@ts-nocheck

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import circleInformation from '@/assets/circle-information.webp';
import chevronDown from '@/assets/chevron-down2.webp';
import chevronUp from '@/assets/chevron-up.webp';
import image from '@/assets/image-plus.webp';
import AddImagesModal from './AddImagesModal';
import GoToGeneratorModal from './GoToGeneratorModal';
import downArrow from '@/assets/down-arrow-img.webp';
import CompleteGeneration from './CompleteGeneration';
import AddStyleImagesModal from './addStyleImagesModal';

interface StyleGeneratorProps {
  setStyleGeneratorNext: React.Dispatch<React.SetStateAction<boolean>>;
}

const StyleGenerator = ({ setStyleGeneratorNext }: StyleGeneratorProps) => {
  const options = [
    'Choose category',
    'Character',
    'Clothing',
    'Accessories',
    'Locations',
    'Object'
  ];
  const [styleGenHoverModal, setStyleGenHoverModal] = useState<boolean>(false);
  const [goToModal, setGoToModal] = useState<boolean>(false);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('Choose category');
  const [addImagesModal, setAddImagesModal] = useState<boolean>(false);
  const [completeGeneration, setCompleteGeneration] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropDown(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  console.log(addImagesModal, 'addImagesModal addImagesModal');

  return (
    <>
      <div className='flex flex-col rounded-[14px] bg-[#121212]'>
        <div className='flex flex-col gap-6 p-6'>
          <div className='font-bold text-[22px] leading-8 text-white'>
            Style Generator
          </div>
          <div className='grid grid-cols-2 gap-4' ref={dropdownRef}>
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
                className={`flex cursor-pointer justify-between rounded-[14px] px-4 py-3 ${
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
                    showDropDown || inputText !== 'Choose category'
                      ? 'text-white'
                      : 'text-[#979797]'
                  } font-normal text-[15px] leading-6`}
                >
                  {inputText}
                </div>
                <Image src={showDropDown ? chevronUp : chevronDown} alt={''} />
              </div>
              {showDropDown && (
                <div className='absolute top-[78px] flex w-full flex-col rounded-[14px] bg-[#1A1A1A] px-0 py-1'>
                  {options.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className='font-normal mx-2 my-1 cursor-pointer bg-[#1A1A1A] px-2 py-[6px] text-[14px] leading-[18px] text-white hover:rounded-[8px] hover:bg-white/[0.05]'
                        onClick={() => {
                          setInputText(item), setShowDropDown(false);
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
        </div>
        <div className='flex flex-col items-end justify-center border-t border-white/[0.08] p-6 '>
          <div
            className='font-bold group relative flex cursor-pointer items-center justify-center rounded-[14px] bg-[#5848BC]/[0.32] px-5 py-[13px] text-[16px] leading-[22px] text-white'
            onClick={() => {
              setCompleteGeneration(true);
            }}
          >
            Generate
            <div className='invisible group-hover:visible group-hover:opacity-100'>
              <div className='font-normal absolute -left-[30px] bottom-[62px] flex w-[169px] items-center justify-center rounded-[6px] bg-[#303030] px-3 py-[6px] text-center text-[12px] leading-4 text-white'>
                Add images for style generation
              </div>
              <div className='absolute -top-[25px] right-[20px] h-[24px] w-10'>
                <Image className='w-full h-full' src={downArrow} alt={''} />
              </div>
            </div>
            {completeGeneration && (
              <CompleteGeneration
                completeGeneration={completeGeneration}
                setCompleteGeneration={setCompleteGeneration}
              />
            )}
          </div>
        </div>
      </div>
      {/* {goToModal && (
        <GoToGeneratorModal
          setGoToModal={setGoToModal}
          setAddImagesModal={setAddImagesModal}
        />
      )} */}
      {addImagesModal && (
        <AddStyleImagesModal
        addImagesModal={addImagesModal}
          setAddImagesModal={setAddImagesModal}
          setStyleGeneratorNext={setStyleGeneratorNext}
        />
      )}
      {/* {addImagesModal && (
        <AddImagesModal
        addImagesModal={addImagesModal}
          setAddImagesModal={setAddImagesModal}
          setStyleGeneratorNext={setStyleGeneratorNext}
        />
      )} */}
    </>
  );
};

export default StyleGenerator;
