import Image from 'next/image';

const MikaCard = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-full'>
        {/* <MikaChan className='h-[466px] w-full md:w-[397px]'></MikaChan> */}
        <div className='hidden justify-center md:flex'>
          <Image
            src={'/assets2/UserLanding/MikaCard/MikaCard2x.png'}
            layout='fixed'
            width={397}
            height={466}
          />
        </div>
        <div className='flex w-full justify-center md:hidden'>
          <div className='relative h-[400px] w-full sm:w-[397px]'>
            <Image
              src={'/assets2/UserLanding/MikaCard/MikaCard2x.png'}
              layout='fill'
              objectFit='contain'
              objectPosition='center'
              quality={75}
            />
          </div>
        </div>

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
  );
};

export default MikaCard;
