import Image from 'next/image';
import React from 'react';
import bookOpen from '@/assets/book-open.webp';
import messageIcon from '@/assets/message-circle-question.webp';
import settings from '@/assets/settings-icon.webp';
import Link from 'next/link';

const moreDropdown = [
  {
    link: 'learning-center',
    icon: bookOpen,
    name: 'Learning Center'
  },
  {
    link: '#',
    icon: messageIcon,
    name: 'FAQ'
  },
  {
    link: '#',
    icon: settings,
    name: 'Settings'
  }
];

const MoreOptionsModal = () => {
  return (
    <>
      <div className='fixed bottom-[45px] z-10 -ml-1 flex h-max w-[260px] flex-col rounded-[14px] bg-[#1A1A1A] px-0 py-2'>
        {moreDropdown.map((item, index) => {
          return (
            <Link href={item.link} target='_blank'>
              <div className='flex w-full gap-2 px-4 py-[10px]' key={index}>
                <div className='h-[18px] w-[18px]'>
                  <Image src={item.icon} alt={''} />
                </div>
                <div className='font-normal text-[14px] leading-[18px] text-[#FFFFFF]'>
                  {item.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MoreOptionsModal;
