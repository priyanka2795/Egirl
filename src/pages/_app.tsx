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
import Script from 'next/script';

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
      {/* Google tag (gtag.js) */}
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-89E99W1NST'
      ></Script>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy='lazyOnload'>
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                });
            `}
      </Script>

      <AppHead />
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <AuthContextProvider>
          <SupabaseAuthContextProvider>
            <ThemeContextProvider>
              {getLayout(<Component {...pageProps} />)}
            </ThemeContextProvider>
          </SupabaseAuthContextProvider>
        </AuthContextProvider>
      </SessionContextProvider>
    </>
  );
}
