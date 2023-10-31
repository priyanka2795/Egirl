import React from 'react';
import Image from 'next/image';
import userBadgeCheck from '../../../../public/assets/user-badge-check.png'

interface identityProps {
  setSteps: any,
  setShow:any
}
function IdentityVerified({ setSteps }: identityProps) {
 return (
    <>
      <div className='flex flex-col items-center '>
        <div className='mt-8 flex flex-col justify-center items-center gap-1.5 border border-white/[0.12] pt-8 pb-6 px-6 rounded-[22px]'>
        <div className='flex items-center justify-center bg-[#111111] w-[90px] h-[90px] rounded-full partner_program'>
            <Image src={userBadgeCheck} alt="" className='' />
        </div>
        <div className='text-white text-[18px] font-black pt-2'>Verified!</div>
        <div className='text-[#979797] text-[15px] font-normal text-center'>You have successfully submitted your <br></br> information to our identity provider.</div>
        <button
          className='mt-7 flex h-12 w-[420px] items-center justify-center  gap-2 rounded-[14px] bg-[#5848BC]  px-5 py-[13px] text-base font-black leading-[22px] text-white'
          onClick={() => setSteps(5)}
        >
          Submit
        </button>
        </div>
      </div>
    </>
  );
}

export default IdentityVerified;


