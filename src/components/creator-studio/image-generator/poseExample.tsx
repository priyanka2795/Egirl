import React from 'react'
import { Modal } from '@components/modal/modal'
import Image from 'next/image'
import CloseIcon from '../../../../public/assets/xmark (1).png';
import Brush from '../../../../public/assets/paintbrush-alt.png';
import Image1 from '../../../../public/assets/inpaint-Image.png';
import PoseImg from '../../../../public/assets/poseimg.png';

interface PoseExample {
    PoseExampleClose: any;

}
const PoseExample = ({ PoseExampleClose }: PoseExample) => {
    return (
        <Modal
            open={true}
            modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[516px] py-8'
            closeModal={() => PoseExampleClose(false)}
            modalOverlayStyle='!bg-black/80'
        >
            {/* Header */}
            <div className='flex justify-between items-center border-b-white/[0.08] border-white/[0.08] border-b px-6 pb-6'>
                <h5 className='text-lg font-bold'>
                    Pose example
                </h5>
                <button className='w-[24px] h-[24px]' onClick={() => PoseExampleClose(false)}>
                    <Image src={CloseIcon} className='' />
                </button>
            </div>

            <div className='px-6 pt-6'>
                <div className='rounded-[14px] bg-[#FFFFFF0D] overflow-hidden'>
                    <div className=''>
                        <Image src={PoseImg} className='w-full h-full object-cover' />
                    </div>
                    <div className='px-5 py-4'>
                        <h5 className='text-[15px] font-semibold'>Pose mode</h5>
                        <p className='text-[#979797] text-[13px] '>Pose mode helps you put your Egirl in the pose of your choosing.</p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default PoseExample