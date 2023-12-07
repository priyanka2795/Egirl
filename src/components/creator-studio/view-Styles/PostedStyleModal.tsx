import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React from 'react';
import pen from '@/assets/pen.webp';
import heart from '@/assets/heart-alt.webp';
import circleInformation from '@/assets/circle-information.webp';
import arrowDown from '@/assets/chevron-down2.webp';
import shop from '@/assets/shop.webp';
import Delete from '@/assets/delete-icon.webp';
import modalImg from '@/assets/view-style-modal-img.webp';
import star from '@/assets/star.webp';
import avatar2 from '@/assets/viewStyle-modal-2.webp';
import rightArrow from '@/assets/chevron-right.webp';

interface PostedStyleModalprops {
  setPostedStyleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const list = [
  {
    type: 'Model Type',
    style: 'General',
    image: circleInformation
  },
  {
    type: 'Style',
    style: 'Anime',
    image: circleInformation
  },
  {
    type: 'Category',
    style: 'Realistic Animation',
    image: ''
  },
  {
    type: 'Pricing',
    style: 'Buy once, use forever',
    image: circleInformation
  }
];

const stars = [
  {
    image: star
  },
  {
    image: star
  },
  {
    image: star
  },
  {
    image: star
  },
  {
    image: star
  }
];

const ratings = [
  {
    image: avatar2,
    name: 'Alina Anila',
    text: 'beautiful model, thanks',
    time: '3 day ago',
    ratings: '5'
  },
  {
    image: avatar2,
    name: 'Alina Anila',
    text: 'beautiful model, thanks',
    time: '3 day ago',
    ratings: '5'
  }
];
const PostedStyleModal = ({ setPostedStyleModal }: PostedStyleModalprops) => {
  return (
    <>
      <div>
        <Modal
          open={true}
          modalClassName='flex overflow-hidden w-full rounded-[20px] bg-[#1A1A1A] max-w-[1376px]'
          closeModal={() => setPostedStyleModal(false)}
          modalOverlayStyle='!bg-black/80'
        >
          <div className='w-[67%]'>
            <Image className='object-contain' src={modalImg} alt={''} />
          </div>
          <div className='flex h-ful w-[33%] flex-col justify-between px-6 pb-[13px] gap-8 content-between'>
            <div>
              <div className='flex flex-col gap-4 pt-6 pb-5'>
                <div className='flex flex-col gap-[2px]'>
                  <div className='text-[22px] font-bold leading-8 text-white'>
                    A-Zovya Photoreal
                  </div>
                  <div className='text-[18px] font-normal leading-6 text-[#979797]'>
                    Not posted
                  </div>
                </div>
                <div className='flex gap-3'>
                  <button className='flex w-full items-center justify-center gap-2 rounded-[14px] bg-white/[0.08] px-5 py-[13px]'>
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
                            src={item.image}
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
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                  <div className='flex flex-col gap-1'>
                    <div className='text-[15px] font-semibold leading-5 text-white'>
                      Reviews
                    </div>
                    <div className='flex gap-1'>
                      {stars.map((item, index) => {
                        return (
                          <div key={index}>
                            <Image src={item.image} alt={''} />
                          </div>
                        );
                      })}
                      <div className='text-[14px] font-semibold leading-[18px] text-[#979797]'>
                        4.9
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <Image src={rightArrow} alt={''} />
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  {ratings.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className='flex gap-3 rounded-[14px] bg-white/[0.05] px-5 py-4'
                      >
                        <div className=''>
                          <Image
                            className='rounded-[100px] object-contain'
                            src={item.image}
                            alt={''}
                          />
                        </div>
                        <div className='flex w-full flex-col gap-[6px]'>
                          <div className='flex flex-col'>
                            <div className='flex justify-between'>
                              <div className='text-[14px] font-semibold leading-[18px] text-white'>
                                {item.name}
                              </div>
                              <div className='flex items-center gap-[2px]'>
                                <Image src={star} alt={''} />
                                <div className='mt-[3px] text-[14px] font-semibold leading-[18px] text-[#979797]'>
                                  {item.ratings}
                                </div>
                              </div>
                            </div>
                            <div className='text-[14px] font-normal leading-[18px] text-[#979797]'>
                              {item.text}
                            </div>
                          </div>
                          <div className='text-[12px] font-normal leading-4 text-[#979797]'>
                            {item.time}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className='flex h-max cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-[#FFFFFF14] px-6 py-[13px]'>
              <Image className='object-contain' src={Delete} alt={''} />
              <div className='text-[16px] font-bold leading-[22px] text-white'>
              Delete
              </div>
            </div>
            
          </div>
        </Modal>
      </div>
    </>
  );
};

export default PostedStyleModal;
