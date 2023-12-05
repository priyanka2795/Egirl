import SearchIcon from '../common/Search/SearchIcon';
import useScroll from '../../../hooks/useScroll';
import YouMightLike from './YouMightLike';
import { useState } from 'react';
import UserSection from '@components/list/UserSection';
import Slider from 'react-slick';
import UserFrame from '@components/list/UserFrame';
import arrowLeft from '@/assets/arrow-narrow-left.webp';
import arrowRight from '@/assets/arrow-narrow-right.webp';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePageSlider from './HomePageSlider';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function Widgets() {
  const [sticky, animate] = useScroll();

  // search state
  const [isInputActive, setInputActive] = useState(false);
  const handleInputFocus = () => setInputActive(true);
  const handleInputBlur = () => setInputActive(false);

  return (
    <div className='hidden bg-main-background lg:inline xl:w-[376px]'>
      {/* <div
        className={`sticky z-50 ${
          sticky && animate ? 'top-0' : '-top-[108px]'
        } h-[108px] max-w-[376px] bg-main-background transition-all duration-[300ms] ease-in lg:min-w-[376px]`}
      >
        <div className='mr-2 w-full max-w-[376px] pb-5 pt-6'>
          <div className='flex h-[64px] items-center justify-between rounded-r-[14px] bg-main-bar'>
            <div className='relative w-full mr-2 group'>
              <div className='absolute left-4 top-3'>
                <SearchIcon
                  strokeclasses={`${
                    isInputActive ? 'stroke-[#5848BC]' : 'stroke-[#515151]'
                  } transition duration-100`}
                />
              </div>
              <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className='py-auto font-light mr-2 h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] leading-6 text-[#979797] transition duration-100 focus:ring-1 focus:ring-[#5848BC]'
                type='text'
                placeholder='Search'
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className={`sticky top-0 max-h-[426px] max-w-[376px]`}>
        <div className='h-full w-full rounded-[14px] bg-[#121212]'>
          <div className='flex justify-between border-b border-white/[0.08] p-6'>
            <div className='font-bold text-[18px] text-[#FFFFFF]'>
              You might like 
            </div>
            <div className='flex gap-3'>
              <Image src={arrowLeft} alt={''} />
              <Image src={arrowRight} alt={''} />
            </div>
          </div>
          <div className='h-full p-6 bookmark-img-text'>
            <div className='relative h-full profile-like-slider home-page-slider'>
              <Slider {...settings}>
                <UserFrame />
                <UserFrame />
                <UserFrame />
                <HomePageSlider />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// used to have margin left of 8 (32px)
// <div className='ml-8 hidden space-y-5 bg-orange-400 lg:inline xl:w-[600px]'>
