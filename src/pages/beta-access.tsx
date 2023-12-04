import { AuthLayout } from '@components/layout/auth-layout';
import { SEO } from '@components/common-old/seo';
import { LoginMain } from '@components/login/login-main';
import { LoginFooter } from '@components/login/login-footer';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
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
  return <div className='w-full bg-white'>{children}</div>;
}

export default function CreatorLanding(): JSX.Element {
  const [section1, setSection1] = useState(true);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(false);
  const [hiddenSideDiv, setHiddenSideDiv] = useState(false);

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

  useEffect(() => {});

  return (
    <div className='grid grid-rows-[1fr,auto] bg-white'>
      <SEO title='Egirls' description='' />

      {/* Nav Bar */}
      <nav className='sticky top-0 z-10 bg-[#F6F6F6] px-24 lg:px-[100px]'>
        <div className='py-3 lg:py-6'>
          <div className='flex items-center justify-between'>
            <div className='lg:flex'>
              <div className='pr-[40px]'>
                <span className='text-[32px] font-semibold text-[#181818]'>
                  Egirls
                </span>
              </div>
              <div className='lg:flex lg:items-center lg:space-x-4'>
                <div className='hidden lg:flex lg:items-center'>
                  <button>
                    <span className='text-[16px] font-[500] text-[#5848BC] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
                      For users
                    </span>
                  </button>
                </div>
                <div className='hidden lg:flex lg:items-center'>
                  <button>
                    <Link href='/creator-landing'>
                      <span className='text-[16px] font-[500] text-[#181818] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
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
                    <span className='text-[16px] font-[500] text-[#181818] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
                      Contact
                    </span>
                  </Link>
                </button>
              </div>
              <div className='w-[158px] justify-center rounded-[12px] bg-[#5848BC] px-[18px] py-[10px] xs:hidden sm:hidden md:flex md:items-center lg:flex lg:items-center'>
                <button>
                  <span className='text-[16px] font-[500] text-white'>
                    Get beta access
                  </span>
                </button>
              </div>
              <div
                className='xs:flex xs:items-center sm:flex sm:items-center md:flex md:items-center lg:flex lg:items-center'
                onClick={setSideNav()}
              >
                <Bars2Icon className='h-[20px] w-[20px] fill-[black] lg:hidden'></Bars2Icon>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Side NavBar */}
      <nav
        className={`fixed top-0 z-10 h-full w-full bg-[black] p-20 duration-300 ease-in lg:hidden ${
          hiddenSideDiv ? 'hidden' : 'duration-300 ease-in'
        }`}
      >
        <div>
          <div className='flex items-center justify-between'>
            <div className=''>
              <span className='text-[52px] font-semibold text-[white]'>
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
          <div className='pt-20 space-y-20'>
            <div className=''>
              <button>
                <Link href='/'>
                  <span className='text-[24px] font-[500] text-[white] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
                    For users
                  </span>
                </Link>
              </button>
            </div>
            <div className=''>
              <button>
                <Link href='/creator-landing'>
                  <span className='text-[24px] font-[500] text-[white] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
                    For creators
                  </span>
                </Link>
              </button>
            </div>
            <div className=''>
              <button>
                <span className='text-[24px] font-[500] text-[#5848BC] underline underline-offset-8 hover:decoration-[white]'>
                  Contact
                </span>
              </button>
            </div>
          </div>

          <div className='absolute flex justify-center inset-x-10 bottom-16'>
            <div className='flex w-full justify-center rounded-[12px] bg-[#5848BC] px-[18px] py-[10px] lg:hidden'>
              <button>
                <span className='text-[32px] font-[500] text-white'>
                  Get beta access
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className='bg-[#F6F6F6] px-24 lg:px-[100px]'>
        <div className='py-20'>
          <div className='gap-[50px] sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:max-xl:grid md:max-lg:grid-cols-1 lg:grid lg:grid-cols-2'>
            <div className=''>
              <div className='flex w-fit items-center justify-start rounded-[8px] bg-[#EAE8FD] px-6 py-2'>
                <StarIcon className='h-[20px] w-[20px] fill-[#5848BC] pr-[8px]'></StarIcon>
                <div className='flex '>
                  <span className='text-[16px] font-[500] text-[#5848BC]'>
                    contact us
                  </span>
                </div>
              </div>
              <div className='pt-12'>
                <span className='text-[56px] font-[600] text-black'>
                  LET'S START A
                </span>
                <div>
                  <span className='text-[56px] font-[500] italic text-black'>
                    CONVERSATION!
                  </span>
                </div>
              </div>
              <div className='pt-12 w-fit'>
                <span className='text-[18px] font-[400] text-black'>
                  Are you interested in becoming our partner or simply want to
                  share your thoughts about our work? Please feel free to
                  contact us using the form on the right. We’ll get back to you
                  as soon as possible!
                </span>
              </div>
            </div>
            <div className='min-[200px]:pt-10'>
              <div className='w-full'>
                <form className='px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md'>
                  <div className='flex justify-around mb-4 space-x-4'>
                    <div className='w-1/2'>
                      <label className='mb-2 text-[13px] font-[500] text-[#646668]'>
                        Name
                      </label>
                      <input
                        className='w-full	rounded border-none bg-[#F6F6F6] px-3 py-2 text-gray-700'
                        id='username'
                        type='text'
                        placeholder='Your name'
                      />
                    </div>
                    <div className='w-1/2'>
                      <label className='mb-2 text-[13px] font-[500] text-[#646668]'>
                        Email
                      </label>
                      <input
                        className='w-full	rounded border-none bg-[#F6F6F6] px-3 py-2 text-gray-700'
                        id='email'
                        type='text'
                        placeholder='example@mail.com'
                      />
                    </div>
                  </div>
                  <div className='mb-6'>
                    <label className='mb-2 text-[13px] font-[500] text-[#646668]'>
                      Message
                    </label>
                    <input
                      className='mb-3 h-[118px]	w-full rounded border-none bg-[#F6F6F6] px-3 py-2 text-gray-700'
                      id='message'
                      type='text'
                      placeholder='Your message'
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <button className='w-full rounded-[12px] bg-[#5848BC] px-[18px] py-[10px]'>
                      <span className='text-[16px] font-[500] text-white'>
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
      <div className='bg-[#000000] px-24 lg:px-[100px]'>
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
              <div className='flex justify-center pt-10 space-x-3 text-center lg:justify-start lg:text-start'>
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
                  width={550}
                  height={500}
                  src={'/assets/footerContent.webp'}
                  alt={'Profile'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='py-10 space-y-10 lg:flex lg:justify-between'>
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
      </div>
    </div>
  );
}

CreatorLanding.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>
    <LandingLayout>{page}</LandingLayout>
  </AuthLayout>
);
