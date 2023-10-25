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
  setNotificationModal?: any;
  image?: any;
  postStyleModal?: any;
  setPostStyleModal?: any;
  component?: string;
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
  }
];

const ViewStyleModal = ({
  setViewStyleModal,
  setStyleGenNext,
  setNotificationModal,
  image,
  postStyleModal,
  setPostStyleModal,
  component
}: ViewStyleModalProps) => {
  const handlePostStyleButton = () => {
    if (component === 'GeneratedStyle') {
      setPostStyleModal(true);
      setViewStyleModal(false);
    } else {
      setViewStyleModal(false);
      setNotificationModal(false)
    }
  };
  const handleEditStyle =()=>{
      // setStyleGenNext(true),
        // setViewStyleModal(false),
        // setNotificationModal(false);
  }

  return (
    <>
      <div>
        <Modal
          open={true}
          modalClassName='flex overflow-hidden w-full rounded-[20px] bg-[#1A1A1A] max-w-[1376px]'
          closeModal={() => setViewStyleModal(false)}
          modalOverlayStyle='!bg-black/80'
        >
          <div className='w-[67%]'>
            <Image className='object-contain' src={image} alt={''} />
          </div>
          <div className='flex h-[inherit] w-[33%] flex-col justify-between px-6 pb-[13px]'>
            <div>
              <div className='flex flex-col gap-4 pt-6 pb-5'>
                <div className='flex flex-col gap-[2px]'>
                  <div className='text-[22px] font-bold leading-8 text-white'>
                    Any Lee
                  </div>
                  <div className='text-[18px] font-normal leading-6 text-[#979797]'>
                    Not posted
                  </div>
                </div>
                <div className='flex gap-3'>
                  <button
                    className='flex w-full items-center justify-center gap-2 rounded-[14px] bg-white/[0.08] px-5 py-[13px]'
                    onClick={() =>  handleEditStyle ()}
                  >
                    <Image src={pen} alt={''} />
                    <div className='text-[16px] font-normal leading-[22px] text-white'>
                      Edit Style
                    </div>
                  </button>
                  <button className='flex w-max items-center justify-center rounded-[14px] bg-white/[0.08] p-[14px]'>
                    <Image className='object-contain' src={heart} alt={''} />
                  </button>
                </div>
              </div>
              <div className='flex flex-col gap-5 pb-6'>
                <div className='flex flex-col gap-[14px]'>
                  <div className='text-[15px] font-normal leading-5 text-white'>
                    Model Details
                  </div>
                  {list.map((item, index) => {
                    return (
                      <div key={index} className='flex gap-5'>
                        <div className='flex w-[25%] gap-1'>
                          <div className='text-[14px] font-normal leading-[18px] text-[#979797]'>
                            {item.type}
                          </div>
                          <Image
                            className='object-contain'
                            src={circleInformation}
                            alt={''}
                          />
                        </div>
                        <div className='text-[14px] font-normal leading-[18px] text-white'>
                          {item.style}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className='flex justify-between rounded-[12px] bg-white/[0.05] px-4 py-[14px]'>
                  <div className='text-[15px] font-normal leading-5 text-white'>
                    Generation data
                  </div>
                  <Image src={arrowDown} alt={''} />
                </div>
              </div>
            </div>
            <div
              className='flex h-max cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-[#5848BC] px-6 py-[13px]'
              onClick={() => {
                handlePostStyleButton()
              }}
            >
              <Image className='object-contain' src={shop} alt={''} />
              <div className='text-[16px] font-bold leading-[22px] text-white'>
                Post Style
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ViewStyleModal;
