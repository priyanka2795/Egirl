//@ts-nocheck
import Image from 'next/image';
import React from 'react';
import greenCheck from '@/assets/check-icon-green.webp';
import crossIcon from '@/assets/xmark4.webp';
import { VoiceGenerations } from './GenerationInterface';

interface TextEditProp {
  editedText?: string;
  setEditedText: (value: string) => void;
  setShowEditedText?: (value: string) => void;
  voiceGenerations?: any;
  activeIndex: number;
  setTextEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const TextEdit = ({
  setTextEdit,
  editedText,
  setEditedText,
  setShowEditedText,
  voiceGenerations,
  activeIndex
}: TextEditProp) => {
  return (
    <div className='flex gap-2'>
      <input
        type='text'
        defaultValue={voiceGenerations[activeIndex].text}
        onChange={(e) => {
          setEditedText(e.target.value);
        }}
        placeholder='Type something'
        className='w-[258px] border-none bg-transparent p-0 text-[14px] font-normal leading-[18px] text-[#979797] placeholder:text-[#979797] focus:ring-0'
      />
      <div
        className='w-5 h-5'
        onClick={() => {
          (voiceGenerations[activeIndex].text = editedText), setTextEdit(false);
        }}
      >
        <Image className='w-full h-full' src={greenCheck} alt={''} />
      </div>
      <div
        className='w-5 h-5'
        onClick={() => {
          setTextEdit(false);
        }}
      >
        <Image className='w-full h-full' src={crossIcon} alt={''} />
      </div>
    </div>
  );
};

export default TextEdit;

{
  /* <div className='flex gap-2'>
        <input type='text' onChange={(e) => setEditedText(e.target.value)} className='bg-transparent border-none h-max focus:ring-0 text-[14px] font-normal leading-[18px] text-[#979797] placeholder:text-[#979797] placeholder:text-[14px] w-[258px] p-0' placeholder='hello everyone my name is Mica-chan'/>
        <div className='w-5 h-5' onClick={() => {setShowEditedText(true), setEditText(false)}}>
          <Image className='w-full h-full' src={greenCheck} alt={''} />
        </div>
        <div className='w-5 h-5' onClick={() => {setEditText(false), setShowEditedText(false)}}>
          <Image className='w-full h-full' src={crossIcon} alt={''} />
        </div>
    </div> */
}
