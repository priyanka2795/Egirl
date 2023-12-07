import { Modal } from '@components/modal/modal'
import React from 'react'
import Image from 'next/image';
import orangeDeleteIcon from '@/assets/orange-delete-icon.webp'

interface clearBookMarkProp {
    closeModalItem?: any
    heading: string;
    paragraph: string;
    setClearChat?: any;
    setMoreOptionDropdown?: any;
}
const ClearBookMarkModal = ({closeModalItem, heading, paragraph, setClearChat, setMoreOptionDropdown}: clearBookMarkProp) => {
    const handleCancelButton = () => {
        if(heading === 'Clear chat history') {
            closeModalItem(false);
            setMoreOptionDropdown(false);
        } else {
            closeModalItem(false);
        }
    }

    const handleClearButton = () => {
        if(heading === 'Clear chat history') {
            closeModalItem(false);
            setClearChat(true);
            setMoreOptionDropdown(false)
        } else {
            closeModalItem(false);
        }
    }


  return (
    <Modal
    open={true}
    modalClassName='flex flex-col h-max  max-w-[400px] w-full rounded-[20px] bg-[#121212] overflow-hidden mt-10 mb-10'
    closeModal={() => closeModalItem(false)}
    modalOverlayStyle='!bg-black/80' 
  > 
      <>
        <div className='flex px-10 py-14'>
            <div className='flex flex-col items-center gap-4'>
                <div className='flex w-[80px] h-[80px] px-6 py-[26px] justify-center items-center rounded-[100px] bg-[#FF5336]/[0.16]'>
                    <div className='w-8 h-8'>
                        <Image className='w-full h-full' src={orangeDeleteIcon} alt={''} />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-white text-center text-[22px] font-bold leading-[32px]'>{heading}</div>
                    <div className='text-[#979797] text-center text-[15px] font-normal leading-5'>{paragraph}</div>
                </div>
            </div>
        </div>

        <div className='flex gap-3 px-6 py-4'>
            <button className='w-1/2 flex px-5 py-[13px] rounded-[14px] border border-white/[0.32] justify-center text-white text-[16px] font-bold leading-[22px]' onClick={handleCancelButton}>Cancel</button>
            <button className='w-1/2 flex px-5 py-[13px] rounded-[14px] bg-[#FF5336] text-white text-[16px] font-bold leading-[22px] justify-center' onClick={handleClearButton}>Clear</button>
        </div>
    </>
  </Modal>
  )
}

export default ClearBookMarkModal
