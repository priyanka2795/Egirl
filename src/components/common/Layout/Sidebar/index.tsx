import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import TestIcon from './TestIcon';
import Logo from './logo.svg';
import NavMenuIcon from './nav-menu-icon.svg';

export default function Sidebar() {
  return (
    <div className='fixed hidden h-full flex-col bg-main-bar sm:flex xl:ml-24 xl:w-[242px] xl:items-start'>
      <div className='flex h-[72px] w-full items-center border-b-[1px] border-b-[#242424]'>
        <NavMenuIcon />
        {/* <Logo className='ml-[20px]' /> */}
      </div>

      {/* Menu */}

      <div className='mb-2.5 mt-4 xl:items-start'>
        <SidebarMenuItem text='Home' active={true} />
        <SidebarMenuItem text='Explore' active={false} />
        <SidebarMenuItem text='Notifications' active={false} />
        <SidebarMenuItem text='Messages' active={false} />
        <SidebarMenuItem text='Bookmarks' active={false} />
        <SidebarMenuItem text='Lists' active={false} />
        <SidebarMenuItem text='Profile' active={false} />
        <SidebarMenuItem text='More' active={false} />
      </div>

      {/* Button */}

      <button className='hidden h-12 w-56 rounded-full bg-blue-400 text-lg font-bold text-white shadow-md hover:brightness-95 xl:inline'>
        Tweet
      </button>

      {/* Mini-Profile */}

      <div className='hoverEffect mt-auto flex items-center justify-center text-gray-700 xl:justify-start'>
        <img
          src='https://www.adscientificindex.com/pictures/0b/50734.jpg'
          alt='user-img'
          className='h-10 w-10 rounded-full xl:mr-2'
        />
        <div className='hidden leading-5 xl:inline'>
          <h4 className='font-bold'>Sahand Ghavidel</h4>
          <p className='text-gray-500'>@codewithsahand</p>
        </div>
        <TestIcon className='hidden h-5 xl:ml-8 xl:inline' />
      </div>
    </div>
  );
}
