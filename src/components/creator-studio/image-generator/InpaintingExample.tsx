import React from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import CloseIcon from '@/assets/xmark (1).webp';
import Brush from '@/assets/paintbrush-alt.webp';
import Image1 from '@/assets/inpaint-Image.webp';
import CheckIcon from '@/assets/check-icon-grey.webp';

interface InpaintingExample {
  CloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const InpaintingExample = ({ CloseModal }: InpaintingExample) => {
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[760px] py-8'
      closeModal={() => CloseModal(false)}
      modalOverlayStyle='!bg-black/80'
    >
      {/* Header */}
      <div className='flex items-center justify-between border-b border-white/[0.08] border-b-white/[0.08] px-6 pb-6'>
        <h5 className='text-lg font-bold'>Inpainting example</h5>
        <button className='h-[24px] w-[24px]' onClick={() => CloseModal(false)}>
          <Image src={CloseIcon} className='' />
        </button>
      </div>

      <div className='px-6 pt-6'>
        <div className='flex items-center gap-3'>
          <div className='overflow-hidden rounded-[14px] bg-[#FFFFFF0D]'>
            <div className='h-[350px] w-[350px]'>
              <Image src={Image1} className='object-cover w-full h-full' />
            </div>
            <div className='flex items-center gap-3 px-5 py-4'>
              <div className='flex h-11 w-11 items-center justify-center rounded-full bg-[#FFFFFF14]'>
                <Image src={Brush} className='w-full h-full' />
              </div>
              <div>
                <h5 className='text-[15px] font-semibold'>Inpaint</h5>
                <p className='text-[#979797]'>Prompt: turn top white</p>
              </div>
            </div>
          </div>

          <div className='overflow-hidden rounded-[14px] bg-[#FFFFFF0D]'>
            <div className='h-[350px] w-[350px]'>
              <Image src={Image1} className='object-cover w-full h-full' />
            </div>
            <div className='flex items-center gap-3 px-5 py-4'>
              <div className='flex h-11 w-11 items-center justify-center rounded-full bg-[#FFFFFF14]'>
                <Image src={CheckIcon} className='w-full h-full' />
              </div>
              <div>
                <h5 className='text-[15px] font-semibold'>Result</h5>
                <p className='text-[#979797]'>New color</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InpaintingExample;
