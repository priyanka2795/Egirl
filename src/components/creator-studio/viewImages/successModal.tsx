import React from 'react'
import RightGreen from "../svg/check-double.svg";
import CloseGreen from "../svg/xmark-green.svg";

interface SuccessModal {
    SetToaster: any;
}

const SuccessModal = ({ SetToaster }: SuccessModal) => {
    return (
        <div className='border border-[#5AD02E29] bg-[#11160F] w-[380px] rounded-[14px] p-5 '>
            <div className='flex gap-4'>
                <div className='bg-[#5AD02E14] rounded-full w-10 h-10 flex justify-center items-center'>
                    <RightGreen />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-between'>
                        <p className='text-[#5AD02E]'>Congratulations!</p>
                        <button onClick={() => SetToaster(false)}><CloseGreen /></button>
                    </div>
                    <p>You have added the image to the gifts.</p>
                    <button className='rounded-lg px-3 py-2 text-white text-xs bg-[#FFFFFF14] font-bold w-[83px]'>View gifts</button>
                </div>
            </div>
        </div>
    )
}

export default SuccessModal