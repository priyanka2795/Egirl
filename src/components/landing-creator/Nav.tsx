import Link from 'next/link';
import React from 'react';
import { StarIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Logo from './assets/Header/Logo';

interface Props {
  setBetaAccess: () => void;
  setSideNav: () => void;
}

const Nav = ({ setBetaAccess, setSideNav }: Props) => {
  return (
    <nav className='fixed top-0 z-10 w-full bg-[black] px-24 lg:px-[100px] 2xl:px-[120px]'>
      <div className='py-3 lg:py-6'>
        <div className='flex items-center justify-between'>
          <div className='lg:flex'>
            <Link href='/' prefetch={false}>
              <a className=' py-1 pr-[40px]'>
                {/* <span className='text-[64px] font-semibold text-[#181818] lg:text-[32px]'>
                Egirls
              </span> */}
                <Logo />
              </a>
            </Link>
            <div className='lg:flex lg:items-center lg:space-x-4'>
              <div className='hidden lg:flex lg:items-center'>
                <Link href='/' prefetch={false}>
                  <span className='cursor-pointer text-[32px] font-[500] text-[white] transition duration-100 hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8 lg:text-[16px]'>
                    For users
                  </span>
                </Link>
              </div>
              <div className='hidden lg:flex lg:items-center'>
                <button>
                  <Link href='/creator-landing' prefetch={false}>
                    <span className='text-[32px] font-[500] text-[#5848BC] underline  decoration-[#5848BC] underline-offset-8 lg:text-[16px]'>
                      For creators
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className='md:flex'>
            <div className='mr-6 hidden lg:flex lg:items-center'>
              <button>
                <Link href='/contact-us' prefetch={false}>
                  <span className='text-[32px] font-[500] text-[white] transition duration-100 hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8 lg:text-[16px]'>
                    Contact
                  </span>
                </Link>
              </button>
            </div>
            <Link href='/get-beta-access' prefetch={false}>
              <a className='justify-center rounded-[12px] bg-[#5848BC] px-[18px] py-[10px] transition duration-100 hover:bg-[#4D37DA] xs:hidden sm:hidden md:flex md:items-center lg:flex lg:w-[158px] lg:items-center'>
                <span className='text-[32px] font-[500] text-white  lg:text-[16px]'>
                  Get beta access
                </span>
              </a>
            </Link>
            <div
              className='xs:flex xs:items-center sm:flex sm:items-center md:flex md:items-center lg:flex lg:items-center'
              onClick={() => {
                setSideNav();
              }}
            >
              <Bars2Icon className='h-[40px] w-[40px] fill-[white] lg:hidden lg:h-[20px] lg:w-[20px]'></Bars2Icon>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
