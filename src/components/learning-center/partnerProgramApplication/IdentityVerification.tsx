import React,{useState} from 'react';
import Image from 'next/image';
import leftArrow from '@/assets/left-arrow-grey.webp';
import userSearch from '@/assets/user-search.webp'
import IdentityFailed from './IdentityFailed';
import IdentityVerified from './IdentityVerified';

interface identityProps {
  setSteps: any;
}
function IdentityVerification({ setSteps }: identityProps) {
  const [isVerified, setIsVerified] = useState(false)
  const [show, setShow] = useState(true)
 return (
    <>
      <div className='flex items-center justify-between '>
        <div
          className='flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-xl bg-white/[0.08]'
          onClick={() => setSteps(3)}
        >
          <Image src={leftArrow} alt='' />
        </div>
        <div className='text-center text-[26px] font-black text-white'>
          Partner Program Application
        </div>
        <span></span>
      </div>
      {
        show ? 
        <div className='flex flex-col items-center '>
        <div className='mt-8 flex flex-col justify-center items-center gap-1.5 border border-white/[0.12] pt-8 pb-6 px-6 rounded-[22px]'>
        <div className='flex items-center justify-center bg-[#111111] w-[90px] h-[90px] rounded-full partner_program'>
            <Image src={userSearch} alt="" className='' />
        </div>
        <div className='text-white text-[18px] font-black pt-2'>Identity verification</div>
        <div className='text-[#979797] text-[15px] font-normal text-center'>Please proceed to our identity provider <br></br> to ensure your identity.</div>
        <button
          className='mt-7 flex h-12 w-[420px] items-center justify-center  gap-2 rounded-[14px] bg-[#5848BC]  px-5 py-[13px] text-base font-black leading-[22px] text-white'
          onClick={() => {setIsVerified(false),setShow(false)}}
        >
          Verify
        </button>
        </div>
      </div>
      :
      isVerified ? <IdentityFailed setSteps={setSteps} setShow={setShow} /> : <IdentityVerified setSteps={setSteps} setShow={setShow} />
      }
      
    </>
  );
}

export default IdentityVerification;

