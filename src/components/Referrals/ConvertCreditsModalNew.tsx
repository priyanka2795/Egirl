import React, { useState } from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import crossIcon from '@/assets/xmark (1).webp';
import dollarSign from '@/assets/dollar-sign.webp';
import coin from '@/assets/coin.webp';
import arrowDown from '@/assets/arrow-sm-down.webp';
import ConfirmConversionModal from './ConfirmConversionModal';


const button = [
  {
    text: '25%'
  },
  {
    text: '50%'
  },
  {
    text: '75%'
  },
  {
    text: '100%'
  },
];


interface ConvertCreditsModalProp{
  closeConvertCredits: React.Dispatch<React.SetStateAction<boolean>>
  confirmModal: React.Dispatch<React.SetStateAction<boolean>>
  heading: string;
  available: string;
  amount: string;
  buttonText: string;
  analyticsPage?: any;
  setAnalyticsPage?: any;
}

const ConvertCreditsModal = ({closeConvertCredits , analyticsPage, setAnalyticsPage, confirmModal, heading, available, amount, buttonText}: ConvertCreditsModalProp) => {
  const [inputLength, setinputLength] = useState(0);
  // const [confirmModal, setconfirmModal] = useState(false);
  const [convertedCoin, setconvertedCoin] = useState(0.00);

  const checkLength = (event:any) => {
    setinputLength(event.target.value.length);
    setconvertedCoin(event.target.value*10);
  }

  const handleModal = () =>{
    confirmModal(true) ,
   setTimeout(() =>{
    closeConvertCredits(false);
   },400)
  }


  return (
    <>
    <div>
      <Modal
            open={true}
            modalClassName='flex flex-col w-full rounded-2xl h-max bg-[#121212] max-w-[400px] confirm'
            closeModal={() => closeConvertCredits(false)}
            modalOverlayStyle='!bg-black/80'
        >
          <div className='flex justify-between p-6 border-b border-white/[0.08]'>
            <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>{heading}</div>
            <div className='w-6 h-6' onClick={() => {closeConvertCredits(false)}}>
              <Image className='w-full h-full' src={crossIcon} alt={''} />
            </div>
          </div>

          <div className='flex flex-col gap-10 px-8 py-6'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                  <div className='text-[#979797] text-[15px] font-semibold leading-5'>{available}</div>
                  <div className='text-[#FFFFFF] text-[15px] font-semibold leading-5'>{amount}</div>
                </div>
                <div className='relative flex flex-col gap-2'>
                  <div className='flex px-4 py-3 rounded-[14px] bg-white/[0.05]'>
                    <div className='w-6 h-6'>
                      <Image className='w-full h-full' src={dollarSign} alt={''} /> 
                    </div>
                    <input type='number' id='input' onChange={checkLength} placeholder={'0.00'} className='h-0 mt-1 placeholder:text-[#979797] text-[#979797] focus:ring-0 text-15px font-normal leading-6 bg-transparent border-none'/>
                  </div>
                  {analyticsPage ? '' : 
                  <>
                  <div className='flex px-4 py-3 rounded-[14px] bg-white/[0.05]'>
                  <div className='w-6 h-6'>
                    <Image className='w-full h-full' src={coin} alt={''} /> 
                  </div>
                  <input type='number' value={convertedCoin > 0 ? convertedCoin : '0.00'} placeholder={'0.00'} className='h-0 mt-1 text-[#979797] focus:ring-0 text-15px font-normal leading-6 bg-transparent border-none'/>
                </div>
                <div className='absolute flex p-[6px] top-[33px] left-[149px] rounded-[100px] border-2 border-[#1A1A1A] bg-[#272727]'>
                    <Image className='w-5 h-5' src={arrowDown} alt={''} />
                  </div>
                </>
                  }
                  
                </div>
              </div>
              <div className='grid grid-cols-2 gap-2'>
                {button.map((item) => {
                  return(
                    <button className='flex justify-center items-center rounded-[12px] border border-white/[0.32] text-[#FFFFFF] text-[14px] font-bold leading-5 px-4 py-[10px]'>{item.text}</button>
                  );
                })}
              </div>
            </div>
            <button className={`flex items-center justify-center px-6 py-4 rounded-[16px] text-[18px] font-bold leading-6 ${inputLength > 0 ? 'bg-[#5848BC] text-[#FFFFFF]' : 'bg-[#515151] text-[#979797] pointer-events-none'}`} onClick={() =>{handleModal()}}>{buttonText}</button>
          </div>
      </Modal>
    </div>
    </>
  )
}

export default ConvertCreditsModal
