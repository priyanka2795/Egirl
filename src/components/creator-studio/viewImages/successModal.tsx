import React from 'react';
import RightGreen from '../svg/check-double.svg';
import CloseGreen from '../svg/xmark-green.svg';

interface SuccessModal {
  SetToaster: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccessModal = ({ SetToaster }: SuccessModal) => {
  return (
    <div className='w-[380px] rounded-[14px] border border-[#5AD02E29] bg-[#11160F] p-5 '>
      <div className='flex gap-4'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#5AD02E14]'>
          <RightGreen />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center justify-between'>
            <p className='text-[#5AD02E]'>Congratulations!</p>
            <button onClick={() => SetToaster(false)}>
              <CloseGreen />
            </button>
          </div>
          <p>You have added the image to the gifts.</p>
          <button className='w-[83px] rounded-lg bg-[#FFFFFF14] px-3 py-2 text-xs font-bold text-white'>
            View gifts
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
