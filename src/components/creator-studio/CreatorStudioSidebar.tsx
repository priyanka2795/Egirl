import Image from 'next/image';
import React, { useState } from 'react';
import avtar from '../../../public/assets/mica-chan-avatar-image.png';
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
        className={`flex h-[calc(100vh-72px)] w-full flex-col justify-between overflow-y-auto bg-[#121212] max-[1279px]:max-w-[68px] ${
          shrinkSideBar === true ? 'max-w-[68px]' : ' max-w-[300px]'
        }`}
      >
        <div
          className={`max-[1279px]:mx-2 ${
            shrinkSideBar !== true ? 'mx-3 max-w-[276px] ' : 'mx-2'
          }`}
        >
          <div
            className='flex cursor-pointer items-center justify-between py-[14px] pl-3 pr-4'
            onClick={() => setSidebarModal(true)}
          >
            <div className='relative flex w-full items-center gap-2'>
              <div className='h-[32px] w-[32px]'>
                <Image
                  src={avtar}
                  alt=''
                  className='h-[32px] w-[32px] rounded-[100px] object-cover'
                />
              </div>
              <div
                className={`text-[15px] font-semibold leading-5 text-white max-[1279px]:!hidden ${
                  shrinkSideBar === true ? '!hidden' : ''
                }`}
              >
                Mika-chan
              </div>
              {sidebarModal && (
                <SidebarModal SetSidebarModal={setSidebarModal} />
              )}
            </div>
            <div className='mt-2 h-full'>
              <Image src={arrowDown} alt='' />
            </div>
          </div>

          <SidebarMenuItem
            text='Analytics'
            href='/analytics'
            Icon={AnalyticsIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-3'
            }`}
            sideBarMenuText={`max-[1279px]:!hidden ${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            } `}
          />
          <div
            className={`max-[1279px]:mb-2 max-[1279px]:border-b-2 max-[1279px]:border-[#252525] ${
              shrinkSideBar === true
                ? 'mb-2 border-b-2 border-[#252525]'
                : 'min-[1280px]:inline-flex min-[1280px]:h-10 min-[1280px]:items-start min-[1280px]:justify-start min-[1280px]:gap-2.5 min-[1280px]:px-3 min-[1280px]:py-2.5'
            }`}
          >
            <div
              className={`max-[1279px]:hidden ${
                shrinkSideBar === true
                  ? 'hidden'
                  : 'text-[13px] font-semibold uppercase leading-5 tracking-tight text-neutral-600 '
              }`}
            >
              Images
            </div>
          </div>
          <SidebarMenuItem
            text='View Images'
            href='/view-images'
            Icon={ViewImg}
            IconActive={HomeActiveIcon}
            StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-3'
            }`}
            sideBarMenuText={`max-[1279px]:!hidden ${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            } `}
          />
          <SidebarMenuItem
            text='Image Generator'
            href='/image-generator'
            Icon={ImageGeneratorIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-3'
            }`}
            sideBarMenuText={`max-[1279px]:!hidden ${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            } `}
          />

          <div
            className={`max-[1279px]:mb-2 max-[1279px]:border-b-2 max-[1279px]:border-[#252525] ${
              shrinkSideBar === true
                ? 'mb-2 border-b-2 border-[#252525]'
                : 'min-[1280px]:inline-flex min-[1280px]:h-10 min-[1280px]:items-start min-[1280px]:justify-start min-[1280px]:gap-2.5 min-[1280px]:px-3 min-[1280px]:py-2.5'
            }`}
          >
            <div
              className={`text-[13px] font-semibold uppercase leading-5 tracking-tight text-neutral-600 max-[1279px]:hidden ${
                shrinkSideBar === true ? 'hidden' : ''
              }`}
            >
              Chatbot
            </div>
          </div>
          <SidebarMenuItem
            text='Personality'
            href='/personality'
            Icon={PersonalityIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-3'
            }`}
            sideBarMenuText={`max-[1279px]:!hidden ${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            } `}
          />
          <SidebarMenuItem
            text='Voice'
            href='/voice'
            Icon={VoiceIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-3'
            }`}
            sideBarMenuText={`max-[1279px]:!hidden ${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            } `}
          />
          <SidebarMenuItem
            text='Gifts'
            href='/gifts'
            Icon={GiftIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-3'
            }`}
            sideBarMenuText={`max-[1279px]:!hidden ${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            } `}
          />
          <div
            className={`max-[1279px]:mb-2 max-[1279px]:border-b-2 max-[1279px]:border-[#252525] ${
              shrinkSideBar === true
                ? 'mb-2 border-b-2 border-[#252525]'
                : 'min-[1280px]:inline-flex min-[1280px]:h-10 min-[1280px]:items-start min-[1280px]:justify-start min-[1280px]:gap-2.5 min-[1280px]:px-3 min-[1280px]:py-2.5 '
            }`}
          >
            <div
              className={`max-[1279px]:hidden ${
                shrinkSideBar === true
                  ? 'hidden'
                  : 'text-[13px] font-semibold uppercase leading-tight tracking-tight text-neutral-600'
              }`}
            >
              Styles
            </div>
          </div>
          <SidebarMenuItem
            text='View Styles'
            href='/view-style'
            Icon={ViewStyleIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-3'
            }`}
            sideBarMenuText={`max-[1279px]:!hidden ${
              shrinkSideBar === true ? '!hidden' : 'w-full'
            } `}
          />
          <SidebarMenuItem
            text='Marketplace'
            href='/marketplace'
            Icon={MarketplaceIcon}
            IconActive={HomeActiveIcon}
            StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-3'
            }`}
            sideBarMenuText={`max-[1279px]:!hidden ${
              shrinkSideBar === true ? '!hidden' : 'w-full'
            } `}
          />
          <SidebarMenuItem
            text='Style Generator'
            href='/style-generator'
            Icon={StyleGenerator}
            IconActive={HomeActiveIcon}
            StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-3'
            }`}
            sideBarMenuText={`max-[1279px]:!hidden ${
              shrinkSideBar === true ? '!hidden' : 'w-full'
            } `}
          />
        </div>

        <div
          className={`max-[1279px]:mx-2 ${
            shrinkSideBar !== true ? 'mx-3 max-w-[276px] ' : 'mx-2'
          }`}
        >
          <div
            className='relative mt-[50px] flex cursor-pointer items-center gap-2 py-3 pl-3'
            onClick={() => setMoreOptionsModal(!moreOptionsModal)}
          >
            <div>
              <MoreIcon />
            </div>
            <p
              className={`text-[15px] font-semibold leading-5 text-white max-[1279px]:!hidden ${
                shrinkSideBar === true ? '!hidden' : 'w-full'
              }`}
            >
              More
            </p>
            {moreOptionsModal && <MoreOptionsModal />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorStudioSidebar;
