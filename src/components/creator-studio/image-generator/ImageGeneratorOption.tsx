import React, { useState } from 'react';
import ShuffleSvg from '../../../../public/assets/svgImages/shuffle.svg';
import PlusIconSvg from '../../../../public/assets/svgImages/plus-icon.svg';
import Toggle from '@components/common/Toggler';
import AddTagModal from './AddTagModal';
import { Modal } from '@components/modal/modal';
import ImageGallery from './ImageGallery';
import CloseIcon from '../../../../public/assets/svgImages/close-icon.svg';
import Question from '../../../../public/assets/circle-question.png';
import ImageSquare from '../../../../public/assets/image-square.png';

import AddStyleModal from './AddStyleModal';
import Tooltip from '@components/common/tooltip';
import Image from 'next/image';


const ImageGeneratorOption = () => {
  const [prompt, setPrompt] = useState(false);
  const [tagState, setTagState] = useState(false);

  const [openGenre, setOpenGenre] = React.useState(false);
  const handleOpenGenre = () => setOpenGenre(true);
  const handleCloseGenre = () => setOpenGenre(false);

  const [openStyle, setOpenStyle] = React.useState(false);


  return (
    <>
      <div className='border-b border-white/[0.08] p-4'>
        <div className='flex justify-between gap-4 pb-7'>
          <div className='flex gap-4'>
            <div
              onClick={handleOpenGenre}
              className='flex h-max w-[300px] items-center justify-start gap-2.5 rounded-[14px] bg-white bg-opacity-5 px-4 py-[13px]'
            >
              <div className='text-[15px] font-normal leading-normal text-neutral-400'>
                Genre
              </div>
            </div>

            <div
              onClick={() => setOpenStyle(true)}
              className='flex h-max w-[142px] cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white bg-opacity-10 px-5 py-3 text-base font-bold text-white'>
              Add style <PlusIconSvg />
            </div>

            <div
              className='flex h-max w-[130px] cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white bg-opacity-10 px-5 py-3 text-base font-bold text-white'
              onClick={() => setTagState(!tagState)}
            >
              Add tag <PlusIconSvg />
            </div>
          </div>

          <div className='flex w-12 cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white bg-opacity-10 py-3 relative group'>
            <ShuffleSvg />
            <div className='absolute -top-12 w-max -left-16'>
              <Tooltip Text={'Add a random prompt'} />
            </div>
          </div>
        </div>

        <textarea
          className='mb-6 h-[124px] w-full resize-none rounded-[14px] border-none bg-[#000000]/[0.48]'
          id=''
          name='w3review'
          placeholder='Type a prompt ...'
        ></textarea>
        {prompt &&
          <div className='flex flex-col gap-[6px] mb-6'>
            <label className='text-[#979797]' htmlFor="negative">Negative prompt</label>
            <input type="text" id='negative' placeholder='Type a negative prompt...' className='bg-[#FFFFFF0D] rounded-[14px] h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC] text-white placeholder:text-[#979797]' name='negative' />
          </div>
        }
        <Toggle
          handleToggleState={() => setPrompt(!prompt)}
          toggleState={prompt}
          toggleText={`Negative Prompt`}
          infoIcon={'hidden'}
          toggleClasses={'bg-[#383838]'}
          subHeading={true}
        />
        <div className='py-6'>
          <div className='flex gap-1 items-center pb-3'>
            <p className='text-[15px] font-bold'>Inpainting</p>
            <Image src={Question} className='w-full h-full' />
          </div>
          <div className='flex justify-center items-center bg-[#1A1A1A] rounded-[14px] p-6'>
            <div className='flex flex-col items-center gap-3'>
              <div className='w-[56px] h-[56px] bg-[#FFFFFF0D] flex items-center justify-center rounded-full'>
                <div className='w-6 h-6 '><Image src={ImageSquare} className='w-full h-full object-cover' />                  </div>
              </div>
              <p className='text-[#979797] text-[13px]'>Choose an image you want to inpaint on</p>
              <button className='bg-[#FFFFFF14] rounded-xl px-4 py-[10px] font-bold'>Select image</button>
            </div>
          </div>
        </div>
      </div>

      <div className='p-4'>
        <div className='ml-auto w-max rounded-[14px] bg-[#5848BC] px-5 py-[13px] text-base font-bold'>
          Generate
        </div>
      </div>

      {tagState && <AddTagModal closeDeleteModal={setTagState} />}
      <Modal
        open={openGenre}
        closeModal={handleCloseGenre}
        modalOverlayStyle='!bg-black/80 '
        modalClassName={`bg-[#121212] flex  flex-col flex-start relative rounded-[20px]`}
      >
        <div className='flex flex-col items-start rounded-[20px] bg-[#121212] '>
          <div className='flex items-start gap-2.5 self-stretch border-b-white/[0.08] px-8 border-white/[0.08] border-b pb-6 pt-8'>
            <div className='flex w-full text-lg font-bold leading-6 decoration-white'>
              Genre
            </div>
            <div onClick={handleCloseGenre}>
              <CloseIcon />
            </div>
          </div>

          <ImageGallery />
          <div className='flex flex-row self-stretch gap-3 px-8 pt-4 pb-8'>
            <button
              onClick={handleCloseGenre}
              className='flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] font-bold'
            >
              Cancel
            </button>
            <button
              onClick={handleCloseGenre}
              className='flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-[#5848BC] bg-[#5848BC] px-5 py-[13px] font-bold'
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
      {openStyle && <AddStyleModal SetOpenStyle={setOpenStyle} />}

    </>
  );
};

export default ImageGeneratorOption;
