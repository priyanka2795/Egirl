import { AuthLayout } from '@components/layout/auth-layout';
import { SEO } from '@components/common-old/seo';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { LayoutProps } from '@components/layout/common-layout';
import { Bars2Icon, StarIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Nav from '../components/landing-user/Nav';
import Footer from '@components/landing-common/Footer';
import DiscordIcon from '@components/landing-user/assets/Footer/DiscordIcon';
import TwitterIcon from '@components/landing-user/assets/Footer/TwitterIcon';
import InstaIcon from '@components/landing-user/assets/Footer/InstaIcon';
import RedditIcon from '@components/landing-user/assets/Footer/RedditIcon';
import Logo from '@components/landing-user/assets/Logo';
import { ChangeEvent } from 'react';
import PopupJoinDiscord from '@components/landing-common/PopupJoinDiscord';
import Image from 'next/image';
import ExperienceTheFuture from '@components/landing-user/assets/ExperienceTheFuture';

export function LandingLayout({ children }: LayoutProps): JSX.Element {
  return <div className='w-full bg-white'>{children}</div>;
}

export default function CreatorLanding(): JSX.Element {
  const [hiddenSideDiv, setHiddenSideDiv] = useState(false);
  const [showBetaAccess, setShowBetaAccess] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    'Partnership',
    'Request',
    'Appeal',
    'Complaint',
    'Report',
    'Other'
  ];

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(event.target.value);
  };

  const sendEmailFn = (event: React.FormEvent): void => {
    event?.preventDefault();
    const config = {
      SecureToken: 'ce44d72d-02a8-44eb-824b-a35540a0bcc3',
      To: 'hollandpleskac@gmail.com',
      From: email,
      Subject: name,
      Body: message
    };
    if ((window as any).Email) {
      (window as any).Email.send(config).then((message: string) =>
        console.log(message)
      );
    } else {
      console.log('email does not exist');
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

  // useEffect(() => {});

  return (
    <div className=''>
      <SEO title='Egirls' description='' />

      {/* Nav Bar */}
      <nav className=' fixed top-0 z-10 w-full bg-[#F6F6F6] px-[24px] md:px-[40px] lg:px-[100px] 2xl:px-[120px]'>
        <div className='md: py-[40px] lg:py-6'>
          <div className='flex items-center justify-between'>
            <div className='flex'>
              <Link href='/'>
                <a className=' py-1 pr-[40px]'>
                  {/* <Logo /> */}
                  <Image
                    src='/assets/final/navLogo.svg'
                    width='123'
                    height='32'
                    alt='Egirls'
                  />
                </a>
              </Link>
              <div className='lg:flex lg:items-center lg:space-x-6'>
                <div className='hidden lg:flex lg:items-center'>
                  <button>
                    <Link href='/'>
                      <span className='text-[32px] font-[500] text-[#181818] hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8 lg:text-[16px]'>
                        For users
                      </span>
                    </Link>
                  </button>
                </div>
                <div className='hidden lg:flex lg:items-center'>
                  <Link href='/creator-landing'>
                    <a className='text-[32px]	font-[500] text-[#181818] transition duration-100 hover:text-[#5848BC] hover:underline hover:decoration-[#5848BC] hover:underline-offset-8 lg:text-[16px]'>
                      For creators
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className='md:flex'>
              <div className='mr-6 hidden lg:flex lg:items-center'>
                <button className='text-[32px] font-[500] text-[#5848BC] underline decoration-[#5848BC]  underline-offset-8 lg:text-[16px] '>
                  Contact
                </button>
              </div>
              <button
                onClick={() => {
                  setBetaAccess();
                }}
                className='justify-center rounded-[12px] bg-[#5848BC] px-[18px] py-[10px] transition duration-100 hover:bg-[#4D37DA] xs:hidden sm:hidden md:flex md:items-center lg:flex lg:w-[158px] lg:items-center'
              >
                <span className='text-[16px] font-[500] text-white'>
                  Get beta access
                </span>
              </button>
              <div
                className='ml-[32px] xs:flex xs:items-center sm:flex sm:items-center md:flex md:items-center lg:flex lg:items-center'
                onClick={() => {
                  setSideNav();
                }}
              >
                <Bars2Icon className='h-[40px] w-[40px] fill-[black] lg:hidden lg:h-[20px] lg:w-[20px]'></Bars2Icon>
              </div>
            </div> */}
            <div className='gap-2 md:flex'>
            <button className='justify-center rounded-[12px] bg-[#5848BC] px-[10px] py-[10px] transition duration-100 hover:bg-[#4D37DA] xs:hidden sm:hidden md:flex md:items-center lg:flex lg:w-[80px] lg:items-center'>
              <Link href='/login'>
                <span className='text-[32px] font-[500] text-white lg:text-[16px]'>
                  Login
                </span>
              </Link>
            </button>

            <button className='justify-center rounded-[12px] bg-[#5848BC] px-[10px] py-[10px] transition duration-100 hover:bg-[#4D37DA] xs:hidden sm:hidden md:flex md:items-center lg:flex lg:w-[80px] lg:items-center'>
              <Link href='/signup'>
                <span className='text-[32px] font-[500] text-white lg:text-[16px]'>
                  Sign Up
                </span>
              </Link>
            </button>
          </div>
          </div>
        </div>
      </nav>

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
                  <span className='text-[24px] font-[500] text-[#5848BC] underline underline-offset-8 hover:decoration-[#5848BC] xs:text-[48px] sm:text-[48px]'>
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

      {/* Popup Join Discord */}

      <PopupJoinDiscord
        setBetaAccess={setBetaAccess()}
        showBetaAccess={showBetaAccess}
      />

      {/* Header */}
      <div className='bg-[#F6F6F6] px-[24px] pt-[96px] md:px-[40px] lg:px-[100px] 2xl:px-[120px]'>
        <div className='py-20'>
          <div className='gap-[50px] sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:max-xl:grid md:max-lg:grid-cols-1 lg:grid lg:grid-cols-2'>
            <div className=''>
              <div className='flex justify-start'>
                <div className='flex select-none items-center justify-center rounded-lg bg-[#E4E3EC] px-[10px] py-[8px] text-[15px] text-[#5848BC] md:px-[12px]'>
                  <ExperienceTheFuture className='mr-[6px] h-[16px] w-[16px] md:mr-[8px] md:h-[20px] md:w-[20px]' />
                  contact us
                </div>
              </div>
              <div className='select-none pt-6'>
                <span className='text-[32px] font-[600] text-black sm:text-[56px] md:text-[60px] lg:text-[56px]'>
                  LET'S START A{' '}
                </span>
                <span className='text-[32px] font-[500] italic text-black sm:text-[56px] md:text-[60px] lg:text-[56px]'>
                  CONVERSATION!
                </span>
              </div>
              <div className='flex w-fit flex-col gap-4 pt-6 max-[560px]'>
                <span className='select-none text-[16px] font-[500] text-black sm:text-[18px] '>
                  Please feel free to contact us using the form on the right.
                  We’ll get back to you as soon as possible!
                </span>
                <span className='select-none text-[16px] font-[400] text-black sm:text-[18px] '>
                  For all billing related questions please contact our payment
                  provider at: https://support.ccbill.com
                </span>
                <span className='select-none text-[16px] font-[400] text-black sm:text-[18px] '>
                  Persona Enterprises Inc.
                </span>
                <span className='select-none text-[16px] font-[400] text-black sm:text-[18px] '>
                  251 Little Falls Drive, Wilmington, DE 19808, USA
                </span>
                {/* <div className='md:flex'>
              <div className='mr-6 hidden lg:flex lg:items-center'>
                <button className='text-[32px] font-[500] text-[#5848BC] underline decoration-[#5848BC]  underline-offset-8 lg:text-[16px] '>
                  Contact
                </button>
              </div>
              <button
                onClick={() => {
                  setBetaAccess();
                }}
                className='justify-center rounded-[12px] bg-[#5848BC] px-[18px] py-[10px] transition duration-100 hover:bg-[#4D37DA] xs:hidden sm:hidden md:flex md:items-center lg:flex lg:w-[158px] lg:items-center'
              >
                <span className='text-[16px] font-[500] text-white'>
                  Get beta access
                </span>
              </button>
              <div
                className='ml-[32px] xs:flex xs:items-center sm:flex sm:items-center md:flex md:items-center lg:flex lg:items-center'
                onClick={() => {
                  setSideNav();
                }}
              >
                <Bars2Icon className='h-[40px] w-[40px] fill-[black] lg:hidden lg:h-[20px] lg:w-[20px]'></Bars2Icon>
              </div>
            </div> */}
              </div>
            </div>
            <div className='mt-[48px] sm:mt-0'>
              <div className='w-full'>
                <form
                  className='mb-4 rounded-2xl bg-white px-8 pb-8 pt-6'
                  onSubmit={sendEmailFn}
                >
                  <div className='mb-4 flex flex-col justify-around space-x-0 sm:flex-row sm:space-x-4'>
                    <div className='w-full sm:w-1/2'>
                      <label className='mb-[6px] flex text-[13px] font-[500] text-[#646668]'>
                        Name
                      </label>
                      <input
                        className='w-full rounded-lg border-none bg-[#F6F6F6] px-5 py-[16px] text-[16px] text-gray-700 md:px-6'
                        id='username'
                        type='text'
                        placeholder='Your name'
                        value={name}
                        onChange={onChangeName}
                      />
                    </div>

                    <div className='w-full sm:w-1/2'>
                      <label className='mb-[6px] flex text-[13px] font-[500] text-[#646668]'>
                        Email
                      </label>
                      <input
                        className='w-full rounded-lg border-none bg-[#F6F6F6] px-5 py-[16px] text-[16px] text-gray-700 md:px-6'
                        id='email'
                        type='text'
                        placeholder='example@mail.com'
                        value={email}
                        onChange={onChangeEmail}
                      />
                    </div>
                  </div>

                  <div className='mb-4 w-full'>
                    <label className='mb-[6px] flex text-[13px] font-[500] text-[#646668]'>
                      Subject
                    </label>
                    <select
                      className='block w-full appearance-none rounded-[12px] border border-gray-300 bg-[#6c6e7214] px-4 py-4 pr-4 leading-tight text-[#646668] focus:border-gray-500 focus:bg-white focus:outline-none'
                      value={selectedOption}
                      onChange={handleChange}
                    >
                      <option value='' disabled selected>
                        Choose Subject
                      </option>
                      {options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='mb-6'>
                    <label className='mb-[6px] flex text-[13px] font-[500] text-[#646668]'>
                      Message
                    </label>
                    <textarea
                      className='mb-3 h-[118px]	w-full rounded-lg border-none bg-[#F6F6F6] px-5 py-[16px] text-[16px] text-gray-700 md:px-6'
                      id='message'
                      placeholder='Your message'
                      style={{ resize: 'none' }}
                      value={message}
                      onChange={onChangeMessage}
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <button className='w-full rounded-lg bg-[#5848BC] px-[18px] py-[16px] transition duration-100 hover:bg-[#4D37DA]'>
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
      <Footer />

      {/* Socials sticky */}
      <div className='sticky bottom-0 right-0 z-10 float-right flex w-full justify-end'>
        <div className='h-[60px] w-[160px] rounded-tl-xl bg-[#5848BC]'>
          <div className='grid h-full grid-cols-4 items-center justify-items-center p-3 '>
            <a
              href='https://discord.gg/uvAaAkbhEm'
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

CreatorLanding.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>
    <LandingLayout>{page}</LandingLayout>
  </AuthLayout>
);

// import React from 'react';

// const ContactUs = () => {
//   return <div>ContactUs</div>;
// };

// export default ContactUs;
