import React, { useState } from 'react'
import Image from 'next/image'
import crossIcon from '../../../public/assets/xmark.png'
import searchIcon from '../../../public/assets/search-icon.png'
import plusIcon from '../../../public/assets/plus-block-icon.png';

const AddToCollectionModal = () => {
    const [newCollectionModal, setNewCollectionModal] = useState(false);
  return (
    <div className='flex flex-col w-[753px] h-[800px] rounded-[20px] bg-[#1A1A1A] ml-20 mb-5'>
        <div className='flex gap-2 p-6 border-b border-white/[0.08]'>
            <div className='flex text-[#FFFFFF] text-[18px] font-bold'>Add to collection</div>
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
                    <div>
                        <input type='text' placeholder='Search' className='bg-white/[0.05] border-none text-[#979797] text-[15px] font-normal' />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-3 px-6 py-4'>
                
                    <div className='flex h-[279px] flex-col items-center justify-center rounded-[16px] border border-white/[0.08] bg-[#121212]'>
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
                    <div></div>
                    <div></div>
                
                <div></div>
            </div>
        </div>

        <div></div>
    </div>
  )
}

export default AddToCollectionModal
