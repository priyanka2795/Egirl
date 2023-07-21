import { Modal } from '@components/modal/modal'
import Image from 'next/image'
import React from 'react'
import cameraIcon from '../../../public/assets/camera-icon.png';
import avatar from '../../../public/assets/avatar.png';
import CloseIcon from '../../../public/assets/svgImages/close-icon.svg';

interface EditModalProp{
    closeEditModal: any
}
const EditCollectionModal = ({closeEditModal}: EditModalProp) => {
  return (
    <Modal
    open={true}
    modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[468px]'
    // closeModal={() => closeModalItem(false)}
    closeModal={() => closeEditModal(false)}
    modalOverlayStyle='!bg-black/80'
  >    
  <div>  
     <div className='flex justify-between w-full gap-2 p-6 border-b border-white/[0.08]'>
        <div className='flex flex-col items-start gap-1 text-[#FFFFFF] text-lg font-bold w-[286px]'>Edit collection
        </div>           
            <div className="flex top-[7px] items-start gap-4 w-[24px] h-[24px] object-contain cursor-pointer" onClick={() => closeEditModal(false)}>
                <CloseIcon/>
            </div>           
    </div>

        {/* <div className='flex items-center w-full gap-4 px-6 pt-6 pb-3'>
            <div className='relative'>
                <Image className='w-[72px] h-[72px]' src={avatar} alt={''} />
                <div className="absolute left-[19px] top-[19px] h-4">
                <Image className='w-[16px] h-[16px] bottom-4 right-[51px]' src={cameraIcon} alt={''} />
                </div>
            </div>
            <div className='flex flex-col h-[46px] items-start gap-[2px]'>
                <div className='self-stretch text-[#FFFFFF] text-[15px] font-bold'>Collection Cover</div>
                <div className='text-sm font-normal text-[#979797]'>Click on the photo to edit</div>
            </div>
        </div> */}

        <div className='w-full px-6 pt-3 pb-6'>
            <div className='w-full text-[#979797] text-[13px] font-semibold'>Name of List</div>
            <div className='px-4 py-3 w-full mt-[6px] w-full bg-white/[0.05] rounded-[14px] text-[#FFFFFF] text-[15px] font-normal'>Cat girls</div>
            <div className='flex gap-[12px] w-full mt-[24px]'>
                <button className='rounded-[14px] w-1/2 px-[20px] py-[13px] border border-white/[0.32] text-[16px] font-bold' onClick={() => closeEditModal(false)}>Cancel</button>
                <button className='rounded-[14px] w-1/2 px-[20px] py-[13px] bg-[#5848BC] text-[16px] text-[#FFFFFF] font-bold' onClick={() => closeEditModal(false)}>Save</button>
            </div>
        </div>    
  
    
  </div>
  
  </Modal>
  )
}

export default EditCollectionModal
