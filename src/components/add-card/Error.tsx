import React from 'react'
import crossIconRed from '../../../public/assets/xmark-red.png'
import creditCard from '../../../public/assets/credit-card.png'
import Image from 'next/image';

const Error = () => {
  return (
    <div className='flex'>
        <div className='border-r border-white/[0.08] bg-[#121212] w-full h-max mt-5'>
            <div className='w-full px-8 pt-[18px] pb-[14px] border-b border-white/[0.08]'>
                <div className='flex gap-3'>
                    <div className='px-4 py-2 rounded-[12px] bg-white/[0.16] text-[#FFFFFF] text-[15px] font-bold leading-5'>Add card</div>
                    <div className='px-4 py-2 rounded-[12px] text-[#979797] text-[15px] font-bold leading-5'>Latest transactions</div>
                </div>
            </div>
            
            <div className='flex flex-col items-center justify-center gap-10 p-8'>
               <div className='flex flex-col items-center gap-4'>
                    <div className='flex items-center justify-center pt-[26px] pb-6 px-6 rounded-full bg-[#FF5336]/[0.16]'>
                        <Image className='w-8 h-8' src={crossIconRed} alt={''} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-center text-[#FFFFFF] text-[22px] font-bold leading-8'>Something went wrong</div>
                        <div className='text-center text-[#FFFFFF] text-[15px] font-normal leading-5'>
                            <p>Error code: ######</p>
                            <p>Check your details or try again later</p>
                        </div>
                    </div>
               </div>
            </div>
            
            <div className='flex items-end justify-end px-8 py-6'>
                <button className='px-5 py-[13px] flex justify-center items-center rounded-[14px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-bold leading-[22px]'>Go back</button>
            </div>
        </div>
        
        <div className='flex flex-col gap-4 p-4'>
            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Added cards</div>
            <div className='flex flex-col items-center justify-center gap-3 px-6 py-14 rounded-[16px] bg-white/[0.05]'>
                <div className='flex p-5 bg-white/[0.05] rounded-full'>
                    <Image className='w-6 h-6' src={creditCard} alt={''} />
                </div>
                <div className='text-[creditCard] text-center text-[14px] font-semibold leading-[18px]'>Added cards will be displayed here</div>
            </div>
        </div>
    </div>
  )
}

export default Error;
