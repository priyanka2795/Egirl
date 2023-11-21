import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import plusIcon from '../../../../public/assets/plus-large.png';
import ImagePlusIcon from '../svg/image-plus.svg';
import MoreIcon from '../svg/MoreIcon.svg';
import RightUp from '../svg/arrow-up-right.svg';
import GiftCreateModal from './giftCreateModal';
import Delete from '../../../../public/assets/delete-icon.png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import Pencil from '../../../../public/assets/pencil.png';
import DotsHorizontal from '../../../../public/assets/dots-horizontal-white.png';
import GiftCardEditModal from './giftCardEditModal';
import GiftCategoryAction from './giftCategoryAction';
import GiftCardDelete from './giftCardDelete';
import { getGiftCategory, getGifts } from 'services/services';
import Cookies from 'js-cookie';

function Gifts() {
  const [giftModal, setGiftModal] = useState<boolean>(false);
  const [giftCard, setGiftCard] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [giftEditPopup, setGiftEditPopup] = useState<number | undefined>();
  const [tabs, setTabs] = useState<string>('');
  const [giftsView, setGiftsView] = useState<boolean>(false);
  const [GiftCardName, setGiftCardName] = useState<string[]>([]);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<number | undefined>();
  const [deleteBtnStep, setDeleteBtnStep] = useState<number>(0);
  const [addCategory, setAddCategory] = useState<string[]>([]);
  const [giftImageSet, setGiftImageSet] = useState('');
  const [giftName, setGiftName] = useState('');
  const [giftCategory , setGiftCategory] = useState<any>()
  const [createCategory, setCreateCategory] = useState<boolean>(false);
  const [createCategoryToggle , setCreateCategoryToggle] = useState<boolean>(false)
  const [selectedCategoryId , setSelectedCategoryId] = useState<any>()
  const characterId = Cookies.get('character_id') || '';
  const token : any =  Cookies.get('accessToken');
  const [selectedCategoryGifts , setSelectedCategoryGifts] = useState<any>()

  const EditGift = (val: number) => {
    setGiftCard(true);
    setGiftEditPopup(val);
  };


  const DeleteGiftCardModal = (
    index: number,
    num: number,
    giftName: string
  ) => {
    setGiftCard(true);
    setGiftEditPopup(num);
    setDeleteIndex(index);
    setDeleteBtnStep(1);
    setGiftName(giftName);
  };

  const DeleteGift = (ind: number) => {
    setGiftCard(false);
    setGiftCardName((oldValue) => {
      return oldValue.filter((item: string, index: number) => index !== ind);
    });
  };

  const DeleteAllGiftCard = () => {
    setDeleteModal(true);
    setDeleteBtnStep(2);
  };

  const ActiveTab = (items: string) => {
    setTabs(items);
    setToggle(!toggle);
  };


  const getAllCategory =  () => {
     getGiftCategory( characterId, token)
      .then((response :any) => {
        if (response && response.data) {
          setGiftCategory(response?.data)
          console.log(response.data, "res????");
        } else {
          console.error("Invalid response structure:", response);
        }
      })
      .catch((err) => {
        console.error(err, "err????");
      });
  };


  
  useEffect(() => {
    getAllCategory();
  }, [createCategoryToggle]);
  
useEffect(()=>{
  getGifts(selectedCategoryId ? selectedCategoryId : (giftCategory && giftCategory[0]?.gift_category_id) , token)
  .then((res:any)=>{
    console.log(res);
    setSelectedCategoryGifts(res?.data)
  })
  .catch((err:any)=>{
    console.log(err);
  })
},[selectedCategoryId])

  return (
    <>
      <div className='flex items-center justify-between'>
        <h4 className='text-2xl font-black'>Gifts</h4>
        <button
          className='flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#5848BC] px-4 py-[10px]'
          onClick={() => setGiftModal(true)}
        >
          <Image className='h-[18px] w-[18px]' src={plusIcon} alt={''} />
          Create
        </button>
      </div>

      {giftsView ? (
        <>
          <GiftCategoryAction
            AddCategory={addCategory}
            SetCategory={setAddCategory}
            giftCategory={giftCategory}
            characterId={characterId}
            token={token}
            setSelectedCategoryId={setSelectedCategoryId}
            setCreateCategoryToggle={setCreateCategoryToggle}
            createCategoryToggle={createCategoryToggle}
          />

          <div className='mt-4 flex items-center justify-between'>
            <p className='text-[#979797]'>{`${selectedCategoryGifts?.length}/9`} gifts</p>
            <button
              className='flex items-center justify-center gap-1'
              onClick={() => DeleteAllGiftCard()}
            >
              <Image className='h-[18px] w-[18px]' src={Delete} alt={''} />
              <p>Clear all</p>
            </button>
          </div>

          <div className='mt-4 grid grid-cols-1 items-center gap-9 md:grid-cols-2 lg:grid-cols-3'>
            {selectedCategoryGifts?.map((item: any, index: number) => (
              <div
                className='relative h-[300px] w-[300px] overflow-hidden rounded-xl'
                key={index}
              >
                {/* <Image
                  src={item?.media_url}
                  className='h-full w-full object-cover'
                /> */}
                <img src={item?.media_url} className='h-full w-full object-cover'/>
                
                <div className='absolute right-2 top-2'>
                  <button
                    className='h-[30px] w-[30px] rounded-full bg-[#0000007A] p-1'
                    onClick={() => ActiveTab(item)}
                  >
                    <Image
                      src={DotsHorizontal}
                      className='h-full w-full object-cover'
                      alt=''
                    />
                  </button>
                  {toggle ? (
                    <>
                      {tabs === item && (
                        <div className='absolute right-0 top-8 flex h-[130px] w-[251px] flex-col gap-3 rounded-[14px] bg-[#1A1A1A] p-4'>
                          <button
                            className='flex items-center gap-2'
                            onClick={() => EditGift(1)}
                          >
                            <Image
                              src={Pencil}
                              className='h-full w-full'
                              alt=''
                            />
                            <p>Edit name</p>
                          </button>

                          <button
                            className='flex items-center gap-2'
                            onClick={() => EditGift(2)}
                          >
                            <div>
                              <RightUp className='h-full w-full' alt={''} />
                            </div>
                            <p>Move to another category</p>
                          </button>

                          <button
                            className='flex items-center gap-2'
                            onClick={() => DeleteGiftCardModal(index, 3, item)}
                          >
                            <Image
                              src={Delete}
                              className='h-full w-full'
                              alt={''}
                            />
                            <p>Delete</p>
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    ''
                  )}
                </div>
                <div className='absolute bottom-0 w-full bg-[#000000A3] p-3 text-center'>
                  {item?.name}
                </div>
              </div>
            ))}
          </div>

          {giftCard && (
            <GiftCardEditModal
              closeModal={setGiftCard}
              GiftEditModal={giftEditPopup}
              DeleteGift={DeleteGift}
              DeleteIndex={deleteIndex}
              DeleteBtnStep={deleteBtnStep}
              giftImageSet={giftImageSet}
              giftName={giftName}
            />
          )}

          {deleteModal && (
            <GiftCardDelete
              DeleteModal={setDeleteModal}
              Heading={'Delete all gifts'}
              Content={
                'Are you sure you want to delete all gifts from the Date category?'
              }
              Img={true}
              DeleteGift
              DeleteIndex
              DeleteAllGift={setGiftCardName}
              DeleteBtnStep={deleteBtnStep}
              DeleteActionCategory
            />
          )}
        </>
      ) : (
        <div className='m-auto flex h-[514px] flex-col items-center justify-center'>
          <div className='flex w-[243px] flex-col items-center justify-center gap-3 text-center'>
            <div className='flex items-center justify-center rounded-full bg-[#FFFFFF0D] p-4 '>
              <ImagePlusIcon />
            </div>
            <p className='font-normal text-[13px] leading-[18px] text-[#979797]'>
              You don’t have any categories and gifts. Click on the button to
              create it.
            </p>
          </div>
        </div>
      )}

      {giftModal && (
        <GiftCreateModal
          closeModal={setGiftModal}
          GiftsView={setGiftsView}
          GiftName={GiftCardName}
          SetGiftName={setGiftCardName}
          AddCategory={addCategory}
          SetCategory={setAddCategory}
          giftCategory={giftCategory}
          giftImageSet={giftImageSet}
          setGiftImageSet={setGiftImageSet}
          setCreateCategory={setCreateCategory}
          createCategory={createCategory}
          setCreateCategoryToggle={setCreateCategoryToggle}
          createCategoryToggle={createCategoryToggle}
          
        />
      )}
    </>
  );
}

export default Gifts;
