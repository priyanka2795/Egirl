import React, { useState } from 'react';
import Image from 'next/image';
import discoverCard from '../../../public/assets/discover-card.png';
import jcbCard from '../../../public/assets/jcb-card.png';
import maestroCard from '../../../public/assets/maestro-card.png';
import masterrCard from '../../../public/assets/master-card.png';
import visaCard from '../../../public/assets/visa-card.png';
import circleInformation from '../../../public/assets/circle-information2.png';

interface AddCardFormProp {
  showSucess: React.Dispatch<React.SetStateAction<boolean>>;
  showError: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddCardForm = ({ showSucess, showError }: AddCardFormProp) => {
  return (
    <form>
      <div className='flex flex-col gap-10 p-8'>
        <div className='flex flex-col gap-6'>
          <div className='font-bold text-[18px] leading-6 text-[#FFFFFF]'>
            Billing details
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
              <div className='flex w-full flex-col gap-[6px]'>
                <label
                  htmlFor='country'
                  className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                >
                  Country
                </label>
                <select
                  id='country'
                  name='countryList'
                  className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] focus:ring-0'
                >
                  <option value='america'>🇺🇸 America</option>
                  <option value='america'>🇺🇸 America</option>
                </select>
              </div>
              <div className='flex w-full flex-col gap-[6px]'>
                <label
                  htmlFor='country'
                  className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                >
                  State / Province
                </label>
                <select
                  id='country'
                  name='countryList'
                  className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] focus:ring-0'
                >
                  <option value='california'>California</option>
                  <option value='california'>California</option>
                </select>
              </div>
            </div>
            <div className='flex w-full flex-col gap-[6px]'>
              <label
                htmlFor='street'
                className='text-[13px] font-semibold leading-[18px] text-[#979797]'
              >
                Street
              </label>
              <input
                type='text'
                placeholder='Enter your street'
                className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
              />
            </div>
            <div className='flex gap-4'>
              <div className='flex w-full flex-col gap-[6px]'>
                <label
                  htmlFor='street'
                  className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                >
                  City
                </label>
                <input
                  type='text'
                  placeholder='Los Angeles'
                  className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                />
              </div>
              <div className='flex w-full flex-col gap-[6px]'>
                <label
                  htmlFor='street'
                  className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                >
                  ZIP / Post code
                </label>
                <input
                  type='text'
                  placeholder='Enter your State / Province'
                  className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='font-bold text-[18px] leading-6 text-[#FFFFFF]'>
            Card details
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
              <div className='flex w-full flex-col gap-[6px]'>
                <label
                  htmlFor='street'
                  className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                >
                  Card number
                </label>
                <input
                  type='text'
                  placeholder='xxxx xxxx xxxx xxxx'
                  className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                />
              </div>
              <div className='flex w-full flex-col gap-[6px]'>
                <label
                  htmlFor='street'
                  className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                >
                  Name on card
                </label>
                <input
                  type='text'
                  placeholder='Name'
                  className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                />
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex w-full flex-col gap-[6px]'>
                <label
                  htmlFor='street'
                  className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                >
                  Expiration
                </label>
                <input
                  type='text'
                  placeholder='mm / yy'
                  className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                />
              </div>
              <div className='flex w-full flex-col gap-[6px]'>
                <label
                  htmlFor='street'
                  className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                >
                  CVC
                </label>
                <input
                  type='text'
                  placeholder='xxx'
                  className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                />
              </div>
            </div>
          </div>
          <div className='block custom-checkbox custom-checkbox-circle'>
            <input
              className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727] focus:outline-0 focus:outline-transparent focus:ring-0'
              type='checkbox'
              value='age'
              //onChange={handleChange}
              id='age'
            />
            <label
              className='font-normal text-[14px] leading-[18px] text-[#979797]'
              htmlFor='age'
            >
              Tick here to confirm that you are at least 18 years old and the
              age of majority in your place of residence
            </label>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex gap-2 rounded-[14px] border border-white/[0.16] p-4'>
            <div className='w-5 h-5'>
              <Image
                className='object-contain w-full h-full'
                src={circleInformation}
                alt={''}
              />
            </div>
            <div className='font-normal text-[13px] leading-[18px] text-[#FFFFFF]'>
              The charges on your credit card and banking statements will appear
              as "Persona Enterprises Inc."
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-start justify-center gap-4'>
              <Image
                className='h-[30px] w-[50px]'
                src={discoverCard}
                alt={''}
              />
              <Image className='h-[30px] w-[50px]' src={jcbCard} alt={''} />
              <Image className='h-[30px] w-[50px]' src={maestroCard} alt={''} />
              <Image className='h-[30px] w-[50px]' src={masterrCard} alt={''} />
              <Image className='h-[30px] w-[50px]' src={visaCard} alt={''} />
            </div>
            {/* <div className='text-center text-[#515151] text-[14px] font-normal leading-[18px]'>Fenix International Limited, 9th Floor, 107 Cheapside, London, EC2V 6DN</div> */}
          </div>
        </div>
      </div>
      <div className='flex items-end justify-end px-8 py-6'>
        <button
          onClick={() => showError(true)}
          className='font-bold flex items-center justify-center rounded-[14px] bg-[#5848BC] px-5 py-[13px] text-[16px] leading-[22px] text-[#FFFFFF]'
        >
          Add card
        </button>
        {/* <button className='px-5 py-[13px] ml-2 flex justify-center items-center rounded-[14px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={() => {showSucess(true)}}>Success</button>
            <button className='px-5 py-[13px] ml-2 flex justify-center items-center rounded-[14px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={() => {showError(true)}}>Error</button>  */}
      </div>
    </form>
  );
};

export default AddCardForm;
