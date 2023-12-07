import Image from 'next/image'
import React from 'react'
import creditCard from '@/assets/credit-card.webp'
import cardCircles from '@/assets/card-circles.webp';
import threeDotsIcon from '@/assets/dots-horizontal.webp';

interface defaultAddCardProps{
    showSuccessPage:boolean,
    showErrorPage:boolean,
}
const DefaultAddCard = ({showSuccessPage , showErrorPage}:defaultAddCardProps) => {
  return (
    <div className='flex flex-col gap-4 p-4'>
            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Added cards</div>
            {
                showSuccessPage ? (
                    <div className='relative flex flex-col h-[230px] w-[230px] justify-between px-6 py-8 rounded-[16px] bg-white/[0.05]'>
                        <div className='w-10 h-[25px]'>
                            <Image className='w-full h-full' src={cardCircles} alt={''} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>
                                <p>Long Name</p>
                                <p>and Surname</p>
                            </div>
                            <div className='flex gap-2'>
                                <div className='flex flex-col gap-[2px]'>
                                    <div className='text-[#979797] text-[12px] font-normal leading-[16px]'>Mastercard</div>
                                    <div className='text-[#FFFFFF] text-[15px] font-semibold leading-[20px]'>**1234</div>
                                </div>
                                <div className='flex flex-col gap-[2px]'>
                                    <div className='text-[#979797] text-[12px] font-normal leading-[16px]'>Expires:</div>
                                    <div className='text-[#FFFFFF] text-[15px] font-semibold leading-[20px]'>6/2025</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex p-2 top-[10px] right-[14px] absolute bg-white/[0.05] rounded-full'>
                            <Image className='w-6 h-6' src={threeDotsIcon} alt={''} />
                        </div>
                    </div>
                ) : ( 
                showErrorPage ? (
                    <div className='flex flex-col items-center justify-center gap-3 px-6 py-14 rounded-[16px] bg-white/[0.05]'>
                        <div className='flex p-5 bg-white/[0.05] rounded-full'>
                            <Image className='w-6 h-6' src={creditCard} alt={''} />
                        </div>
                        <div className=' text-center text-[14px] font-semibold leading-[18px]  text-main-grey-text-light'>Added cards will be displayed here</div>
                    </div>
                ) : (
                    <div className='flex flex-col items-center justify-center gap-3 px-6 py-14 rounded-[16px] bg-white/[0.05]'>
                        <div className='flex p-5 bg-white/[0.05] rounded-full'>
                            <Image className='w-6 h-6' src={creditCard} alt={''} />
                        </div>
                        <div className=' text-center text-[14px] font-semibold leading-[18px] text-main-grey-text-light'>Added cards will be displayed here</div>
                    </div>
                ))
            }
            
        </div>
  )
}

export default DefaultAddCard
