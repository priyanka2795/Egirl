import { AuthLayout } from '@components/layout/auth-layout';
import { SEO } from '@components/common/seo';
import { LoginMain } from '@components/login/login-main';
import { LoginFooter } from '@components/login/login-footer';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import {
  useSession,
  useSupabaseClient,
  useUser
} from '@supabase/auth-helpers-react';
import Account from '../components/account/account';
import Router from 'next/router';
import { LayoutProps } from '@components/layout/common-layout';
import { StarIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { PencilIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Nav from '../components/landing-user/Nav';
import Header from '../components/landing-user/Header';
import Discover from '../components/landing-user/Discover';
import Chat from '../components/landing-user/Chat';

import { NextImage } from '@components/ui/next-image';
import Link from 'next/link';
import EGirlIcon from '@components/svg-assets/EGirlIcon';
import EGirlIconPurple from '@components/svg-assets/EGirlIconPurple';
import BetaAccessCard from '@components/svg-assets/BetaAccessCard';
import BetaAccessBg from '@components/svg-assets/BetaAccessBg';
import BetaAccessVector from '@components/svg-assets/BetaAccessVector';
import SpicyContentPurple from '@components/svg-assets/SpicyContentPurple';
import Subscribe from '@components/landing-user/Subscribe';
import Footer from '@components/landing-user/Footer';

export function LandingLayout({ children }: LayoutProps): JSX.Element {
  return <div className='w-full bg-white'>{children}</div>;
}

export default function UserLanding(): JSX.Element {
  const [section1, setSection1] = useState(true);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(false);
  const [hiddenSideDiv, setHiddenSideDiv] = useState(false);
  const [showBetaAccess, setShowBetaAccess] = useState(false);

  const showSection1 = (visibility: boolean) => (): void => {
    setSection2(false);
    setSection3(false);
    if (!visibility) {
      setSection1(true);
    }
  };

  const showSection2 = (visibility: boolean) => (): void => {
    setSection1(false);
    setSection3(false);
    if (!visibility) {
      setSection2(true);
    }
  };

  const showSection3 = (visibility: boolean) => (): void => {
    setSection1(false);
    setSection2(false);
    if (!visibility) {
      setSection3(true);
    }
  };

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
      {/* <nav className='fixed top-0 z-10 w-full bg-[#F6F6F6] px-24 lg:px-[100px]'>
        <div className='py-3 lg:py-6'>
          <div className='flex items-center justify-between'>
            <div className='lg:flex'>
              <div className='pr-[40px]'>
                <span className='text-[64px] font-semibold text-[#181818] lg:text-[32px]'>
                  Egirls
                </span>
              </div>
              <div className='lg:flex lg:items-center lg:space-x-4'>
                <div className='hidden lg:flex lg:items-center'>
                  <button>
                    <span className='text-[32px] font-[500] text-[#5848BC] underline  decoration-[#5848BC] underline-offset-8 lg:text-[16px]'>
                      For users
                    </span>
                  </button>
                </div>
                <div className='hidden lg:flex lg:items-center'>
                  <button>
                    <Link href='/creator-landing'>
                      <span className='text-[32px] font-[500] text-[#181818] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8 lg:text-[16px]'>
                        For creators
                      </span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className='md:flex md:space-x-4 lg:flex lg:space-x-4'>
              <div className='hidden lg:flex lg:items-center'>
                <button>
                  <Link href='/contact-us'>
                    <span className='text-[32px] font-[500] text-[#181818] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8 lg:text-[16px]'>
                      Contact
                    </span>
                  </Link>
                </button>
              </div>
              <div
                className='justify-center rounded-[12px] bg-[#5848BC] px-[18px] py-[10px] xs:hidden sm:hidden md:flex md:items-center lg:flex lg:w-[158px] lg:items-center'
                onClick={setBetaAccess()}
              >
                <button>
                  <span className='text-[32px] font-[500] text-white lg:text-[16px]'>
                    Join Discord
                  </span>
                </button>
              </div>
              <div
                className='xs:flex xs:items-center sm:flex sm:items-center md:flex md:items-center lg:flex lg:items-center'
                onClick={setSideNav()}
              >
                <Bars2Icon className='h-[40px] w-[40px] fill-[black] lg:hidden lg:h-[20px] lg:w-[20px]'></Bars2Icon>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

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
                  <span className='text-[24px] font-[500] text-[white] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8 xs:text-[48px] sm:text-[48px]'>
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
                  Get beta access
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Beta Access */}
      {/* <div className={`bg-[black] flex h-full w-full top-0 z-10 fixed ease-in duration-300 items-center ${showBetaAccess === false ? 'hidden' : 'ease-in duration-300'}`}>
        <div className='hidden lg:block h-full w-2/5 bg-[black] relative'>
          <div className='w-full h-full absolute bottom-0'>
            <BetaAccessBg className='w-full h-full absolute'/>
          </div>
          <div className='w-full h-full absolute bottom-0'>
            <BetaAccessVector className='w-full h-1/4 bottom-0 absolute' />
          </div>
          <div className='absolute w-full h-full flex justify-center pt-32'>
            <span className='text-[white] text-[52px] font-semibold'>
              Egirls
            </span>
          </div>
          <div className='absolute pl-10 h-fit top-60'>
            <EGirlIconPurple className='overflow-visible'/>
          </div>
          <div className='w-full h-full absolute bottom-0 flex justify-center items-center'>
            <div className=''>
              <BetaAccessCard className=''/>
              <div className='flex justify-end'>
                <SpicyContentPurple className='' />
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:block h-full w-3/5 bg-[white]'>
          <div className='flex justify-end px-8 py-8'>
            <button>
              <XMarkIcon className='fill-[black] h-10 w-10' onClick={setBetaAccess()}></XMarkIcon>
            </button>
          </div>
          <div className='flex justify-center mt-20'>
            <div className='flex justify-center items-center bg-[#EAE8FD] rounded-[8px] w-fit px-6 py-2'>
              <StarIcon className='fill-[#5848BC] h-[20px] w-[20px] pr-[8px]'></StarIcon>
                <div className='flex justify-center'>
                  <span className='text-[#5848BC] text-[16px] font-[500]'>
                    beta access
                  </span>
                </div>
              </div>
          </div>
          <div className='flex justify-center mt-10'>
            <div>
              <div className='pt-10 space-x-3 flex justify-center text-center'>
                <span className='text-black text-[24px] lg:text-[56px] font-[600]'>
                  More than 3000 people have 
                  <span className='font-[500] italic mx-2 lg:mx-4'>
                    joined
                  </span>
                  the waitlist!
                </span>
              </div>
              <div className='pt-[48px] flex justify-center'>
                <div className='flex w-[515px]'>
                  <input type="email" className="bg-[#F6F6F6] form-input px-4 py-3 rounded-l-[12px] border-transparent drop-shadow text-[#949698] w-[395px]" placeholder='Enter your email'/>
                  <div className='flex items-center justify-center w-[158px] px-[24px] py-[16px] bg-[#5848BC] rounded-r-[12px] drop-shadow'>
                    <span>
                      Join
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-full w-full lg:hidden flex flex-col'>
          <div className='lg:hidden w-full h-1/2 bg-[#F6F6F6]'>
            <div className='h-full flex flex-col'>
              <div className='px-10 py-5 flex justify-between'>
                <span className='text-[black] text-[52px] font-semibold'>
                  Egirls
                </span>
                <button>
                  <XMarkIcon className='fill-[black] h-10 w-10' onClick={setBetaAccess()}></XMarkIcon>
                </button>
              </div>
              <div className='flex-1 flex flex-col w-fit h-fit'>
                <div className='flex justify-center'>
                  <div className='flex justify-center items-center bg-[#EAE8FD] rounded-[8px] w-fit px-6 py-2'>
                    <StarIcon className='fill-[#5848BC] h-[20px] w-[20px] pr-[8px]'></StarIcon>
                    <div className='flex justify-center'>
                      <span className='text-[#5848BC] text-[24px] font-[500]'>
                        beta access
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex-1 flex justify-center items-center'>
                  <div className='flex flex-col'>
                    <div className='space-x-3 flex justify-center text-center'>
                      <span className='text-black text-[56px] font-[600]'>
                        More than 3000 people have 
                        <span className='font-[500] italic mx-2 lg:mx-4'>
                          joined
                        </span>
                        the waitlist!
                      </span>
                    </div>
                    <div className='pt-[48px] flex justify-center'>
                      <div className='flex w-[515px]'>
                        <input type="email" className="bg-[#F6F6F6] form-input px-4 py-3 rounded-l-[12px] border-transparent drop-shadow text-[#949698] w-[395px]" placeholder='Enter your email'/>
                        <div className='flex items-center justify-center w-[158px] px-[24px] py-[16px] bg-[#5848BC] rounded-r-[12px] drop-shadow'>
                          <span>
                            Join
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:hidden h-full flex-1 w-full bg-[black]'>
            <div className='h-full w-full relative'>
              <div className='w-full h-full absolute bottom-0'>
                <BetaAccessBg className='z-0 w-full h-full absolute'/>
              </div>
              <div className='w-full h-full absolute bottom-0'>
                <BetaAccessVector className='z-10 w-full h-full absolute'/>
              </div>
              <div className='absolute pl-10 h-fit top-40'>
                <EGirlIconPurple className='overflow-visible'/>
              </div>
              <div className='w-full h-full absolute bottom-0 flex justify-center items-center'>
                <div className=''>
                  <BetaAccessCard className=''/>
                  <div className='flex justify-end'>
                    <SpicyContentPurple className='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
      {/* <div className='mt-[96px] w-full bg-[#F6F6F6] px-24 lg:px-[100px]'>
        <div className='py-20'>
          <div className='justify-center gap-[100px] xs:justify-center sm:grid sm:grid-cols-1 sm:justify-center md:grid md:grid-cols-2 md:justify-center md:max-xl:grid md:max-lg:grid-cols-1 lg:grid lg:grid-cols-2'>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className='flex items-center rounded-[8px] bg-[#EAE8FD] px-[8px] py-[12px]'>
                  <StarIcon className='h-[40px] w-[40px] fill-[#5848BC] pr-[8px] lg:h-[20px] lg:w-[20px]'></StarIcon>
                  <div className='flex '>
                    <span className='text-[32px] font-[500] text-[#5848BC] md:text-[24px] lg:text-[16px]'>
                      experience the future
                    </span>
                  </div>
                </div>
              </div>
              <div className='pt-12 text-center lg:text-start'>
                <span className='text-[104px] font-[600] text-black lg:text-[52px]'>
                  YOUR FAVOURITE{' '}
                  <span className='font-[500] italic'>EGIRLS</span>, ALL IN ONE
                  PLACE
                </span>
              </div>
              <div className='pt-[48px] text-center lg:text-start'>
                <span className='text-[36px] font-[400] text-black lg:text-[18px]'>
                  Join our waitlist for beta access, 3000 people have joined so
                  far!
                </span>
              </div>
              <div className='flex justify-center pt-[20px] lg:justify-start'>
                <div className='flex w-1/2 lg:w-full'>
                  <input
                    type='email'
                    className='form-input w-[395px] rounded-l-[12px] border-transparent px-4 py-3 text-[36px] text-[#949698] drop-shadow lg:text-[18px]'
                    placeholder='Enter your email'
                  />
                  <div className='flex items-center justify-center rounded-r-[12px] bg-[#5848BC] px-[24px] py-[16px] drop-shadow'>
                    <span className='text-[36px] lg:text-[18px]'>Join</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-15 pt-32 lg:mt-0 lg:pt-0'>
              <div className='shrink-0'>
                <NextImage
                  width={700}
                  height={650}
                  src={'/assets/svgImages/landingUserWeb.svg'}
                  alt={'landing user web'}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Discover */}
      <Discover />
      {/* <div className='w-full bg-[#FFFFFF] px-24 lg:px-[100px]'>
        <div className='py-10'>
          <div className=''>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className=''>
                  <span className='text-[36px] font-[500] text-[#949698] md:text-[24px] lg:text-[18px]'>
                    SOMETHING FOR EVERYONE
                  </span>
                </div>
              </div>
              <div className='flex justify-center space-x-3 lg:justify-start'>
                <span className='text-[64px] font-[600] text-[#000000] lg:text-[48px]'>
                  Discover
                </span>
                <span className='text-[64px] font-[400] italic text-[#000000] lg:text-[48px]'>
                  Egirls
                </span>
              </div>
            </div>
            <div className='mt-10'>
              <div className='items-center justify-around space-x-4 lg:flex'>
                <div className='mb-10 flex justify-center'>
                  <div>
                    <div className='hidden lg:block'>
                      <NextImage
                        width={400}
                        height={465}
                        src={'/assets/svgImages/discoverEgirl1.svg'}
                        imgClassName='rounded-[15px]'
                        alt={'discover e girl1'}
                      />
                    </div>
                    <div className='lg:hidden'>
                      <NextImage
                        width={600}
                        height={665}
                        src={'/assets/svgImages/discoverEgirl1.svg'}
                        imgClassName='rounded-[15px]'
                        alt={'discover e girl1'}
                      />
                    </div>
                    <div className='mt-[12px]'>
                      <span className='text-[30px] font-[600] text-[#000000] lg:text-[24px]'>
                        Sarah Scarlet
                      </span>
                    </div>
                    <div className='mt-[2px]'>
                      <span className='text-[28px] font-[500] text-[#949698] lg:text-[14px]'>
                        LOS ANGELES, USA
                      </span>
                    </div>
                  </div>
                </div>
                <div className='mb-10 flex justify-center'>
                  <div>
                    <div className='hidden lg:block'>
                      <NextImage
                        width={400}
                        height={465}
                        src={'/assets/svgImages/discoverEgirl2.svg'}
                        imgClassName='rounded-[15px]'
                        alt={'discover e girl2'}
                      />
                    </div>
                    <div className='lg:hidden'>
                      <NextImage
                        width={600}
                        height={665}
                        src={'/assets/svgImages/discoverEgirl2.svg'}
                        imgClassName='rounded-[15px]'
                        alt={'discover e girl2'}
                      />
                    </div>

                    <div className='mt-[12px]'>
                      <span className='text-[30px] font-[600] text-[#000000] lg:text-[24px]'>
                        Jennie Yoon
                      </span>
                    </div>
                    <div className='mt-[2px]'>
                      <span className='text-[28px] font-[500] text-[#949698] lg:text-[14px]'>
                        Seoul, South Korea{' '}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='mb-10 flex justify-center'>
                  <div>
                    <div className='hidden lg:block'>
                      <NextImage
                        width={400}
                        height={465}
                        src={'/assets/svgImages/discoverEgirl3.svg'}
                        imgClassName='rounded-[15px]'
                        alt={'discover e girl3'}
                      />
                    </div>
                    <div className='lg:hidden'>
                      <NextImage
                        width={600}
                        height={665}
                        src={'/assets/svgImages/discoverEgirl3.svg'}
                        imgClassName='rounded-[15px]'
                        alt={'discover e girl3'}
                      />
                    </div>

                    <div className='mt-[12px]'>
                      <span className='text-[30px] font-[600] text-[#000000] lg:text-[24px]'>
                        Mika-Chan
                      </span>
                    </div>
                    <div className='mt-[2px]'>
                      <span className='text-[28px] font-[500] text-[#949698] lg:text-[14px]'>
                        Tokyo, Japan
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Chat */}
      <Chat />
      {/* <div className='w-full bg-[#FFFFFF] px-24 lg:px-[100px]'>
        <div className='w-full py-20'>
          <div className='w-full gap-[100px] sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:max-xl:grid md:max-lg:grid-cols-1 lg:grid lg:grid-cols-2'>
            <div className='w-full'>
              <div className='flex justify-center lg:justify-start'>
                <div className=''>
                  <span className='text-[36px] font-[500] text-[#949698] lg:text-[18px]'>
                    CHAT AWAY
                  </span>
                </div>
              </div>
              <div className='flex justify-center text-center lg:justify-start lg:text-start'>
                <span className='text-[64px] font-[600] text-[#000000] lg:text-[48px]'>
                  Easily <span className='font-[400] italic'>chat</span> with
                  any Egirl you link
                </span>
              </div>
              <div>
                <div>
                  <div className='mt-[64px] flex items-center space-x-[16px] px-[8px] py-[12px]'>
                    <button onClick={showSection1(section1)}>
                      <div className='hidden lg:block'>
                        {section1 === true ? (
                          <NextImage
                            width={60}
                            height={60}
                            src={'/assets/homeIcons/pencilLogo.png'}
                            alt={'pencilLogo'}
                          />
                        ) : (
                          <NextImage
                            width={60}
                            height={60}
                            src={'/assets/homeIcons/pencilLogoBlank.png'}
                            alt={'pencilLogo'}
                          />
                        )}
                      </div>
                      <div className='lg:hidden'>
                        {section1 === true ? (
                          <NextImage
                            width={120}
                            height={120}
                            src={'/assets/homeIcons/pencilLogo.png'}
                            alt={'pencilLogo'}
                          />
                        ) : (
                          <NextImage
                            width={120}
                            height={120}
                            src={'/assets/homeIcons/pencilLogoBlank.png'}
                            alt={'pencilLogo'}
                          />
                        )}
                      </div>
                    </button>
                    <div>
                      <div>
                        <span className='text-[48px] font-[500] text-[#000000] lg:text-[24px]'>
                          Texting
                        </span>
                      </div>
                      {section1 && (
                        <div className='w-3/4'>
                          <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                            Text any Egirl to get a conversation started. Every
                            Egirl has a unique personality.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex items-center space-x-[16px] px-[8px] py-[12px]'>
                    <button onClick={showSection2(section2)}>
                      <div className='hidden lg:block'>
                        {section2 === true ? (
                          <NextImage
                            width={60}
                            height={60}
                            src={'/assets/homeIcons/requestLogo.png'}
                            alt={'requestLogo'}
                          />
                        ) : (
                          <NextImage
                            width={60}
                            height={60}
                            src={'/assets/homeIcons/requestLogoBlank.png'}
                            alt={'requestLogoBlank'}
                          />
                        )}
                      </div>
                      <div className='lg:hidden'>
                        {section2 === true ? (
                          <NextImage
                            width={120}
                            height={120}
                            src={'/assets/homeIcons/requestLogo.png'}
                            alt={'requestLogo'}
                          />
                        ) : (
                          <NextImage
                            width={120}
                            height={120}
                            src={'/assets/homeIcons/requestLogoBlank.png'}
                            alt={'requestLogoBlank'}
                          />
                        )}
                      </div>
                    </button>
                    <div>
                      <div>
                        <span className='text-[48px] font-[500] text-[#000000] lg:text-[24px]'>
                          Request Images
                        </span>
                      </div>
                      {section2 && (
                        <div className='w-3/4'>
                          <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                            Make a request for an Egirl to send you a specially
                            made pic of themselves.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex items-center space-x-[16px] px-[8px] py-[12px]'>
                    <button onClick={showSection3(section3)}>
                      <div className='hidden lg:block'>
                        {section3 === true ? (
                          <NextImage
                            width={60}
                            height={60}
                            src={'/assets/homeIcons/voiceMessage.png'}
                            alt={'voiceMessage'}
                          />
                        ) : (
                          <NextImage
                            width={60}
                            height={60}
                            src={'/assets/homeIcons/voiceMessageBlank.png'}
                            alt={'voiceMessageBlank'}
                          />
                        )}
                      </div>
                      <div className='lg:hidden'>
                        {section3 === true ? (
                          <NextImage
                            width={120}
                            height={120}
                            src={'/assets/homeIcons/voiceMessage.png'}
                            alt={'voiceMessage'}
                          />
                        ) : (
                          <NextImage
                            width={120}
                            height={120}
                            src={'/assets/homeIcons/voiceMessageBlank.png'}
                            alt={'voiceMessageBlank'}
                          />
                        )}
                      </div>
                    </button>
                    <div>
                      <div>
                        <span className='text-[48px] font-[500] text-[#000000] lg:text-[24px]'>
                          Voice Messages
                        </span>
                      </div>
                      {section3 && (
                        <div className='w-3/4'>
                          <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                            Ask an Egirl to send you voice messages instead of
                            regular texts.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-full justify-center min-[200px]:mt-[50px]'>
              <div className='hidden w-full lg:block'>
                {section1 && (
                  // <NextImage
                  //     width={800}
                  //     height={842}
                  //     src={'/assets/svgImages/chatAwayIllus.svg'}
                  //     alt={'chatAway illus'}
                  //     className='grow-0 border border-red-600'
                  //   />
                  <figure className='drop-shadow-lg'>
                    <Image
                      className='scale-125'
                      src={'/assets/svgImages/chatAwayIllus.svg'}
                      width={800}
                      height={800}
                      alt={'chatAway illus'}
                      layout='responsive'
                    />
                  </figure>
                )}
                {section2 && (
                  // <NextImage
                  //   width={800}
                  //   height={842}
                  //   src={'/assets/svgImages/requestImagesIllus.svg'}
                  //   alt={'requestImage illus'}
                  // />
                  <figure className=''>
                    <Image
                      className=''
                      src={'/assets/svgImages/requestImagesIllus.svg'}
                      width={800}
                      height={800}
                      alt={'requestImage illus'}
                      layout='responsive'
                    />
                  </figure>
                )}
                {section3 && (
                  // <NextImage
                  //   width={800}
                  //   height={842}
                  //   src={'/assets/svgImages/voiceMessagesIllus.svg'}
                  //   alt={'voiceMessage illus'}
                  // />
                  <figure className=''>
                    <Image
                      className=''
                      src={'/assets/svgImages/voiceMessagesIllus.svg'}
                      width={800}
                      height={800}
                      alt={'voiceMessage illus'}
                      layout='responsive'
                    />
                  </figure>
                )}
              </div>
              <div className='sm:shrink-0 md:shrink-0 lg:hidden'>
                {section1 && (
                  <NextImage
                    width={900}
                    height={900}
                    src={'/assets/svgImages/chatAwayIllus.svg'}
                    alt={'chatAway illus'}
                  />
                )}
                {section2 && (
                  <NextImage
                    width={900}
                    height={900}
                    src={'/assets/svgImages/requestImagesIllus.svg'}
                    alt={'requestImage illus'}
                  />
                )}
                {section3 && (
                  <NextImage
                    width={900}
                    height={900}
                    src={'/assets/svgImages/voiceMessagesIllus.svg'}
                    alt={'voiceMessage illus'}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Subscribe */}
      <Subscribe />
      {/* <div className='w-full bg-[#F7F7F7] px-24 lg:px-[100px]'>
        <div className='py-10'>
          <div className=''>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className=''>
                  <span className='text-[36px] font-[500] text-[#949698] lg:text-[18px]'>
                    SPICY CONTENT AWAITS
                  </span>
                </div>
              </div>
              <div className='flex justify-center space-x-3 text-center lg:justify-start'>
                <span className='text-[64px] font-[600] text-[#000000] lg:text-[48px]'>
                  Subscribe to see{' '}
                  <span className='font-[400] italic'>exclusive</span> content
                </span>
              </div>
            </div>
            <div className='mt-10 lg:mt-5'>
              <div className='items-center justify-around space-y-8 lg:flex lg:space-x-10 lg:space-y-0'>
                <div className='flex justify-center'>
                  <div className='rounded-lg border lg:h-[600px] lg:w-[400px]'>
                    <div className='justify-left flex items-center bg-[#6c6e7229] py-10 lg:h-[80px]'>
                      <div className='ml-[24px] hidden rounded-full lg:block'>
                        <NextImage
                          width={36}
                          height={36}
                          src={'/assets/mikaChanIcon.png'}
                          alt={'mikaChanIcon'}
                          imgClassName='rounded-full'
                        />
                      </div>
                      <div className='ml-[24px] rounded-full lg:hidden'>
                        <NextImage
                          width={72}
                          height={72}
                          src={'/assets/mikaChanIcon.png'}
                          alt={'mikaChanIcon'}
                          imgClassName='rounded-full'
                        />
                      </div>
                      <div className='ml-[12px]'>
                        <span className='text-[48px] font-[600] text-[#000000] lg:text-[24px]'>
                          Mika-Chan
                        </span>
                      </div>
                    </div>
                    <div className='mx-[24px] mt-[12px]'>
                      <span className='text-[30px] font-[400] text-[#000000] lg:text-[15px]'>
                        What do you guys think of my goth cosplay? uwu ·
                        私のゴスコスプレについてどう思いますか？uwu
                      </span>
                    </div>
                    <div className='mt-[14px] mb-[14px] flex items-center justify-center lg:mb-0'>
                      <NextImage
                        width={700}
                        height={800}
                        src={'/assets/mikaChanContent.png'}
                        alt={'mikaChanContent'}
                        imgClassName='rounded-[15px]'
                      />
                    </div>
                  </div>
                </div>

                <div className='flex justify-center pt-10 lg:pt-0'>
                  <div className='rounded-lg border lg:h-[600px] lg:w-[400px]'>
                    <div className='justify-left flex items-center bg-[#6c6e7229] py-10 lg:h-[80px]'>
                      <div className='ml-[24px] hidden rounded-full lg:block'>
                        <NextImage
                          width={36}
                          height={36}
                          src={'/assets/jennieIcon.png'}
                          alt={'jennieIcon'}
                          imgClassName='rounded-full'
                        />
                      </div>
                      <div className='ml-[24px] rounded-full lg:hidden'>
                        <NextImage
                          width={72}
                          height={72}
                          src={'/assets/jennieIcon.png'}
                          alt={'jennieIcon'}
                          imgClassName='rounded-full'
                        />
                      </div>
                      <div className='ml-[12px]'>
                        <span className='text-[48px] font-[600] text-[#000000] lg:text-[24px]'>
                          Jennie Yoon
                        </span>
                      </div>
                    </div>
                    <div className='mx-[24px] mt-[12px]'>
                      <span className='text-[30px] font-[400] text-[#000000] lg:text-[15px]'>
                        Do I look cuter with short hair? · 짧은 머리가 더 귀엽게
                        보이나요?
                      </span>
                    </div>
                    <div className='mt-[14px] mb-[14px] flex items-center justify-center lg:mb-0'>
                      <NextImage
                        width={700}
                        height={800}
                        src={'/assets/jennieContent.png'}
                        alt={'jennieContent'}
                        imgClassName='rounded-[15px]'
                      />
                    </div>
                  </div>
                </div>

                <div className='flex justify-center pt-10 lg:pt-0'>
                  <div className='w-full rounded-lg border lg:h-[600px] lg:w-[400px]'>
                    <div className='justify-left flex items-center bg-[#6c6e7229] py-10 lg:h-[80px]'>
                      <div className='ml-[24px] hidden rounded-full lg:block'>
                        <NextImage
                          width={36}
                          height={36}
                          src={'/assets/mirandaIcon.png'}
                          alt={'mirandaIcon'}
                          imgClassName='rounded-full'
                        />
                      </div>
                      <div className='ml-[24px] rounded-full lg:hidden'>
                        <NextImage
                          width={72}
                          height={72}
                          src={'/assets/mirandaIcon.png'}
                          alt={'mirandaIcon'}
                          imgClassName='rounded-full'
                        />
                      </div>
                      <div className='ml-[12px]'>
                        <span className='text-[48px] font-[600] text-[#000000] lg:text-[24px]'>
                          Miranda Wilde
                        </span>
                      </div>
                    </div>
                    <div className='mx-[24px] mt-[12px]'>
                      <span className='text-[30px] font-[400] text-[#000000] lg:text-[15px]'>
                        Trying out my new amber contacts at the beach
                      </span>
                    </div>
                    <div className='mt-[14px] mb-[14px] flex items-center justify-center lg:mt-[30px] lg:mb-0'>
                      <NextImage
                        width={700}
                        height={800}
                        src={'/assets/mirandaContent.png'}
                        alt={'mirandaContent'}
                        imgClassName='rounded-[15px]'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      <Footer />
      {/* <div className='w-full bg-[#000000] px-24 lg:px-[100px]'>
        <div className='py-20'>
          <div className='gap-[100px] sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:max-xl:grid md:max-lg:grid-cols-1 lg:grid lg:grid-cols-2'>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className='flex h-[40px] w-[135px] items-center justify-center rounded-[8px] bg-[#313131] px-[8px] py-[12px]'>
                  <StarIcon className='h-[20px] w-[20px] fill-[#5848BC] pr-[8px]'></StarIcon>
                  <div className='flex'>
                    <span className='text-[16px] font-[500] text-[white]'>
                      beta access
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex justify-center space-x-3 pt-10 text-center lg:justify-start lg:text-start'>
                <span className='text-[24px] font-[600] text-white lg:text-[56px]'>
                  More than 3000 people have
                  <span className='mx-2 font-[500] italic lg:mx-4'>joined</span>
                  the waitlist!
                </span>
              </div>
              <div className='flex justify-center pt-[48px] lg:justify-start'>
                <div className='flex w-[515px]'>
                  <input
                    type='email'
                    className='form-input w-[395px] rounded-l-[12px] border-transparent bg-[#313131] px-4 py-3 text-[#949698] drop-shadow'
                    placeholder='Enter your email'
                  />
                  <div className='flex w-[158px] items-center justify-center rounded-r-[12px] bg-[#5848BC] px-[24px] py-[16px] drop-shadow'>
                    <span>Join</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden min-[200px]:mt-[50px] lg:block'>
              <div className='sm:shrink-0 md:shrink-0'>
                <NextImage
                  width={537}
                  height={522}
                  src={'/assets/svgImages/footerIllus.svg'}
                  alt={'footer illus'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='space-y-10 py-10 lg:flex lg:justify-between'>
          <div>
            <span className='text-[32px] font-semibold text-white'>Egirls</span>
          </div>
          <div className='space-y-2'>
            <div>
              <span className='text-[14px] font-[500] text-[#646668]'>
                CHAT WITH US
              </span>
            </div>
            <div>
              <span className='text-[16px] font-[500] text-[white]'>
                business@egirls.ai
              </span>
            </div>
          </div>
          <div>
            <span className='text-[14px] font-[500] text-[#646668]'>
              FOLLOW US
            </span>
            <div className='mt-[15px] flex space-x-[24px]'>
              <div>
                <NextImage
                  width={18}
                  height={18}
                  src={'/assets/homeIcons/instagramIcon.png'}
                  alt={'Profile'}
                  className='rounded-[15px]'
                />
              </div>
              <div className='p-1'>
                <NextImage
                  width={18}
                  height={18}
                  src={'/assets/homeIcons/tiktokIcon.png'}
                  alt={'Profile'}
                  className='rounded-[15px]'
                />
              </div>
              <div className='p-1'>
                <NextImage
                  width={18}
                  height={18}
                  src={'/assets/homeIcons/redditIcon.png'}
                  alt={'Profile'}
                  className='rounded-[15px]'
                />
              </div>
              <div className='p-1'>
                <NextImage
                  width={18}
                  height={18}
                  src={'/assets/homeIcons/discordIcon.png'}
                  alt={'Profile'}
                  className='rounded-[15px]'
                />
              </div>
              <div className='p-1'>
                <NextImage
                  width={18}
                  height={18}
                  src={'/assets/homeIcons/twitterIcon.png'}
                  alt={'Profile'}
                  className='rounded-[15px]'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mb-[15px] border-t-2 border-[#646668]'>
          <div className='flex justify-between py-[25px]'>
            <div>
              <span>© 2023 Egirls AI, Inc. All Rights Reserved</span>
            </div>
            <div>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Socials sticky */}
      <div className='sticky bottom-0 right-0 z-10 float-right flex w-full justify-end'>
        <div className='h-[60px] w-[160px] rounded-tl-xl bg-[#5848BC] p-1'>
          <div className='grid h-full grid-cols-3 items-center justify-items-center p-1 '>
            <div className='rounded-lg p-2 hover:bg-[#7367c2]'>
              <NextImage
                width={20}
                height={20}
                src={'/assets/homeIcons/redditIcon.png'}
                alt={'Profile'}
                className=''
              />
            </div>
            <div className='rounded-lg p-2 hover:bg-[#7367c2]'>
              <NextImage
                width={24}
                height={20}
                src={'/assets/homeIcons/discordIcon.png'}
                alt={'Profile'}
                className=''
              />
            </div>
            <div className='rounded-lg p-2 hover:bg-[#7367c2]'>
              <NextImage
                width={24}
                height={20}
                src={'/assets/homeIcons/twitterIcon.png'}
                alt={'Profile'}
                className=''
              />
            </div>
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
