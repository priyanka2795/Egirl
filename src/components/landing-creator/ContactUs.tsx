import Link from 'next/link';

const ContactUs = () => {
  return (
    <div className='flex w-full justify-between bg-[#F6F6F6] px-[100px] pt-[100px] pb-[80px]'>
      <span className='ml-[48px] mr-[198px] select-none text-[48px] font-[400] text-[black] lg:text-[24px]'>
        It’s a new era, and we’re leading the charge. Don’t miss your chance to
        create an established brand in the new creator economy.
      </span>
      <div className='ml-[60px]'>
        <div className='flex h-[56px] w-full items-center justify-center rounded-lg border-[2px] p-[12px] lg:w-[144px]'>
          <div className='text-[36px] font-[600] text-[black] lg:text-[18px]'>
            <Link href='/contact-us'>
              <span> Contact Us </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <div className='grid-row-2 grid grid-cols-none justify-items-center gap-8 bg-[#F6F6F6] px-24 py-10 lg:grid-cols-4 lg:grid-rows-none lg:px-[100px]'>
    //   <div className='lg:col-span-3'>
    //     <div className='border-l-2'>
    //       <div className='pl-16'>
    //         <span className='text-[48px] font-[400] text-[black] lg:text-[24px]'>
    //           It’s a new era, and we’re leading the charge. Don’t miss your
    //           chance to create an established brand in the new creator economy.
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='lg:cols-span-1 w-full'>
    //     <div className='flex h-[56px] w-full items-center justify-center rounded-lg border-[2px] p-[12px] lg:w-[144px]'>
    //       <div className='text-[36px] font-[600] text-[black] lg:text-[18px]'>
    //         <Link href='/contact-us'>
    //           <span> Contact Us </span>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ContactUs;
