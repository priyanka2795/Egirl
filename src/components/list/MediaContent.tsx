import React, { useState } from 'react';
import img1 from '@/assets/media-1.webp';
import img2 from '@/assets/media-2.webp';
import img3 from '@/assets/media-3.webp';
import img4 from '@/assets/media-4.webp';
import img5 from '@/assets/media-5.webp';
import img6 from '@/assets/media-6.webp';
import fullImgMicaChan from '@/assets/media-full-img.webp';
import Image from 'next/image';
import { Modal } from '@components/modal/modal';

const images = [
  {
    image: img1
  },
  {
    image: img2
  },
  {
    image: img3
  },
  {
    image: img4
  },
  {
    image: img5
  },
  {
    image: img6
  },
];

const MediaContent = () => {
  const [showFullImg, setShowFullImg] = useState(false);
  
  return (
    <>
    <div className='p-6 h-max'>
      <div className='overflow-hidden rounded-[12px] grid grid-cols-2 gap-2'>
        {images.map((item,index) => {
          return(
            <div key={index} onClick={() => {setShowFullImg(true)}}>
              <Image className='rounded-[12px]' src={item.image} alt={''} />
            </div>
          );
        })}
      </div>
    </div>
    {
      showFullImg && 
      <Modal
      open={true}
      modalClassName='flex flex-col w-full h-[904px] bg-[#121212] max-w-[899px]'
      closeModal={() => setShowFullImg(false)}
      modalOverlayStyle='!bg-black/80'
      >
        <Image src={fullImgMicaChan} alt={''} />
      </Modal>
    }
    </>
  )
}

export default MediaContent;
