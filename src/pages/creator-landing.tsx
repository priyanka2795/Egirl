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

export function LandingLayout({ children }: LayoutProps): JSX.Element {
  return (
    <div className='w-full bg-white'>
      {children}
    </div>
  );
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
      <nav className='bg-[black] lg:px-[100px] px-24 fixed top-0 z-10 w-full'>
        <div className='lg:py-6 py-3'>
          <div className='flex justify-between items-center'>
            <div className='lg:flex'>
                <div className='pr-[40px]'>
                  <span className='text-[white] text-[64px] lg:text-[32px] font-semibold'>
                    Egirls
                  </span>
                </div>
                <div className='lg:flex lg:space-x-4 lg:items-center'>
                  <div className='hidden lg:flex lg:items-center'>
                    <Link href='/'>
                        <span className='text-[white] text-[32px] lg:text-[16px] font-[500] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
                          For users
                        </span>
                      </Link>
                  </div>
                  <div className='hidden lg:flex lg:items-center'>
                    <button>
                      <Link href='/creator-landing'>
                        <span className='text-[32px] lg:text-[16px] font-[500] text-[#5848BC]  underline decoration-[#5848BC] underline-offset-8'>
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
                    <span className='text-[white] text-[32px] lg:text-[16px] font-[500] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
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
                <Bars2Icon className='fill-[white] h-[40px] w-[40px] lg:h-[20px] lg:w-[20px] lg:hidden' ></Bars2Icon>
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
              <button>
                <Link href='/'>
                  <span className='text-[white] xs:text-[104px] sm:text-[104px] text-[52px] font-semibold'>
                    Egirls
                  </span>
                </Link> 
              </button>
            </div>
            <div>
              <XMarkIcon className='fill-[white] h-16 w-16' onClick={setSideNav()}></XMarkIcon>
            </div>
          </div>
          <div className='pt-20 space-y-20'>
            <div className=''>
              <button>
                <Link href='/'>
                  <span className='text-[white] xs:text-[48px] sm:text-[48px] text-[24px] font-[500] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
                    For users
                  </span>
                </Link>
              </button>
            </div>
            <div className=''>
              <button>
                <Link href='/creator-landing'>
                  <span className='xs:text-[48px] sm:text-[48px] text-[24px] font-[500] text-[#5848BC] underline hover:decoration-[#5848BC] underline-offset-8'>
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
                  Join Discord
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
                <XMarkIcon className='fill-[white] h-20 w-20 lg:h-10 lg:w-10' onClick={setBetaAccess()}></XMarkIcon>
              </button>
            </div>
          </div>
          <div className='h-full flex items-center'>
            <div className='w-full p-2'>
              <div className='flex justify-center p-2'>
                <div className='flex justify-center items-center bg-[#313131] rounded-[8px] lg:h-[40px] lg:w-[135px] p-[24px] lg:px-[8px] lg:py-[12px]'>
                  <StarIcon className='fill-[#5848BC] h-[40px] w-[40px] lg:h-[20px] lg:w-[20px] pr-[8px]'></StarIcon>
                  <div className='flex'>
                    <span className='text-[white] text-[42px] lg:text-[16px] font-[500]'>
                      Join us
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex justify-center p-2'>
                <div className='text-[white] text-[120px] lg:text-[64px]  text-center font-[600]'>
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
                <div className='text-[#ffffff]/[0.44] text-[36px] lg:text-[18px] font-[400]'>
                  <span>
                    Join our Discord community and introduce yourself
                  </span>
                </div>
              </div>
              <div className='flex justify-center p-16'>
                <div className='flex items-center justify-center px-[24px] py-[16px] bg-[#5848BC] rounded-[12px] drop-shadow'>
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
      <div className='bg-[#000000] lg:px-[100px] px-24 mt-[96px]'>
        <div className='py-20'>
          <div className=''>
            <div className='lg:hidden'>
                <EGirlIcon className='overflow-visible'/>
            </div>
            <div className='lg:hidden flex justify-end'>
              <RoundedEgirlIcon />
            </div>
            <div className='flex justify-center lg:justify-between items-center'>
              <div className='hidden lg:block'>
                <EGirlIcon className='overflow-visible'/>
              </div>
              <div className='flex items-center bg-[#313131] rounded-[8px] h-[80px] w-[320px] lg:h-[40px] lg:w-[175px] px-[8px] py-[12px] space-x-2'>
                <StarIcon className='fill-[#5848BC] h-[40px] w-[40px] lg:h-[20px] lg:w-[20px] pr-[8px]'></StarIcon>
                <div className='flex'>
                  <span className='text-[white] text-[30px] md:text-[24px] lg:text-[15px] font-[500]'>
                    become a creator
                  </span>
                </div>
              </div>
              <div className='hidden lg:w-[100px] lg:block'></div>
            </div>
            <div className='flex justify-center lg:justify-between items-center pt-[24px]'>
              <div className='hidden lg:block lg:w-[80px]'></div>
              <div className=''>
                <div className='flex-none justify-center items-center space-x-5 text-center'>
                  <div className='flex space-x-3 items-center justify-center'>
                    <span className='uppercase text-[white] text-[112px] lg:text-[56px] font-[600]'>
                      Let 
                    </span>
                    <div className='flex justify-center'>
                      <CreatorRoundIcon1 className='l'/>
                    </div>
                    <span className='uppercase text-[white] text-[112px] lg:text-[56px] font-[600]'>
                      Your
                    </span>
                  </div>
                  <div className='flex space-x-3 items-center justify-center'>
                    <span className='uppercase italic text-[white] text-[112px] lg:text-[56px] font-[600]'>
                      Imagination 
                    </span>
                    <div className='flex justify-center'>
                    <NextImage
                      width={40}
                      height={40}
                      src={'/assets/svgImages/roundCreatorIcon.svg'}
                      alt={'round creator icon'}
                    />
                    </div>
                    <span className='uppercase text-[white] text-[112px] lg:text-[56px] font-[600]'>
                      Run
                    </span>
                  </div>
                  <div>
                    <span className='uppercase text-[white] text-[112px] lg:text-[56px] font-[600]'>
                      Wild
                    </span>
                  </div>
                </div>
              </div>
              <div className='hidden lg:block'>
                <RoundedEgirlIcon />
              </div>
            </div>
          </div>
          <div className='pt-[30px]'>
            <div className='hidden lg:block'>
              <RoundedCreatingTagIcon />
            </div>
            <div className='flex justify-center'>
              <span className='text-[white] text-[36px] lg:text-[18px] font-[400]'>
                Join our waitlist for beta access, 3000 people have joined so far!
              </span>
            </div>
            <div className='pt-[20px] flex justify-center'>
              <div className='flex w-[515px]'>
                <input type="email" className="bg-[#313131] form-input text-[36px] lg:text-[18px] px-4 py-3 rounded-l-[12px] border-transparent drop-shadow text-[#949698] w-[395px]" placeholder='Enter your email'/>
                <div className='flex items-center justify-center w-[158px] px-[24px] py-[16px] bg-[#5848BC] rounded-r-[12px] drop-shadow'>
                  <span className='lg:text-[18px] text-[36px]'>
                    Join
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className='lg:hidden mt-10'>
                <RoundedCreatingTagIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Us */}
      <div className='grid grid-row-2 gap-8 grid-cols-none lg:grid-cols-4 lg:grid-rows-none justify-items-center bg-[#F6F6F6] lg:px-[100px] px-24 py-10'>
        <div className='lg:col-span-3'>
          <div className='border-l-2'>
            <div className='pl-16'>
              <span className='text-[black] text-[48px] lg:text-[24px] font-[400]'>
                It’s a new era, and we’re leading the charge. Don’t miss your chance to create an established brand in the new creator economy.
              </span>
            </div>
          </div>
        </div>
        <div className='lg:cols-span-1 w-full'>
          <div className='flex justify-center items-center border-[2px] w-full lg:w-[144px] h-[56px] p-[12px] rounded-lg'>
            <div className='text-[black] text-[36px] lg:text-[18px] font-[600]'>
              <Link href='/contact-us'>
                <span> Contact Us </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className='bg-[#FFFFFF] lg:px-[100px] px-24'>
        <div className='flex justify-center pt-[100px] pb-[80px]'>
          <div className='space-x-2'>
            <span className='text-[black] text-[96px] lg:text-[48px] font-[500]'>
              How it 
            </span>
            <span className='text-[black] text-[96px] lg:text-[48px] font-[500] italic'>
              works?
            </span>
          </div>
        </div>
        
        <div className=''>
          <div className='w-full lg:px-[60px] grid lg:grid-cols-2 lg:grid-rows-none grid-rows-2 grid-cols-none py-2 justify-items-center items-center'>
            <div className='col-span-1'>
              <div className=''>
                <div className='flex justify-center items-center bg-[#EAE8FD] w-[190px] h-[100px] lg:w-[95px] lg:h-[50px] rounded-lg'>
                  <span className='text-[#7362C6] text-[36px] lg:text-[18px] font-[500]'>
                    STEP 1
                  </span>
                </div>
                <div className='pt-[32px]'>
                  <span className='text-[black] text-[68px] lg:text-[34px] font-[600]'>
                    Make an Egirl
                  </span>
                </div>
                <div>
                  <div>
                    <div className='flex items-center pt-[32px] py-[12px] space-x-2'>
                        <StarIcon className='fill-[#000000] h-[48px] w-[48px] lg:h-[24px] lg:w-[24px] pr-[8px]'></StarIcon>
                        <div className='flex'>
                          <span className='text-[black] text-[48px] lg:text-[24px] font-[400]'>
                            Pick a name
                          </span>
                        </div>
                    </div>
                    <div className='flex items-center pt-[16px] py-[12px] space-x-2'>
                        <StarIcon className='fill-[#000000] h-[48px] w-[48px] lg:h-[24px] lg:w-[24px] pr-[8px]'></StarIcon>
                        <div className='flex'>
                          <span className='text-[black] text-[48px] lg:text-[24px] font-[400]'>
                            Give her a unique personality
                          </span>
                        </div>
                    </div>
                    <div className='flex items-center pt-[16px] py-[12px] space-x-2'>
                        <StarIcon className='fill-[#000000] h-[48px] w-[48px] lg:h-[24px] lg:w-[24px] pr-[8px]'></StarIcon>
                        <div className='flex'>
                          <span className='text-[black] text-[48px] lg:text-[24px] font-[400]'>
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

          <div className='w-full lg:px-[60px] grid lg:grid-cols-2 lg:grid-rows-none grid-rows-2 grid-cols-none py-2 justify-items-center items-center'>
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
                <div className='flex justify-center items-center bg-[#EAE8FD] w-[190px] h-[100px] lg:w-[95px] lg:h-[50px] rounded-lg'>
                  <span className='text-[#7362C6] text-[36px] lg:text-[18px] font-[500]'>
                    STEP 2
                  </span>
                </div>
                <div className='lg"pt-[32px]'>
                  <span className='text-[black] text-[68px] lg:text-[34px] font-[600]'>
                    Customize Your Profile
                  </span>
                </div>
                <div>
                  <div>
                    <div className='flex items-center pt-[32px] py-[12px] space-x-2'>
                        <StarIcon className='fill-[#000000] h-[48px] w-[48px] lg:h-[24px] lg:w-[24px] pr-[8px]'></StarIcon>
                        <div className='flex'>
                          <span className='text-[black] text-[48px] lg:text-[24px] font-[400]'>
                            Write an eye-catching bio
                          </span>
                        </div>
                    </div>
                    <div className='flex items-center pt-[16px] py-[12px] space-x-2'>
                        <StarIcon className='fill-[#000000] h-[48px] w-[48px] lg:h-[24px] lg:w-[24px] pr-[8px]'></StarIcon>
                        <div className='flex'>
                          <span className='text-[black] text-[48px] lg:text-[24px] font-[400]'>
                            Select subscription tiers & pricing
                          </span>
                        </div>
                    </div>
                    <div className='flex items-center pt-[16px] py-[12px] space-x-2'>
                        <StarIcon className='fill-[#000000] h-[48px] w-[48px] lg:h-[24px] lg:w-[24px] pr-[8px]'></StarIcon>
                        <div className='flex'>
                          <span className='text-[black] text-[48px] lg:text-[24px] font-[400]'>
                            Choose what your subs can request
                          </span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full lg:px-[60px] grid lg:grid-cols-2 lg:grid-rows-none grid-rows-2 grid-cols-none py-2 justify-items-center items-center'>
              <div>
                <div className=''>
                  <div className='flex justify-center items-center bg-[#EAE8FD] w-[190px] h-[100px] lg:w-[95px] lg:h-[50px] rounded-lg'>
                    <span className='text-[#7362C6] text-[36px] lg:text-[18px] font-[500]'>
                      STEP 3
                    </span>
                  </div>
                  <div className='lg:pt-[32px]'>
                    <span className='text-[black] text-[64px] lg:text-[34px] font-[600]'>
                      Grow Your Audience
                    </span>
                  </div>
                  <div>
                    <div>
                      <div className='flex items-center pt-[32px] py-[12px] space-x-2'>
                          <StarIcon className='fill-[#000000] h-[48px] w-[48px] lg:h-[24px] lg:w-[24px] pr-[8px]'></StarIcon>
                          <div className='flex'>
                            <span className='text-[black] text-[48px] lg:text-[24px] font-[400]'>
                              Create spicy content
                            </span>
                          </div>
                      </div>
                      <div className='flex items-center pt-[16px] py-[12px] space-x-2'>
                          <StarIcon className='fill-[#000000] h-[48px] w-[48px] lg:h-[24px] lg:w-[24px] pr-[8px]'></StarIcon>
                          <div className='flex'>
                            <span className='text-[black] text-[48px] lg:text-[24px] font-[400]'>
                              Tell followers about your Egirl
                            </span>
                          </div>
                      </div>
                      <div className='flex items-center pt-[16px] py-[12px] space-x-2'>
                          <StarIcon className='fill-[#000000] h-[48px] w-[48px] lg:h-[24px] lg:w-[24px] pr-[8px]'></StarIcon>
                          <div className='flex'>
                            <span className='text-[black] text-[48px] lg:text-[24px] font-[400]'>
                              Post updates & stay active
                            </span>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-start-1 lg:col-start-2 oveflow-hidden'>
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

      </div>

      {/* Creator tools */}
      <div className='bg-[#FFFFFF] lg:px-[100px] px-24'>
        <div className=''>
          <div className='lg:grid lg:grid-cols-2 lg:grid-rows-none grid-rows-2 grid-cols-none justify-items-center items-center w-full'>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className=''>
                  <span className='text-[#949698] text-[36px] lg:text-[18px] font-[500]'>
                    CREATOR TOOLS
                  </span>
                </div>
              </div>
              <div className='space-x-3 flex justify-center lg:justify-start'>
                <span className='text-[#000000] text-[96px] lg:text-[48px] font-[600]'>
                  Design without 
                </span>
                <span className='text-[#000000] text-[96px] lg:text-[48px] font-[400] italic mr-[2px]'>
                  limits
                </span>
              </div>
              <div className=''>
                <div className='flex justify-start'>
                  <div className='flex items-center px-[8px] py-[12px] space-x-[16px] mt-[64px]'>
                    <button onClick={showSection1(section1)}>
                      <div className=''>
                      {
                      section1 === true ?
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
                      : 
                      <div>
                        <div className='lg:hidden'>
                          <NextImage
                            width={120}
                            height={120}
                            src={'/assets/creatorLandingIcons/modelBlank.png'}
                            alt={'modellogo'}
                          />
                        </div>
                        <div className='hidden lg:block'>
                          <NextImage
                            width={60}
                            height={60}
                            src={'/assets/creatorLandingIcons/modelBlank.png'}
                            alt={'modellogo'}
                          />
                        </div>
                      </div>
                      }
                      </div>
                    </button>
                    <div>
                      <div>
                        <span className='text-[#000000] text-[48px] lg:text-[24px] font-[500]'>
                          Use Existing AI Models
                        </span>
                      </div>
                      {
                      section1 && 
                        <div className='space-x-1 w-[812px] lg:w-[406px]'>
                          <span className='text-[#000000] text-[36px] lg:text-[18px] font-[400]'>
                            Use platform or community models to start generating Egirl content at the click of a button.
                          </span>
                        </div>
                      }
                    </div>
                  </div>
                </div>
                <div className='flex justify-start'>
                  <div className='flex items-center px-[8px] py-[12px] space-x-[16px]'>
                    <button onClick={showSection2(section2)}>
                        <div className=''>
                        {
                        section2 === true ?
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
                        : 
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
                        }
                        </div>
                      </button>
                    <div>
                      <div>
                        <span className='text-[#000000] text-[48px] lg:text-[24px] font-[500]'>
                          Create your Own AI Models
                        </span>
                      </div>
                      {
                      section2 && 
                        <div className='w-[812px] lg:w-[406px]'>
                          <span className='text-[#000000] text-[36px] lg:text-[18px] font-[400]'>
                            Build your own unique AI models. With just a few clicks, you can create and adjust prototypes.
                          </span>
                        </div>
                      }
                    </div>
                  </div>
                </div>
                <div className='flex justify-start'>
                  <div className='flex items-center px-[8px] py-[12px] space-x-[16px]'>
                    <button onClick={showSection3(section3)}>
                          <div className=''>
                          {
                          section3 === true ?
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
                          :
                          <div>
                            <div className='lg:hidden'>
                              <NextImage
                                width={120}
                                height={120}
                                src={'/assets/creatorLandingIcons/rocketBlank.png'}
                                alt={'rocketlogo'}
                                  />
                            </div>
                            <div className='hidden lg:block'>
                              <NextImage
                                width={60}
                                height={60}
                                src={'/assets/creatorLandingIcons/rocketBlank.png'}
                                alt={'rocketlogo'}
                                  />
                            </div>
                          </div>
                          }
                          </div>
                        </button>
                    <div>
                      <div>
                        <span className='text-[#000000] text-[48px] lg:text-[24px] font-[500]'>
                          Unlimited Growth Potential
                        </span>
                      </div>
                      {
                      section3 && 
                      <div className='w-[812px] lg:w-[406px]'>
                        <span className='text-[#000000] text-[36px] lg:text-[18px] font-[400]'>
                          Easy to get started. Those who seek to master their craft have unlimited potential for growth.                         
                        </span>
                      </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-[800px] lg:h-[700px]'>
                {
                  section1 &&
                  <div>
                    <div className='flex justify-center oveflow-hidden'>
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
                }
                {
                  section2 && 
                  <div className='flex justify-center oveflow-hidden'>
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
                }
                {
                  section3 && 
                  <div className='flex justify-center oveflow-hidden'>
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
                }
            </div>
          </div>
        </div>
      </div>

      {/* Get Paid */}
      <div className='bg-[#F7F7F7] lg:px-[100px] px-24'>
        <div className='py-10'>
          <div className=''>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className=''>
                  <span className='text-[#949698] text-[36px] lg:text-[18px] font-[500]'>
                    GET PAID
                  </span>
                </div>
              </div>
              <div className='space-x-3 flex justify-center lg:justify-start text-center'>
                <span className='text-[#000000] text-[96px] lg:text-[48px] font-[600]'>
                  Turn your passion into 
                  <span className='font-[400] italic ml-2'>
                    profit
                  </span>
                </span>
              </div>
            </div>
            <div className='mt-[48px] mb-[80px]'>
              <div className='lg:flex items-center justify-between lg:space-x-2 space-y-8 lg:space-y-0'>
                <div className='flex justify-center'>
                  <div className='h-[400px] lg:w-[397px] lg:h-[266px] border rounded-lg bg-[#FFFFFF]'>
                    <div className='mt-[40px] ml-[24px] mr-[24px]'>
                      <StarIcon className='fill-[#5848BC] h-[64px] w-[64px] lg:h-[32px] lg:w-[32px] pr-[8px]'></StarIcon>
                      <div className='mt-[24px]'>
                        <span className='text-[#000000] text-[48px] lg:text-[24px] font-[600]'>Subscriptions & PPV</span>
                      </div>
                      <div>
                        <span className='text-[#000000] text-[36px] lg:text-[18px] font-[400]'>Earn monthly income from fans via subscriptions. Pay-per-view allows you to earn fees on ultra exclusive content.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex justify-center'>
                  <div className='h-[400px] lg:w-[397px] lg:h-[266px] border rounded-lg bg-[#FFFFFF]'>
                    <div className='mt-[40px] ml-[24px] mr-[24px]'>
                    <StarIcon className='fill-[#5848BC] h-[64px] w-[64px] lg:h-[32px] lg:w-[32px] pr-[8px]'></StarIcon>
                      <div className='mt-[24px]'>
                        <span className='text-[#000000] text-[48px] lg:text-[24px] font-[600]'>Chatbots</span>
                      </div>
                      <div>
                        <span className='text-[#000000] text-[36px] lg:text-[18px] font-[400]'>Gain a percentage of profit generated each time users chat with your Egirl, and on any requests made to your Egirl.</span>
                      </div>
                    </div>
                  </div>
                </div>
 
                <div className='flex justify-center'>
                  <div className='h-[400px] lg:w-[397px] lg:h-[266px] border rounded-lg bg-[#FFFFFF]'>
                    <div className='mt-[40px] ml-[24px] mr-[24px]'>
                    <StarIcon className='fill-[#5848BC] h-[64px] w-[64px] lg:h-[32px] lg:w-[32px] pr-[8px]'></StarIcon>
                      <div className='mt-[24px]'>
                        <span className='text-[#000000] text-[48px] lg:text-[24px] font-[600]'>AI Models</span>
                      </div>
                      <div>
                        <span className='text-[#000000] text-[36px] lg:text-[18px] font-[400]'>Create your own unique AI models and list them on our creator marketplace. Earn fees on every image generation.</span>
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
      <div className='bg-[#000000] lg:px-[100px] px-24 w-full'>
        <div className='py-20'>
          <div className='lg:grid lg:grid-cols-2 gap-[100px] md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 md:max-xl:grid md:max-lg:grid-cols-1'>
            <div className=''>
              <div className='flex justify-center lg:justify-start'>
                <div className='flex justify-center items-center bg-[#313131] rounded-[8px] h-[80px] w-[270px] lg:h-[40px] lg:w-[135px] px-[8px] py-[12px]'>
                  <StarIcon className='fill-[#5848BC] h-[40px] w-[40px] lg:h-[20px] lg:w-[20px] pr-[8px]'></StarIcon>
                  <div className='flex'>
                    <span className='text-[white] text-[32px] lg:text-[16px] font-[500]'>
                      beta access
                    </span>
                  </div>
                </div>
              </div>      
              <div className='pt-10 space-x-3 flex justify-center lg:justify-start text-center lg:text-start'>
                <span className='text-white text-[100px] lg:text-[56px] font-[600]'>
                  More than 3000 people have 
                  <span className='font-[500] italic mx-6 lg:mx-4'>
                    joined
                  </span>
                  the waitlist!
                </span>
              </div>
              <div className='pt-[48px] flex justify-center lg:justify-start'>
                <div className='flex justify-center w-[800px] lg:w-[515px]'>
                  <input type="email" className="bg-[#313131] form-input text-[36px] lg:text-[24px] px-4 py-3 rounded-l-[12px] border-transparent drop-shadow text-[#949698] lg:w-[395px]" placeholder='Enter your email'/>
                  <div className='flex items-center justify-center w-[158px] px-[24px] py-[16px] bg-[#5848BC] rounded-r-[12px] drop-shadow'>
                    <span className='text-[36px] lg:text-[24px]'>
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
            <span className='text-white text-[64px] lg:text-[32px] font-semibold'>
              Egirls
            </span>
          </div>
          <div className='space-y-2'>
            <div>
              <span className='text-[#646668] text-[28px] lg:text-[14px] font-[500]'>
                CHAT WITH US
              </span>
            </div>
            <div>
              <span className='text-[white] text-[32px] lg:text-[16px] font-[500]'>
                business@egirls.ai
              </span>
            </div>
          </div>
          <div>
            <span className='text-[#646668] text-[28px] lg:text-[14px] font-[500]'>
              FOLLOW US
            </span>
            <div className='flex lg:grid lg:grid-cols-5 space-x-[4px] mt-[8px] p-1 justify-items-center items-center'>
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
        <div className='border-t-2 border-[#646668] mb-[15px]'>
          <div className='py-[25px] flex justify-between text-[28px] lg:text-[14px]'>
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

CreatorLanding.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>
    <LandingLayout>
      {page}
    </LandingLayout>
  </AuthLayout>
);