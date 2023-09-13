import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React from 'react'
import PoseImageSelect from '../../../../public/assets/poseimageselect.png';
import CloseIcon from '../../../../public/assets/xmark-large.png';


interface PosingPreviewModal {
    PosingPreviewClose: any;
    PoseCreated: any;
}
const PosingPreviewModal = ({ PosingPreviewClose, PoseCreated }: PosingPreviewModal) => {
    return (
        <Modal
            open={true}
            modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[1012px] relative'
            closeModal={() => PosingPreviewClose(false)}
            modalOverlayStyle='!bg-black/80'
        >
            <Image src={PoseImageSelect} className='w-full h-full ' />
            <div className='absolute top-6 right-6'>
                <button className='w-[24px] h-[24px]' onClick={() => PosingPreviewClose(false)}>
                    <Image src={CloseIcon} className='' />
                </button>
            </div>
            <div className='h-[96px] bg-[#00000066] w-full absolute bottom-0 left-0 p-6'>
                <div className='flex justify-end items-center gap-3 font-semibold'>
                    <button className='rounded-[14px] px-5 py-3 bg-[#FFFFFF14]' onClick={() => PosingPreviewClose(false)}>Return to edit</button>
                    <button className='bg-[#5848BC] rounded-[14px] px-5 py-3' onClick={() => PoseCreated()}>Create</button>
                </div>
            </div>
        </Modal>
    )
}

export default PosingPreviewModal