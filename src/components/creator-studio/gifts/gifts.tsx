import React, { useState } from 'react';
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

function Gifts() {
  const [giftModal, setGiftModal] = useState<boolean>(false);
  const [giftCard, setGiftCard] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [giftEditPopup, setGiftEditPopup] = useState<number | undefined>();
  const [tabs, setTabs] = useState('');
  const [giftsView, setGiftsView] = useState<boolean>(false);
  const [GiftCardName, setGiftCardName] = useState<string[]>([]);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<number | undefined>();
  const [deleteBtnStep, setDeleteBtnStep] = useState<number>(0);
  const [addCategory, setAddCategory] = useState<string[]>([]);

  const EditGift = (val: number) => {
    setGiftCard(true);
    setGiftEditPopup(val);
  };

  const DeleteGiftCardModal = (index: number, num: number) => {
    setGiftCard(true);
    setGiftEditPopup(num);
    setDeleteIndex(index);
    setDeleteBtnStep(1);
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

  return (
    <>
      <div className='flex items-center justify-between'>
        <h4 className='text-2xl font-bold'>Gifts</h4>
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
          />

          <div className='flex items-center justify-between mt-4'>
            <p className='text-[#979797]'>1/9 gifts</p>
            <button
              className='flex items-center justify-center gap-1'
              onClick={() => DeleteAllGiftCard()}
            >
              <Image className='h-[18px] w-[18px]' src={Delete} alt={''} />
              <p>Clear all</p>
            </button>
          </div>

          <div className='grid items-center grid-cols-1 mt-4 gap-9 md:grid-cols-2 lg:grid-cols-3'>
            {GiftCardName.map((item: string, index: number) => (
              <div
                className='relative h-[300px] w-[300px] overflow-hidden rounded-xl'
                key={index}
              >
                <Image
                  src={AlbumFirst}
                  className='object-cover w-full h-full'
                />
                <div className='absolute right-2 top-2'>
                  <button
                    className='h-[30px] w-[30px] rounded-full bg-[#0000007A] p-1'
                    onClick={() => ActiveTab(item)}
                  >
                    <Image
                      src={DotsHorizontal}
                      className='object-cover w-full h-full'
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
                              className='w-full h-full'
                              alt=''
                            />
                            <p>Edit name</p>
                          </button>

                          <button
                            className='flex items-center gap-2'
                            onClick={() => EditGift(2)}
                          >
                            <div>
                              <RightUp className='w-full h-full' alt={''} />
                            </div>
                            <p>Move to another category</p>
                          </button>

                          <button
                            className='flex items-center gap-2'
                            onClick={() => DeleteGiftCardModal(index, 3)}
                          >
                            <Image
                              src={Delete}
                              className='w-full h-full'
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
                  {item}
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
              CategoryActionIndex
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
            <p className='text-[13px] font-normal leading-[18px] text-[#979797]'>
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
        />
      )}
    </>
  );
}

export default Gifts;
