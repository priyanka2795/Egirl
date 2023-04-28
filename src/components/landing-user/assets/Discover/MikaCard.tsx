import MikaChan from './MikaChan';

const MikaCard = () => {
  return (
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
  );
};

export default MikaCard;
