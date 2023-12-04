import React, {useState} from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import pen from '@/assets/pen.webp';
import heart from '@/assets/heart-alt.webp';
import circleInformation from '@/assets/circle-information.webp';
import arrowDown from '@/assets/chevron-down2.webp';
import shop from '@/assets/shop.webp';
import modalImg from '@/assets/added-style-modal.webp';
import arrowLeft from '@/assets/chevron-left.webp';
import arrowRight from '@/assets/chevron-right-white.webp';
import check from '@/assets/check-icon-grey.webp';
import avatar from '@/assets/image-avatar.webp';
import star from '@/assets/star.webp';
import rightArrow from '@/assets/chevron-right.webp';
import avatar2 from '@/assets/viewStyle-modal-2.webp';
import smiley from '@/assets/face-smile-icon.webp';
import arrowUp from '@/assets/chevron-up.webp';
import copy from '@/assets/file-copy.webp';
import downArrow from '@/assets/down-arrow-img.webp';


interface AddedStyleModalProp {
  setAddedStyleModal: React.Dispatch<React.SetStateAction<boolean>>;
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
    image: ''
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

const generationDataItem = [
  {
    text: 'CFG scale',
    number: '7'
  },
  {
    text: 'Steps',
    number: '40'
  },
  {
    text: 'Sampler',
    number: 'Euler a'
  },
  {
    text: 'Seed',
    number: '13145374738'
  },
  {
    text: 'Clip Skip',
    number: '2'
  }
];

const AddedStyleModal = ({ setAddedStyleModal }: AddedStyleModalProp) => {
  const [generationData, setGenerationData] = useState<boolean>(false);
  const generationDataTab = ['Prompt', 'Negative prompt'];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <>
      <div>
        <Modal
          open={true}
          modalClassName='flex overflow-hidden w-full rounded-[20px] bg-[#1A1A1A] max-w-[1376px] overflow-y-hidden'
          closeModal={() => setAddedStyleModal(false)}
          modalOverlayStyle='!bg-black/80' 
        >
          <div className='relative flex w-[67%] items-center justify-center bg-[#121212]'>
            <Image className='object-contain' src={modalImg} alt='' />
            <div className='absolute left-[24px] flex items-center justify-center rounded-[100px] bg-black/[0.32] p-1'>
              <Image className='object-contain' src={arrowLeft} alt='' />
            </div>
            <div className='absolute right-[24px] flex items-center justify-center rounded-[100px] bg-black/[0.32] p-1'>
              <Image className='object-contain' src={arrowRight} alt='' />
            </div>
          </div>
          <div className='flex h-[inherit] w-[33%] flex-col'>
            <div className='h-[calc(86vh-100px)] overflow-y-auto'>
              <div className='flex flex-col gap-4 px-6 pt-6 pb-5'>
                <div className='flex flex-col gap-[2px]'>
                  <div className='text-[22px] font-bold leading-8 text-white'>
                    Any Lee
                  </div>
                  <div className='text-[18px] font-normal leading-6 text-[#979797]'>
                    Not posted
                  </div>
                </div>
                <div className='flex gap-3'>
                  <button className='flex w-full items-center justify-center gap-2 rounded-[14px] bg-white/[0.08] px-5 py-[13px]'>
                    <Image src={check} alt='' />
                    <div className='text-[16px] font-bold leading-[22px] text-white'>
                      Added
                    </div>
                  </button>
                  <button className='flex w-max items-center justify-center rounded-[14px] bg-white/[0.08] p-[14px]'>
                    <Image className='object-contain' src={heart} alt='' />
                  </button>
                </div>
              </div>
              <div className='flex flex-col gap-5 px-6 pb-6'>
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
                            alt=''
                          />
                        </div>
                        <div className='text-[14px] font-normal leading-[18px] text-white'>
                          {item.style}
                        </div>
                      </div>
                    );
                  })}
                  <div className='flex flex-col gap-2'>
                    <div className='text-[14px] font-normal leading-[18px] text-[#979797]'>
                      Description
                    </div>
                    <div className='text-[14px] font-normal leading-[18px] text-white'>
                      After a lot of tests I'm finally releasing my mix. This
                      started as a model to make After a lot of tests I'm
                      finally releasing my mix. This started as a model to make.
                    </div>
                  </div>
                </div>

                <div
                    className='flex flex-col gap-4 rounded-[12px] bg-white/[0.05] px-4 py-[14px]'
                    
                  >
                    <div className='flex items-center justify-between cursor-pointer' onClick={() => {
                      setGenerationData(!generationData);
                    }}>
                      <div className='font-normal text-[15px] leading-5 text-white'>Generation data</div>
                      <Image
                        src={generationData ? arrowUp : arrowDown}
                        alt=''
                      />
                    </div>
                    {generationData ? (
                      <div className='flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                          <div className='flex'>
                            {generationDataTab.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`flex cursor-pointer items-center justify-center rounded-[12px] px-3 py-2 text-[14px] leading-[18px] ${
                                    activeIndex === index
                                      ? 'font-bold bg-white/[0.16] text-white'
                                      : 'font-semibold text-[#979797]'
                                  }`}
                                  onClick={() => {
                                    setActiveIndex(index);
                                  }}
                                >
                                  {item}
                                </div>
                              );
                            })}
                          </div>
                          <div className='relative group'>
                            <Image
                              className='object-contain cursor-pointer'
                              src={copy}
                              alt=''
                            />
                            <div className='invisible group-hover:visible group-hover:opacity-100'>
                              <div className='font-normal absolute -right-[16px] -top-[38px] flex items-center justify-center rounded-[6px] bg-[#303030] px-3 py-[6px] text-[12px] leading-4 text-white'>
                                Copy
                              </div>
                              <div className='absolute -right-[26px] -top-[22px] h-[24px] w-10'>
                                <Image
                                  className='w-full h-full'
                                  src={downArrow}
                                  alt=''
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='font-normal text-[14px] leading-[18px] text-white'>
                          Best quality, masterpiece, ultra high res,
                          (photorealistic), raw photo, 1girl, offshoulder, in
                          the dark, deep shadow, low key,
                        </div>
                        <div className='grid grid-cols-3 gap-x-[51px] gap-y-3'>
                          {generationDataItem.map((item, index) => {
                            return (
                              <div key={index} className='flex flex-col gap-1'>
                                <div className='text-[14px] font-semibold leading-[18px] text-white'>
                                  {item.text}
                                </div>
                                <div className='font-normal text-[14px] leading-[18px] text-[#979797]'>
                                  {item.number}
                                </div>
                              </div>
                            ); 
                          })}
                        </div>
                        <div></div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                {/* <div className='flex justify-between rounded-[12px] bg-white/[0.05] px-4 py-[14px]'>
                  <div className='text-[15px] font-normal leading-5 text-white'>
                    Generation data
                  </div>
                  <Image src={arrowDown} alt='' />
                </div> */}

                <div className='flex flex-col gap-4 border-b border-white/[0.08] pb-5'>
                  <div className='text-[15px] font-semibold leading-5 text-white'>
                    Creator information
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex gap-3'>
                      <Image className='rounded-[100px]' src={avatar} alt='' />
                      <div className='flex flex-col gap-[2px]'>
                        <div className='text-[15px] font-semibold leading-5 text-white'>
                          Gayle Frami
                        </div>
                        <div className='text-[13px] font-normal leading-[18px] text-[#979797]'>
                          @mikachan
                        </div>
                      </div>
                    </div>
                    <button className='flex items-center justify-center rounded-[12px] bg-white/[0.08] px-4 py-[10px] text-[14px] font-bold leading-5 text-white'>
                      Follow
                    </button>
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
                              <Image src={item.image} alt='' />
                            </div>
                          );
                        })}
                        <div className='text-[14px] font-semibold leading-[18px] text-[#979797]'>
                          4.9
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <Image src={rightArrow} alt='' />
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
                              alt=''
                            />
                          </div>
                          <div className='flex w-full flex-col gap-[6px]'>
                            <div className='flex flex-col'>
                              <div className='flex justify-between'>
                                <div className='text-[14px] font-semibold leading-[18px] text-white'>
                                  {item.name}
                                </div>
                                <div className='flex items-center gap-[2px]'>
                                  <Image src={star} alt='' />
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
            </div>
            <div className='flex w-full border-t border-white/[0.08] bg-[#1A1A1A] p-6'>
              <div className='flex justify-between rounded-[14px] bg-white/[0.05] px-5 py-4 w-full'>
                <input type='text' className='text-[15px] font-normal leading-6 text-[#979797] placeholder:text-[#979797] p-0 focus:ring-0 border-none bg-transparent' placeholder='Type your comment ...' />
                <Image src={smiley} alt='' />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AddedStyleModal;
