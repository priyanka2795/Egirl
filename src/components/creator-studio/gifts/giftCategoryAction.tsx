import React, { useState } from 'react'
import VerticalDots from "../svg/dots-vertical.svg";
import Search from '../../../../public/assets/search-alt (1).png';
import Image from 'next/image';
import plusIcon from '../../../../public/assets/plus-large.png';
import Delete from '../../../../public/assets/delete-icon.png';
import Pencil from '../../../../public/assets/pencil.png';
import EditCategoryAction from './editCategoryAction';
import CreateCategory from './createCategory';
import crossIcon from '../../../../public/assets/xmark (1).png';
import Tooltip from './tooltip';


const TabName = ['Date', 'Lol', 'Flowers']
function GiftCategoryAction() {
    const [toggle, setToggle] = useState(false);
    const [closeState, setCloseState] = useState(false);
    const [editCategoryActionModal, setEditCategoryActionModal] = useState('');
    const [createCategory, setCreateCategory] = useState(false);
    const [tabs, setTabs] = useState('Date')

    const CategoryAction = (e: any) => {
        setEditCategoryActionModal(e);
        setCloseState(true);
    }
    const ActiveTab = (items: any) => {
        setTabs(items)
    }
    const [isActive, setActive] = useState(false);

    return (
        <>
            <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center justify-center gap-3 '>
                    {TabName.map((items) => (
                        <div className={`font-bold px-3 py-1.5 rounded-xl flex items-center justify-center gap-2 relative cursor-pointer ${tabs === items ? 'bg-[#FFFFFF29]' : 'bg-transparent'}`} onClick={(e) => ActiveTab(items)}
                        >
                            <span className={tabs == items ? "text-white" : 'text-[#979797]'}>{items}</span>
                            <button className='' onClick={() => setToggle(!toggle)}>
                                {tabs === items ?
                                    <VerticalDots /> : ''}
                            </button>

                            {toggle ?
                                <>
                                    {tabs === items &&
                                        <div className='bg-[#1A1A1A] p-4 flex flex-col gap-3 rounded-[14px] w-[251px] h-[92px] absolute left-0 top-12 z-50' >
                                            <button className='flex items-center gap-2' onClick={() => CategoryAction(1)} >
                                                <Image src={Pencil} className='w-full h-full' alt='' />
                                                <p>Edit name</p>
                                            </button>

                                            <button className='flex items-center gap-2' onClick={() => CategoryAction(2)} >
                                                <Image src={Delete} className='w-full h-full' alt={''} />
                                                <p>Delete</p>
                                            </button>

                                        </div>
                                    }
                                </>
                                : ''
                            }
                        </div>
                    ))}


                    <button className='pt-1 relative group' onClick={() => setCreateCategory(true)}>
                        <Image src={plusIcon} alt='' className='h-[18px] w-[18px]' />
                        <Tooltip Text={'You can create only 4 categories'} W={64} />
                    </button>
                </div>
                <button className=''>
                    <div className={`relative ${isActive ? "w-[360px]" : 'w-[30px]'}`} >
                        <span className='absolute left-2 top-[9px]' onClick={() => setActive(!isActive)}
                        ><Image className='h-[24px] w-[24px]' src={Search} alt={''} /></span>
                        <input type="text" className={`border-2 border-[#FFFFFF52] bg-transparent rounded-[14px] h-12 px-4 active:border-[#5848BC] focus:border-[#5848BC] focus:ring-transparent pl-8 text-xl w-full ${isActive ? "border" : 'border-none'}`} placeholder='Search' />
                        {isActive ?
                            <span className='absolute right-2 top-3' onClick={() => setActive(!isActive)} ><Image className='w-full h-full' src={crossIcon} alt={''} /></span> : ''
                        }
                    </div>
                </button>
            </div>
            {closeState &&
                <EditCategoryAction closeModal={setCloseState} EditCategoryActionModal={editCategoryActionModal} />
            }
            {createCategory && <CreateCategory CategoryClose={setCreateCategory} Steps={4} />
            }
        </>
    )
}

export default GiftCategoryAction