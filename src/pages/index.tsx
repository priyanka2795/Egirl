import { AuthLayout } from '@components/layout/auth-layout';
import { SEO } from '@components/common/seo';
import { LoginMain } from '@components/login/login-main';
import { LoginFooter } from '@components/login/login-footer';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import Account from '../components/account/account';
import Router from 'next/router';
import { LayoutProps } from '@components/layout/common-layout';
import { StarIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { PencilIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import { NextImage } from '@components/ui/next-image';
import Link from 'next/link';
import EGirlIcon from '@components/svg-assets/EGirlIcon';
import EGirlIconPurple from '@components/svg-assets/EGirlIconPurple';
import BetaAccessCard from '@components/svg-assets/BetaAccessCard';
import BetaAccessBg from '@components/svg-assets/BetaAccessBg';
import BetaAccessVector from '@components/svg-assets/BetaAccessVector';
import SpicyContentPurple from '@components/svg-assets/SpicyContentPurple';

export function LandingLayout({ children }: LayoutProps): JSX.Element {
  return (
    <div className='w-full bg-white'>
      {children}
    </div>
  );
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
    if(!visibility){
      setSection1(true)
    }
  };

  const showSection2 = (visibility: boolean) => (): void => {
    setSection1(false);
    setSection3(false);
    if(!visibility){
      setSection2(true)
    }
  };

  const showSection3 = (visibility: boolean) => (): void => {
    setSection1(false);
    setSection2(false);
    if(!visibility){
      setSection3(true);
    }
  };

  const setSideNav = () => (): void => {
    setHiddenSideDiv(!hiddenSideDiv);
  }

  const setBetaAccess = () => (): void => {
    setShowBetaAccess(!showBetaAccess);
  }

  const hideSideShowBeta = () => (): void => {
    setShowBetaAccess(true);
    setHiddenSideDiv(false);
  }

  useEffect(() => {

  });
  
  return (
    <div className='grid min-h-screen grid-rows-[1fr,auto] bg-white h-screen'>
      <SEO
        title='Egirls'
        description=''
      />

      {/* Nav Bar */}
      <nav className='bg-[#F6F6F6] lg:px-[100px] px-24 fixed top-0 z-10 w-full'>
        <div className='lg:py-6 py-3'>
          <div className='flex justify-between items-center'>
            <div className='lg:flex'>
                <div className='pr-[40px]'>
                  <span className='text-[#181818] text-[64px] lg:text-[32px] font-semibold'>
                    Egirls
                  </span>
                </div>
                <div className='lg:flex lg:space-x-4 lg:items-center'>
                  <div className='hidden lg:flex lg:items-center'>
                    <button>
                      <span className='text-[32px] lg:text-[16px] font-[500] text-[#5848BC]  underline decoration-[#5848BC] underline-offset-8'>
                        For users
                      </span>
                    </button>
                  </div>
                  <div className='hidden lg:flex lg:items-center'>
                    <button>
                      <Link href='/creator-landing'>
                      <span className='text-[#181818] text-[32px] lg:text-[16px] font-[500] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
                        For creators
                      </span>
                      </Link>
                    </button>
                  </div>
                </div>
            </div>
            <div className='lg:flex md:flex lg:space-x-4 md:space-x-4'>
              <div className='hidden lg:flex lg:items-center'>
                <button>
                  <Link href='/contact-us'>
                    <span className='text-[#181818] text-[32px] lg:text-[16px] font-[500] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
                      Contact
                    </span>
                  </Link>
                </button>
              </div>
              <div className='sm:hidden xs:hidden lg:flex lg:items-center md:flex md:items-center justify-center lg:w-[158px] px-[18px] py-[10px] bg-[#5848BC] rounded-[12px]' onClick={setBetaAccess()}>
                <button>
                  <span className='text-white text-[32px] lg:text-[16px] font-[500]'>
                    Join Discord
                  </span>
                </button>
              </div>
              <div className='lg:flex lg:items-center md:flex md:items-center sm:flex sm:items-center xs:flex xs:items-center' onClick={setSideNav()}>
                <Bars2Icon className='fill-[black] h-[40px] w-[40px] lg:h-[20px] lg:w-[20px] lg:hidden' ></Bars2Icon>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Side NavBar */}
      <nav className={`bg-[black] h-full w-full top-0 z-10 fixed lg:invisible p-20 ease-in duration-300 ${hiddenSideDiv === false ? 'invisible' : 'visible ease-in duration-300'}`}>
        <div>
          <div className='flex items-center justify-between'>
            <div className=''>
              <span className='text-[white] xs:text-[104px] sm:text-[104px] text-[52px] font-semibold'>
                Egirls
              </span>
            </div>
            <div>
              <XMarkIcon className='fill-[white] h-16 w-16' onClick={setSideNav()}></XMarkIcon>
            </div>
          </div>
          <div className='pt-20 space-y-20'>
            <div className=''>
              <button>
                <span className='xs:text-[48px] sm:text-[48px] text-[24px] font-[500] text-[#5848BC] underline hover:decoration-[white] underline-offset-8'>
                  For users
                </span>
              </button>
            </div>
            <div className=''>
              <button>
                <Link href='/creator-landing'>
                  <span className='text-[white] xs:text-[48px] sm:text-[48px] text-[24px] font-[500] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
                    For creators
                  </span>
                </Link>
              </button>
            </div>
            <div className=''>
              <button>
                <Link href='/contact-us'>
                  <span className='text-[white] xs:text-[48px] sm:text-[48px] text-[24px] font-[500] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
                    Contact
                  </span>
                </Link>
              </button>
            </div>
          </div>

          <div className='flex justify-center bottom-16 absolute inset-x-10'>
            <div className='lg:hidden w-full flex justify-center px-[18px] py-[10px] bg-[#5848BC] rounded-[12px]' onClick={hideSideShowBeta()}>
              <button>
                <span className='text-white xs:text-[64px] sm:text-[64px] text-[32px] font-[500]'>
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
      <div className={`bg-[black] h-full w-full top-0 z-10 fixed ease-in duration-300 items-center ${showBetaAccess === false ? 'hidden' : 'ease-in duration-300'}`}>
        <div className='bg-[url(/assets/svgImages/joinDiscordBg.svg)] h-full w-full bg-no-repeat bg-center bg-cover'>
          <div className='flex justify-end w-full'>
            <div className='p-8'>
              <button>
                <XMarkIcon className='fill-[white] h-10 w-10' onClick={setBetaAccess()}></XMarkIcon>
              </button>
            </div>
          </div>
          <div className='w-full p-2'>
            <div className='flex justify-center p-2'>
              <div className='flex justify-center items-center bg-[#313131] rounded-[8px] h-[40px] w-[135px] px-[8px] py-[12px]'>
                <StarIcon className='fill-[#5848BC] h-[20px] w-[20px] pr-[8px]'></StarIcon>
                <div className='flex'>
                  <span className='text-[white] text-[16px] font-[500]'>
                    Join us
                  </span>
                </div>
              </div>
            </div>
            <div className='flex justify-center p-2'>
              <div className='text-[white] text-[64px] font-[600]'>
                <div>
                  <span>
                    Design <span className='italic font-[400]'> without </span>
                  </span>
                </div>
                <div className='flex justify-center'>
                  <span>
                    limits
                  </span>
                </div>
              </div>
            </div>
            <div className='flex justify-center p-2'>
              <div className='text-[#ffffff]/[0.44] text-[18px] font-[400]'>
                <span>
                  Join our Discord community and introduce yourself
                </span>
              </div>
            </div>
            <div className='flex justify-center p-16'>
              <div className='flex items-center justify-center w-[158px] px-[24px] py-[16px] bg-[#5848BC] rounded-[12px] drop-shadow'>
                <span>
                  Join Discord
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className='bg-[#F6F6F6] lg:px-[100px] px-24 w-full mt-[96px]'>
        <div className='py-20'>
          <div className='lg:grid lg:grid-cols-2 gap-[100px] md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 md:max-xl:grid md:max-lg:grid-cols-1 md:justify-center sm:justify-center xs:justify-center justify-center'>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className='flex items-center bg-[#EAE8FD] rounded-[8px] px-[8px] py-[12px]'>
                  <StarIcon className='fill-[#5848BC] h-[40px] w-[40px] lg:h-[20px] lg:w-[20px] pr-[8px]'></StarIcon>
                  <div className='flex '>
                    <span className='text-[#5848BC] text-[32px] md:text-[24px] lg:text-[16px] font-[500]'>
                      experience the future
                    </span>
                  </div>
                </div>
              </div>
              <div className='pt-12 text-center lg:text-start'>
                <span className='text-black text-[104px] lg:text-[52px] font-[600]'>
                  YOUR FAVOURITE <span className='font-[500] italic'>EGIRLS</span>, ALL IN ONE PLACE
                </span>
              </div>
              <div className='pt-[48px] text-center lg:text-start'>
                <span className='text-black text-[36px] lg:text-[18px] font-[400]'>
                  Join our waitlist for beta access, 3000 people have joined so far!
                </span>
              </div>
              <div className='pt-[20px] flex justify-center lg:justify-start'>
                <div className='flex w-1/2 lg:w-full'>
                  <input type="email" className="form-input px-4 py-3 rounded-l-[12px] border-transparent drop-shadow text-[#949698] w-[395px] text-[36px] lg:text-[18px]" placeholder='Enter your email'/>
                  <div className='flex items-center justify-center px-[24px] py-[16px] bg-[#5848BC] rounded-r-[12px] drop-shadow'>
                    <span className='text-[36px] lg:text-[18px]'>
                      Join
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-32 lg:pt-0 mt-15 lg:mt-0'>
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
      </div>
      
      {/* Discover */}
      <div className='bg-[#FFFFFF] lg:px-[100px] px-24 w-full'>
        <div className='py-10'>
          <div className=''>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className=''>
                  <span className='text-[#949698] text-[36px] md:text-[24px] lg:text-[18px] font-[500]'>
                    SOMETHING FOR EVERYONE
                  </span>
                </div>
              </div>
              <div className='space-x-3 flex justify-center lg:justify-start'>
                <span className='text-[#000000] text-[64px] lg:text-[48px] font-[600]'>
                  Discover 
                </span>
                <span className='text-[#000000] text-[64px] lg:text-[48px] font-[400] italic'>
                  Egirls
                </span>
              </div>
            </div>
            <div className='mt-10'>
              <div className='lg:flex items-center justify-around space-x-4'>
                <div className='flex justify-center mb-10'>
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
                      <span className='text-[#000000] text-[30px] lg:text-[24px] font-[600]'>Sarah Scarlet</span>
                    </div>
                    <div className='mt-[2px]'>
                      <span className='text-[#949698] text-[28px] lg:text-[14px] font-[500]'>LOS ANGELES, USA</span>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center mb-10'>
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
                      <span className='text-[#000000] text-[30px] lg:text-[24px] font-[600]'>Jennie Yoon</span>
                    </div>
                    <div className='mt-[2px]'>
                      <span className='text-[#949698] text-[28px] lg:text-[14px] font-[500]'>Seoul, South Korea </span>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center mb-10'>
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
                      <span className='text-[#000000] text-[30px] lg:text-[24px] font-[600]'>Mika-Chan</span>
                    </div>
                    <div className='mt-[2px]'>
                      <span className='text-[#949698] text-[28px] lg:text-[14px] font-[500]'>Tokyo, Japan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat */}
      <div className='bg-[#FFFFFF] lg:px-[100px] px-24 w-full'>
        <div className='py-20 w-full'>
          <div className='w-full lg:grid lg:grid-cols-2 gap-[100px] md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 md:max-xl:grid md:max-lg:grid-cols-1'>
            <div className='w-full'>
              <div className='flex justify-center lg:justify-start'>
                <div className=''>
                  <span className='text-[#949698] text-[36px] lg:text-[18px] font-[500]'>
                    CHAT AWAY
                  </span>
                </div>
              </div>
              <div className='flex justify-center lg:justify-start text-center lg:text-start'>
                <span className='text-[#000000] text-[64px] lg:text-[48px] font-[600]'>
                  Easily <span className='font-[400] italic'>chat</span> with any Egirl you link
                </span>
              </div>
              <div>
                <div>
                  <div className='flex items-center px-[8px] py-[12px] space-x-[16px] mt-[64px]'>
                    <button onClick={showSection1(section1)}>
                      <div className='hidden lg:block'>
                      {
                      section1 === true ?
                      <NextImage
                        width={60}
                        height={60}
                        src={'/assets/homeIcons/pencilLogo.png'}
                        alt={'pencilLogo'}
                      /> 
                      : 
                      <NextImage
                        width={60}
                        height={60}
                        src={'/assets/homeIcons/pencilLogoBlank.png'}
                        alt={'pencilLogo'}
                      /> 
                      }
                      </div>
                      <div className='lg:hidden'>
                      {
                      section1 === true ?
                      <NextImage
                        width={120}
                        height={120}
                        src={'/assets/homeIcons/pencilLogo.png'}
                        alt={'pencilLogo'}
                      /> 
                      : 
                      <NextImage
                        width={120}
                        height={120}
                        src={'/assets/homeIcons/pencilLogoBlank.png'}
                        alt={'pencilLogo'}
                      /> 
                      }
                      </div>
                    </button>
                    <div>
                      <div>
                        <span className='text-[#000000] text-[48px] lg:text-[24px] font-[500]'>
                          Texting
                        </span>
                      </div>
                      {
                      section1 && 
                        <div className='w-3/4'>
                          <span className='text-[#000000] text-[36px] lg:text-[18px] font-[400]'>
                            Text any Egirl to get a conversation started. Every Egirl has a unique personality.
                          </span>
                        </div>
                      }
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex items-center px-[8px] py-[12px] space-x-[16px]'>
                    <button onClick={showSection2(section2)}>
                        <div className='hidden lg:block'>
                        {
                        section2 === true ?
                        <NextImage
                          width={60}
                          height={60}
                          src={'/assets/homeIcons/requestLogo.png'}
                          alt={'requestLogo'}
                        /> 
                        : 
                        <NextImage
                          width={60}
                          height={60}
                          src={'/assets/homeIcons/requestLogoBlank.png'}
                          alt={'requestLogoBlank'}
                        /> 
                        }
                        </div>
                        <div className='lg:hidden'>
                        {
                        section2 === true ?
                        <NextImage
                          width={120}
                          height={120}
                          src={'/assets/homeIcons/requestLogo.png'}
                          alt={'requestLogo'}
                        /> 
                        : 
                        <NextImage
                          width={120}
                          height={120}
                          src={'/assets/homeIcons/requestLogoBlank.png'}
                          alt={'requestLogoBlank'}
                        /> 
                        }
                        </div>
                      </button>
                    <div>
                      <div>
                        <span className='text-[#000000] text-[48px] lg:text-[24px] font-[500]'>
                          Request Images
                        </span>
                      </div>
                      {
                      section2 && 
                        <div className='w-3/4'>
                          <span className='text-[#000000] text-[36px] lg:text-[18px] font-[400]'>
                            Make a request for an Egirl to send you a specially made pic of themselves.
                          </span>
                        </div>
                      }
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex items-center px-[8px] py-[12px] space-x-[16px]'>
                    <button onClick={showSection3(section3)}>
                          <div className='hidden lg:block'>
                          {
                          section3 === true ?
                          <NextImage
                            width={60}
                            height={60}
                            src={'/assets/homeIcons/voiceMessage.png'}
                            alt={'voiceMessage'}
                          /> 
                          : 
                          <NextImage
                            width={60}
                            height={60}
                            src={'/assets/homeIcons/voiceMessageBlank.png'}
                            alt={'voiceMessageBlank'}
                          /> 
                          }
                          </div>
                          <div className='lg:hidden'>
                          {
                          section3 === true ?
                          <NextImage
                            width={120}
                            height={120}
                            src={'/assets/homeIcons/voiceMessage.png'}
                            alt={'voiceMessage'}
                          /> 
                          : 
                          <NextImage
                            width={120}
                            height={120}
                            src={'/assets/homeIcons/voiceMessageBlank.png'}
                            alt={'voiceMessageBlank'}
                          /> 
                          }
                          </div>
                        </button>
                    <div>
                      <div>
                        <span className='text-[#000000] text-[48px] lg:text-[24px] font-[500]'>
                          Voice Messages
                        </span>
                      </div>
                      {
                      section3 && 
                        <div className='w-3/4'>
                          <span className='text-[#000000] text-[36px] lg:text-[18px] font-[400]'>
                            Ask an Egirl to send you voice messages instead of regular texts.
                          </span>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='min-[200px]:mt-[50px] flex justify-center w-full'>
              <div className='hidden lg:block w-full'>
                {
                  section1 && 
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
                  
                }
                {
                  section2 && 
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
                }
                {
                  section3 && 
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
                }
              </div>
              <div className='md:shrink-0 sm:shrink-0 lg:hidden'>
                {
                  section1 && 
                  <NextImage
                      width={900}
                      height={900}
                      src={'/assets/svgImages/chatAwayIllus.svg'}
                      alt={'chatAway illus'}
                    />
                  
                }
                {
                  section2 && 
                  <NextImage
                    width={900}
                    height={900}
                    src={'/assets/svgImages/requestImagesIllus.svg'}
                    alt={'requestImage illus'}
                  />
                }
                {
                  section3 && 
                  <NextImage
                    width={900}
                    height={900}
                    src={'/assets/svgImages/voiceMessagesIllus.svg'}
                    alt={'voiceMessage illus'}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <div className='bg-[#F7F7F7] lg:px-[100px] px-24 w-full'>
        <div className='py-10'>
          <div className=''>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className=''>
                  <span className='text-[#949698] text-[36px] lg:text-[18px] font-[500]'>
                    SPICY CONTENT AWAITS
                  </span>
                </div>
              </div>
              <div className='space-x-3 flex justify-center lg:justify-start text-center'>
                <span className='text-[#000000] text-[64px] lg:text-[48px] font-[600]'>
                  Subscribe to see <span className='font-[400] italic'>exclusive</span> content
                </span>
              </div>
            </div>
            <div className='mt-10 lg:mt-5'>
              <div className='lg:flex items-center justify-around space-y-8 lg:space-x-10 lg:space-y-0'>
                
                <div className='flex justify-center'>
                  <div className='lg:w-[400px] lg:h-[600px] border rounded-lg'>
                    <div className='bg-[#6c6e7229] py-10 lg:h-[80px] flex items-center justify-left'>
                      <div className='ml-[24px] rounded-full hidden lg:block'>
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
                        <span className='text-[#000000] text-[48px] lg:text-[24px] font-[600]'>Mika-Chan</span>
                      </div>
                    </div>
                    <div className='mt-[12px] mx-[24px]'>
                      <span className='text-[#000000] text-[30px] lg:text-[15px] font-[400]'>What do you guys think of my goth cosplay? uwu · 私のゴスコスプレについてどう思いますか？uwu</span>
                    </div>
                    <div className='flex items-center justify-center mt-[14px] mb-[14px] lg:mb-0'>
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
                  <div className='lg:w-[400px] lg:h-[600px] border rounded-lg'>
                    <div className='bg-[#6c6e7229] py-10 lg:h-[80px] flex items-center justify-left'>
                      <div className='ml-[24px] rounded-full hidden lg:block'>
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
                        <span className='text-[#000000] text-[48px] lg:text-[24px] font-[600]'>Jennie Yoon</span>
                      </div>
                    </div>
                    <div className='mt-[12px] mx-[24px]'>
                      <span className='text-[#000000] text-[30px] lg:text-[15px] font-[400]'>Do I look cuter with short hair? · 짧은 머리가 더 귀엽게 보이나요?</span>
                    </div>
                    <div className='flex items-center justify-center mt-[14px] mb-[14px] lg:mb-0'>
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
                  <div className='lg:w-[400px] lg:h-[600px] border rounded-lg w-full'>
                    <div className='bg-[#6c6e7229] py-10 lg:h-[80px] flex items-center justify-left'>
                      <div className='ml-[24px] rounded-full hidden lg:block'>
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
                        <span className='text-[#000000] text-[48px] lg:text-[24px] font-[600]'>Miranda Wilde</span>
                      </div>
                    </div>
                    <div className='mt-[12px] mx-[24px]'>
                      <span className='text-[#000000] text-[30px] lg:text-[15px] font-[400]'>Trying out my new amber contacts at the beach</span>
                    </div>
                    <div className='flex items-center justify-center mt-[14px] lg:mt-[30px] mb-[14px] lg:mb-0'>
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
      </div>

      {/* Footer */}
      <div className='bg-[#000000] lg:px-[100px] px-24 w-full'>
        <div className='py-20'>
          <div className='lg:grid lg:grid-cols-2 gap-[100px] md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 md:max-xl:grid md:max-lg:grid-cols-1'>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className='flex justify-center items-center bg-[#313131] rounded-[8px] h-[40px] w-[135px] px-[8px] py-[12px]'>
                  <StarIcon className='fill-[#5848BC] h-[20px] w-[20px] pr-[8px]'></StarIcon>
                  <div className='flex'>
                    <span className='text-[white] text-[16px] font-[500]'>
                      beta access
                    </span>
                  </div>
                </div>
              </div>      
              <div className='pt-10 space-x-3 flex justify-center lg:justify-start text-center lg:text-start'>
                <span className='text-white text-[24px] lg:text-[56px] font-[600]'>
                  More than 3000 people have 
                  <span className='font-[500] italic mx-2 lg:mx-4'>
                    joined
                  </span>
                  the waitlist!
                </span>
              </div>
              <div className='pt-[48px] flex justify-center lg:justify-start'>
                <div className='flex w-[515px]'>
                  <input type="email" className="bg-[#313131] form-input px-4 py-3 rounded-l-[12px] border-transparent drop-shadow text-[#949698] w-[395px]" placeholder='Enter your email'/>
                  <div className='flex items-center justify-center w-[158px] px-[24px] py-[16px] bg-[#5848BC] rounded-r-[12px] drop-shadow'>
                    <span>
                      Join
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden lg:block min-[200px]:mt-[50px]'>
              <div className='md:shrink-0 sm:shrink-0'>
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
        <div className='py-10 space-y-10 lg:flex lg:justify-between'>
          <div>
            <span className='text-white text-[32px] font-semibold'>
              Egirls
            </span>
          </div>
          <div className='space-y-2'>
            <div>
              <span className='text-[#646668] text-[14px] font-[500]'>
                CHAT WITH US
              </span>
            </div>
            <div>
              <span className='text-[white] text-[16px] font-[500]'>
                business@egirls.ai
              </span>
            </div>
          </div>
          <div>
            <span className='text-[#646668] text-[14px] font-[500]'>
              FOLLOW US
            </span>
            <div className='flex space-x-[24px] mt-[15px]'>
              <div>
                <NextImage
                    width={18}
                    height={18}
                    src={'/assets/homeIcons/instagramIcon.png'}
                    alt={'Profile'}
                    className='rounded-[15px]'
                  />
              </div>
              <div>
                <NextImage
                    width={18}
                    height={18}
                    src={'/assets/homeIcons/tiktokIcon.png'}
                    alt={'Profile'}
                    className='rounded-[15px]'
                  />
              </div>
              <div>
                <NextImage
                    width={18}
                    height={18}
                    src={'/assets/homeIcons/redditIcon.png'}
                    alt={'Profile'}
                    className='rounded-[15px]'
                  />
              </div>
              <div>
                <NextImage
                    width={18}
                    height={18}
                    src={'/assets/homeIcons/discordIcon.png'}
                    alt={'Profile'}
                    className='rounded-[15px]'
                  />
              </div>
              <div>
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
        <div className='border-t-2 border-[#646668] mb-[15px]'>
          <div className='py-[25px] flex justify-between'>
            <div>
              <span>© 2023 Egirls AI, Inc. All Rights Reserved</span>
            </div>
            <div>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Socials sticky */}
      <div className='sticky bottom-0 right-0 z-10 float-right w-full flex justify-end'>
        <div className='bg-[#5848BC] w-[160px] h-[60px] rounded-tl-xl p-1'>
          <div className='grid grid-cols-3 p-1 h-full justify-items-center items-center '>
            <div className='hover:bg-[#7367c2] p-2 rounded-lg'>
              <NextImage
                  width={20}
                  height={20}
                  src={'/assets/homeIcons/redditIcon.png'}
                  alt={'Profile'}
                  className=''
                />
            </div>
            <div className='hover:bg-[#7367c2] p-2 rounded-lg'>
              <NextImage
                  width={24}
                  height={20}
                  src={'/assets/homeIcons/discordIcon.png'}
                  alt={'Profile'}
                  className=''
                />
            </div>
            <div className='hover:bg-[#7367c2] p-2 rounded-lg'>
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
    <LandingLayout>
      {page}
    </LandingLayout>
  </AuthLayout>
);
