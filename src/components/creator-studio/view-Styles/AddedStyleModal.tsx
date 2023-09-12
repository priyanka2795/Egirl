import React from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import pen from '../../../../public/assets/pen.png';
import heart from '../../../../public/assets/heart-alt.png';
import circleInformation from '../../../../public/assets/circle-information8.png';
import arrowDown from '../../../../public/assets/chevron-down2.png';
import shop from '../../../../public/assets/shop.png';
import modalImg from '../../../../public/assets/added-style-modal.png';
import arrowLeft from '../../../../public/assets/chevron-left.png';
import arrowRight from '../../../../public/assets/chevron-right-white.png';
import check from '../../../../public/assets/check-white.png';
import avatar from '../../../../public/assets/image-avatar.png';
import star from '../../../../public/assets/star.png';
import rightArrow from '../../../../public/assets/chevron-right-3.png';
import avatar2 from '../../../../public/assets/viewStyle-modal-2.png';
import smiley from '../../../../public/assets/face-smile-icon.png';

interface AddedStyleModalProp {
    setAddedStyleModal: any;
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

const AddedStyleModal = ({setAddedStyleModal}:AddedStyleModalProp) => {
  return (
    <>
    <div>
      <Modal
        open={true}
        modalClassName='flex overflow-hidden w-full rounded-[20px] bg-[#1A1A1A] max-w-[1376px]'
        closeModal={() => setAddedStyleModal (false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='relative flex items-center justify-center bg-[#121212] w-[67%]'>
            <Image className='object-contain' src={modalImg} alt={''} />
            <div className='absolute left-[24px] flex p-1 justify-center items-center rounded-[100px] bg-black/[0.32]'>
                <Image className='object-contain' src={arrowLeft} alt={''} />
            </div>
            <div className='absolute right-[24px] flex p-1 justify-center items-center rounded-[100px] bg-black/[0.32]'>
                <Image className='object-contain' src={arrowRight} alt={''} />
            </div>
        </div>
        <div className='h-[inherit] flex flex-col w-[33%]'>
            <div className='flex flex-col gap-4 px-6 pt-6 pb-5'>
                <div className='flex flex-col gap-[2px]'>
                    <div className='text-white text-[22px] font-bold leading-8'>Any Lee</div>
                    <div className='text-[#979797] text-[18px] font-normal leading-6'>Not posted</div>
                </div>
                <div className='flex gap-3'>    
                    <button className='w-full flex gap-2 justify-center items-center px-5 py-[13px] rounded-[14px] bg-white/[0.08]' onClick={() => {setStyleGenNext(true), setViewStyleModal (false)}}>
                        <Image src={check} alt={''} />
                        <div className='text-white text-[16px] font-bold leading-[22px]'>Added</div>
                    </button>
                    <button className='flex w-max p-[14px] rounded-[14px] bg-white/[0.08] justify-center items-center'>
                        <Image className='object-contain' src={heart} alt={''} />
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-5 px-6 pb-6'>
                <div className='flex flex-col gap-[14px]'>
                    <div className='text-white text-[15px] font-semibold leading-5'>Model Details</div>
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
                    <div className='flex flex-col gap-2'>
                        <div className='text-[#979797] text-[14px] font-normal leading-[18px]'>Description</div>
                        <div className='text-white text-[14px] font-normal leading-[18px]'>After a lot of tests I'm finally releasing my mix. This started as a model to make After a lot of tests I'm finally releasing my mix. This started as a model to make.</div>
                    </div>
                </div>
                <div className='px-4 py-[14px] flex justify-between rounded-[12px] bg-white/[0.05]'>
                    <div className='text-white text-[15px] font-semibold leading-5'>Generation data</div>
                    <Image src={arrowDown} alt={''} />
                </div>
                <div className='pb-5 flex flex-col gap-4 border-b border-white/[0.08]'>
                    <div className='text-white text-[15px] font-semibold leading-5'>Creator information</div>
                    <div className='flex justify-between'>
                        <div className='flex gap-3'>
                            <Image className='rounded-[100px]' src={avatar} alt={''} />
                            <div className='flex flex-col gap-[2px]'>
                                <div className='text-white text-[15px] font-semibold leading-5'>Gayle Frami</div>
                                <div className='text-[#979797] text-[13px] font-normal leading-[18px]'>@mikachan</div>
                            </div>
                        </div>
                        <button className='px-4 py-[10px] flex justify-center items-center rounded-[12px] bg-white/[0.08] text-white text-[14px] font-bold leading-5'>Follow</button>
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
                                <div className='px-5 py-4 flex gap-3 rounded-[14px] bg-white/[0.05]'>
                                    <div className='flex'>
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
            <div className='flex p-6 border-t border-white/[0.08] bg-[#1A1A1A] w-full'>
                <div className='flex px-5 py-4 rounded-[14px] bg-white/[0.05] justify-between'>
                    <div className='text-[#979797] text-[15px] font-normal leading-6'>Type your comment ...</div>
                    <Image src={smiley} alt={''} /> 
                    
                          
                </div>
            </div>
        </div>
      </Modal>
    </div>
    </>
  )
}

export default AddedStyleModal;
