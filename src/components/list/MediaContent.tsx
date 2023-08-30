import React, { useState } from 'react';
import img1 from '../../../public/assets/media-1.png';
import img2 from '../../../public/assets/media-2.png';
import img3 from '../../../public/assets/media-3.png';
import img4 from '../../../public/assets/media-4.png';
import img5 from '../../../public/assets/media-5.png';
import img6 from '../../../public/assets/media-6.png';
import fullImgMicaChan from '../../../public/assets/media-full-img.png';
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
