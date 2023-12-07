import React, { useState } from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import crossIcon from '@/assets/xmark (1).webp';
import dollarSign from '@/assets/dollar-sign.webp';
import coin from '@/assets/coin.webp';
import arrowDown from '@/assets/arrow-sm-down.webp';
import ConfirmConversionModal from './ConfirmConversionModal';
import { log } from 'node:console';

const button = [
  {
    text: '0',
    amount: 0
  },
  {
    text: '25%',
    amount: 5530.375
  },
  {
    text: '50%',
    amount: 11060.75
  },
  {
    text: '75%',
    amount: 16591.125
  },
  {
    text: '100%',
    amount: 22121.5
  }
];

interface ConvertCreditsModalProp {
  closeConvertCredits: React.Dispatch<React.SetStateAction<boolean>>;
  confirmModal: React.Dispatch<React.SetStateAction<boolean>>;
  heading: string;
  available: string;
  amount: string;
  buttonText: string;
  analyticsPage?: boolean;
  setAnalyticsPage?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConvertCreditsModal = ({
  closeConvertCredits,
  analyticsPage,
  setAnalyticsPage,
  confirmModal,
  heading,
  available,
  amount,
  buttonText
}: ConvertCreditsModalProp) => {
  const [inputLength, setinputLength] = useState(0);
  const [convertedCoin, setconvertedCoin] = useState(0.0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [percentAmount, setPercentAmount] = useState(false);

  const checkLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as unknown as { value: number };

    setPercentAmount(false);
    setinputLength(event.target.value.length);

    setInputValue(value);
    setconvertedCoin(value * 10);
  };

  const handleModal = () => {
    confirmModal(true),
      setTimeout(() => {
        closeConvertCredits(false);
      }, 400);
  };
  let totalAmount = amount.replace(/\,/g, '');
  var totalAmountNum = Number(totalAmount);
  console.log(
    'amount:',
    totalAmount,
    'inputValue:',
    inputValue,
    inputValue > totalAmountNum ? 'true' : 'false'
  );

  return (
    <>
      <div>
        <Modal
          open={true}
          modalClassName='flex flex-col w-full rounded-2xl h-max bg-[#121212] max-w-[400px] confirm'
          closeModal={() => closeConvertCredits(false)}
          modalOverlayStyle='!bg-black/80'
        >
          <div className='flex justify-between border-b border-white/[0.08] p-6'>
            <div className='text-[18px] font-bold leading-6 text-[#FFFFFF]'>
              {heading}
            </div>
            <div
              className='w-6 h-6'
              onClick={() => {
                closeConvertCredits(false);
              }}
            >
              <Image className='w-full h-full' src={crossIcon} alt={''} />
            </div>
          </div>

          <div className='flex flex-col gap-10 px-8 py-6'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                  <div className='text-[15px] font-semibold leading-5 text-[#979797]'>
                    {available}
                  </div>
                  <div className='text-[15px] font-semibold leading-5 text-[#FFFFFF]'>
                    {amount}
                  </div>
                </div>
                <div
                  className={`relative flex flex-col gap-2 rounded-[14px] border ${
                    inputValue > totalAmountNum
                      ? 'border-[#FF5336]'
                      : 'border-transparent'
                  }`}
                >
                  <div className='flex rounded-[14px] bg-white/[0.05] px-4 py-3'>
                    <div className='w-6 h-6'>
                      <Image
                        className='w-full h-full'
                        src={dollarSign}
                        alt={''}
                      />
                    </div>

                    <input
                      type='number'
                      value={
                        percentAmount ? button[activeIndex].amount : inputValue
                      }
                      id='input'
                      onChange={checkLength}
                      placeholder={'0.00'}
                      className='text-15px mt-1 h-0 border-none bg-transparent font-normal leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                    />
                  </div>
                  {analyticsPage ? (
                    ''
                  ) : (
                    <>
                      <div className='flex rounded-[14px] bg-white/[0.05] px-4 py-3'>
                        <div className='w-6 h-6'>
                          <Image
                            className='w-full h-full'
                            src={coin}
                            alt={''}
                          />
                        </div>
                        <input
                          type='number'
                          value={convertedCoin > 0 ? convertedCoin : '0.00'}
                          placeholder={'0.00'}
                          className='text-15px mt-1 h-0 border-none bg-transparent font-normal leading-6 text-[#979797] focus:ring-0'
                        />
                      </div>
                      <div className='absolute left-[149px] top-[33px] flex rounded-[100px] border-2 border-[#1A1A1A] bg-[#272727] p-[6px]'>
                        <Image className='w-5 h-5' src={arrowDown} alt={''} />
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className='grid grid-cols-2 gap-2'>
                {button.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      {
                        <button
                          key={index}
                          className={`flex items-center justify-center rounded-[12px] first:hidden ${
                            activeIndex === index
                              ? 'border-[#7362C6] text-[#7362C6]'
                              : 'border-white/[0.32] text-[#FFFFFF]'
                          } border px-4 py-[10px] text-[14px] font-bold leading-5`}
                          onClick={() => {
                            setActiveIndex(index),
                              setPercentAmount(true),
                              console.log('>>>', button[activeIndex].amount);
                          }}
                        >
                          {item.text}
                        </button>
                      }
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <button
              className={`flex items-center justify-center rounded-[16px] px-6 py-4 text-[18px] font-bold leading-6 ${
                (inputLength > 0 && inputValue < totalAmountNum) ||
                percentAmount === true
                  ? 'bg-[#5848BC] text-[#FFFFFF]'
                  : 'pointer-events-none bg-[#515151] text-[#979797]'
              }`}
              onClick={() => {
                handleModal();
              }}
            >
              {buttonText}
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ConvertCreditsModal;
