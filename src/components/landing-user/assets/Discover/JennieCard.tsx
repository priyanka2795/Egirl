import Image from 'next/image';

const JennieCard = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-full'>
        {/* <JennieYoon className='h-[466px] w-full md:w-[397px]'></JennieYoon> */}
        <div className='hidden justify-center md:flex'>
          <Image
            src={'/assets2/UserLanding/JennieCard/JennieCard2x.png'}
            layout='fixed'
            width={397}
            height={466}
          />
        </div>
        <div className='flex w-full justify-center md:hidden'>
          <div className='relative h-[390px] w-full min-[380px]:h-[466px] sm:w-[397px]'>
            <Image
              src={'/assets2/UserLanding/JennieCard/JennieCard2x.png'}
              layout='fill'
              objectFit='contain'
              objectPosition='center'
              quality={75}
            />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='mt-[12px] w-full min-[380px]:w-[390px]'>
            <span className='select-none text-[18px] font-[600] text-[#000000] md:text-[24px]'>
              Jennie Yoon
            </span>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='mt-[2px]  w-full min-[380px]:w-[390px]'>
            <span className='select-none text-[14px] font-[500] text-[#949698] md:text-[14px]'>
              Seoul, South Korea
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JennieCard;
