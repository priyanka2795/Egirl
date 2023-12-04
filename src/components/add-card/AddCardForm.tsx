import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import circleInformation from '@/assets/circle-information2.webp';
import discoverCard from '@/assets/discover-card.webp';
import jcbCard from '@/assets/jcb-card.webp';
import maestroCard from '@/assets/maestro-card.webp';
import masterrCard from '@/assets/master-card.webp';
import visaCard from '@/assets/visa-card.webp';
// Interfaces and types

// Main data and utils
import { countries } from 'countries-list';
import { City, ICity, IState, State } from 'country-state-city';

interface AddCardFormProp {
  showSucess: React.Dispatch<React.SetStateAction<boolean>>;
  showError: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddCardForm = ({ showSucess, showError }: AddCardFormProp) => {
  const objectEntries = Object.entries(countries);
  const [selectedCountry, setCountry] = useState<string>('AD');
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedState, setSelectedState] = useState<string>('07');
  const [cardValue, setCardValue] = useState<string>('');
  const [cardValuetoEnter, setCardValuetoEnter] = useState<string>('');
  const [expiryValue, setExpiryValue] = useState<string>('');
  const [expiryValuetoEnter, setExpiryValuetoEnter] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');

  const formatCardNumber = (input: string) => {
    // Remove all non-digit characters
    if (!input) {
      setCardValue('');
      return;
    }
    const digitsOnly = input.replace(/\D/g, '');

    // Add a space after every 4 digits using regex and trim the resulting string
    const formatted = digitsOnly.replace(/(\d{4})/g, '$1 ').trim();

    // Limit to 16 characters (16-digit card number)
    setCardValue(formatted.substr(0, 19));
  };

  const formatExpiration = (input: string) => {
    // Remove all non-digit characters
    const digitsOnly = input.replace(/\D/g, '');

    // Add a slash after two digits for month and limit to 4 characters (MM/YY)
    const formatted = digitsOnly
      .replace(/^(\d{2})(\d{0,2})/, (match, month, year) => {
        // Ensure month is between 01 and 12
        const validMonth = Math.min(12, Math.max(1, parseInt(month, 10)));
        return `${validMonth.toString().padStart(2, '0')}${
          year ? `/${year}` : ''
        }`;
      })
      .substr(0, 5);

    setExpiryValue(formatted);
  };

  const formatCVC = (input: string) => {
    // Remove all non-digit characters
    const digitsOnly = input.replace(/\D/g, '');

    // Limit to maximum 3 digits
    const formatted = digitsOnly.substr(0, 3);

    setCvv(formatted);
  };

  useEffect(() => {
    formatCardNumber(cardValuetoEnter);
  }, [cardValuetoEnter]);

  useEffect(() => {
    formatExpiration(expiryValuetoEnter);
  }, [expiryValuetoEnter]);

  useEffect(() => {
    const st = State.getStatesOfCountry(selectedCountry);
    setStates(st);
    setSelectedState(st[0]?.isoCode);
  }, [selectedCountry]);

  useEffect(() => {
    const ct = City.getCitiesOfState(selectedCountry, selectedState);
    setCities(ct);
  }, [selectedState]);

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
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {objectEntries.map(([key, value]: any) => {
                    return <option value={key}>{value?.name}</option>;
                  })}
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
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  {states.map((data, key) => {
                    return <option value={data?.isoCode}>{data?.name}</option>;
                  })}
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
                {/* <input type='text' placeholder='Los Angeles' className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' /> */}
                <select
                  id='country'
                  name='countryList'
                  className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] focus:ring-0'
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  {cities.map((data, key) => {
                    return <option value={data?.name}>{data?.name}</option>;
                  })}
                </select>
              </div>
              <div className='flex w-full flex-col gap-[6px]'>
                <label
                  htmlFor='street'
                  className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                >
                  ZIP / Post code
                </label>
                <input
                  type='number'
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
                  value={cardValue}
                  onChange={(e) => setCardValuetoEnter(e.target.value)}
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
                  value={expiryValue}
                  onChange={(e) => setExpiryValuetoEnter(e.target.value)}
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
                  value={cvv}
                  onChange={(e) => formatCVC(e.target.value)}
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
