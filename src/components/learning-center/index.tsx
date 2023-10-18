import React from 'react';
import Image from 'next/image';
import banner1 from '../../../public/assets/learning-center/learningBanner1.png';
import banner2 from '../../../public/assets/learning-center/learningBanner2.png';
import banner3 from '../../../public/assets/learning-center/learningBanner3.png';
import CreationCards from './Home/CreationCards';
const LearningCenter = () => {
  return (
    <div className='px-6'>
      <Image src={banner1} alt='' />
      <div>
        <CreationCards />
      </div>
      <div className='mb-6 mt-8'>
        <Image src={banner2} alt='' />
      </div>
      <div className='mb-6'>
        <Image src={banner3} alt='' />
      </div>
    </div>
  );
};

export default LearningCenter;
