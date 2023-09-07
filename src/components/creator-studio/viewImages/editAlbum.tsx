import { Modal } from '@components/modal/modal'
import Image from 'next/image';
import React, { useState } from 'react'
import crossIcon from '../../../../public/assets/xmark (1).png';
import Star from "../svg/star.svg";
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import Pencil from '../../../../public/assets/pen.svg';
import image1 from '../../../../public/assets/vi-image-1.png'
import user from '../../../../public/assets/circle-user.png';
import imageSquare from '../../../../public/assets/image-square.png';
import image from '../../../../public/assets/image.png';
import undo from '../../../../public/assets/Undo.png';
import deleteIcon from '../../../../public/assets/trash-blank-alt.png';
import image2 from '../../../../public/assets/vi-image-2.png'
import image3 from '../../../../public/assets/vi-image-3.png'
import image4 from '../../../../public/assets/vi-image-4.png'
import image5 from '../../../../public/assets/vi-image-5.png'
import image6 from '../../../../public/assets/vi-image-6.png'
import image7 from '../../../../public/assets/vi-image-7.png'


const CoverImage = [
    {
        image: image,
        text: 'Make album cover'
    },
    {
        image: user,
        text: 'Make profile picture'
    },
    {
        image: imageSquare,
        text: 'Make profile cover'
    },
    {
        image: undo,
        text: 'Move to album'
    },
    {
        image: deleteIcon,
        text: 'Delete'
    },
];

const images = [
    {
      image: image1
    },
    {
      image: image2
    },
    {
      image: image3
    },
    {
      image: image4
    },
    {
      image: image5
    },
    {
      image: image6
    },
    {
      image: image7
    },
    {
      image: image6
    },
  ];

interface EditAlbum {
    CloseModal: any;
}
const EditAlbum = ({ CloseModal }: EditAlbum) => {
    const [editAlbumImg, setEditAlbumImg] = useState(null)
    const [coverImg, setCoverImg] = useState(false);
    const EditAlbumImgToggle = (index: any) => {
        setEditAlbumImg((prev) => (prev === index ? null : index));
    }
    return (
        <Modal
            open={true}
            modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A] w-[844px]'
            closeModal={() => CloseModal(false)}
            modalOverlayStyle='!bg-black/80'
        >
            {coverImg ?
                <>
                    <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6'>
                        <h5 className='text-lg font-semibold'>Choose a cover for the Fantasy world & nature album</h5>
                        <div className='w-6 h-6 cursor-pointer' onClick={() => setCoverImg(false)}>
                            <Image className='w-full h-full' src={crossIcon} alt={''} />
                        </div>
                    </div>
                    <div className='p-6 overflow-y-auto h-[500px]'>
                        <div className='grid grid-cols-4 gap-2'>
                            {images.map((items) => (
                                <div className='w-[193px] h-[193px] sub-banner' onClick={() => setCoverImg(false)}>
                                    <Image src={items.image} className='w-full h-full' />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
                :
                <>
                    <div className='flex justify-between items-center border-b border-[#FFFFFF14] p-6 '>
                        <h5 className='text-lg font-semibold'>Edit album</h5>
                        <div className='w-6 h-6 cursor-pointer' onClick={() => CloseModal(false)}>
                            <Image className='w-full h-full' src={crossIcon} alt={''} />
                        </div>
                    </div>
                    <div className='p-6'>
                        <div className='flex gap-4 border-b border-[#FFFFFF14] pb-5'>
                            <div className='rounded-[14px] w-[257px] h-[200px] overflow-hidden relative'>
                                <Image src={AlbumFirst} className='w-full h-full object-cover' />
                                <div className='absolute bottom-0 left-0 h-10 bg-[#000000A3] w-full flex justify-center items-center gap-[6px] cursor-pointer' onClick={() => setCoverImg(true)}>
                                    <Pencil />
                                    <p> Edit cover</p>
                                </div>
                            </div>

                            <div className='flex-1'>
                                <div className='flex flex-col text-[#979797] mb-3'>
                                    <label htmlFor="category" className='text-[13px] font-semibold pb-[6px]'>Album Name</label>
                                    <input type="text" id='category' placeholder='Fantasy world & nature' className='bg-[#FFFFFF0D] rounded-[14px] h-12 w-full border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC] text-white placeholder:text-[#979797]' name='category' />
                                </div>
                                <div className='flex flex-col text-[#979797] '>
                                    <label htmlFor="Description" className='text-[13px] font-semibold pb-[6px]'>Description (Optional)</label>
                                    <textarea rows={3} id='Description' className='bg-[#FFFFFF0D] rounded-[14px] w-full  border-none resize-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC] text-white placeholder:text-[#979797]' placeholder='Type a description...'>
                                    </textarea>
                                </div>
                            </div>

                        </div>

                        <div className='pt-6'>
                            <p className='font-semibold pb-3 text-[15px]'>Images</p>
                            <div className='h-[500px] overflow-y-auto overflow-x-hidden'>
                                <div className='grid grid-cols-3 gap-2 '>
                                    {images.map((item, index) => (
                                        <div className='w-[240px] h-[190px] sub-banner  relative '>
                                            <Image src={item.image} className='' />
                                            <div className='p-1.5 bg-[#0000007A] rounded-full absolute top-2 right-2 cursor-pointer' onClick={() => EditAlbumImgToggle(index)}>
                                                <Pencil />
                                            </div>
                                            {editAlbumImg === index &&
                                                <div className='absolute top-12 right-3 z-50' >
                                                    <div className='flex flex-col w-[218px] rounded-[14px] bg-[#1A1A1A]'>
                                                        {CoverImage.map((item, index) => {
                                                            return (
                                                                <div key={index} className={`cursor-pointer flex gap-2 px-4 py-[10px]`}>
                                                                    <Image src={item.image} alt={''} />
                                                                    <div className='text-[#FFFFFF] text-[14px] font-normal leading-[18px]' >{item.text}</div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>}

                                        </div>
                                    ))}

                                </div>
                            </div>

                        </div>

                        <div className='flex items-center justify-end mt-6 gap-3 text-white font-semibold'>
                            <button className='rounded-[14px] px-5 py-3 border border-[#FFFFFF52]' onClick={() => CloseModal(false)}>Cancel</button>
                            <button className='bg-[#5848BC] rounded-[14px] px-5 py-3 ' onClick={() => CloseModal()}>Save</button>

                        </div>
                    </div>
                </>

            }


        </Modal>
    )
}

export default EditAlbum