import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import threeDotsIcon from '../../../public/assets/three-dots-icon.png'
import avatar from '../../../public/assets/avatar.png'
import micaChanFullImg from '../../../public/assets/mica-chan-full-img.png'
import locationIcon from '../../../public/assets/location-icon.png'
import bookmarkIcon from '../../../public/assets/bookmark.png'
import shareIcon from '../../../public/assets/share-icon.png'
import messageIcon from '../../../public/assets/message-square.png' 
import heartIcon from '../../../public/assets/unfilled-heart.png'
import Slider from 'react-slick';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
const PostCard = () => {
    const tabContent = ['Preview', 'Chat' , 'Posts' , 'Media'];
    const [exploreSelectedTab, setExploreSelected] = useState("Preview");

    const handleExploreSelected = (e: any) => {
        setExploreSelected(e.target.innerText);
    };

  return (
    <div>
        <div className='w-[560px] bg-[#121212] rounded-[14px] mt-5'>
            <div className='flex w-full gap-3 px-6 pt-6 pb-[20px] border-b border-white/[0.08]'>
            {tabContent.map((items, index) => {
             return (
            <div
              key={index}
              onClick={(e) => handleExploreSelected(e)}
              className={`flex cursor-pointer gap-3 rounded-xl px-4 py-2 text-[15px] font-bold ${
                exploreSelectedTab === items
                  ? ' bg-white/[0.16] bg-opacity-20 text-white  '
                  : 'text-[#979797]'
              }`}
            >
              {items}
            </div>
          );
        })}
            </div>
            <div className='p-6'>
                <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <div className='w-[40px] h-[40px]'>
                        <Image src={avatar} alt={''} />
                    </div>
                    <div className='flex gap-2 mt-2'>
                        <div className='text-[#FFFFFF] text-base font-bold'>Mika-chan</div>
                        <div className='text-[#979797] text-sm font-normal'>@mikachan • 6h</div>
                    </div>
                </div>
                <div className=''>
                    <Image src={threeDotsIcon} alt={''} />
                </div>
                </div>
                <div className='mt-4'>
                <div className='text-[#FFFFFF] text-sm font-normal'>Hello dears, my mood today is 🤗</div>
                <div className='flex gap-[6px]'>
                    <div className='text-[#8C7DD0] text-sm font-normal'>#girl</div>
                    <div className='text-[#8C7DD0] text-sm font-normal'>#mood</div>
                    <div className='text-[#8C7DD0] text-sm font-normal'>#relaxtime</div>
                </div>
                </div>
                <div className='mt-4 w-full h-[512px] rounded-[14px] list-slider list-slider-dots'>
                <Slider {...settings}>
                <Image className='rounded-[14px]' src={micaChanFullImg} alt={''} />
                <Image className='rounded-[14px]' src={micaChanFullImg} alt={''} />
                <Image className='rounded-[14px]' src={micaChanFullImg} alt={''} />
                <Image className='rounded-[14px]' src={micaChanFullImg} alt={''} />
                </Slider>
                </div>
                <div className='flex gap-2 mt-4'>
                    <Image className='object-contain' src={locationIcon} alt={''} />
                    <div className='text-sm font-normal text-[#FFFFFF]'>Warsaw, Old Town</div>
                </div>
                <div className='flex justify-between mt-4'>
                    <div className='flex gap-3'>
                        <div className='flex px-3 py-2 gap-[6px] rounded-[100px] bg-white/[0.08]'>
                            <Image className='object-contain' src={heartIcon} alt={''} />
                            <div className='text-[#FFFFFF] text-[15px] font-normal'>6.2k</div>
                        </div>
                        <div className='flex px-3 py-2 gap-[6px] rounded-[100px] bg-white/[0.08]'>
                            <Image className='object-contain' src={messageIcon} alt={''} />
                            <div className='text-[#FFFFFF] text-[15px] font-normal'>98</div>
                        </div>
                        <div className='flex px-3 py-2 gap-[6px] rounded-[100px] bg-white/[0.08]'>
                            <Image className='object-contain' src={bookmarkIcon} alt={''} />
                        </div>
                        <div className='flex px-3 py-2 gap-[6px] rounded-[100px] bg-white/[0.08]'>
                            <Image className='object-contain' src={shareIcon} alt={''} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default PostCard
