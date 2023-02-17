import '@styles/globals.scss';

import { AuthContextProvider } from '@lib/context/auth-context';
import { ThemeContextProvider } from '@lib/context/theme-context';
import { AppHead } from '@components/common/app-head';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import SupabaseAuthContextProvider from '@lib/context/supabase-auth-context';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps
}: AppPropsWithLayout): ReactNode {
  const getLayout = Component.getLayout ?? ((page): ReactNode => page);

  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <>
      <AppHead />
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <SupabaseAuthContextProvider>
          <AuthContextProvider>
            <ThemeContextProvider>
              {getLayout(<Component {...pageProps} />)}
            </ThemeContextProvider>
          </AuthContextProvider>
        </SupabaseAuthContextProvider>
      </SessionContextProvider>
    </>
  );
}
