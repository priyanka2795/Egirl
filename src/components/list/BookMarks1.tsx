import React from 'react'
import Image from 'next/image';
import deleteIcon from '../../../public/assets/delete-icon.png';
import arrowDown from '../../../public/assets/arrow-down.png';
import micaChanAvatar from '../../../public/assets/avatar.png';
import bookmarkFilled from '../../../public/assets/bookmark-filled.png';
import bookmarkImg1 from '../../../public/assets/bookmark-img1.png';
import bookmarkImg2 from '../../../public/assets/bookmark-img2.png';
import bookmarkImg3 from '../../../public/assets/bookmark-img3.png';
import bookmarkImg4 from '../../../public/assets/bookmark-img4.png';



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
    {
        image: bookmarkImg3,
        reaction: bookmarkFilled,
        avatar: micaChanAvatar,
        name: 'Mica-chan',
        userName: '@mikachan • 6h'
    },
    
] 
const BookMarks = () => {
  return (
    <div>
        <div className='px-8 py-4 w-[956px]'>
            <div>
                <div className='flex justify-between w-full'>
                    <div className='text-[#FFFFFF] text-lg font-bold'>All bookmarks</div>
                    <button className='flex px-3 py-[7px] gap-[6px] rounded-[10px] bg-white/[0.08]'>
                        <Image className='w-[16px] h-[16px]' src={deleteIcon} alt={''} />
                        <div className='text-xs font-bold text-[#979797]'>Clear All</div>
                    </button>
                </div>
                <div className='flex gap-2'>
                    <div className='text-[#FFFFFF] text-[15px] font-normal'>Newest bookmarks</div>
                    <Image className='w-[20px] h-[20px]' src={arrowDown} alt={''} />
                </div>
            </div>

            <div className='grid w-full grid-cols-4 gap-3 mt-6'>
                {userFrame.map((item) => {
                    return(
                        <>
                            <div className='relative group'>
                                <div className='flex list-bookmark-container'>
                                    <Image className='list-bookmark-img rounded-[14px]' src={item.image} alt={''} />
                                </div>
                                <div className='absolute top-0 left-0 w-full h-full p-4 opacity-0 bookmark-img-onhover group-hover:opacity-100 bg-[#000]/50'>
                                    <div className='relative flex flex-col justify-between w-full h-full '>
                                        <div className='absolute flex flex-col items-end top-1 right-1'>
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
    </div>
  )
}

export default BookMarks
