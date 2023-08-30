import { Modal } from '@components/modal/modal'
import Image from 'next/image';
import React from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import ImageSquareGray from '../svg/image-square-gray.svg';
import plusIcon from '../../../../public/assets/plus-large.png';
import MoveImgFirst from '../svg/Image-block.png';
import MoveImg from '../svg/Image-block2.png';
import ImageSquare from '../svg/image-square.png';
import GiftCardDelete from './giftCardDelete';
// dots-horizontal-white
interface CardEditModal {
    closeModal: any;
    GiftEditModal: any;
    DeleteGift:any;
    DeleteIndex:any;
    DeleteBtnStep:any;
}
const moveData = [
    {
        name: 'Date',
        imgpath: MoveImgFirst,
        gifts: '0/9gifts'
    },
    {
        name: 'Summer',
        imgpath: MoveImg,
        gifts: '2/9 gifts'
    },
    {
        name: 'Tokyo',
        imgpath: ImageSquare,
        gifts: '9/9gifts'
    }

]
function GiftCardEditModal({ closeModal, GiftEditModal,DeleteGift,DeleteIndex,DeleteBtnStep }: CardEditModal) {

console.log(GiftEditModal,'GiftEditModal');

    return (
        <>
            <Modal
                open={true}
                modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A]'
                closeModal={() => closeModal(false)}
                modalOverlayStyle='!bg-black/80'
            >
                {GiftEditModal === 1 ?

                    <div className='w-[385px] '>
                        <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                            <h5 className='text-lg font-semibold'>Edit name</h5>
                            <div className='w-6 h-6 cursor-pointer' onClick={() => closeModal(false)}>
                                <Image className='w-full h-full' src={crossIcon} alt={''} />
                            </div>
                        </div>
                        <div className='p-6'>
                            <div className='max-w-[156px] max-h-[156px] rounded-xl overflow-hidden m-auto mb-5'>
                                <Image className='w-full h-full object-cover' src={AlbumFirst} />
                            </div>
                            <div className=' flex flex-col text-[#979797]'>
                                <label htmlFor="name" className='text-[13px] pb-1'>Gift Name</label>
                                <input type="text" id='name' placeholder='Romantic dinner' className='bg-[#FFFFFF0D] rounded-[14px] h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC]' />
                            </div>
                            <div className='grid grid-cols-2 mt-6 gap-3 text-white font-semibold'>
                                <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => closeModal(false)}>Cancel</button>
                                <button className='bg-[#5848BC] rounded-[14px] px-5 py-3' onClick={() => closeModal(false)}>Save</button>

                            </div>
                        </div>
                    </div> : GiftEditModal === 2 ?

                        <div className='w-[385px] '>

                            <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                                <h5 className='text-lg font-semibold'>Romantic dinner</h5>
                                <div className='w-6 h-6 cursor-pointer' onClick={() => closeModal(false)}>
                                    <Image className='w-full h-full' src={crossIcon} alt={''} />
                                </div>
                            </div>
                            <div className='p-6'>
                                <div className='max-w-[156px] max-h-[156px] rounded-xl overflow-hidden m-auto mb-5'>
                                    <Image className='w-full h-full object-cover' src={AlbumFirst} />
                                </div>
                                <div className=' flex flex-col pb-4 gap-3'>
                                    <p className='text-[13px] font-semibold text-[#979797]'>Move to</p>
                                    {moveData.map((items) => (
                                        <div className={`border rounded-[14px] px-4 py-3 border-[#FFFFFF29]`}>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex items-center gap-3'>
                                                    <div className='bg-[#FFFFFF0D] flex items-center justify-center rounded-lg w-[40px] h-[40px]'>
                                                        <Image src={items.imgpath} className='w-full h-full m-auto' />
                                                    </div>
                                                    <div className=''>
                                                        <p className='font-semibold'>{items.name}</p>
                                                        <p className='text-xs text-[#979797]'>{items.gifts}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                <button className='flex items-center gap-2 font-semibold pb-3' >
                                    <Image className='w-full h-full' src={plusIcon} alt={''} />
                                    <p>New Category</p>
                                </button>

                                <div className='grid grid-cols-2 mt-6 gap-3 text-white font-semibold'>
                                    <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => closeModal(false)}>Cancel</button>
                                    <button className='bg-[#5848BC] rounded-[14px] px-5 py-3' onClick={() => closeModal(false)}>Save</button>

                                </div>
                            </div>
                        </div> : ''}

            </Modal>
            {GiftEditModal === 3 ?
                <GiftCardDelete DeleteModal={closeModal} Heading={'Delete gift'} Content={'Are you sure you want to delete the Romantic dinner gift?'} Img={false} DeleteGift={DeleteGift}  DeleteIndex={DeleteIndex} DeleteAllGift DeleteBtnStep={DeleteBtnStep} DeleteActionCategory CategoryActionIndex   /> : ''
                
            }
        </>

    )
}

export default GiftCardEditModal