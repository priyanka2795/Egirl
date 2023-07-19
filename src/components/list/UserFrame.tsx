import React from 'react'
import userFrameImg1 from '../../../public/assets/messages/grid-img-4.png'
import userFrameImg2 from '../../../public/assets/messages/grid-img-2.png'
import userFrameImg3 from '../../../public/assets/messages/grid-img-15.png'
import Image from 'next/image'

const userFrame = [
    {
        image: userFrameImg1,
        name: 'Anna Quigley',
        userName: '@sheisannaquigley'
    },
    {
        image: userFrameImg2,
        name: 'Anna Quigley',
        userName: '@sheisannaquigley'
    },
    {
        image: userFrameImg3,
        name: 'Anna Quigley',
        userName: '@sheisannaquigley'
    },
] 

const UserFrame = () => {
  return (
    <div>
        <div>
            {userFrame.map((item) => {
                return (
                    <>
                        <div className='flex gap-4 w-[328px] mt-6'>
                            <div className='w-[50px] h-[50px]'>
                                <Image className='w-full h-full rounded-[100px]' src={item.image} alt={''} />
                            </div>
                            <div className='flex flex-col gap-[2px] w-[126px]'>
                                <div className='text-[#FFFFFF] text-[15px] font-semibold'>{item.name}</div>
                                <div className='text-[#979797] text-sm font-normal'>{item.userName}</div>
                            </div>
                        </div>
                    </>
                    );
            })}
        </div>
    </div>
  )
}

export default UserFrame
