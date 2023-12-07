// @ts-nocheck

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AlbumFirst from '@/assets/gallery-tab-img.webp';
import ImagePlus from '@/assets/image-plus2.webp';
import Edit from '@/assets/pen.svg';
import ImageSquare from '../svg/image-square.svg';
import ImageSquareGray from '../svg/image-square-gray.svg';
import Check from '../svg/check.svg';
import plusIcon from '@/assets/plus-large.webp';
import crossIcon from '@/assets/xmark (1).webp';
import CreateCategory from './createCategory';
import Tooltip from './tooltip';
import Cookies from 'js-cookie';
import { postGifts } from 'services/services';

interface CreateGiftPopup {
  createGiftClose: React.Dispatch<React.SetStateAction<boolean>>;
  Steps?: React.Dispatch<React.SetStateAction<number>>;
  AddCategory: string[];
  SetCategory: React.Dispatch<React.SetStateAction<string[]>>;
  GiftName: string[];
  SetGiftName: React.Dispatch<React.SetStateAction<string[]>>;
  GiftImageSet: string;
  giftCategory: any;
  setCreateCategory: React.Dispatch<React.SetStateAction<boolean>>;
  createCategory : boolean;
  setCreateCategoryToggle:React.Dispatch<React.SetStateAction<boolean>>;
  createCategoryToggle:boolean;
  createGiftToggle: boolean;
  setCreateGiftToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateGift({
  createGiftClose,
  Steps,
  AddCategory,
  SetCategory,
  GiftName,
  SetGiftName,
  giftCategory,
  GiftImageSet,
  setCreateCategory,
  createCategory,
  setCreateCategoryToggle,
  createCategoryToggle,
  createGiftToggle,
  setCreateGiftToggle
}: CreateGiftPopup) {
  
  const [tabSelectedOpt, setTabSelectedOpt] = useState<any>('');
  const [giftName, setGiftName] = useState<string>('');
  const characterId = Cookies.get('character_id') || '';
  const token: any = Cookies.get('accessToken');
  const [createGiftData, setCreateGiftData] = useState<any>();

  useEffect(() => {
    console.log(createGiftData, 'jjjjj');
  }, [createGiftData]);

  useEffect(() => {
    setCreateGiftData({
      character_id: characterId,
      name: giftName,
      price: 0,
      media_id: 1,
      gift_category_id: tabSelectedOpt
    });
  }, [giftName, characterId, tabSelectedOpt]);

  const handleActiveTab = (items: any) => {
    setTabSelectedOpt(items?.gift_category_id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGiftName(value);
  };

  const GiftCreated = () => {
    if (giftName === '') {
      alert('Please Enter Gift Name');
    } else if (GiftImageSet === '') {
      alert('Please Select Image');
    } else {
      // SetGiftName([...GiftName, giftName]);
      postGifts(createGiftData, token)
        .then((res: any) => {
          console.log(res, '????giftCreated');
          setCreateGiftToggle(!createGiftToggle)
        })
        .catch((err: any) => {
          console.log(err, '????createGiftError');
        });
      createGiftClose(false);
    }
  };
  const closeGifts = () => {
    // createGiftClose(false)
    Steps(1);
  };
  console.log(GiftImageSet, 'GiftImageSet');
  // console.log(AlbumFirst,'AlbumFirst');


  return (
    <div className='w-[385px]'>
      {createCategory ? (
        <>
          <CreateCategory
            CategoryClose={createGiftClose}
            Steps={3}
            Previous={setCreateCategory}
            AddCategory={AddCategory}
            SetCategory={SetCategory}
            setCreateCategoryToggle={setCreateCategoryToggle}
            createCategoryToggle={createCategoryToggle}
          />
        </>
      ) : (
        <>
          <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6'>
            <h5 className='text-lg font-semibold'>Create gift</h5>
            <div
              className='w-6 h-6 cursor-pointer'
              onClick={() => {
                createGiftClose(false);
                SetCategory([]);
              }}
            >
              <Image className='w-full h-full' src={crossIcon} alt={''} />
            </div>
          </div>
          <div className='flex flex-col gap-4 p-6'>
            <div className='relative m-auto flex h-[156px] w-[156px] items-center justify-center rounded-xl bg-[#FFFFFF0D]'>
              {GiftImageSet ? (
                <Image
                  className='h-full w-full rounded-[14px] object-cover'
                  src={GiftImageSet}
                  alt={''}
                />
              ) : (
                <Image
                  className='cursor-pointer'
                  src={ImagePlus}
                  alt={''}
                  onClick={() => Steps(3)}
                />
              )}

              {/* <div className='group absolute right-2 top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#0000007A]'>
                <div>
                  <Edit className='w-full h-full' alt={''} />
                </div>
                <div className='absolute transition-all transform -left-12 -top-2 w-max -translate-x-0 -translate-y-2/4'>
                  <Tooltip Text={'Edit'} />
                </div>
              </div> */}
            </div>

            <div className=' flex flex-col text-[#979797]'>
              <label
                htmlFor='category'
                className='pb-1 text-[13px] font-semibold'
              >
                Gift Name
              </label>
              <input
                type='text'
                id='category'
                placeholder='Ex. Date on a roof'
                className='h-12 rounded-[14px] border-none bg-[#FFFFFF0D] px-4 text-white placeholder:text-[#979797] focus:border-[#5848BC] focus:ring-[#5848BC] active:border-[#5848BC]'
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className='flex flex-col gap-3 '>
              <p className='pb-1 text-[13px] font-semibold text-[#979797]'>
                Category
              </p>
              {giftCategory?.map((items: any, index: number) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-[14px] border px-4 py-3 
                                ${
                                  tabSelectedOpt === items?.gift_category_id
                                    ? 'border-[#5848BC] bg-[#5848BC29]'
                                    : 'border-[#FFFFFF29] bg-[#ffffff00]'
                                }
                                `}
                  onClick={(e) => handleActiveTab(items)}
                >
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <div
                        className={` rounded-lg p-[10px] ${
                          tabSelectedOpt === items
                            ? 'bg-[#5848BC29]'
                            : 'bg-[#FFFFFF0D]'
                        }`}
                      >
                        {tabSelectedOpt === items ? (
                          <ImageSquare />
                        ) : (
                          <ImageSquareGray />
                        )}
                      </div>
                      <div className=''>
                        <p className='font-semibold'>{items?.name}</p>
                        <p className='text-xs text-[#979797]'>0/9 gifts</p>
                      </div>
                    </div>
                    <div>{tabSelectedOpt === items ? <Check /> : ' '}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className='flex items-center gap-2 font-semibold '
              onClick={() => setCreateCategory(true)}
            >
              <Image className='w-full h-full' src={plusIcon} alt={''} />
              <p>New Category</p>
            </button>

            <div className='grid grid-cols-2 gap-3 font-semibold text-white'>
              <button
                className='rounded-[14px] border border-[#FFFFFF52] px-5 py-3'
                onClick={() => closeGifts()}
              >
                Cancel
              </button>
              {tabSelectedOpt ? (
                <button
                  className='rounded-[14px] bg-[#5848BC] px-5 py-3'
                  onClick={() => GiftCreated()}
                >
                  Create
                </button>
              ) : (
                <button className='rounded-[14px] bg-[#5848BC] px-5 py-3 opacity-50'>
                  Create
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CreateGift;