import React, { useState } from 'react';
import NotificationModal from './NotificationModal';

const optionList = [
  'Partner Program',
  'Learning Center',
  'Settings',
  'Notifications'
];

interface MoreMenuProps{
    activeMoreOption:string | undefined,
    moreOptionItem: any    
}
const MoreMenuOption = ({moreOptionItem , activeMoreOption}: MoreMenuProps) => {

  return (
    <>
      <div className='absolute left-[10px] top-[60px] inline-flex w-[218px] flex-col items-start justify-start rounded-[14px] bg-[#1A1A1A] bg-zinc-900 py-2 shadow'>
        {optionList.map((items) => {
          return (
            <>
              <div
                className={`flex w-full grow cursor-pointer items-center px-4 py-2.5 hover:bg-neutral-800 ${
                    activeMoreOption === items
                    ? 'justify-between bg-neutral-800'
                    : 'bg-zinc-900 '
                }`}
                onClick={() => moreOptionItem(items)}
              >
                <div className='w-max text-sm font-normal leading-[18px] text-white'>
                  {items}
                </div>
                {activeMoreOption === items && (
                  <div className='relative w-2 h-2'>
                    <div className='absolute top-0 left-0 w-2 h-2 bg-red-500 border rounded-full border-neutral-800'></div>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>

    
    </>
  );
};

export default MoreMenuOption;
