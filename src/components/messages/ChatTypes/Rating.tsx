import React from 'react';
import StarIcon from '../svg/star-icon.svg';
import Link from 'next/link';

interface RatingProp {
  selectedStars: number;
  handleStarHover: (starCount: number) => void;
  handleStarClick: (starCount: number) => void;
  handleStarHoverOut: (starCount: number) => void;
}
const Rating = ({
  selectedStars,
  handleStarHover,
  handleStarClick,
  handleStarHoverOut
}: RatingProp) => {
  return (
    <div
      className='flex justify-between cursor-pointer rating'
      onMouseLeave={() => {handleStarHover(0)}}
    >
      <Link href='#'>
        <StarIcon
          className={`${selectedStars >= 1 ? 'goldenSvg' : ''}`}         
          onMouseEnter={() => handleStarHover(0)}
          onClick={() => handleStarClick(1)}
        />
      </Link>

      <Link href='#'>
        <StarIcon
          className={`${selectedStars >= 2 ? 'goldenSvg' : ''}`}
          onMouseEnter={() => handleStarHover(2)}          
          onClick={() => handleStarClick(2)}
        />
      </Link>

      <Link href='#'>
        <StarIcon
          className={`${selectedStars >= 3 ? 'goldenSvg' : ''}`}
          onMouseEnter={() => handleStarHover(3)}
          onClick={() => handleStarClick(3)}
        />
      </Link>

      <Link href='#'>
        <StarIcon
          className={`${selectedStars >= 4 ? 'goldenSvg' : ''}`}
          onMouseEnter={() => handleStarHover(4)}
          onClick={() => handleStarClick(4)}
        />
      </Link>

      <Link href='#'>
        <StarIcon
          className={`${selectedStars >= 5 ? 'goldenSvg' : ''}`}
          onMouseEnter={() => handleStarHover(5)}
          onClick={() => handleStarClick(5)}
        />
      </Link>
    </div>
  );
};

export default Rating;
