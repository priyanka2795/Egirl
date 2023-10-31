import React from 'react';
import Image from 'next/image';
import checkIcon from '../../../../public/assets/check-cs.png';
interface stepProps {
  steps: any;
}
function ApplicationSteps({ steps }: stepProps) {
  console.log('steps---', steps);
  return (
    <div className='flex items-center justify-center gap-2'>
      <div className='flex items-center justify-center gap-2'>
        <div
          className={`flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white/[0.08]`}
        >
          {/* <Image src={checkIcon} alt=""/> */}
        </div>
        <span className='text-[14px] text-white'>Personal information</span>
        <div className='h-[1px] w-[40px] bg-white/[0.08]'></div>
      </div>

      <div className='flex items-center justify-center gap-2'>
        <div
          className={`h-[20px] w-[20px] rounded-full  border border-white/[0.16]`}
        >
          {/* <Image src={checkIcon} alt=""/>  */}
        </div>
        <span className='text-[14px] text-[#515151]'>Contact information</span>
        <div className='h-[1px] w-[40px] bg-white/[0.08]'></div>
      </div>

      <div className='flex items-center justify-center gap-2'>
        <div className='h-[20px] w-[20px] rounded-full border border-white/[0.16]'>
          {/* <Image src={checkIcon} alt=""/> */}
        </div>
        <span className='text-[14px] text-[#515151]'>
          Character information
        </span>
        <div className='h-[1px] w-[40px] bg-white/[0.08]'></div>
      </div>

      <div className='flex items-center justify-center gap-2'>
        <div className='h-[20px] w-[20px] rounded-full border border-white/[0.16]'>
          {/* <Image src={checkIcon} alt=""/> */}
        </div>
        <span className='text-[14px] text-[#515151]'>
          Identity verification
        </span>
        <div className='h-[1px] w-[40px] bg-white/[0.08]'></div>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <div className='h-[20px] w-[20px] rounded-full border border-white/[0.16]'>
          {/* <Image src={checkIcon} alt=""/> */}
        </div>
        <span className='text-[14px] text-[#515151]'>Done</span>
        <div className='h-[1px] w-[0px] bg-white/[0.08] '></div>
      </div>
    </div>
  );
}

export default ApplicationSteps;
// bg-[#5848BC]
