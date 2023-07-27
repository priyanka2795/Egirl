import React, { useState } from 'react';
import DefaultTab from '../DefaultTab';
import avtarImg from '../../../../public/assets/avatar.png';
import likeIcon from '../../../../public/assets/like-icon.png';
import Image from 'next/image';

const tabContent = ['All', 'Likes', 'Comments', 'Following'];
const notificationMessage = [
  {
    id: 1,
    userImg: avtarImg,
    likeIcon: likeIcon,
    message: 'Mika Chan subscribed to you for $25',
    messageTime: 'Today at 9:42 AM',
    active: true
  },
  {
    id: 2,
    userImg: avtarImg,
    message: 'Mika Chan 2 started following you',
    messageTime: 'Today at 9:42 AM',
    active: true
  },
  {
    id: 3,
    userImg: avtarImg,
    message: 'Some user with the long nickname started following you',
    messageTime: 'Today at 9:42 AM',
    active: false
  },
  {
    id: 4,
    userImg: avtarImg,
    message: 'Anna Quigley liked your post',
    messageTime: 'Today at 9:42 AM',
    active: false
  },
  {
    id: 5,
    userImg: avtarImg,
    message: 'Mika Chan liked your post',
    messageTime: 'Today at 9:42 AM',
    active: false
  },
  {
    id: 6,
    userImg: avtarImg,
    message: 'Anna Quigley left a comment',
    paraContent:
      'Hello dears, my mood today is🤗Hello dears, my mood today is🤗Hello dears, my mood today is 🤗Hello dears, my mood today is 🤗Hello dears, my mood today is...',
    messageTime: 'Today at 9:42 AM',
    active: false
  }
];
const NotificationModal = () => {
  const [activeListTab, setActiveListTab] = useState('All');
  return (
    <div className='inline-flex h-[804px] w-[425px] flex-col items-start justify-start rounded-[14px] bg-zinc-900 shadow'>
      <DefaultTab
        activeListTab={activeListTab}
        setActiveTab={setActiveListTab}
        tabContentArray={tabContent}
      />
      <div className='flex flex-col gap-6 px-6 pt-4'>
        {notificationMessage.map((items) => {
          return (
            <div key={items.id} className='flex gap-4 '>
              <div className='h-7 w-7'>
                <Image src={items.userImg} alt='' />
              </div>
              <div>
                <div className='flex gap-[5px]'>
                  {items.likeIcon && (
                    <div>
                      <Image src={items.likeIcon} alt='' />
                    </div>
                  )}

                  <h5 className='text-base font-bold leading-tight text-white '>
                    {items.message}
                  </h5>
                </div>
                {items.paraContent && <p className="text-sm font-normal leading-none text-white ">{items.paraContent}</p>}

                <p className='text-base font-normal leading-tight text-neutral-600 '>
                  {items.messageTime}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationModal;
