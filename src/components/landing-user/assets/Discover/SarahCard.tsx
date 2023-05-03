import Image from 'next/image';

const SarahCard = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-full'>
        {/* <SarahCarter className='h-[466px] w-full md:w-[397px]' /> */}
        <div className='hidden justify-center md:flex'>
          <Image
            src={'/assets2/UserLanding/SarahCard/SarahCard2x.png'}
            layout='fixed'
            width={397}
            height={466}
          />
        </div>
        <div className='flex w-full justify-center md:hidden'>
          <div className='relative h-[400px] w-full sm:w-[397px]'>
            <Image
              src={'/assets2/UserLanding/SarahCard/SarahCard2x.png'}
              layout='fill'
              objectFit='contain'
              objectPosition='center'
              quality={75}
            />
          </div>
        </div>

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
  );
};

export default SarahCard;
