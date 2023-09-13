import { Modal } from '@components/modal/modal'
import Image from 'next/image'
import React, { useState } from 'react'
import CloseIcon from '../../../../public/assets/xmark (1).png';
import Image1 from '../../../../public/assets/inpaint-Image.png';
import Rest from '../../../../public/assets/rotate-cw.png';
import ImageSquare from '../../../../public/assets/image-square-white.png';
import BrushWhite from '../../../../public/assets/paintbrush-alt-white.png';
import ArrowDown from '../../../../public/assets/chevron-down.png';
import Backward from '../../../../public/assets/flip-backward-white.png';
import Forward from '../../../../public/assets/flip-forward.png';
import RangePicker from '../common/RangePicker';
import Tooltip from '@components/common/tooltip';

interface InpaintingModals {
  CloseInpaintingModal: any;
  SetInpaintingCreated: any;
  EditInpainting: any;
}
const InpaintingModals = ({ CloseInpaintingModal, SetInpaintingCreated, EditInpainting }: InpaintingModals) => {

  const [brushSize, setBrushSize] = useState([20]);
  const [brushSizeToggle, setBrushSizeToggle] = useState(false);

  return (
    <Modal
      open={true}
      modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[760px] py-8'
      closeModal={() => CloseInpaintingModal(false)}
      modalOverlayStyle='!bg-black/80'
    >
      {/* Header */}
      <div className='flex justify-between items-center border-b-white/[0.08] border-white/[0.08] border-b px-6 pb-6'>
        <h5 className='text-lg font-bold'>{EditInpainting ? 'Edit' : ''} Inpainting </h5>
        <button className='w-[24px] h-[24px]' onClick={() => CloseInpaintingModal(false)}>
          <Image src={CloseIcon} className='' />
        </button>
      </div>

      <div className='px-6 pt-6'>
        <div className='relative w-[640px] h-[640px]  m-auto sub-banner '>
          <Image src={Image1} className='w-full h-full object-cover rounded-lg' />
          <div className='absolute top-3 right-3 flex items-center gap-2'>
            <div className='bg-[#000000CC] rounded-[100px] flex items-center justify-center gap-3 p-3 relative'>
              <div className='border-r border-[#FFFFFF3D] pr-3 h-5 cursor-pointer group relative'>
                <Image src={ImageSquare} className='w-full h-full' />
                <div className='absolute -top-12 -left-14 w-max'>
                  <Tooltip Text={'Replace image'} />
                </div>
              </div>
              <div className='flex items-center gap-2 cursor-pointer' onClick={() => setBrushSizeToggle(!brushSizeToggle)}>
                <Image src={BrushWhite} className='w-full h-full' />
                <Image src={ArrowDown} className='w-full h-full' />
              </div>
              {brushSizeToggle &&
                <div className='absolute top-12 right-0 bg-[#121212] px-5 flex justify-center items-center w-[211px] h-[68px] rounded-[14px] '>
                  <RangePicker values={brushSize} setValues={setBrushSize} />
                </div>
              }

            </div>
            <div className='bg-[#000000CC]  rounded-[100px] flex items-center gap-1 p-3 cursor-pointer'>
              <Image src={Rest} className='w-full h-full' />
              <p className='text-[#FFFFFF7A]'>Reset</p>
            </div>
          </div>
          <div className='bg-[#000000CC] rounded-[100px] flex items-center justify-center gap-3 py-3 px-5 absolute bottom-3 left-3'>
            <Image src={Backward} className='w-full h-full object-cover cursor-pointer' />
            <p className='border-r border-[#FFFFFF3D] w-[10px] h-[16px]'></p>
            <Image src={Forward} className='w-full h-full object-cover cursor-pointer' />
          </div>
        </div>
      </div>
      <div className='font-semibold text-white flex justify-end items-center gap-3 mx-6 mt-6'>
        <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => CloseInpaintingModal(false)}>Cancel</button>
        <button className='bg-[#5848BC] rounded-[14px] px-5 py-3' onClick={() => { SetInpaintingCreated(true), CloseInpaintingModal(false) }}>Create</button>
      </div>

    </Modal >
  )
}

export default InpaintingModals