import React from 'react'
import Image from 'next/image';
import deleteIcon from '../../../public/assets/delete-icon.png';
import arrowDown from '../../../public/assets/arrow-down.png';
import micaChanFullImg from '../../../public/assets/mica-chan-full-img.png';
import micaChanAvatar from '../../../public/assets/avatar.png';
import bookmarkFilled from '../../../public/assets/bookmark-filled.png';
import robotImg from '../../../public/assets/robot-img.png';


const userFrame = [
    {
        image: robotImg,
        reaction: bookmarkFilled,
        avatar: micaChanAvatar,
        name: 'Mica-chan',
        userName: '@mikachan • 6h'
    },
    {
        image: robotImg,
        reaction: bookmarkFilled,
        avatar: micaChanAvatar,
        name: 'Mica-chan',
        userName: '@mikachan • 6h'
    },
    {
        image: robotImg,
        reaction: bookmarkFilled,
        avatar: micaChanAvatar,
        name: 'Mica-chan',
        userName: '@mikachan • 6h'
    },
    {
        image: robotImg,
        reaction: bookmarkFilled,
        avatar: micaChanAvatar,
        name: 'Mica-chan',
        userName: '@mikachan • 6h'
    },
    {
        image: robotImg,
        reaction: bookmarkFilled,
        avatar: micaChanAvatar,
        name: 'Mica-chan',
        userName: '@mikachan • 6h'
    },
    {
        image: robotImg,
        reaction: bookmarkFilled,
        avatar: micaChanAvatar,
        name: 'Mica-chan',
        userName: '@mikachan • 6h'
    },
    {
        image: robotImg,
        reaction: bookmarkFilled,
        avatar: micaChanAvatar,
        name: 'Mica-chan',
        userName: '@mikachan • 6h'
    },
    {
        image: robotImg,
        reaction: bookmarkFilled,
        avatar: micaChanAvatar,
        name: 'Mica-chan',
        userName: '@mikachan • 6h'
    },
    {
        image: robotImg,
        reaction: bookmarkFilled,
        avatar: micaChanAvatar,
        name: 'Mica-chan',
        userName: '@mikachan • 6h'
    },
    {
        image: robotImg,
        reaction: bookmarkFilled,
        avatar: micaChanAvatar,
        name: 'Mica-chan',
        userName: '@mikachan • 6h'
    },
    {
        image: robotImg,
        reaction: bookmarkFilled,
        avatar: micaChanAvatar,
        name: 'Mica-chan',
        userName: '@mikachan • 6h'
    },
    {
        image: robotImg,
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
                            <div className='flex list-bookmark-container'>
                                <Image className='list-bookmark-img' src={item.image} alt={''} />
                            </div>
                            <div className='bookmark-img-onhover'>
                                {/* <div className='text-white bg-pink'>Hello</div> */}
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
