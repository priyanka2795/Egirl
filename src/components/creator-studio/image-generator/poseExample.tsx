import React from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import CloseIcon from '@/assets/xmark (1).webp';
import Brush from '@/assets/paintbrush-alt.webp';
import Image1 from '@/assets/inpaint-Image.png';
import PoseImg from '@/assets/poseimg.webp';

interface PoseExample {
  PoseExampleClose: React.Dispatch<React.SetStateAction<boolean>>;
}
const PoseExample = ({ PoseExampleClose }: PoseExample) => {
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[516px] py-8'
      closeModal={() => PoseExampleClose(false)}
      modalOverlayStyle='!bg-black/80'
    >
      {/* Header */}
      <div className='flex items-center justify-between border-b border-white/[0.08] border-b-white/[0.08] px-6 pb-6'>
        <h5 className='text-lg font-bold'>Pose example</h5>
        <button
          className='h-[24px] w-[24px]'
          onClick={() => PoseExampleClose(false)}
        >
          <Image src={CloseIcon} className='' />
        </button>
      </div>

      <div className='px-6 pt-6'>
        <div className='overflow-hidden rounded-[14px] bg-[#FFFFFF0D]'>
          <div className=''>
            <Image src={PoseImg} className='object-cover w-full h-full' />
          </div>
          <div className='px-5 py-4'>
            <h5 className='text-[15px] font-semibold'>Pose mode</h5>
            <p className='text-[13px] text-[#979797] '>
              Pose mode helps you put your Egirl in the pose of your choosing.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PoseExample;
