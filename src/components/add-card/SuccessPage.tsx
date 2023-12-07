import React from 'react';
import greenCheck from '@/assets/check-green.webp';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface successPageProp {
  closeSuccessPage: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}
const SuccessPage = ({ closeSuccessPage, message }: successPageProp) => {
  const router = useRouter();

  return (
    <div className='h-inherit flex w-full flex-col bg-[#121212]'>
      <div
        className='flex flex-col items-center justify-center gap-10 p-8 grow'
        // style={{ height: 'calc(100vh - 162px)' }}
      >
        <div className='flex flex-col items-center gap-4'>
          <div className='flex items-center justify-center rounded-full bg-[#5AD02E]/[0.16] px-6 pb-6 pt-[26px]'>
            <Image className='w-8 h-8' src={greenCheck} alt={''} />
          </div>
          <div className='flex max-w-[316px] flex-col gap-2'>
            <div className='font-bold text-center text-[22px] leading-8 text-[#FFFFFF]'>
              Success!
            </div>
            <div className='font-normal text-center text-[15px] leading-5 text-[#979797]'>
              {message}
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-end justify-end px-8 py-6'>
        {/* flex items-end justify-end px-8 py-6 */}
        <button
          className='font-bold flex items-center justify-center rounded-[14px] bg-[#5848BC] px-5 py-[13px] text-[16px] leading-[22px] text-[#FFFFFF]'
          onClick={() => closeSuccessPage(false)}
        >
          Close
        </button>
        {/* <button className='px-5 py-[13px] w-full rounded-[14px] bg-[#FFFFFF14] text-white text-[16px] font-bold leading-[22px]' onClick={() => router.push('/home')}>Close</button> */}
      </div>
    </div>
  );
};
export default SuccessPage;