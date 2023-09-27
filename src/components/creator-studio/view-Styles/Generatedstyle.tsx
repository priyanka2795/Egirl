import React, { useState } from 'react';
import ViewStylesTab from './ViewStylesTab';
import Image from 'next/image';
import img1 from '../../../../public/assets/view-style-img1.png';
import img2 from '../../../../public/assets/view-style-img2.png';
import img3 from '../../../../public/assets/view-style-img3.png';
import ViewStyleModal from '../style-generator/ViewStyleModal';
import modalImg from '../../../../public/assets/view-style-modal-img.png';
import pen from '../../../../public/assets/pen2.png';
import PostStyleModal from './PostStyleModal';

interface GeneratedstyleProp {
  setGeneratedStyle?: (value: boolean) => void;
  setViewStyleGenerated?: (value: boolean) => void;
  ViewStyle?: boolean;
}

const generatedStyle = [
  {
    image: img1,
    name: 'A-Zovya Photoreal',
    ratings: '5.0',
    button1: 'Handbag',
    button2: 'Clothing',
    button3: 'Dress'
  },
  {
    image: img2,
    name: 'A-Zovya Photoreal',
    ratings: '4.8',
    button1: 'General',
    button2: 'Anime',
    button3: 'Dress'
  },
  {
    image: img3,
    name: 'A-Zovya Photoreal',
    ratings: '4.2',
    button1: 'Clothing',
    button2: 'Handbag',
    button3: 'Dress'
  },
  {
    image: img1,
    name: 'A-Zovya Photoreal',
    ratings: '5.0',
    button1: 'Handbag',
    button2: 'Clothing',
    button3: 'Dress'
  },
  {
    image: img2,
    name: 'A-Zovya Photoreal',
    ratings: '4.8',
    button1: 'General',
    button2: 'Anime',
    button3: 'Dress'
  },
  {
    image: img3,
    name: 'A-Zovya Photoreal',
    ratings: '4.2',
    button1: 'Clothing',
    button2: 'Handbag',
    button3: 'Dress'
  }
];

const Generatedstyle = ({
  setGeneratedStyle,
  setViewStyleGenerated,
  ViewStyle
}: GeneratedstyleProp) => {
  const [viewStyleModal, setViewStyleModal] = useState(false);
  const [postStyleModal, setPostStyleModal] = useState(false);
  return (
    <>
      <ViewStylesTab
        component={'GeneratedStyle'}
        setGeneratedStyle={setGeneratedStyle}
        setViewStyleGenerated={setViewStyleGenerated}
        ViewStyle={ViewStyle}
      />
      <div className='mb-14 mt-5 grid grid-cols-3 gap-3'>
        {generatedStyle.map((item, index) => {
          return (
            <div
              key={index}
              className='group relative flex flex-col overflow-hidden rounded-[16px] bg-white/[0.05]'
            >
              <Image
                onClick={() => {
                  setViewStyleModal(true);
                }}
                className='h-[347px] w-[350px]'
                src={item.image}
                alt={''}
              />
              <div className='flex flex-col gap-3 p-4'>
                <div className='text-[15px] font-semibold leading-5 text-white'>
                  {item.name}
                </div>
                <div className='flex gap-2'>
                  <div className='rounded-[8px] bg-white/[0.08] px-[10px] py-1 text-[13px] font-normal leading-[18px]'>
                    {item.button1}
                  </div>
                  <div className='rounded-[8px] bg-white/[0.08] px-[10px] py-1 text-[13px] font-normal leading-[18px]'>
                    {item.button2}
                  </div>
                  <div className='rounded-[8px] bg-white/[0.08] px-[10px] py-1 text-[13px] font-normal leading-[18px]'>
                    {item.button1}
                  </div>
                </div>
              </div>
              <div className='invisible absolute right-[12px] top-[10px] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-black/[0.48] group-hover:visible group-hover:opacity-100'>
                <Image className='' src={pen} alt={''} />
              </div>
            </div>
          );
        })}
      </div>
      {viewStyleModal && (
        <ViewStyleModal
          image={modalImg}
          setViewStyleModal={setViewStyleModal}
          postStyleModal={postStyleModal}
          setPostStyleModal={setPostStyleModal}
          component={'GeneratedStyle'}
        />
      )}
      {postStyleModal && (
        <PostStyleModal setPostStyleModal={setPostStyleModal} />
      )}
    </>
  );
};

export default Generatedstyle;
