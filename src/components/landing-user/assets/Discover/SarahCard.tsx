import SarahCarter from './SarahCarter';

const SarahCard = () => {
  return (
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
  );
};

export default SarahCard;
