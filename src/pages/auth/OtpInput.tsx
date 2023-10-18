import React, { useState, useEffect, useRef } from 'react';
import { useMemo } from 'react';
interface OTPInputProps {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
}

const OTPInput = ({ value, valueLength, onChange }: OTPInputProps) => {
  const RE_DIGIT = new RegExp(/^\d+$/);

  const valueItems = useMemo(() => {
    const valueArray = value.split('');
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push('');
      }
    }

    return items;
  }, [value, valueLength]);

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value;
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== '') {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : ' ';

    const targetValueLength = targetValue.length;
    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1);

      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      const nextElementSibling =
        target.nextElementSibling as HTMLInputElement | null;

      if (nextElementSibling) {
        nextElementSibling.focus();
      }
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);

      target.blur();
    }
  };

  const inputOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target as HTMLInputElement;
    const targetValue = target.value;

    if (e.key === 'Backspace' && targetValue === '') {
      const previousElementSibling =
        target.previousElementSibling as HTMLInputElement | null;

      if (previousElementSibling) {
        previousElementSibling.focus();
      } else {
        onChange(value.slice(0, -1));
      }
    }
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    target.setSelectionRange(0, target.value.length);
  };

  return (
    <>
      {valueItems.map((digit, idx) => (
        <input
          key={idx}
          type='text'
          className='h-[80px] w-[64px] rounded-lg border-none bg-[#FFFFFF0D] text-center text-[36px] focus:border-[#5848BC] focus:ring-[#5848BC] active:border-[#5848BC]'
          inputMode='numeric'
          autoComplete='one-time-code'
          pattern='\d{1}'
          maxLength={valueLength}
          value={digit}
          onChange={(e) => inputOnChange(e, idx)}
          onKeyDown={inputOnKeyDown}
          onFocus={inputOnFocus}
        />
      ))}
    </>
  );
};

export default OTPInput;
