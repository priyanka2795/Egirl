import React, { useEffect, useState } from 'react';
import plusIcon from '../../../public/assets/plus-large.png';
import userIcon from '../../../public/assets/user-alt-1.png';
import imageSquare from '../../../public/assets/image-square3.png';
import palette from '../../../public/assets/palette2.png';
import threeDots from '../../../public/assets/dots-horizontal (3).png';
import Image from 'next/image';
import { getAllCharacter } from 'services/services';
import Cookies from 'js-cookie';

const card = [
  {
    icon: imageSquare,
    text: '0'
  },
  {
    icon: palette,
    text: 'None'
  }
];

const AllCharactersCards = () => {
  const [allCharacterData, setAllCharacterData] = useState<any>();
  const token: any = Cookies.get('accessToken');

  useEffect(() => {
    getAllCharacter(token)
      .then((res: any) => {
        setAllCharacterData(res?.data);
        if (res?.data.length === 1) {
          Cookies.set('character_id', res?.data[0]?.id);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [ ]);

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2'>
          <div className='font-bold text-[18px] leading-6 text-white'>
            All Characters
          </div>
          <div className='font-bold text-[18px] leading-6 text-[#515151]'>
            1
          </div>
        </div>
        <button className='flex items-center justify-center gap-[6px] rounded-[12px] bg-[#5848BC] px-4 py-[10px]'>
          <Image src={plusIcon} alt={''} />
          <div className='font-bold text-[14px] leading-5 text-white'>
            New Character
          </div>
        </button>
      </div>
      <div className='grid grid-cols-4 '>
      {allCharacterData &&
        allCharacterData?.length &&
        allCharacterData?.map((CharacterData: any) => {            
        <div className='flex h-[300px] w-[257px] flex-col overflow-hidden rounded-[16px] bg-[#121212]'>
          <div className='flex h-full max-h-[198px] items-center justify-center bg-[#1A1A1A]'>
            <Image src={userIcon} alt={''} />
          </div>
          <div className='flex flex-col gap-[6px] px-5 py-4'>
            <div className='flex flex-col gap-[2px]'>
              <div className='font-bold text-[15px] leading-5 text-white'>
                Sarah Scarlet {CharacterData?.display_name}
              </div>
              <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                @Sarahscarlet {CharacterData?.username}
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center justify-between gap-[30px]'>
                <div className='flex items-center gap-1'>
                  <Image
                    className='object-contain'
                    src={imageSquare}
                    alt={''}
                  />
                  <div className='font-normal text-[13px] leading-[18px] text-white'>
                    0
                  </div>
                </div>
                <div className='flex items-center gap-1'>
                  <Image className='object-contain' src={palette} alt={''} />
                  <div className='font-normal text-[13px] leading-[18px] text-white'>
                    None
                  </div>
                </div>
              </div>
              <Image src={threeDots} alt={''} />
            </div>
          </div>
        </div> 
        })}
      </div>
    </div>
  );
};

export default AllCharactersCards;
