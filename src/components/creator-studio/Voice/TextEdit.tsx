import Image from 'next/image';
import React from 'react';
import greenCheck from '../../../../public/assets/check-icon-green.png';
import crossIcon from '../../../../public/assets/xmark4.png';

interface TextEditProp {
  setEditText: any;
  editedText: any;
  setEditedText: any;
  setShowEditedText: any;
}

const TextEdit = ({setEditText, editedText, setEditedText, setShowEditedText} : TextEditProp) => {
  return (
    <div className='flex gap-2'>
        <input type='text' onChange={(e) => setEditedText(e.target.value)} className='bg-transparent border-none h-max focus:ring-0 text-[14px] font-normal leading-[18px] text-[#979797] placeholder:text-[#979797] placeholder:text-[14px] w-[258px] p-0' placeholder='hello everyone my name is Mica-chan'/>
        <div className='w-5 h-5' onClick={() => {setShowEditedText(true), setEditText(false)}}>
          <Image className='w-full h-full' src={greenCheck} alt={''} />
        </div>
        <div className='w-5 h-5' onClick={() => {setEditText(false), setShowEditedText(false)}}>
          <Image className='w-full h-full' src={crossIcon} alt={''} />
        </div>
    </div>
  )
}

export default TextEdit;
