import React, { useState } from 'react';
import Image from 'next/image';
import coinIcon from '@/assets/coin.webp';
import crossIcon from '@/assets/xmark (1).webp';
import sushi from '@/assets/sushi.webp';
import pizza from '@/assets/pizza.webp';
import taco from '@/assets/taco.webp';
import chocolate from '@/assets/chocolate.webp';
import lollipop from '@/assets/lollipop.webp';
import cake from '@/assets/cake.webp';
import soda from '@/assets/soda.webp';
import eggplant from '@/assets/eggplant.webp';
import tokenIcon from '@/assets/token-white-icon.webp';


type GiftModal = {
    closeModal?: any;
    setShowGiftImg: any;
    setShowGiftName: any;
    setShowGiftMsg: React.Dispatch<React.SetStateAction<boolean>>;
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

const GiftModal = ({ closeModal, setShowGiftImg, setShowGiftName, setShowGiftMsg }: GiftModal) => {
    const section = ['Platform', 'Wishlist'];
    const chooseType = ['Clothing', 'Accessories', 'Food', 'Romantic'];
    const [activeSection, setActiveSection] = useState('Platform');
    const [activeType, setactiveType] = useState('Clothing');
    const [activeText, setActiveText] = useState('');

    const handleShowMsg = () => {
        setShowGiftMsg(true);
        closeModal;  
    }

  return (
    <div>
        <div className='flex p-6 border-b border-white/[0.08] justify-between'>
            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Gifts</div>
            <div className='flex gap-3'>
                <div className='flex gap-1'>
                    <Image className='w-4 h-4 mt-1' src={coinIcon} alt={''} />
                    <div className='text-[15px] font-semibold text-[#979797]'>1024</div>
                </div>
                <Image className='w-6 h-6 cursor-pointer' src={crossIcon} alt={''} onClick={closeModal} />
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
                        <div className={`relative overflow-hidden group flex flex-col h-[130px] cursor-pointer rounded-[12px] border-2 hover:border-[#5848BC] ${activeText === item.name ? 'border-[#5848BC]' : 'border-transparent'}`} onClick={() => {setActiveText(item.name),
                         setShowGiftImg(item.image); setShowGiftName(item.name)
                         }}>
                            <div className='bg-white/[0.05] flex items-center justify-center p-2 grow'>
                                <Image className='w-10 h-10' src={item.image} alt={''} />
                            </div>
                            <div className={`flex items-center justify-center p-2 text-[#FFFFFF] text-center text-[13px] font-semibold leading-[18px] group-hover:bg-[#5848BC] ${activeText === item.name ? 'bg-[#5848BC]' : 'bg-black/[0.80] '}`}>{item.name}</div>
                            {item.free && 
                            <div className={`absolute top-[2px] right-[2px] flex pl-1 pr-2 py-[3px] gap-1 rounded-full group-hover:bg-[#5848BC] ${activeText === item.name ? 'bg-[#5848BC]' : 'bg-black/[0.80] '}`}>
                                <Image className='object-contain' src={tokenIcon} alt={''} />
                                <div className='text-[#FFFFFF] text-[12px] font-normal leading-4'>2</div>
                            </div>
                            } 
                        </div>
                    );
                })}
            </div>
        </div>

        <div className='flex gap-3 p-6'>
            <button className='w-1/2 px-5 py-[13px] justify-center items-center rounded-[14px] border border-white/[0.32] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={() => {setActiveText('')
                        ,setShowGiftImg(''); setShowGiftName(''),closeModal()}}>Cancel</button>
            <button className='w-1/2 px-5 py-[13px] justify-center items-center rounded-[14px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={() => {handleShowMsg() , closeModal()}}>Send gift</button>
        </div>
    </div>
  )
}

export default GiftModal;
