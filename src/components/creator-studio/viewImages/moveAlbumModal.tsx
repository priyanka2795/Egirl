import React, { useState } from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import Check from '../svg/check.svg';
import plusIcon from '../../../../public/assets/plus-large.png';
import image1 from '../../../../public/assets/vi-image-1.png'
import image2 from '../../../../public/assets/vi-image-2.png'
import image3 from '../../../../public/assets/vi-image-3.png'
import image4 from '../../../../public/assets/vi-image-4.png'
import Tooltip from '../gifts/tooltip';
import Star from "../svg/star.svg";

interface MoveAlbumModal {
    MoveModalClose: any;
    // SetToaster: any;
}
const MoveAlbumModal = ({ MoveModalClose,  }: MoveAlbumModal) => {
    const MoveAlbum = [
        {
            name: 'Giant dog chasing a bun...',
            gifts: '8',
            image: image1,
        },
        {
            name: 'Fantasy world & nature',
            gifts: '8',
            image: image2,
        },
        {
            name: 'Fantasy world & nature',
            gifts: '9',
            image: image3,
        },
        {
            name: 'Fantasy world & nature',
            gifts: '7',
            image: image4,
        },
        {
            name: 'Giant dog chasing a bun...',
            gifts: '8',
            image: image1,
        },
        {
            name: 'Fantasy world & nature',
            gifts: '8',
            image: image2,
        },
        {
            name: 'Fantasy world & nature',
            gifts: '9',
            image: image3,
        },
        {
            name: 'Fantasy world & nature',
            gifts: '7',
            image: image4,
        },
    ]
    const [selectTab, setSelectTab] = useState(0);
    const [categoryHide, setCategoryHide] = useState(false);

    const handleChange = (e: any) => {

    }
    const AllCategory = () => {
        setCategoryHide(true);
    }
    return (
        <Modal
            open={true}
            modalClassName='flex flex-col rounded-[14px] bg-[#1A1A1A] w-[968px]'
            closeModal={() => MoveModalClose(false)}
            modalOverlayStyle='!bg-black/80'
        >
            <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                <h5 className='text-lg font-semibold'>Move to album</h5>
                <div className='w-6 h-6 cursor-pointer' onClick={() => MoveModalClose(false)}>
                    <Image className='w-full h-full' src={crossIcon} alt={''} />
                </div>
            </div>

            <div className='p-6 overflow-y-auto max-h-[700px]'>
                <div className='grid grid-cols-3 gap-[10px]'>
                    {MoveAlbum.map((items, index) => (
                        <div key={index} className='relative group w-[300px] h-[300px] overflow-hidden' >
                            <Image className='w-full object-cover ' src={items.image} alt={''} />
                            <div className=' absolute bottom-0 flex justify-between items-end bg-gradient-to-t to-[#00000000] from-[#000000CC] h-[150px] w-full px-5 pb-3 font-semibold'>
                                <p>{items.name}</p>
                                <p>{items.gifts}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </Modal >
    )
}

export default MoveAlbumModal