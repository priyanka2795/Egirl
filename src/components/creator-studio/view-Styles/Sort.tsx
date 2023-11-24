import React, { useState } from 'react';
import Image from 'next/image';


const Sort = () => {
    const text = ['Default', 'Sort ascending', 'Sort descending'];
    const [activeButton, setActiveButton] = useState<number>(0);
  return (
    <div className='w-[170px] z-10 absolute top-[47px] right-0 px-0 py-1 flex flex-col rounded-[14px] bg-[#1A1A1A]'>
      {text.map((item,index) => {
        return(
            <div key={index} className='flex gap-2 px-4 py-2 cursor-pointer' onClick={() => {setActiveButton(index)}}>
                <div className={`flex w-5 h-5 border rounded-[100px] p-1 ${activeButton === index ? 'border-[#5848BC]' : 'border-white/[0.24]'}`}>
                    <div className={`w-3 h-[10px] rounded-[100px] ${activeButton === index ? 'bg-[#5848BC]' : 'bg-transparent'}`}></div>
                </div>
                <div className='text-white text-[14px] font-normal leading-[18px]'>{item}</div>
            </div>
        );
      })}
    </div>
  )
}

export default Sort;
