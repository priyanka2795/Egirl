import Image from 'next/image'
import React, { useState } from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import { Modal } from '@components/modal/modal';
import SelectImage from './selectImage';
import NotFound from 'pages/404';


interface CreateCategory {
    CategoryClose: any;
    Steps: any;
    Previous: any;
    AddCategory: any;
    SetCategory: any;
}
const CreateCategory = ({ CategoryClose, Steps, Previous, AddCategory, SetCategory }: CreateCategory) => {
    const [inputvalue, setInputValue] = useState('');
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputValue(value);
    }
    const onSubmit = () => {
        if (inputvalue === '') {
            alert('Please Enter Value')
        } else if (Steps === 3) {
            SetCategory([...AddCategory, inputvalue])
            Previous(false)
        } else if (Steps === 4) {
            SetCategory([...AddCategory, inputvalue])
            CategoryClose(false);

        } else {
            SetCategory([...AddCategory, inputvalue])
            // AddCategory.push(inputvalue);
            Steps(2);
        }
    }
    return (
        <>
            <Modal
                open={true}
                modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A] w-[385px]'
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
                        <label htmlFor="category" className='text-[13px] pb-[6px]'>Category Name</label>
                        <input type="text" id='category' placeholder='Type a category name' className='bg-[#FFFFFF0D] rounded-[14px] h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC] text-white placeholder:text-[#979797]' name='category' onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-3 mt-6 font-semibold text-white'>
                        {Steps === 3 ?
                            <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => Previous(false)}>Cancel</button>
                            : <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => CategoryClose(false)}>Cancel</button>
                        }
                        {Steps === 3 ?
                            <button className='bg-[#5848BC] rounded-[14px] px-5 py-3' onClick={onSubmit} >Next</button>
                            : Steps === 4 ? <button className='bg-[#5848BC] rounded-[14px] px-5 py-3' onClick={() => onSubmit()}>Next</button>
                                : <button className='bg-[#5848BC] rounded-[14px] px-5 py-3' onClick={() => onSubmit()}>Next</button>
                        }
                    </div>
                </div>

            </Modal>

        </>
    )
}

export default CreateCategory