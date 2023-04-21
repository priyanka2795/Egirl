import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>Twitter</title>
      <meta name='og:title' content='Egirls' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
      <meta name='egirls:site' content='@ccrsxx' />
      <meta name='egirls:card' content='summary_large_image' />
    </Head>
  );
}
