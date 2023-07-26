import React , {useState} from 'react';
import Image from 'next/image';
import creditCard from '../../../public/assets/credit-card.png'
import circleInformation from '../../../public/assets/circle-information2.png'
import discoverCard from '../../../public/assets/discover-card.png'
import jcbCard from '../../../public/assets/jcb-card.png'
import maestroCard from '../../../public/assets/maestro-card.png'
import masterrCard from '../../../public/assets/master-card.png'
import visaCard from '../../../public/assets/visa-card.png'
import Success from './SuccessPage';
import Error from './Error';
import DeleteModal from './DeleteModal';

const AddCard = () => {
    const [deleteCardState , setDeleteCardState] = useState(false)
  return (
    <>
    <div className='flex'>
        <form>
        <div className='border-r border-white/[0.08] bg-[#121212] w-full h-max'>
            <div className='w-full px-8 pt-[18px] pb-[14px] border-b border-white/[0.08]'>
                <div className='flex gap-3'>
                    <div className='px-4 py-2 rounded-[12px] bg-white/[0.16] text-[#FFFFFF] text-[15px] font-bold leading-5'>Add card</div>
                    <div className='px-4 py-2 rounded-[12px] text-[#979797] text-[15px] font-bold leading-5'>Latest transactions</div>
                </div>
            </div>
            
            <div className='flex flex-col gap-10 p-8'>
                <div className='flex flex-col gap-6'>
                    <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Billing details</div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-[6px] w-full'>
                                <label htmlFor="country" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Country</label>
                                <select id="country" name="countryList" className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none text-[#979797] text-[15px] font-normal leading-6'>
                                        <option value="america">🇺🇸 America</option>
                                        <option value="america">🇺🇸 America</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-[6px] w-full'>
                                <label htmlFor="country" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>State / Province</label>
                                <select id="country" name="countryList" className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none text-[#979797] text-[15px] font-normal leading-6'>
                                    <option value="california">California</option>
                                    <option value="california">California</option>
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
                                <input type='text' placeholder='Los Angeles' className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' />
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
                                <input type='text' placeholder='xxxx xxxx xxxx xxxx' className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' />
                            </div>
                            <div className='flex flex-col gap-[6px] w-full'>
                                <label htmlFor="street" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Name on card</label>
                                <input type='text' placeholder='Name' className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' />
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-[6px] w-full'>
                                <label htmlFor="street" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Expiration</label>
                                <input type='text' placeholder='mm / yy' className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' />
                            </div>
                            <div className='flex flex-col gap-[6px] w-full'>
                                <label htmlFor="street" className='text-[#979797] text-[13px] font-semibold leading-[18px]'>CVC</label>
                                <input type='text' placeholder='xxx' className='px-4 py-3 rounded-[14px] bg-white/[0.05] w-full focus:ring-0 border-none placeholder:text-[#979797] text-[#979797] text-[15px] font-normal leading-6' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <input
                            className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                            type='checkbox'
                        />
                        <div className='text-[#979797] text-[14px] font-normal leading-[18px]'>Tick here to confirm that you are at least 18 years old and the age of majority in your place of residence</div>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex gap-2 p-4 rounded-[14px] border border-white/[0.16]'>
                        <div className='w-5 h-5'>
                            <Image className='object-contain w-full h-full' src={circleInformation} alt={''} />
                        </div>
                        <div className='text-[#FFFFFF] text-[13px] font-normal leading-[18px]'>Egirls will make a one-time charge of $0.10 when adding your payment card. The charges on your credit card statement will appear as "Egirls".</div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-start justify-center gap-4'>
                            <Image className='w-[50px] h-[30px]' src={discoverCard} alt={''} />
                            <Image className='w-[50px] h-[30px]' src={jcbCard} alt={''} />
                            <Image className='w-[50px] h-[30px]' src={maestroCard} alt={''} />
                            <Image className='w-[50px] h-[30px]' src={masterrCard} alt={''} />
                            <Image className='w-[50px] h-[30px]' src={visaCard} alt={''} />
                        </div>
                        <div className='text-center text-[#515151] text-[14px] font-normal leading-[18px]'>Fenix International Limited, 9th Floor, 107 Cheapside, London, EC2V 6DN</div>
                    </div>
                </div>
            </div>
            <div className='flex items-end justify-end px-8 py-6'>
                <button type='submit' className='px-5 py-[13px] flex justify-center items-center rounded-[14px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-bold leading-[22px]'>Add card</button>
            </div>
         
        </div>
        </form>

        <div className='flex flex-col gap-4 p-4'>
            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Added cards</div>
            <div className='flex flex-col items-center justify-center gap-3 px-6 py-14 rounded-[16px] bg-white/[0.05]'>
                <div className='flex p-5 bg-white/[0.05] rounded-full'>
                    <Image className='w-6 h-6' src={creditCard} alt={''} />
                </div>
                <div className='text-[creditCard] text-center text-[14px] font-semibold leading-[18px]'>Added cards will be displayed here</div>
            </div>
        </div>
    </div>
    <Success />
    <Error />
    <p onClick={() => setDeleteCardState(true)}>delete card</p>
    {deleteCardState &&
      <DeleteModal closeDeleteModal={setDeleteCardState}/>
    }
  
    </>
  )
}

export default AddCard;
