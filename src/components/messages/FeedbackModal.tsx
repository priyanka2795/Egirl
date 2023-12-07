import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React from 'react';
import xMark from '@/assets/xmark (1).webp'

interface FeedbackModalProps {
    showFeedText: boolean;
    setShowFeedText: any;
    closeModal: any;
    setFeedbackSent: any;
}

const FeedbackModal = ( {showFeedText, setShowFeedText, closeModal, setFeedbackSent} : FeedbackModalProps) => {

    const handleCloseModal = () => {
        closeModal(false);
        // setShowFeedText(false);
    };

    const handleSendButton = () => {
        closeModal(false);
        setFeedbackSent(true);
    };

  return (
    <Modal 
    open={true}
    modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[400px]'
    // closeModal={() => closeModalItem(false)}
    closeModal={() => closeModal(false)}
    modalOverlayStyle='!bg-black/80'
  >
    <div className='flex justify-between p-6 border-b border-white/[0.08]'>
        <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Thanks for your feedback</div>
        <div className='w-6 h-6 cursor-pointer' onClick={handleCloseModal}>
            <Image className='w-full h-full' src={xMark} alt={''} />
        </div>
    </div>
    <div className='flex flex-col gap-6 px-8 py-6'>
        <div className='flex flex-col gap-3'>
            <div className='text-[#979797] text-[15px] font-normal leading-5'>Share your thoughts to help us improve:</div>
            <textarea className='flex h-[100px] pl-4 pr-3 py-3 rounded-[14px] bg-white/[0.05] text-[#FFFFFF] text-[15px] font-normal leading-6 border-none focus:ring focus:ring-transparent resize-none placeholder:text-white' placeholder="The response seemed broken to me, it didn’t make sense"></textarea>
        </div>
        <button className='flex px-5 py-[13px] justify-center items-center rounded-[14px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={handleSendButton}>Send</button>
    </div>
  </Modal>
  )
}

export default FeedbackModal;
