import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SearchIcon from '../common/Search/SearchIcon';
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

  // search state
  const [isInputActive, setInputActive] = useState(false);
  const handleInputFocus = () => setInputActive(true);
  const handleInputBlur = () => setInputActive(false);

  // draggable sidebar
  const [isDragging, setDragging] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(375);
  const [changeWidth, setChangeWidth] = useState<boolean>(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent): void => {
    setDragging(true);

    Array.from(document.body.getElementsByTagName('*')).forEach((el) => {
      (el as HTMLElement).style.cursor = 'col-resize';
      (el as HTMLElement).classList.add('select-none');
    });
  };

  const handleMouseUp = (): void => {
    if (!isDragging) return;
    setDragging(false);

    Array.from(document.body.getElementsByTagName('*')).forEach((el) => {
      (el as HTMLElement).style.cursor = '';
      (el as HTMLElement).classList.remove('select-none');
    });
  };

  const handleMouseMove = (e: MouseEvent): void => {
    if (!isDragging || !sidebarRef.current) return;
    const dx = e.clientX - sidebarRef.current.getBoundingClientRect().right;
    const newWidth = sidebarWidth + dx;
    console.log(newWidth);

    if (sidebarWidth == 375 && dx < 0 && newWidth <= 227.5) {
      setSidebarWidth(80);
    } else if (sidebarWidth == 80 && dx > 0 && newWidth >= 227.5) {
      setSidebarWidth(375);
    }
  };

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => handleMouseMove(e);
    const mouseUpHandler = () => handleMouseUp();

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
  }, [isDragging, sidebarWidth, changeWidth]);

  return (
    <div
      ref={sidebarRef}
      className={`relative z-50 max-w-[${sidebarWidth}px] flex-grow border-r-[2px] border-[#252525] bg-[#121212] sm:ml-[88px] lg:min-w-[${sidebarWidth}px] xl:ml-[300px]`}
    >
      {/* draggable portion */}
      <div
        className={`${
          isDragging ? 'bg-blue-400' : 'bg-transparent'
        } absolute -top-[1px] right-0 z-50 h-full w-1 cursor-col-resize transition duration-100 hover:bg-blue-400`}
        onMouseDown={handleMouseDown}
      ></div>
      {/* topbar with margins */}
      {/* <div
        className={`w-${sidebarWidth}px] min-w-[${sidebarWidth}px] max-w-[${sidebarWidth}px]`}
      >
        chicago
      </div> */}
      <div
        className={`sticky top-0 flex w-${sidebarWidth}px] items-center gap-x-2 px-4 py-4`}
      >
        <div className='relative w-full'>
          <div className='absolute left-4 top-3'>
            <SearchIcon
              strokeClasses={`${
                isInputActive ? 'stroke-[#5848BC]' : 'stroke-[#515151]'
              } transition duration-100`}
            />
          </div>
          <input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className='py-auto h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] font-light leading-6 text-[#979797] transition duration-100 focus:ring-1 focus:ring-[#5848BC]'
            type='text'
            placeholder='Search'
          />
        </div>
        <div className='cursor-pointer rounded-[14px] bg-[#1E1E1E] p-4'>
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
