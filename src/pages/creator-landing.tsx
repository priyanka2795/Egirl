import { AuthLayout } from '@components/layout/auth-layout';
import { SEO } from '@components/common/seo';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { LayoutProps } from '@components/layout/common-layout';

import Link from 'next/link';
import { StarIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Nav from '@components/landing-creator/Nav';
import Header from '@components/landing-creator/Header';
import DiscordIcon from '@components/landing-user/assets/Footer/DiscordIcon';
import TwitterIcon from '@components/landing-user/assets/Footer/TwitterIcon';
import InstaIcon from '@components/landing-user/assets/Footer/InstaIcon';
import RedditIcon from '@components/landing-user/assets/Footer/RedditIcon';
import ContactUs from '@components/landing-creator/ContactUs';
import HowItWorks from '@components/landing-creator/HowItWorks';
import Design from '@components/landing-creator/Design';
import PassionToProfit from '@components/landing-creator/PassionToProfit';
import Footer from '@components/landing-user/Footer';

export function LandingLayout({ children }: LayoutProps): JSX.Element {
  return <div className='w-full bg-white'>{children}</div>;
}

export default function CreatorLanding(): JSX.Element {
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
              <button>
                <Link href='/'>
                  <span className='text-[52px] font-semibold text-[white] xs:text-[104px] sm:text-[104px]'>
                    Egirls
                  </span>
                </Link>
              </button>
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
                <Link href='/'>
                  <span className='text-[24px] font-[500] text-[white] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8 xs:text-[48px] sm:text-[48px]'>
                    For users
                  </span>
                </Link>
              </button>
            </div>
            <div className=''>
              <button>
                <Link href='/creator-landing'>
                  <span className='text-[24px] font-[500] text-[#5848BC] underline underline-offset-8 hover:decoration-[#5848BC] xs:text-[48px] sm:text-[48px]'>
                    For creators
                  </span>
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
                  Join Discord
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
                  className='h-20 w-20 fill-[white] lg:h-10 lg:w-10'
                  onClick={setBetaAccess()}
                ></XMarkIcon>
              </button>
            </div>
          </div>
          <div className='flex h-full items-center'>
            <div className='w-full p-2'>
              <div className='flex justify-center p-2'>
                <div className='flex items-center justify-center rounded-[8px] bg-[#313131] p-[24px] lg:h-[40px] lg:w-[135px] lg:px-[8px] lg:py-[12px]'>
                  <StarIcon className='h-[40px] w-[40px] fill-[#5848BC] pr-[8px] lg:h-[20px] lg:w-[20px]'></StarIcon>
                  <div className='flex'>
                    <span className='text-[42px] font-[500] text-[white] lg:text-[16px]'>
                      Join us
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex justify-center p-2'>
                <div className='text-center text-[120px] font-[600]  text-[white] lg:text-[64px]'>
                  <div>
                    <span>
                      Design{' '}
                      <span className='font-[400] italic'> without </span>
                    </span>
                  </div>
                  <div className='flex justify-center'>
                    <span>limits</span>
                  </div>
                </div>
              </div>
              <div className='flex justify-center p-2'>
                <div className='text-[36px] font-[400] text-[#ffffff]/[0.44] lg:text-[18px]'>
                  <span>Join our Discord community and introduce yourself</span>
                </div>
              </div>
              <div className='flex justify-center p-16'>
                <div className='flex items-center justify-center rounded-[12px] bg-[#5848BC] px-[24px] py-[16px] drop-shadow'>
                  <span className='text-[36px] lg:text-[18px]'>
                    Join Discord
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Contact Us */}
      <ContactUs />
      

      {/* How it works */}
      <HowItWorks />
      

      {/* Creator tools */}
      <Design />
      

      {/* Get Paid */}
      <PassionToProfit />
     

      {/* Footer */}
      <Footer />
     

      {/* Socials sticky */}
      <div className='sticky bottom-0 right-0 z-10 float-right flex w-full justify-end'>
        <div className='h-[60px] w-[160px] rounded-tl-xl bg-[#5848BC]'>
          <div className='grid h-full grid-cols-4 items-center justify-items-center p-3 '>
            <div className='rounded-lg p-2 hover:bg-[#7367c2]'>
              <DiscordIcon className='h-[20px] w-[20px]' />
            </div>
            <div className='rounded-lg p-2 hover:bg-[#7367c2]'>
              <TwitterIcon className='h-[20px] w-[20px]' />
            </div>
            <div className='rounded-lg p-2 hover:bg-[#7367c2]'>
              <InstaIcon className='h-[20px] w-[20px]' />
            </div>
            <div className='rounded-lg p-2 hover:bg-[#7367c2]'>
              <RedditIcon className='h-[20px] w-[20px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CreatorLanding.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>
    <LandingLayout>{page}</LandingLayout>
  </AuthLayout>
);
