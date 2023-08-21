import React from 'react';

const MessageIndicator = () => {
  return (
    <div className='fixed -bottom-[5px] flex pt-2 pb-4'>
      <div className='typing-indicator'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className='text-xs font-semibold leading-none text-[#979797]'>
        Mika-chan is typing
      </p>
    </div>
  );
};

export default MessageIndicator;
