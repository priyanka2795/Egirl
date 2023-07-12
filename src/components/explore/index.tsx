import React from 'react';
import CardSlider from './CardSlider';
import ExploreTabs from './ExploreTabs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const ExploreIndex = () => {
  return (
    <div>
      <ExploreTabs />

      <div className='explore-slider'>
        <Slider {...settings}>
          <CardSlider />
          <CardSlider />
          <CardSlider />
        </Slider>
      </div>
    </div>
  );
};

export default ExploreIndex;
