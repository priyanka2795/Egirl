import { Modal } from '@components/modal/modal'
import Image from 'next/image';
import React, { useState } from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import AlbumSecound from '../../../../public/assets/mirandalImg.png';
import Edit from '../../../../public/assets/pen.svg';
import Check from '../svg/check.svg';
import ImageSquare from '../svg/image-square.svg';
import plusIcon from '../../../../public/assets/plus-large.png';

import CreateCategory from "./selectImage";
import SelectImage from './selectImage';

interface giftCreateModalProp {
    closeModal: any;
}

function giftCreateModal({ closeModal }: giftCreateModalProp) {
    const [steps, setSteps] = useState(1);
    // const [stateModal, setStateModal] = useState(false)
    const [addCategory, setAddCategory] = useState(true);

    return (
        <>
            <Modal
                open={true}
                modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A]'
                closeModal={() => closeModal(false)}
                modalOverlayStyle='!bg-black/80'
            >
                <div className={`${steps == 1 ? 'w-[385px]' : steps == 2 ? 'w-[385px]' : steps == 3 ? 'w-auto' : steps == 4 ? 'w-[385px]' : ''}`} >

                    <div>
                        <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                            <h5 className='text-lg font-semibold'>Create a new category</h5>
                            <div className='w-6 h-6 cursor-pointer' onClick={() => closeModal(false)}>
                                <Image className='w-full h-full' src={crossIcon} alt={''} />
                            </div>
                        </div>
                        <div className='p-6'>
                            {addCategory ?
                                <div className=' flex flex-col text-[#979797] '>
                                    <label htmlFor="category" className='text-[13px] pb-1'>Category Name</label>
                                    <input type="text" id='category' placeholder='Type a category name' className='bg-[#FFFFFF0D] rounded-[14px] h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC]' />
                                </div>
                                : <div className=' flex flex-col text-[#979797]'>
                                    <label htmlFor="category" className='text-[13px] pb-1'>Category Date</label>
                                    <input type="date" id='category' placeholder='Type a category name' className='bg-[#FFFFFF0D] rounded-[14px] h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC]' />
                                </div>
                            }
                            <div className='grid grid-cols-2 mt-6 gap-3 text-white font-semibold'>
                                <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => closeModal(false)}>Cancel</button>
                                {addCategory ?
                                    <button className='bg-[#5848BC] rounded-[14px] px-5 py-3' onClick={() => setAddCategory(false)}>Next</button>
                                    :
                                    <button className='bg-[#5848BC] rounded-[14px] px-5 py-3' onClick={() => setSteps(3)}>Next</button>
                                }

                            </div>
                        </div>
                    </div>
                    {steps === 3 ?
                        <SelectImage closeState={closeModal} /> : ''
                    }


                </div>


            </Modal>


        </>
    )
}

export default giftCreateModal;