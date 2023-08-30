import React, { useState } from 'react'
import Image from 'next/image'
import plusIcon from '../../../../public/assets/plus-large.png';
import ImagePlusIcon from "../svg/image-plus.svg";
import MoreIcon from "../svg/MoreIcon.svg";
import RightUp from "../svg/arrow-up-right.svg";
import GiftCreateModal from './giftCreateModal';
import Delete from '../../../../public/assets/delete-icon.png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import Pencil from '../../../../public/assets/pencil.png';
import DotsHorizontal from "../../../../public/assets/dots-horizontal-white.png";
import GiftCardEditModal from './giftCardEditModal';
import GiftCategoryAction from './giftCategoryAction';
import GiftCardDelete from './giftCardDelete';


function Gifts() {
  const [giftModal, setGiftModal] = useState(false);
  const [giftCard, setGiftCard] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [giftEditPopup, setGiftEditPopup] = useState()
  const [tabs, setTabs] = useState('');
  const [giftsView, setGiftsView] = useState(false);
  const [GiftCardName, setGiftCardName] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState();
  const [deleteBtnStep, setDeleteBtnStep] = useState(0);
  const [addCategory, setAddCategory] = useState([]);


  const EditGift = (e: any) => {
    setGiftCard(true);
    setGiftEditPopup(e);
  }

  const DeleteGiftCardModal = (ind: any, Num: any) => {
    setGiftCard(true);
    setGiftEditPopup(Num);
    setDeleteIndex(ind);
    setDeleteBtnStep(1);
  }

  const DeleteGift = (ind: any) => {
    setGiftCard(false)
    setGiftCardName(oldValue => {
      return oldValue.filter((item: any, index: number, array: any) => index !== ind)
    })
  }

  const DeleteAllGiftCard = () => {
    setDeleteModal(true)
    setDeleteBtnStep(2)

  }

  const ActiveTab = (items: any) => {
    setTabs(items);
    setToggle(!toggle);
  }

  return (
    <>

      <div className='flex items-center justify-between'>
        <h4 className='text-2xl font-bold'>Gifts</h4>
        <button className='bg-[#5848BC] flex items-center justify-center h-10 gap-1.5 rounded-xl px-4 py-[10px]' onClick={() => setGiftModal(true)}>
          <Image className='h-[18px] w-[18px]' src={plusIcon} alt={''} />
          Create
        </button>
      </div>
     

      {giftsView ? <>
        <GiftCategoryAction AddCategory={addCategory} SetCategory={setAddCategory}  />

        <div className='flex items-center justify-between mt-4'>
          <p className='text-[#979797]'>1/9 gifts</p>
          <button className='flex items-center justify-center gap-1' onClick={() => DeleteAllGiftCard()} >
            <Image className='h-[18px] w-[18px]' src={Delete} alt={''} />
            <p>Clear all</p>
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 items-center gap-9'>
          {GiftCardName.map((item: any, index: number) => (
            <div className='relative w-[300px] h-[300px] rounded-xl overflow-hidden' key={index}>
              <Image src={AlbumFirst} className='w-full h-full object-cover' />
              <div className='absolute top-2 right-2'>
                <button className='w-[30px] h-[30px] bg-[#0000007A] rounded-full p-1' onClick={() => ActiveTab(item)}>
                  <Image src={DotsHorizontal} className='object-cover w-full h-full' alt='' />
                </button>
                {toggle ?
                  <>
                    {tabs === item &&
                      <div className='bg-[#1A1A1A] p-4 flex flex-col gap-3 rounded-[14px] w-[251px] h-[130px] absolute right-0 top-8'>
                        <button className='flex items-center gap-2' onClick={() => EditGift(1)}>
                          <Image src={Pencil} className='w-full h-full' alt='' />
                          <p>Edit name</p>
                        </button>

                        <button className='flex items-center gap-2' onClick={() => EditGift(2)}>
                          <div>
                            <RightUp className='w-full h-full' alt={''} />
                          </div>
                          <p>Move to another category</p>
                        </button>

                        <button className='flex items-center gap-2'
                          onClick={() => DeleteGiftCardModal(index, 3)} >
                          <Image src={Delete} className='w-full h-full' alt={''} />
                          <p>Delete</p>
                        </button>

                      </div>
                    }
                  </>
                  : ''}
              </div>
              <div className='absolute bottom-0 bg-[#000000A3] w-full p-3 text-center'>
                {item}
              </div>
            </div>
          ))}
        </div>

        {giftCard && <GiftCardEditModal closeModal={setGiftCard} GiftEditModal={giftEditPopup} DeleteGift={DeleteGift} DeleteIndex={deleteIndex} DeleteBtnStep={deleteBtnStep} />
        }

        {deleteModal &&
          <GiftCardDelete DeleteModal={setDeleteModal} Heading={'Delete all gifts'}
            Content={'Are you sure you want to delete all gifts from the Date category?'}
            Img={true} DeleteGift DeleteIndex DeleteAllGift={setGiftCardName} DeleteBtnStep={deleteBtnStep} CategoryActionIndex DeleteActionCategory />
           
        }

      </>
        :
        <div className='flex justify-center items-center max-w-[243px] w-full h-full m-auto'>
          <div className='flex flex-col items-center gap-3 text-center'>
            <div className='w-14 h-14 rounded-full bg-[#FFFFFF0D] flex justify-center items-center '>
              <ImagePlusIcon />
            </div>
            <p className='text-[#979797] text-[13px]'>You don’t have any categories and gifts.
              Click on the button to create it.</p>
          </div>

        </div>
      }

      {giftModal && <GiftCreateModal closeModal={setGiftModal} GiftsView={setGiftsView} GiftName={GiftCardName} SetGiftName={setGiftCardName} AddCategory={addCategory} SetCategory={setAddCategory} />
      }

    </>
  )
}

export default Gifts;