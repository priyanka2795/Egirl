//@ts-nocheck

import React, { useEffect, useState } from 'react';
import CardSlider from './CardSlider';
import ExploreTabs from './ExploreTabs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrowLeftImg from '@/assets/img-arrow-left.webp';
import arrowRightImg from '@/assets/img-arrow-right.webp';
import subscribeImg from '@/assets/subscribe-arrow-up.webp';
import previousImg from '@/assets/previous-img.webp';
import nextImg from '@/assets/next-img.webp';
import mikaChanImg from '@/assets/mikaChan.webp';
import sarahScarlet from '@/assets/sarahScarlet.webp';
import galleryTabImg3 from '@/assets/gallery-tab-img.webp';
import galleryTabImg4 from '@/assets/mirandalImg.webp';
import galleryTabImg5 from '@/assets/gallery-tab-img-2.webp';
import galleryTabImg6 from '@/assets/gallery-tab-img-3.webp';
import mikaChan from '@/assets/mikaChan.webp';
import Image from 'next/image';
import Card from './Card';
import GalleryTabFilter from './GalleryTabFilter';
import SubscriptionPlan from './SubscriptionPlan';
import TinderCard from './TinderCardSlider';
import TinderCardSlider from './TinderCardSlider';
import CardStack from './CardStack';
import Banner from '@components/list/Banner';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { exploreSwipe } from 'services/services';

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
  const token: any = Cookies.get('accessToken');
  const [filterOptionShow, setFilterOptionShow] = useState(true);
  const [exploreSelectedTab, setExploreSelected] = useState('Swipe');
  const [defaultModal, setDefaultModal] = useState(false);
  const [singleProfileState, setSingleProfileState] = useState(false);
  const [swipeData, setSwipeData] = useState<any>();

  useEffect(() => {
    exploreSwipe(1, 10, token)
      .then((res: any) => {
        setSwipeData(res?.data);
        console.log(res, 'exploreSwiperes????');
      })
      .catch((err) => {
        console.log(err, 'exploreSwipeErr????');
      });
  }, []);

  return (
    <>
      {singleProfileState ? (
        <Banner backFromProfile={() => setSingleProfileState(false)} />
      ) : (
        <div>
          <ExploreTabs
            exploreTab={exploreSelectedTab}
            setExploreSelectedTab={setExploreSelected}
          />
          {exploreSelectedTab === 'Swipe' ? (
            <>
              <CardStack showSingleProfile={setSingleProfileState} />
              <div className='mb-[32px] mt-[77px] flex items-start justify-center gap-2'>
                <div
                  className='font-bold flex cursor-pointer gap-2 rounded-[10px] bg-white/10 px-4 py-[7px] text-white'
                  onClick={() => setFilterOptionShow(!filterOptionShow)}
                >
                  <p>Hide</p>
                </div>
                {exploreOptions.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        filterOptionShow === true
                          ? 'opacity-100'
                          : 'invisible opacity-0'
                      } pointer-events-none flex cursor-pointer gap-2 rounded-[10px] px-4 py-[7px] font-semibold text-[#979797]`}
                    >
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
              <GalleryTabFilter
                singleProfileState={singleProfileState}
                setSingleProfileState={setSingleProfileState}
                userId='57713333-24df-4eaf-8070-ff4599b6061c'
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ExploreIndex;
