import React, { useState } from 'react';
import Image from 'next/image';
import deleteIcon from '../../../public/assets/trash-blank-alt2.png';
import arrowDown from '../../../public/assets/arrow-down.png';
import micaChanAvatar from '../../../public/assets/avatar.png';
import bookmarkFilled from '../../../public/assets/bookmark-filled.png';
import bookmarkImg1 from '../../../public/assets/bookmark-img1.png';
import bookmarkImg2 from '../../../public/assets/bookmarks-grid-img-2.png';
import bookmarkImg3 from '../../../public/assets/bookmarks-grid-img-3.png';
import bookmarkImg4 from '../../../public/assets/bookmarks-grid-img-4.png';
import BookMarkModal from './BookMarkModal';
import ClearBookMarkModal from './ClearBookMarkModal';

const userFrame = [
  {
    image: bookmarkImg3,
    reaction: bookmarkFilled,
    avatar: micaChanAvatar,
    name: 'Mica-chan',
    userName: '@mikachan • 6h'
  },
  {
    image: bookmarkImg2,
    reaction: bookmarkFilled,
    avatar: micaChanAvatar,
    name: 'Mica-chan',
    userName: '@mikachan • 6h'
  },
  {
    image: bookmarkImg3,
    reaction: bookmarkFilled,
    avatar: micaChanAvatar,
    name: 'Mica-chan',
    userName: '@mikachan • 6h'
  },
  {
    image: bookmarkImg4,
    reaction: bookmarkFilled,
    avatar: micaChanAvatar,
    name: 'Mica-chan',
    userName: '@mikachan • 6h'
  },
  {
    image: bookmarkImg3,
    reaction: bookmarkFilled,
    avatar: micaChanAvatar,
    name: 'Mica-chan',
    userName: '@mikachan • 6h'
  },
  {
    image: bookmarkImg2,
    reaction: bookmarkFilled,
    avatar: micaChanAvatar,
    name: 'Mica-chan',
    userName: '@mikachan • 6h'
  },
  {
    image: bookmarkImg2,
    reaction: bookmarkFilled,
    avatar: micaChanAvatar,
    name: 'Mica-chan',
    userName: '@mikachan • 6h'
  },
  {
    image: bookmarkImg3,
    reaction: bookmarkFilled,
    avatar: micaChanAvatar,
    name: 'Mica-chan',
    userName: '@mikachan • 6h'
  },
  {
    image: bookmarkImg4,
    reaction: bookmarkFilled,
    avatar: micaChanAvatar,
    name: 'Mica-chan',
    userName: '@mikachan • 6h'
  }
];
const BookMarks = () => {
  const [profileModalState, setProfileModalState] = useState(false);
  const [deleteBookmarkState, setDeleteBookmarkState] = useState(false);
  return (
    <>
      <div className='flex flex-col gap-6'>
        <div className='flex w-full justify-between'>
          <div className='font-bold text-[18px] leading-6 text-[#FFFFFF]'>
            All bookmarks
          </div>
          {/* <button className='flex px-3 py-[7px] gap-[6px] rounded-[10px] bg-white/[0.08]'>
                <Image className='w-[16px] h-[16px]' src={deleteIcon} alt={''} />
                <div className='text-xs font-bold text-[#979797]'>Clear All</div>
            </button> */}
          <div className='flex gap-3'>
            <div className='flex items-center gap-2 border-r border-white/[0.16] pr-3'>
              <div className='font-normal text-[15px] leading-5 text-[#FFFFFF]'>
                Newest bookmarks
              </div>
              <div className='h-[20px] w-[20px]'>
                <Image className='object-cover' src={arrowDown} alt={''} />
              </div>
            </div>
            <Image
              className='object-cover'
              src={deleteIcon}
              alt={''}
              onClick={() => {
                setDeleteBookmarkState(true);
              }}
            />
          </div>
        </div>
        <div className='grid w-full grid-cols-3 gap-4'>
          {userFrame.map((item) => {
            return (
              <>
                <div
                  className='group relative max-h-[308px] max-w-[308px] cursor-pointer'
                  onClick={() => setProfileModalState(true)}
                >
                  <div className='list-bookmark-container flex h-full w-full'>
                    <Image
                      className='list-bookmark-img rounded-[14px]'
                      src={item.image}
                      alt={''}
                    />
                  </div>
                  <div className='bookmark-img-onhover absolute left-0 top-0 h-full w-full bg-[#000]/50 p-4 opacity-0 group-hover:opacity-100'>
                    <div className='relative flex h-full w-full flex-col justify-between '>
                      <div className='absolute right-[8px] top-[8px] flex w-[19px] flex-col items-end'>
                        <Image
                          className='h-[20px] w-[20px]'
                          src={item.reaction}
                          alt={''}
                        />
                      </div>
                      <div className='flex h-full w-full items-end gap-3'>
                        <div className='h-[40px] w-[40px]'>
                          <Image
                            className='h-full w-full'
                            src={item.avatar}
                            alt={''}
                          />
                        </div>
                        <div className='flex flex-col gap-[2px]'>
                          <div className='font-bold text-[16px] text-[#FFFFFF]'>
                            {item.name}
                          </div>
                          <div className='font-normal text-[14px] text-white/[0.80]'>
                            {item.userName}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {deleteBookmarkState && (
        <ClearBookMarkModal
          heading={'Do you want to clear all your bookmarks?'}
          paragraph={
            'When confirming, note that the bookmark list cannot be restored'
          }
          closeModalItem={setDeleteBookmarkState}
        />
      )}
      {profileModalState && (
        <BookMarkModal closeModalState={setProfileModalState} />
      )}
    </>
  );
};

export default BookMarks;
