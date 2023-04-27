import { AuthLayout } from '@components/layout/auth-layout';
import { SEO } from '@components/common/seo';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { LayoutProps } from '@components/layout/common-layout';
import ExperienceTheFuture from '../components/landing-user/assets/ExperienceTheFuture';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export function LandingLayout({ children }: LayoutProps): JSX.Element {
  return <div className='w-full bg-white'>{children}</div>;
}

export default function JoinUs(): JSX.Element {
  return (
    <div className='relative grid h-screen  w-full place-items-center bg-black'>
      <div className='grid w-[646px] place-items-center'>
        <button className='mb-6 flex items-center justify-center rounded-lg bg-[#1B1A25] px-3 py-[10px] text-[15px] font-[500] text-white'>
          <ExperienceTheFuture className='mr-2' />
          Join us
        </button>
        <h1 className='mb-5 text-center text-[48px] font-[600] text-white'>
          Secure your spot on the waitlist
        </h1>
        <h2 className='mb-12 text-[18px] font-[400] text-[#807F85]'>
          Select the Beta Tester role when joining the discord
        </h2>
        <a
          href='https://discord.gg/ECAds8F8Dj'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center rounded-[12px] bg-[#5848BC] px-[24px] py-[16px] drop-shadow'
        >
          <span className='text-[36px] lg:text-[18px]'>Join Discord</span>
        </a>
      </div>
      <Link href='/' className=''>
        <a className='absolute top-10 right-10'>
          <XMarkIcon className='h-20 w-20 cursor-pointer fill-[white] lg:h-10 lg:w-10'></XMarkIcon>
        </a>
      </Link>
    </div>
  );
}

JoinUs.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>
    <LandingLayout>{page}</LandingLayout>
  </AuthLayout>
);
