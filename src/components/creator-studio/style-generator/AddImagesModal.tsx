import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import xMark from '../../../../public/assets/xmark (1).png';
import img1 from '../../../../public/assets/style-gen-img1.png';
import img2 from '../../../../public/assets/style-gen-img2.png';
import img3 from '../../../../public/assets/style-gen-img3.png';
import img4 from '../../../../public/assets/style-gen-img4.png';

interface AddImagesModalProps {
    setAddImagesModal: any;
}

const AddImagesModal = ( {setAddImagesModal} : AddImagesModalProps ) => {
//   const [styleGenHoverModal, setStyleGenHoverModal] = useState(false);
  return (
    <div>
      <Modal
        open={true}
        modalClassName='flex flex-col max-w-xl w-full rounded-2xl h-max bg-[#1A1A1A] max-w-[656px]'
        closeModal={() => setAddImagesModal (false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='flex p-6 justify-between border-b border-white/[0.08]'>
            <div className='flex gap-1'>
                <div className='text-white text-[18px] font-bold leading-6'>Add images </div>
                <div className='text-[#979797] text-[18px] font-bold leading-6'>0/40</div>
            </div>
            <Image className='object-contain' onClick={() => setAddImagesModal (false)} src={xMark} alt={''} />
        </div>

        <div className='p-6 flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <div className='text-white text-[15px] font-semibold leading-5'>Albums</div>
            <div className='overflow-hidden flex gap-2 rounded-[12px]'>
              <div className='w-1/2 relative'>
                <Image src={img1} alt={''} />
                <div className='absolute bottom-5 right-0 w-full px-4 flex justify-between'>
                  <div className='text-white text-[15px] font-semibold leading-5'>Fantasy world & nature</div>
                  <div className='text-white text-[15px] font-semibold leading-5'>124</div>
                </div>
              </div>
              <div className='w-1/2 relative'>
                <Image src={img2} alt={''} />
                <div className='absolute bottom-5 right-0 w-full px-4 flex justify-between'>
                  <div className='text-white text-[15px] font-semibold leading-5'>Face, body and hair</div>
                  <div className='text-white text-[15px] font-semibold leading-5'>32</div>
                </div>
              </div>
            </div>
            <div className='px-4 py-[10px] flex justify-center items-center rounded-[12px] bg-white/[0.08] text-white text-[14px] font-bold leading-5'>Show all albums</div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='text-white text-[15px] font-semibold leading-5'>All photos</div>
            <div className='flex gap-2'>
              <div className=''>
                <Image src={img3} alt={''} />
              </div>
              <div className=''>
                <Image src={img4} alt={''} />
              </div>
            </div>
          </div>
        </div>
        <div className='flex p-6 gap-3'>
          <button className='w-1/2 px-5 py-[13px] justify-center items-center rounded-[14px] border border-white/[0.32] text-white text-[16px] font-bold leading-[22px]' onClick={() => setAddImagesModal (false)}>Cancel</button>
          <button className='w-1/2 px-5 py-[13px] justify-center items-center rounded-[14px] border border-transparent bg-[#5848BC] text-white text-[16px] font-bold leading-[22px]' onClick={() => setAddImagesModal (false)}>Save</button>
        </div>
      </Modal>
    </div>
  );
};

export default AddImagesModal;
