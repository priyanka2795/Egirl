// @ts-nocheck

import Image from 'next/image';
import React, { useState } from 'react';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import ImagePlus from '../../../../public/assets/image-plus2.png';
import Edit from '../../../../public/assets/pen.svg';
import ImageSquare from '../svg/image-square.svg';
import ImageSquareGray from '../svg/image-square-gray.svg';
import Check from '../svg/check.svg';
import plusIcon from '../../../../public/assets/plus-large.png';
import crossIcon from '../../../../public/assets/xmark (1).png';
import CreateCategory from './createCategory';
import Tooltip from './tooltip';

interface CreateGiftPopup {
  createGiftClose: React.Dispatch<React.SetStateAction<boolean>>;
  GiftsView: React.Dispatch<React.SetStateAction<boolean>>;
  Steps?: React.Dispatch<React.SetStateAction<number>>;
  AddCategory: string[];
  SetCategory: React.Dispatch<React.SetStateAction<string[]>>;
  GiftName: string[];
  SetGiftName: React.Dispatch<React.SetStateAction<string[]>>;
  GiftImageSet: string;
}

function CreateGift({
  createGiftClose,
  GiftsView,
  Steps,
  AddCategory,
  SetCategory,
  GiftName,
  SetGiftName,
  GiftImageSet
}: CreateGiftPopup) {
  const [createCategory, setCreateCategory] = useState<boolean>(false);
  const [tabSelectedOpt, setTabSelectedOpt] = useState<string>('');
  const [giftName, setGiftName] = useState<string>('');

  const handleActiveTab = (items: string) => {
    setTabSelectedOpt(items);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGiftName(value);
  };

  const GiftCreated = () => {
    if (giftName === '' ) {
      alert('Please Enter Gift Name');
    }else if (GiftImageSet === '') {
      alert('Please Select Image');
      
    } else {
      SetGiftName([...GiftName, giftName]);
      createGiftClose(false);
      GiftsView(true);
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
              {AddCategory.map((items: string, index: number) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-[14px] border px-4 py-3 
                                ${
                                  tabSelectedOpt === items
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
                        <p className='font-semibold'>{items}</p>
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
