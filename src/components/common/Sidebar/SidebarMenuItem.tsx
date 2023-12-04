//@ts-nocheck
import React from 'react';
import ExploreIcon from './svg/ExploreIcon';
import { useRouter } from 'next/router';
import Link from 'next/link';

type SidebarMenuItemProps = {
  text: string;
  href?: string;
  sideBarMenuText?: string;
  StyleClasses?: string;
  changeTab?:string;
  Icon: (props: { svgClasses?: string; strokeClasses?: string }) => JSX.Element;
  IconActive: (props: {
    svgClasses?: string;
    strokeclasses?: string;
  }) => JSX.Element;
};

export default function SidebarMenuItem({
  text,
  href,
  sideBarMenuText,
  StyleClasses,
  Icon,
  IconActive,
  changeTab
}: SidebarMenuItemProps) {
  const router = useRouter();

  // This will be true if the current path is equal to this item's href
  const active = router.pathname === href;
  const getpathname = router.route;


  // const changeTab: string = 'CreatorStudioActive';

  return (
    <>
      {href ? (
        <Link href={href} className='w-full'>
          <a
            className={`${StyleClasses} mb-2 flex cursor-pointer items-center justify-center space-x-3 rounded-[14px] py-2 pl-2.5 text-lg text-white transition-all duration-100 hover:bg-[#252525] ${
              sideBarMenuText ? 'w-full' : 'xl:w-[256px] '
            } xl:justify-start ${active && 'bg-[#252525]'}`}
            target={changeTab === 'CreatorStudioActive' ? '_blank' : '_self'}
          >
            {active ? (
              <IconActive />
            ) : (
              <Icon
                strokeclasses={`stroke-[#515151] transition duration-100`}
              />
            )}

            <div className='flex flex-col'>
              <span
               style={active ? {fontWeight: '700'} : {fontWeight: '500'}}
                className={`${
                  active ? 'font-extrabold ' : 'font-medium '
                } ${sideBarMenuText} hidden text-[18px] leading-8 xl:inline font-medium`}
              >
                {text}
              </span>
            </div>
          </a>
        </Link>
      ) : (
        <span>
          <a
            className={`mb-2 flex cursor-pointer items-center justify-center space-x-3 rounded-[14px] py-2 pl-2.5 text-lg text-white transition-all duration-100 hover:bg-[#252525] ${
              sideBarMenuText ? 'w-full' : 'xl:w-[256px] '
            } xl:justify-start ${active && 'bg-[#252525]'}`}
          >
            <Icon
              strokeclasses={`${
                active ? 'stroke-black fill-white' : 'stroke-[#515151]'
              } transition duration-100`}
            />
            <div className='flex flex-col'>
              <span
                className={`${
                  active ? 'font-extrabold ' : 'font-medium '
                } ${sideBarMenuText} hidden text-[18px] leading-8 xl:inline`}
                style={active ? {fontWeight: '700'} : {fontWeight: '500'}}
              >
                {text}
              </span>
            </div>
          </a>
        </span>
      )}
    </>
  );
}