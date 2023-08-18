import React, { useState } from 'react';
import Coin from './svg/coin.svg';
import StarIcon from './svg/star-icon.svg';
import HeartIcon from './svg/heart-icon.svg';
import Image from 'next/image';
import coinImg from "../../../public/assets/Coin-img.png"

const creditData = [
  {
    id: 1,
    coin: 50,
    price: '$4.99',
    text: 'Tokens'
  },
  {
    id: 2,
    coin: 100,
    price: '$9.99',
    text: 'Tokens'
  },
  {
    id: 3,
    coin: 200,
    price: '$19.99',
    text: 'Tokens'
  },
  {
    id: 4,
    coin: 500,
    price: '$49.99',
    text: 'Tokens'
  }
];
const SubscriptionBuyContent = () => {
  const [tokenPrice , setTokenPrice] = useState('$9.99');
  return (
    <>
      <div className='flex items-center justify-between p-8 blue-gradient rounded-xl '>
        <div className='flex items-center gap-4'>
            <div className="w-[60px] h-[56px]">
          {/* <Coin/> */}
          {/* <HeartIcon/> */}
          <Image src={coinImg} alt="" className="object-contain rounded-full" />
            </div>
          <h4 className='text-[26px] font-bold'>Buy Tokens</h4>
        </div>
        <button className='flex h-max items-center gap-1 rounded-[10px] border-none bg-[#5848bc]/[0.48] px-3 py-[7px] text-sm outline-none'>
          <StarIcon />
          One-time payment
        </button>
      </div>

      <div className='grid grid-cols-2 gap-3'>
        {creditData.map((items) => {
          return (
            <div className={`flex gap-6 rounded-[14px] bg-[#1A1A1A] p-5 items-center cursor-pointer border-2 hover:border-[#5848BC]
            ${tokenPrice === items.price ? 'border-[#5848BC]' : 'border-transparent'}`} onClick={() =>{setTokenPrice(items.price)}}> 
              <div className='rounded-[100px] bg-[#252525] w-[72px] h-[72px] flex justify-center items-center'>
               {items.coin}
              </div>
              <div className='flex flex-col'>
                <span className='text-[15px] text-[#979797]'>{items.price}</span>
                <p className='text-[26px] font-bold'>{items.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className='mt-4 w-full rounded-[14px] bg-[#5848BC] py-5 py-[13px] font-bold'>
        Buy Tokens {tokenPrice}
      </button>
    </>
  );
};

export default SubscriptionBuyContent;
