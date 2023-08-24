import React, { useState } from 'react'
import VerticalDots from "../svg/dots-vertical.svg";
import Search from '../../../../public/assets/search-alt (1).png';
import Image from 'next/image';
import plusIcon from '../../../../public/assets/plus-large.png';
import Delete from '../../../../public/assets/delete-icon.png';
import Pencil from '../../../../public/assets/pencil.png';
import EditCategoryModal from './editCategoryModal';

function GiftCategoryAction() {
    const [toggle, setToggle] = useState(false);
    const [closeState, setCloseState] = useState(false);

    return (
        <>
            <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center justify-center gap-3 '>
                    <div className='font-bold px-3 py-1.5 bg-[#FFFFFF29] rounded-xl flex items-center justify-center gap-1 relative'>
                        <span>Date</span>
                        <button className='' onClick={() => setToggle(!toggle)}>
                            <VerticalDots />
                        </button>

                        {toggle &&
                            <div className='bg-[#1A1A1A] p-4 flex flex-col gap-3 rounded-[14px] w-[251px] h-[92px] absolute left-0 top-12 z-50'>
                                <button className='flex items-center gap-2' >
                                    <Image src={Pencil} className='w-full h-full' alt='' />
                                    <p>Edit name</p>
                                </button>
                                <button className='flex items-center gap-2' >
                                    <Image src={Delete} className='w-full h-full' alt={''} />
                                    <p>Delete</p>
                                </button>

                            </div>
                        }
                    </div>
                    <button className='pt-1'>
                        <Image src={plusIcon} alt='' className='h-[18px] w-[18px]' />
                    </button>
                </div>
                <button className='' >
                    <Image className='h-[24px] w-[24px]' src={Search} alt={''} />
                </button>
            </div>
            {closeState &&
                <EditCategoryModal closeModal={setCloseState} />
            }
        </>
    )
}

export default GiftCategoryAction