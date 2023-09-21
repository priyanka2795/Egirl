import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React from 'react';
import pen from '../../../../public/assets/pen.png';
import heart from '../../../../public/assets/heart-alt.png';
import circleInformation from '../../../../public/assets/circle-information8.png';
import arrowDown from '../../../../public/assets/chevron-down2.png';
import shop from '../../../../public/assets/shop.png';
import modalImg from '../../../../public/assets/view-style-modal-img.png';
import star from '../../../../public/assets/star.png';
import avatar2 from '../../../../public/assets/viewStyle-modal-2.png';
import rightArrow from '../../../../public/assets/chevron-right-3.png';

interface PostedStyleModalprops {
    setPostedStyleModal: any;
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
    },
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
    },
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
const PostedStyleModal = ({setPostedStyleModal}:PostedStyleModalprops) => {
  return (
    <>
    <div>
      <Modal
        open={true}
        modalClassName='flex overflow-hidden w-full rounded-[20px] bg-[#1A1A1A] max-w-[1376px]'
        closeModal={() => setPostedStyleModal (false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='w-[67%]'>
            <Image className='object-contain' src={modalImg} alt={''} />
        </div>
        <div className='h-[inherit] flex flex-col w-[33%] justify-between px-6 pb-[13px]'>
            <div>
                <div className='flex flex-col gap-4 pt-6 pb-5'>
                <div className='flex flex-col gap-[2px]'>
                    <div className='text-white text-[22px] font-bold leading-8'>A-Zovya Photoreal</div>
                    <div className='text-[#979797] text-[18px] font-normal leading-6'>Not posted</div>
                </div>
                <div className='flex gap-3'>
                    <button className='w-full flex gap-2 justify-center items-center px-5 py-[13px] rounded-[14px] bg-white/[0.08]'>
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
                            <Image className='object-contain' src={item.image} alt={''} />
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
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-white text-[15px] font-semibold leading-5'>Reviews</div>
                            <div className='flex gap-1'>
                                {stars.map((item,index) => {
                                    return(
                                        <div key={index}>
                                            <Image src={item.image} alt={''} />
                                        </div>
                                    );
                                })}
                                <div className='text-[#979797] text-[14px] font-semibold leading-[18px]'>4.9</div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <Image src={rightArrow} alt={''} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        {ratings.map((item,index) => {
                            return(
                                <div key={index} className='px-5 py-4 flex gap-3 rounded-[14px] bg-white/[0.05]'>
                                    <div className=''>
                                        <Image className='rounded-[100px] object-contain' src={item.image} alt={''} />
                                    </div>
                                    <div className='flex flex-col gap-[6px] w-full'>
                                        <div className='flex flex-col'>
                                            <div className='flex justify-between'>
                                                <div className='text-white text-[14px] font-semibold leading-[18px]'>{item.name}</div>
                                                <div className='flex gap-[2px] items-center'>
                                                    <Image src={star} alt={''} />
                                                    <div className='mt-[3px] text-[#979797] text-[14px] font-semibold leading-[18px]'>{item.ratings}</div>
                                                </div>
                                            </div>
                                            <div className='text-[#979797] text-[14px] font-normal leading-[18px]'>{item.text}</div>
                                        </div>
                                        <div className='text-[#979797] text-[12px] font-normal leading-4'>{item.time}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className='h-max flex cursor-pointer px-6 py-[13px] justify-center items-center rounded-[14px] bg-[#5848BC] gap-2'>
                <Image className='object-contain' src={shop} alt={''} />
                <div className='text-white text-[16px] font-bold leading-[22px]'>Post Style</div>
            </div>
        </div>
      </Modal>
    </div>
    </>
  )
}

export default PostedStyleModal
