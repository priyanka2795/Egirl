import { AuthLayout } from '@components/layout/auth-layout';
import { SEO } from '@components/common/seo';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { LayoutProps } from '@components/layout/common-layout';
import ExperienceTheFuture from '../components/landing-user/assets/ExperienceTheFuture';

export function LandingLayout({ children }: LayoutProps): JSX.Element {
  return <div className='w-full bg-white'>{children}</div>;
}

export default function JoinUs(): JSX.Element {
  return (
    <div className='grid h-screen w-full  place-items-center bg-black'>
      <div className='grid w-[646px] place-items-center'>
        <button className='mb-6 flex items-center justify-center rounded-lg bg-[#1B1A25] px-3 py-2 text-[15px] font-[500] text-white'>
          <ExperienceTheFuture className='mr-2' />
          Join us
        </button>
        <h1 className='mb-5 text-center text-[48px] font-[600] text-white'>
          Join the Discord and select the{' '}
          <span className='text-[#5848BC]'>Beta Tester</span> role
        </h1>
        <h2 className='mb-12 text-[18px] font-[400] text-[#807F85]'>
          Beta Tester role secures your spot on the waitlist
        </h2>
        <div className='flex items-center justify-center rounded-[12px] bg-[#5848BC] px-[24px] py-[16px] drop-shadow'>
          <span className='text-[36px] lg:text-[18px]'>Join Discord</span>
        </div>
      </div>
    </div>
  );
}

JoinUs.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>
    <LandingLayout>{page}</LandingLayout>
  </AuthLayout>
);
