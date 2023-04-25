import { NextImage } from '@components/ui/next-image';
import LogoWhite from './assets/Footer/LogoWhite';
import RedditIcon from './assets/Footer/RedditIcon';
import DiscordIcon from './assets/Footer/DiscordIcon';
import TwitterIcon from './assets/Footer/TwitterIcon';
import InstaIcon from './assets/Footer/InstaIcon';
import ExperienceTheFuture from './assets/ExperienceTheFuture';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const FooterImg = dynamic(() => import('./assets/Footer/FooterImg'), {
  loading: () => <div className='h-[578px] w-[640px] '>Loading SVG...</div>,
  ssr: false
});

const Discover = () => {
  return (
    <div className='w-full bg-[#000000] px-24 lg:px-[100px] 2xl:px-[120px]'>
      <div className='grid grid-cols-2 pt-[100px]'>
        <div className=''>
          <div className='flex justify-center lg:justify-start'>
            <div className='mt-[103px] flex items-center rounded-[8px] bg-[#141414] px-[12px] py-[10px] '>
              <ExperienceTheFuture className='mr-2' />
              <div className='justify-centertext-[32px] flex select-none items-center font-[500] text-white md:text-[24px] lg:text-[15px]'>
                beta access
              </div>
            </div>
          </div>
          <div className='flex justify-center space-x-3 pt-6 text-center lg:justify-start lg:text-start'>
            <span className='select-none text-[24px] font-[600] text-white lg:text-[48px]'>
              More than 3000 people have
              <span className='mx-2 font-[500] italic lg:mx-4'>
                joined the waitlist!
              </span>
            </span>
          </div>
          <button className='mt-12 rounded-xl bg-[#5848BC] py-4 px-[30px] text-lg font-semibold text-white transition duration-100 hover:bg-[#4D37DA]'>
            Join us
          </button>
        </div>
        <div className='flex justify-end '>
          <FooterImg />
        </div>
      </div>
      <div className='mt-[75px] flex w-full justify-between border-b border-white/[.16]'>
        <LogoWhite />
        <div className='flex pb-[64px]'>
          <div>
            <div className='mr-[100px] select-none'>
              <h3 className='pb-3'>CHAT WITH US</h3>
              <p>business@egirls.ai</p>
            </div>
          </div>
          <div className='select-none'>
            <h3 className='pb-3'>FOLLOW US</h3>
            <div className='flex gap-x-6'>
              <a
                href='https://discord.gg/ECAds8F8Dj'
                target='_blank'
                rel='noopener noreferrer'
              >
                <DiscordIcon />
              </a>
              <a
                href='https://twitter.com/egirlsai'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TwitterIcon />
              </a>
              <a
                href='https://www.instagram.com/egirls_ai/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <InstaIcon />
              </a>
              <a
                href='https://www.reddit.com/r/EgirlsAI/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <RedditIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 flex  select-none justify-between text-[15px] font-[400]'>
        <p>© 2023 Egirls AI, Inc. All Rights Reserved</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Discover;
