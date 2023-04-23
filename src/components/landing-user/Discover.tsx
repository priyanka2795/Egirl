import { NextImage } from '@components/ui/next-image';
import SarahCarter from './assets/Discover/SarahCarter';
import JennieYoon from './assets/Discover/JennieYoon';
import MikaChan from './assets/Discover/MikaChan';

const Discover = () => {
  return (
    <div className='w-full bg-[#FFFFFF] px-[24px] lg:px-[100px] lg:py-[80px]'>
      <div>
        <div>
          <div className='flex justify-center pb-1 lg:justify-start'>
            <div className='select-none pt-[42px] text-[36px] font-[500] text-[#949698] md:text-[24px] lg:pt-[0px] lg:text-[18px]'>
              SOMETHING FOR EVERYONE
            </div>
          </div>
          <div className='flex select-none justify-center space-x-3 lg:justify-start'>
            <span className='text-[64px] font-[600] text-[#000000] lg:text-[48px]'>
              Discover
            </span>
            <span className='text-[64px] font-[400] italic text-[#000000] lg:text-[48px]'>
              Egirls
            </span>
          </div>
        </div>
        <div className='mt-10'>
          <div className='items-center justify-around space-x-4 space-y-[48px] lg:flex lg:space-y-0'>
            <div className='flex justify-center'>
              <div>
                <SarahCarter />
                {/* <div className='hidden lg:block'>
                  <NextImage
                    width={400}
                    height={465}
                    src={'/assets/svgImages/discoverEgirl1.svg'}
                    imgClassName='rounded-[15px]'
                    alt={'discover e girl1'}
                  />
                </div>
                <div className='lg:hidden'>
                  <NextImage
                    width={600}
                    height={665}
                    src={'/assets/svgImages/discoverEgirl1.svg'}
                    imgClassName='rounded-[15px]'
                    alt={'discover e girl1'}
                  />
                </div> */}
                <div className='mt-[12px]'>
                  <span className='select-none text-[30px] font-[600] text-[#000000] lg:text-[24px]'>
                    Sarah Carter
                  </span>
                </div>
                <div className='mt-[2px]'>
                  <span className='select-none text-[28px] font-[500] text-[#949698] lg:text-[14px]'>
                    LOS ANGELES, USA
                  </span>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <div>
                {/* <div className='hidden lg:block'>
                  <NextImage
                    width={400}
                    height={465}
                    src={'/assets/svgImages/discoverEgirl2.svg'}
                    imgClassName='rounded-[15px]'
                    alt={'discover e girl2'}
                  />
                </div>
                <div className='lg:hidden'>
                  <NextImage
                    width={600}
                    height={665}
                    src={'/assets/svgImages/discoverEgirl2.svg'}
                    imgClassName='rounded-[15px]'
                    alt={'discover e girl2'}
                  />
                </div> */}
                <JennieYoon></JennieYoon>

                <div className='mt-[12px]'>
                  <span className='select-none text-[30px] font-[600] text-[#000000] lg:text-[24px]'>
                    Jennie Yoon
                  </span>
                </div>
                <div className='mt-[2px]'>
                  <span className='select-none text-[28px] font-[500] text-[#949698] lg:text-[14px]'>
                    Seoul, South Korea{' '}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <div>
                {/* <div className='hidden lg:block'>
                  <NextImage
                    width={400}
                    height={465}
                    src={'/assets/svgImages/discoverEgirl3.svg'}
                    imgClassName='rounded-[15px]'
                    alt={'discover e girl3'}
                  />
                </div>
                <div className='lg:hidden'>
                  <NextImage
                    width={600}
                    height={665}
                    src={'/assets/svgImages/discoverEgirl3.svg'}
                    imgClassName='rounded-[15px]'
                    alt={'discover e girl3'}
                  />
                </div> */}
                <MikaChan></MikaChan>

                <div className='mt-[12px]'>
                  <span className='select-none text-[30px] font-[600] text-[#000000] lg:text-[24px]'>
                    Mika-Chan
                  </span>
                </div>
                <div className='mt-[2px] pb-12 lg:pb-0'>
                  <span className='select-none text-[28px] font-[500] text-[#949698] lg:text-[14px]'>
                    Tokyo, Japan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
