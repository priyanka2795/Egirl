import Image from 'next/image'
import React, { useState } from 'react'
import { Modal } from '@components/modal/modal'
import ShuffleSvg from '../../../../public/assets/svgImages/shuffle.svg';
import PlusIconSvg from '../../../../public/assets/svgImages/plus-icon.svg';
import crossIcon from '../../../../public/assets/xmark-style.png';
import Toggle from '@components/common/Toggler';
import Tooltip from '@components/common/tooltip';
interface EditImageGeneration {
    ImageGenerationClose: any
}

const EditImageGeneration = ({ ImageGenerationClose }: EditImageGeneration) => {
    const [prompt, setPrompt] = useState(false)

    return (
        <Modal
            open={true}
            modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A] w-[1052px]'
            closeModal={() => ImageGenerationClose(false)}
            modalOverlayStyle='!bg-black/80'
        >
            <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                <h5 className='text-lg font-semibold'>Edit Image generation</h5>
                <div className='w-6 h-6 cursor-pointer' onClick={() => ImageGenerationClose(false)}>
                    <Image className='w-full h-full' src={crossIcon} alt={''} />
                </div>
            </div>
            <div className='p-6'>
                <div className='flex justify-between gap-4 pb-7'>
                    <div className='flex gap-4'>
                        <div
                            className='flex h-max w-[300px] items-center justify-start gap-2.5 rounded-[14px] bg-white bg-opacity-5 px-4 py-[13px]'
                        >
                            <div className='text-[15px] font-normal leading-normal text-neutral-400'>
                                Genre
                            </div>
                        </div>

                        <div
                            className='flex h-max w-[142px] cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white bg-opacity-10 px-5 py-3 text-base font-bold text-white'>
                            Add style <PlusIconSvg />
                        </div>

                        <div className='flex h-max w-[130px] cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white bg-opacity-10 px-5 py-3 text-base font-bold text-white'>
                            Add tag <PlusIconSvg />
                        </div>
                    </div>

                    <div className='flex w-12 cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white bg-opacity-10 py-3 relative group'>
                        <ShuffleSvg />
                        {/* <div className='absolute -top-12 w-max -left-16 z-50'>
                            <Tooltip Text={'Add a random prompt'} />
                        </div> */}
                    </div>
                </div>

                <textarea
                    className='mb-6 h-[124px] w-full resize-none rounded-[14px] border-none bg-[#000000]/[0.48]'
                    id=''
                    name='w3review'
                    placeholder='Type a prompt ...'
                ></textarea>
                {prompt &&
                    <div className='flex flex-col gap-[6px] mb-6'>
                        <label className='text-[#979797]' htmlFor="negative">Negative prompt</label>
                        <input type="text" id='negative' placeholder='Type a negative prompt...' className='bg-[#FFFFFF0D] rounded-[14px] h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC] text-white placeholder:text-[#979797]' name='negative' />
                    </div>
                }

                <Toggle
                    handleToggleState={() => setPrompt(!prompt)}
                    toggleState={prompt}
                    toggleText={`Negative Prompt`}
                    infoIcon={'hidden'}
                    toggleClasses={'bg-[#383838]'}
                    subHeading={true}
                />

                <div className='flex gap-3 items-center justify-end'>
                    <button className='w-max rounded-[14px] border border-[#FFFFFF52] px-5 py-[13px] text-base font-bold' onClick={() => ImageGenerationClose(false)}>
                        Cancel
                    </button>
                    <button className='w-max rounded-[14px] bg-[#5848BC] px-5 py-[13px] text-base font-bold' onClick={() => ImageGenerationClose(false)}>
                        Generate
                    </button>

                </div>
            </div>


        </Modal >


    )
}

export default EditImageGeneration;