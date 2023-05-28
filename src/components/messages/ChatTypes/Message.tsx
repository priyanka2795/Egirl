import React from 'react';
import Image from 'next/image';

interface MessageProps {
  src: string;
  alt: string;
  name: string;
  time: string;
  message: string;
}

const Message: React.FC<MessageProps> = ({
  src,
  alt,
  name,
  time,
  message
}) => {
  return (
    <div className='flex w-full items-center py-4'>
      <Image
        key={0}
        src={src} // Change to your image path
        alt={alt} // Change to your alt text
        width={40}
        height={40}
        className='rounded-full'
      />
      <div className='ml-3 flex flex-col'>
        <div className='mb-[2px] flex items-center'>
          <span className='mr-2 text-[15px] font-semibold leading-5'>{name}</span>
          <span className='text-xs font-light text-[#979797]'>{time}</span>
        </div>
        <span className='text-xs font-light leading-[18px]'>
          {message}
        </span>
      </div>
    </div>
  );
};

export default Message;
