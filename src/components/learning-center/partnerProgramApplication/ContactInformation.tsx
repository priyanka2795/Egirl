import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import rightArrow from '@/assets/right-arrow-grey.png';
import downArrow from '@/assets/down-arrow-img.webp';
import rightArrowWhite from '@/assets/chevron-right-white.webp';
import leftArrow from '@/assets/left-arrow-grey.webp';
import downArrowGrey from '@/assets/arrow-down.webp';

const countryData = ['Germany', 'India', 'America', 'Australia'];
interface contactInfoProps {
  setSteps: any;
}
function ContactInformation({ setSteps }: contactInfoProps) {
  const [btnActive, setBtnActive] = useState(false);
  const [showCountries, setShowCountries] = useState(false);
  const [country, setCountry] = useState("")
  const [address, setAddress] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleCountryDropdown = () => {
    setShowCountries(!showCountries);
  };

  useEffect(()=>{
    if(country && address.length>0 && zipCode.length>0 && phoneNumber.length>0){
      setBtnActive(true)
    }else{
      setBtnActive(false)
    }
  },[country,address,zipCode,phoneNumber])

  return (
    <>
      <div className='flex items-center justify-between '>
        <div
          className='flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-xl bg-white/[0.08]'
          onClick={() => setSteps(1)}
        >
          <Image src={leftArrow} alt='' />
        </div>
        <div className='text-center text-[26px] font-black text-white'>
          Partner Program Application
        </div>
        <span></span>
      </div>
      <div className='pb-5 text-center text-[15px] text-[#979797]'>
        Please add contact information
      </div>
      <div className='flex flex-col items-center'>
        {/* country */}
        <div className='w-[420px]'>
          <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
            Country
          </div>
          <div className='relative'>
            <div
              className='flex w-full cursor-pointer items-center justify-between rounded-[14px] bg-white/[0.05] px-4  py-3'
              onClick={handleCountryDropdown}
            >
              <div className={`text-[15px] ${country ? "text-white": "text-[#979797]"}`}>{country ? country : "Please select"}</div>
              <Image src={downArrowGrey} alt='' />
            </div>
            {showCountries && (
              <div className='absolute left-0 top-[50px] z-[50] w-full rounded-[14px] bg-[#131313] px-4 py-3'>
                <ul>
                  {countryData.map((e, i) => {
                    return <li key={i} onClick={()=> {setCountry(e),setShowCountries(false)}} className='cursor-pointer'>{e}</li>;
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* address */}
        <div className='mt-4 flex w-[420px] flex-col gap-1.5'>
          <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
            Address
          </div>
          <div className='flex w-full flex-col gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
            <input
              name='address'
              autoComplete='off'
              placeholder='Address'
              type='text'
              onChange = {(e)=> setAddress(e.target.value)}
              className='font-normal border-none bg-transparent p-0 text-[15px] leading-6 text-white placeholder:text-[#979797] focus:ring-0'
            />
          </div>
        </div>
        {/* zip code */}
        <div className='mt-4 flex w-[420px] flex-col gap-1.5'>
          <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
            Zip code
          </div>
          <div className='flex w-full flex-col gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
            <input
              name='zipCode'
              autoComplete='off'
              placeholder='Zip code'
              type='text'
              onChange = {(e)=> setZipCode(e.target.value)}
              className='font-normal border-none bg-transparent p-0 text-[15px] leading-6 text-white placeholder:text-[#979797] focus:ring-0'
            />
          </div>
        </div>
        {/* phone number*/}
        <div className='mt-4 flex w-[420px] flex-col gap-1.5'>
          <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
            Phone Number
          </div>
          <div className='flex w-full flex-col gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
            <input
              name='phoneNumber'
              autoComplete='off'
              placeholder='+5(555)555-5555'
              type='number'
              onChange = {(e)=> setPhoneNumber(e.target.value)}
              className='font-normal border-none bg-transparent p-0 text-[15px] leading-6 text-white placeholder:text-[#979797] focus:ring-0'
            />
          </div>
        </div>
        {/* next button */}
        {btnActive ? (
          <button
            className='mt-7 flex h-12 w-[420px] items-center justify-center  gap-2 rounded-[14px] bg-[#5848BC]  px-5 py-[13px] text-base font-black leading-[22px] text-white'
            onClick={() => setSteps(3)}
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

export default ContactInformation;
