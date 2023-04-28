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
            <div className='o-1'>
              <SarahCard />
            </div>
            <JennieCard />
            <MikaCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
