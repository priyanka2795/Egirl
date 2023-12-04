import Image from 'next/image';
import React, { useState } from 'react';
import arrowDown from '@/assets/arrow-down.webp';
import arrowUp from '@/assets/arrow-up.webp';

interface InputFieldProp {
  labelName: string;
  inputType: string;
  inputPlaceholder: string;
  value: any;
  onChange: any;
}
const InputFieldDesign = ({
  labelName,
  inputType,
  inputPlaceholder,
  value,
  onChange
}: InputFieldProp) => {
  const Fruits = ['American', 'Indian', 'African'];
  const [fruit, setFruit] = useState<boolean>(false);
  const [selectFruit, setSelectFruit] = useState('American');
  return (
    <div className='flex flex-col gap-[6px]'>
      <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
        {labelName}
      </div>

      {inputType === 'text' ? (
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          value={value} // Set the value from the props
          onChange={(e) => onChange(e.target.value)}
          className='font-normal flex rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-white placeholder:text-white focus:ring-0'
        />
      ) : inputType === 'textarea' ? (
        <textarea
          name='postContent'
          value={value} // Set the value from the props
          onChange={(e) => onChange(e.target.value)}
          className='font-normal flex h-[120px] rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-white placeholder:text-white focus:ring-0'
        />
      ) : (
        <>
          {/* <select
            name='selectedFruit'
            value={value} // Set the value from the props
            onChange={(e) => onChange(e.target.value)}
            className='font-normal flex rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-white placeholder:text-white focus:ring-0'
          >
            <option value='apple' >Apple</option>
            <option value='banana' >Banana</option>
            <option value='orange' >Orange</option>
          </select> */}
          <div
            className='relative flex flex-col cursor-pointer '
            onClick={() => setFruit(!fruit)}
          >
            <div
              className={`mt-2 flex justify-between rounded-xl p-3  ${
                fruit
                  ? 'border border-[#515151] bg-transparent'
                  : 'border border-transparent bg-white/[0.05]'
              }`}
            >
              <div className='text-[15px] text-[#FFF]'>{selectFruit}</div>
              <Image
                src={fruit ? arrowUp : arrowDown}
                alt=''
                className='object-cover'
              />
            </div>
            {fruit && (
              <div className='absolute right-0 top-[60px] z-50 w-full rounded-xl bg-[#1E1E1E] px-2 py-3'>
                {Fruits.map((fruits, index) => {
                  return (
                    <div
                      key={index}
                      className={`bg-opacity-10' cursor-pointer rounded-md px-2 py-1 ${
                        selectFruit === fruits
                          ? 'rounded-md bg-white bg-opacity-10'
                          : ''
                      }`}
                      onClick={() => setSelectFruit(fruits)}
                    >
                      {fruits}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default InputFieldDesign;
