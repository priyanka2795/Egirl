import React, { useState } from 'react';
import plusIcon from '../../../../public/assets/plus-gray.png';
import gift from '../../../../public/assets/gift-icon.png';
import user from '../../../../public/assets/circle-user.png';
import imageSquare from '../../../../public/assets/image-square.png';
import image from '../../../../public/assets/image.png';
import undo from '../../../../public/assets/Undo.png';
import deleteIcon from '../../../../public/assets/trash-blank-alt.png';
import Image from 'next/image';
import CreateCategory from './createCategory';
import CreateGift from './moveAlbumModal';
import SuccessModal from './successModal';

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
  },
];
interface ViewImagesDropDown {
  DeleteImage:any;
}
const ViewImagesDropDown = ({ DeleteImage}: ViewImagesDropDown) => {


  return (
    <>
      <div className='flex flex-col w-[218px] rounded-[14px] bg-[#1A1A1A]'>
        {images.map((item, index) => {
          return (
            <div key={index} className={`cursor-pointer flex gap-2 px-4 py-[10px]`} onClick={(e) => DeleteImage(e)} >
              <Image src={item.image} alt={''} />
              <div className='text-[#FFFFFF] text-[14px] font-normal leading-[18px]' >{item.text}</div>
            </div>
          );
        })}
      </div>


    </>

  )
}

export default ViewImagesDropDown
