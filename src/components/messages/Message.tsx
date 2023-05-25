import React from 'react';
import Image from 'next/image';

interface MyComponentProps {
  isActive: boolean;
  name: string;
  username: string;
  messagePreview: string;
  newMessages: number;
}
const Message: React.FC<MyComponentProps> = ({
  isActive,
  name,
  username,
  messagePreview,
  newMessages
}) => {
  return (
    <div
      onClick={() => console.log('clicked')}
      className={`${
        isActive
          ? ' border-[#393557] bg-[#282348]'
          : 'border-[#252525] bg-main-background'
      } cursor-pointer border-b border-r px-0`}
    >
      <div className='flex items-center justify-between px-4 py-[22px]'>
        <div className='flex items-center'>
          <Image
            key={0}
            src='/dummy-char.png' // Change to your image path
            alt={`Character Profile Picture ${0 + 1}`} // Change to your alt text
            width={40}
            height={40}
            className='rounded-full'
          />
          <div className='ml-3 flex flex-col'>
            <div className='mb-1 flex'>
              <h3 className='mr-2 text-[16px] font-bold leading-[22px]'>
                {name}
              </h3>
              <h4 className='text-sm font-light leading-[18px] text-[#979797]'>
                {username}
              </h4>
            </div>
            <div className='text-smibold text-[14px] leading-[18px]'>
              {messagePreview}
            </div>
          </div>
        </div>
        <div className='grid w-6 place-items-center rounded-[10px] bg-[#3E347E] py-[2px] text-[12px] font-semibold leading-[16px]'>
          {newMessages}
        </div>
      </div>
    </div>
  );
};

export default Message;
