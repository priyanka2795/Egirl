import React from 'react';
import plusIcon from '../../../../public/assets/plus-large.png';
import Image from 'next/image';
import AvtarLarge from '../../../../public/assets/AvatarLarge.png';
import imageSquare from '../../../../public/assets/image-square.png';
import avtar3 from '../../../../public/assets/Avatar 3.png';
import avtar4 from '../../../../public/assets/Avatar 4.png';
import palette from '../../../../public/assets/palette.png';
import dotsHorizontal from '../../../../public/assets/dots-horizontal.png';
import userpic from '../../../components/creator-studio/svg/user-alt-1.png';

const data = [
  {
    name: 'Mika-chan',
    username: '@Mika-chan',
    img: '12K',
    palette: 'Anime',
    pic: AvtarLarge
  },
  {
    name: 'Sarah Scarlet',
    username: '@Mika-chan',
    img: '0',
    palette: 'None',
    pic: userpic
  },
  {
    name: 'Character 3',
    username: '',
    img: '934',
    palette: 'Style 3',
    pic: avtar3
  },
  {
    name: 'Siberica Le',
    username: '@Mika-chan',
    img: '12K',
    palette: 'Anime',
    pic: avtar4
  }
];
const Create = () => {
  return (
    <div>
      {/* Heading */}
      <div className='flex items-center justify-between'>
        <div className='flex items-start gap-2'>
          <h6 className='font-[18px] font-bold leading-6'>All Characters</h6>
          <h6 className='font-[18px] font-bold leading-6 text-[#515151]'>4</h6>
        </div>

        <button className='mr-4 flex items-center justify-center gap-1.5 self-stretch rounded-xl bg-[#5848BC] px-4 py-2.5 text-sm font-bold leading-5 '>
          <Image className='h-full w-full' src={plusIcon} alt={''} />
          New Character
        </button>
      </div>
      {/* row */}
      <div className='mt-[10px] flex items-start gap-5'>
        {data.map((datas) => {
          return (
            <div className='flex h-[300px] flex-col items-start rounded-2xl bg-[#121212]'>
              <div
                className={`${
                  datas.pic === userpic
                    ? 'flex w-[254px] items-center justify-center self-stretch rounded-t-2xl bg-[#1A1A1A] px-0 py-[67px]'
                    : 'self-stretch'
                } `}
              >
                <Image src={datas.pic} className='rounded-t-2xl' />
              </div>
              <div className='flex flex-col items-start gap-1.5 self-stretch px-5 py-4'>
                <div className='flex flex-col items-start gap-[2px] self-stretch'>
                  <div className='text-[15px] font-bold leading-5'>
                    {datas.name}
                  </div>
                  <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                    {datas.username}
                  </div>
                </div>
                <div className='flex items-center justify-between self-stretch '>
                  <div className='flex items-start gap-4 pr-[0px]'>
                    {/* left */}
                    <div className='flex items-center gap-1'>
                      <div className='h-4 w-4'>
                        <Image src={datas.pic} />
                      </div>
                      <div className='text-[13px] font-normal leading-[18px]'>
                        {datas.img}
                      </div>
                    </div>
                    {/* center */}
                    <div className='flex items-center gap-1'>
                      <div className='h-4 w-4'>
                        <Image src={palette} />
                      </div>
                      <div className='text-[13px] font-normal leading-[18px]'>
                        {datas.palette}
                      </div>
                    </div>
                  </div>
                  <div className='h-6 w-6 '>
                    <Image src={dotsHorizontal} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Create;
