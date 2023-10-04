import Image from 'next/image';
import React, { useState } from 'react';
import userProfileIcon from '../../../public/assets/user-profile-grey.png';
import avatart1 from '../../../public/assets/avatar-cs-1.png';
import avatart2 from '../../../public/assets/avatar-cs-2.png';
import avatart3 from '../../../public/assets/avatar-cs-3.png';
import check from '../../../public/assets/check-cs.png';
import plusIcon from '../../../public/assets/plus-white.png';
import SidebarMenuItem from '@components/common/Sidebar/SidebarMenuItem';
import AnalyticsIcon from './svg/AnalyticsIcon';
import HomeActiveIcon from './svg/HomeActiveIcon';
import blank from '../../components/creator-studio/svg/blank.svg';
import CharacterAdd from './NewCharacter/CharacterAdd';

interface SidebarModals {
  // shrinkSideBar: boolean;
  // setShrinkSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  SetSidebarModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const sidebarModal = [
  {
    image: avatart1,
    name: 'Mika-chan'
  },
  {
    image: avatart2,
    name: 'Character 2'
  },
  {
    image: avatart3,
    name: 'Character 3'
  }
];

const SidebarModal = ({
  // shrinkSideBar,
  // setShrinkSideBar,
  SetSidebarModal
}: SidebarModals) => {
  const [activeProfile, setActiveProfile] = useState('Mika-chan');
  const [newCharacter, setNewCharacter] = useState(false);

  return (
    <div
      className={`fixed top-[131px] z-10 -ml-1 mt-2 flex h-max w-[260px] flex-col rounded-[14px] bg-[#1A1A1A] px-0 pb-3 pt-2`}
    >
      {/* <div className='px-6 py-[14px]'>
        <div className='flex gap-[10px] '>
          <div className='h-8 h-max w-8 items-center justify-center rounded-full bg-white/[0.08] p-2'>
            <div className='w-4 h-4 overflow-hidden rounded-full'>
              <Image className='w-full h-full' src={userProfileIcon} alt={''} />
            </div>
          </div>
          <div className='text-[8px] font-normal leading-[18px] text-[#ffffff]'>
            <SidebarMenuItem
              text='All Characters'
              href='/allcharacter'
              Icon={blank}
              IconActive={blank}
              StyleClasses={`${shrinkSideBar === true
                ? ''
                : 'text-[#ffffff] text-[5px] mt-[-8px] leading-[4px] mr-[5px]'
                }`}
              sideBarMenuText={`${shrinkSideBar === true ? '' : ' '
                } `}
            />
          </div>

        </div>
      </div> */}

      {sidebarModal.map((item, index) => {
        return (
          <div
            onClick={() => {
              setActiveProfile(item.name);
            }}
            key={index}
          >
            {activeProfile === item.name ? (
              <div className='flex px-4 py-[6px]'>
                <div className='mt-[5px] flex w-full items-center justify-between rounded-full bg-white/[0.08] py-2 pl-2 pr-[14px]'>
                  <div className='flex gap-[10px]'>
                    <div className='h-8 w-8'>
                      <Image
                        className='h-full w-full'
                        src={avatart1}
                        alt={''}
                      />
                    </div>
                    <div className='flex items-center text-[14px] font-normal leading-[18px] text-[#FFFFFF] '>
                      Mika-chan
                    </div>
                  </div>
                  <div className='h-4 w-4'>
                    <Image className='h-full w-full' src={check} alt={''} />
                  </div>
                </div>
              </div>
            ) : (
              <div className='flex gap-[10px] py-[14px] pl-6 pr-4'>
                <div className='h-8 w-8 overflow-hidden rounded-full'>
                  <Image className='h-full w-full' src={avatart2} alt={''} />
                </div>
                <div className='mt-[6px] text-[14px] font-normal leading-[18px] text-[#FFFFFF]'>
                  Character 2
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* <div className='flex px-4 py-[6px]'>
        <div className='flex justify-between w-full mt-[5px] pl-2 pr-[14px] py-2 rounded-full bg-white/[0.08]'>
            <div className='flex gap-[10px]'>
                <div className='w-8 h-8'>
                    <Image className='w-full h-full' src={avatart1} alt={''} />
                </div>
                <div className='mt-[6px] text-[14px] font-normal leading-[18px] text-[#FFFFFF]'>Mika-chan</div>
            </div>
            <div className='w-4 h-4 mt-[5px]'>
                <Image className='w-full h-full' src={check} alt={''} />
            </div>
        </div>
      </div>

      <div className='flex pl-6 pr-4 py-[14px] gap-[10px]'>
        <div className='w-8 h-8 overflow-hidden rounded-full'>
            <Image className='w-full h-full' src={avatart2} alt={''} />
        </div>
        <div className='text-[#FFFFFF] text-[14px] font-normal leading-[18px] mt-[6px]'>Character 2</div>
      </div> */}

      <button className='flex w-full px-6 py-[10px] '>
        <div
          className='flex w-full items-center justify-center gap-[6px] rounded-[12px] bg-[#5848BC] px-4 py-[10px]'
          onClick={() => {
            setNewCharacter(true), SetSidebarModal(false);
          }}
        >
          <div className='h-[18px] w-[18px]'>
            <Image className='h-full w-full' src={plusIcon} alt={''} />
          </div>
          <div className='text-[14px] font-bold leading-5 text-[#FFFFFF]'>
            New Character
          </div>
        </div>
      </button>

      {newCharacter && <CharacterAdd NewCharacterClose={setNewCharacter} />}
    </div>
  );
};

export default SidebarModal;
