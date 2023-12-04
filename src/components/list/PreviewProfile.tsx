import React from 'react';
import Image from 'next/image';
import Cover from '@/assets/cover-1.webp';
import avatar from '@/assets/mika-chan-sub-banner.webp';
function PreviewProfile({ cropData }: any) {
  return (
    <div className='h-max w-full overflow-hidden rounded-[16px] bg-[#1c1c1c]'>
      <div className='block w-full sub-banner'>
        <img
          className='w-full h-full '
          src={cropData}
          alt=''
          style={{ height: '170px', objectFit: 'fill' }}
        />

        <div className='mb-5 mt-[-62px] flex w-full items-center justify-between px-[24px]'>
          <div className='relative h-[120px] w-[120px] overflow-hidden rounded-full'>
            <Image className='w-full h-full' src={avatar} alt='' />
          </div>
        </div>
        <div className='mb-3 ml-[30px] mt-[-10px]'>
          <div className='text-[22px] font-bold text-[#FFFFFF]'>Mika-chan</div>
          <div className='text-[15px] font-normal text-[#979797]'>
            @mikachan
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewProfile;
