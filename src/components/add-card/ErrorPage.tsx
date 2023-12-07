import React from 'react';
import crossIconRed from '@/assets/xmark-red.webp';
import creditCard from '@/assets/credit-card.webp';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface errorPageProp {
  closeErrorPage: React.Dispatch<React.SetStateAction<boolean>>;
}
const ErrorPage = ({ closeErrorPage }: errorPageProp) => {
  const router = useRouter();
  return (
    < >
      <div className='flex flex-col items-center justify-center gap-10 p-8 grow'>
        <div
          className='flex flex-col items-center justify-center gap-4'
          // style={{ height: 'calc(100vh - 165px)' }}
        >
          <div className='flex items-center justify-center rounded-full bg-[#FF5336]/[0.16] px-6 pb-6 pt-[26px]'>
            <Image className='w-8 h-8' src={crossIconRed} alt={''} />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='font-bold text-center text-[22px] leading-8 text-[#FFFFFF]'>
              Something went wrong
            </div>
            <div className='font-normal text-center text-[15px] leading-5 text-[#979797]'>
              <p>Error code: ######</p>
              <p>Check your details or try again later</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-end justify-end gap-5 pl-5 pr-5'>
        <button
          className='font-bold flex items-center justify-center rounded-[14px] bg-[#FFFFFF14] px-5 py-[13px] text-[16px] leading-[22px] text-[#FFFFFF]'
          onClick={() => closeErrorPage(false)}
        >
          Close
        </button>
        <button
          className='font-bold flex items-center justify-center rounded-[14px] bg-[#5848BC] px-5 py-[13px] text-[16px] leading-[22px] text-[#FFFFFF]'
          onClick={() => closeErrorPage(false)}
        >
          Try again
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
