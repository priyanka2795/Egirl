import JennieYoon from './JennieYoon';

const JennieCard = () => {
  return (
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
  );
};

export default JennieCard;
