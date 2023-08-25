import Image from 'next/image'
import React from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import { Modal } from '@components/modal/modal';

interface DeletePopup {
    DeleteModal: any;
    Heading: string;
    Content: string;
    Img: any;
}
function GiftCardDelete({ DeleteModal, Heading, Content, Img }: DeletePopup) {

    return (
        <>
            <Modal
                open={true}
                modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A]'
                closeModal={() => DeleteModal(false)}
                modalOverlayStyle='!bg-black/80'
            >
                <div className='w-[494px] '>
                    <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                        <h5 className='text-lg font-semibold'>{Heading}</h5>
                        <div className='w-6 h-6 cursor-pointer' onClick={() => DeleteModal(false)}>
                            <Image className='w-full h-full' src={crossIcon} alt={''} />
                        </div>
                    </div>
                    <div className='p-6'>
                        <div className='text-center mb-5 max-w-[290px] m-auto'>
                            {Img ? "" :
                                <div className='max-w-[100px] max-h-[100px] rounded-xl overflow-hidden m-auto mb-4'>
                                    <Image className='w-full h-full object-cover' src={AlbumFirst} />
                                </div>
                            }
                            <p>{Content}<span className='font-semibold'></span></p>
                        </div>
                        <div className='grid grid-cols-2 mt-6 gap-3 text-white font-semibold'>
                            <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => DeleteModal(false)}>Cancel</button>
                            <button className='bg-[#FF5336] rounded-[14px] px-5 py-3' onClick={() => DeleteModal(false)}>Delete</button>

                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default GiftCardDelete