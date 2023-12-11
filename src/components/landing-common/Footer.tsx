import LogoWhite from './assets/Footer/LogoWhite';
import RedditIcon from './assets/icons/RedditIcon';
import DiscordIcon from './assets/icons/DiscordIcon';
import TwitterIcon from './assets/icons/TwitterIcon';
import InstaIcon from './assets/icons/InstaIcon';
import FooterImg from './assets/Footer/FooterImg';
import ExperienceTheFuture from './assets/ExperienceTheFuture';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full bg-[#000000] px-[40px] lg:px-[100px] 2xl:px-[120px]'>
      <div className='grid grid-cols-1 pt-[64px] lg:grid-cols-2 lg:pt-[100px]'>
        <div className='flex flex-col items-center lg:items-start'>
          <div className='flex justify-center lg:justify-start'>
            <div className='mt-0 flex items-center rounded-[8px] bg-[#141414] px-[12px] py-[10px] lg:mt-[103px] '>
              <ExperienceTheFuture className='mr-2' />
              <div className='justify-centertext-[32px] flex select-none items-center font-[500] text-white md:text-[24px] lg:text-[15px]'>
                beta access
              </div>
            </div>
          </div>
          <div className='flex justify-center pt-6 space-x-3 text-center lg:justify-start lg:text-start'>
            <span className='select-none text-[24px] font-[600] text-white md:text-[48px]'>
              More than 3000 people have
              <span className='mx-2 font-[500] italic lg:mx-4'>
                joined the waitlist!
              </span>
            </span>
          </div>
          <button className='mt-12 rounded-xl bg-[#5848BC] px-[40px] py-4 text-lg font-semibold text-white transition duration-100 hover:bg-[#4D37DA] lg:px-[30px]'>
            Join us
          </button>
        </div>
        <div className='justify-end hidden lg:flex '>
          {/* <FooterImg /> */}
          <Image
            src={'/assets2/Common/FooterImg/FooterImg2x.png'}
            layout='fixed'
            width={667}
            height={625}
          />
        </div>
      </div>
      <div className='mt-[75px] flex w-full flex-col justify-between border-b border-white/[.16] lg:flex-row'>
        <LogoWhite className='mb-[40px] lg:mb-0' />
        <div className='flex justify-between pb-[64px] md:justify-start'>
          <div>
            <div className='mr-0 select-none md:mr-[100px]'>
              <h3 className='pb-3 text-[#646668]'>CONTACT US</h3>
              <p className='select-all'>business@egirls.ai</p>
            </div>
          </div>
          <div className='select-none'>
            <h3 className='pb-3 text-[#646668]'>FOLLOW US</h3>
            <div className='flex gap-x-4 sm:gap-x-6'>
              <a
                href='https://discord.gg/uvAaAkbhEm'
                target='_blank'
                rel='noopener noreferrer'
              >
                <DiscordIcon className='h-[20px] w-[20px] sm:h-[24x] sm:w-[24px]' />
              </a>
              <a
                href='https://twitter.com/egirlsai'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TwitterIcon className='h-[20px] w-[20px] sm:h-[24x] sm:w-[24px]' />
              </a>
              <a
                href='https://www.instagram.com/egirls_ai/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <InstaIcon className='h-[20px] w-[20px] sm:h-[24x] sm:w-[24px]' />
              </a>
              <a
                href='https://www.reddit.com/r/EgirlsAI/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <RedditIcon className='h-[20px] w-[20px] sm:h-[24x] sm:w-[24px]' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 flex select-none justify-between text-[15px] font-[400]'>
        {/* <p>© 2023 Egirls Inc. All Rights Reserved</p> */}
        <div>
          <p>© 2023 Persona Enterprises Inc. All Rights Reserved</p>
          <p>251 LITTLE FALLS DRIVE,</p>
          <p>WILMINGTON, DE 19808,</p>
          <p>United States</p>
          <p>302-636-5401</p>
        </div>
        <div className='flex gap-x-4'>
          <a className='hover:underline' href="https://egirls.ai/legal/terms-of-service" target="_blank" rel="noopener noreferrer" className='hover:underline'>
            Terms of Service
          </a>
          <a className='hover:underline' href="https://egirls.ai/legal/privacy" target="_blank" rel="noopener noreferrer" className='hover:underline'>
            Privacy Policy
          </a>
          <a className='hover:underline' href="https://egirls.ai/legal/content-and-conduct" target="_blank" rel="noopener noreferrer" className='hover:underline'>
            Content & Conduct Policy
          </a>
          <a className='hover:underline' href="https://egirls.ai/legal/products-and-services" target="_blank" rel="noopener noreferrer" className='hover:underline'>
            Products & Services Policy
          </a>
          <Link href="/contact-us">
            <a className='hover:underline'>Contact Us</a>
          </Link>
        </div>
      </div>
      {/* <div className='mt-10 flex  select-none justify-between text-[15px] font-[400]'>
        <p>© 2023 Egirls Inc. All Rights Reserved</p>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div> */}
    </div>
  );
};

export default Footer;
