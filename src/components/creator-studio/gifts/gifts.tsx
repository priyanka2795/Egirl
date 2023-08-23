import React, { useState } from 'react'
import Image from 'next/image'
import plusIcon from '../../../../public/assets/plus-large.png';
import ImagePlusIcon from "../svg/image-plus.svg";
import VerticalDots from "../svg/dots-vertical.svg";
import MoreIcon from "../svg/MoreIcon.svg";
import RightUp from "../svg/arrow-up-right.svg";
import GiftCreateModal from './giftCreateModal';
import Search from '../../../../public/assets/search-alt (1).png';
import Delete from '../../../../public/assets/delete-icon.png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import Pencil from '../../../../public/assets/pencil.png';
import Edit from '../../../../public/assets/pen.svg';



function Gifts() {
  const [giftModal, setGiftModal] = useState(false)
  const [toggle, setToggle] = useState(false)
  return (
    <>

      <div className='flex justify-between items-center'>
        <h4 className='font-bold text-2xl'>Gifts</h4>
        <button className='bg-[#5848BC] flex items-center justify-center gap-1.5 rounded-xl px-4 py-[10px]' onClick={() => setGiftModal(true)}>
          <Image className='h-[18px] w-[18px]' src={plusIcon} alt={''} />
          Create
        </button>
      </div>

      <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center justify-center gap-3 '>
          <button className='font-bold px-3 py-1.5 bg-[#FFFFFF29] rounded-xl flex items-center justify-center gap-1 '>Date
            <VerticalDots />
          </button>
          <button className='pt-1'>
            <Image src={plusIcon} alt='' className='h-[18px] w-[18px]' />
          </button>
        </div>
        <button className='' >
          <Image className='h-[24px] w-[24px]' src={Search} alt={''} />
        </button>
      </div>

      <div className='flex justify-between items-center mt-4'>
        <p className='text-[#979797]'>1/9 gifts</p>
        <button className='flex items-center justify-center gap-1 ' >
          <Image className='h-[18px] w-[18px]' src={Delete} alt={''} />
          <p>Clear all</p>
        </button>
      </div>

      <div className='grid grid-cols-3 mt-4'>
        <div className='relative max-w-[300px] max-h-[350px]  rounded-xl overflow-hidden'>
          <Image src={AlbumFirst} className='w-full h-full object-cover' />
          <div className='absolute top-2 right-2'>
            <button onClick={() => setToggle(!toggle)}>
              <MoreIcon />
            </button>
            {toggle &&
              <div className='bg-[#1A1A1A] p-4 flex flex-col gap-3 rounded-[14px] w-[251px] h-[130px] absolute right-0 top-8'>
                <button className='flex items-center gap-2'>
                  <Image src={Pencil} className='w-full h-full' alt='' />
                  <p>Edit name</p>
                </button>

                <button className='flex items-center gap-2'>
                  <div>
                    <RightUp className='w-full h-full' alt={''} />
                  </div>
                  <p>Move to another category</p>
                </button>

                <button className='flex items-center gap-2'>
                  {/* <div> */}
                  <Image src={Delete} className='w-full h-full' alt={''} />
                  <p>Delete</p>
                </button>

              </div>
            }
          </div>
          <div className='absolute bottom-0 bg-[#000000A3] w-full p-3 text-center'>
            Romantic dinner
          </div>
        </div>

        <div className='relative max-w-[300px] max-h-[350px]  rounded-xl overflow-hidden'>
          <Image src={AlbumFirst} className='w-full h-full object-cover' />
          <div className='absolute top-2 right-2'>

            <MoreIcon />
          </div>
          <div className='absolute bottom-0 bg-[#000000A3] w-full p-3 text-center'>
            Romantic dinner
          </div>
        </div>

        <div className='relative max-w-[300px] max-h-[350px]  rounded-xl overflow-hidden'>
          <Image src={AlbumFirst} className='w-full h-full object-cover' />
          <div className='absolute top-2 right-2'>

            <MoreIcon />
          </div>
          <div className='absolute bottom-0 bg-[#000000A3] w-full p-3 text-center'>
            Romantic dinner
          </div>
        </div>

      </div>


      <div className='flex justify-center items-center max-w-[243px] w-full h-full m-auto'>
        <div className='text-center flex flex-col items-center gap-3'>
          <div className='w-14 h-14 rounded-full bg-[#FFFFFF0D] flex justify-center items-center '>
            <ImagePlusIcon />
          </div>
          <p className='text-[#979797] text-[13px]'>You don’t have any categories and gifts.
            Click on the button to create it.</p>
        </div>

      </div>



      {giftModal && <GiftCreateModal closeModal={setGiftModal} />

      }
    </>
  )
}

export default Gifts