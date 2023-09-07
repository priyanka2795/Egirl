import Image from 'next/image'
import React, { useState } from 'react'
import pic from '../../../../public/assets/Collar.png';
import { Modal } from '@components/modal/modal';
import CloseIcon from '../../../../public/assets/xmark-style.png';
import searchIcon from '../../../../public/assets/search-alt.png';

const SelfMode = [
  { name: 'Anime', img: pic },
  { name: 'Artistic', img: pic },
  { name: 'Red Dress', img: pic },
  { name: 'Fantasy', img: pic },
  { name: 'Photocell', img: pic },
  { name: 'Artistries', img: pic },
  { name: 'Animes', img: pic },
  { name: 'Fantast', img: pic },
]
const AddedStyle = [
  { name: 'Anime', img: pic },
  { name: 'Artistic', img: pic },
  { name: 'Red Dress', img: pic },
  { name: 'Fantasy', img: pic },

]
interface AddStyleModal { 
  SetOpenStyle: any;
}
const StyleTab = ['Your Styles', 'Popular'];

const AddStyleModal = ({ SetOpenStyle }: AddStyleModal) => {
  const [styleTabs, setStyleTabs] = useState('Your Styles')
  const [selectImages, setSelectImages] = useState([] as any);


  const SelectImage = (name: any) => {
    // setSelectImages([...selectImages, name])
    setSelectImages((prev: any) => (prev === name ? null : name));
  }


  return (

    <Modal
      open={true}
      closeModal={() => SetOpenStyle(false)}
      modalOverlayStyle='!bg-black/80 '
      modalClassName={`bg-[#121212] flex flex-col flex-start relative rounded-[20px]`}
    >
      <div className='rounded-[20px] bg-[#121212] '>
        {/* Header */}
        <div className='flex justify-between items-center border-b-white/[0.08] px-8 border-white/[0.08] border-b pb-6 pt-8'>
          <h5 className='text-lg font-bold'>
            Style
          </h5>
          <button className='w-[24px] h-[24px]' onClick={() => SetOpenStyle(false)}>
            <Image src={CloseIcon} className='' />
          </button>
        </div>
        {/* frame */}
        <div className='flex items-center gap-3 px-8 py-4'>
          {/* tab */}
          {StyleTab.map((items) => (
            <div className={`px-4 py-2 gap-1.5 rounded-xl cursor-pointer ${styleTabs == items ? 'bg-white/[0.16]' : 'text-[#979797]'}`} onClick={(e) => setStyleTabs(e.target.innerText)}><p className={`text-[15px] font-bold`}>{items}</p>
            </div>
          ))}

        </div>

        {/* search bar */}
        <div className='px-8 pb-6 border-b border-[#FFFFFF14]'>
          <div className='flex w-full gap-[10px] rounded-[10px] bg-white/[0.05] p-3'>
            <div className='w-6 h-6'>
              <Image
                className='w-full h-full'
                src={searchIcon}
                alt={''}
                id='myinput'
              />
            </div>
            <input
              placeholder='Search'
              type='text'
              className='border-none bg-transparent p-0 text-[15px] font-light leading-6 placeholder:text-[#979797] focus:ring-0 flex-1'
            />
          </div>
        </div>
        <div className='h-[500px] overflow-y-auto '>
          <div className='mt-4 flex flex-col gap-4 px-8 '>
            {/* self made */}
            <h6 className='text-lg font-bold leading-6 text-white'>Self Made</h6>
            <div className='grid grid-cols-4 gap-x-3 gap-y-4'>
              {SelfMode.map((items) => (
                <>
                  <div className={`group relative h-[174px] w-[175px] rounded-xl cursor-pointer bg-[#121212] overflow-hidden border-[2px] ${selectImages === items.name ? 'border-[#5848BC]' : 'border-[#121212]'} `} onClick={() => SelectImage(items.name)}>
                    <div className={``}>
                      <Image src={items.img} className='shrink-0 rounded-xl' />
                    </div>
                    <div className={`absolute bottom-0 ${selectImages === items.name ? 'bg-[#5848BC]' : 'bg-[#000000CC]'} h-[34px] w-full flex justify-center items-center `}>
                      <p className='text-[13px] font-semibold'>{items.name}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <h6 className='text-lg font-bold leading-6 text-white'>Added Styles</h6>
            <div className='grid grid-cols-4 gap-x-3 gap-y-4'>
              {AddedStyle.map((items) => (
                <>
                  <div className={`group relative h-[174px] w-[175px] rounded-xl cursor-pointer bg-[#121212] overflow-hidden border-[2px]  border-[#121212] `} >
                    <div className={``}>
                      <Image src={items.img} className='shrink-0 rounded-xl' />
                    </div>
                    <div className={`absolute bottom-0 h-[34px] w-full flex justify-center items-center bg-[#000000CC]`}>
                      <p className='text-[13px] font-semibold'>{items.name}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>

          </div>
        </div>


        {/* Added Styles */}


        <div className='flex flex-row self-stretch gap-3 px-8 pt-4 pb-8'>
          <button
            onClick={() => SetOpenStyle(false)}
            className='flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] font-bold'
          >
            Cancel
          </button>
          <button
            onClick={() => SetOpenStyle(false)}
            className='flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-[#5848BC] bg-[#5848BC] px-5 py-[13px] font-bold'
          >
            Save
          </button>
        </div>

      </div>
    </Modal >

  )
}

export default AddStyleModal