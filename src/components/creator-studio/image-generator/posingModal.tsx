import { Modal } from '@components/modal/modal'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CloseIcon from '../../../../public/assets/xmark (1).png';
import SearchIcon from '../../../../public/assets/search-alt (1).png';
import ArrowDown from '../../../../public/assets/chevron-down.png';
import ArrowUp from '../../../../public/assets/chevron-up.png';
import PoseImage from '../../../../public/assets/poseimage1.png';
import PoseImage1 from '../../../../public/assets/poseimage2.png';
import PoseImage2 from '../../../../public/assets/poseimage3.png';
import PoseImage3 from '../../../../public/assets/poseimage4.png';
import PoseImageSelect from '../../../../public/assets/poseimageselect.png';
import Rest from '../../../../public/assets/rotate-cw.png';
import Rotate from '../../../../public/assets/rotate.png';
import Backward from '../../../../public/assets/flip-backward.png';
import Forward from '../../../../public/assets/flip-forward.png';
import RestWhite from '../../../../public/assets/rotate-cw-white.png';
import RotateWhite from '../../../../public/assets/rotate-white.png';
import BackwardWhite from '../../../../public/assets/flip-backward-white.png';
import PosingPreviewModal from './posingPreviewModal';
import { ifError } from 'assert';

const posepresets = [
    {
        pose: 'General poses',
        presetes: [
            {
                img: PoseImage1,
                name: 'Pose 1'
            },
            {
                img: PoseImage2,
                name: 'Pose 2'
            },
            {
                img: PoseImage3,
                name: 'Pose 3'
            },
        ]
    },
    {
        pose: 'Standing positions',
        presetes: [
            {
                img: PoseImage1,
                name: 'Pose 1'
            },
            {
                img: PoseImage2,
                name: 'Pose 2'
            },
            {
                img: PoseImage3,
                name: 'Pose 3'
            },
        ]
    },
    {
        pose: 'NSFW positions',
        presetes: [
            {
                img: PoseImage1,
                name: 'Pose 1'
            },
            {
                img: PoseImage2,
                name: 'Pose 2'
            },
            {
                img: PoseImage3,
                name: 'Pose 3'
            },
        ]
    },
    {
        pose: 'Running',
        presetes: [
            {
                img: PoseImage1,
                name: 'Pose 1'
            },
            {
                img: PoseImage2,
                name: 'Pose 2'
            },
            {
                img: PoseImage3,
                name: 'Pose 3'
            },
        ]
    },
    {
        pose: 'Action positions',
        presetes: [
            {
                img: PoseImage1,
                name: 'Pose 1'
            },
            {
                img: PoseImage2,
                name: 'Pose 2'
            },
            {
                img: PoseImage3,
                name: 'Pose 3'
            },
        ]
    },
];

interface PosingModal {
    PosingClose: any;
    SetPosingCreated: any;
    EditPosing: any;
}
const PosingModal = ({ PosingClose, SetPosingCreated, EditPosing }: PosingModal) => {
    const [posePresetsActive, setPosePresetsActive] = useState(null);
    const [posePresets, setPosePresets] = useState(null);
    const [selectPose, setSelectPose] = useState(false);
    const [previewPose, setPreviewPose] = useState(false);
    const [searchPresets, setSearchPresets] = useState(false);

    const AllPosePresets = (index: any) => {
        setPosePresets((prev) => (prev === index ? null : index));
    }
    const PosePresetsItem = (index: any) => {
        setPosePresetsActive((prev) => (prev === index ? null : index));
        setSelectPose(true)
    }
    const PoseCreated = () => {
        SetPosingCreated(true);
        PosingClose(false);
    }
    useEffect(() => {
        if (EditPosing) {
            setSelectPose(true)
        } else {
            setSelectPose(false)
        }
    }, [])


    return (
        <>
            {previewPose ? <PosingPreviewModal PosingPreviewClose={setPreviewPose} PoseCreated={PoseCreated} />
                : <Modal
                    open={true}
                    modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[1012px] py-8'
                    closeModal={() => PosingClose(false)}
                    modalOverlayStyle='!bg-black/80'
                >
                    {/* Header */}
                    <div className='flex justify-between items-center border-b-white/[0.08] border-white/   [0.08] border-b px-6 pb-6'>
                        <h5 className='text-lg font-bold'>
                            {EditPosing ? 'Edit' : ''} Posing
                        </h5>
                        <button className='w-[24px] h-[24px]' onClick={() => PosingClose(false)}>
                            <Image src={CloseIcon} className='' />
                        </button>
                    </div>

                    <div className='flex '>
                        <div className='flex-1 relative sub-banner '>
                            {selectPose ?
                                <Image src={PoseImageSelect} className='w-full max-h-full object-cover' /> : ''}
                            <div className='absolute top-3 right-3 flex items-center gap-2'>
                                <div className='bg-[#000000CC] rounded-full flex items-center gap-1 p-3 cursor-pointer'>
                                    {selectPose ? <Image src={RotateWhite} className='w-full h-full ' /> : <Image src={Rotate} className='w-full h-full ' />
                                    }
                                </div>
                                <div className='bg-[#000000CC]  rounded-[100px] flex items-center gap-1 p-3 cursor-pointer'>
                                    {selectPose ? <Image src={RestWhite} className='w-full h-full' /> : <Image src={Rest} className='w-full h-full' />
                                    }
                                    <p className={`${selectPose ? 'text-white' : 'text-[#FFFFFF7A]'}`}>Reset</p>
                                </div>
                            </div>
                            <div className='bg-[#000000CC] rounded-[100px] flex items-center justify-center gap-3 py-3 px-5 absolute bottom-3 left-3'>
                                {selectPose ? <Image src={BackwardWhite} className='w-full h-full object-cover cursor-pointer' /> :
                                    <Image src={Backward} className='w-full h-full object-cover cursor-pointer' />}
                                <p className='border-r border-[#FFFFFF3D] w-[10px] h-[16px]'></p>
                                <Image src={Forward} className='w-full h-full object-cover cursor-pointer' />
                            </div>
                        </div>
                        
                        <div className='w-[324px] border-l border-[#FFFFFF0D] pb-3' >
                            <div className='px-5 pt-5 pb-3'>
                                <div className='flex justify-between items-center'>
                                    <h6 className='text-[15px] font-semibold'>Pose presets </h6>
                                    {searchPresets ? "" :
                                        <button onClick={() => setSearchPresets(!searchPresets)}><Image src={SearchIcon} className='w-full h-full' /></button>
                                    }
                                </div>
                                {searchPresets &&
                                    <div className='bg-[#FFFFFF0D] rounded-[10px] px-3 h-[40px] flex items-center justify-between gap-[6px] mt-4'>
                                        <Image src={SearchIcon} className='w-full h-full object-cover' />
                                        <input type="text" id='negative' placeholder='Search' className='bg-transparent rounded-[14px] h-12 p-0 border-none active:border-none focus:border-none focus:ring-0 text-white placeholder:text-[#979797]' name='negative' />
                                        <Image src={CloseIcon} className='w-full h-full object-cover cursor-pointer' onClick={() => setSearchPresets(!searchPresets)} />
                                    </div>
                                }

                            </div>
                            <div className='px-5 flex flex-col gap-[6px]'>
                                {posepresets.map((items, index) => (
                                    <div className={`p-3  max-w-[284px] w-full rounded-[14px] ${posePresets === index ? 'h-auto bg-[#0000007A]' : 'bg-[#FFFFFF0D] h-[72px] overflow-hidden'} `}>
                                        <div className={`flex items-center gap-2 cursor-pointer pb-4`} onClick={() => AllPosePresets(index)}>
                                            <div className='!w-12 h-12 overflow-hidden sub-banner rounded-lg'>
                                                <Image src={PoseImage} className='w-full h-full object-cover' />
                                            </div>
                                            <div className='flex-1 '>
                                                <div className='flex justify-between items-center'>
                                                    <p>{items.pose}</p>
                                                    {posePresets === index ?
                                                        <Image src={ArrowUp} className='w-full h-full' /> :
                                                        <Image src={ArrowDown} className='w-full h-full' />}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-t border-[#FFFFFF14] pt-2'>
                                            <div className='grid grid-cols-2 gap-1'>
                                                {items.presetes.map((item, index) => (
                                                    <div className='relative h-[128px] rounded-lg overflow-hidden sub-banner cursor-pointer' onClick={() => PosePresetsItem(index)}>
                                                        {posePresetsActive === index ?
                                                            <div className='bg-[#5848BC29] h-full flex justify-center items-center absolute top-0 left-0 w-full z-50'>
                                                            </div> : ''
                                                        }
                                                        <Image src={item.img} className='w-full h-full object-cover' />
                                                        <div className={`${posePresetsActive == index ? 'bg-[#5848BC]' : 'bg-[#0000007A]'} h-[34px] flex justify-center items-center absolute bottom-0 left-0 w-full`}>
                                                            <p className='text-[13px] font-semibold'>{item.name}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>

                    <div className='font-semibold text-white flex justify-between items-center border-t border-[#FFFFFF0D] px-6 pt-6'>
                        {selectPose ?
                            <button className='rounded-[14px] px-5 py-3 bg-[#FFFFFF14]' onClick={() => setPreviewPose(true)} >Preview</button> : <button className='rounded-[14px] px-5 py-3 bg-[#FFFFFF14]'>Preview</button>
                        }
                        <div className='flex justify-end items-center gap-3'>
                            <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => PosingClose(false)}>Cancel</button>
                            {selectPose ?
                                <button className='bg-[#5848BC] rounded-[14px] px-5 py-3' onClick={() => PoseCreated()}>Create</button> : <button className='bg-[#5848BC] rounded-[14px] px-5 py-3'>Create</button>}
                        </div>
                    </div>

                </Modal >
            }

        </>

    )
}

export default PosingModal