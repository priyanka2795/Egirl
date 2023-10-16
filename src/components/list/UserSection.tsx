import React from 'react';
import Slider from 'react-slick';
import UserFrame from './UserFrame';
import Image from 'next/image';
import arrowLeft from '../../../public/assets/arrow-narrow-left.png';
import arrowRight from '../../../public/assets/arrow-narrow-right.png';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

interface UserSectionInterface {
  userSectionStyle?: string;
}
const UserSection = ({ userSectionStyle }: UserSectionInterface) => {
  return (
    <div
      className={`mt-5 h-max rounded-[14px] bg-[#121212] ${
        userSectionStyle ? userSectionStyle : ' w-[39%]'
      }`}
    >
      <div className='flex justify-between border-b border-white/[0.08] p-6'>
        <div className='font-bold text-[18px] text-[#FFFFFF]'>
          You might like
        </div>
        <div className='flex gap-3'>
          <Image src={arrowLeft} alt={''} />
          <Image src={arrowRight} alt={''} />
        </div>
      </div>
      <div className='bookmark-img-text px-6 py-6'>
        <div className='profile-like-slider h-[286px]'>
          <Slider {...settings}>
            <UserFrame />
            <UserFrame />
            <UserFrame />
            <UserFrame />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
