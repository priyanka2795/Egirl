import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import modalImg from '../../../../public/assets/style-modal-img.png';
import pen from '../../../../public/assets/pen.png';
import heart from '../../../../public/assets/heart-alt.png';
import circleInformation from '../../../../public/assets/circle-information8.png';
import arrowDown from '../../../../public/assets/chevron-down2.png';
import shop from '../../../../public/assets/shop.png';
import StyleGeneratorNext from './StyleGeneratorNext';
import PostStyleModal from '../view-Styles/PostStyleModal';

interface ViewStyleModalProps {
    setViewStyleModal?: any;
    setStyleGenNext?: any;
    setNotificationModal?:any;
    image: any;
    postStyleModal: any;
    setPostStyleModal: any;
}

const list = [
    {
        type: 'Model Type',
        style: 'General'
    },
    {
        type: 'Style',
        style: 'Anime'
    },
    {
        type: 'Category',
        style: 'Realistic Animation'
    },
    {
        type: 'Pricing',
        style: 'Buy once, use forever'
    },
];

const ViewStyleModal = ( {setViewStyleModal, setStyleGenNext, setNotificationModal, image, postStyleModal, setPostStyleModal} : ViewStyleModalProps ) => {
  
  return (
    <>
    <div>
      <Modal
        open={true}
        modalClassName='flex overflow-hidden w-full rounded-[20px] bg-[#1A1A1A] max-w-[1376px]'
        closeModal={() => setViewStyleModal (false)}
        modalOverlayStyle='!bg-black/80'
      >
       <Image className='object-contain' src={image} alt={''} />
       <div className='flex flex-col w-[448px]'>
        <div className='flex flex-col gap-4 px-6 pt-6 pb-5'>
            <div className='flex flex-col gap-[2px]'>
                <div className='text-white text-[22px] font-bold leading-8'>Any Lee</div>
                <div className='text-[#979797] text-[18px] font-normal leading-6'>Not posted</div>
            </div>
            <div className='flex gap-3'>
                <button className='w-full flex gap-2 justify-center items-center px-5 py-[13px] rounded-[14px] bg-white/[0.08]' onClick={() => {setStyleGenNext(true), setViewStyleModal (false), setNotificationModal(false)}}>
                    <Image src={pen} alt={''} />
                    <div className='text-white text-[16px] font-bold leading-[22px]'>Edit Style</div>
                </button>
                <button className='w-max p-[14px] rounded-[14px] bg-white/[0.08] justify-center items-center'>
                    <Image className='object-contain' src={heart} alt={''} />
                </button>
            </div>
        </div>
        <div className='flex flex-col justify-between h-full px-6 pb-6'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-[14px]'>
                <div className='text-white text-[15px] font-semibold leading-5'>Model Details</div>
                {list.map((item,index) => {
                return(
                    <div key={index} className='flex gap-5'>
                        <div className='flex gap-1 w-[25%]'>
                            <div className='text-[#979797] text-[14px] font-normal leading-[18px]'>{item.type}</div>
                            <Image className='object-contain' src={circleInformation} alt={''} />
                        </div>
                        <div className='text-white text-[14px] font-normal leading-[18px]'>{item.style}</div>
                    </div>
                );
            })}
                </div>
                <div className='px-4 py-[14px] flex justify-between rounded-[12px] bg-white/[0.05]'>
                    <div className='text-white text-[15px] font-semibold leading-5'>Generation data</div>
                    <Image src={arrowDown} alt={''} />
                </div>
            </div>
            <div className='cursor-pointer px-5 py-[13px] justify-center items-center rounded-[14px] bg-[#5848BC] flex gap-2' onClick={() => {setPostStyleModal(true)}}>
                <Image className='object-contain' src={shop} alt={''} />
                <div className='text-white text-[16px] font-bold leading-[22px]'>Post Style</div>
            </div>
        </div>
       </div>
      </Modal>
    </div>
    {
        postStyleModal && <PostStyleModal setPostStyleModal={setPostStyleModal} />
    }
    </>
  );
};

export default ViewStyleModal;
