import React, { useState } from 'react';
import image1 from '../../../../public/assets/vi-image-1.png'
import image2 from '../../../../public/assets/vi-image-2.png'
import image3 from '../../../../public/assets/vi-image-3.png'
import image4 from '../../../../public/assets/vi-image-4.png'
import image5 from '../../../../public/assets/vi-image-5.png'
import image6 from '../../../../public/assets/vi-image-6.png'
import image7 from '../../../../public/assets/vi-image-7.png'
import threeDots from '../../../../public/assets/dots-horizontal3.png'
import Image from 'next/image';
import ViewImagesDropDown from './ViewImagesDropDown';

const images = [
  {
    image: image1
  },
  {
    image: image2
  },
  {
    image: image3
  },
  {
    image: image4
  },
  {
    image: image5
  },
  {
    image: image6
  },
  {
    image: image7
  },
  {
    image: image6
  },
];

const VIMainImageBlock = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [currentId, setCurrentId] = useState(-1);
  const [storedId, setStoredId] = useState(currentId);

  // const handleThreeDots = (index:any) => {
  //   setCurrentId(index);
  //   console.log('>>>currentId', currentId);
    
  //   if(storedId === currentId) {
  //     setShowDropDown(!showDropDown);
  //     console.log('Inside if>>>currentId', currentId);
  //     setStoredId(currentId);
  //     console.log('Inside if>>>storedId', storedId);
  //   }
  //   else if(storedId !== currentId) {
  //     setShowDropDown(true);
  //     console.log('Inside else>>>currentId', currentId);
  //     setStoredId(currentId);
  //     console.log('Inside else>>>storedId', storedId);
  //   }
  // };

  return (
    <>
    <div className='grid grid-cols-4 gap-2'>
        {images.map((item,index) => {
          return(
            <div key={index} className='relative group'>
              <div className=''>
                <Image className='h-full' src={item.image} alt={''} />
              </div>
              <div className='cursor-pointer invisible bg-black bg-opacity-40 opacity-0 group-hover:visible group-hover:opacity-100 absolute top-[7px] right-[7px] px-[8px] py-[5px] rounded-[100px] bg-black/[0.48]' onClick={() => {setCurrentId(index); currentId === storedId ? (setShowDropDown(!showDropDown), setStoredId(currentId)) : (setShowDropDown(true),setStoredId(currentId))}}>
                <Image className='!mt-[3px]' src={threeDots} alt={''} />
              </div>
              {showDropDown && currentId === index ? <ViewImagesDropDown /> : <></>}
            </div>
          );
        })}
    </div>
   
    </>
  )
}

export default VIMainImageBlock;
