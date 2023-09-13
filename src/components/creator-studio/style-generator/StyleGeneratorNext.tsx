import Image from 'next/image';
import React, { useState } from 'react';
import circleInformation from '../../../../public/assets/circle-information.png'
import deleteIcon from '../../../../public/assets/trash-blank2.png'
import plus from '../../../../public/assets/plus-large4.png'
import img1 from '../../../../public/assets/style-gen-img5.png'
import img2 from '../../../../public/assets/style-gen-img6.png'
import img3 from '../../../../public/assets/style-gen-img7.png'
import img4 from '../../../../public/assets/style-gen-img8.png'
import img5 from '../../../../public/assets/style-gen-img9.png'
import crossIcon from '../../../../public/assets/xmark-style.png'
import StyleGenHoverModal from './StyleGenHoverModal';
import AddImagesModal from './AddImagesModal';
import StyleGenDeleteModal from './StyleGenDeleteModal';
import image from '../../../../public/assets/image-plus.png';
import downArrow from '../../../../public/assets/down-arrow-img.png';

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
  },
];

const StyleGeneratorNext = () => {
  const [styleGenHoverModal, setStyleGenHoverModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [showCards, setShowCards] = useState(true);
  

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
            className='rounded-[14px] focus:ring-0 px-4 py-3 border-none bg-white/[0.08] placeholder:text-[#979797] text-white'
          />
        </div>

        <div className='flex flex-col'>
          <h6 className='text-[13px] text-[#979797]'>Category</h6>
          <div className='px-4 py-3 text-[15px] bg-white/[0.08] rounded-[14px] text-[#979797]'>Choose category</div>
          
        </div>
      </div>

      <div className='flex justify-between mb-6'>
        <div className='flex flex-col gap-2'> 
        <div className='flex gap-1'>
          <div className='text-white text-[18px] font-bold leading-6'>Images </div>
          <div className='text-[#979797] text-[18px] font-bold leading-6'>{showCards ? '5/40' : '0/40'  }</div>
        </div>
        <div className='flex gap-2'>
          <Image src={circleInformation} alt={''} />
          <div className='text-[#979797] text-[12px] font-normal leading-4'>You need to select a minimum of 4 images to generate the style</div>
        </div>
        </div>
        <div className='flex gap-[10px]'>
          <div className='relative group flex p-[10px] h-max justify-center items-center rounded-[12px] border border-white/[0.32]' onClick={() => setDeleteModal(true)}>
            <Image className='' src={deleteIcon} alt={''} />
            <div className='invisible group-hover:visible group-hover:opacity-100'>
              <div className='absolute flex items-center justify-center w-[119px] h-[34px] -top-[48px] -right-[39px] px-3 py-[6px] rounded-[6px] bg-[#303030] text-white text-center text-[12px] font-normal leading-4'>
              Delete all images
              </div>
              <div className='absolute -top-[25px] -right-[15px] w-10 h-[24px]'>
                <Image className='w-full h-full' src={downArrow} alt={''} />
              </div>
          </div>
          </div>
          <button className='h-max flex justify-center border border-transparent items-center px-4 py-[9px] gap-[6px] rounded-[12px] bg-white/[0.08]'>
            <Image src={plus} alt={''} />
            <div className='text-white text-[14px] font-bold leading-5'>Add images</div>
          </button>
        </div>
      </div>

      {showCards ? 
       <div className='grid grid-cols-3 gap-5'>
       {images.map((item,index) => {
         return(
           <div key={index} className='relative flex flex-col rounded-[14px]'>
             <Image src={item.image} alt={''} />
             <div className='h-[128px] p-4 flex flex-col gap-2 bg-[#1A1A1A]'>
               <div className='pl-4 h-full pr-3 py-3 rounded-[14px] bg-white/[0.03]'>
                 <div className='flex items-center justify-between'>
                   <div className='text-[#979797] text-[15px] font-normal leading-6'>Add label</div>
                   <div className='text-[#515151] text-[13px] font-normal leading-[18px]'>100</div>
                 </div>
               </div>
             </div>
           </div>
         );
       })}
       </div> :
       <div className='flex flex-col h-[320px] gap-5 justify-center items-center'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <div className='flex p-4 rounded-[100px] bg-white/[0.05]'>
           <Image src={image} alt={''} />
          </div>
          <div className='text-center text-[#979797] text-[13px] font-normal leading-[18px]'>Add images for style generation</div>
        </div>
        <button className='px-4 py-[10px] rounded-[12px] bg-white/[0.08] justify-center items-center text-white text-[14px] font-bold leading-5'>Add images</button>
       </div>
  }
  </div>

    <div className='p-6 flex flex-col p-6 justify-center items-end border-t border-white/[0.08] '>
      <div className='cursor-pointer relative flex group px-5 py-[13px] justify-center items-center bg-[#5848BC]/[0.32] rounded-[14px] text-white text-[16px] font-bold leading-[22px]'>Generate
        <div className='invisible group-hover:visible group-hover:opacity-100'>
          <div className='absolute bottom-[62px] -left-[30px] w-[169px] h-[34px] flex justify-center items-center px-3 py-[6px] rounded-[6px] bg-[#303030] text-white text-center text-[12px] font-normal leading-4'>
          Please fill in labels
          </div>
          <div className='absolute -top-[25px] right-[20px] w-10 h-[24px]'>
            <Image className='w-full h-full' src={downArrow} alt={''} />
          </div>
        </div>
      </div>
    </div>
    </div>
    {
      deleteModal && <StyleGenDeleteModal setDeleteModal={setDeleteModal} setShowCards={setShowCards} />
    }
    </>
  );
};

export default StyleGeneratorNext;
