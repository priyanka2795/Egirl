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
import layers from './svg/Layers.svg';
import shop from './svg/shop.svg';
import palette from './svg/palette.svg';
import gift from './svg/gift.svg';
import imageGeneratorActive from './svg/image-generator.svg';
import viewImagesActive from './svg/view-images.svg';
import personalityActive from './svg/user-alt-1.svg';
import analyticsActive from './svg/Chart.svg';
import voiceActive from './svg/microphone-alt.svg';
import CharacterAdd from './NewCharacter/CharacterAdd';
import arrowLeft from '../../../public/assets/arrow-left.png';
import CloseIcon from '../../../public/assets/svgImages/close-icon.svg';

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
  const [newCharacter, setNewCharacter] = useState(false);
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
            onClick={() => setSidebarModal(!sidebarModal)}
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
            </div>
            <div className='mt-2 h-full'>
              <Image src={arrowDown} alt='' />
            </div>
            {sidebarModal && (
              <SidebarModal
                setSidebarModal={setSidebarModal}
                setNewCharacter={setNewCharacter}
              />
            )}
          </div>

          <SidebarMenuItem
            text='Analytics'
            href='/analytics'
            Icon={AnalyticsIcon}
            IconActive={analyticsActive}
            StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-3'
            }`}
            sideBarMenuText={`max-[1279px]:!hidden ${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            }`}
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
            IconActive={viewImagesActive}
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
            IconActive={imageGeneratorActive}
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
          {/* <SidebarMenuItem
            text='Personality'
            href='/personality'
            Icon={PersonalityIcon}
            IconActive={personalityActive}
            StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
              shrinkSideBar === true
                ? 'flex !justify-center max-w-[52px] mx-auto'
                : 'pl-3'
            }`}
            sideBarMenuText={`max-[1279px]:!hidden ${
              shrinkSideBar === true ? '!hidden' : 'w-full flex justify-center'
            } `}
          /> */}
          <div className='group relative flex cursor-pointer items-center justify-center rounded-[14px]  text-[16px] font-bold leading-[22px] text-white'>
            <SidebarMenuItem
              text='Personality'
              href='/personality'
              Icon={PersonalityIcon}
              IconActive={personalityActive}
              StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
                shrinkSideBar === true
                  ? 'flex !justify-center max-w-[52px] mx-auto'
                  : 'pl-3'
              }`}
              sideBarMenuText={`max-[1279px]:!hidden ${
                shrinkSideBar === true
                  ? '!hidden'
                  : 'w-full flex justify-center'
              } `}
            />
            <div className='invisible z-50 group-hover:visible group-hover:opacity-100'>
              <div className='absolute bottom-[75px] left-[80px]  w-[169px] w-[330px] scale-0  rounded-[14px] bg-[#2b2a2a] p-4 text-xs text-white transition-all group-hover:scale-100'>
                <div className='flex justify-between border-b-[1px] border-zinc-700 pb-3'>
                  <h4 className=' text-[18px] font-bold'>Personality</h4>
                  <div>
                    <CloseIcon />
                  </div>
                </div>
                <p className='mt-3 text-[14px] font-normal leading-5'>
                  Edit your character's profile and personalize to find more
                  followers.
                </p>
                <div className='mt-3 flex items-center justify-between'>
                  <p className='text-[14px] font-normal text-[#979797]'>
                    Step 2/5
                  </p>
                  <div className='flex items-center gap-4'>
                    <div className='flex h-9 w-9 items-center justify-center rounded-full border-[1px] border-white/[0.32]'>
                      <Image src={arrowLeft} alt='' />
                    </div>
                    <button className=' rounded-xl bg-[#5848BC] px-4 py-2 text-[14px] font-bold leading-[22px]'>
                      Next
                    </button>
                  </div>
                </div>
              </div>

              <div className='absolute -top-[30px] right-[20px] h-[24px] w-[20px] '>
                {/* <Image className='w-full h-full' src={downArrow} alt={''} /> */}
              </div>
            </div>
          </div>

          <SidebarMenuItem
            text='Voice'
            href='/voice'
            Icon={VoiceIcon}
            IconActive={voiceActive}
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
            IconActive={gift}
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
            IconActive={layers}
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
            IconActive={shop}
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
            IconActive={palette}
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
        {newCharacter && <CharacterAdd NewCharacterClose={setNewCharacter} />}
      </div>
    </>
  );
};

export default CreatorStudioSidebar;
