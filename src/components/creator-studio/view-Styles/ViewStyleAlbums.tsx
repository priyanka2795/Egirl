import React from 'react';
import albumImg1 from '../../../../public/assets/view-style-album-img1.png';
import albumImg2 from '../../../../public/assets/view-style-album-img2.png';
import albumImg3 from '../../../../public/assets/view-style-album-img3.png';
import Image from 'next/image';

interface ViewStyleAlbumsProps {
  setGeneratedStyle: any;
  setAddedStyle: any;
  setPostedStyle: any;
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
    <div className='mt-5 flex flex-col gap-4'>
      <div className='text-[18px] font-bold leading-6 text-white'>Albums</div>
      <div className='grid grid-cols-3 gap-3'>
        {album.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {index === 0 ? (
                <div
                  key={index}
                  className='relative'
                  onClick={() => {
                    setGeneratedStyle(true);
                  }}
                >
                  <Image className='rounded-[16px]' src={item.image} alt={''} />
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
                  className='relative'
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
                  className='relative'
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
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ViewStyleAlbums;
