import React, { useState } from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import Check from '../svg/check.svg';
import plusIcon from '../../../../public/assets/plus-large.png';
import ImageSquare from '../svg/image-square-primary.png';
import CategoryImg from '../svg/Image-block.png';
import CategoryImgSecond from '../svg/Image-block2.png';
import CategoryImgThird from '../svg/Image-block3.png';
import Tooltip from '../gifts/tooltip';
import Star from "../svg/star.svg";

interface CreateGifts {
    CreateGiftClose: any;
    SetToaster: any;
}
const CreateGift = ({ CreateGiftClose, SetToaster }: CreateGifts) => {
    const Category = [
        {
            name: 'Date',
            gifts: '0/9 gifts',
            image: ImageSquare,
        },
        {
            name: 'Summer',
            gifts: '2/9 gifts',
            image: CategoryImg,
        },
        {
            name: 'Tokyo',
            gifts: '9/9 gifts',
            image: CategoryImgSecond,
        },
        {
            name: 'Lol',
            gifts: '7/9 gifts',
            image: CategoryImgThird,
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
            modalClassName='flex flex-col  rounded-[14px] bg-[#1A1A1A] w-[385px]'
            closeModal={() => CreateGiftClose(false)}
            modalOverlayStyle='!bg-black/80'
        >
            <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                <h5 className='text-lg font-semibold'>Create gift</h5>
                <div className='w-6 h-6 cursor-pointer' onClick={() => CreateGiftClose(false)}>
                    <Image className='w-full h-full' src={crossIcon} alt={''} />
                </div>
            </div>
            <div className='p-6 flex flex-col gap-4'>
                <div className='w-[156px] h-[156px] relative  m-auto'>
                    <Image className='w-full h-full object-cover rounded-[14px]' src={AlbumFirst} alt={''} />
                </div>
                <div className=' flex flex-col text-[#979797]'>
                    <label htmlFor="category" className='text-[13px] font-semibold pb-1'>Gift Name</label>


                    <div className='relative'>
                        <div className='absolute top-3 left-2'>
                            <Star />
                        </div>
                        <input type="text" id='category' placeholder='Ex. Date on a roof' className='bg-[#FFFFFF0D] rounded-[14px] w-full pl-10 h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC]' onChange={(e) => handleChange(e)} />
                        <div className='absolute top-3 right-2'>
                            <Star />
                        </div>
                    </div>
                </div>

                <div className={`flex flex-col gap-3 ${categoryHide ? 'h-auto overflow-auto ' : 'overflow-hidden h-[110px]'} `}>
                    <p className='text-[13px] font-semibold pb-1 text-[#979797]'>Category</p>
                    {Category.map((items, index) => (
                        <>
                            <div className={`border rounded-[14px] px-4 py-3
                    ${index === selectTab ? 'border-[#5848BC] bg-[#5848BC29] ' : 'border-[#FFFFFF29]'}`} onClick={() => setSelectTab(index)}>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-3'>
                                        <div className={` rounded-lg h-10 w-10 bg-[#5848BC29] flex justify-center items-center`}>
                                            <Image src={items.image} />
                                        </div>
                                        <div className=''>
                                            <p className='font-semibold'>{items.name}</p>
                                            <p className='text-xs text-[#979797]'>{items.gifts}</p>
                                        </div>
                                    </div>
                                    <div>
                                        {index === selectTab ?
                                            <Check /> : ''}
                                    </div>
                                </div>
                            </div>
                        </>

                    ))}

                </div >

                <button className={`flex items-center gap-2 font-semibold w-40 relative group  `} onClick={() => AllCategory()}>
                    {categoryHide ? '' : <Image className='w-full h-full' src={plusIcon} alt={''} />}
                    <p className={`${categoryHide ? 'opacity-30 cursor-default' : ''}`}>New Category</p>
                    {categoryHide ?
                        <div className='absolute -top-2 -left-14 transform -translate-y-2/4 -translate-x-0 transition-all opacity-100'>
                            <Tooltip Text='You can only create 4 categories' />
                        </div>
                        : ''}
                </button>

                <div className='grid grid-cols-2 gap-3 text-white font-semibold'>
                    <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => CreateGiftClose(false)} >Cancel</button>
                    <button className='bg-[#5848BC] rounded-[14px] px-5 py-3' onClick={() => {
                        CreateGiftClose(false);
                        SetToaster(true)
                    }}>Create</button>
                </div>
            </div >
        </Modal >
    )
}

export default CreateGift