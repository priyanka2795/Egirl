import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>Egirls</title>
      <meta name='og:title' content='Egirls' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
      <meta name='egirls:site' content='@ccrsxx' />
      <meta name='egirls:card' content='summary_large_image' />
      {/* <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      /> */}
      {/* <meta name='viewport' content='width=1000'></meta> */}
    </Head>
  );
}