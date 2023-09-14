import Image from 'next/image';
import React, { useState } from 'react';
import circleInformation from '../../../../public/assets/circle-information.png';
import chevronDown from '../../../../public/assets/chevron-down2.png';
import chevronUp from '../../../../public/assets/chevron-up.png';
import image from '../../../../public/assets/image-plus.png';
import AddImagesModal from './AddImagesModal';
import GoToGeneratorModal from './GoToGeneratorModal';
import downArrow from '../../../../public/assets/down-arrow-img.png';
import CompleteGeneration from './CompleteGeneration';

interface StyleGeneratorProps {
  setStyleGeneratorNext: any;
}

const StyleGenerator = ({setStyleGeneratorNext}:StyleGeneratorProps) => {
  const options = ['Choose category', 'Character', 'Clothing', 'Accessories', 'Locations', 'Object'];
  const [styleGenHoverModal, setStyleGenHoverModal] = useState(false);
  const [goToModal, setGoToModal] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [inputText, setInputText] = useState('Choose category');
  const [addImagesModal, setAddImagesModal] = useState(false);
  const [completeGeneration, setCompleteGeneration] = useState(false);
  
  return (
    <>
    <div className='flex flex-col rounded-[14px] bg-[#121212]'>
      <div className='flex flex-col gap-6 p-6'>
        <div className='text-white text-[22px] font-bold leading-8'>Style Generator</div>
        <div className="grid grid-cols-2 gap-4">
          <div className='flex flex-col gap-[6px]'>
            <h6 className='text-[13px] text-[#979797]'>Name</h6>
            <input
              type='text'
              name='name'
              placeholder='Ex. Bunny girl'
              className='border border-transparent rounded-[14px] focus:ring-0 px-4 py-3 border-none bg-white/[0.05] placeholder:text-[#979797] text-white'
            />
          </div>
          <div className='relative flex flex-col gap-[6px]'>
          <h6 className='text-[13px] text-[#979797]'>Category</h6>
          <div className={`cursor-pointer px-4 py-3 rounded-[14px] flex justify-between ${showDropDown ? 'border border-[#515151]' : 'border border-transparent bg-white/[0.05]'}`} onClick={() => {setShowDropDown(!showDropDown)}}>
            <div className={`${showDropDown || inputText !== 'Choose category' ? 'text-white' : 'text-[#979797]'} text-[15px] font-normal leading-6`}>{inputText}</div>
            <Image src={showDropDown ? chevronUp : chevronDown} alt={''} />
          </div>
          {showDropDown && 
          <div className='top-[78px] absolute w-full px-0 py-1 flex flex-col rounded-[14px] bg-[#1A1A1A]'>
            {options.map((item,index) => {
              return (
              <div key={index} className='cursor-pointer mx-2 my-1 px-2 py-[6px] bg-[#1A1A1A] text-white text-[14px] font-normal leading-[18px] hover:bg-white/[0.05] hover:rounded-[8px]' onClick={() => {setInputText(item), setShowDropDown(false)}}>{item}</div>);
            })}
          </div>
          }
          </div>
        </div>
        <div className='flex flex-col gap-2'>
        <div className='flex gap-1'>
          <div className='text-white text-[18px] font-bold leading-6'>Images </div>
          <div className='text-[#979797] text-[18px] font-bold leading-6'>0/40</div>
        </div>
        <div className='flex gap-2'>
          <Image src={circleInformation} alt={''} />
          <div className='text-[#979797] text-[12px] font-normal leading-4'>You need to select a minimum of 4 images to generate the style</div>
        </div>
        </div>
        <div className='flex flex-col h-[320px] gap-5 justify-center items-center'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <div className='flex p-4 rounded-[100px] bg-white/[0.05]'>
            <Image src={image} alt={''} />
          </div>
          <div className='text-center text-[#979797] text-[13px] font-normal leading-[18px]'>Add images for style generation</div>
        </div>
        <button className='px-4 py-[10px] rounded-[12px] bg-white/[0.08] justify-center items-center text-white text-[14px] font-bold leading-5' onClick={() => {setGoToModal(true)}}>Add images</button>
      </div>
      </div>
      <div className='flex flex-col p-6 justify-center items-end border-t border-white/[0.08] '>
      <div className='cursor-pointer relative flex group px-5 py-[13px] justify-center items-center bg-[#5848BC]/[0.32] rounded-[14px] text-white text-[16px] font-bold leading-[22px]' onClick={() => {setCompleteGeneration(true)}}>Generate
        <div className='invisible group-hover:visible group-hover:opacity-100'>
          <div className='absolute bottom-[62px] -left-[30px] w-[169px] flex justify-center items-center px-3 py-[6px] rounded-[6px] bg-[#303030] text-white text-center text-[12px] font-normal leading-4'>
            Add images for style generation
          </div>
          <div className='absolute -top-[25px] right-[20px] w-10 h-[24px]'>
            <Image className='w-full h-full' src={downArrow} alt={''} />
          </div>
        </div>
        {completeGeneration && <CompleteGeneration completeGeneration={completeGeneration} setCompleteGeneration={setCompleteGeneration} />}
      </div>
      </div>
    </div>
    {
      goToModal && <GoToGeneratorModal setGoToModal={setGoToModal} setAddImagesModal={setAddImagesModal} />  
    }
    {
      addImagesModal && <AddImagesModal setAddImagesModal={setAddImagesModal} setStyleGeneratorNext={setStyleGeneratorNext} />
    }
    </>
  );
};

export default StyleGenerator;
