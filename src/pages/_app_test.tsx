import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import { Database } from '../../types/database';
import { useState } from 'react';
import { ThemeContextProvider } from '@lib/context/theme-context';

export default function App({
  Component,
  pageProps
}: AppProps<{}>) {



  return (
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
  );
}
