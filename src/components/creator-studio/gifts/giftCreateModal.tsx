import { Modal } from '@components/modal/modal'
import Image from 'next/image';
import React, { useState } from 'react'
import SelectImage from './selectImage';
import CreateCategory from './createCategory';

interface giftCreateModalProp {
    closeModal: any;
    GiftsView:any;
    GiftName:any;
    AddCategory:any;
}
function giftCreateModal({ closeModal,GiftsView,GiftName,AddCategory }: giftCreateModalProp) {
    const [steps, setSteps] = useState(1);

    return (
        <>
            <Modal
                open={true}
                modalClassName='flex flex-col h-auto  rounded-[14px] bg-[#1A1A1A]'
                closeModal={() => closeModal(false)}
                modalOverlayStyle='!bg-black/80'
            >
                <div className={'w-auto overflow-y-auto h-max'} >
                    {steps === 2 ? <SelectImage closeState={closeModal}  GiftsView={GiftsView} AddCategory={AddCategory} GiftName={GiftName}/> : ''}
                </div>


            </Modal>

            {steps === 1 ?
                <CreateCategory CategoryClose={closeModal}  Steps={setSteps} AddCategory={AddCategory} Previous /> : ''}
        </>
    )
}

export default giftCreateModal;