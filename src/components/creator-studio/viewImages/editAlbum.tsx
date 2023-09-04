import { Modal } from '@components/modal/modal'
import Image from 'next/image';
import React, { useState } from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import Star from "../svg/star.svg";
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import Pencil from '../../../../public/assets/pen.svg';
import image1 from '../../../../public/assets/vi-image-1.png'
import ViewImagesDropDown from './ViewImagesDropDown';

interface EditAlbum {
    CloseModal: any;
}
const EditAlbum = ({ CloseModal }: EditAlbum) => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [dropDownIndex, setDropDownIndex] = useState()
    const [coverImg, setCoverImg] = useState(false);

    const ShowDropDown = (index: any) => {
        setShowDropDown(!showDropDown);
        setDropDownIndex(index)
    }
    return (
        <Modal
            open={true}
            modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A] w-[800px]'
            closeModal={() => CloseModal(false)}
            modalOverlayStyle='!bg-black/80'
        >
            {coverImg ?
                <>
                    <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                        <h5 className='text-lg font-semibold'>Choose a cover for the Fantasy world & nature album</h5>
                        <div className='w-6 h-6 cursor-pointer' onClick={() => CloseModal(false)}>
                            <Image className='w-full h-full' src={crossIcon} alt={''} />
                        </div>
                    </div>
                    <div className='p-6'>
                        <div className='grid grid-cols-4 gap-2'>
                            {Array(10).fill('2').map(() => (
                                <div>
                                    <Image src={AlbumFirst} className='w-full h-full' />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
                :

                <>
                    <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                        <h5 className='text-lg font-semibold'>Edit album</h5>
                        <div className='w-6 h-6 cursor-pointer' onClick={() => CloseModal(false)}>
                            <Image className='w-full h-full' src={crossIcon} alt={''} />
                        </div>
                    </div>


                    <div className='p-6'>
                        <div className='flex gap-4 border-b border-[#FFFFFF14] pb-5'>
                            <div className='rounded-[14px] w-[257px] h-[200px] overflow-hidden relative'>
                                <Image src={AlbumFirst} className='w-full h-full object-cover' />
                                <div className='absolute bottom-0 left-0 h-10 bg-[#000000A3] w-full flex justify-center items-center gap-[6px] cursor-pointer' onClick={() => setCoverImg(true)}>
                                    <Pencil />
                                    <p> Edit cover</p>
                                </div>
                            </div>

                            <div className='flex-1'>
                                <div className='flex flex-col text-[#979797] pb-3'>
                                    <label htmlFor="category" className='text-[13px] font-semibold pb-[6px]'>Album Name</label>
                                    <div className='relative'>
                                        <div className='absolute top-3 left-2'>
                                            <Star />
                                        </div>
                                        <input type="text" id='category' placeholder='Enter your email' className='bg-[#FFFFFF0D] rounded-[14px] h-12 w-full py-4 pl-10 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC] text-white placeholder:text-[#979797]' name='category' />
                                        <div className='absolute top-3 right-2'>
                                            <Star />
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col text-[#979797] '>
                                    <label htmlFor="category" className='text-[13px] font-semibold pb-[6px]'>Description (Optional)</label>
                                    <div className='relative'>
                                        <div className='absolute top-3 left-2'>
                                            <Star />
                                        </div>
                                        <input type="text" id='category' placeholder='Enter your email' className='bg-[#FFFFFF0D] rounded-[14px] h-12 w-full py-4 pl-10 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC] text-white placeholder:text-[#979797]' name='category' />
                                        <div className='absolute top-3 right-2'>
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-6'>
                            <p className='font-semibold'>Images</p>
                            <div className='grid grid-cols-3 gap-2'>
                                {Array(5).fill('2').map((item, index) => (
                                    <div className='w-[245px] relative'>
                                        <Image src={image1} className='w-full h-full' />
                                        <div className='p-1.5 bg-[#0000007A] rounded-full absolute top-2 right-2 cursor-pointer' onClick={() => ShowDropDown(index)}>
                                            <Pencil />
                                        </div>
                                        {showDropDown &&
                                            <>{dropDownIndex === index ?
                                                <div className='absolute top-12 right-3 z-50' >
                                                    <ViewImagesDropDown />
                                                </div> : ''}
                                            </>
                                        }</div>
                                ))}

                            </div>
                        </div>

                        <div className='flex items-center justify-end mt-6 gap-3 text-white font-semibold'>
                            <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => CloseModal(false)}>Cancel</button>
                            <button className='bg-[#5848BC] rounded-[14px] px-5 py-3 ' onClick={() => CloseModal()}>Save</button>

                        </div>
                    </div>
                </>

            }


        </Modal>
    )
}

export default EditAlbum