import Link from 'next/link';

const ContactUs = () => {
  return (
    <div className='flex justify-center bg-[#F6F6F6] px-[24px] pb-[80px] pt-[100px] md:w-full md:justify-between md:px-[40px] lg:px-[100px] 2xl:px-[120px]'>
      <span className='mg:mr-[198px] ml-[48px] mr-0 w-[312px] select-none border-l-[2px] border-[#B4B5B7] text-[18px] font-[400] text-[black] sm:pl-[20px] md:w-auto md:pl-[48px] lg:text-[24px]'>
        It’s a new era, and we’re leading the charge. Don’t miss your chance to
        create an established brand in the new creator economy.
      </span>
      <Link href='/contact-us'>
        <a className='ml-[60px] hidden md:block'>
          <div className='flex h-[56px] w-[144px] items-center justify-center rounded-xl border-[2px] p-[12px]'>
            <div className='text-[18px] font-[600] text-[black] lg:text-[18px]'>
              <span> Contact Us </span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ContactUs;
