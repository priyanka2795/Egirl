import React, { useState } from 'react';
import ViewStyleModal from './style-generator/ViewStyleModal';
import StyleGeneratorNext from './style-generator/StyleGeneratorNext';

interface NotificationModalProp {
    setNotificationModal: any;
}

const notification = [
    {
        name: 'Any Lee',
        description: 'Generared style · 36 mins ago',
        button: 'View Style'
    },
    {
        name: 'Red Dress',
        description: 'Generared style · 2 days ago',
        button: 'View Style'
    },
    {
        name: 'Silver Watch',
        description: 'Generared style · 5 days ago',
        button: 'View Style'
    },
];

const NotificationModal = ({setNotificationModal} : NotificationModalProp) => {
    const [activeNotification, setActiveNotification] = useState('Any Lee');
    const [viewStyleModal, setViewStyleModal] = useState(false);
    const [styleGenNext, setStyleGenNext] = useState(false);
  return (
    <>
    <div className='absolute overflow-hidden top-[31px] right-0 flex flex-col rounded-[14px] bg-[#1A1A1A] w-[484px] z-[1]'>
        <div className='flex justify-between px-6 pt-6 pb-5'>
            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Notifications</div>
            <div className='text-[#979797] text-[12px] font-bold leading-[18px] mt-[3px]'>Mark all as read</div>
        </div>
        {notification.map((item) => {
            return(
                <div className={`flex justify-between p-6 border-l border-b ${activeNotification === item.name ? 'border-l border-l-[#5848BC] bg-[#5848BC]/[0.08] border-b-transparent' : 'border-white/[0.08] border-l-transparent last:border-b-transparent'}`} onClick={() => {setActiveNotification(item.name)}}>
                    <div className='flex flex-col gap-[6px]'>
                        <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>{item.name}</div>
                        <div className='text-[#979797] text-[14px] font-normal leading-[18px]'>{item.description}</div>
                    </div>
                    <button className='flex px-4 py-[10px] justify-center items-center rounded-[12px] bg-white/[0.08] text-[#FFFFFF] text-[14px] font-bold leading-5' onClick={() => {setViewStyleModal(true)}}>{item.button}</button>
                </div>
            );
        })}
    </div>
    {
        viewStyleModal && <ViewStyleModal setViewStyleModal={setViewStyleModal} setStyleGenNext={setStyleGenNext} setNotificationModal={setNotificationModal} />
    }
    {
        styleGenNext && <StyleGeneratorNext />
    }
    </>
  )
}

export default NotificationModal;
