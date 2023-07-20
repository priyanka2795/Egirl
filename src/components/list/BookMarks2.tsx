import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import micaChanFullImg from '../../../public/assets/mica-chan-full-img.png'
import avatar from '../../../public/assets/avatar.png'
import threeDotsIcon from '../../../public/assets/three-dots-icon.png'
import crossIcon from '../../../public/assets/xmark.png'
import heartIcon from '../../../public/assets/orange-heart.png'
import messageIcon from '../../../public/assets/message-square.png'
import bookmark from '../../../public/assets/bookmark-filled.png'
import shareIcon from '../../../public/assets/share-icon.png'
import Slider from 'react-slick';


const settings = { 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


const BookMarks2 = () => {
  return (
    <div>
      <div className='flex w-[900px] rounded-[20px] bg-[#121212] overflow-hidden mt-10 mb-10 ml-16'>
        <div className='w-[512px]'>
            <Slider {...settings}>
                <Image className='' src={micaChanFullImg} alt={''} />
                <Image className='' src={micaChanFullImg} alt={''} />
                <Image className='' src={micaChanFullImg} alt={''} />
                <Image className='' src={micaChanFullImg} alt={''} />
            </Slider>
        </div>
        <div className='w-full'>
            <div className='w-full flex flex-col gap-4 px-4 py-6 border-b border-white/[0.12]'>
                <div className='flex justify-between w-full'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[48px] h-[48px]'>
                            <Image className='w-full h-full' src={avatar} alt={''} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-[#FFFFFF] text-[18px] font-bold'>Mika-chan</div>
                            <div className='text-[#979797] text-[15px] font-normal'>@mikachan · 32m</div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-[24px] h-[24px]'>
                            <Image className='object-contain' src={threeDotsIcon} alt={''} />
                        </div>
                        <div className='w-[24px] h-[24px]'>
                            <Image className='object-contain' src={crossIcon} alt={''} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1 p-2 rounded-[12px]'>
                    <div className='text-[#FFFFFF] text-[14px] font-normal'>Hello dears, my mood today is 🤗</div>
                    <div className='flex gap-[6px]'>
                        <div className='text-[#8C7DD0] text-[14px] font-normal'>#girl</div>
                        <div className='text-[#8C7DD0] text-[14px] font-normal'>#mood</div>
                        <div className='text-[#8C7DD0] text-[14px] font-normal'>#relaxtime</div>
                    </div>
                </div>
                <div className='flex gap-3 p-2'>
                    <div className='flex gap-[6px] px-3 py-2 rounded-[100px] bg-[#FF5336]/[0.16]'>
                        <Image className='fill-[#F44E32] w-[20px] h-[20px] object-contain' src={heartIcon} alt={''} />
                        <div className='text-[#F44E32] text-[15px] font-normal'>2</div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BookMarks2
