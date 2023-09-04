import Image from 'next/image';
import React, { useState } from 'react';
import circleInformation from '../../../../public/assets/circle-information.png'
import image from '../../../../public/assets/image-plus.png'
import StyleGenHoverModal from './StyleGenHoverModal';
import AddImagesModal from './AddImagesModal';
import GoToGeneratorModal from './GoToGeneratorModal';

const options = [

];
const StyleGenerator = () => {
  const options = ['Choose category', 'Character', 'Clothing', 'Accessories', 'Locations', 'Object'];
  const [styleGenHoverModal, setStyleGenHoverModal] = useState(false);
  const [goToModal, setGoToModal] = useState(false);
  
  return (
    <>
    <div className='flex flex-col rounded-[14px] bg-white/[0.05]'>
    <div className='p-6'>
      <h3 className='text-bold mb-[6] text-[22px]'>Style Generator</h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className='flex flex-col'>
          <h6 className='text-[13px] text-[#979797]'>Name</h6>
          <input
            type='text'
            name='name'
            placeholder='Enter Name'
            className='rounded-[14px] focus:ring-0 px-4 py-3 border-none bg-white/[0.08] placeholder:text-[#979797] text-[#979797]'
          />
        </div>

        <div className='flex flex-col'>
          <h6 className='text-[13px] text-[#979797]'>Category</h6>
          <select id='category' name='category' className='rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] font-normal leading-6 text-[#979797] focus:ring-0'>
                  <option value='Female'>Choose category</option>
                  <option value='Male'>Character</option>
                  <option value='Other'>Clothing</option>
                  <option value='Other'>Accessories</option>
                  <option value='Other'>Locations</option>
                  <option value='Other'>Object</option>
          </select>
         
        </div>
      </div>

      <div className='flex flex-col gap-2 mb-6'>
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

    <div className='p-6 flex flex-col p-6 justify-center items-end border-t border-white/[0.08] '>
      {styleGenHoverModal && <StyleGenHoverModal />}
      <button className='flex px-5 py-[13px] justify-center items-center bg-[#5848BC]/[0.32] rounded-[14px] text-white text-[16px] font-bold leading-[22px]' onClick={() => {setStyleGenHoverModal(!styleGenHoverModal)}}>Generate</button>
    </div>
    </div>
    {
      goToModal && <GoToGeneratorModal setGoToModal={setGoToModal} />
    }
    </>
  );
};

export default StyleGenerator;
