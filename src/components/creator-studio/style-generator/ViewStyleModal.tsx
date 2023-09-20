import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React from 'react';
import pen from '../../../../public/assets/pen.png';
import heart from '../../../../public/assets/heart-alt.png';
import circleInformation from '../../../../public/assets/circle-information8.png';
import arrowDown from '../../../../public/assets/chevron-down2.png';
import shop from '../../../../public/assets/shop.png';

interface ViewStyleModalProps {
    setViewStyleModal?: any;
    setStyleGenNext?: any;
    setNotificationModal?:any;
    image?: any;
    postStyleModal?: any;
    setPostStyleModal?: any;
    component?: any;
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

const ViewStyleModal = ( {setViewStyleModal, setStyleGenNext, setNotificationModal, image, postStyleModal, setPostStyleModal, component} : ViewStyleModalProps ) => {

    const handlePostStyleButton = () => {
        if(component === 'GeneratedStyle') {
            setPostStyleModal(true);
            setViewStyleModal(false);
        } else {
            setViewStyleModal(false);
        }
    }
  
  return (
    <>
    <div>
      <Modal
        open={true}
        modalClassName='flex overflow-hidden w-full rounded-[20px] bg-[#1A1A1A] max-w-[1376px]'
        closeModal={() => setViewStyleModal (false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='w-[67%]'>
            <Image className='object-contain' src={image} alt={''} />
        </div>
        <div className='h-[inherit] flex flex-col w-[33%] justify-between px-6 pb-[13px]'>
            <div>
                <div className='flex flex-col gap-4 pt-6 pb-5'>
                <div className='flex flex-col gap-[2px]'>
                    <div className='text-white text-[22px] font-bold leading-8'>Any Lee</div>
                    <div className='text-[#979797] text-[18px] font-normal leading-6'>Not posted</div>
                </div>
                <div className='flex gap-3'>
                    <button className='w-full flex gap-2 justify-center items-center px-5 py-[13px] rounded-[14px] bg-white/[0.08]' onClick={() => {setStyleGenNext(true), setViewStyleModal (false) , setNotificationModal(false)}}>
                        <Image src={pen} alt={''} />
                        <div className='text-white text-[16px] font-normal leading-[22px]'>Edit Style</div>
                    </button>
                    <button className='flex w-max p-[14px] rounded-[14px] bg-white/[0.08] justify-center items-center'>
                        <Image className='object-contain' src={heart} alt={''} />
                    </button>
                </div>
                </div>
                <div className='flex flex-col gap-5 pb-6'>
                <div className='flex flex-col gap-[14px]'>
                <div className='text-white text-[15px] font-normal leading-5'>Model Details</div>
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
                    <div className='text-white text-[15px] font-normal leading-5'>Generation data</div>
                    <Image src={arrowDown} alt={''} />
                </div>
                </div>
            </div>
            <div className='h-max flex cursor-pointer px-6 py-[13px] justify-center items-center rounded-[14px] bg-[#5848BC] gap-2' onClick={() => {handlePostStyleButton(), setNotificationModal(false)}}>
                <Image className='object-contain' src={shop} alt={''} />
                <div className='text-white text-[16px] font-bold leading-[22px]'>Post Style</div>
            </div>
        </div>
      </Modal>
    </div>
    </>
  );
};

export default ViewStyleModal;
