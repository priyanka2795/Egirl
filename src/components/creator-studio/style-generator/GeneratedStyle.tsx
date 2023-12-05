import Image from 'next/image';
import React, { useState } from 'react';
import arrowLeft from '@/assets/arrow-left.webp';
import floderImg1 from '@/assets/folder4-img1.webp';
import floderImg2 from '@/assets/folder1-img2.webp';
import floderImg3 from '@/assets/folder1-img3.webp';
import floderImg4 from '@/assets/folder1-img4.webp';
import floderImg5 from '@/assets/folder2-img1.webp';
import floderImg6 from '@/assets/folder2-img2.webp';
import floderImg7 from '@/assets/folder2-img3.webp';
import floderImg8 from '@/assets/folder2-img4.webp';
import floderImg9 from '@/assets/folder3-img1.webp';
import floderImg10 from '@/assets/folder3-img2.webp';
import floderImg11 from '@/assets/folder3-img3.webp';
import floderImg12 from '@/assets/folder3-img4.webp';
import floderImg13 from '@/assets/folder4-img1.webp';
import floderImg14 from '@/assets/folder4-img2.webp';
import floderImg15 from '@/assets/folder4-img3.webp';
import floderImg16 from '@/assets/folder4-img4.webp';
import Generatedstyle from '../view-Styles/Generatedstyle';

interface GeneratedStyleProps {
  setGeneratedStyle: (value: boolean) => void;
  setViewStyleGenerated: (value: boolean) => void;
}

const generatedStyle = [
  {
    img1: floderImg1,
    img2: floderImg2,
    img3: floderImg3,
    img4: floderImg4,
    name: 'Any Lee',
    button: 'Character',
    completed: '52% to complete',
    time: '~7 min',
    width: '50%'
  },
  {
    img1: floderImg5,
    img2: floderImg6,
    img3: floderImg7,
    img4: floderImg8,
    name: 'Red dress',
    button: 'Clothing',
    completed: '10% to complete',
    time: '~9 min',
    width: '10%'
  },
  {
    img1: floderImg9,
    img2: floderImg10,
    img3: floderImg11,
    img4: floderImg12,
    name: 'White bag',
    button: 'Accessories',
    completed: '95% to complete',
    time: '~1 min',
    width: '95%'
  },
  {
    img1: floderImg13,
    img2: floderImg14,
    img3: floderImg15,
    img4: floderImg16,
    name: 'White bag',
    button: 'Accessories',
    completed: '95% to complete',
    time: '~1 min',
    width: '95%'
  }
];

const GeneratedStyle = ({
  setGeneratedStyle,
  setViewStyleGenerated
}: GeneratedStyleProps) => {
  return (
    <>
      <div className='flex flex-col gap-5'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <Image
              className='object-contain'
              onClick={() => {
                setGeneratedStyle(false);
              }}
              src={arrowLeft}
              alt={''}
            />
            <div className='text-[22px] font-bold leading-8 text-white'>
              Styles Being Generated
            </div>
          </div>
          <button
            className='items-center justify-center rounded-[14px] bg-white/[0.08] px-5 py-[13px] text-[16px] font-bold leading-[22px] text-white'
            onClick={() => {
              setViewStyleGenerated(true);
            }}
          >
            View Generated
          </button>
        </div>
        <div className='grid grid-cols-3 gap-5'>
          {generatedStyle.map((item, index) => {
            return (
              <div
                key={index}
                className='flex flex-col overflow-hidden rounded-[14px]'
              >
                <div className='grid grid-cols-2'>
                  <Image src={item.img1} alt={''} />
                  <Image src={item.img2} alt={''} />
                  <Image src={item.img3} alt={''} />
                  <Image src={item.img4} alt={''} />
                </div>
                <div className='flex flex-col gap-5 bg-[#121212] p-5'>
                  <div className='flex justify-between'>
                    <div className='text-[18px] font-bold leading-6 text-white'>
                      {item.name}
                    </div>
                    <button className='rounded-[8px] bg-white/[0.08] px-[10px] py-1 text-[13px] font-normal leading-[18px] text-white'>
                      {item.button}
                    </button>
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <div className='flex justify-between'>
                      <div className='text-[13px] font-normal leading-[18px] text-white'>
                        {item.completed}
                      </div>
                      <div className='text-[13px] font-normal leading-[18px] text-[#979797]'>
                        {item.time}
                      </div>
                    </div>
                    <div className='h-2 overflow-hidden rounded-[100px] bg-[#5848BC]/[0.24]'>
                      <div
                        className={`w-[${item.width}] flex h-full bg-[#7362C6]`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GeneratedStyle;
