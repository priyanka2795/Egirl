import Image from 'next/image';
import React from 'react';
import confetti from '@/assets/Confetti.webp';
import xMark from '@/assets/xmark-green.webp';

interface CompleteGenerationProp {
  completeGeneration: boolean;
  setCompleteGeneration: React.Dispatch<React.SetStateAction<boolean>>;
}
const CompleteGeneration = ( {completeGeneration, setCompleteGeneration} : CompleteGenerationProp ) => {

  const handleCrossIcon = () => {
    setCompleteGeneration(!completeGeneration);
    console.log(">>>cross", completeGeneration);
    
  }
  console.log(">>>cross", completeGeneration);

  return (
    <div className='absolute -top-[46px] -right-[33px] w-[420px] flex gap-4 p-5 rounded-[14px] border border-[#5AD02E]/[0.16] bg-[#11160F]'>
      <div className='flex p-3 rounded-[100px] bg-[#5AD02E]/[0.08] h-max'>
        <Image src={confetti} alt={''} />
      </div>
      <div className='flex flex-col w-full gap-3'>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between'>
            <div className='text-[#5AD02E] text-[14px] font-semibold leading-[18px]'>Congratulations!</div>
            <Image className='object-contain' onClick={handleCrossIcon} src={xMark} alt={''} />
          </div>
          <div className='text-white text-[14px] font-normal leading-[18px]'>Your generation is complete.</div>
        </div>
        <button className='w-max px-3 py-[7px] flex justify-center items-center rounded-[10px] bg-white/[0.08] text-white text-[12px] font-bold leading-[18px]'>View Model</button>
      </div>
    </div>
  )
}

export default CompleteGeneration;
