import { Modal } from '@components/modal/modal';
import React from 'react'


interface ConfirmConversionProp{
    closeConfirmModal: React.Dispatch<React.SetStateAction<boolean>>
}
const ConfirmConversionModal = ({closeConfirmModal}:ConfirmConversionProp) => {
  return (
    <div>
      <Modal
            open={true}
            modalClassName='flex flex-col w-full rounded-2xl h-max bg-[#121212] max-w-[400px]'
            closeModal={() => closeConfirmModal(false)}
            modalOverlayStyle='!bg-black/80'
        >
            <div className='flex flex-col items-center justify-center gap-10 px-10 py-6'>
                <div></div>
            </div>
            <div></div>
        </Modal>
    </div>
  )
}

export default ConfirmConversionModal;
