import React from 'react'
import ViewStylesTab from './ViewStylesTab';
import Image from 'next/image';
import img1 from '../../../../public/assets/view-style-img1.png';
import img2 from '../../../../public/assets/view-style-img2.png';
import img3 from '../../../../public/assets/view-style-img3.png';


const generatedStyle = [
    {
        image: img1,
        name: 'A-Zovya Photoreal',
        ratings: '5.0',
        button1: 'Handbag',
        button2: 'Clothing',
        button3: 'Dress',
    },
    {
        image: img2,
        name: 'A-Zovya Photoreal',
        ratings: '4.8',
        button1: 'General',
        button2: 'Anime',
        button3: 'Dress',
    },
    {
        image: img3,
        name: 'A-Zovya Photoreal',
        ratings: '4.2',
        button1: 'Clothing',
        button2: 'Handbag',
        button3: 'Dress',
    },
    {
        image: img1,
        name: 'A-Zovya Photoreal',
        ratings: '5.0',
        button1: 'Handbag',
        button2: 'Clothing',
        button3: 'Dress',
    },
    {
        image: img2,
        name: 'A-Zovya Photoreal',
        ratings: '4.8',
        button1: 'General',
        button2: 'Anime',
        button3: 'Dress',
    },
    {
        image: img3,
        name: 'A-Zovya Photoreal',
        ratings: '4.2',
        button1: 'Clothing',
        button2: 'Handbag',
        button3: 'Dress',
    },
];

const Generatedstyle = () => {
  return (
    <>
    <ViewStylesTab component={'GeneratedStyle'} />
    <div className='grid grid-cols-3 gap-3'>
    {generatedStyle.map((item,index) => {
                return(
                    <div key={index} className='overflow-hidden flex flex-col rounded-[16px] bg-white/[0.05]'>
                        <Image src={item.image} alt={''} />
                        <div className='flex flex-col gap-3 p-4'>
                            <div className='text-white text-[15px] font-semibold leading-5'>{item.name}</div>
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
    </>
  )
}

export default Generatedstyle;
