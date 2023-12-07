import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import UserFrame from './UserFrame';
import Image from 'next/image';
import arrowLeft from '@/assets/arrow-narrow-left.webp';
import arrowRight from '@/assets/arrow-narrow-right.webp';
import Cookies from 'js-cookie';
import { profileYouMightLike } from 'services/services';

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
  const token:any = Cookies.get("accessToken")
  useEffect(()=>{
    profileYouMightLike("57713333-24df-4eaf-8070-ff4599b6061c", token)
    .then((res)=>{
      console.log("you might res---", res)
    })
    .catch((err)=>{
      console.log("you might err---", err)
    })
  },[])
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
      <div className='px-6 py-6 bookmark-img-text'>
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
