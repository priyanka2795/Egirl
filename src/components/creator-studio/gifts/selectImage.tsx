import Image from 'next/image'
import React, { useState } from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import AlbumSecound from '../../../../public/assets/mirandalImg.png';
import { Modal } from '@components/modal/modal';
import CreateGift from './createGift';

interface CategoryPopup {
    closeState: any;
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
    // {
    //     name: 'Fantasy world & nature',
    //     user: 124,
    //     imgPath: AlbumFirst,
    // },
    // {
    //     name: 'Fantasy world & nature',
    //     user: 124,
    //     imgPath: AlbumSecound,
    // }
]
function SelectImage({ closeState }: CategoryPopup) {
    const [createGift, setCreateGift] = useState(false);
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <Modal
                open={true}
                modalClassName='flex flex-col h-max rounded-[14px] bg-[#1A1A1A]'
                closeModal={() => closeState(false)}
                modalOverlayStyle='!bg-black/80'
            >
                {createGift ?
                    <CreateGift createGiftClose={closeState}/>
                    :
                    <>
                        <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                            <h5 className='text-lg font-semibold'>Select image</h5>
                            <div className='w-6 h-6 cursor-pointer' onClick={() => closeState(false)}>
                                <Image className='w-full h-full' src={crossIcon} alt={''} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 p-6'>
                            <p className='font-semibold'>Albums</p>
                            <div className='grid grid-cols-2 gap-2'>
                                {albumdata.map((item) => (
                                    <div className='rounded-xl overflow-hidden w-[300px] h-[300px] relative cursor-pointer'
                                        onClick={() => setCreateGift(true)}>
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
                                    <div className='grid grid-cols-2 gap-2'>
                                        {albumdata.map((item) => (
                                            <div className='rounded-xl overflow-hidden w-[300px] h-[300px] relative' onClick={() => setCreateGift(false)}>
                                                <Image className='w-full h-full object-cover' src={item.imgPath} alt={''} />
                                                <div className='absolute bottom-0 w-full'>
                                                    <div className='flex items-end justify-between h-36 px-4 pb-3 bg-gradient-to-t to-[#00000000] from-[#000000CC] text-[15px] font-semibold'>
                                                        <p>Fantasy world & nature</p>
                                                        <p>124</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }

                        </div>
                    </>

                }
            </Modal >
        </>
    )
}

export default SelectImage;