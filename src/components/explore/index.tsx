import React, { useState } from 'react';
import CardSlider from './CardSlider';
import ExploreTabs from './ExploreTabs';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrowLeftImg from '../../../public/assets/img-arrow-left.png';
import arrowRightImg from '../../../public/assets/img-arrow-right.png';
import subscribeImg from '../../../public/assets/subscribe-arrow-up.png';
import previousImg from '../../../public/assets/previous-img.png';
import nextImg from '../../../public/assets/next-img.png';
import mikaChanImg from '../../../public/assets/mikaChan.png';
import sarahScarlet from '../../../public/assets/sarahScarlet.png';
import galleryTabImg3 from '../../../public/assets/gallery-tab-img.png';
import galleryTabImg4 from '../../../public/assets/mirandalImg.png';
import galleryTabImg5 from '../../../public/assets/gallery-tab-img-2.png';
import galleryTabImg6 from '../../../public/assets/gallery-tab-img-3.png';
import mikaChan from '../../../public/assets/mikaChan.png';
import Image from 'next/image';
import Card from './Card';
import GalleryTabFilter from './GalleryTabFilter';
import SubscriptionPlan from './SubscriptionPlan';
import TinderCard from './TinderCardSlider';
import TinderCardSlider from './TinderCardSlider';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const exploreOptions = [
  {
    id: 1,
    images: arrowLeftImg,
    title: 'Nope'
  },
  {
    id: 2,
    images: arrowRightImg,
    title: 'Like'
  },
  {
    id: 3,
    images: subscribeImg,
    title: 'Subscribe'
  },
  {
    id: 4,
    images: previousImg,
    title: 'Previous picture'
  },
  {
    id: 5,
    images: nextImg,
    title: 'Next Picture'
  }
];



const ExploreIndex = () => {
  const [filterOptionShow, setFilterOptionShow] = useState(true);
  const [exploreSelectedTab, setExploreSelected] = useState('Swipe');
  const [defaultModal, setDefaultModal] = useState(false);

  return (
    <>
      <div>
        <ExploreTabs
          exploreTab={exploreSelectedTab}
          setExploreSelectedTab={setExploreSelected}
        />
        <p onClick={() => setDefaultModal(true)}>Default Modal</p>
        {defaultModal && (
          <SubscriptionPlan closeDefaulModal={setDefaultModal} />
        )}

        {exploreSelectedTab === 'Swipe' ? (
          <>
            <div className='explore-slider'>
              <Slider {...settings}>
                <CardSlider />
                <CardSlider /> 
                <CardSlider />
              </Slider>
            </div>
            {/* <TinderCardSlider /> */}

            <div className='mb-[32px] mt-[77px] flex justify-center gap-2 items-start'>
              <div
                className='flex cursor-pointer gap-2 rounded-[10px] bg-white/10 px-4 py-[7px] font-bold text-white'
                onClick={() => setFilterOptionShow(!filterOptionShow)}
              >
                <p>Hide</p>
              </div>
              {
                exploreOptions.map((item) => {
                  return (
                    <div className={`${filterOptionShow === true ? "opacity-100" : "opacity-0 invisible"} pointer-events-none flex cursor-pointer gap-2 rounded-[10px] px-4 py-[7px] font-semibold text-[#979797]`}>
                      <Image
                        src={item.images}
                        alt=''
                        className='object-contain'
                      />
                      <p>{item.title}</p>
                    </div>
                  );
                })}
            </div>
          </>
        ) : (
          <div className='px-8'>
            <GalleryTabFilter />
          </div>
        )}
      </div>
    </>
  );
};

export default ExploreIndex;
