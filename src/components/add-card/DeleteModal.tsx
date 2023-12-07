import Image from 'next/image'
import React from 'react'
import deleteOrange from '@/assets/orange-delete-icon.webp'
import { Modal } from '@components/modal/modal'

interface deleteModalProps{
    closeDeleteModal: React.Dispatch<React.SetStateAction<boolean>> ;
}
const DeleteModal = ({closeDeleteModal}: deleteModalProps) => {
  return (
    <Modal
    open={true}
    modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[400px]'
    closeModal={() => closeDeleteModal(false)}
    modalOverlayStyle='!bg-black/80'
>

        <div className='flex flex-col items-center justify-center w-full px-10 py-12'>
            <div className='flex flex-col items-center gap-4'>
                <div className='px-7 pb-6 pt-[25px] justify-center items-center bg-[#FF5336]/[0.16] rounded-full'>
                    <Image className='' src={deleteOrange} alt={''} />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-center text-[#FFFFFF] text-[22px] font-bold leading-8'>Do you want to delete **1234 card?</div>
                    <div className='text-center text-[#979797] text-[15px] font-normal leading-5'>After deleting, you can add a card again at any time</div>
                </div>
            </div>
        </div>
        <div className='flex w-full gap-3 px-6 py-4'>
            <button className='w-1/2 px-5 py-[13px] flex justify-center items-center rounded-[14px] border border-white/[0.32] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={() => closeDeleteModal(false)}>Cancel</button>
            <button className='w-1/2 px-5 py-[13px] flex justify-center items-center rounded-[14px] bg-[#FF5336] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={() => closeDeleteModal(false)}>Clear</button>
        </div>

    </Modal>
  )
}

export default DeleteModal
