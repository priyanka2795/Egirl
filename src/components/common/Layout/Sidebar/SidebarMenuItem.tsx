import React from 'react';
import ExploreIcon from './svg/ExploreIcon';
import { useRouter } from 'next/router';

type SidebarMenuItemProps = {
  text: string;
  href: string;
  Icon: (props: { stroke: string }) => JSX.Element;
};

export default function SidebarMenuItem({
  text,
  href,
  Icon
}: SidebarMenuItemProps) {
  const router = useRouter();

  // This will be true if the current path is equal to this item's href
  const active = router.pathname === href;

  return (
    <a
      href={href}
      className={`hoverEffect duraiton-100 mb-3 flex cursor-pointer items-center justify-center space-x-3 rounded-[14px] py-2 pl-3 text-lg text-white transition hover:bg-[#252525] xl:w-[276px] xl:justify-start ${
        active && 'bg-[#252525]'
      }`}
    >
      <Icon stroke={active ? 'white' : '#515151'} />
      <div className='flex flex-col'>
        <span
          className={`${active && 'font-bold'} ${
            text == 'Home' ? 'font-semibold' : 'text-light'
          } hidden text-[26px] font-light leading-8 xl:inline`}
        >
          {text}
        </span>
        {text == 'Lists' && (
          <span className='hidden text-[16px] font-light leading-[18px] text-[#979797] xl:inline'>
            Subscriptions, Following, etc.
          </span>
        )}
      </div>
    </a>
  );
}
