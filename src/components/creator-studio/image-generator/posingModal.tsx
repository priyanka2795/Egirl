import { Modal } from '@components/modal/modal'
import Image from 'next/image'
import React, { useState } from 'react'
import CloseIcon from '../../../../public/assets/xmark (1).png';
import SearchIcon from '../../../../public/assets/search-alt (1).png';
import ArrowDown from '../../../../public/assets/chevron-down.png';
import PoseImage from '../../../../public/assets/poseimage1.png';
import PoseImage1 from '../../../../public/assets/poseimage2.png';


interface PosingModal {
    PosingClose: any;

}

const posepresets = [
    {
        pose: 'General poses',
        presetes: [
            {
                img: PoseImage1,
                name: 'Pose 1'
            }
        ]
    }
]
const PosingModal = ({ PosingClose }: PosingModal) => {
    const [posePresetsActive, setPosePresetsActive] = useState(false)

    return (
        <Modal
            open={true}
            modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[1012px] py-8'
            closeModal={() => PosingClose(false)}
            modalOverlayStyle='!bg-black/80'
        >
            {/* Header */}
            <div className='flex justify-between items-center border-b-white/[0.08] border-white/[0.08] border-b px-6 pb-6'>
                <h5 className='text-lg font-bold'>
                    Posing
                </h5>
                <button className='w-[24px] h-[24px]' >
                    <Image src={CloseIcon} className='' />
                </button>
            </div>

            <div className='flex '>
                <div className='flex-1'>


                </div>
                <div className='w-[324px] border-l border-[#FFFFFF0D] ' >
                    <div className=' p-5 flex justify-between items-center'>
                        <h6 className='text-[15px] font-semibold'>Pose presets </h6>
                        <Image src={SearchIcon} className='w-full h-full' />
                    </div>
                    <div className='px-5 flex flex-col gap-[6px]'>
                        <div className={`p-3  max-w-[284px] w-full rounded-[14px] ${posePresetsActive ? 'h-auto bg-[#0000007A]' : 'bg-[#FFFFFF0D] h-[72px] overflow-hidden'} `}>
                            <div className={`flex items-center gap-2 cursor-pointer pb-4`} onClick={() => setPosePresetsActive(!posePresetsActive)}>
                                <div className='!w-12 h-12 overflow-hidden sub-banner rounded-lg'>
                                    <Image src={PoseImage} className='w-full h-full object-cover' />
                                </div>
                                <div className='flex-1 '>
                                    <div className='flex justify-between items-center'>
                                        <p>General poses</p>
                                        <Image src={ArrowDown} className='w-full h-full' />
                                    </div>
                                </div>
                            </div>
                            <div className='border-t border-[#FFFFFF14] pt-2'>
                                <div className='grid grid-cols-2 gap-1'>
                                    {Array(3).fill('0').map(() => (
                                        <div className='relative h-[128px] rounded-lg overflow-hidden sub-banner cursor-pointer'>
                                            <Image src={PoseImage1} className='w-full h-full object-cover' />
                                            <div className='bg-[#0000007A] h-[34px] flex justify-center items-center absolute bottom-0 left-0 w-full'>
                                                <p className='text-[13px] font-semibold'>Pose1</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </Modal >
    )
}

export default PosingModal