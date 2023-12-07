import React, { useState } from 'react';
import plusIcon from '@/assets/plus-gray.webp';
import user from '@/assets/circle-user.webp';
import imageSquare from '@/assets/image-square.webp';
import image from '@/assets/image.webp';
import undo from '@/assets/Undo.webp';
import deleteIcon from '@/assets/trash-blank-alt.webp';
import Image from 'next/image';


const images = [
  {
    image: plusIcon,
    text: 'Create new post'
  },
  {
    image: image,
    text: 'Make album cover'
  },
  {
    image: user,
    text: 'Make profile picture'
  },
  {
    image: imageSquare,
    text: 'Make profile cover'
  },
  {
    image: undo,
    text: 'Move to album'
  },
  {
    image: deleteIcon,
    text: 'Delete'
  }
];
interface ViewImagesDropDown {
  DeleteImage?: any;
}
const ViewImagesDropDown = ({ DeleteImage}: ViewImagesDropDown) => {
 
  return (
    <>
      <div className='flex w-[218px] flex-col rounded-[14px] bg-[#1A1A1A]'>
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex cursor-pointer gap-2 px-4 py-[10px]`}
              onClick={(e) => DeleteImage(e)}
            >
              <Image src={item.image} alt={''} />
              <div className='text-[14px] font-normal leading-[18px] text-[#FFFFFF]'>
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ViewImagesDropDown;
