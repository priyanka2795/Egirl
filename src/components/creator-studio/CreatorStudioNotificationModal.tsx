import React, { useState } from 'react';
import ViewStyleModal from './style-generator/ViewStyleModal';
import StyleGeneratorNext from './style-generator/StyleGeneratorNext';
import modalImg from '@/assets/style-modal-img.webp';

interface NotificationModalProp {
  setNotificationModal: React.Dispatch<React.SetStateAction<boolean>>;
  setStyleGenNext?: React.Dispatch<React.SetStateAction<boolean>>;
  styleGenNext?: boolean;
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
  }
];

const CreatorStudioNotificationModal = ({
  setNotificationModal,
  setStyleGenNext,
  styleGenNext
}: NotificationModalProp) => {
  const [activeNotification, setActiveNotification] =
    useState<string>('Any Lee');
  const [viewStyleModal, setViewStyleModal] = useState<boolean>(false);
  // const [styleGenNext, setStyleGenNext] = useState(false);
  return (
    <>
      <div className='absolute right-0 top-[31px] z-[1] flex w-[484px] flex-col overflow-hidden rounded-[14px] bg-[#1A1A1A]'>
        <div className='flex justify-between px-6 pt-6 pb-5'>
          <div className='font-bold text-[18px] leading-6 text-[#FFFFFF]'>
            Notifications
          </div>
          <div className='font-bold mt-[3px] text-[12px] leading-[18px] text-[#979797]'>
            Mark all as read
          </div>
        </div>
        {notification.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex justify-between border-b border-l p-6 ${
                activeNotification === item.name
                  ? 'border-l border-b-transparent border-l-[#5848BC] bg-[#5848BC]/[0.08]'
                  : 'border-white/[0.08] border-l-transparent last:border-b-transparent'
              }`}
              onClick={() => {
                setActiveNotification(item.name);
              }}
            >
              <div className='flex flex-col gap-[6px]'>
                <div className='font-bold text-[18px] leading-6 text-[#FFFFFF]'>
                  {item.name}
                </div>
                <div className='font-normal text-[14px] leading-[18px] text-[#979797]'>
                  {item.description}
                </div>
              </div>
              <button
                className='font-bold flex items-center justify-center rounded-[12px] bg-white/[0.08] px-4 py-[10px] text-[14px] leading-5 text-[#FFFFFF]'
                onClick={() => {
                  setViewStyleModal(true);
                }}
              >
                {item.button}
              </button>
            </div>
          );
        })}
      </div>
      {viewStyleModal && (
        <ViewStyleModal
          setViewStyleModal={setViewStyleModal}
          setStyleGenNext={setStyleGenNext}
          setNotificationModal={setNotificationModal}
          image={modalImg}
          component={'NotificationModal'}
        />
      )}
      {/* {
        styleGenNext && <StyleGeneratorNext />
    } */}
    </>
  );
};

export default CreatorStudioNotificationModal;
