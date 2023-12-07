import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import avtar from '@/assets/mica-chan-avatar-image.webp';
import arrowDown from '@/assets/chevron-down24.webp';
import SidebarMenuItem from '@components/common/Sidebar/SidebarMenuItem';
import AnalyticsIcon from './svg/AnalyticsIcon';
import ImageGeneratorIcon from './svg/ImageGeneratorIcon';
import PersonalityIcon from './svg/PersonalityIcon';
import VoiceIcon from './svg/VoiceIcon';
import GiftIcon from './svg/GiftIcon';
import ViewStyleIcon from './svg/ViewStyleIcon';
import ViewImg from './svg/ViewImg';
import MarketplaceIcon from './svg/MarketplaceIcon';
import StyleGenerator from './svg/StyleGenerator';
import MoreIcon from './svg/circle-dots-horizontal.svg';
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
import HoverModal from '@components/list/HoverModal';
import userAdd from '@/assets/user-plus1.webp';
import CreateCharacterModal from '@components/list/CreateCharacterModal';
import Cookies from 'js-cookie';
import { getAllCharacter, profileCharacter } from 'services/services';
interface CreatorStudioNavbarPropProp {
  shrinkSideBar: boolean;
  IsOpen: any;
  OnClose: any;
  TourSteps: any;
  tourCount: number;
  setTourCount: React.Dispatch<React.SetStateAction<number>>;
  setUserGuide: any;
  setIsTourOpen: any;
  UserGuide: any;
  activeProfile: any;
  setActiveProfile: any;
  setCreateCharacterData: any;
  setUserDetails: any;
  createCharacterData: any;
  setCreateCharacterToggle: React.Dispatch<React.SetStateAction<boolean>>;
  createCharacterToggle: boolean;
  setBannerData: any;
}

interface CreateCharacter {
  setTourCount: React.Dispatch<React.SetStateAction<number>>;
}

const CreatorStudioSidebar = ({
  shrinkSideBar,
  IsOpen,
  OnClose,
  TourSteps,
  tourCount,
  setTourCount,
  setUserGuide,
  setIsTourOpen,
  UserGuide,
  setUserDetails,
  activeProfile,
  setActiveProfile,
  setCreateCharacterData,
  createCharacterData,
  setBannerData,
  setCreateCharacterToggle,
  createCharacterToggle
}: CreatorStudioNavbarPropProp) => {
  const [sidebarModal, setSidebarModal] = useState<boolean>(false);
  const [moreOptionsModal, setMoreOptionsModal] = useState<boolean>(false);
  const [newCharacter, setNewCharacter] = useState<boolean>(false);
  const [createCharacter, setCreateCharacter] = useState<boolean>(false);
  const [welcomeModal, setWelcomeModal] = useState<boolean>(false);
  const [allCharacterData, setAllCharacterData] = useState<any>();
  const [createToggle, setCreateToggle] = useState<boolean>(false);
  const [activeProfileId, setActiveProfileId] = useState<any>();
  const [activeProfileData, setActiveProfileData] = useState<any>();
  const token: any = Cookies.get('accessToken');

  const handleNewCharacter = () => {
    setCreateCharacter(true);
    setWelcomeModal(false);
  };
  // const [sideBarShrink, setSideBarShrink] = useState(false);
  const GuideStep1 = TourSteps[1].id;
  const GuideStep2 = TourSteps[2].id;
  const GuideStep3 = TourSteps[3].id;
  const GuideStep4 = TourSteps[4].id;

  useEffect(() => {
    getAllCharacter(token)
      .then((res: any) => {
        setAllCharacterData(res?.data);
        if (res?.data.length === 1) {
          Cookies.set('character_id', res?.data[0]?.id);
        }
        const characterIdFromCookies = Cookies.get('character_id');
        if (
          !characterIdFromCookies ||
          characterIdFromCookies == undefined ||
          characterIdFromCookies == null ||
          characterIdFromCookies == ''
        ) {
          Cookies.set('character_id', res?.data[0]?.id);
          setActiveProfileId(res?.data[0]?.id); // Set active profile ID
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [UserGuide, createCharacterData, createToggle]);

  useEffect(() => {
    const characterId = Cookies.get('character_id');
    setActiveProfileId(characterId);
  }, [activeProfile]);

  useEffect(() => {
    profileCharacter(activeProfileId, token)
      .then((res: any) => {
        setActiveProfileData(res?.data[0]);
        setBannerData(res?.data[0]);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [activeProfileId]);

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
          {allCharacterData && allCharacterData?.length > 0 ? (
            <div
              className='relative flex cursor-pointer items-center justify-between py-[14px] pl-3 pr-4'
              onClick={() => setSidebarModal(!sidebarModal)}
            >
              <div className='relative flex items-center w-full gap-2'>
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
                  {activeProfileData
                    ? activeProfileData?.display_name
                    : 'Select Character'}
                </div>
              </div>
              <div className='h-full mt-2'>
                <Image src={arrowDown} alt='' />
              </div>
              {sidebarModal && (
                <SidebarModal
                  setSidebarModal={setSidebarModal}
                  setNewCharacter={setNewCharacter}
                  allCharacterData={allCharacterData}
                  setActiveProfile={setActiveProfile}
                  activeProfile={activeProfile}
                  setActiveProfileId={setActiveProfileId}
                />
              )}
            </div>
          ) : shrinkSideBar ? (
            <div className='flex flex-col items-start self-stretch gap-2 pt-6 pb-2'>
              <button
                onClick={() => setWelcomeModal(true)}
                className='flex h-[42px] w-[45px] items-center justify-center gap-1.5 self-stretch rounded-xl bg-[#5848BC] px-2 py-2.5'
              >
                <Image src={userAdd} alt='' className='h-[25px] w-[25px]' />
              </button>
            </div>
          ) : (
            <div className='flex flex-col items-start self-stretch gap-2 px-6 pt-6 pb-2 '>
              <button
                onClick={() => setWelcomeModal(true)}
                className='flex h-auto w-full items-center justify-center gap-1.5 self-stretch rounded-xl bg-[#5848BC] px-4 py-2.5'
              >
                <Image src={userAdd} alt='' className='h-[18px] w-[18px]' />
                <span className='text-sm font-semibold leading-5 normal'>
                  Create character
                </span>
              </button>
            </div>
          )}

          <div>
            {welcomeModal && (
              <CreateCharacterModal
                closeState={setWelcomeModal}
                setCreateCharacter={handleNewCharacter}
              />
            )}

            {/* {createCharacter && (
            <CreateCharacterModal
              closeState={setCreateCharacter}
              setUserGuide={setUserGuide}
              setIsTourOpen={setIsTourOpen}
              setTourCount={setTourCount}
              UserGuide={UserGuide}
              setCreateCharacterData={setCreateCharacterData}
            />
          )} */}

            {createCharacter && (
              <CharacterAdd
                NewCharacterClose={setCreateCharacter}
                setCreateCharacterData={setCreateCharacterData}
                setUserGuide={setUserGuide}
                setIsTourOpen={setIsTourOpen}
                setTourCount={setTourCount}
                UserGuide={UserGuide}
                setUserDetails={setUserDetails}
                createCharacterData={createCharacterData}
                setActiveProfile={setActiveProfile}
                setCreateCharacterToggle={setCreateCharacterToggle}
                createCharacterToggle={createCharacterToggle}
                createToggle={createToggle}
                setCreateToggle={setCreateToggle}
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

          <div className='font-bold group relative flex cursor-pointer items-center justify-center rounded-[14px] text-[16px] leading-[22px] text-white'>
            <SidebarMenuItem
              text='Image Generator'
              href='/image-generator'
              Icon={ImageGeneratorIcon}
              IconActive={imageGeneratorActive}
              StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
                shrinkSideBar === true
                  ? 'flex !justify-center max-w-[52px] mx-auto'
                  : 'pl-3'
              }
              ${GuideStep2 === tourCount ? 'bg-[#252525] z-[2]' : ''}
              `}
              sideBarMenuText={`max-[1279px]:!hidden ${
                shrinkSideBar === true
                  ? '!hidden'
                  : 'w-full flex justify-center'
              } `}
            />
            {GuideStep2 === tourCount && (
              <>
                <HoverModal
                  isOpen={IsOpen}
                  onClose={OnClose}
                  tourSteps={TourSteps}
                  tourCount={tourCount}
                  setTourCount={setTourCount}
                />
              </>
            )}
          </div>
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
                  : 'text-[13px] font-[600] uppercase leading-5 tracking-tight text-neutral-600 '
              }`}
            >
              Chatbot
            </div>
          </div>
          <div className='font-bold group relative flex cursor-pointer items-center justify-center rounded-[14px] text-[16px] leading-[22px] text-white'>
            <SidebarMenuItem
              text='Personality'
              href='/personality'
              Icon={PersonalityIcon}
              IconActive={personalityActive}
              StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
                shrinkSideBar === true
                  ? 'flex !justify-center max-w-[52px] mx-auto'
                  : 'pl-3'
              }
              ${GuideStep1 === tourCount ? 'bg-[#252525] z-[2]' : ''}
              `}
              sideBarMenuText={`max-[1279px]:!hidden ${
                shrinkSideBar === true
                  ? '!hidden'
                  : 'w-full flex justify-center'
              } `}
            />
            {GuideStep1 === tourCount && (
              <>
                <HoverModal
                  isOpen={IsOpen}
                  onClose={OnClose}
                  tourSteps={TourSteps}
                  tourCount={tourCount}
                  setTourCount={setTourCount}
                />
              </>
            )}
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

          <div className='font-bold group relative flex cursor-pointer items-center justify-center rounded-[14px] text-[16px] leading-[22px] text-white'>
            <SidebarMenuItem
              text='Gifts'
              href='/gifts'
              Icon={GiftIcon}
              IconActive={gift}
              StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
                shrinkSideBar === true
                  ? 'flex !justify-center max-w-[52px] mx-auto'
                  : 'pl-3'
              }
              ${GuideStep4 === tourCount ? 'bg-[#252525] z-[2]' : ''}
              `}
              sideBarMenuText={`max-[1279px]:!hidden ${
                shrinkSideBar === true
                  ? '!hidden'
                  : 'w-full flex justify-center'
              } `}
            />
            {GuideStep4 === tourCount && (
              <HoverModal
                isOpen={IsOpen}
                onClose={OnClose}
                tourSteps={TourSteps}
                tourCount={tourCount}
                setTourCount={setTourCount}
              />
            )}
          </div>

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
                  : 'text-[13px] font-[600] uppercase leading-5 tracking-tight text-neutral-600 '
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

          <div className='font-bold group relative flex cursor-pointer items-center justify-center rounded-[14px] text-[16px] leading-[22px] text-white'>
            <SidebarMenuItem
              text='Style Generator'
              href='/style-generator'
              Icon={StyleGenerator}
              IconActive={palette}
              StyleClasses={`max-[1279px]:flex max-[1279px]:!justify-center max-[1279px]:max-w-[52px] max-[1279px]:mx-auto ${
                shrinkSideBar === true
                  ? 'flex !justify-center max-w-[52px] mx-auto'
                  : 'pl-3'
              }
              ${GuideStep3 === tourCount ? 'bg-[#252525] z-[2]' : ''}
              `}
              sideBarMenuText={`max-[1279px]:!hidden ${
                shrinkSideBar === true ? '!hidden' : 'w-full'
              } `}
            />
            {GuideStep3 === tourCount && (
              <HoverModal
                isOpen={IsOpen}
                onClose={OnClose}
                tourSteps={TourSteps}
                tourCount={tourCount}
                setTourCount={setTourCount}
              />
            )}
          </div>
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
        </div>

        <div
          className={`max-[1279px]:mx-2 ${
            shrinkSideBar !== true ? 'mx-3 max-w-[276px] ' : 'mx-2'
          }`}
        >
          <div
            className='relative mt-[50px] flex cursor-pointer items-center gap-2 border-t border-[#FFFFFF14] py-3 pl-3'
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
        {newCharacter && (
          <CharacterAdd
            NewCharacterClose={setNewCharacter}
            setCreateCharacterToggle={setCreateCharacterToggle}
            createCharacterToggle={createCharacterToggle}
            createToggle={createToggle}
            setCreateToggle={setCreateToggle}
          />
        )}
      </div>
    </>
  );
};

export default CreatorStudioSidebar;
