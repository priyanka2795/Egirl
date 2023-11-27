
import React from 'react'
import greenCheck from '../../../public/assets/check-green.png';
import Image from 'next/image';
import { useRouter } from 'next/router'


interface successPageProp {
  closeSuccessPage: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}
const SuccessPage = (
  { closeSuccessPage, message }: successPageProp
) => {
  const router = useRouter()

  return (

    <div className='flex flex-col bg-[#121212] w-full h-inherit'>
      <div className='flex flex-col items-center justify-center gap-10 p-8 grow'>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex items-center justify-center pt-[26px] pb-6 px-6 rounded-full bg-[#5AD02E]/[0.16]'>
            <Image className='w-8 h-8' src={greenCheck} alt={''} />
          </div>
          <div className='flex flex-col gap-2 max-w-[316px]'>
            <div className='text-center text-[#FFFFFF] text-[22px] font-bold leading-8'>Success!</div>
            <div className='text-center text-[#979797] text-[15px] font-normal leading-5'>
              {message}
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        {/* flex items-end justify-end px-8 py-6 */}
        {/* <button className='px-5 py-[13px] flex justify-center items-center rounded-[14px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={() => closeSuccessPage(false)}>Go back</button> */}
        <button className='px-5 py-[13px] w-full rounded-[14px] bg-[#FFFFFF14] text-white text-[16px] font-bold leading-[22px]' onClick={() => closeSuccessPage(false)}>Close</button>
        
      </div>
    </div>

  );
};
export default SuccessPage;