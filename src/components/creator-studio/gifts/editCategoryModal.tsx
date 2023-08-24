import { Modal } from '@components/modal/modal';
import React from 'react'
interface EditCategoryPopup{
  closeModal:any;
}
function EditCategoryModal({closeModal}:EditCategoryPopup) {
  return (
   <>
        <Modal
            open={true}
            modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A]'
            closeModal={() => closeModal(false)}
            modalOverlayStyle='!bg-black/80'
        >
        </Modal>
   </>
  )
}

export default EditCategoryModal;