import React from 'react';
import Image from 'next/image';
import checkIcon from '@/assets/check-cs.webp';
interface stepProps {
  steps: any;
}
function ApplicationSteps({ steps }: stepProps) {
  console.log('steps---', steps);
  
  return (
    <div className='flex items-center justify-center gap-2'>

      <div className='flex items-center justify-center gap-2'>
        <div
          className={`flex h-[20px] w-[20px] items-center justify-center rounded-full ${((steps === 2) || (steps === 3) || (steps === 4) || (steps === 5)) ? "bg-[#5848BC]" : "bg-white/[0.08]"} `}
        >
         {((steps === 2) || (steps === 3) || (steps === 4) || (steps === 5)) ? <Image src={checkIcon} alt=""/> : ""}
        </div>
        <span className='text-[14px] text-white'>Personal information</span>
        <div className='h-[1px] w-[40px] bg-white/[0.08]'></div>
      </div>

      <div className='flex items-center justify-center gap-2'>
        <div
          className={`flex h-[20px] w-[20px] items-center justify-center rounded-full ${(steps === 2) ? "bg-white/[0.08]" :"border border-white/[0.16]"} ${((steps === 3) || (steps === 4) || (steps === 5)) && "bg-[#5848BC] border-none"}`}
        >
         {((steps === 3) || (steps === 4) || (steps === 5)) ? <Image src={checkIcon} alt=""/> : ""}
        </div>
        <span className='text-[14px] text-[#515151]'>Contact information</span>
        <div className='h-[1px] w-[40px] bg-white/[0.08]'></div>
      </div>

      <div className='flex items-center justify-center gap-2'>
        <div className={`flex h-[20px] w-[20px] items-center justify-center rounded-full ${(steps === 3) ? "bg-white/[0.08]" :"border border-white/[0.16]"} ${((steps === 4) || (steps === 5)) && "bg-[#5848BC] border-none"}`}
        >
        {((steps === 4) || (steps === 5)) ? <Image src={checkIcon} alt=""/> : ""}
        </div>
        <span className='text-[14px] text-[#515151]'>
          Character information
        </span>
        <div className='h-[1px] w-[40px] bg-white/[0.08]'></div>
      </div>

      <div className='flex items-center justify-center gap-2'>
        <div className={`flex h-[20px] w-[20px] items-center justify-center rounded-full ${(steps === 4) ? "bg-white/[0.08]" :" border border-white/[0.16]"} ${((steps === 5)) && "bg-[#5848BC] border-none"}`}>
        {(steps === 5) ? <Image src={checkIcon} alt=""/> : ""}
        </div>
        <span className='text-[14px] text-[#515151]'>
          Identity verification
        </span>
        <div className='h-[1px] w-[40px] bg-white/[0.08]'></div>
      </div>
      
      <div className='flex items-center justify-center gap-2'>
        <div className={`flex h-[20px] w-[20px] items-center justify-center rounded-full ${((steps === 5)) ? "bg-[#5848BC]" : "border border-white/[0.16]"}`}>
        {(steps === 5) ? <Image src={checkIcon} alt=""/> : ""}
        </div>
        <span className='text-[14px] text-[#515151]'>Done</span>
        <div className='h-[1px] w-[0px] bg-white/[0.08] '></div>
      </div>
    </div>
  );
}

export default ApplicationSteps;

