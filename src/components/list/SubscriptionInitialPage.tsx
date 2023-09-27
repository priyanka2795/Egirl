import React from 'react';
import Image from 'next/image';

interface SubscriptionInitialPage {
  showContent: any;
  image: any;
  component?: any;
  text?: any;
  buttonText: any;
}

const SubscriptionInitialPage = ({showContent, image, component, text, buttonText}:SubscriptionInitialPage) => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-6'>
        <div className={`flex flex-col items-center justify-center gap-4 ${component === 'bookmarks' ? 'w-[336px]' : 'w-[240px]'} `}>
            <div className='text-center pt-[26px] pb-6 px-6 flex rounded-[100px] bg-white/[0.05] w-max'>
                <Image src={image} alt={''} />
            </div>
            <div className={`text-center text-[#515151] text-[22px] font-bold leading-8 ${component === 'bookmarks' ? 'px-2' : 'px-3'}`}>{text}</div>
        </div>
        <button className='px-5 py-[13px] flex justify-center items-center rounded-[14px] bg-white/[0.08] text-[#979797] text-[16px] font-bold leading-[22px]' onClick={() => {showContent(true)}}>{buttonText}</button>
    </div>
  )
}

export default SubscriptionInitialPage;
