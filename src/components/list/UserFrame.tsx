import React from 'react';
import userFrameImg1 from '../../../public/assets/messages/grid-img-4.png';
import userFrameImg2 from '../../../public/assets/messages/grid-img-2.png';
import userFrameImg3 from '../../../public/assets/messages/grid-img-15.png';
import Image from 'next/image';

const userFrame = [
  {
    image: userFrameImg1,
    name: 'Anna Quigley',
    userName: '@sheisannaquigley'
  },
  {
    image: userFrameImg2,
    name: 'Anna Quigley',
    userName: '@sheisannaquigley'
  },
  {
    image: userFrameImg3,
    name: 'Anna Quigley',
    userName: '@sheisannaquigley'
  }
];

const UserFrame = () => {
  return (
    <div>
      <div>
        {userFrame.map((item, index) => {
          return (
            <div className='mt-6 flex w-[328px] gap-4' key={index}>
              <div className='h-[50px] w-[50px]'>
                <Image
                  className='h-full w-full rounded-[100px]'
                  src={item.image}
                  alt={''}
                />
              </div>
              <div className='flex w-[126px] flex-col gap-[2px]'>
                <div className='text-[15px] font-semibold leading-5 text-[#FFFFFF]'>
                  {item.name}
                </div>
                <div className='text-sm font-normal leading-[18px] text-[#979797]'>
                  {item.userName}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserFrame;
