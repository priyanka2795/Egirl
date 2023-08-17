import Image from 'next/image';
import React, { useState } from 'react';
import avtar from '../../../public/assets/avatar.png';
import arrowDown from '../../../public/assets/arrow-down.png';
// import ChartIcon from '../../../public/assets/Chart.svg';
import SidebarMenuItem from '@components/common/Sidebar/SidebarMenuItem';
import AnalyticsIcon from './svg/AnalyticsIcon';
import ImageGeneratorIcon from './svg/ImageGeneratorIcon';
import HomeActiveIcon from './svg/HomeActiveIcon';
import PersonalityIcon from './svg/PersonalityIcon';
import VoiceIcon from './svg/VoiceIcon';
import GiftIcon from './svg/GiftIcon';
import ViewStyleIcon from './svg/ViewStyleIcon';
import ViewImg from './svg/ViewImg';
import MarketplaceIcon from './svg/MarketplaceIcon';
import StyleGenerator from './svg/StyleGenerator';
import MoreIcon from './svg/MoreIcon.svg';
import SidebarModal from './SidebarModal';
import MoreOptionsModal from './MoreOptionsModal';

interface CreatorStudioNavbarPropProp {
  shrinkSideBar: boolean;
  setShrinkSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreatorStudioSidebar = ({
  shrinkSideBar,
  setShrinkSideBar
}: CreatorStudioNavbarPropProp) => {
  const [sidebarModal, setSidebarModal] = useState(false);
  const [moreOptionsModal, setMoreOptionsModal] = useState(false);
  // const [sideBarShrink, setSideBarShrink] = useState(false);
  return (
    <>
      <div
        className={`flex h-full w-full flex-col justify-between overflow-y-auto bg-[#121212] ${
          shrinkSideBar === true ? 'max-w-[68px]' : ' max-w-[276px]'
        }`}
      >
        <div>
          <div
            className='flex cursor-pointer items-center justify-between py-[14px] pl-6 pr-4'
            onClick={() => setSidebarModal(!sidebarModal)}
          >
            <div className='relative flex items-center w-full gap-2'>
              <div className='h-[32px] w-[32px]'>
                <Image
                  src={avtar}
                  alt=''
                  className='h-[32px] w-[32px] object-cover'
                />
              </div>
              <div
                className={`text-[18px] font-medium ${
                  shrinkSideBar === true ? '!hidden' : ''
                }`}
              >
                Mika-chan
              </div>
              {sidebarModal && <SidebarModal />}
            </div>
            <div className='h-full'>
              <Image src={arrowDown} alt='' />
            </div>
          </div>

          <SidebarMenuItem
            text='Analytics'
            href='/home'
            Icon={AnalyticsIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-6'
            }`}
            sideBarMenuText={`${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            } `}
          />
          <div
            className={`h-10 items-start justify-start gap-2.5 px-6 py-2.5 ${
              shrinkSideBar === true ? 'hidden' : 'inline-flex '
            }`}
          >
            <div
              className={`text-[13px] font-semibold uppercase leading-tight tracking-tight text-neutral-600`}
            >
              Images
            </div>
          </div>
          <SidebarMenuItem
            text='View Images'
            href='/home'
            Icon={ViewImg}
            IconActive={HomeActiveIcon}
            StyleClasses={`${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-6'
            }`}
            sideBarMenuText={`${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            } `}
          />
          <SidebarMenuItem
            text='Image Generator'
            href='/home'
            Icon={ImageGeneratorIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-6'
            }`}
            sideBarMenuText={`${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            } `}
          />

          <div
            className={`h-10 items-start justify-start gap-2.5 px-6 py-2.5 ${
              shrinkSideBar === true ? 'hidden' : 'inline-flex '
            }`}
          >
            <div className='text-[13px] font-semibold uppercase leading-tight tracking-tight text-neutral-600'>
              Chatbot
            </div>
          </div>
          <SidebarMenuItem
            text='Personality'
            href='/home'
            Icon={PersonalityIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-6'
            }`}
            sideBarMenuText={`${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            } `}
          />
          <SidebarMenuItem
            text='Voice'
            href='/home'
            Icon={VoiceIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-6'
            }`}
            sideBarMenuText={`${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            } `}
          />
          <SidebarMenuItem
            text='Gifts'
            href='/home'
            Icon={GiftIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-6'
            }`}
            sideBarMenuText={`${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            } `}
          />
          <div
            className={`h-10 items-start justify-start gap-2.5 px-6 py-2.5 ${
              shrinkSideBar === true ? 'hidden' : 'inline-flex '
            }`}
          >
            <div className='text-[13px] font-semibold uppercase leading-tight tracking-tight text-neutral-600'>
              Styles
            </div>
          </div>
          <SidebarMenuItem
            text='View Styles'
            href='/home'
            Icon={ViewStyleIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-6'
            }`}
            sideBarMenuText={`${
              shrinkSideBar === true ? '!hidden' : 'w-full'
            } `}
          />
          <SidebarMenuItem
            text='Marketplace'
            href='/home'
            Icon={MarketplaceIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-6'
            }`}
            sideBarMenuText={`${
              shrinkSideBar === true ? '!hidden' : 'w-full'
            } `}
          />
          <SidebarMenuItem
            text='Style Generator'
            href='/home'
            Icon={StyleGenerator}
            IconActive={HomeActiveIcon}
            StyleClasses={`${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-6'
            }`}
            sideBarMenuText={`${
              shrinkSideBar === true ? '!hidden' : 'w-full'
            } `}
          />
        </div>

        <div
          className='relative flex items-center gap-2 py-3 pl-6 cursor-pointer mt-[200px]'
          onClick={() => setMoreOptionsModal(!moreOptionsModal)}
        >
          <div>
            <MoreIcon />
          </div>
          <p
            className={`text-[15px] font-semibold text-white ${
              shrinkSideBar === true ? '!hidden' : 'w-full'
            }`}
          >
            More
          </p>
          {moreOptionsModal && <MoreOptionsModal />}
        </div>
      </div>
    </>
  );
};

export default CreatorStudioSidebar;
