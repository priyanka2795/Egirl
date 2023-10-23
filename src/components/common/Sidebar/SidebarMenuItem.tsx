import React from 'react';
import ExploreIcon from './svg/ExploreIcon';
import { useRouter } from 'next/router';
import Link from 'next/link';

type SidebarMenuItemProps = {
  text: string;
  href?: string;
  sideBarMenuText?: string;
  StyleClasses?: string;

  Icon: (props: { svgClasses?: string; strokeClasses?: string }) => JSX.Element;
  IconActive: (props: {
    svgClasses?: string;
    strokeClasses?: string;
  }) => JSX.Element;
};

export default function SidebarMenuItem({
  text,
  href,
  sideBarMenuText,
  StyleClasses,
  Icon,
  IconActive
}: SidebarMenuItemProps) {
  const router = useRouter();

  // This will be true if the current path is equal to this item's href
  const active = router.pathname === href;

  return (
    <>
      {href ? (
        <Link href={href} className='w-full'>
          <a
            className={`${StyleClasses} mb-2 flex cursor-pointer items-center justify-center space-x-3 rounded-[14px] py-2 pl-2.5 text-lg text-white transition-all duration-100 hover:bg-[#252525] ${
              sideBarMenuText ? 'w-full' : 'xl:w-[256px] '
            } xl:justify-start ${active && 'bg-[#252525]'}`}
          >
            {active ? (
              <IconActive />
            ) : (
              <Icon
                strokeClasses={`stroke-[#515151] transition duration-100`}
              />
            )}

            <div className='flex flex-col'>
              <span
                className={`${
                  active ? 'font-black' : 'font-semibold'
                } ${sideBarMenuText} hidden text-[15px] leading-8 xl:inline`}
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
              strokeClasses={`${
                active ? 'stroke-black fill-white' : 'stroke-[#515151]'
              } transition duration-100`}
            />
            <div className='flex flex-col'>
              <span
                className={`${
                  active ? 'font-bold' : 'font-medium'
                } ${sideBarMenuText} hidden text-[15px] leading-8 xl:inline`}
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
