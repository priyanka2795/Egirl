import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const MessageSlider = () => {
  const [slideCount, setSlideCount] = useState(0);

  var settings = {
    customPaging: function (i: number) {
      setSlideCount(i + 1);
      return <a>{i + 1}</a>;
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider>
      <p>total slides: {slideCount}</p>
    </div>
  );
};

export default MessageSlider;
