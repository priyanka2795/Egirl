import dynamic from 'next/dynamic';

const SarahCarter = dynamic(() => import('./assets/Discover/SarahCarter'), {
  loading: () => (
    <div className='h-[466px] w-[332px] md:w-[397px]'>Loading SVG...</div>
  ),
  ssr: false
});

const JennieYoon = dynamic(() => import('./assets/Discover/JennieYoon'), {
  loading: () => (
    <div className='h-[466px] w-[332px] md:w-[397px]'>Loading SVG...</div>
  ),
  ssr: false
});

const MikaChan = dynamic(() => import('./assets/Discover/MikaChan'), {
  loading: () => (
    <div className='h-[466px] w-[332px] md:w-[397px]'>Loading SVG...</div>
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
            <div className='flex justify-center'>
              <div>
                <SarahCarter className='h-[466px] w-[332px] md:w-[397px]' />

                <div className='mt-[12px]'>
                  <span className='select-none text-[18px] font-[600] text-[#000000] md:text-[24px]'>
                    Sarah Carter
                  </span>
                </div>
                <div className='mt-[2px]'>
                  <span className='select-none text-[14px] font-[500] text-[#949698] md:text-[14px]'>
                    LOS ANGELES, USA
                  </span>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <div>
                <JennieYoon className='h-[466px] w-[332px] md:w-[397px]'></JennieYoon>

                <div className='mt-[12px]'>
                  <span className='select-none text-[18px] font-[600] text-[#000000] md:text-[24px]'>
                    Jennie Yoon
                  </span>
                </div>
                <div className='mt-[2px]'>
                  <span className='select-none text-[14px] font-[500] text-[#949698] md:text-[14px]'>
                    Seoul, South Korea{' '}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <div>
                <MikaChan className='h-[466px] w-[332px] md:w-[397px]'></MikaChan>

                <div className='mt-[12px]'>
                  <span className='select-none text-[18px] font-[600] text-[#000000] md:text-[24px]'>
                    Mika-Chan
                  </span>
                </div>
                <div className='mt-[2px] pb-12 lg:pb-0'>
                  <span className='select-none text-[14px] font-[500] text-[#949698] md:text-[14px]'>
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
