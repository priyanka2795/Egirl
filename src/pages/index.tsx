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
import { StarIcon } from '@heroicons/react/20/solid';
import { PencilIcon } from '@heroicons/react/24/outline';

import { NextImage } from '@components/ui/next-image';

export function LandingLayout({ children }: LayoutProps): JSX.Element {
  return (
    <div className='w-screen bg-white'>
      {children}
    </div>
  );
}

export default function Login(): JSX.Element {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();
  const [section1, setSection1] = useState(true);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(false);

  const customTheme = {
    default: {
      colors: {
        brand: 'rgb(231, 88, 88)',
        brandAccent: 'rgb(201, 29, 29)',
        brandButtonText: 'white',
        defaultButtonText: 'black',
        defaultButtonBorder: 'gray',
        defaultButtonBackground: 'white',
        defaultButtonBackgroundHover: 'white',
        inputBackground: 'transparent',
        inputBorder: 'lightgray',
        inputBorderHover: 'rgb(201, 29, 29)',
        inputBorderFocus: 'rgb(201, 29, 29)',
        inputText: 'black',
        inputLabelText: 'gray',
        inputPlaceholder: 'darkgray',
        messageText: 'gray',
        messageTextDanger: 'red',
        anchorTextColor: 'gray',
        anchorTextHoverColor: 'rgb(201, 29, 29)'
      },
      space: {
        spaceSmall: '4px',
        spaceMedium: '8px',
        spaceLarge: '16px',
        labelBottomMargin: '8px',
        anchorBottomMargin: '4px',
        emailInputSpacing: '4px',
        socialAuthSpacing: '4px',
        buttonPadding: '10px 15px',
        inputPadding: '10px 15px'
      },
      fontSizes: {
        baseBodySize: '13px',
        baseInputSize: '14px',
        baseLabelSize: '14px',
        baseButtonSize: '14px'
      },
      fonts: {
        bodyFontFamily: `ui-sans-serif, sans-serif`,
        buttonFontFamily: `ui-sans-serif, sans-serif`,
        inputFontFamily: `ui-sans-serif, sans-serif`,
        labelFontFamily: `ui-sans-serif, sans-serif`
      },
      borderWidths: {
        buttonBorderWidth: '1px',
        inputBorderWidth: '1px'
      },
      radii: {
        borderRadiusButton: '6px',
        buttonBorderRadius: '6px',
        inputBorderRadius: '6px'
      }
      // dark: {
      //   colors: {
      //     brandButtonText: 'white',
      //     defaultButtonBackground: '#2e2e2e',
      //     defaultButtonBackgroundHover: '#3e3e3e',
      //     //..
      //   },
      // },
      // // You can also add more theme variations with different names.
      // evenDarker: {
      //   colors: {
      //     brandButtonText: 'white',
      //     defaultButtonBackground: '#1e1e1e',
      //     defaultButtonBackgroundHover: '#2e2e2e',
      //     //..
      //   },
      // },
    }
  };

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

  useEffect(() => {
    if(user != null){
      Router.push('/home');
    };
  }, [user]);
  
  return (
    <div className='grid min-h-screen grid-rows-[1fr,auto] bg-white'>
      <SEO
        title='Egilrs'
        description=''
      />
      
      <div className='bg-[#F6F6F6] px-[100px]'>
        {/* Nav Bar */}
        <div className='py-[40px]'>
          <div className='flex justify-between'>
            <div className='flex'>
                <div className='pr-[40px]'>
                  <span className='text-[#181818] text-[32px] font-semibold'>
                    Egirls
                  </span>
                </div>
                <div className='flex items-center pr-[24px]'>
                  <span className='text-[#181818] text-[16px] font-[500] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
                    For users
                  </span>
                </div>
                <div className='flex items-center'>
                  <span className='text-[#181818] text-[16px] font-[500] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8'>
                    For creators
                  </span>
                </div>
            </div>
            <div className='flex'>
              <div className='flex items-center pr-[24px]'>
                  <span className='text-[#181818] text-[16px] font-[500]'>
                    Contact
                  </span>
              </div>
              <div className='flex items-center justify-center w-[158px] px-[18px] py-[10px] bg-[#5848BC] rounded-[12px]'>
                  <span className='text-white text-[16px] font-[500]'>
                    Get beta access
                  </span>
              </div>
            </div>
          </div>
        </div>
        {/* Header */}
        <div className='py-[80px]'>
          <div className='lg:grid lg:grid-cols-2 gap-[100px] md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 md:max-xl:grid md:max-lg:grid-cols-1'>
            <div className=''>
              <div className='flex items-center bg-[#EAE8FD] rounded-[8px] h-[40px] w-[200px] px-[8px] py-[12px]'>
                <StarIcon className='fill-[#5848BC] h-[20px] w-[20px] pr-[8px]'></StarIcon>
                <div className='flex '>
                  <span className='text-[#5848BC] text-[16px] font-[500]'>
                    experience the future
                  </span>
                </div>
              </div>
              <div className='pt-[24px]'>
                <span className='text-black text-[56px] font-[600]'>
                  YOUR FAVOURITE
                </span>
                <div>
                  <span className='text-black text-[56px] font-[500] italic'>
                    EGIRLS,
                    
                  </span>
                  <span className='text-black text-[56px] font-[600] not-italic ml-[12px]'>
                      ALL IN ONE
                    </span>
                </div>
                <span className='text-black text-[56px] font-[600]'>
                  PLACE
                </span>
              </div>
              <div className='pt-[48px]'>
                <span className='text-black text-[18px] font-[400]'>
                  Join our waitlist for beta access, 3000 people have joined so far!
                </span>
              </div>
              <div className='pt-[20px]'>
                <div className='flex w-[515px]'>
                  <input type="email" className="form-input px-4 py-3 rounded-l-[12px] border-transparent drop-shadow text-[#949698] w-[395px]" placeholder='Enter your email'/>
                  <div className='flex items-center justify-center w-[158px] px-[24px] py-[16px] bg-[#5848BC] rounded-r-[12px] drop-shadow'>
                    <span>
                      Join
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='min-[200px]:mt-[50px]'>
              <div className='md:shrink-0 sm:shrink-0'>
                <NextImage
                  width={550}
                  height={500}
                  src={'/assets/rightContent.png'}
                  alt={'Profile'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='bg-[#FFFFFF] px-[100px]'>
        {/* Discover */}
        <div className='py-[20px]'>
          <div className=''>
            <div className=''>
              <div className='h-[30px] w-[250px]'>
                <div className=''>
                  <span className='text-[#949698] text-[18px] font-[500]'>
                    SOMETHING FOR EVERYONE
                  </span>
                </div>
              </div>
              <div className='space-x-3'>
                <span className='text-[#000000] text-[48px] font-[600]'>
                  Discover 
                </span>
                <span className='text-[#000000] text-[48px] font-[400] italic'>
                  Egirls
                </span>
              </div>
            </div>
            <div className='mt-[40px]'>
              <div className='lg:flex items-center justify-center space-x-4'>
                <div className=''>
                  <NextImage
                    width={400}
                    height={465}
                    src={'/assets/sarahScarlet.png'}
                    alt={'Profile'}
                    className='rounded-[15px]'
                  />
                  <div className='mt-[12px]'>
                    <span className='text-[#000000] text-[24px] font-[600]'>Sarah Scarlet</span>
                  </div>
                  <div className='mt-[2px]'>
                    <span className='text-[#949698] text-[14px] font-[500]'>LOS ANGELES, USA</span>
                  </div>
                </div>
                <div className=''>
                  <NextImage
                    width={400}
                    height={465}
                    src={'/assets/jennieYoon.png'}
                    alt={'Profile'}
                    className='rounded-[15px]'
                  />
                  <div className='mt-[12px]'>
                    <span className='text-[#000000] text-[24px] font-[600]'>Jennie Yoon</span>
                  </div>
                  <div className='mt-[2px]'>
                    <span className='text-[#949698] text-[14px] font-[500]'>Seoul, South Korea </span>
                  </div>
                </div>
                <div className=''>
                  <NextImage
                    width={400}
                    height={465}
                    src={'/assets/mikaChan.png'}
                    alt={'Profile'}
                    className='rounded-[15px]'
                  />
                  <div className='mt-[12px]'>
                    <span className='text-[#000000] text-[24px] font-[600]'>Mika-Chan</span>
                  </div>
                  <div className='mt-[2px]'>
                    <span className='text-[#949698] text-[14px] font-[500]'>Tokyo, Japan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#FFFFFF] px-[100px]'>
        {/* Chat */}
        <div className='py-[80px]'>
          <div className='lg:grid lg:grid-cols-2 gap-[100px] md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 md:max-xl:grid md:max-lg:grid-cols-1'>
          <div className=''>
              <div className='h-[30px] w-[250px]'>
                <div className=''>
                  <span className='text-[#949698] text-[18px] font-[500]'>
                    CHAT AWAY
                  </span>
                </div>
              </div>
              <div className='space-x-3'>
                <span className='text-[#000000] text-[48px] font-[600]'>
                  Easily 
                </span>
                <span className='text-[#000000] text-[48px] font-[400] italic mr-[2px]'>
                  chat
                </span>
                <span className='text-[#000000] text-[48px] font-[600]'>
                  with any Egirl 
                </span>
                <span className='text-[#000000] text-[48px] font-[600]'>
                  you like 
                </span>
              </div>
              <div>
                <div>
                  <div className='flex items-center px-[8px] py-[12px] space-x-[16px] mt-[64px]'>
                    <button onClick={showSection1(section1)}>
                      <div className=''>
                      {
                      section1 === true ?
                      <NextImage
                        width={60}
                        height={60}
                        src={'/assets/pencilLogo.png'}
                        alt={'pencilLogo'}
                      /> 
                      : 
                      <NextImage
                        width={60}
                        height={60}
                        src={'/assets/pencilLogoBlank.png'}
                        alt={'pencilLogo'}
                      /> 
                      }
                      </div>
                    </button>
                    <div>
                      <div>
                        <span className='text-[#000000] text-[24px] font-[500]'>
                          Texting
                        </span>
                      </div>
                      {
                      section1 && 
                        <span className='text-[#000000] text-[18px] font-[400]'>
                          Text any Egirl to get a conversation started. Every Egirl has a unique personality.
                        </span>
                      }
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex items-center px-[8px] py-[12px] space-x-[16px]'>
                    <button onClick={showSection2(section2)}>
                        <div className=''>
                        {
                        section2 === true ?
                        <NextImage
                          width={60}
                          height={60}
                          src={'/assets/requestLogo.png'}
                          alt={'pencilLogo'}
                        /> 
                        : 
                        <NextImage
                          width={60}
                          height={60}
                          src={'/assets/requestLogoBlank.png'}
                          alt={'pencilLogo'}
                        /> 
                        }
                        </div>
                      </button>
                    <div>
                      <div>
                        <span className='text-[#000000] text-[24px] font-[500]'>
                          Request Images
                        </span>
                      </div>
                      {
                      section2 && 
                        <span className='text-[#000000] text-[18px] font-[400]'>
                          Make a request for an Egirl to send you a specially made pic of themselves.
                        </span>
                      }
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex items-center px-[8px] py-[12px] space-x-[16px]'>
                    <button onClick={showSection3(section3)}>
                          <div className=''>
                          {
                          section3 === true ?
                          <NextImage
                            width={60}
                            height={60}
                            src={'/assets/voiceMessage.png'}
                            alt={'pencilLogo'}
                          /> 
                          : 
                          <NextImage
                            width={60}
                            height={60}
                            src={'/assets/voiceMessageBlank.png'}
                            alt={'pencilLogo'}
                          /> 
                          }
                          </div>
                        </button>
                    <div>
                      <div>
                        <span className='text-[#000000] text-[24px] font-[500]'>
                          Voice Messages
                        </span>
                      </div>
                      {
                      section3 && 
                        <span className='text-[#000000] text-[18px] font-[400]'>
                          Ask an Egirl to send you voice messages instead of regular texts.
                        </span>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='min-[200px]:mt-[50px]'>
              <div className='md:shrink-0 sm:shrink-0'>
                {
                  section1 && 
                  <NextImage
                    width={550}
                    height={500}
                    src={'/assets/textingContent.png'}
                    alt={'Profile'}
                  />
                }
                {
                  section2 && 
                  <NextImage
                    width={550}
                    height={500}
                    src={'/assets/requestImagesContent.png'}
                    alt={'Profile'}
                  />
                }
                {
                  section3 && 
                  <NextImage
                    width={550}
                    height={500}
                    src={'/assets/voiceMessagesContent.png'}
                    alt={'Profile'}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#F7F7F7] px-[100px]'>
        {/* Subscribe */}
        <div className='py-[20px]'>
          <div className=''>
            <div className=''>
              <div className='h-[30px] w-[250px]'>
                <div className=''>
                  <span className='text-[#949698] text-[18px] font-[500]'>
                    SPICY CONTENT AWAITS
                  </span>
                </div>
              </div>
              <div className='space-x-3'>
                <span className='text-[#000000] text-[48px] font-[600]'>
                  Subscribe to see 
                </span>
                <span className='text-[#000000] text-[48px] font-[400] italic'>
                  exclusive
                </span>
                <span className='text-[#000000] text-[48px] font-[600]'>
                  content
                </span>
              </div>
            </div>
            <div className='mt-[40px]'>
              <div className='lg:flex items-center justify-center space-x-4'>
                <div className='w-[400px] h-[600px] border rounded-lg'>
                  <div className='bg-[#6c6e7229] h-[80px] flex items-center justify-left'>
                    <div className='ml-[24px] rounded-full'>
                      <NextImage
                        width={36}
                        height={36}
                        src={'/assets/mikaChanIcon.png'}
                        alt={'Profile'}
                        imgClassName='rounded-full'
                      />
                    </div>
                    <div className='ml-[12px]'>
                      <span className='text-[#000000] text-[24px] font-[600]'>Mika-Chan</span>
                    </div>
                  </div>
                  <div className='mt-[12px] ml-[24px] mr-[24px]'>
                    <span className='text-[#000000] text-[15px] font-[400]'>What do you guys think of my goth cosplay? uwu · 私のゴスコスプレについてどう思いますか？uwu</span>
                  </div>
                  <div className='flex items-center justify-center mt-[14px]'>
                    <NextImage
                      width={350}
                      height={400}
                      src={'/assets/mikaChanContent.png'}
                      alt={'Profile'}
                      className='rounded-[15px]'
                    />
                  </div>
                </div>
                <div className='w-[400px] h-[600px] border rounded-lg'>
                  <div className='bg-[#6c6e7229] h-[80px] flex items-center justify-left'>
                    <div className='ml-[24px] rounded-full'>
                      <NextImage
                        width={36}
                        height={36}
                        src={'/assets/jennieIcon.png'}
                        alt={'Profile'}
                        imgClassName='rounded-full'
                      />
                    </div>
                    <div className='ml-[12px]'>
                      <span className='text-[#000000] text-[24px] font-[600]'>Jennie Yoon</span>
                    </div>
                  </div>
                  <div className='mt-[12px] ml-[24px] mr-[24px]'>
                    <span className='text-[#000000] text-[15px] font-[400]'>Do I look cuter with short hair? · 짧은 머리가 더 귀엽게 보이나요?</span>
                  </div>
                  <div className='flex items-center justify-center mt-[14px]'>
                    <NextImage
                      width={350}
                      height={400}
                      src={'/assets/jennieContent.png'}
                      alt={'Profile'}
                      className='rounded-[15px]'
                    />
                  </div>
                </div> 
                <div className='w-[400px] h-[600px] border rounded-lg'>
                  <div className='bg-[#6c6e7229] h-[80px] flex items-center justify-left'>
                    <div className='ml-[24px] rounded-full'>
                      <NextImage
                        width={36}
                        height={36}
                        src={'/assets/mirandaIcon.png'}
                        alt={'Profile'}
                        imgClassName='rounded-full'
                      />
                    </div>
                    <div className='ml-[12px]'>
                      <span className='text-[#000000] text-[24px] font-[600]'>Miranda Wilde</span>
                    </div>
                  </div>
                  <div className='mt-[12px] ml-[24px] mr-[24px]'>
                    <span className='text-[#000000] text-[15px] font-[400]'>Trying out my new amber contacts at the beach</span>
                  </div>
                  <div className='flex items-center justify-center mt-[34px]'>
                    <NextImage
                      width={350}
                      height={400}
                      src={'/assets/mirandaContent.png'}
                      alt={'Profile'}
                      className='rounded-[15px]'
                    />
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#000000] px-[100px]'>
        {/* Footer */}
        <div className='py-[80px]'>
          <div className='lg:grid lg:grid-cols-2 gap-[100px] md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 md:max-xl:grid md:max-lg:grid-cols-1'>
            <div className=''>
              <div className='flex items-center bg-[#313131] rounded-[8px] h-[40px] w-[135px] px-[8px] py-[12px]'>
                <StarIcon className='fill-[#5848BC] h-[20px] w-[20px] pr-[8px]'></StarIcon>
                <div className='flex '>
                  <span className='text-[white] text-[16px] font-[500]'>
                    beta access
                  </span>
                </div>
              </div>
              <div className='pt-[24px]'>
                <span className='text-white text-[56px] font-[600]'>
                  More than 3000 people have 
                  <span className='text-white text-[56px] font-[500] italic ml-[18px] mr-[18px]'>
                    joined
                  </span>
                  the waitlist!
                </span>
              </div>
              <div className='pt-[48px]'>
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
            <div className='min-[200px]:mt-[50px]'>
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
        <div className='py-[80px] flex justify-between'>
          <div>
            <span className='text-white text-[32px] font-semibold'>
              Egirls
            </span>
          </div>
          <div>
            <span className='text-[#646668] text-[14px] font-[500]'>
              CHAT WITH US
            </span>
            <div className='flex space-x-[24px] mt-[15px]'>
              <div>
                <span>
                  business@egirls.ai
                </span>
              </div>
              <div>
                <span>
                  Schedule a call
                </span>
              </div>
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
                    src={'/assets/instagramIcon.png'}
                    alt={'Profile'}
                    className='rounded-[15px]'
                  />
              </div>
              <div>
                <NextImage
                    width={18}
                    height={18}
                    src={'/assets/tiktokIcon.png'}
                    alt={'Profile'}
                    className='rounded-[15px]'
                  />
              </div>
              <div>
                <NextImage
                    width={18}
                    height={18}
                    src={'/assets/redditIcon.png'}
                    alt={'Profile'}
                    className='rounded-[15px]'
                  />
              </div>
              <div>
                <NextImage
                    width={18}
                    height={18}
                    src={'/assets/discordIcon.png'}
                    alt={'Profile'}
                    className='rounded-[15px]'
                  />
              </div>
              <div>
                <NextImage
                    width={18}
                    height={18}
                    src={'/assets/twitterIcon.png'}
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
    </div>
  );
}

Login.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>
    <LandingLayout>
      {page}
    </LandingLayout>
  </AuthLayout>
);
