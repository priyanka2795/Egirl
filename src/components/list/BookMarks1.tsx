import React, { useState } from 'react'
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
        image: bookmarkImg1,
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
        image: bookmarkImg1,
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
] 
const BookMarks = () => {
    const [profileModalState, setProfileModalState] = useState(false);
    const [deleteBookmarkState , setDeleteBookmarkState] = useState(false)
  return (
    <>
    <div className='flex flex-col gap-6'>  
        <div className='flex justify-between w-full'>
            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>All bookmarks</div>
            {/* <button className='flex px-3 py-[7px] gap-[6px] rounded-[10px] bg-white/[0.08]'>
                <Image className='w-[16px] h-[16px]' src={deleteIcon} alt={''} />
                <div className='text-xs font-bold text-[#979797]'>Clear All</div>
            </button> */}
            <div className='flex gap-3'>
                <div className='flex gap-2 pr-3 border-r border-white/[0.16] items-center'>
                    <div className='text-[#FFFFFF] text-[15px] font-normal leading-5'>Newest bookmarks</div>
                    <div className='w-[20px] h-[20px]'>
                        <Image className='object-cover' src={arrowDown} alt={''} />
                    </div>
                </div>
                <Image className='object-cover' src={deleteIcon} alt={''} onClick={() => {setDeleteBookmarkState(true)}} />
             </div>
        </div>
        <div className='grid w-full grid-cols-3 gap-4'>
                {userFrame.map((item) => {
                    return(
                        <>
                            <div className='relative cursor-pointer group max-w-[308px] max-h-[308px]' onClick={() => setProfileModalState(true)}>
                                <div className='flex w-full h-full list-bookmark-container'>
                                    <Image className='list-bookmark-img rounded-[14px]' src={item.image} alt={''} />
                                </div>
                                <div className='absolute top-0 left-0 w-full h-full p-4 opacity-0 bookmark-img-onhover group-hover:opacity-100 bg-[#000]/50'>
                                    <div className='relative flex flex-col justify-between w-full h-full '>
                                        <div className='absolute flex flex-col items-end top-[8px] right-[8px] w-[19px]'>
                                            <Image className='w-[20px] h-[20px]' src={item.reaction} alt={''} />
                                        </div>
                                        <div className='flex items-end w-full h-full gap-3'>
                                            <div className='w-[40px] h-[40px]'>
                                                <Image className='w-full h-full' src={item.avatar} alt={''} />
                                            </div>
                                            <div className='flex flex-col gap-[2px]'>
                                                <div className='text-[#FFFFFF] text-[16px] font-bold'>{item.name}</div>
                                                <div className='text-white/[0.80] text-[14px] font-normal'>{item.userName}</div>
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
    {
        deleteBookmarkState && <ClearBookMarkModal heading={'Do you want to clear all your bookmarks?'} paragraph={'When confirming, note that the bookmark list cannot be restored'} closeModalItem={setDeleteBookmarkState}/> 
    }
    {
        profileModalState && <BookMarkModal closeModalState={setProfileModalState}/>
    }
    </>
    

  )
}

export default BookMarks
