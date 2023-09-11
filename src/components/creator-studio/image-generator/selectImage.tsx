import Image from 'next/image'
import React, { useState } from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import AlbumSecound from '../../../../public/assets/mirandalImg.png';
import Images1 from '../../../../public/assets/vi-image-6.png';
import Images2 from '../../../../public/assets/vi-image-3.png';
import Images3 from '../../../../public/assets/vi-image.png';
import { Modal } from '@components/modal/modal';
import InpaintingModals from './inpaintingModals';
interface SelectImage {
    CloseModal: any;
    SetInpaintingModal: any;
}

const albumdata = [
    {
        name: 'Fantasy world & nature',
        user: 124,
        imgPath: AlbumFirst,
    },
    {
        name: 'Face, body and hair',
        user: 32,
        imgPath: AlbumSecound,
    },
]
const allImages = [
    {
        img: Images1
    },
    {
        img: Images3
    },
    {
        img: Images2
    },
    {
        img: AlbumFirst
    },

]
function SelectImage({ CloseModal, SetInpaintingModal }: SelectImage) {
    const [toggle, setToggle] = useState(true);

    const SelectImg = () => {
        SetInpaintingModal(true);
        CloseModal(false)
    }

    return (
        <>

            <Modal
                open={true}
                modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[656px] py-8'
                closeModal={() => CloseModal(false)}
                modalOverlayStyle='!bg-black/80'
            >
                <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                    <h5 className='text-lg font-semibold'>Select image</h5>
                    <div className='w-6 h-6 cursor-pointer' onClick={() => CloseModal(false)}>
                        <Image className='w-full h-full' src={crossIcon} alt={''} />
                    </div>
                </div>
                <div className='flex flex-col gap-3 p-6 overflow-y-auto '>
                    <p className='font-semibold'>Albums</p>
                    <div className='grid grid-cols-2 gap-2 '>
                        {albumdata.map((item) => (
                            <div className='rounded-xl overflow-hidden w-[300px] h-[300px] relative cursor-pointer' onClick={() => SelectImg()}>
                                <Image className='w-full h-full object-cover' src={item.imgPath} alt={''} />
                                <div className='absolute bottom-0 w-full'>
                                    <div className='flex items-end justify-between h-36 px-4 pb-3 bg-gradient-to-t to-[#00000000] from-[#000000CC] text-[15px] font-semibold'>
                                        <p >{item.name}</p>
                                        <p>{item.user}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='bg-[#FFFFFF14] w-full px-4 py-[10px] font-bold rounded-xl' onClick={() => setToggle(!toggle)}>Show all albums</button>
                    {toggle &&
                        <div>
                            <p className='font-semibold pb-3'>All photos</p>
                            <div className='grid grid-cols-2 gap-2' onClick={() => SelectImg()}>
                                {allImages.map((item) => (
                                    <div className='rounded-xl overflow-hidden relative cursor-pointer'>
                                        <Image className='w-full h-full object-cover' src={item.img} alt={''} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    }

                </div>
            </Modal>

        </>

    )
}

export default SelectImage;