import Link from 'next/link';
import React from 'react';
import { StarIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Logo from './assets/Logo';

interface Props {
  setBetaAccess: () => void;
  setSideNav: () => void;
}

const Nav = ({ setBetaAccess, setSideNav }: Props) => {
  return (
    <nav className='fixed top-0 z-10 w-full bg-[#F6F6F6] px-24 lg:px-[100px]'>
      <div className='py-3 lg:py-6'>
        <div className='flex items-center justify-between'>
          <div className='lg:flex'>
            <div className='pr-[40px]'>
              {/* <span className='text-[64px] font-semibold text-[#181818] lg:text-[32px]'>
                Egirls
              </span> */}
              <Logo />
            </div>
            <div className='lg:flex lg:items-center lg:space-x-6'>
              <div className='hidden lg:flex lg:items-center'>
                <button className='text-[32px] font-[500] text-[#5848BC] underline decoration-[#5848BC]  underline-offset-8 lg:text-[16px] '>
                  For users
                </button>
              </div>
              <div className='hidden lg:flex lg:items-center'>
                <Link href='/creator-landing'>
                  <a className='text-[32px]	font-[500] text-[#181818] transition duration-100 hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8 lg:text-[16px]'>
                    For creators
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='md:flex'>
            <div className='mr-6 hidden lg:flex lg:items-center'>
              <button>
                <Link href='/contact-us'>
                  <span className='text-[32px] font-[500] text-[#181818] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8 lg:text-[16px]'>
                    Contact
                  </span>
                </Link>
              </button>
            </div>
            <div
              className='justify-center rounded-[12px] bg-[#5848BC] px-[18px] py-[10px] xs:hidden sm:hidden md:flex md:items-center lg:flex lg:w-[158px] lg:items-center'
              onClick={() => {
                setBetaAccess;
              }}
            >
              <button>
                <span className='text-[32px] font-[500] text-white lg:text-[16px]'>
                  Join Discord
                </span>
              </button>
            </div>
            <div
              className='xs:flex xs:items-center sm:flex sm:items-center md:flex md:items-center lg:flex lg:items-center'
              onClick={setSideNav}
            >
              <Bars2Icon className='h-[40px] w-[40px] fill-[black] lg:hidden lg:h-[20px] lg:w-[20px]'></Bars2Icon>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
