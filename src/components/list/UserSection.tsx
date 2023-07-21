import React from 'react'
import Slider from 'react-slick'
import UserFrame from './UserFrame'
import Image from 'next/image';
import arrowLeft from '../../../public/assets/arrow-narrow-left.png'
import arrowRight from '../../../public/assets/arrow-narrow-right.png'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const UserSection = () => {
  return (
        <div className='bg-[#121212] rounded-[14px] w-[41%] h-max mt-5'>
                <div className='flex justify-between p-6 border-b border-white/[0.08]'>
                    <div className='text-[#FFFFFF] text-[18px] font-bold'>You might like</div>
                    <div className='flex gap-3'>
                        <Image src={arrowLeft} alt={''} />
                        <Image src={arrowRight} alt={''} />
                    </div>
                </div>
                <div className='px-6 pb-6'>
                    <div className='mt-12'>
                    <Slider {...settings}>
                    <UserFrame />
                    <UserFrame />
                    <UserFrame />
                    <UserFrame />
                    </Slider>
                    </div>
                </div>
            </div>
   
  )
}

export default UserSection
