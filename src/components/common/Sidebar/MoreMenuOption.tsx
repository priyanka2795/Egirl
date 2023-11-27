import React, { useState } from 'react';
import NotificationModal from './NotificationModal';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';

const optionList = [
  {
    link: 'learning-center-partnerProgram',
    name: 'Partner Program'
  },
  {
    link: 'learning-center',
    name: 'Learning Center'
  },
  {
    link: '#',
    name: 'Settings'
  },
  {
    link: '#',
    name: 'Notifications'
  }
];
interface MoreMenuProps {
  activeMoreOption: string | undefined;
  moreOptionItem: any;
  classes: string;
  activeItem: any;
}
const MoreMenuOption = ({
  moreOptionItem,
  activeMoreOption,
  classes,
  activeItem
}: MoreMenuProps) => {
  return (
    <>
      <div
        className={` inline-flex w-[218px] flex-col items-start justify-start rounded-[14px] bg-[#1A1A1A]  py-2 shadow ${classes}`}
      >
        {optionList.map((items) => {
          return (
            <>
              <Link href={items.link} target='_blank'>
                <div
                  className={`flex w-full grow cursor-pointer items-center px-4 py-2.5 hover:bg-neutral-800 ${
                    activeMoreOption === items.name
                      ? 'justify-between bg-neutral-800'
                      : 'bg-zinc-900 '
                  }`}
                  onClick={() => {
                    moreOptionItem(items.name), activeItem('');
                  }}
                >
                  <a
                    className={`font-normal w-max text-sm leading-[18px] text-white `}
                    target={
                      items.name === 'Settings' ||
                      items.name === 'Notifications'
                        ? ''
                        : '_blank'
                    }
                  >
                    {items.name}
                  </a>
                  {/* {activeMoreOption === items && (
                  <div className='relative w-2 h-2'>
                    <div className='absolute top-0 left-0 w-2 h-2 bg-red-500 border rounded-full border-neutral-800'></div>
                  </div>
                )} */}
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MoreMenuOption;
