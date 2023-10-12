import React from 'react';
import plusIcon from '../../../public/assets/plus-large.png';
import userIcon from '../../../public/assets/user-alt-1.png';
import imageSquare from '../../../public/assets/image-square3.png';
import palette from '../../../public/assets/palette2.png';
import threeDots from '../../../public/assets/dots-horizontal (3).png';
import Image from 'next/image';

const card = [
    {
        icon: imageSquare,
        text: '0'
    },
    {
        icon: palette,
        text: 'None'
    },
];

const AllCharactersCards = () => {
  return (
    <div className='h-[470px] flex flex-col gap-6'>
        <div className='flex justify-between'>
        <div className='flex gap-2'>
            <div className='text-white text-[18px] font-bold leading-6'>All Characters</div>
            <div className='text-[#515151] text-[18px] font-bold leading-6'>1</div>
        </div>
        <button className='flex px-4 py-[10px] gap-[6px] rounded-[12px] bg-[#5848BC] justify-center items-center'>
            <Image src={plusIcon} alt={''} />
            <div className='text-white text-[14px] font-bold leading-5'>New Character</div>
        </button>
        </div>
        <div className='w-[257px] h-[300px] flex flex-col rounded-[16px] overflow-hidden bg-[#121212]'>
            <div className='bg-[#1A1A1A] flex max-h-[198px] h-full justify-center items-center'>
                <Image src={userIcon} alt={''} />
            </div>
            <div className='flex flex-col px-5 py-4 gap-[6px]'>
                <div className='flex flex-col gap-[2px]'>
                    <div className='text-white text-[15px] font-bold leading-5'>Sarah Scarlet</div>
                    <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>@Sarahscarlet</div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-[30px]'>
                        {card.map((item, index) => {
                            return(
                                <div className='flex items-center gap-1'>
                                    <Image className='object-contain' src={item.icon} alt={''} />
                                    <div className='text-white text-[13px] font-normal leading-[18px]'>{item.text}</div>
                                </div>
                            );
                        })}
                    </div>
                    <Image src={threeDots} alt={''} />
                </div>
            </div>
    </div>
    </div>
  );
};

export default AllCharactersCards;
