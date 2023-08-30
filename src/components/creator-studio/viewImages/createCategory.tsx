import Image from 'next/image'
import React, { useState } from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import { Modal } from '@components/modal/modal';
import Star from "../svg/star.svg";
import { Loading } from '@components/ui/loading';

interface CreateCategory {
    CategoryClose: any;
    CreateGiftClose:any;
    // Steps: any;
    // Previous: any;
    // AddCategory: any;
    // SetCategory: any;
}
const CreateCategory = ({ CategoryClose,CreateGiftClose }: CreateCategory) => {
    const [inputvalue, setInputValue] = useState('');
    const [loader, setLoader] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputValue(value);
    }

    const NextStep = () => {
        setLoader(true);
        setTimeout(() => {
            CreateGiftClose(true);
            CategoryClose(false);
            setLoader(false); 
        }, 100);

    }
    return (
        <>
            <Modal
                open={true}
                modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A] w-[468px]'
                closeModal={() => CategoryClose(false)}
                modalOverlayStyle='!bg-black/80'
            >
                <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                    <h5 className='text-lg font-semibold'>Create a new category</h5>
                    <div className='w-6 h-6 cursor-pointer' onClick={() => CategoryClose(false)}>
                        <Image className='w-full h-full' src={crossIcon} alt={''} />
                    </div>
                </div>
                <div className='p-6'>
                    <div className='flex flex-col text-[#979797] '>
                        <label htmlFor="category" className='text-[13px] font-semibold pb-[6px]'>Category Name</label>
                        <div className='relative'>
                            <div className='absolute top-3 left-2'>
                                <Star />
                            </div>
                            <input type="text" id='category' placeholder='Enter your email' className='bg-[#FFFFFF0D] rounded-[14px] h-12 w-full py-4 pl-10 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC] text-white placeholder:text-[#979797]' name='category' onChange={(e) => handleChange(e)}
                            />
                            <div className='absolute top-3 right-2'>
                                <Star />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-6 gap-3 text-white font-semibold'>
                        <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => CategoryClose(false)}>Cancel</button>
                        <button className='bg-[#5848BC] rounded-[14px] px-5 py-3 ' onClick={() => NextStep()}>{loader? <Loading className='p-0' iconClassName='h-5 w-5 text-white' /> :'Next'}</button>

                    </div>
                </div>
                
            </Modal>

        </>
    )
}

export default CreateCategory