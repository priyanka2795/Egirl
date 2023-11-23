import React, { useState } from 'react';
import DefaultTab from '../DefaultTab';
import avtarImg from '../../../../public/assets/avatar.png';
import avtarImg2 from '../../../../public/assets/filter-img-2.png';
import avtarImg3 from '../../../../public/assets/filter-img-1.png';
import avtarImg4 from '../../../../public/assets/filter-img-3.png';
import avtarImg5 from '../../../../public/assets/bookmark-img1.png';
import likeIcon from '../../../../public/assets/like-icon.png';
import Image from 'next/image';

const tabContent = ['All', 'Likes', 'Comments', 'Followings'];
const notificationMessage = [
  {
    id: 1,
    reviewuserImg: avtarImg,
    reviewIcon: likeIcon,
    reviewUserAction: 'Mika Chan subscribed to you for $25',
    messageTime: 'Today at 9:42 AM',
    active: true
  },
  {
    id: 2,
    reviewuserImg: avtarImg2,
    reviewUserAction: 'Mika Chan 2 started following you',
    messageTime: 'Today at 9:42 AM',
    active: true
  },
  {
    id: 3,
    reviewuserImg: avtarImg3,
    reviewUserAction: 'Some user with the long nickname started following you',
    messageTime: 'Today at 9:42 AM',
    active: false
  },
  {
    id: 4,
    reviewuserImg: avtarImg4,
    reviewUserAction: 'Anna Quigley liked your post',
    messageTime: 'Today at 9:42 AM',
    active: false,
    reviewOnPost: {
      userImg: avtarImg5,
      userPost: 'Hello dears, my mood today is ...',
      postTime: '22 Jun'
    }
  },
  {
    id: 5,
    reviewuserImg: avtarImg,
    reviewUserAction: 'Mika Chan liked your post',
    messageTime: 'Today at 9:42 AM',
    active: false,
    reviewOnPost: {
      userPost: 'Hello dears, my mood today is ...',
      postTime: '22 Jun'
    }
  },
  {
    id: 6,
    reviewuserImg: avtarImg,
    reviewUserAction: 'Anna Quigley left a comment',
    reviewUserContent:
      'Hello dears, my mood today is🤗Hello dears, my mood today is🤗Hello dears, my mood today is 🤗Hello dears, my mood today is 🤗Hello dears, my mood today is...',
    messageTime: 'Today at 9:42 AM',
    active: false
  }
];
interface NotificationModal {
  selectedMoreOption: string;
}
const NotificationModal = ({ selectedMoreOption }: NotificationModal) => {
  const [activeListTab, setActiveListTab] = useState('All');
  return (
    <>
      {selectedMoreOption === 'Notifications' ? 
      <div className={`transitions z-[80] ${selectedMoreOption === 'Notifications' ? 'fixed !bg-black/80  w-full h-full': 'absolute w-0'}`}>
      <div
      className={`transitions mt-4 inline-flex h-[804px] w-[425px] flex-col items-start justify-start rounded-[14px] bg-zinc-900 pb-6 ${
        selectedMoreOption === 'Notifications' 
          ? 'ml-4'
          : 'invisible -ml-[280px] w-0 '
      }`}
    >
      <div className='sticky top-0'>
        <DefaultTab
          activeListTab={activeListTab}
          setActiveTab={setActiveListTab}
          tabContentArray={tabContent}

        />
        <div className='flex flex-col gap-6 px-6 pt-4'>
          {notificationMessage.map((items) => {
            return (
              <div key={items.id} className='flex gap-4 '>
                <div className='h-7 w-7 min-w-[28px]'>
                  <Image
                    className='rounded-full'
                    src={items.reviewuserImg}
                    alt=''
                  />
                </div>
                <div className='w-full'>
                  <div className='flex flex-col gap-[5px]'>
                    <div className='flex gap-[5px] items-center'>
                      {items.reviewIcon && (
                        <div>
                          <Image src={items.reviewIcon} alt='' />
                        </div>
                      )}

                      <h5 className='text-base font-bold leading-tight text-white '>
                        {items.reviewUserAction}
                      </h5>
                      {
                        items.active &&
                        <div className='relative w-2 h-2 ml-auto'>
                        <div className='absolute top-0 left-0 w-2 h-2 bg-red-500 border rounded-full border-neutral-900'></div>
                      </div>
                      }
                    </div>

                    {items.reviewOnPost && (
                      <div className='my-3 flex w-full gap-3 rounded-[14px] bg-[#121212] p-3'>
                        {items.reviewOnPost.userImg && (
                          <div className='w-full max-w-[42px] '>
                            <Image src={items.reviewOnPost.userImg} alt='' />
                          </div>
                        )}

                        <div className='flex w-full flex-col gap-[6px]'>
                          <div>{items.reviewOnPost.userPost}</div>
                          <div className='flex justify-between'>
                            <div className='text-sm font-normal leading-[18px] text-[#8C7DD0]'>
                              View post
                            </div>
                            <div className='text-[13px] font-normal leading-[18px] text-[#515151]'>
                              22 Jun
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {items.reviewUserContent && (
                    <>
                      <div className='flex gap-2 mt-4 mb-3'>
                        <div className='h-[inherit] w-full max-w-[3px] rounded-full bg-[#272727]/50'></div>
                        <p className='py-[2px] text-sm font-normal leading-none text-white'>
                          {items.reviewUserContent}
                        </p>
                      </div>
                      <div className='mb-3 text-sm font-normal leading-none text-[#8C7DD0]'>
                        Read more
                      </div>
                    </>
                  )}

                  <p className='text-base font-normal leading-tight text-neutral-600'>
                    {items.messageTime}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div> 
    : ''}
    </>
    
    
  );
};

export default NotificationModal;
