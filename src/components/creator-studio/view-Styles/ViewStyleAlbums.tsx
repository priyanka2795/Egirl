import React from 'react';
import albumImg1 from '@/assets/view-style-album-img1.webp';
import albumImg2 from '@/assets/view-style-album-img2.webp';
import albumImg3 from '@/assets/view-style-album-img3.webp';
import Image from 'next/image';

interface ViewStyleAlbumsProps {
  setGeneratedStyle: React.Dispatch<React.SetStateAction<boolean>>;
  setAddedStyle: React.Dispatch<React.SetStateAction<boolean>>;
  setPostedStyle: React.Dispatch<React.SetStateAction<boolean>>;
}

const album = [
  {
    image: albumImg1,
    name: 'Generated Styles',
    number: 8
  },
  {
    image: albumImg2,
    name: 'Added Styles',
    number: 2
  },
  {
    image: albumImg3,
    name: 'Posted Styles',
    number: 12
  }
];

const ViewStyleAlbums = ({
  setGeneratedStyle,
  setAddedStyle,
  setPostedStyle
}: ViewStyleAlbumsProps) => {
  return (
    <div className='flex items-center justify-center'>
    <div className='flex flex-col w-full gap-4 mt-5'>
      <div className='text-[18px] font-bold leading-6 text-white'>Albums</div>
      <div className='grid grid-cols-3 gap-3'>
        {album.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {index === 0 ? (
                <div
                  key={index}
                  className='relative View-Styles-Image'
                  onClick={() => {
                    setGeneratedStyle(true);
                  }}
                >
                  <Image className='rounded-[16px] w-full h-full' src={item.image} alt={''} />
                  <div className='absolute top-[177px] flex w-full justify-between px-[19px] pb-3'>
                    <div className='text-[15px] font-semibold leading-5 text-white'>
                      {item.name}
                    </div>
                    <div className='text-[15px] font-semibold leading-5 text-white'>
                      {item.number}
                    </div>
                  </div>
                </div>
              ) : index === 1 ? (
                <div
                  key={index}
                  className='relative View-Styles-Image'
                  onClick={() => {
                    setAddedStyle(true);
                  }}
                >
                  <Image className='rounded-[16px]' src={item.image} alt={''} />
                  <div className='absolute top-[177px] flex w-full justify-between px-[19px] pb-3'>
                    <div className='font-semibols text-[15px] leading-5 text-white'>
                      {item.name}
                    </div>
                    <div className='font-semibols text-[15px] leading-5 text-white'>
                      {item.number}
                    </div>
                  </div>
                </div>
              ) : index === 2 ? (
                <div
                  key={index}
                  className='relative View-Styles-Image'
                  onClick={() => {
                    setPostedStyle(true);
                  }}
                >
                  <Image className='rounded-[16px]' src={item.image} alt={''} />
                  <div className='absolute top-[177px] flex w-full justify-between px-[19px] pb-3'>
                    <div className='font-semibols text-[15px] leading-5 text-white'>
                      {item.name}
                    </div>
                    <div className='font-semibols text-[15px] leading-5 text-white'>
                      {item.number}
                    </div>
                  </div>
                </div>
              ) : (
                <div key={index} className='relative'>
                  <Image className='rounded-[16px] w-full h-ful' src={item.image} alt={''} />
                  <div className='absolute top-[177px] flex w-full justify-between px-[19px] pb-3'>
                    <div className='font-semibols text-[15px] leading-5 text-white'>
                      {item.name}
                    </div>
                    <div className='font-semibols text-[15px] leading-5 text-white'>
                      {item.number}
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
    </div> 
  );
};

export default ViewStyleAlbums;
