import React from 'react'
import { Modal } from '@components/modal/modal'
import Image from 'next/image'
import CloseIcon from '../../../../public/assets/xmark (1).png';
import Brush from '../../../../public/assets/paintbrush-alt.png';
import Image1 from '../../../../public/assets/inpaint-Image.png';
import CheckIcon from '../../../../public/assets/check-icon-grey.png';

interface InpaintingExample {
    CloseModal: any;

}
const InpaintingExample = ({ CloseModal }: InpaintingExample) => {
    return (
        <Modal
            open={true}
            modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[760px] py-8'
            closeModal={() => CloseModal(false)}
            modalOverlayStyle='!bg-black/80'
        >
            {/* Header */}
            <div className='flex justify-between items-center border-b-white/[0.08] border-white/[0.08] border-b px-6 pb-6'>
                <h5 className='text-lg font-bold'>
                    Inpainting example
                </h5>
                <button className='w-[24px] h-[24px]' onClick={() => CloseModal(false)}>
                    <Image src={CloseIcon} className='' />
                </button>
            </div>

            <div className='px-6 pt-6'>
                <div className='flex items-center gap-3'>
                    <div className='rounded-[14px] bg-[#FFFFFF0D] overflow-hidden'>
                        <div className='w-[350px] h-[350px]'>
                            <Image src={Image1} className='w-full h-full object-cover' />
                        </div>
                        <div className='flex items-center gap-3 px-5 py-4'>
                            <div className='w-11 h-11 bg-[#FFFFFF14] rounded-full flex items-center justify-center'>
                                <Image src={Brush} className='w-full h-full' />
                            </div>
                            <div>
                                <h5 className='text-[15px] font-semibold'>Inpaint</h5>
                                <p className='text-[#979797]'>Prompt: turn top white</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-[14px] bg-[#FFFFFF0D] overflow-hidden'>
                        <div className='w-[350px] h-[350px]'>
                            <Image src={Image1} className='w-full h-full object-cover' />
                        </div>
                        <div className='flex items-center gap-3 px-5 py-4'>
                            <div className='w-11 h-11 bg-[#FFFFFF14] rounded-full flex items-center justify-center'>
                                <Image src={CheckIcon} className='w-full h-full' />
                            </div>
                            <div>
                                <h5 className='text-[15px] font-semibold'>Result</h5>
                                <p className='text-[#979797]'>New color</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default InpaintingExample