import { AuthLayout } from '@components/layout/auth-layout';
import { SEO } from '@components/common/seo';
import { ReactElement, ReactNode, useEffect, useState } from 'react';

import { LayoutProps } from '@components/layout/common-layout';
import { StarIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Nav from '../components/landing-user/Nav';
import Header from '../components/landing-user/Header';
import Discover from '../components/landing-user/Discover';
import Chat from '../components/landing-user/Chat';

import Link from 'next/link';
import Subscribe from '@components/landing-user/Subscribe';
import Footer from '@components/landing-common/Footer';
import DiscordIcon from '@components/landing-user/assets/Footer/DiscordIcon';
import RedditIcon from '@components/landing-user/assets/Footer/RedditIcon';
import InstaIcon from '@components/landing-user/assets/Footer/InstaIcon';
import TwitterIcon from '@components/landing-user/assets/Footer/TwitterIcon';

export function LandingLayout({ children }: LayoutProps): JSX.Element {
  return <div className='w-full bg-white'>{children}</div>;
}

export default function UserLanding(): JSX.Element {
  const [hiddenSideDiv, setHiddenSideDiv] = useState(false);
  const [showBetaAccess, setShowBetaAccess] = useState(false);

  const setSideNav = () => (): void => {
    setHiddenSideDiv(!hiddenSideDiv);
  };

  const setBetaAccess = () => (): void => {
    setShowBetaAccess(!showBetaAccess);
  };

  const hideSideShowBeta = () => (): void => {
    setShowBetaAccess(true);
    setHiddenSideDiv(false);
  };

  useEffect(() => {});

  return (
    <div className='grid h-screen min-h-screen grid-rows-[1fr,auto] bg-white'>
      <SEO title='Egirls' description='' />

      {/* Nav Bar */}
      <Nav setBetaAccess={setBetaAccess()} setSideNav={setSideNav()} />

      {/* Side NavBar */}
      <nav
        className={`fixed top-0 z-10 h-full w-full bg-[black] p-20 duration-300 ease-in lg:invisible ${
          hiddenSideDiv === false ? 'invisible' : 'visible duration-300 ease-in'
        }`}
      >
        <div>
          <div className='flex items-center justify-between'>
            <div className=''>
              <span className='text-[52px] font-semibold text-[white] xs:text-[104px] sm:text-[104px]'>
                Egirls
              </span>
            </div>
            <div>
              <XMarkIcon
                className='h-16 w-16 fill-[white]'
                onClick={setSideNav()}
              ></XMarkIcon>
            </div>
          </div>
          <div className='space-y-20 pt-20'>
            <div className=''>
              <button>
                <span className='text-[24px] font-[500] text-[#5848BC] underline underline-offset-8 hover:decoration-[white] xs:text-[48px] sm:text-[48px]'>
                  For users
                </span>
              </button>
            </div>
            <div className=''>
              <button>
                <Link href='/creator-landing'>
                  <a>
                    <span className='text-[24px] font-[500] text-[white] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8 xs:text-[48px] sm:text-[48px]'>
                      For creators
                    </span>
                  </a>
                </Link>
              </button>
            </div>
            <div className=''>
              <button>
                <Link href='/contact-us'>
                  <span className='text-[24px] font-[500] text-[white] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8 xs:text-[48px] sm:text-[48px]'>
                    Contact
                  </span>
                </Link>
              </button>
            </div>
          </div>

          <div className='absolute inset-x-10 bottom-16 flex justify-center'>
            <div
              className='flex w-full justify-center rounded-[12px] bg-[#5848BC] px-[18px] py-[10px] lg:hidden'
              onClick={hideSideShowBeta()}
            >
              <button>
                <span className='text-[32px] font-[500] text-white xs:text-[64px] sm:text-[64px]'>
                  Get beta access
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Join Discord */}
      <div
        className={`fixed top-0 z-10 h-full w-full items-center bg-[black] duration-300 ease-in ${
          showBetaAccess === false ? 'hidden' : 'duration-300 ease-in'
        }`}
      >
        <div className='h-full w-full bg-[url(/assets/svgImages/joinDiscordBg.svg)] bg-cover bg-center bg-no-repeat'>
          <div className='flex w-full justify-end'>
            <div className='p-8'>
              <button>
                <XMarkIcon
                  className='h-10 w-10 fill-[white]'
                  onClick={setBetaAccess()}
                ></XMarkIcon>
              </button>
            </div>
          </div>
          <div className='w-full p-2'>
            <div className='flex justify-center p-2'>
              <div className='flex h-[40px] w-[135px] items-center justify-center rounded-[8px] bg-[#313131] px-[8px] py-[12px]'>
                <StarIcon className='h-[20px] w-[20px] fill-[#5848BC] pr-[8px]'></StarIcon>
                <div className='flex'>
                  <span className='text-[16px] font-[500] text-[white]'>
                    Join us
                  </span>
                </div>
              </div>
            </div>
            <div className='flex justify-center p-2'>
              <div className='text-[64px] font-[600] text-[white]'>
                <div>
                  <span>
                    Design <span className='font-[400] italic'> without </span>
                  </span>
                </div>
                <div className='flex justify-center'>
                  <span>limits</span>
                </div>
              </div>
            </div>
            <div className='flex justify-center p-2'>
              <div className='text-[18px] font-[400] text-[#ffffff]/[0.44]'>
                <span>Join our Discord community and introduce yourself</span>
              </div>
            </div>
            <div className='flex justify-center p-16'>
              <div className='flex w-[158px] items-center justify-center rounded-[12px] bg-[#5848BC] px-[24px] py-[16px] drop-shadow'>
                <span>Join Discord</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Discover */}
      <Discover />

      {/* Chat */}
      <Chat />

      {/* Subscribe */}
      <Subscribe />

      {/* Footer */}
      <Footer />

      {/* Socials sticky */}
      <div className='sticky bottom-0 right-0 z-10 float-right flex w-full justify-end'>
        <div className='h-[60px] w-[160px] rounded-tl-xl bg-[#5848BC]'>
          <div className='grid h-full grid-cols-4 items-center justify-items-center p-3 '>
            <a
              href='https://discord.gg/ECAds8F8Dj'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='rounded-lg p-2 hover:bg-[#7367c2]'>
                <DiscordIcon className='h-[20px] w-[20px]' />
              </div>
            </a>
            <a
              href='https://twitter.com/egirlsai'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='rounded-lg p-2 hover:bg-[#7367c2]'>
                <TwitterIcon className='h-[20px] w-[20px]' />
              </div>
            </a>
            <a
              href='https://www.instagram.com/egirls_ai/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='rounded-lg p-2 hover:bg-[#7367c2]'>
                <InstaIcon className='h-[20px] w-[20px]' />
              </div>
            </a>
            <a
              href='https://www.reddit.com/r/EgirlsAI/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='rounded-lg p-2 hover:bg-[#7367c2]'>
                <RedditIcon className='h-[20px] w-[20px]' />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

UserLanding.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>
    <LandingLayout>{page}</LandingLayout>
  </AuthLayout>
);
