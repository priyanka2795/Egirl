import React, { useEffect, useState } from 'react';
import plusIcon from '@/assets/plus-large.webp';
import userIcon from '@/assets/user-alt-1.webp';
import imageSquare from '@/assets/image-square3.webp';
import palette from '@/assets/palette.webp';
import EditIcon from '@/assets/pen.webp';
import ShareIcon from '@/assets/arrow-up-from-bracket.webp';
import DeleteIcon from '@/assets/trash-blank-alt3.webp';
import threeDots from '@/assets/dots-horizontal.webp';
import Image from 'next/image';
import { getAllCharacter } from 'services/services';
import Cookies from 'js-cookie';
import CharacterAdd from '@components/creator-studio/NewCharacter/CharacterAdd';

const CharactersMenu = [
  {
    icon: EditIcon,
    text: 'Edit'
  },
  {
    icon: ShareIcon,
    text: 'Share'
  },
  {
    icon: DeleteIcon,
    text: 'Delete'
  }
];

const AllCharactersCards = () => {
  const [allCharacterData, setAllCharacterData] = useState<any>();
  const [openCharactersMenu, setOpenCharactersMenu] = useState<number | null>(
    null
  );
  const [selectCharactersMenu, setSelectCharactersMenu] = useState<any>('');
  const token: any = Cookies.get('accessToken');
  const [newCharacter, setNewCharacter] = useState(false);
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
  }, []);

  const handleCharactersMenu = (index: number) => {
    setOpenCharactersMenu(openCharactersMenu === index ? null : index);
  };

  return (
    <>
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
          <button
            className='flex items-center justify-center gap-[6px] rounded-[12px] bg-[#5848BC] px-4 py-[10px]'
            onClick={() => setNewCharacter(true)}
          >
            <Image src={plusIcon} alt={''} />
            <div className='font-bold text-[14px] leading-5 text-white'>
              New Character
            </div>
          </button>
        </div>

        <div className='grid grid-cols-4 gap-4 '>
          {allCharacterData &&
            allCharacterData?.length &&
            allCharacterData?.map((CharacterData: any, index: number) => {
              return (
                <div className='flex h-full w-full flex-col overflow-hidden rounded-[16px] bg-[#121212]'>
                  <div className='flex h-[198px] items-center justify-center bg-[#1A1A1A] '>
                    <Image src={userIcon} alt={''} />
                  </div>
                  <div className='flex flex-col gap-[6px] px-5 py-4'>
                    <div className='flex flex-col gap-[2px]'>
                      <div className='font-bold text-[15px] leading-5 text-white'>
                        {CharacterData?.display_name}
                      </div>
                      <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                        {CharacterData?.username}
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
                          <Image
                            className='object-contain'
                            src={palette}
                            alt={''}
                          />
                          <div className='font-normal text-[13px] leading-[18px] text-white'>
                            None
                          </div>
                        </div>
                      </div>
                      <div className='relative '>
                        <button onClick={() => handleCharactersMenu(index)}>
                          <Image src={threeDots} alt={''} />
                        </button>
                        {openCharactersMenu === index && (
                          <div className='absolute -right-3 bottom-9 z-0 flex h-max w-[218px] flex-col items-start rounded-[14px] bg-[#272727] p-2'>
                            {CharactersMenu.map((items: any, index: number) => (
                              <div
                                key={index}
                                className={`flex w-full cursor-pointer items-center gap-2 rounded-[8px] ${
                                  selectCharactersMenu === items.text
                                    ? 'bg-[#FFFFFF0D]'
                                    : 'bg-transparent'
                                }  px-2 py-[6px]`}
                                onClick={() =>
                                  setSelectCharactersMenu(items.text)
                                }
                              >
                                <Image
                                  className='object-contain'
                                  src={items.icon}
                                  alt={''}
                                />
                                <div
                                  className={`font-normal text-[14px] ${
                                    items.text === 'Delete'
                                      ? 'text-[#FF5336]'
                                      : 'text-[#FFFFFF]'
                                  }`}
                                >
                                  {items.text}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {newCharacter && <CharacterAdd NewCharacterClose={setNewCharacter} />}
    </>
  );
};

export default AllCharactersCards;
