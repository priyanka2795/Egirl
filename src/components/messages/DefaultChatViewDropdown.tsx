import React, { useState } from 'react';
import ArrowDown from './svg/arrow-down.svg';
import ArrowUp from './svg/arrow-up.svg';
import CheckIcon from './svg/check-icon.svg';

const viewOptions = ['Default view', 'Expanded view', ' Focused view'];
const DefaultChatViewDropdown = () => {
  const [chatView, setChatView] = useState(false);
  const [selectedChatView, setSelectedChatView] = useState('');
  const handleSelectedOption = (items: string) => {
    setSelectedChatView(items);
    setChatView(false);
  };
  return (
    <div className='relative'>
      <div
        className='flex cursor-pointer text-[14px] font-normal leading-none text-neutral-400'
        onClick={() => setChatView(!chatView)}
      >
        {selectedChatView.length > 1 ? selectedChatView : 'Default view'}
        <div className='ml-1'>{chatView ? <ArrowUp /> : <ArrowDown />}</div>
      </div>
      {chatView && (
        <div className='absolute right-0 top-[100%] inline-flex h-[130px] w-[218px] flex-col items-start justify-start rounded-2xl bg-zinc-900 py-2 shadow'>
          <div className='cursor-pointer flex-col items-center justify-start gap-2 self-stretch bg-white bg-opacity-5'>
            {viewOptions.map((items) => {
              return (
                <div
                  className={`flex shrink grow basis-0 items-center justify-between px-4 py-2.5 text-[14px] font-normal leading-none text-white ${
                    selectedChatView === items ? 'bg-white/10' : ''
                  }`}
                  onClick={(e) => handleSelectedOption(items)}
                >
                  {items}
                  {selectedChatView === items ? <CheckIcon /> : ''}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DefaultChatViewDropdown;
