import Image from 'next/image';
import React from 'react';
import bookOpen from '../../../public/assets/book-open.png';
import messageIcon from '../../../public/assets/message-circle-question.png';
import settings from '../../../public/assets/settings-icon.png';

const moreDropdown = [
  {
    icon: bookOpen,
    name: 'Learning Center'
  },
  {
    icon: messageIcon,
    name: 'FAQ'
  },
  {
    icon: settings,
    name: 'Settings'
  }
];

const MoreOptionsModal = () => {
  return (
    <>
      <div className='flex h-max w-[260px] flex-col rounded-[14px] bg-[#1A1A1A] px-0 py-2 bottom-[45px] fixed z-10 -ml-1'>
      {moreDropdown.map((item) => {
        return (
          
            <div className='flex w-full gap-2 px-4 py-[10px]'>
              <div className='h-[18px] w-[18px]'>
                <Image src={item.icon} alt={''} />
              </div>
              <div className='text-[14px] font-normal leading-[18px] text-[#FFFFFF]'>
                {item.name}
              </div>
            </div>
        );
      })}
      </div>
    </>
  );
};

export default MoreOptionsModal;
