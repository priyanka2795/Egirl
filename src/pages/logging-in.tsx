import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { waitload } from '../../utils/auth';

export default function LoggingIn() {
  const router = useRouter();

  useEffect(() => {
    // check if user has been set in session store then redirect
    const url = new URL(window.location.href);
    const redirectTo = url.searchParams.get('redirect');
    (async () => {
      await waitload(1);
      router.push(redirectTo ?? '/home');
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Magic Link + Otp Flow</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='fixed inset-0 z-20 overflow-y-auto'>
        <div className='flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
          <div className='fixed inset-0' aria-hidden='true'>
            <div className='absolute inset-0 opacity-100' />
          </div>

          <span
            className='hidden sm:inline-block sm:h-screen sm:align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>

          <div className='inline-block transform align-bottom sm:max-w-2xl sm:align-middle'>
            <div className='text-center'>
              <em className='text-2xl'>
                "Because as we know, there are known knowns; there are things we
                know we know. We also know there are known unknowns; that is to
                say we know there are some things we do not know. But there are
                also unknown unknowns—the ones we don't know we don't know"
              </em>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
