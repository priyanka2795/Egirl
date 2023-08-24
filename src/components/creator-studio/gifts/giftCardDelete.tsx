import Image from 'next/image'
import React from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';

interface DeletePopup {
    DeleteModal: any;
}
function GiftCardDelete({ DeleteModal }: DeletePopup) {
    return (
        <>
            <div className='w-[494px] '>
                <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                    <h5 className='text-lg font-semibold'>Delete gift</h5>
                    <div className='w-6 h-6 cursor-pointer' onClick={() => DeleteModal(false)}>
                        <Image className='w-full h-full' src={crossIcon} alt={''} />
                    </div>
                </div>
                <div className='p-6'>
                    <div className='text-center mb-5 max-w-[290px] m-auto'>
                        <div className='max-w-[100px] max-h-[100px] rounded-xl overflow-hidden m-auto mb-4'>
                            <Image className='w-full h-full object-cover' src={AlbumFirst} />
                        </div>
                        <p>Are you sure you want to delete the <span className='font-semibold'>Romantic dinner</span> gift?</p>
                    </div>
                    <div className='grid grid-cols-2 mt-6 gap-3 text-white font-semibold'>
                        <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => DeleteModal(false)}>Cancel</button>
                        <button className='bg-[#FF5336] rounded-[14px] px-5 py-3' onClick={() => DeleteModal(false)}>Delete</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GiftCardDelete