import React from 'react';
import Image from 'next/image';
import crossRed from '@/assets/xmark-red.webp';
import { Modal } from '@components/modal/modal';

interface ErrorModalProps{
    closeConfirmModal: React.Dispatch<React.SetStateAction<boolean>>;
    convertCredits: React.Dispatch<React.SetStateAction<boolean>>;
    setShowErrorModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ErrorModal = ({closeConfirmModal, convertCredits, setShowErrorModal} : ErrorModalProps) => {
  return (
    <Modal
    open={true}
    modalClassName='flex flex-col w-full rounded-2xl h-max bg-[#121212] max-w-[400px]'
    closeModal={() => setShowErrorModal(false)}
    modalOverlayStyle='!bg-black/80'
    >
        <div className='flex flex-col items-center gap-4 px-10 py-16'>
                <div className='flex px-6 pt-[26px] pb-6 justify-center items-center bg-[#FF5336]/[0.16] rounded-[100px]'>
                    <Image className='w-8 h-8' src={crossRed} alt={''} />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-center text-[#FFFFFF] text-[22px] font-bold leading-8'>Something went wrong</div>
                    <div className='text-center text-[#979797] text-[15px] font-normal leading-5'>
                        <p>Error code: ######</p>
                        <p>Check your details or try again later</p>
                    </div>
                </div>
            </div>
             <div className='flex gap-3 px-6 py-4'>
             <button className='w-1/2 px-5 py-[13px] justify-center items-center flex rounded-[14px] border border-white/[0.32] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={() => {closeConfirmModal(false),setShowErrorModal(false), convertCredits(true)}}>Cancel</button>
                <button className='w-1/2 px-5 py-[13px] justify-center items-center flex rounded-[14px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={() => {closeConfirmModal(false),setShowErrorModal(false), convertCredits(true)}}>Confirm</button>
             </div>
        
    </Modal>
  )
}

export default ErrorModal
