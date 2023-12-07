import React, { useState } from 'react';
import Coin from './svg/coin.svg';
import StarIcon from './svg/star-icon.svg';
import HeartIcon from './svg/heart-icon.svg';
import Image from 'next/image';
import coinImg from "@/assets/Coin-img.webp"
import Star from './svg/star.svg';
import Token from './svg/token.svg';
import TokenActive from './svg/token-white.svg';
import SuccessPage from '@components/add-card/SuccessPage';



const creditData = [
  {
    id: 1,
    coin: 50,
    price: '$4.99',
    text: '500'
  },
  {
    id: 2,
    coin: 100,
    price: '$9.99',
    text: '1000'
  },
  {
    id: 3,
    coin: 200,
    price: '$19.99',
    text: '2000'
  },
  {
    id: 4,
    coin: 500,
    price: '$49.99',
    text: '5000'
  }
];
interface subscription {
  closeErrorPage: React.Dispatch<React.SetStateAction<boolean>>;
  closeSuccessPage : React.Dispatch<React.SetStateAction<boolean>>;
}
const SubscriptionBuyContent = ({ closeErrorPage ,closeSuccessPage }: subscription) => {
  const [tokenPrice, setTokenPrice] = useState('$9.99');
  return (
    <>

      <div>

        <div className='grid grid-cols-2 gap-3'>
          {creditData.map((items) => {
            return (
              <div className={`gap-6 rounded-[14px] bg-[#1A1A1A] p-5 items-center cursor-pointer border-2 hover:border-[#5848BC]
            ${tokenPrice === items.price ? 'border-[#5848BC]' : 'border-transparent'}`} onClick={() => { setTokenPrice(items.price) }}>
                <div className='flex items-center justify-between '>
                  <p className='text-[15px] text-[#979797]'>{items.price}</p>
                  {items.price === '$9.99' ? <div className='bg-[#5848BC3D] text-xs text-white py-1 px-2 rounded-full flex items-center gap-1'><Star />Popular</div> : ''
                  }
                </div>

                <div className='flex items-center gap-3'>
                {tokenPrice === items.price ?<TokenActive /> :<Token /> }
                  
                  
                  <p className='text-[26px] font-bold'>{items.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button className='mt-4 w-full rounded-[14px] bg-[#5848BC] py-[13px] font-bold' onClick={() => closeErrorPage(true)}>
          Buy Tokens {tokenPrice}
        </button>
        {/* <button onClick={() => closeSuccessPage(true)} >Success</button> */}
      </div>

    </>
  );
};

export default SubscriptionBuyContent;
