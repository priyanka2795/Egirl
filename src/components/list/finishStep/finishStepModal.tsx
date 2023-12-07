import React, { useState } from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import xMark from '@/assets/xmark (1).webp';
import CameraIcon from '@/assets/camera.webp';
import ImagePlusIcon from '@/assets/image-plus2.png';
import CoverImage from '@/assets/cover.webp';
import UserImage from '@/assets/style-gen-img6.webp';
import CongratulationsImage from '@/assets/congratulations-Image.png';

interface FinishStepModal{
  FinishStepCongratsModal:()=>void;
}
const FinishStepModal = ({FinishStepCongratsModal}:FinishStepModal) => {
  const [state, setstate] = useState(true);
  return (
    <div className='relative'>

      <Modal
        open={true}
        modalClassName='flex flex-col max-w-xl w-full rounded-2xl h-max  max-w-[656px] '
        closeModal={() => setstate(false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='relative h-[172px] w-full overflow-hidden  rounded-[14px] bg-[#FFFFFF0D] '>
          <Image src={CoverImage} className='w-full h-full' />

          <div className='absolute bottom-0 flex h-[84px] w-full items-center gap-4 bg-[#121212] pb-[16px] pl-[24px] pt-[20px]'>
            <div className='mb-[35px] h-[88px] w-[88px] cursor-pointer overflow-hidden rounded-full border-[3px] border-[#121212] bg-[#272727]'>
              <Image src={UserImage} className='object-cover w-full h-full' />
            </div>
            <div>
              <h2 className='text-lg font-black'>Mika-chan</h2>
              <p className='text-[14px] text-[#979797]'>@mikachan</p>
            </div>
          </div>
        </div>

        <div className='mt-2 rounded-2xl bg-[#1A1A1A] '>
          <div className='p-6'>
            <h2 className='text-[15px] font-black'>
              Congratulations! Your character is ready! 🌟
            </h2>
            <p className='mt-2'>
              Users may now interact with your character. Feel free to explore
              the creator studio and add even more to your character!
            </p>
          </div>
          <div className='border-t border-[#FFFFFF14] px-6 py-5'>
            <button
              className={`flex w-full items-center justify-center rounded-[14px] bg-[#5848BC] px-5
          py-[13px] text-[16px] font-semibold leading-[22px] text-white `}
          onClick={FinishStepCongratsModal}
            >
              Continue
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FinishStepModal;
