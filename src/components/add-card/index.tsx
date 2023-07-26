import React from 'react'

const AddCard = () => {
  return (
    <div className='flex'>
        <div className='flex border-r border-white/[0.08] bg-[#121212]'>
            <div className='flex px-8 pt-[18px] pb-[14px] border-b border-white/[0.08]'>
                <div className='flex gap-3'>
                    <div className='px-4 py-2 rounded-[12px] bg-white/[0.16] text-[#FFFFFF] text-[15px] font-bold leading-5'>Add card</div>
                    <div className='px-4 py-2 rounded-[12px] text-[#979797] text-[15px] font-bold leading-5'>Latest transactions</div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>

        <div className='flex flex-col gap-4 p-4'>
            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Added cards</div>
            <div className='flex px-6 py-8'></div>
        </div>
    </div>
  )
}

export default AddCard;
