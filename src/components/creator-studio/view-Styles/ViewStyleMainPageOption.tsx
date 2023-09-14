import Image from 'next/image';
import React from 'react';
import banner from '../../../../public/assets/view-style-banner.png';
import avatar from '../../../../public/assets/view-style-banner-avatar.png';
import blueTick from '../../../../public/assets/badge-check2.png';
import threeDots from '../../../../public/assets/dots-horizontal4.png';



const ViewStyleMainPageOption = () => {
  return (
    <div className='relative flex flex-col rounded-[16px] bg-[#121212] overflow-hidden'>
      <div>
        <Image src={banner} alt={''} />
      </div>
      <div className='flex flex-col gap-[22px] pb-6 items-center mt-[70px]'>
        <div className='flex flex-col'>
            <div className='flex gap-1'>
                <div className='text-white text-[22px] font-bold leading-8'>Gayle Frami</div>
                <div className='flex items-center justify-center px-0 py-1'>
                    <Image src={blueTick} alt={''} />
                </div>
            </div>
            <div className='flex gap-3'>
                <div className='text-[#979797] text-[15px] font-normal leading-5'>@mikachan</div>
                <div className='flex gap-1'>
                    <div className='text-white text-[13px] font-bold leading-[18px]'>2.17K</div>
                    <div className='text-[#979797] text-[13px] font-normal leading-[18px]'>Followers</div>
                </div>
            </div>
        </div>
        <div className='flex gap-3'>
            <button className='flex px-4 py-[10px] justify-center items-center rounded-[12px] bg-[#5848BC] text-white text-[14px] font-bold leading-5'>Follow</button>
            <button className='flex px-4 py-[10px] justify-center items-center rounded-[12px] bg-white/[0.08] text-white text-[14px] font-bold leading-5'>View profile</button>
            <button className='flex items-center rounded-[12px] bg-white/[0.08] p-[11px]'>
                <Image src={threeDots} alt={''} />
            </button>
        </div>
      </div>
      <div className='absolute top-[118px] right-[436px]'>
        <Image className='rounded-[100px]' src={avatar} alt={''} />
      </div>
      
    </div>
  )
}

export default ViewStyleMainPageOption;
