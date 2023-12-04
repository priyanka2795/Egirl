import React from 'react';
import Image from 'next/image';
import arrowRight from '@/assets/chevron-right-small.webp';
import arrowLeft from '@/assets/arrow-left-grey.webp';

interface BreadCrumbProps {
  title: string;
}
const BreadCrumbs = ({ title }: BreadCrumbProps) => {
  return (
    <div className='flex items-center py-2'>
      <Image src={arrowLeft} alt='' />
      <span className='pl-1 text-[15px] text-[#979797]'>Learning Center</span>
      <Image src={arrowRight} alt='' />
      <span className='text-[15px] font-semibold text-white'>{title}</span>
    </div>
  );
};

export default BreadCrumbs;
