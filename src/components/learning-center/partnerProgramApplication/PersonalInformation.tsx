import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import rightArrow from '@/assets/right-arrow-grey.png';
import downArrow from '@/assets/down-arrow-img.webp';
import rightArrowWhite from '@/assets/chevron-right-white.webp';
interface personalInfoProps {
  setSteps: any;
}
function PersonalInformation({ setSteps }: personalInfoProps) {
  const [btnActive, setBtnActive] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(()=>{
    if(firstName.length >0 && lastName.length >0){
      setBtnActive(true)
    }else{
      setBtnActive(false)
    }
  },[firstName,lastName])

  return (
    <>
      <div className='text-center text-[26px] font-black text-white'>
        Partner Program Application
      </div>
      <div className='pb-5 text-center text-[15px] text-[#979797]'>
        Please add your legal first and last name
      </div>
      <div className='flex flex-col items-center'>
        {/* legal first name */}
        <div className='flex w-[420px] flex-col gap-1.5'>
          <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
            Legal First Name
          </div>
          <div className='flex w-full flex-col gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
            <input
              name='firstName'
              autoComplete='off'
              placeholder='First Name'
              type='text'
              onChange={(e) => setFirstName(e.target.value)}
              className='font-normal border-none bg-transparent p-0 text-[15px] leading-6 text-white placeholder:text-[#979797] focus:ring-0'
            />
          </div>
        </div>
        {/* legal last name */}
        <div className='mt-4 flex w-[420px] flex-col gap-1.5'>
          <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
            Legal Last Name
          </div>
          <div className='flex w-full flex-col gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
            <input
              name='lastName'
              autoComplete='off'
              placeholder='Last Name'
              type='text'
              onChange={(e) => setLastName(e.target.value)}
              className='font-normal border-none bg-transparent p-0 text-[15px] leading-6 text-white placeholder:text-[#979797] focus:ring-0'
            />
          </div>
        </div>
        {/* next button */}
        {btnActive ? (
          <button
            className='mt-7 flex h-12 w-[420px] items-center justify-center  gap-2 rounded-[14px] bg-[#5848BC]  px-5 py-[13px] text-base font-black leading-[22px] text-white'
            onClick={() => setSteps(2)}
          >
            Next <Image src={rightArrowWhite} alt='' />
          </button>
        ) : (
          <div className='relative group'>
            <button className='mt-7 flex h-12 w-[420px] items-center justify-center  gap-2 rounded-[14px] bg-[#211C41]  px-5 py-[13px] text-base font-black leading-[22px] text-white/[0.32]'>
              Next <Image src={rightArrow} alt='' />
            </button>
            <div className='invisible group-hover:visible group-hover:opacity-100'>
              <div className='font-normal absolute bottom-[62px] left-[110px] flex w-[200px] items-center justify-center rounded-[6px] bg-[#303030] px-3 py-[6px] text-center text-[12px] leading-4 text-white'>
                Please fill in the form to continue
              </div>
              <div className='absolute right-[172px] top-[2px] h-[24px] w-10'>
                <Image className='w-full h-full' src={downArrow} alt={''} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PersonalInformation;
