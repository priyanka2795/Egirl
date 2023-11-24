import React, { useState } from 'react';
import plusIcon from '../../../../public/assets/plus-gray.png';
import user from '../../../../public/assets/circle-user.png';
import imageSquare from '../../../../public/assets/image-square.png';
import image from '../../../../public/assets/image.png';
import undo from '../../../../public/assets/Undo.png';
import deleteIcon from '../../../../public/assets/trash-blank-alt.png';
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
