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

interface GiftCategoryAction {
    AddCategory: any;
    SetCategory: any;
    // DeleteActionCategoryModal: any;
    // DeleteActionCategory: any;
}
function GiftCategoryAction({ AddCategory, SetCategory, }: GiftCategoryAction) {
    const [toggle, setToggle] = useState(false);
    const [closeState, setCloseState] = useState(false);
    const [editCategoryActionModal, setEditCategoryActionModal] = useState('');
    const [createCategory, setCreateCategory] = useState(false);
    const [isActive, setActive] = useState(false);
    const [tabs, setTabs] = useState(1);
    const [editName, setEditName] = useState();
    const [categoryActionIndex, setCategoryActionIndex] = useState();

    const CategoryAction = (e: any) => {
        setEditCategoryActionModal(e);
        setCloseState(true);
    }
    const ActiveTab = (items: any) => {
        setTabs(items)
    }

    const EditCategoryName = (name: any, step: any) => {
        setEditCategoryActionModal(step);
        setCloseState(true);
        setEditName(name)
    }
    const UpdateCategoryName = () => {

        if (editName) {
            console.log('Update');
        } else {
            console.log('Not Same');

        }

    }

    const DeleteActionCategoryModal = (ind: any, Step: any) => {
        setEditCategoryActionModal(Step);
        setCloseState(true);
        setCategoryActionIndex(ind);
    }

    const DeleteActionCategory = (ind: any) => {
        SetCategory((oldValue: any[]) => {
            return oldValue.filter((item: any, index: number, array: any) => index !== ind)
        })
    }


 



    return (
        <>
            <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center justify-center gap-3 '>
                    {AddCategory.map((items: any, index: any) => (
                        <div className={`font-bold px-3 py-1.5 rounded-xl flex items-center justify-center gap-2 relative cursor-pointer ${tabs === items ? 'bg-[#FFFFFF29]' : 'bg-transparent'}`} onClick={(e) => ActiveTab(items)}
                            key={index}
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
                                            <button className='flex items-center gap-2' onClick={() => EditCategoryName(items, 1)} >
                                                <Image src={Pencil} className='w-full h-full' alt='' />
                                                <p>Edit name</p>
                                            </button>

                                            <button className='flex items-center gap-2' onClick={() => DeleteActionCategoryModal(index, 2)} >
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


                    <button className='pt-1 relative group ' onClick={() => setCreateCategory(true)}>
                        <Image src={plusIcon} alt='' className='h-[18px] w-[18px]' />
                        <div className='absolute -left-[118px] -top-2.5 transform -translate-y-2/4 -translate-x-0 transition-all z-50'>
                            <Tooltip Text={'You can create only 4 categories'} />
                        </div>
                    </button>
                </div>
                <button className=''>
                    <div className={`relative ${isActive ? "w-[360px]" : 'w-[30px]'}`} >
                        <span className='absolute left-2 top-[10px]' onClick={() => setActive(!isActive)}
                        ><Image className='h-[24px] w-[24px]' src={Search} alt={''} /></span>
                        <input type="text" className={`border border-[#FFFFFF52] bg-transparent rounded-[14px] h-10 px-4 placeholder:text-white active:border-[#FFFFFF52] focus:border-[#FFFFFF52] focus:ring-transparent pl-10 text-[14px] w-full ${isActive ? "border" : 'border-none'}`} placeholder='Search' />
                        {isActive ?
                            <span className='absolute right-2 top-2' onClick={() => setActive(!isActive)} ><Image className='w-full h-full' src={crossIcon} alt={''} /></span> : ''
                        }
                    </div>
                </button>
            </div>
            
            {closeState &&
                <EditCategoryAction closeModal={setCloseState} EditCategoryActionModal={editCategoryActionModal} EditName={editName} SetEditName={setEditName} UpdateCategoryName={UpdateCategoryName} DeleteActionCategory={DeleteActionCategory} CategoryActionIndex={categoryActionIndex} />
            }
            {createCategory && <CreateCategory CategoryClose={setCreateCategory} Steps={4} AddCategory={AddCategory} SetCategory={SetCategory} Previous />
            }
        </>
    )
}

export default GiftCategoryAction