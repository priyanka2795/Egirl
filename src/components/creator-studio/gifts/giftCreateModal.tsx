import { Modal } from '@components/modal/modal'
import Image from 'next/image';
import React, { useState } from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import AlbumSecound from '../../../../public/assets/mirandalImg.png';
import Edit from '../../../../public/assets/pen.svg';
import Check from '../svg/check.svg';
import ImageSquare from '../svg/image-square.svg';
import plusIcon from '../../../../public/assets/plus-large.png';
import SelectImage from './selectImage';
import CreateCategory from './createCategory';

interface giftCreateModalProp {
    closeModal: any;
}

function giftCreateModal({ closeModal }: giftCreateModalProp) {
    const [addCategory, setAddCategory] = useState(true);
    const [steps, setSteps] = useState(1);

    return (
        <>
            <Modal
                open={true}
                modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A]'
                closeModal={() => closeModal(false)}
                modalOverlayStyle='!bg-black/80'
            >
                <div className={'w-auto'} >
                    {steps === 2 ? <SelectImage closeState={closeModal} /> : ''}
                </div>


            </Modal>

            {steps === 1 ?
                <CreateCategory CategoryClose={closeModal}  Steps={setSteps} /> : ''}
        </>
    )
}

export default giftCreateModal;