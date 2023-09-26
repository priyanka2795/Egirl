import { Modal } from '@components/modal/modal'
import Image from 'next/image';
import React from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import Pencil from '../../../../public/assets/pen.png';
import Image1 from '../../../../public/assets/media-1.png';
import Image2 from '../../../../public/assets/jennieYoon.png';
import Image3 from '../../../../public/assets/jennieContent.png';
import Image4 from '../../../../public/assets/media-3.png';
import Image5 from '../../../../public/assets/mirandaContent.png';
import Image6 from '../../../../public/assets/mirandalImg.png';
import Image7 from '../../../../public/assets/sarahScarlet.png';
import Image8 from '../../../../public/assets/style-gen-img6.png';

const detailsImages =[Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,];

interface AlbumDetailsModal {
    CloseModal: any;
}

const AlbumDetailsModal = ({ CloseModal }: AlbumDetailsModal) => {
    return (
        <Modal
            open={true}
            modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A] w-[800px]'
            closeModal={() => CloseModal(false)}
            modalOverlayStyle='!bg-black/80'
        >
            <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                <h5 className='text-lg font-semibold'>Album details</h5>
                <div className='w-6 h-6 cursor-pointer' onClick={() => CloseModal(false)}>
                    <Image className='w-full h-full' src={crossIcon} alt={''} />
                </div>
            </div>
            <div className='p-6'>
                <div className='bg-[#FFFFFF0D] rounded-[14px] p-5 flex flex-col gap-5'>
                    <div className='flex items-center justify-between'>
                        <p className='font-semibold text-[15px]'>Images <span className='text-[#515151] ml-1'>8</span></p>
                        <div>
                            <Image className='w-full h-full' src={Pencil} alt={''} />
                        </div>
                    </div>
                    <div className='grid grid-cols-8 gap-2'>
                        {detailsImages.map((items,index)=>(
                        <div key={index} className='w-[80px] h-[80px] rounded-[7px] overflow-hidden'>
                            <Image className='w-full h-full' src={items} alt={''} />
                        </div>
                        ))                        }
                    </div>
                    <div className=''>
                        <h5 className='font-bold text-sm pb-[6px]'>Fantasy world & nature album</h5>
                        <p className='text-[#979797] leading-5 text-sm'>Fantasy worlds are fictional settings that are often inspired by mythological, historical, or imaginary places. These worlds can be inhabited by various creatures such as dragons, unicorns, or fairies, and are often characterized by magic, adventure, and quests.</p>
                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default AlbumDetailsModal