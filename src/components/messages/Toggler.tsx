import React from 'react';
import InfoIcon from './svg/info-icon.svg';
interface Props {
  handleToggleState: () => void;
  toggleState: boolean;
  toggleText: string;
}
const Toggle = ({ handleToggleState, toggleState, toggleText }: Props) => {
  return (
    <div className='flex items-center gap-2'>
      <div
        onClick={handleToggleState}
        className={`toggler h-6 w-10 cursor-pointer rounded-2xl pt-0.5 shadow ${
          toggleState ? 'bg-[#5848BC]' : 'bg-[#8d8d8d]'
        }`}
      >
        <div
          className={`h-5 w-5 rounded-full bg-white transition ${
            toggleState ? 'ml-[18px] ' : 'ml-[2px]'
          }`}
        />
      </div>
      <h4 className='text-sm text-white'>{toggleText}</h4>
      <InfoIcon />
    </div>
  );
};

export default Toggle;
