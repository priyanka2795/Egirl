import Link from 'next/link';
import React from 'react';
import { Bars2Icon } from '@heroicons/react/20/solid';
import Image from 'next/image';

interface Props {
  setSideNav: () => void;
}

const Nav = ({ setSideNav }: Props) => {
  return (
    <nav className='fixed top-0 z-10 w-full bg-[#F6F6F6] px-[24px] md:px-[40px] lg:px-[100px] 2xl:px-[120px]'>
      <div className='md: py-[40px] lg:py-6'>
        <div className='flex items-center justify-between'>
          <div className='flex'>
            <Link href='/'>
              <a className='py-1 pr-[40px]'>
                <Image
                  src='/assets/final/navLogo.svg'
                  width='123'
                  height='32'
                  alt='Egirls'
                />
              </a>
            </Link>
            <div className='lg:flex lg:items-center lg:space-x-6'>
              <div className='hidden lg:flex lg:items-center'>
                <button className='text-[32px] font-[500] text-[#5848BC] underline decoration-[#5848BC] underline-offset-8 lg:text-[16px]'>
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
          <div className='gap-2 md:flex'>
            <button className='justify-center rounded-[12px] bg-[#5848BC] px-[10px] py-[10px] transition duration-100 hover:bg-[#4D37DA] xs:hidden sm:hidden md:flex md:items-center lg:flex lg:w-[80px] lg:items-center'>
              <Link href='/login'>
                <span className='text-[32px] font-[500] text-white lg:text-[16px]'>
                  Login
                </span>
              </Link>
            </button>

            <button className='justify-center rounded-[12px] bg-[#5848BC] px-[10px] py-[10px] transition duration-100 hover:bg-[#4D37DA] xs:hidden sm:hidden md:flex md:items-center lg:flex lg:w-[80px] lg:items-center'>
              <Link href='/signup'>
                <span className='text-[32px] font-[500] text-white lg:text-[16px]'>
                  Sign Up
                </span>
              </Link>
            </button>
            <div
              className='ml-[32px] xs:flex xs:items-center sm:flex sm:items-center md:flex md:items-center lg:flex lg:items-center'
              onClick={() => {
                setSideNav();
              }}
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
