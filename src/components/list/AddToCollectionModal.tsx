import React, { useState } from 'react'
import Image from 'next/image'
import crossIcon from '../../../public/assets/xmark.png'
import searchIcon from '../../../public/assets/search-icon.png'
import plusIcon from '../../../public/assets/plus-block-icon.png';
import MainImage from '../../../public/assets/gallery-tab-img-3.png';
import pinkMobGirl from '../../../public/assets/gallery-tab-img-2.png';
import { Modal } from '@components/modal/modal';


const collectionFrame = [
    {
        image: MainImage,
        imageName: 'Realistic'
    },
    {
        image: MainImage,
        imageName: 'Realistic'
    },
    {
        image: MainImage,
        imageName: 'Catgirls'
    },
    {
        image: MainImage,
        imageName: 'Realistic'
    },
    {
        image: pinkMobGirl,
        imageName: 'One more long name...'
    },
];

const AddToCollectionModal = () => {
    const [newCollectionModal, setNewCollectionModal] = useState(false);
  return (
    <Modal
    open={true}
    modalClassName='flex flex-col h-max w-[753px] rounded-[20px] bg-[#121212] overflow-hidden mt-10 mb-10 ml-5 bookmark-img-text'
    // closeModal={() => closeModalState(false)}
    closeModal={() => {}}
    modalOverlayStyle='!bg-black/80'
  >    
    {/* <div className=' h-max rounded-[20px] bg-[#1A1A1A] ml-20 mb-5'> */}
        <div className='flex gap-2 p-6 border-b border-white/[0.08]'>
            <div className='flex text-white text-[18px] leading-6 font-bold'>Add to collection</div>
            <div className='w-6 h-6 mt-1 ml-[528px]'>
                <Image className='w-full h-full' src={crossIcon} alt={''} />
            </div>
        </div>

        <div className='w-full pt-4'>
            <div className='w-full px-6 py-2'>
                <div className=' w-full flex gap-[10px] rounded-[8px] px-4 py-3 bg-white/[0.05]'>
                    <div className='w-6 h-6 mt-[10px]'>
                        <Image className='w-full h-full' src={searchIcon} alt={''} />
                    </div>
                    <div className="w-full">
                        <input type='text' placeholder='Search' className='w-full bg-transparent border-none text-[#979797] text-[15px] font-normal focus:outline-0 focus:ring-0' />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-3 px-6 py-4'>
                <div className='flex h-[279px] flex-col items-center justify-center rounded-[16px] border border-white/[0.08] bg-white/[0.05]'>
                        <Image src={plusIcon} alt='' className='object-contain mb-4' />
                        <div
                            className='flex flex-col items-center justify-center cursor-pointer'
                            onClick={() => setNewCollectionModal(true)}
                        >
                            <h5 className='mb-[20px] text-sm font-semibold'>
                              Create a new collection{' '}
                            </h5>
                            <div className='w-max rounded-[10px] bg-white/[0.08] px-4 py-[7px] text-xs font-bold text-white'>
                              Create
                            </div>
                        </div>
                </div>

                {collectionFrame.map((item, index) => {
                    return(
                        <div className='flex flex-col items-start h-[279px] overflow-hidden group rounded-2xl bg-white/[0.05] add-to-collection'>
                            <div className='relative flex items-center justify-center overflow-hidden'>
                                <div className='w-full'>
                                  <Image src={item.image} alt='' className='object-cover' />
                                </div>
                                <div className='absolute top-0 right-0 w-full h-full custom-checkbox'>
                                  <div className='pt-4 pr-4 text-right'>
                                    <input type='checkbox' id={`checked-${index}`} />
                                    <label htmlFor={`checked-${index}`}></label>
                                  </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-start self-stretch gap-3 p-4'>
                                <div className='flex items-center self-stretch gap-1'>
                                    <div className='text-sm font-semibold text-[#FFFFFF]'>
                                       {item.imageName}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        <div className='flex items-end justify-end gap-3 px-6 py-4'>
            <button className='flex px-4 py-[10px] justify-center items-center rounded-xl border border-white/[0.32] text-[#FFFFFF] text-[14px] font-bold'>Cancel</button>
            <button className='flex px-4 py-[10px] justify-center items-center rounded-xl bg-[#5848BC] text-[#FFFFFF] text-[14px] font-bold'>Save</button>
        </div>
    {/* </div> */}
    </Modal>
  )
}

export default AddToCollectionModal
