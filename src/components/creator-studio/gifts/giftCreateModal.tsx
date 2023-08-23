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



interface giftCreateModalProp {
    closeModal: any;
}

function giftCreateModal({ closeModal }: giftCreateModalProp) {
    const [steps, setSteps] = useState(1);
    const [addCategory, setAddCategory] = useState(false);

    const nextStep = () => setSteps((currentStep) => currentStep + 1);
    return (
        <>
            <Modal
                open={true}
                modalClassName='flex flex-col h-max rounded-[14px] bg-[#1A1A1A]'
                closeModal={() => closeModal(false)}
                modalOverlayStyle='!bg-black/80'
            >
                <div className={`${steps == 1 ? 'w-[385px]' : steps == 2 ? 'w-[385px]' : steps == 3 ? 'w-auto' : steps == 4 ? 'w-[385px]' : ''}`} >
                    <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                        <h5 className='text-lg font-semibold'>Create a new category</h5>
                        <div className='w-6 h-6 cursor-pointer' onClick={() => closeModal(false)}>
                            <Image className='w-full h-full' src={crossIcon} alt={''} />
                        </div>
                    </div>
                    <div className='p-6'>

                        {addCategory ?
                            (<div className=' flex flex-col text-[#979797]'>
                                <label htmlFor="category" className='text-[13px] pb-1'>Category Name</label>
                                <input type="text" id='category' placeholder='Type a category name' className='bg-[#FFFFFF0D] rounded-[14px] h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC]' />
                            </div>)
                            :
                            <>
                                {steps == 1 && (
                                    <div className=' flex flex-col text-[#979797]'>
                                        <label htmlFor="category" className='text-[13px] pb-1'>Category Name</label>
                                        <input type="text" id='category' placeholder='Type a category name' className='bg-[#FFFFFF0D] rounded-[14px] h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC]' />
                                    </div>
                                )}
                                {/* tab2 */}
                                {steps == 2 && (
                                    <div className=' flex flex-col text-[#979797]'>
                                        <label htmlFor="category" className='text-[13px] pb-1'>Category Name</label>
                                        <input type="date" id='category' placeholder='Type a category name' className='bg-[#FFFFFF0D] rounded-[14px] h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC]' />
                                    </div>
                                )}
                                {/* tab3 */}
                                {steps == 3 && (
                                    <div className='flex flex-col gap-3'>
                                        <p className='font-semibold'>Albums</p>
                                        <div className='grid grid-cols-2 gap-2'>
                                            <div className='rounded-xl overflow-hidden w-[300px] h-[300px] relative'>
                                                <Image className='w-full h-full object-cover' src={AlbumFirst} alt={''} />
                                                <div className='absolute bottom-0 w-full'>
                                                    <div className='flex items-end justify-between h-36 px-4 pb-3 bg-gradient-to-t to-[#00000000] from-[#000000CC] text-[15px] font-semibold'>
                                                        <p >Fantasy world & nature</p>
                                                        <p>124</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='rounded-xl overflow-hidden w-[300px] h-[300px] relative'>
                                                <Image className='w-full h-full object-cover' src={AlbumSecound} alt={''} />
                                                <div className='absolute bottom-0 w-full'>
                                                    <div className='flex items-end justify-between h-36 px-4 pb-3 bg-gradient-to-t to-[#00000000] from-[#000000CC] text-[15px] font-semibold'>
                                                        <p>Face, body and hair</p>
                                                        <p>32</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='bg-[#FFFFFF14] w-full px-4 py-[10px] font-bold rounded-xl'>Show all albums</button>
                                    </div>
                                )}
                                {/* Tab4  */}
                                {steps == 4 && (
                                    <div>
                                        <div className='max-w-[156px] max-h-[156px] w-full h-full relative rounded-[14px] overflow-hidden m-auto'>
                                            <Image className='w-full h-full object-cover' src={AlbumFirst} alt={''} />
                                            <div className='absolute right-2 top-2 bg-[#0000007A] w-8 h-8 rounded-full flex items-center justify-center'>
                                                <div>
                                                    <Edit className='w-full h-full' alt={''} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className=' flex flex-col text-[#979797] pb-4'>
                                            <label htmlFor="category" className='text-[13px] font-semibold pb-1'>Gift Name</label>
                                            <input type="text" id='category' placeholder='Ex. Date on a roof' className='bg-[#FFFFFF0D] rounded-[14px] h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC]' />
                                        </div>

                                        <div className=' flex flex-col pb-4 gap-3'>
                                            <p className='text-[13px] font-semibold pb-1 text-[#979797]'>Category</p>
                                            <div className='bg-[#5848BC14] border border-[#5848BC] rounded-[14px] px-4 py-3'>
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex items-center gap-3'>
                                                        <div className='bg-[#5848BC29] rounded-lg p-[10px]'>
                                                            <ImageSquare />
                                                        </div>
                                                        <div className=''>
                                                            <p className='font-semibold'>Date</p>
                                                            <p className='text-xs text-[#979797]'>0/9 gifts</p>
                                                        </div>

                                                    </div>
                                                    <div>
                                                        <Check />
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='border border-[#FFFFFF29] rounded-[14px] px-4 py-3'>
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex items-center gap-3'>
                                                        <div className='bg-[#5848BC29] rounded-lg p-[10px]'>
                                                            <ImageSquare />
                                                            {/* stroke="#8C7DD0" */}
                                                        </div>
                                                        <div className=''>
                                                            <p className='font-semibold'>Lol</p>
                                                            <p className='text-xs text-[#979797]'>0/9 gifts</p>
                                                        </div>

                                                    </div>
                                                    <div>
                                                        {/* <Check /> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button className='flex items-center gap-2 font-semibold pb-3' onClick={() => setAddCategory(true)}>
                                            <Image className='w-full h-full' src={plusIcon} alt={''} />
                                            <p>New Category</p>
                                        </button>

                                    </div>
                                )}
                            </>
                        }



                        <div className='grid grid-cols-2 mt-6 gap-3 text-white font-semibold'>
                            <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => closeModal(false)}>Cancel</button>
                            <button className='bg-[#5848BC] rounded-[14px] px-5 py-3' onClick={() => nextStep(1)}>Next</button>
                        </div>
                    </div>
                </div>

            </Modal>
        </>
    )
}

export default giftCreateModal;