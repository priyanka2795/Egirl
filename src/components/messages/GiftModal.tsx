import React, { useState } from 'react';
import Image from 'next/image';
import coinIcon from '../../../public/assets/coin.png';
import crossIcon from '../../../public/assets/xmark (1).png';
import sushi from '../../../public/assets/sushi.png';
import pizza from '../../../public/assets/pizza.png';
import taco from '../../../public/assets/taco.png';
import chocolate from '../../../public/assets/chocolate.png';
import lollipop from '../../../public/assets/lollipop.png';
import cake from '../../../public/assets/cake.png';
import soda from '../../../public/assets/soda.png';
import eggplant from '../../../public/assets/eggplant.png';


type GiftModal = {
    closeModal?: () => void;
};

const Food =[
    {
        image: sushi,
        name: 'Sushi',
        free: true,
    },
    {
        image: pizza,
        name: 'Pizza',
        free: false,
    },
    {
        image: taco,
        name: 'Taco',
        free: true,
    },
    {
        image: chocolate,
        name: 'Chocolate',
        free: false,
    },
    {
        image: lollipop,
        name: 'Lollipop',
        free: false,
    },
    {
        image: cake,
        name: 'Cake',
        free: false,
    },
    {
        image: soda,
        name: 'Soda',
        free: false,
    },
    {
        image: eggplant,
        name: 'Eggplant',
        free: true,
    },
    {
        image: cake,
        name: 'Peach',
        free: true,
    },
];

const GiftModal = ({ closeModal }: GiftModal) => {
    const section = ['Platform', 'Wishlist'];
    const chooseType = ['Clothing', 'Accessories', 'Food', 'Romantic'];
    const [activeSection, setActiveSection] = useState('Platform');
    const [activeType, setactiveType] = useState('Clothing');
  return (
    <div>
        <div className='flex p-6 border-b border-white/[0.08] justify-between'>
            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Gifts</div>
            <div className='flex gap-3'>
                <div className='flex gap-1'>
                    <Image className='w-4 h-4 mt-1' src={coinIcon} alt={''} />
                    <div className='text-[15px] font-semibold leading-4 text-[#979797]'>1024</div>
                </div>
                <Image className='w-6 h-6' src={crossIcon} alt={''} />
            </div>
        </div>

        <div className='flex flex-col gap-4 p-4'>
            <div className='flex p-[6px] gap-4 rounded-full bg-white/[0.05]'>
                {section.map((item) => {
                    return(
                        <div className={`flex cursor-pointer px-4 py-[10px] justify-center items-center rounded-full text-[15px] font-normal leading-5 w-1/2 ${activeSection === item ? 'bg-[#FFFFFF] text-[#121212]' : 'text-[#FFFFFF]'}`} onClick={() => setActiveSection(item)}>{item}</div>
                    );
                })}
            </div>
            <div className='grid grid-cols-4 py-[5px]'>
                {chooseType.map((item) => {
                    return(
                        <div className={`cursor-pointer pt-2 pb-[10px] justify-center items-center border-b text-center text-[14px] leading-[18px] ${activeType === item ? 'text-[#FFFFFF] font-semibold border-[#979797]' : 'text-[#979797] font-normal border-white/[0.16]'}`} onClick={() => setactiveType(item)}>{item}</div>
                    );
                })}
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {Food.map((item) => {
                    return(
                        <div className='overflow-hidden group flex flex-col cursor-pointer rounded-[12px] bg-white/[0.05] border-2 border-transparent hover:border-[#5848BC]'>
                            <div className='flex flex-col items-center justify-center p-2'>
                                <Image src={item.image} alt={''} />
                            </div>
                            <div className='flex items-center justify-center p-2 bg-black/[0.80] text-[#FFFFFF] text-center text-[13px] font-semibold leading-[18px] group-hover:bg-[#5848BC]'>{item.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default GiftModal;
