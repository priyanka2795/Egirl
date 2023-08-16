import Image from 'next/image';
import React from 'react';
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
import MarketplaceIcon from './svg/MarketplaceIcon';
import StyleGenerator from './svg/StyleGenerator';
import MoreIcon from './svg/MoreIcon.svg';
const CreatorStudioSidebar = () => {
  return (
    <div className='h-full w-full max-w-[276px] flex flex-col justify-between'>
      <div>
      <div className='flex items-center justify-between py-[14px] pl-3 pr-4 cursor-pointer'>
        <div className='flex items-center gap-2'>
          <div className='h-[32px] w-[32px]'>
            <Image src={avtar} alt='' className='object-cover' />
          </div>
          Mika-chan
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
        // sideBarMenuText={`${sideBarMenuText} `}
      />
      <div className='inline-flex h-10 w-[300px] items-start justify-start gap-2.5 px-6 py-2.5'>
        <div className='text-[13px] font-semibold uppercase leading-tight tracking-tight text-neutral-600'>
          Images
        </div>
      </div>
      <SidebarMenuItem
        text='View Images'
        href='/home'
        Icon={ImageGeneratorIcon}
        IconActive={HomeActiveIcon}
        // sideBarMenuText={`${sideBarMenuText} `}
      />
      <SidebarMenuItem
        text='Image Generator'
        href='/home'
        Icon={AnalyticsIcon}
        IconActive={HomeActiveIcon}
        // sideBarMenuText={`${sideBarMenuText} `}
      />

      <div className='inline-flex h-10 w-[300px] items-start justify-start gap-2.5 px-6 py-2.5'>
        <div className='text-[13px] font-semibold uppercase leading-tight tracking-tight text-neutral-600'>
          Chatbot
        </div>
      </div>
      <SidebarMenuItem
        text='Personality'
        href='/home'
        Icon={PersonalityIcon}
        IconActive={HomeActiveIcon}
        // sideBarMenuText={`${sideBarMenuText} `}
      />
      <SidebarMenuItem
        text='Voice'
        href='/home'
        Icon={VoiceIcon}
        IconActive={HomeActiveIcon}
        // sideBarMenuText={`${sideBarMenuText} `}
      />
      <SidebarMenuItem
        text='Gifts'
        href='/home'
        Icon={GiftIcon}
        IconActive={HomeActiveIcon}
        // sideBarMenuText={`${sideBarMenuText} `}
      />
      <div className='inline-flex h-10 w-[300px] items-start justify-start gap-2.5 px-6 py-2.5'>
        <div className='text-[13px] font-semibold uppercase leading-tight tracking-tight text-neutral-600'>
          Styles
        </div>
      </div>
      <SidebarMenuItem
        text='View Styles'
        href='/home'
        Icon={ViewStyleIcon}
        IconActive={HomeActiveIcon}
        // sideBarMenuText={`${sideBarMenuText} `}
      />
         <SidebarMenuItem
        text='Marketplace'
        href='/home'
        Icon={MarketplaceIcon}
        IconActive={HomeActiveIcon}
        // sideBarMenuText={`${sideBarMenuText} `}
      />
        <SidebarMenuItem
        text='Style Generator'
        href='/home'
        Icon={StyleGenerator}
        IconActive={HomeActiveIcon}
        // sideBarMenuText={`${sideBarMenuText} `}
      />
      </div>
      
      <div className="flex items-center gap-2 py-3 pl-3 cursor-pointer">
        <div>
          <MoreIcon/>
        </div>
         <p className="text-white text-[15px] font-semibold">More</p>
      </div>

    </div>
  );
};

export default CreatorStudioSidebar;
