import { AuthLayout } from '@components/layout/auth-layout';
import { SEO } from '@components/common-old/seo';
import { LoginMain } from '@components/login/login-main';
import { LoginFooter } from '@components/login/login-footer';
import type { ReactElement, ReactNode } from 'react';

import Account from '../components/account/account';

export default function Login(): JSX.Element {
  return (
    <div className='grid min-h-screen grid-rows-[1fr,auto]'>
      <SEO
        title='Twitter - It’s what’s happening'
        description='From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'
      />
      <div className='container' style={{ padding: '50px 0 100px 0' }}>
      </div>
      <LoginMain />
      <LoginFooter />
    </div>
  );
}

Login.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>{page}</AuthLayout>
);
