import '@styles/globals.scss';
import '@styles/toaster.scss';
import '../components/explore/CardStack.scss';
import '../components/messages/TypingIndicator.scss';
import '../components/creator-studio/common/MultiStepRangeSliderStyle.scss';

import { AuthContextProvider } from '@lib/context/auth-context';
import { ThemeContextProvider } from '@lib/context/theme-context';
import { AppHead } from '@components/common-old/app-head';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { Provider } from 'react-redux';
import store from '../store';


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

  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;
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
      <Provider store={store}>
        <AppHead />
          {/* <AuthContextProvider> */}
          <ThemeContextProvider>
         
            {<Component {...pageProps} />}
         
          </ThemeContextProvider>
          {/* </AuthContextProvider> */}
      </Provider>
    </>
  );
}
