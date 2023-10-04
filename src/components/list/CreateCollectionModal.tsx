import { Modal } from '@components/modal/modal'
import React ,{useState} from 'react'
import CloseIcon from '../../../public/assets/svgImages/close-icon.svg';

interface CollectionModalProp{
    closeModalItem: any;
}
const CreateCollectionModal = ({closeModalItem} : CollectionModalProp) => {
  return (
    <Modal
    open={true} 
    modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[468px]'
    closeModal={() => closeModalItem(false)}
    modalOverlayStyle='!bg-black/80'
  >    
  
    <div className='flex justify-between w-full p-6 border-b border-white/[0.08] items-center'>
        <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Custom List</div>
        <div className='w-[24px] h-[24px] object-contain' onClick={() => closeModalItem(false)}>
            <CloseIcon/>
        </div> 
    </div>

    <div className='flex flex-col w-full gap-6 px-6 pt-3 pb-6'>
        <div className='flex flex-col gap-[6px]'>
            <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Name of List</div>
            <input type='text' placeholder='Cat girls' className='px-4 py-3 w-full bg-white/[0.05] rounded-[14px] text-[#FFFFFF] text-[15px] font-normal leading-6 focus:ring-0 border-none placeholder:text-white'/>
        </div>
        <div className='flex gap-[12px] w-full'>
            <button className='rounded-[14px] w-1/2 px-5 py-[13px] border border-white/[0.32] text-white text-[16px] font-bold leading-[22px]' onClick={() => closeModalItem(false)}>Cancel</button>
            <button className='rounded-[14px] w-1/2 px-5 py-[13px] bg-[#5848BC] text-white text-[16px] font-bold leading-[22px]' onClick={() => closeModalItem(false)}>Create</button>
        </div>
    </div>
  </Modal>
  )
}

export default CreateCollectionModal;
