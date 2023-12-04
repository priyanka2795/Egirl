import Image from 'next/image';
import React, { useState } from 'react';
import arrowLeft from '@/assets/arrow-left-grey.webp';
import messageSquare from '@/assets/message-square-exclamation.webp';
import leftArrow from '@/assets/left-arrow-grey.webp';
import rightArrow from '@/assets/right-arrow-grey.png';
import FeedbackModal from './FeedbackModal';


interface FeedbackTextsProps {
    showFeedText : boolean;
    setShowFeedText: React.Dispatch<React.SetStateAction<boolean>> ;
    setFeedbackSent: any;
}

const FeedbackTexts = ( {showFeedText, setShowFeedText, setFeedbackSent}: FeedbackTextsProps ) => {
    const buttons = ['Repetitive', 'Bad memory', 'Out of character'];
    const [feedbackModal, setFeedbackModal] = useState(false);
    const [activeButton, setActiveButton] = useState('');
    
  return (
    <>
    <div className='flex items-center justify-between w-full mt-3 pl-[47px]'>
        <div className='flex gap-2'>
            <div className='w-5 h-5 mt-2 cursor-pointer' onClick={() => {setShowFeedText(false)}}>
                <Image className='w-full h-full' src={arrowLeft} alt={''} />
            </div>
            {buttons.map((item) => {
                return(
                    <div className={`cursor-pointer flex px-3 py-[7px] justify-center items-center rounded-[10px] border text-[#979797] text-[12px] font-bold leading-[18px] hover:bg-white/[0.08] hover:border-transparent ${activeButton === item ? 'bg-white/[0.08] border-transparent' : 'border-white/[0.32]'}`} onClick={() => {setActiveButton(item), setFeedbackModal(true), setFeedbackSent(true)}}>{item}</div>
                );
            })}
            
            <div className=' cursor-pointer flex px-3 py-[7px] justify-center items-center rounded-[10px] border border-white/[0.32]' onClick={() => {setFeedbackModal(true)}}>
                <Image className='w-4 h-4' src={messageSquare} alt={''} />
            </div>
        </div>
        <div className='flex gap-2'>
            <div className='w-5 h-5'>
                <Image className='w-full h-full' src={leftArrow} alt={''} />
            </div>
            <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>3/3</div>
            <div className='w-5 h-5'>
                <Image className='w-full h-full' src={rightArrow} alt={''} />
            </div>
        </div>
    </div>
    {
        feedbackModal &&
        <FeedbackModal showFeedText={showFeedText} setShowFeedText={setShowFeedText} closeModal={setFeedbackModal} setFeedbackSent={setFeedbackSent}/>
    }
    </>
  )
}

export default FeedbackTexts;
