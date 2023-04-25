import LogoWhite from './assets/Footer/LogoWhite';
import RedditIcon from './assets/icons/RedditIcon';
import DiscordIcon from './assets/icons/DiscordIcon';
import TwitterIcon from './assets/icons/TwitterIcon';
import InstaIcon from './assets/icons/InstaIcon';
import FooterImg from './assets/Footer/FooterImg';
import ExperienceTheFuture from './assets/ExperienceTheFuture';
import { NextImage } from '@components/ui/next-image';

const Footer = () => {
  return (
    <div className='w-full bg-[#000000] px-24 lg:px-[100px]'>
      <div className='py-20'>
        <div className='gap-[100px] sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:max-xl:grid md:max-lg:grid-cols-1 lg:grid lg:grid-cols-2'>
          <div className=''>
            <div className='flex justify-center lg:justify-start'>
              <div className='flex h-[40px] items-center justify-center rounded-[8px] bg-[#141414] px-[10px] py-[16px]'>
                {/* <StarIcon className='h-[20px] w-[20px] fill-[#5848BC] pr-[8px]'></StarIcon> */}
                <ExperienceTheFuture className='h-[30px] w-[30px] pr-[8px]' />
                <div className='flex p-2'>
                  <span className='text-[16px] font-[500] text-[white]'>
                    beta access
                  </span>
                </div>
              </div>
            </div>
            <div className='flex justify-center space-x-3 pt-10 text-center lg:justify-start lg:text-start'>
              <span className='text-[24px] font-[600] text-white lg:text-[56px]'>
                More than 3000 people have
                <span className='mx-2 font-[500] italic lg:mx-4'>joined</span>
                the waitlist!
              </span>
            </div>
            <div className='flex justify-center pt-[48px] lg:justify-start'>
              {/* <div className='flex w-[515px]'>
                  <input
                    type='email'
                    className='form-input w-[395px] rounded-l-[12px] border-transparent bg-[#313131] px-4 py-3 text-[#949698] drop-shadow'
                    placeholder='Enter your email'
                  />
                  <div className='flex w-[158px] items-center justify-center rounded-r-[12px] bg-[#5848BC] px-[24px] py-[16px] drop-shadow'>
                    <span>Join</span>
                  </div>
                </div> */}
              <button className='rounded-xl bg-[#5848BC] py-4 px-[30px] text-lg font-semibold text-white'>
                Join us
              </button>
            </div>
          </div>
          <div className='hidden min-[200px]:mt-[50px] lg:block'>
            <div className='flex shrink-0'>
              <NextImage
                width={639}
                height={577}
                src={'/assets/svgImages/footerImage.svg'}
                alt={'footer illus'}
              />
              {/* <FooterImg /> */}
            </div>
          </div>
        </div>
      </div>
      <div className='space-y-10 py-10 lg:flex lg:justify-between'>
        <div>
          {/* <span className='text-[32px] font-semibold text-white'>Egirls</span> */}
          <LogoWhite />
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
            <div className='p-1'>
              <NextImage
                width={18}
                height={18}
                src={'/assets/homeIcons/discordIcon.png'}
                alt={'Profile'}
                className='rounded-[15px]'
              />
            </div>
            <div className='p-1'>
              <NextImage
                width={18}
                height={18}
                src={'/assets/homeIcons/twitterIcon.png'}
                alt={'Profile'}
                className='rounded-[15px]'
              />
            </div>
            <div className='p-1'>
              <NextImage
                width={18}
                height={18}
                src={'/assets/homeIcons/instagramIcon.png'}
                alt={'Profile'}
                className='rounded-[15px]'
              />
            </div>
            <div className='p-1'>
              <NextImage
                width={18}
                height={18}
                src={'/assets/homeIcons/redditIcon.png'}
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
            <span>© 2023 Egirls Inc. All Rights Reserved</span>
          </div>
          <div>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
