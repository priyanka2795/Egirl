import { Modal } from '@components/modal/modal';
import React from 'react'

// interface ProfileInfoModalProps {
//     closeModal: any;
// }

const ProfileInfoModal = () => {
  return (
    <div className='flex flex-col p-6 gap-4 w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[468px]'>
        <div className='flex flex-col gap-[6px]'>
            <div className='flex justify-between'>
                <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Profile Tags</div>
                <div className='text-[#515151] text-[14px] font-normal leading-[18px]'>0/4</div>
            </div>
            <input type='text' placeholder='Add tags...' className='px-4 py-3 rounded-[14px] bg-white/[0.05] focus:ring-0 border-none text-[#979797] text-[15px] font-normal leading-6 placeholder:text-[#979797]' />
        </div>
        
        <div className='flex flex-col gap-[6px]'>
            <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Location (Optional)</div>
            <input type='text' placeholder='Type location...' className='px-4 py-3 rounded-[14px] bg-white/[0.05] focus:ring-0 border-none text-[#979797] text-[15px] font-normal leading-6 placeholder:text-[#979797]' />
        </div>
        
        <div className='flex flex-col gap-[6px]'>
            <div className='flex justify-between'>
                <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Profile Tags</div>
                <div className='text-[#515151] text-[14px] font-normal leading-[18px]'>0/160</div>
            </div>
            <textarea placeholder='Type something...' className='h-[120px] pl-4 pr-3 py-3 rounded-[14px] bg-white/[0.05] resize-none focus:ring-0 border-none text-[#979797] text-[15px] font-normal leading-6 placeholder:text-[#979797]' />
        </div>
    </div>
  )
}

export default ProfileInfoModal;
