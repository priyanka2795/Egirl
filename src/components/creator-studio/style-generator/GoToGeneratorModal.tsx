import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import xMark from '../../../../public/assets/xmark (1).png';
import image from '../../../../public/assets/image-plus.png';

interface GoToGeneratorModalProp {
    setGoToModal: any;
}

const GoToGeneratorModal = ( {setGoToModal} : GoToGeneratorModalProp ) => {
//   const [styleGenHoverModal, setStyleGenHoverModal] = useState(false);
  return (
    <div>
      <Modal
        open={true}
        modalClassName='flex flex-col max-w-xl w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[656px]'
        closeModal={() => setGoToModal (false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='flex justify-between p-6 border-b border-white/[0.08]'>
            <div className='flex gap-1'>
                <div className='text-white text-[18px] font-bold leading-6'>Add images </div>
                <div className='text-[#979797] text-[18px] font-bold leading-6'>0/40</div>
            </div>
            <Image onClick={() => {setGoToModal(false)}} src={xMark} alt={''} />
        </div>
        <div className='h-[372px] flex flex-col gap-5 justify-center items-center'>
            <div className='flex flex-col items-center justify-center gap-3'>
                <div className='w-max py-5 px-[24px] rounded-[100px] bg-white/[0.05]'>
                    <Image className='!mt-[3px]' src={image} alt={''} />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='text-center text-[15px] font-normal leading-5'>You don’t have any images</div>
                    <div className='text-center text-[13px] font-normal leading-[18px]'>Click on the button to generate images for model generation.</div>
                </div>
            </div>
            <button className='px-4 py-[10px] justify-center items-center rounded-[12px] bg-white/[0.08] text-white text-[14px] font-bold leading-5'>Go to Image Generator</button>
        </div>
      </Modal>
    </div>
  );
};

export default GoToGeneratorModal;
