import React from 'react';
import Image from 'next/image';
import ActiveIcon from './svg/active-icon.svg';

interface MyComponentProps {
  isActive: boolean;
  name: string;
  username: string;
  messagePreview: string;
  newMessages: number;
  timeLastSeen: string;
  onClick: (username: string) => void;
  currentlyActive?: boolean;
}
const Character: React.FC<MyComponentProps> = ({
  isActive,
  name,
  username,
  messagePreview,
  newMessages,
  timeLastSeen,
  currentlyActive,
  onClick
}) => {
  return (
    <div
      onClick={() => onClick(username)}
      className={`${
        isActive
          ? ' relative border-[#252525] bg-[#0d0c15] before:absolute before:left-0 before:top-0 before:block before:h-full before:w-[3px] before:bg-[#5848BC]'
          : 'border-[#252525] bg-[#121212]'
      } border-r-none cursor-pointer border-b px-0`}
    >
      <div className='flex items-center justify-between px-4 py-[22px]'>
        <div className='flex items-center'>
          <div className='relative'>
            <Image
              key={0}
              src='/dummy-char.png' // Change to your image path
              alt={`Character Profile Picture ${0 + 1}`} // Change to your alt text
              width={40}
              height={40}
              className='rounded-full'
            />
            {currentlyActive && (
              <div className='absolute right-0 top-0'>
                <ActiveIcon />
              </div>
            )}
          </div>
          <div className='ml-3 flex flex-col'>
            <div className='mb-1 flex items-center'>
              <h3
                className={`mr-2 text-[16px] leading-[22px] ${
                  isActive ? 'font-semibold' : 'font-normal'
                }`}
              >
                {name}
              </h3>
              {/* <h4 className='text-sm font-light leading-[18px] text-[#979797]'>
                {username} {' • ' + timeLastSeen}
              </h4> */}
            </div>
            {/* <div className='text-smibold text-[14px] leading-[18px]'>
              {messagePreview}
            </div> */}
          </div>
        </div>
        {/* <div className='grid w-6 place-items-center rounded-[10px] bg-[#3E347E] py-[2px] text-[12px] font-semibold leading-[16px]'>
          {newMessages}
        </div> */}
      </div>
    </div>
  );
};

export default Character;
