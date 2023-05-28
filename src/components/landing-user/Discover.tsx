import dynamic from 'next/dynamic';
import DiscoverPlaceholder from './assets/Discover/DiscoverPlaceholder';
const SarahCard = dynamic(() => import('./assets/Discover/SarahCard'), {
  loading: () => (
    <div className='flex items-center justify-center'>
      <DiscoverPlaceholder />
    </div>
  ),

  ssr: false
});

const JennieCard = dynamic(() => import('./assets/Discover/JennieCard'), {
  loading: () => (
    <div className='flex items-center justify-center'>
      <DiscoverPlaceholder />
    </div>
  ),
  ssr: false
});

const MikaCard = dynamic(() => import('./assets/Discover/MikaCard'), {
  loading: () => (
    <div className='flex items-center justify-center'>
      <DiscoverPlaceholder />
    </div>
  ),
  ssr: false
});

const Discover = () => {
  return (
    <div className='w-full bg-[#FFFFFF] px-[24px] md:px-[40px] lg:px-[100px] lg:py-[80px] 2xl:px-[120px]'>
      <div>
        <div>
          <div className='flex justify-center pb-1 lg:justify-start'>
            <div className='select-none pt-[42px] text-[14px] font-[500] text-[#949698] md:text-[18px] lg:pt-[0px]'>
              SOMETHING FOR EVERYONE
            </div>
          </div>
          <div className='flex select-none justify-center space-x-3 lg:justify-start'>
            <span className='text-[24px] font-[600] text-[#000000] md:text-[48px]'>
              Discover
            </span>
            <span className='text-[24px] font-[400] italic text-[#000000] md:text-[48px]'>
              Egirls
            </span>
          </div>
        </div>
        <div className='mt-10'>
          <div className='items-center justify-around space-x-4 space-y-[48px] lg:flex lg:space-y-0'>
            <SarahCard />
            {/* <div className='hidden justify-center md:flex'>
              <Image
                src={'/assets2/UserLanding/SarahCard/SarahCard2x.png'}
                layout='fixed'
                width={397}
                height={466}
              />
            </div>
            <div className='flex shrink-0 justify-center md:hidden'>
              <div className='relative h-[466px] w-full  sm:w-[397px]'>
                <Image
                  src={'/assets2/UserLanding/SarahCard/SarahCard2x.png'}
                  layout='fill'
                  objectFit='contain'
                  objectPosition='center'
                  quality={75}
                />
              </div>
            </div> */}
            <JennieCard />
            <MikaCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
