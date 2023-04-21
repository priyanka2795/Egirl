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
import { StarIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Nav from '@components/landing-creator/Nav';
import Header from '@components/landing-creator/Header';
import DiscordIcon from '@components/landing-user/assets/Footer/DiscordIcon';
import TwitterIcon from '@components/landing-user/assets/Footer/TwitterIcon';
import InstaIcon from '@components/landing-user/assets/Footer/InstaIcon';
import RedditIcon from '@components/landing-user/assets/Footer/RedditIcon';
import ContactUs from '@components/landing-creator/ContactUs';
import HowItWorks from '@components/landing-creator/HowItWorks';

export function LandingLayout({ children }: LayoutProps): JSX.Element {
  return <div className='w-full bg-white'>{children}</div>;
}

export default function CreatorLanding(): JSX.Element {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();
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
      {/*       
      <div className='grid-row-2 grid grid-cols-none justify-items-center gap-8 bg-[#F6F6F6] px-24 py-10 lg:grid-cols-4 lg:grid-rows-none lg:px-[100px]'>
        <div className='lg:col-span-3'>
          <div className='border-l-2'>
            <div className='pl-16'>
              <span className='text-[48px] font-[400] text-[black] lg:text-[24px]'>
                It’s a new era, and we’re leading the charge. Don’t miss your
                chance to create an established brand in the new creator
                economy.
              </span>
            </div>
          </div>
        </div>
        <div className='lg:cols-span-1 w-full'>
          <div className='flex h-[56px] w-full items-center justify-center rounded-lg border-[2px] p-[12px] lg:w-[144px]'>
            <div className='text-[36px] font-[600] text-[black] lg:text-[18px]'>
              <Link href='/contact-us'>
                <span> Contact Us </span>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* How it works */}
      <HowItWorks />
      {/* <div className='bg-[#FFFFFF] px-24 lg:px-[100px]'>
        <div className='flex justify-center pt-[100px] pb-[80px]'>
          <div className='space-x-2'>
            <span className='text-[96px] font-[500] text-[black] lg:text-[48px]'>
              How it
            </span>
            <span className='text-[96px] font-[500] italic text-[black] lg:text-[48px]'>
              works?
            </span>
          </div>
        </div>

        <div className=''>
          <div className='grid w-full grid-cols-none grid-rows-2 items-center justify-items-center py-2 lg:grid-cols-2 lg:grid-rows-none lg:px-[60px]'>
            <div className='col-span-1'>
              <div className=''>
                <div className='flex h-[100px] w-[190px] items-center justify-center rounded-lg bg-[#EAE8FD] lg:h-[50px] lg:w-[95px]'>
                  <span className='text-[36px] font-[500] text-[#7362C6] lg:text-[18px]'>
                    STEP 1
                  </span>
                </div>
                <div className='pt-[32px]'>
                  <span className='text-[68px] font-[600] text-[black] lg:text-[34px]'>
                    Make an Egirl
                  </span>
                </div>
                <div>
                  <div>
                    <div className='flex items-center space-x-2 py-[12px] pt-[32px]'>
                      <StarIcon className='h-[48px] w-[48px] fill-[#000000] pr-[8px] lg:h-[24px] lg:w-[24px]'></StarIcon>
                      <div className='flex'>
                        <span className='text-[48px] font-[400] text-[black] lg:text-[24px]'>
                          Pick a name
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2 py-[12px] pt-[16px]'>
                      <StarIcon className='h-[48px] w-[48px] fill-[#000000] pr-[8px] lg:h-[24px] lg:w-[24px]'></StarIcon>
                      <div className='flex'>
                        <span className='text-[48px] font-[400] text-[black] lg:text-[24px]'>
                          Give her a unique personality
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2 py-[12px] pt-[16px]'>
                      <StarIcon className='h-[48px] w-[48px] fill-[#000000] pr-[8px] lg:h-[24px] lg:w-[24px]'></StarIcon>
                      <div className='flex'>
                        <span className='text-[48px] font-[400] text-[black] lg:text-[24px]'>
                          Design her looks and voice
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row-start-1 lg:col-start-2'>
              <div className='lg:hidden'>
                <NextImage
                  width={1000}
                  height={1000}
                  src={'/assets/svgImages/howItWorksStep1_1.svg'}
                  alt={'howItWorksStep1 illus'}
                  imgClassName=''
                />
              </div>
              <div className='hidden lg:block'>
                <NextImage
                  width={700}
                  height={700}
                  src={'/assets/svgImages/howItWorksStep1_1.svg'}
                  alt={'howItWorksStep1 illus'}
                  imgClassName='overflow-hidden'
                />
              </div>
            </div>
          </div>

          <div className='grid w-full grid-cols-none grid-rows-2 items-center justify-items-center py-2 lg:grid-cols-2 lg:grid-rows-none lg:px-[60px]'>
            <div className=''>
              <div className='lg:hidden'>
                <NextImage
                  width={1000}
                  height={1000}
                  src={'/assets/svgImages/howItWorksStep2_1.svg'}
                  alt={'howItWorksStep1 illus'}
                  imgClassName=''
                />
              </div>
              <div className='hidden lg:block'>
                <NextImage
                  width={700}
                  height={700}
                  src={'/assets/svgImages/howItWorksStep2_1.svg'}
                  alt={'howItWorksStep1 illus'}
                  imgClassName='overflow-hidden'
                />
              </div>
            </div>
            <div className='col-span-1'>
              <div className=''>
                <div className='flex h-[100px] w-[190px] items-center justify-center rounded-lg bg-[#EAE8FD] lg:h-[50px] lg:w-[95px]'>
                  <span className='text-[36px] font-[500] text-[#7362C6] lg:text-[18px]'>
                    STEP 2
                  </span>
                </div>
                <div className='lg"pt-[32px]'>
                  <span className='text-[68px] font-[600] text-[black] lg:text-[34px]'>
                    Customize Your Profile
                  </span>
                </div>
                <div>
                  <div>
                    <div className='flex items-center space-x-2 py-[12px] pt-[32px]'>
                      <StarIcon className='h-[48px] w-[48px] fill-[#000000] pr-[8px] lg:h-[24px] lg:w-[24px]'></StarIcon>
                      <div className='flex'>
                        <span className='text-[48px] font-[400] text-[black] lg:text-[24px]'>
                          Write an eye-catching bio
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2 py-[12px] pt-[16px]'>
                      <StarIcon className='h-[48px] w-[48px] fill-[#000000] pr-[8px] lg:h-[24px] lg:w-[24px]'></StarIcon>
                      <div className='flex'>
                        <span className='text-[48px] font-[400] text-[black] lg:text-[24px]'>
                          Select subscription tiers & pricing
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2 py-[12px] pt-[16px]'>
                      <StarIcon className='h-[48px] w-[48px] fill-[#000000] pr-[8px] lg:h-[24px] lg:w-[24px]'></StarIcon>
                      <div className='flex'>
                        <span className='text-[48px] font-[400] text-[black] lg:text-[24px]'>
                          Choose what your subs can request
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid w-full grid-cols-none grid-rows-2 items-center justify-items-center py-2 lg:grid-cols-2 lg:grid-rows-none lg:px-[60px]'>
            <div>
              <div className=''>
                <div className='flex h-[100px] w-[190px] items-center justify-center rounded-lg bg-[#EAE8FD] lg:h-[50px] lg:w-[95px]'>
                  <span className='text-[36px] font-[500] text-[#7362C6] lg:text-[18px]'>
                    STEP 3
                  </span>
                </div>
                <div className='lg:pt-[32px]'>
                  <span className='text-[64px] font-[600] text-[black] lg:text-[34px]'>
                    Grow Your Audience
                  </span>
                </div>
                <div>
                  <div>
                    <div className='flex items-center space-x-2 py-[12px] pt-[32px]'>
                      <StarIcon className='h-[48px] w-[48px] fill-[#000000] pr-[8px] lg:h-[24px] lg:w-[24px]'></StarIcon>
                      <div className='flex'>
                        <span className='text-[48px] font-[400] text-[black] lg:text-[24px]'>
                          Create spicy content
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2 py-[12px] pt-[16px]'>
                      <StarIcon className='h-[48px] w-[48px] fill-[#000000] pr-[8px] lg:h-[24px] lg:w-[24px]'></StarIcon>
                      <div className='flex'>
                        <span className='text-[48px] font-[400] text-[black] lg:text-[24px]'>
                          Tell followers about your Egirl
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2 py-[12px] pt-[16px]'>
                      <StarIcon className='h-[48px] w-[48px] fill-[#000000] pr-[8px] lg:h-[24px] lg:w-[24px]'></StarIcon>
                      <div className='flex'>
                        <span className='text-[48px] font-[400] text-[black] lg:text-[24px]'>
                          Post updates & stay active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='oveflow-hidden row-start-1 lg:col-start-2'>
              <div className='lg:hidden'>
                <NextImage
                  width={1000}
                  height={1000}
                  src={'/assets/svgImages/howItWorksStep3_1.svg'}
                  alt={'howItWorksStep1 illus'}
                  imgClassName=''
                />
              </div>
              <div className='hidden lg:block'>
                <NextImage
                  width={700}
                  height={700}
                  src={'/assets/svgImages/howItWorksStep3_1.svg'}
                  alt={'howItWorksStep1 illus'}
                  imgClassName='overflow-hidden'
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Creator tools */}
      <div className='bg-[#FFFFFF] px-24 lg:px-[100px]'>
        <div className=''>
          <div className='w-full grid-cols-none grid-rows-2 items-center justify-items-center lg:grid lg:grid-cols-2 lg:grid-rows-none'>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className=''>
                  <span className='text-[36px] font-[500] text-[#949698] lg:text-[18px]'>
                    CREATOR TOOLS
                  </span>
                </div>
              </div>
              <div className='flex justify-center space-x-3 lg:justify-start'>
                <span className='text-[96px] font-[600] text-[#000000] lg:text-[48px]'>
                  Design without
                </span>
                <span className='mr-[2px] text-[96px] font-[400] italic text-[#000000] lg:text-[48px]'>
                  limits
                </span>
              </div>
              <div className=''>
                <div className='flex justify-start'>
                  <div className='mt-[64px] flex items-center space-x-[16px] px-[8px] py-[12px]'>
                    <button onClick={showSection1(section1)}>
                      <div className=''>
                        {section1 === true ? (
                          <div>
                            <div className='lg:hidden'>
                              <NextImage
                                width={120}
                                height={120}
                                src={'/assets/creatorLandingIcons/model.png'}
                                alt={'modellogo'}
                              />
                            </div>
                            <div className='hidden lg:block'>
                              <NextImage
                                width={60}
                                height={60}
                                src={'/assets/creatorLandingIcons/model.png'}
                                alt={'modellogo'}
                              />
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className='lg:hidden'>
                              <NextImage
                                width={120}
                                height={120}
                                src={
                                  '/assets/creatorLandingIcons/modelBlank.png'
                                }
                                alt={'modellogo'}
                              />
                            </div>
                            <div className='hidden lg:block'>
                              <NextImage
                                width={60}
                                height={60}
                                src={
                                  '/assets/creatorLandingIcons/modelBlank.png'
                                }
                                alt={'modellogo'}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                    <div>
                      <div>
                        <span className='text-[48px] font-[500] text-[#000000] lg:text-[24px]'>
                          Use Existing AI Models
                        </span>
                      </div>
                      {section1 && (
                        <div className='w-[812px] space-x-1 lg:w-[406px]'>
                          <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                            Use platform or community models to start generating
                            Egirl content at the click of a button.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='flex justify-start'>
                  <div className='flex items-center space-x-[16px] px-[8px] py-[12px]'>
                    <button onClick={showSection2(section2)}>
                      <div className=''>
                        {section2 === true ? (
                          <div>
                            <div className='lg:hidden'>
                              <NextImage
                                width={120}
                                height={120}
                                src={'/assets/creatorLandingIcons/pen.png'}
                                alt={'penlogo'}
                              />
                            </div>
                            <div className='hidden lg:block'>
                              <NextImage
                                width={60}
                                height={60}
                                src={'/assets/creatorLandingIcons/pen.png'}
                                alt={'penlogo'}
                              />
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className='lg:hidden'>
                              <NextImage
                                width={120}
                                height={120}
                                src={'/assets/creatorLandingIcons/penBlank.png'}
                                alt={'penlogo'}
                              />
                            </div>
                            <div className='hidden lg:block'>
                              <NextImage
                                width={60}
                                height={60}
                                src={'/assets/creatorLandingIcons/penBlank.png'}
                                alt={'penlogo'}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                    <div>
                      <div>
                        <span className='text-[48px] font-[500] text-[#000000] lg:text-[24px]'>
                          Create your Own AI Models
                        </span>
                      </div>
                      {section2 && (
                        <div className='w-[812px] lg:w-[406px]'>
                          <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                            Build your own unique AI models. With just a few
                            clicks, you can create and adjust prototypes.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='flex justify-start'>
                  <div className='flex items-center space-x-[16px] px-[8px] py-[12px]'>
                    <button onClick={showSection3(section3)}>
                      <div className=''>
                        {section3 === true ? (
                          <div>
                            <div className='lg:hidden'>
                              <NextImage
                                width={120}
                                height={120}
                                src={'/assets/creatorLandingIcons/rocket.png'}
                                alt={'rocketlogo'}
                              />
                            </div>
                            <div className='hidden lg:block'>
                              <NextImage
                                width={60}
                                height={60}
                                src={'/assets/creatorLandingIcons/rocket.png'}
                                alt={'rocketlogo'}
                              />
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className='lg:hidden'>
                              <NextImage
                                width={120}
                                height={120}
                                src={
                                  '/assets/creatorLandingIcons/rocketBlank.png'
                                }
                                alt={'rocketlogo'}
                              />
                            </div>
                            <div className='hidden lg:block'>
                              <NextImage
                                width={60}
                                height={60}
                                src={
                                  '/assets/creatorLandingIcons/rocketBlank.png'
                                }
                                alt={'rocketlogo'}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                    <div>
                      <div>
                        <span className='text-[48px] font-[500] text-[#000000] lg:text-[24px]'>
                          Unlimited Growth Potential
                        </span>
                      </div>
                      {section3 && (
                        <div className='w-[812px] lg:w-[406px]'>
                          <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                            Easy to get started. Those who seek to master their
                            craft have unlimited potential for growth.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-[800px] lg:h-[700px]'>
              {section1 && (
                <div>
                  <div className='oveflow-hidden flex justify-center'>
                    <div className='lg:hidden'>
                      <NextImage
                        width={812}
                        height={890}
                        src={'/assets/svgImages/creatorTools1.svg'}
                        alt={'creatorTools1 illus'}
                        imgClassName='scale-75 overflow-hidden'
                      />
                    </div>
                    <div className='hidden lg:block'>
                      <NextImage
                        width={612}
                        height={690}
                        src={'/assets/svgImages/creatorTools1.svg'}
                        alt={'creatorTools1 illus'}
                        imgClassName='scale-75 overflow-hidden'
                      />
                    </div>
                  </div>
                </div>
              )}
              {section2 && (
                <div className='oveflow-hidden flex justify-center'>
                  <div className='lg:hidden'>
                    <NextImage
                      width={800}
                      height={790}
                      src={'/assets/svgImages/creatorTools2.svg'}
                      alt={'creatorTools2 illus'}
                      imgClassName='overflow-hidden'
                    />
                  </div>
                  <div className='hidden lg:block'>
                    <NextImage
                      width={700}
                      height={690}
                      src={'/assets/svgImages/creatorTools2.svg'}
                      alt={'creatorTools2 illus'}
                      imgClassName='overflow-hidden'
                    />
                  </div>
                </div>
              )}
              {section3 && (
                <div className='oveflow-hidden flex justify-center'>
                  <div className='lg:hidden'>
                    <NextImage
                      width={800}
                      height={715}
                      src={'/assets/svgImages/creatorTools3.svg'}
                      alt={'creatorTools3 illus'}
                    />
                  </div>
                  <div className='hidden lg:block'>
                    <NextImage
                      width={700}
                      height={615}
                      src={'/assets/svgImages/creatorTools3.svg'}
                      alt={'creatorTools3 illus'}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Get Paid */}
      <div className='bg-[#F7F7F7] px-24 lg:px-[100px]'>
        <div className='py-10'>
          <div className=''>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className=''>
                  <span className='text-[36px] font-[500] text-[#949698] lg:text-[18px]'>
                    GET PAID
                  </span>
                </div>
              </div>
              <div className='flex justify-center space-x-3 text-center lg:justify-start'>
                <span className='text-[96px] font-[600] text-[#000000] lg:text-[48px]'>
                  Turn your passion into
                  <span className='ml-2 font-[400] italic'>profit</span>
                </span>
              </div>
            </div>
            <div className='mt-[48px] mb-[80px]'>
              <div className='items-center justify-between space-y-8 lg:flex lg:space-x-2 lg:space-y-0'>
                <div className='flex justify-center'>
                  <div className='h-[400px] rounded-lg border bg-[#FFFFFF] lg:h-[266px] lg:w-[397px]'>
                    <div className='mt-[40px] ml-[24px] mr-[24px]'>
                      <StarIcon className='h-[64px] w-[64px] fill-[#5848BC] pr-[8px] lg:h-[32px] lg:w-[32px]'></StarIcon>
                      <div className='mt-[24px]'>
                        <span className='text-[48px] font-[600] text-[#000000] lg:text-[24px]'>
                          Subscriptions & PPV
                        </span>
                      </div>
                      <div>
                        <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                          Earn monthly income from fans via subscriptions.
                          Pay-per-view allows you to earn fees on ultra
                          exclusive content.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex justify-center'>
                  <div className='h-[400px] rounded-lg border bg-[#FFFFFF] lg:h-[266px] lg:w-[397px]'>
                    <div className='mt-[40px] ml-[24px] mr-[24px]'>
                      <StarIcon className='h-[64px] w-[64px] fill-[#5848BC] pr-[8px] lg:h-[32px] lg:w-[32px]'></StarIcon>
                      <div className='mt-[24px]'>
                        <span className='text-[48px] font-[600] text-[#000000] lg:text-[24px]'>
                          Chatbots
                        </span>
                      </div>
                      <div>
                        <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                          Gain a percentage of profit generated each time users
                          chat with your Egirl, and on any requests made to your
                          Egirl.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex justify-center'>
                  <div className='h-[400px] rounded-lg border bg-[#FFFFFF] lg:h-[266px] lg:w-[397px]'>
                    <div className='mt-[40px] ml-[24px] mr-[24px]'>
                      <StarIcon className='h-[64px] w-[64px] fill-[#5848BC] pr-[8px] lg:h-[32px] lg:w-[32px]'></StarIcon>
                      <div className='mt-[24px]'>
                        <span className='text-[48px] font-[600] text-[#000000] lg:text-[24px]'>
                          AI Models
                        </span>
                      </div>
                      <div>
                        <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                          Create your own unique AI models and list them on our
                          creator marketplace. Earn fees on every image
                          generation.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='w-full bg-[#000000] px-24 lg:px-[100px]'>
        <div className='py-20'>
          <div className='gap-[100px] sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:max-xl:grid md:max-lg:grid-cols-1 lg:grid lg:grid-cols-2'>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className='flex h-[80px] w-[270px] items-center justify-center rounded-[8px] bg-[#313131] px-[8px] py-[12px] lg:h-[40px] lg:w-[135px]'>
                  <StarIcon className='h-[40px] w-[40px] fill-[#5848BC] pr-[8px] lg:h-[20px] lg:w-[20px]'></StarIcon>
                  <div className='flex'>
                    <span className='text-[32px] font-[500] text-[white] lg:text-[16px]'>
                      beta access
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex justify-center space-x-3 pt-10 text-center lg:justify-start lg:text-start'>
                <span className='text-[100px] font-[600] text-white lg:text-[56px]'>
                  More than 3000 people have
                  <span className='mx-6 font-[500] italic lg:mx-4'>joined</span>
                  the waitlist!
                </span>
              </div>
              <div className='flex justify-center pt-[48px] lg:justify-start'>
                <div className='flex w-[800px] justify-center lg:w-[515px]'>
                  <input
                    type='email'
                    className='form-input rounded-l-[12px] border-transparent bg-[#313131] px-4 py-3 text-[36px] text-[#949698] drop-shadow lg:w-[395px] lg:text-[24px]'
                    placeholder='Enter your email'
                  />
                  <div className='flex w-[158px] items-center justify-center rounded-r-[12px] bg-[#5848BC] px-[24px] py-[16px] drop-shadow'>
                    <span className='text-[36px] lg:text-[24px]'>Join</span>
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
            <span className='text-[64px] font-semibold text-white lg:text-[32px]'>
              Egirls
            </span>
          </div>
          <div className='space-y-2'>
            <div>
              <span className='text-[28px] font-[500] text-[#646668] lg:text-[14px]'>
                CHAT WITH US
              </span>
            </div>
            <div>
              <span className='text-[32px] font-[500] text-[white] lg:text-[16px]'>
                business@egirls.ai
              </span>
            </div>
          </div>
          <div>
            <span className='text-[28px] font-[500] text-[#646668] lg:text-[14px]'>
              FOLLOW US
            </span>
            <div className='mt-[8px] flex items-center justify-items-center space-x-[4px] p-1 lg:grid lg:grid-cols-5'>
              <div className='p-1'>
                <NextImage
                  width={20}
                  height={22}
                  src={'/assets/homeIcons/instagramIcon.png'}
                  alt={'Profile'}
                />
              </div>
              <div className='p-1'>
                <NextImage
                  width={20}
                  height={22}
                  src={'/assets/homeIcons/tiktokIcon.png'}
                  alt={'Profile'}
                />
              </div>
              <div className='p-1'>
                <NextImage
                  width={22}
                  height={22}
                  src={'/assets/homeIcons/redditIcon.png'}
                  alt={'Profile'}
                />
              </div>
              <div className='p-1'>
                <NextImage
                  width={26}
                  height={22}
                  src={'/assets/homeIcons/discordIcon.png'}
                  alt={'Profile'}
                />
              </div>
              <div className='p-1'>
                <NextImage
                  width={26}
                  height={22}
                  src={'/assets/homeIcons/twitterIcon.png'}
                  alt={'Profile'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mb-[15px] border-t-2 border-[#646668]'>
          <div className='flex justify-between py-[25px] text-[28px] lg:text-[14px]'>
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
