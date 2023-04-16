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
import CreatorRoundIcon2 from '@components/svg-assets/CreatorRoundIcon2';
import RoundedEgirlIcon from '@components/svg-assets/RoundedEgirlTagIcon';
import RoundedCreatingTagIcon from '@components/svg-assets/RoundedCreatingTagIcon';
import CreatorRoundIcon1 from '@components/svg-assets/CreatorRoundIcon1';
import TextingIllustration from '@components/svg-assets/Texting';

export function LandingLayout({ children }: LayoutProps): JSX.Element {
  return (
    <div className='w-full bg-white'>
      {children}
    </div>
  );
}

export default function CreatorLanding(): JSX.Element {

  const [hiddenSideDiv, setHiddenSideDiv] = useState(false);
  const [showBetaAccess, setShowBetaAccess] = useState(false);
  
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
    <div className='grid grid-rows-[1fr,auto] bg-white h-screen'>
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
                      <Link href='/'>
                        <span className='text-[#181818] text-[32px] lg:text-[16px] font-[500] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
                          For users
                        </span>
                      </Link>
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
                    <span className='text-[32px] lg:text-[16px] font-[500] text-[#5848BC]  underline decoration-[#5848BC] underline-offset-8'>
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
                <Bars2Icon className='fill-[#181818] h-[40px] w-[40px] lg:h-[20px] lg:w-[20px] lg:hidden' ></Bars2Icon>
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
      <div className='bg-[#F6F6F6] lg:px-[100px] px-24 mt-[96px]'>
        <div className='py-20'>
          <div className='lg:grid lg:grid-cols-2 gap-[50px] md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 md:max-xl:grid md:max-lg:grid-cols-1'>
            <div className=''>
              <div className='flex justify-start items-center bg-[#EAE8FD] rounded-[8px] w-fit px-6 py-2'>
                <StarIcon className='fill-[#5848BC] h-[20px] w-[20px] pr-[8px]'></StarIcon>
                <div className='flex '>
                  <span className='text-[#5848BC] text-[16px] font-[500]'>
                    contact us
                  </span>
                </div>
              </div>
              <div className='pt-12'>
                <span className='text-black text-[56px] font-[600]'>
                  LET'S START A 
                </span>
                <div>
                  <span className='text-black text-[56px] font-[500] italic'>
                    CONVERSATION!
                  </span>
                </div>
              </div>
              <div className='pt-12 w-fit'>
                <span className='text-black text-[18px] font-[400]'>
                  Are you interested in becoming our partner or simply want to share
                  your thoughts about our work? Please feel free to contact us using 
                  the form on the right. We’ll get back to you as soon as possible!
                </span>
              </div>
            </div>
            <div className='min-[200px]:pt-10'>
              <div className="w-full">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="flex justify-around mb-4 space-x-4">
                    <div className='w-1/2'>
                      <label className="text-[#646668] text-[13px] font-[500] mb-2">
                        Name
                      </label>
                      <input className="border-none	bg-[#F6F6F6] rounded w-full py-2 px-3 text-gray-700" id="username" type="text" placeholder="Your name" />
                    </div>
                    <div className='w-1/2'>
                      <label className="text-[#646668] text-[13px] font-[500] mb-2">
                        Email
                      </label>
                      <input className="border-none	bg-[#F6F6F6] rounded w-full py-2 px-3 text-gray-700" id="email" type="text" placeholder="example@mail.com" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="text-[#646668] text-[13px] font-[500] mb-2">
                      Message
                    </label>
                    <input className="h-[118px] border-none	bg-[#F6F6F6] rounded w-full py-2 px-3 text-gray-700 mb-3" id="message" type="text" placeholder="Your message" />
                  </div>
                  <div className='flex items-center justify-center'>
                    <button className='w-full px-[18px] py-[10px] bg-[#5848BC] rounded-[12px]'>
                      <span className='text-white text-[16px] font-[500]'>
                        Send a message
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='bg-[#000000] lg:px-[100px] px-24'>
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
                  width={550}
                  height={500}
                  src={'/assets/footerContent.png'}
                  alt={'Profile'}
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
      <div className='sticky bottom-0 z-10 w-full flex justify-end'>
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

CreatorLanding.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>
    <LandingLayout>
      {page}
    </LandingLayout>
  </AuthLayout>
);
