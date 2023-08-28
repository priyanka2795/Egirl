import React from 'react';
import image1 from '../../../../public/assets/vi-image-1.png'
import image2 from '../../../../public/assets/vi-image-2.png'
import image3 from '../../../../public/assets/vi-image-3.png'
import image4 from '../../../../public/assets/vi-image-4.png'
import image5 from '../../../../public/assets/vi-image-5.png'
import image6 from '../../../../public/assets/vi-image-6.png'
import image7 from '../../../../public/assets/vi-image-7.png'
import threeDots from '../../../../public/assets/dots-horizontal3.png'
import Image from 'next/image';

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
  return (
    <div className='grid grid-cols-4 gap-2'>
        {images.map((item,index) => {
          return(
            <div key={index} className='relative'>
              <Image src={item.image} alt={''} />
              <div className='absolute top-[7px] right-[7px] px-[8px] py-[5px] rounded-[100px] bg-black/[0.48]'>
                <Image className='!mt-[3px]' src={threeDots} alt={''} />
              </div>
            </div>
          );
        })}
    </div>
  )
}

export default VIMainImageBlock;
