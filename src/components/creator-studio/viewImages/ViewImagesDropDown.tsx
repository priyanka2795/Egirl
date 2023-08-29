import React, { useState } from 'react';
import plusIcon from '../../../../public/assets/plus-gray.png';
import gift from '../../../../public/assets/gift-icon.png';
import user from '../../../../public/assets/circle-user.png';
import image from '../../../../public/assets/image-square.png';
import undo from '../../../../public/assets/Undo.png';
import deleteIcon from '../../../../public/assets/trash-blank-alt.png';
import Image from 'next/image';

const images = [
  {
    image: plusIcon,
    text: 'Create new post'
  },
  {
    image: gift,
    text: 'Create gift'
  },
  {
    image: user,
    text: 'Make profile picture'
  },
  {
    image: image,
    text: 'Make profile cover'
  },
  {
    image: undo,
    text: 'Move to album'
  },
  {
    image: deleteIcon ,
    text: 'Delete'
  },
];

const ViewImagesDropDown = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <div className='absolute top-[223px] right-[747px] flex flex-col py-1 w-[200px] h-max rounded-[14px] bg-[#1A1A1A]'>
        {images.map((item,index) => {
          return(
            <div key={index} className={`${activeIndex === index  && 'rounded-[8px] bg-white/[0.05]'} cursor-pointer flex gap-2 px-4 py-[10px]`} onClick={() => {setActiveIndex(index)}}>
              <Image src={item.image} alt={''} />
              <div className='text-[#FFFFFF] text-[14px] font-normal leading-[18px]'>{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ViewImagesDropDown
