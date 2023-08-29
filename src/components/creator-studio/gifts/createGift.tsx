import Image from 'next/image'
import React, { useState } from 'react'
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import Edit from '../../../../public/assets/pen.svg';
import ImageSquare from '../svg/image-square.svg';
import ImageSquareGray from '../svg/image-square-gray.svg';
import Check from '../svg/check.svg';
import plusIcon from '../../../../public/assets/plus-large.png';
import crossIcon from '../../../../public/assets/xmark (1).png';
import CreateCategory from './createCategory';
import Tooltip from './tooltip';

interface CreateGiftPopup {
    createGiftClose: any;
    GiftsView: any;
    Previous: any;
    AddCategory: any;
    SetCategory:any;
    GiftName: any;
    SetGiftName: any;
};


function CreateGift({ createGiftClose, GiftsView, Previous, AddCategory,SetCategory, GiftName, SetGiftName }: CreateGiftPopup) {
    const [createCategory, setCreateCategory] = useState(false);
    const [tabSelectedOpt, setTabSelectedOpt] = useState('');
    const [giftName, setGiftName] = useState('');

    const handleActiveTab = (items: any) => {
        setTabSelectedOpt(items)
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setGiftName(value);
    }

    const GiftCreated = () => {

        if (giftName === '') {
            alert("Please Enter Gift Name")
        } else {
            // GiftName.push(giftName)
            SetGiftName([...GiftName,giftName])
            createGiftClose(false);
            GiftsView(true)
        }

    }
    const closeGifts = () => {
        // createGiftClose(false)
        Previous(false);
    }

    return (
        <div className='w-[385px]'>
            {createCategory ?
                <>

                    <CreateCategory CategoryClose={createGiftClose} Steps={3} Previous={setCreateCategory} AddCategory={AddCategory} SetCategory={SetCategory} />
                </>
                :
                <>
                    <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                        <h5 className='text-lg font-semibold'>Create gift</h5>
                        <div className='w-6 h-6 cursor-pointer' onClick={() => createGiftClose(false)}>
                            <Image className='w-full h-full' src={crossIcon} alt={''} />
                        </div>
                    </div>
                    <div className='p-6 flex flex-col gap-4'>
                        <div className='w-[156px] h-[156px] relative  m-auto'>
                            <Image className='w-full h-full object-cover rounded-[14px]' src={AlbumFirst} alt={''} />
                            <div className='absolute right-2 top-2 bg-[#0000007A] w-8 h-8 rounded-full flex items-center justify-center group cursor-pointer'>
                                <div>
                                    <Edit className='w-full h-full' alt={''} />
                                </div>
                                <div className='absolute -top-2 -left-2.5 transform -translate-y-2/4 -translate-x-0 transition-all'>
                                    <Tooltip Text={'Edit'} />
                                </div>
                            </div>

                        </div>

                        <div className=' flex flex-col text-[#979797]'>
                            <label htmlFor="category" className='text-[13px] font-semibold pb-1'>Gift Name</label>
                            <input type="text" id='category' placeholder='Ex. Date on a roof' className='bg-[#FFFFFF0D] rounded-[14px] h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC]' onChange={(e) => handleChange(e)} />
                        </div>

                        <div className=' flex flex-col gap-3'>
                            <p className='text-[13px] font-semibold pb-1 text-[#979797]'>Category</p>
                            {AddCategory.map((items: any) => (
                                <div className={`border rounded-[14px] px-4 py-3 
                                ${tabSelectedOpt === items ? 'bg-[#5848BC29] border-[#5848BC]' : 'border-[#FFFFFF29] bg-[#ffffff00]'}
                                `} onClick={(e) => handleActiveTab(items)}
                                >
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-3'>
                                            <div className={` rounded-lg p-[10px] ${tabSelectedOpt === items ? 'bg-[#5848BC29]' : 'bg-[#FFFFFF0D]'}`}>
                                                {tabSelectedOpt === items ? <ImageSquare /> : <ImageSquareGray />}
                                            </div>
                                            <div className=''>
                                                <p className='font-semibold'>{items}</p>
                                                <p className='text-xs text-[#979797]'>0/9 gifts</p>
                                            </div>
                                        </div>
                                        <div>
                                            {tabSelectedOpt === items ? <Check /> : ' '}

                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                        <button className='flex items-center gap-2 font-semibold ' onClick={() => setCreateCategory(true)} >
                            <Image className='w-full h-full' src={plusIcon} alt={''} />
                            <p>New Category</p>
                        </button>

                        <div className='grid grid-cols-2 gap-3 text-white font-semibold'>
                            <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => closeGifts()} >Cancel</button>
                            {tabSelectedOpt ?
                                <button className='bg-[#5848BC] rounded-[14px] px-5 py-3' onClick={() => GiftCreated()}>Create</button>
                                : <button className='bg-[#5848BC] rounded-[14px] px-5 py-3 opacity-50'>Create</button>
                            }


                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default CreateGift