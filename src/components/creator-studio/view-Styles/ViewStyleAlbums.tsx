import React from 'react';
import albumImg1 from '../../../../public/assets/view-style-album-img1.png'
import albumImg2 from '../../../../public/assets/view-style-album-img2.png'
import albumImg3 from '../../../../public/assets/view-style-album-img3.png'
import Image from 'next/image';

interface ViewStyleAlbumsProps {
    setGeneratedStyle: any;
};

const album = [
    {
        image: albumImg1,
        name: 'Generated Styles',
        number: 8,
    },
    {
        image: albumImg2,
        name: 'Added Styles',
        number: 2,
    },
    {
        image: albumImg3,
        name: 'Posted Styles',
        number: 12,
    }
];

const ViewStyleAlbums = ( {setGeneratedStyle} : ViewStyleAlbumsProps) => {
  return (
    <div className='flex flex-col gap-4 mt-5'>
        <div className='text-white text-[18px] font-bold leading-6'>Albums</div>
        <div className='grid grid-cols-3 gap-3'>
            {album.map((item,index) => {
                return (
                <>
                  {
                    index === 0 ? 
                        <div key={index} className='relative' onClick={() => {setGeneratedStyle(true)}}>
                            <Image className='rounded-[16px]' src={item.image} alt={''} />
                            <div className='absolute w-full top-[177px] pb-3 px-[19px] flex justify-between'>
                                <div className='text-white text-[15px] font-semibols leading-5'>{item.name}</div>
                                <div className='text-white text-[15px] font-semibols leading-5'>{item.number}</div>
                            </div>
                        </div> :
                        <div key={index} className='relative'>
                <Image className='rounded-[16px]' src={item.image} alt={''} />
                <div className='absolute w-full top-[177px] pb-3 px-[19px] flex justify-between'>
                    <div className='text-white text-[15px] font-semibols leading-5'>{item.name}</div>
                    <div className='text-white text-[15px] font-semibols leading-5'>{item.number}</div>
                </div>
                        </div>
                  }  
                </>
                );
            })}
        </div>
    </div>
  )
}

export default ViewStyleAlbums;
