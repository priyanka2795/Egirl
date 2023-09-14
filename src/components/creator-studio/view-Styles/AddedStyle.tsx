import React, { useState } from 'react'
import ViewStylesTab from './ViewStylesTab';
import Image from 'next/image';
import img1 from '../../../../public/assets/view-style-img1.png';
import img2 from '../../../../public/assets/view-style-img2.png';
import img3 from '../../../../public/assets/view-style-img3.png';
import ViewStyleModal from '../style-generator/ViewStyleModal';
import modalImg from '../../../../public/assets/view-style-modal-img.png';
import pen from '../../../../public/assets/pen2.png';
import AddedStyleModal from './AddedStyleModal';

interface AddedstyleProps {
    setAddedStyle: any;
}

const addedStyle = [
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

const Addedstyle = ({setAddedStyle} : AddedstyleProps) => {
    const [addedStyleModal, setAddedStyleModal] = useState(false);

  return (
    <>
    <ViewStylesTab component={'AddedStyle'} setAddedStyle={setAddedStyle} />
    <div className='grid grid-cols-3 gap-3 mt-5'>
    {addedStyle.map((item,index) => {
                return(
                    <div key={index} className='relative group overflow-hidden flex flex-col rounded-[16px] bg-white/[0.05]'>
                        <Image onClick={() => {setAddedStyleModal(true)}} src={item.image} alt={''} />
                        <div className='flex flex-col gap-3 p-4'>
                            <div className='text-white text-[15px] font-semibold leading-5'>{item.name}</div>
                             <div className='flex gap-2'>
                                <div className='px-[10px] py-1 rounded-[8px] bg-white/[0.08] text-[13px] font-normal leading-[18px]'>{item.button1}</div>
                                <div className='px-[10px] py-1 rounded-[8px] bg-white/[0.08] text-[13px] font-normal leading-[18px]'>{item.button2}</div>
                                <div className='px-[10px] py-1 rounded-[8px] bg-white/[0.08] text-[13px] font-normal leading-[18px]'>{item.button1}</div>
                            </div>
                        </div>
                        <div className='cursor-pointer invisible w-[40px] h-[40px] flex items-center justify-center group-hover:visible group-hover:opacity-100 absolute rounded-full bg-black/[0.48] top-[10px] right-[12px]'>
                            <Image className='' src={pen} alt={''} />
                        </div>
                    </div>
                );
            })}
    </div>
    {
        addedStyleModal && <AddedStyleModal setAddedStyleModal={setAddedStyleModal} />
    }
    </>
  )
}

export default Addedstyle;
