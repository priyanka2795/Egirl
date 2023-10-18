import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react'
import xMark from '../../../public/assets/xmark (1).png';
import avatar from '../../../public/assets/image 69.png';

interface EditProfileModalProps {
    closeState: any;
}

const EditProfileModal = ({closeState}:EditProfileModalProps) => {
    const tabs = ['Profile view', 'Explore view'];
    const [activeTab, setActiveTab] = useState(0);
    return (
    <Modal
    open={true}
    modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[468px] relative'
    closeModal={() => closeState(false)}
    modalOverlayStyle='!bg-black/80'
  >
    <div className='flex p-6 border-b border-white/[0.08] justify-between'>
        <div className='text-white text-[18px] font-bold leading-6'>Edit profile</div>
        <Image src={xMark} alt={''} />
    </div>
    <div className='flex items-center gap-4 px-6 pt-6 pb-3'>
        <Image className='rounded-[100px]' src={avatar} alt={''} />
        <div className='flex flex-col gap-[2px]'>
            <div className='text-white text-[15px] font-bold leading-5'>Profile photo</div>
            <div className='text-[#979797] text-[14px] font-normal leading-[18px]'>Click on the photo to edit</div>
        </div>
    </div>
    <div className='flex gap-3 px-6 pt-2 pb-4 border-b border-white/[0.08]'>
        {tabs.map((item,index) => {
            return(
                <div key={index} className={`w-1/2 cursor-pointer flex px-4 py-2 rounded-[12px] justify-center items-center text-[15px] text-bold leading-5 ${activeTab === index ? 'bg-white/[0.16] text-white' : 'bg-transparent text-[#979797]'}`} onClick={() => {setActiveTab(index)}}>{item}</div>
            );
        })}
    </div>
    <div className='flex flex-col gap-6 px-6 pt-3 pb-6'>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-[6px]'>
                <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Name</div>
                <input type='text' placeholder='Mika-chan' className='flex px-4 py-3 rounded-[14px] bg-white/[0.05] text-white text-[15px] font-normal leading-6 focus:ring-0 border-none placeholder:text-white' />
            </div>
            <div className='flex flex-col gap-[6px]'>
                <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Username</div>
                <input type='text' placeholder='mikachan' className='flex px-4 py-3 rounded-[14px] bg-white/[0.05] text-white text-[15px] font-normal leading-6 focus:ring-0 border-none placeholder:text-white' />
            </div>
            <div className='flex flex-col gap-[6px]'>
                <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Location</div>
                <input type='text' placeholder='Tokyo' className='flex px-4 py-3 rounded-[14px] bg-white/[0.05] text-white text-[15px] font-normal leading-6 focus:ring-0 border-none placeholder:text-white' />
            </div>
            <div className='flex flex-col gap-[6px]'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div></div>
    </div>
  </Modal>
  )
}

export default EditProfileModal;
