import Image from 'next/image';
import React from 'react';
import threeDotsIcon from '../../../public/assets/three-dots-icon.png';
import avatar from '../../../public/assets/avatar.png';
import micaChanFullImg from '../../../public/assets/mica-chan-full-img.png';
import locationIcon from '../../../public/assets/location-icon.png';
import bookmarkIcon from '../../../public/assets/bookmark.png';
import shareIcon from '../../../public/assets/share-icon.png';
import messageIcon from '../../../public/assets/message-square.png';
import heartIcon from '../../../public/assets/unfilled-heart.png';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const PreviewContent = () => {
  return (
    <div className='p-6'>
      <div className='flex justify-between'>
        <div className='flex gap-3'>
          <div className='h-[40px] w-[40px]'>
            <Image src={avatar} alt={''} />
          </div>
          <div className='flex gap-2 mt-2'>
            <div className='font-bold text-base text-[#FFFFFF]'>Mika-chan</div>
            <div className='font-normal text-sm text-[#979797]'>
              @mikachan • 6h
            </div>
          </div>
        </div>
        <div className=''>
          <Image src={threeDotsIcon} alt={''} />
        </div>
      </div>
      <div className='mt-4'>
        <div className='font-normal text-sm text-[#FFFFFF]'>
          Hello dears, my mood today is 🤗
        </div>
        <div className='flex gap-[6px]'>
          <div className='font-normal text-sm text-[#8C7DD0]'>#girl</div>
          <div className='font-normal text-sm text-[#8C7DD0]'>#mood</div>
          <div className='font-normal text-sm text-[#8C7DD0]'>#relaxtime</div>
        </div>
      </div>
      <div className='list-slider list-slider-dots post-card-slider mt-4 h-[512px] w-full rounded-[14px]'>
        <Slider {...settings}>
          <Image className='rounded-[14px]' src={micaChanFullImg} alt={''} />
          <Image className='rounded-[14px]' src={micaChanFullImg} alt={''} />
          <Image className='rounded-[14px]' src={micaChanFullImg} alt={''} />
          <Image className='rounded-[14px]' src={micaChanFullImg} alt={''} />
        </Slider>
      </div>
      <div className='flex gap-2 mt-4'>
        <Image className='object-contain' src={locationIcon} alt={''} />
        <div className='font-normal text-sm text-[#FFFFFF]'>
          Warsaw, Old Town
        </div>
      </div>
      <div className='flex justify-between mt-4'>
        <div className='flex gap-3'>
          <div className='flex gap-[6px] rounded-[100px] bg-white/[0.08] px-3 py-2'>
            <Image className='object-contain' src={heartIcon} alt={''} />
            <div className='font-normal text-[15px] text-[#FFFFFF]'>6.2k</div>
          </div>
          <div className='flex gap-[6px] rounded-[100px] bg-white/[0.08] px-3 py-2'>
            <Image className='object-contain' src={messageIcon} alt={''} />
            <div className='font-normal text-[15px] text-[#FFFFFF]'>98</div>
          </div>
          <div className='flex gap-[6px] rounded-[100px] bg-white/[0.08] px-3 py-2'>
            <Image className='object-contain' src={bookmarkIcon} alt={''} />
          </div>
          <div className='flex gap-[6px] rounded-[100px] bg-white/[0.08] px-3 py-2'>
            <Image className='object-contain' src={shareIcon} alt={''} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewContent;
