import React from 'react';

interface InputFieldProp {
  labelName: string;
  inputType: string;
  inputPlaceholder: string;
}
const InputFieldDesign = ({
  labelName,
  inputType,
  inputPlaceholder
}: InputFieldProp) => {
  return (
    <div className='flex flex-col gap-[6px]'>
      <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
        {labelName}
      </div>

      {inputType === 'text' ? (
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          className='font-normal flex rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-white placeholder:text-white focus:ring-0'
        />
      ) : inputType === 'textarea' ? (
        <textarea
          name='postContent'
          className='font-normal flex h-[120px] rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-white placeholder:text-white focus:ring-0'
        />
      ) : (
        <>
          <select
            name='selectedFruit'
            className='font-normal flex rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-white placeholder:text-white focus:ring-0'
          >
            <option value='apple'>Apple</option>
            <option value='banana'>Banana</option>
            <option value='orange'>Orange</option>
          </select>
        </>
      )}
    </div>
  );
};

export default InputFieldDesign;
