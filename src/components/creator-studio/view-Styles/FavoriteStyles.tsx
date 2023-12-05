import React, { useState } from 'react';
import aiImg1 from '@/assets/vs-all-images-img1.webp';
import aiImg2 from '@/assets/vs-all-images-img2.webp';
import aiImg3 from '@/assets/vs-all-images-img3.webp';
import star from '@/assets/star.webp';
import Image from 'next/image';
import FavoriteStyleModal from './FavoriteStyleModal';

const allImages = [
    {
        image: aiImg1,
        name: 'A-Zovya Photoreal',
        ratings: '5.0',
        button1: 'Handbag',
        button2: 'Clothing',
        button3: 'Dress',
    },
    {
        image: aiImg2,
        name: 'A-Zovya Photoreal',
        ratings: '4.8',
        button1: 'General',
        button2: 'Anime',
        button3: 'Dress',
    },
    {
        image: aiImg3,
        name: 'A-Zovya Photoreal',
        ratings: '4.2',
        button1: 'Clothing',
        button2: 'Handbag',
        button3: 'Dress',
    },
    {
        image: aiImg1,
        name: 'A-Zovya Photoreal',
        ratings: '5.0',
        button1: 'Handbag',
        button2: 'Clothing',
        button3: 'Dress',
    },
    {
        image: aiImg2,
        name: 'A-Zovya Photoreal',
        ratings: '4.8',
        button1: 'General',
        button2: 'Anime',
        button3: 'Dress',
    },
    {
        image: aiImg3,
        name: 'A-Zovya Photoreal',
        ratings: '4.2',
        button1: 'Clothing',
        button2: 'Handbag',
        button3: 'Dress',
    },
];

const FavoriteStyles = () => {
    const [favoriteStyleModal, setFavoriteStyleModal] = useState<boolean>(false);
  return (
    <>
    <div className='flex flex-col w-full gap-4 mt-5'>
      <div className='flex flex-col gap-3'>
        <div className='grid grid-cols-3 gap-3'>
            {allImages.map((item,index) => {
                return(
                    <div key={index} className='overflow-hidden flex flex-col rounded-[16px] bg-white/[0.05]'>
                        <Image onClick={() => {setFavoriteStyleModal(true)}} src={item.image} alt={''} />
                        <div className='flex flex-col gap-3 p-4'>
                            <div className='flex justify-between'>
                                <div className='text-white text-[15px] font-semibold leading-5'>{item.name}</div>
                                <div className='flex items-center gap-1'>
                                    <Image src={star} alt={''} />
                                    <div className='text-[#979797] text-[14px] font-semibold leading-[18px]'>5.0</div>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div className='px-[10px] py-1 rounded-[8px] bg-white/[0.08] text-[13px] font-normal leading-[18px]'>{item.button1}</div>
                                <div className='px-[10px] py-1 rounded-[8px] bg-white/[0.08] text-[13px] font-normal leading-[18px]'>{item.button2}</div>
                                <div className='px-[10px] py-1 rounded-[8px] bg-white/[0.08] text-[13px] font-normal leading-[18px]'>{item.button1}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </div>
    {
        favoriteStyleModal && <FavoriteStyleModal closeModal={setFavoriteStyleModal} component={'FavoriteStyles'} />
    }
    </>
  )
}

export default FavoriteStyles;
