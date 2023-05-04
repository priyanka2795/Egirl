import { AuthLayout } from '@components/layout/auth-layout';
import { SEO } from '@components/common/seo';
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

export function LandingLayout({ children }: LayoutProps): JSX.Element {
  return <div className='w-full bg-white'>{children}</div>;
}

export default function CreatorLanding(): JSX.Element {
  const [hiddenSideDiv, setHiddenSideDiv] = useState(false);
  const [showBetaAccess, setShowBetaAccess] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

  useEffect(() => {});

  return (
    <div className='grid h-screen grid-rows-[1fr,auto] bg-white'>
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
      <div className='bg-[#F6F6F6] px-24 pt-[96px] lg:px-[100px] 2xl:px-[120px]'>
        <div className='py-20'>
          <div className='gap-[50px] sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:max-xl:grid md:max-lg:grid-cols-1 lg:grid lg:grid-cols-2'>
            <div className='flex flex-col items-center lg:items-start'>
              <div className='flex  items-center rounded-[8px] bg-[#EAE8FD] px-[8px] py-[12px]'>
                {/* <ExperienceTheFuture className='h-[40px] w-[40px] pr-[8px] lg:h-[20px] lg:w-[20px]' /> */}
                <div className='mr-[8px] flex justify-center'>
                  <Image
                    src='/assets/final/starIcon.svg'
                    height='20'
                    width='20'
                    alt='starIcon'
                  />
                </div>
                <div className='flex '>
                  <span className='text-[14px] font-[500] text-[#5848BC] md:text-[15px]'>
                    contact us
                  </span>
                </div>
              </div>
              <div className='select-none pt-12 text-center lg:text-start'>
                <span className='text-[80px] font-[600] text-black sm:text-[70px] md:text-[60px] lg:text-[56px]'>
                  LET'S START A
                </span>
                <div>
                  <span className='text-[80px] font-[500] italic text-black sm:text-[70px] md:text-[60px] lg:text-[56px]'>
                    CONVERSATION!
                  </span>
                </div>
              </div>
              <div className='w-fit pt-12'>
                <span className='flex select-none text-center text-[36px] font-[400] text-black lg:text-start lg:text-[18px]'>
                  Are you interested in becoming our partner or simply want to
                  share your thoughts about our work? Please feel free to
                  contact us using the form on the right. We’ll get back to you
                  as soon as possible!
                </span>
              </div>
            </div>
            <div className='min-[200px]:pt-10'>
              <div className='w-full'>
                <form
                  className='mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md'
                  onSubmit={sendEmailFn}
                >
                  <div className='items-around mb-4 flex-col space-y-4 sm:flex sm:items-start sm:justify-around sm:space-x-4 sm:space-y-0'>
                    <div className='w-full sm:w-1/2'>
                      <label className='mb-2 text-[32px] font-[500] text-[#646668] lg:text-[13px]'>
                        Name
                      </label>
                      <input
                        className='w-full	rounded border-none bg-[#F6F6F6] px-6 py-[16px] text-[32px] text-gray-700 lg:px-3 lg:py-2 lg:text-[13px]'
                        id='username'
                        type='text'
                        placeholder='Your name'
                        value={name}
                        onChange={onChangeName}
                      />
                    </div>
                    <div className='w-full sm:w-1/2'>
                      <label className='mb-2 text-[32px] font-[500] text-[#646668] lg:text-[13px]'>
                        Email
                      </label>
                      <input
                        className='w-full	rounded border-none bg-[#F6F6F6] px-6 py-[16px] text-[32px] text-gray-700 lg:px-3 lg:py-2 lg:text-[13px]'
                        id='email'
                        type='text'
                        placeholder='example@mail.com'
                        value={email}
                        onChange={onChangeEmail}
                      />
                    </div>
                  </div>
                  <div className='mb-6'>
                    <label className='mb-2 text-[32px] font-[500] text-[#646668] lg:text-[13px]'>
                      Message
                    </label>
                    <textarea
                      className='mb-3 h-[118px]	w-full rounded border-none bg-[#F6F6F6] px-6 py-[16px] text-[32px] text-gray-700 lg:px-3 lg:py-2 lg:text-[13px]'
                      id='message'
                      placeholder='Your message'
                      style={{ resize: 'none' }}
                      value={message}
                      onChange={onChangeMessage}
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <button className='w-full rounded-[12px] bg-[#5848BC] px-[18px] py-[10px] transition duration-100 hover:bg-[#4D37DA]'>
                      <span className='text-[48px] font-[500] text-white lg:text-[16px]'>
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
