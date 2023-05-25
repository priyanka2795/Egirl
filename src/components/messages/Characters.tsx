import React, { useState } from 'react';
import Image from 'next/image';
import SearchIcon from './svg/search-icon.svg';
import useScroll from '../../../hooks/useScroll';
import MailPlus from './svg/mail-plus-icon.svg';
import TestIcon from './TestIcon';
import Character from './Character';

interface MessageData {
  isActive: boolean;
  name: string;
  username: string;
  messagePreview: string;
  newMessages: number;
}

const messages: MessageData[] = [
  {
    isActive: true,
    name: 'Mika-chan',
    username: '@mikachan • 6h',
    messagePreview: 'Doing well, thank...',
    newMessages: 3
  },
  {
    isActive: false,
    name: 'Mika-chan',
    username: '@mikachan • 22 May',
    messagePreview: 'Doing well, thank...',
    newMessages: 14
  }
];

export default function Feed() {
  const [showForYou, setShowForYou] = useState(true);
  const [sticky, animate] = useScroll();

  return (
    <div className='z-50 max-w-[375px] flex-grow border-r border-[#252525] bg-main-background sm:ml-[88px] lg:min-w-[375px] xl:ml-[300px]'>
      {/* 108px topbar with margins */}
      <div className='sticky top-0 flex w-[375px] items-center gap-x-2 border-r border-[#252525] px-4 py-4'>
        <div className='relative w-full'>
          <div className='absolute left-4 top-3'>
            <SearchIcon />
          </div>
          <input
            className='py-auto h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] font-light leading-6 text-[#979797]'
            type='text'
            placeholder='Search'
          />
        </div>
        <div className='rounded-[14px] bg-[#1E1E1E] p-4'>
          <MailPlus />
        </div>
      </div>

      <div
        style={{ height: 'calc(100vh - 82px)' }}
        className='sticky top-[82px] overflow-auto'
      >
        {messages.map((message) => (
          <Character
            key={message.username}
            isActive={message.isActive}
            name={message.name}
            username={message.username}
            messagePreview={message.messagePreview}
            newMessages={message.newMessages}
          />
        ))}
      </div>
    </div>
  );
}
