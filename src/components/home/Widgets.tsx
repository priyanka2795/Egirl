import SearchIcon from '../common/Search/SearchIcon';
import useScroll from '../../../hooks/useScroll';
import YouMightLike from './YouMightLike';
import { useState } from 'react';
import UserSection from '@components/list/UserSection';
import Slider from 'react-slick';
import UserFrame from '@components/list/UserFrame';
import arrowLeft from '../../../public/assets/arrow-narrow-left.png'
import arrowRight from '../../../public/assets/arrow-narrow-right.png'
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import blueDressGirl from '../../../public/assets/blue-dress-girl.png';


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
      <div
        className={`sticky z-50  ${
          sticky && animate ? 'top-0' : '-top-[108px]'
        } h-[108px] max-w-[376px] bg-main-background transition-all duration-[300ms] ease-in lg:min-w-[376px]`}
      >
        <div className='mr-2 w-full max-w-[376px] pb-5 pt-6'>
          <div className='flex h-[64px] items-center justify-between rounded-r-[14px] bg-main-bar'>
            <div className='relative w-full mr-2 group'>
              <div className='absolute left-4 top-3'>
                <SearchIcon
                  strokeClasses={`${
                    isInputActive ? 'stroke-[#5848BC]' : 'stroke-[#515151]'
                  } transition duration-100`}
                />
              </div>
              <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className='py-auto mr-2 h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] font-light leading-6 text-[#979797] transition duration-100 focus:ring-1 focus:ring-[#5848BC]'
                type='text'
                placeholder='Search'
              />
            </div>
          </div>
        </div> 
      </div>

      <div className={`sticky top-0 max-w-[376px]`}>
      <div className='bg-[#121212] rounded-[14px] w-full h-max'>
                <div className='flex justify-between p-6 border-b border-white/[0.08]'>
                    <div className='text-[#FFFFFF] text-[18px] font-bold'>You might like</div>
                    <div className='flex gap-3'>
                        <Image src={arrowLeft} alt={''} />
                        <Image src={arrowRight} alt={''} />
                    </div>
                </div>
                <div className='px-6 py-6 bookmark-img-text'>
                    <div className='h-[286px] profile-like-slider'>
                    <Slider {...settings}>
                      <div className='h-[286px] w-[328px]'>
                        <Image className='h-[286px] w-[328px]' src={blueDressGirl} alt={''} />
                      </div>
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
