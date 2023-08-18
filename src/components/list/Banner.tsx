import React, { useState } from 'react';
import Image from 'next/image';
import messageInfoIcon from '../../../public/assets/message-square-info.png';
import blockIcon from '../../../public/assets/block-icon.png';
import bookmarkIcon from '../../../public/assets/bookmark.png';
import linkIcon from '../../../public/assets/link-icon.png';
import Cover from '../../../public/assets/cover.png';
import avatar from '../../../public/assets/mika-chan-sub-banner.png';
import userCheckIcon from '../../../public/assets/user-check-icon.png';
import threeDotsIcon from '../../../public/assets/three-dots-icon.png';
import blueTickIcon from '../../../public/assets/badge-check.png';
import locationIcon from '../../../public/assets/location-icon.png';
import calendarIcon from '../../../public/assets/calendar-icon.png';
import CollectionCoverModal from './CollectionCoverModal';
import AddToCollectionModal from './AddToCollectionModal';
import LeftArrow from './svg/leftArrow.svg';

const posts = [
  {
    number: '89',
    name: 'Posts'
  },
  {
    number: '2.17K',
    name: 'Followers'
  },
  {
    number: '569',
    name: 'Subscribers'
  }
];

const location = [
  {
    icon: locationIcon,
    name: 'Tokyo'
  },
  {
    icon: calendarIcon,
    name: 'Joined March 2023'
  }
];

const bottomButtons = [
  {
    name: 'Ahegao'
  },
  {
    name: 'Roleplay'
  },
  {
    name: 'Fashion Model'
  },
  {
    name: 'Semi-Realistic'
  }
];

const actions = [
  {
    icon: linkIcon,
    name: 'Copy link to profile'
  },
  {
    icon: bookmarkIcon,
    name: 'Add to collections'
  },
  {
    icon: blockIcon,
    name: 'Block'
  },
  {
    icon: messageInfoIcon,
    name: 'Report'
  }
];

interface BannerProp {
  backFromProfile?: React.Dispatch<React.SetStateAction<boolean>>;
}
const Banner = ({ backFromProfile }: BannerProp) => {
  const [actionDivShow, setActionDivShow] = useState(false);
  const [exploreSelectedTab, setExploreSelected] = useState('');
  const [collectionModalState, setCollectionModalState] = useState(false);

  const handleExploreSelected = (e: any) => {
    setExploreSelected(e.target.innerText);

    if (exploreSelectedTab === 'Add to collections') {
      setCollectionModalState(true);
    } else {
      setCollectionModalState(false);
    }
  };
  console.log(exploreSelectedTab, 'test');

  const handleActionDivShow = (e: any) => {
    setActionDivShow(!actionDivShow);
  };

  return (
    <div className='px-8'>
      {backFromProfile === undefined ? (
        ''
      ) : (
        <div
          className='flex gap-2 my-4 text-lg font-bold cursor-pointer'
          onClick={() => {
            backFromProfile(false);
          }}
        >
          <LeftArrow />
          Mika-chan
        </div>
      )}

      <div>
        <div className='h-max w-full overflow-hidden rounded-[16px] bg-[#121212]'>
          <div className='block w-full'>
            <Image className='w-full h-full' src={Cover} alt='' />
            <div className='mb-5 mt-[-62px] flex w-full items-center justify-between px-[24px]'>
              <div className='relative h-[120px] w-[120px] overflow-hidden rounded-full'>
                <Image className='w-full h-full' src={avatar} alt='' />
              </div>
              <div className='flex gap-[12px] self-end'>
                <button className='flex h-max gap-2 rounded-[14px] bg-white/[0.08] px-[20px] py-[13px]'>
                  <Image
                    src={userCheckIcon}
                    alt=''
                    className='object-contain'
                  />
                  <div className='text-[16px] font-bold text-[#FFFFFF]'>
                    Following
                  </div>
                </button>
                <button className='h-max rounded-[14px] bg-[#5848BC] px-[20px] py-[13px] text-base font-bold text-[#FFFFFF]'>
                  Subscribe
                </button>
                <div className='relative'>
                  <Image
                    className='relative cursor-pointer'
                    onClick={handleActionDivShow}
                    src={threeDotsIcon}
                    alt=''
                  />
                  {actionDivShow ? (
                    <>
                      <div className='absolute right-0 top-[65px] z-0 flex h-max w-[218] w-[218px] flex-col items-start rounded-[14px] bg-[#1A1A1A] px-2 py-2'>
                        {actions.map((item, index) => {
                          return (
                            <div
                              key={index}
                              onClick={(e) => handleExploreSelected(e)}
                              className={`flex w-full cursor-pointer gap-2 px-[16px] py-[10px] ${
                                exploreSelectedTab === item.name
                                  ? ' rounded-[8px] bg-white/[0.12] '
                                  : ''
                              }`}
                            >
                              <Image
                                className='object-contain'
                                src={item.icon}
                                alt={''}
                              />
                              <div className='text-[14px] font-normal text-[#FFFFFF]'>
                                {item.name}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className='flex px-6 pb-[24px]'>
            <div className=''>
              <div className='flex gap-[2px]'>
                <div className='text-[22px] font-bold text-[#FFFFFF]'>
                  Mika-chan
                </div>
                <div className='mt-2 h-[24px] w-[24px]'>
                  <Image className='w-full h-full' src={blueTickIcon} alt='' />
                </div>
              </div>

              <div className='mt-[2px] text-[15px] font-normal text-[#979797]'>
                @mikachan
              </div>
              <div className='mt-[12px] text-[15px] font-normal text-[#FFFFFF]'>
                Shy fox girl looking for adventure
                ·冒険を探している恥ずかしがり屋のキツ I have a personality and
                emotions. I can experience joy, sadness, anger, and everything
                in between. I express myself through my voice, facial
                expressions, and body language, all meticulously crafted
              </div>

              <div className='mt-[8px] flex gap-2'>
                {posts.map((item, index) => {
                  return (
                    <div key={index} className='flex gap-1'>
                      <div className='text-[13px] font-bold text-[#FFFFFF]'>
                        {item.number}
                      </div>
                      <div className='text-[13px] font-normal text-[#979797]'>
                        {item.name}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className='mt-[8px] flex gap-[10px]'>
                {location.map((item, index) => {
                  return (
                    <div key={index} className='flex gap-[6px]'>
                      <Image
                        className='object-contain'
                        src={item.icon}
                        alt=''
                      />
                      <div className='text-[13px] font-normal text-[#FFFFFF]'>
                        {item.name}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className='mt-[12px] flex'>
                {bottomButtons.map((item, index) => {
                  return (
                    <div key={index} className='mr-2'>
                      <button className='rounded-[6px] bg-white/[0.08] px-[8px] py-[3px] text-[12px] font-normal text-[#FFFFFF]'>
                        {item.name}
                      </button>
                    </div>
                  );
                })}

                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {collectionModalState && (
        <AddToCollectionModal closeModalState={setCollectionModalState} />
      )}
    </div>
  );
};

export default Banner;