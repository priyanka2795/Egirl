import { Modal } from '@components/modal/modal'
import Image from 'next/image'
import React from 'react'
import cameraIcon from '@/assets/camera-icon.png';
import avatar from '@/assets/avatar.webp';
import CloseIcon from '@/assets/svgImages/close-icon.svg';

interface DeleteCollectionModalProp{
    closeDeleteModal:any
    closeDropdown?:any
}
const DeleteCollection = ({closeDeleteModal , closeDropdown}: DeleteCollectionModalProp) => {
  return (
    <Modal
    open={true}
    modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[468px]'
    // closeModal={() => closeModalItem(false)}
    closeModal={() => {closeDeleteModal(false) , closeDropdown('')}}
    modalOverlayStyle='!bg-black/80'
  >    
  <div>  
     <div className='flex justify-between w-full gap-2 p-6 border-b border-white/[0.08]'>
        <div className='flex flex-col items-start gap-1 text-white text-lg font-bold w-[286px]'>Delete collection
        </div>           
            <div className="flex top-[7px] items-start gap-4 w-[24px] h-[24px] object-contain cursor-pointer" onClick={() => {closeDeleteModal(false) ,closeDropdown('')}}>
                <CloseIcon/>
            </div>           
    </div>

        <div className='flex items-center w-full gap-4 px-6 pt-6 pb-3'>
           <p className="text-base max-w-[290px] w-full text-center mx-auto">When you delete this collection, the models will still be saved</p>
        </div>

        <div className='w-full px-6 pt-5 pb-6'>
            <div className='flex gap-3 w-ful'>
                <button className='rounded-[14px] w-1/2 px-[20px] py-[11px] border border-white/[32] text-base font-bold' onClick={() => {closeDeleteModal(false), closeDropdown('')}}>Cancel</button>
                <button className='rounded-[14px] w-1/2 px-[20px] py-[11px] bg-[#FF5336] text-base text-white font-bold' onClick={() => {closeDeleteModal(false) , closeDropdown('')}}>Delete</button>
            </div>
        </div>    
  
    
  </div>
  
  </Modal>
  )
}

export default DeleteCollection
