import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SearchIcon from '../common/Search/SearchIcon';
import useScroll from '../../../hooks/useScroll';
import MailPlus from './svg/mail-plus-icon.svg';
import TestIcon from './TestIcon';
import Character from './Character';
import CharacterSmall from './CharacterSmall';
import SearchAltIcon from './svg/search-alt.svg';


interface MessageData {
  name: string;
  username: string;
  messagePreview: string;
  newMessages: number;
  timeLastSeen: string;
  currentlyActive?: boolean;
}

const messages: MessageData[] = [
  {
    name: 'Mika-chan',
    username: '@mikachan',
    messagePreview: 'Doing well, thank...',
    newMessages: 3,
    timeLastSeen: '6h'
  },
  {
    name: 'Mika-chan2',
    username: '@mikachan2',
    messagePreview: 'Doing well, thank...',
    newMessages: 14,
    timeLastSeen: '22 May'
  },
  {
    name: 'Mika-chan3',
    username: '@mikachan3',
    messagePreview: 'Doing well, thank...',
    newMessages: 14,
    timeLastSeen: '22 May',
    currentlyActive: true
  }
];

type props = {
  shrinkSidebar?: boolean;
  selectUserState?: string;
  handleSeletedUser?: () => void;
  roomData?:any;
  setSelectedRoom?:any;
};

export default function Characters({
  shrinkSidebar,
  handleSeletedUser,
  roomData,
  setSelectedRoom
}: props) {
  
  // active character state
  const [activeUsername, setActiveUsername] = useState<string>(
    messages[0].username
  );

  const handleUpdateUsername = (username: string, char_id:string) => {
    setActiveUsername(username);
    setSelectedRoom("One More Mika")
  };

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
      className={`relative z-50 max-w-[${sidebarWidth}px] w-[${sidebarWidth}px] flex-grow border-r-[2px] border-[#252525] bg-[#121212] lg:min-w-[${sidebarWidth}px]`}
    >
      {/* draggable portion */}
      <div
        className={`${
          isDragging ? 'bg-blue-400' : 'bg-transparent'
        } absolute -right-[3px] z-50 h-full w-1 cursor-col-resize transition duration-100 hover:bg-blue-400`}
        onMouseDown={handleMouseDown}
      ></div>
      {/* topbar with margins */}
      {/* <div
        className={`w-${sidebarWidth}px] min-w-[${sidebarWidth}px] max-w-[${sidebarWidth}px]`}
      >
      
        chicago
      </div> */}
      {sidebarWidth == 375 && (
        <div
          className={`sticky top-0 w-[260px] min-w-[260px] max-w-[260px] flex-col items-center gap-x-2 px-4 py-3 `}
        >
          <div className='flex justify-between w-full'>
            <div className='text-[22px] font-bold'>Chats</div>
            <div
              className='cursor-pointer rounded-[14px] bg-[#1E1E1E] p-4'
              onClick={handleSeletedUser}
            >
              <MailPlus />
            </div>
          </div>

          <div className='relative flex w-full mt-2'>
            <div className='absolute left-4 top-3'>
              <SearchIcon
                strokeclasses={`${
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
        </div>
      )}

      {sidebarWidth == 80 && (
        <div
          className={`sticky top-0 flex w-[80px] min-w-[80px] max-w-[80px] flex-col items-center gap-x-2 gap-y-2 border-b-[1px] border-r-[2px] border-[#252525] bg-[#111111] px-4 py-3`}
        >
          <div className='mx-4 cursor-pointer rounded-[14px] bg-[#1E1E1E] p-[15px]'>
            <MailPlus />
          </div>
          <div className='mx-4 cursor-pointer rounded-[14px] bg-[#1E1E1E]  p-[15px]'>
            <SearchAltIcon />
          </div>
        </div>
      )}

      <div
        style={{ height: 'calc(100vh - 132px)' }}
        className={`fixed top-[130px] overflow-auto transition-all duration-100 custom-scroll-bar w-[260px] w-[${sidebarWidth}px] 
    
        `}
      >
        {sidebarWidth == 375 &&
          roomData?.map((ele:any, index:number) => (
            <Character
              key={index}
              isActive={ele.character_id === activeUsername}
              name="Mika-chan"
              username={ele.character_id}
              // messagePreview={message.messagePreview}
              // newMessages={message.newMessages}
              // timeLastSeen={message.timeLastSeen}
              onClick={()=>handleUpdateUsername(ele.character_id,ele.character_id)}
              // currentlyActive={message.currentlyActive}
            />
          ))}
        {sidebarWidth == 80 &&
          roomData?.map((ele:any, index:number) => (
            <CharacterSmall
              key={index}
              username={ele.character_id}
              isActive={ele.character_id === activeUsername}
              onClick={()=>handleUpdateUsername(ele.character_id,ele.character_id)}
            />
          ))}
      </div>
    </div>
  );
}
