import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import discoverCard from '../../../public/assets/discover-card.png'
import jcbCard from '../../../public/assets/jcb-card.png'
import maestroCard from '../../../public/assets/maestro-card.png'
import masterrCard from '../../../public/assets/master-card.png'
import visaCard from '../../../public/assets/visa-card.png'
import circleInformation from '../../../public/assets/circle-information2.png'
import CountryFlag from 'react-country-flag';
// Interfaces and types
import type {
    ICountry,
    ICountryData,
    ILanguage,
    TContinentCode,
    TCountryCode,
    TLanguageCode,
} from 'countries-list'

// Main data and utils
import { continents, countries, languages } from 'countries-list'
import { ICity, IState, State, City } from 'country-state-city'
import { log } from 'console'

interface AddCardFormProp {
    showSucess: React.Dispatch<React.SetStateAction<boolean>>;
    showError: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddCardForm = ({ showSucess, showError }: AddCardFormProp) => {
    const objectEntries = Object.entries(countries)
    const [selectedCountry, setCountry] = useState<string>('AD')
    const [states, setStates] = useState<IState[]>([])
    const [cities, setCities] = useState<ICity[]>([])
    const [selectedState, setSelectedState] = useState<string>('07')
    const [cardValue, setCardValue] = useState<string>('')
    const [cardValuetoEnter, setCardValuetoEnter] = useState<string>('')
    const [expiryValue, setExpiryValue] = useState<string>('')
    const [expiryValuetoEnter, setExpiryValuetoEnter] = useState<string>('')
    const [cvv ,setCvv] = useState<string>('')
    const formatCardNumber = (input: string) => {
        // Remove all non-digit characters
        if (!input) {
            setCardValue('')
            return
        }
        const digitsOnly = input.replace(/\D/g, '');

        // Add a space after every 4 digits using regex and trim the resulting string
        const formatted = digitsOnly.replace(/(\d{4})/g, '$1 ').trim();

        // Limit to 16 characters (16-digit card number)
        setCardValue(formatted.substr(0, 19))
    }

    const formatExpiration = (input: string) => {
        // Remove all non-digit characters
        const digitsOnly = input.replace(/\D/g, '');

        // Add a slash after two digits for month and limit to 4 characters (MM/YY)
        const formatted = digitsOnly.replace(/^(\d{2})(\d{0,2})/, (match, month, year) => {
            // Ensure month is between 01 and 12
            const validMonth = Math.min(12, Math.max(1, parseInt(month, 10)));
            return `${validMonth.toString().padStart(2, '0')}${year ? `/${year}` : ''}`;
        }).substr(0, 5);

        setExpiryValue(formatted)
    }
    const formatCVC = (input: string) => {
        // Remove all non-digit characters
        const digitsOnly = input.replace(/\D/g, '');
      
        // Limit to maximum 3 digits
        const formatted = digitsOnly.substr(0, 3);
      
        setCvv(formatted)
      }

    useEffect(() => {
        formatCardNumber(cardValuetoEnter)
    }, [cardValuetoEnter])

    useEffect(() => {
        formatExpiration(expiryValuetoEnter)
    }, [expiryValuetoEnter])

    useEffect(() => {
        const st = State.getStatesOfCountry(selectedCountry)
        setStates(st)
    }, [selectedCountry])

    useEffect(() => {
        const ct = City.getCitiesOfState(selectedCountry, selectedState)
        setCities(ct)
    }, [selectedState])

    return (
        <form>
            <div className='flex flex-col gap-10 p-8'>
                <div className='flex flex-col gap-6'>
                    <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Billing details</div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-[6px] w-full'>
                                <label htmlFor="country" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Country</label>
                                <select id="country" name="countryList" className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none text-[#979797] text-[15px] font-normal leading-6' onChange={(e) => setCountry(e.target.value)}>
                                    {objectEntries.map(([key, value]: any) => {
                                        return (
                                            <option value={key}>{value?.name}</option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                            <div className='flex flex-col gap-[6px] w-full'>
                                <label htmlFor="country" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>State / Province</label>
                                <select id="country" name="countryList" className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none text-[#979797] text-[15px] font-normal leading-6' onChange={(e) => setSelectedState(e.target.value)}>
                                    {states.map((data, key) => {
                                        return (
                                            <option value={data?.isoCode}>{data?.name}</option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[6px] w-full'>
                            <label htmlFor="street" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Street</label>
                            <input type='text' placeholder='Enter your street' className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' />
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-[6px] w-full'>
                                <label htmlFor="street" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>City</label>
                                {/* <input type='text' placeholder='Los Angeles' className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' /> */}
                                <select id="country" name="countryList" className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none text-[#979797] text-[15px] font-normal leading-6' onChange={(e) => setSelectedState(e.target.value)}>
                                    {cities.map((data, key) => {
                                        return (
                                            <option value={data?.name}>{data?.name}</option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                            <div className='flex flex-col gap-[6px] w-full'>
                                <label htmlFor="street" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>ZIP / Post code</label>
                                <input type='text' placeholder='Enter your State / Province' className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Card details</div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-[6px] w-full'>
                                <label htmlFor="street" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Card number</label>
                                <input type='text' placeholder='xxxx xxxx xxxx xxxx' className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' value={cardValue} onChange={(e) => setCardValuetoEnter(e.target.value)} />
                            </div>
                            <div className='flex flex-col gap-[6px] w-full'>
                                <label htmlFor="street" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Name on card</label>
                                <input type='text' placeholder='Name' className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' />
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-[6px] w-full'>
                                <label htmlFor="street" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Expiration</label>
                                <input type='text' placeholder='mm / yy' className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' value={expiryValue} onChange={(e) => setExpiryValuetoEnter(e.target.value)} />
                            </div>
                            <div className='flex flex-col gap-[6px] w-full'>
                                <label htmlFor="street" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>CVC</label>
                                <input type='text' placeholder='xxx' className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' value={cvv} onChange={(e) => formatCVC(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className='block custom-checkbox custom-checkbox-circle'>
                        <input
                            className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727] focus:outline-transparent focus:ring-0 focus:outline-0'
                            type='checkbox'
                            value='age'
                            //onChange={handleChange}
                            id='age'
                        />
                        <label className='text-[#979797] text-[14px] font-normal leading-[18px]' htmlFor='age'>Tick here to confirm that you are at least 18 years old and the age of majority in your place of residence</label>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex gap-2 p-4 rounded-[14px] border border-white/[0.16]'>
                        <div className='w-5 h-5'>
                            <Image className='object-contain w-full h-full' src={circleInformation} alt={''} />
                        </div>
                        <div className='text-[#FFFFFF] text-[13px] font-normal leading-[18px]'>The charges on your credit card and banking statements will appear as "Persona Enterprises Inc."</div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-start justify-center gap-4'>
                            <Image className='w-[50px] h-[30px]' src={discoverCard} alt={''} />
                            <Image className='w-[50px] h-[30px]' src={jcbCard} alt={''} />
                            <Image className='w-[50px] h-[30px]' src={maestroCard} alt={''} />
                            <Image className='w-[50px] h-[30px]' src={masterrCard} alt={''} />
                            <Image className='w-[50px] h-[30px]' src={visaCard} alt={''} />
                        </div>
                        {/* <div className='text-center text-[#515151] text-[14px] font-normal leading-[18px]'>Fenix International Limited, 9th Floor, 107 Cheapside, London, EC2V 6DN</div> */}
                    </div>
                </div>
            </div>
            <div className='flex items-end justify-end px-8 py-6'>
                <button onClick={() => showError(true)} className='px-5 py-[13px] flex justify-center items-center rounded-[14px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-bold leading-[22px]'>Add card</button>
                {/* <button className='px-5 py-[13px] ml-2 flex justify-center items-center rounded-[14px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={() => {showSucess(true)}}>Success</button>
            <button className='px-5 py-[13px] ml-2 flex justify-center items-center rounded-[14px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={() => {showError(true)}}>Error</button>  */}
            </div>
        </form>
    )
}

export default AddCardForm;
