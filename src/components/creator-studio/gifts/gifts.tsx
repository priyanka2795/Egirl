import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import plusIcon from '@/assets/plus-large.webp';
import ImagePlusIcon from '../svg/image-plus.svg';
import RightUp from '../svg/arrow-up-right.svg';
import GiftCreateModal from './giftCreateModal';
import Delete from '@/assets/delete-icon.webp';
import Pencil from '@/assets/pencil.webp';
import DotsHorizontal from '@/assets/dots-horizontal-white.webp';
import GiftCardEditModal from './giftCardEditModal';
import GiftCategoryAction from './giftCategoryAction';
import GiftCardDelete from './giftCardDelete';
import { deleteGift, getGiftCategory, getGifts } from 'services/services';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { tokenRefresh } from 'redux/api/RefreshTokenApi';

function Gifts() {
  const dispatch = useAppDispatch();
  const [giftModal, setGiftModal] = useState<boolean>(false);
  const [giftCard, setGiftCard] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [giftEditPopup, setGiftEditPopup] = useState<number | undefined>();
  const [tabs, setTabs] = useState<string>('');
  const [GiftCardName, setGiftCardName] = useState<string[]>([]);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [deleteBtnStep, setDeleteBtnStep] = useState<number>(0);
  const [addCategory, setAddCategory] = useState<string[]>([]);
  const [giftImageSet, setGiftImageSet] = useState('');
  const [giftName, setGiftName] = useState('');
  const [giftCategory, setGiftCategory] = useState<any>();
  const [createCategory, setCreateCategory] = useState<boolean>(false);
  const [createCategoryToggle, setCreateCategoryToggle] =
    useState<boolean>(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<any>();
  const characterId = Cookies.get('character_id') || '';
  const token: any = Cookies.get('accessToken');
  const refreshTokenData: any = useAppSelector(
    (state) => state.tokenRefresh?.tokenData
  );
  const [selectedCategoryGifts, setSelectedCategoryGifts] = useState<any>();
  const [selectedGiftData, setSelectedGiftData] = useState<any>();
  const [updateGift, setUpdateGift] = useState(false);
  const [deleteGiftToggle, setDeleteGiftToggle] = useState<boolean>(false);
  const [createGiftToggle, setCreateGiftToggle] = useState<any>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryMaxLimit , setCategoryMaxLimit] = useState(false)

  const EditGift = (val: number, data: any) => {
    setSelectedGiftData(data);
    setGiftCard(true);
    setGiftEditPopup(val);
  };

  // const DeleteGiftCardModal = (index: number, num: number, data: any) => {
  //   deleteGift(characterId, [data?.gift_id], token)
  //     .then((res: any) => {
  //       console.log(res);
  //       setDeleteGiftToggle(!deleteGiftToggle);
  //     })
  //     .then((err: any) => {
  //       console.log(err);
  //     });
  //   setGiftCard(true);
  //   setGiftEditPopup(num);
  //   setDeleteBtnStep(1);
  //   setGiftName('giftName');
  // };

  const DeleteGiftCardModal = (index: number, step: number, data: any) => {
    setGiftEditPopup(step);
    setGiftCard(true);
    setGiftName('giftName');
    setSelectedGiftData(data);
    setDeleteBtnStep(1);
  };

  const DeleteGift = (data: any) => {
    deleteGift(characterId, [data?.gift_id], token)
      .then((res: any) => {
        setDeleteGiftToggle(!deleteGiftToggle);
      })
      .then((err: any) => {
        console.log(err);
      });
      setGiftCard(false); 
  };

  // const DeleteGift = (ind: number) => {
  //   setGiftCard(false);
  //   setGiftCardName((oldValue) => {
  //     return oldValue.filter((item: string, index: number) => index !== ind);
  //   });
  // };

  const DeleteAllGiftCard = () => {
    setDeleteModal(true);
    setDeleteBtnStep(2);
  };

  const ActiveTab = (items: string) => {
    setTabs(items);
    setToggle(!toggle);
  };

  useEffect(() => {
    if (refreshTokenData) {
      Cookies.set('accessToken', refreshTokenData);
    }
  }, [refreshTokenData]);
  const getAllCategory = () => {
    getGiftCategory(characterId, token)
      .then((response: any) => {
        if (response && response.data) {
          setGiftCategory(response?.data);
          if(response?.data?.length == 4){
            setCategoryMaxLimit(true)
          }else{
            setCategoryMaxLimit(false)
          }
          if (response?.response?.status === 401) {
            dispatch(tokenRefresh());
          }
        } else {
          console.error('Invalid response structure:', response);
        }
      })
      .catch((err) => {
        console.error(err, 'err????');
      });
  };

  useEffect(() => {
    getAllCategory();
  }, [createCategoryToggle]);

  useEffect(() => {
    if (giftCategory && giftCategory?.length > 0) {
      setSelectedCategoryId(giftCategory?.[0]?.gift_category_id);
    }
  }, [giftCategory]);

  useEffect(() => {
    getGifts(
      selectedCategoryId
        ? selectedCategoryId
        : giftCategory && giftCategory[0]?.gift_category_id,
      token
    )
      .then((res: any) => {
        console.log(res);

        const filteredGifts = res?.data?.filter((gift: any) =>
          gift.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSelectedCategoryGifts(filteredGifts);

        // setSelectedCategoryGifts(res?.data);
        if (res?.response?.status === 401) {
          dispatch(tokenRefresh());
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [
    selectedCategoryId,
    updateGift,
    deleteGiftToggle,
    giftCategory,
    createCategoryToggle,
    createGiftToggle,
    searchQuery
  ]);

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

      {
        // giftsView
        giftCategory && giftCategory?.length ? (
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
              selectedCategoryGifts={selectedCategoryGifts}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              categoryMaxLimit={categoryMaxLimit}
            />

            <div className='flex items-center justify-between mt-4'>
              <p className='text-[#979797]'>
                {`${selectedCategoryGifts?.length}/9`} gifts
              </p>
              <button
                className='flex items-center justify-center gap-1'
                onClick={() => DeleteAllGiftCard()}
              >
                <Image className='h-[18px] w-[18px]' src={Delete} alt={''} />
                <p>Clear all</p>
              </button>
            </div>

            <div className='grid items-center grid-cols-1 mt-4 gap-9 md:grid-cols-2 lg:grid-cols-3'>
              {selectedCategoryGifts?.map((item: any, index: number) => (
                <div
                  className='relative h-[300px] w-[300px] overflow-hidden rounded-xl'
                  key={item?.gift_id}
                >
                  {/* <Image
                  src={item?.media_url}
                  className='object-cover w-full h-full'
                /> */}
                  <img
                    src={item?.media_url}
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
                              onClick={() => EditGift(1, item)}
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
                              onClick={() => EditGift(2, item)}
                            >
                              <div>
                                <RightUp className='w-full h-full' alt={''} />
                              </div>
                              <p>Move to another category</p>
                            </button>

                            <button
                              className='flex items-center gap-2'
                              onClick={() =>
                                DeleteGiftCardModal(index, 3, item)
                              }
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
                DeleteBtnStep={deleteBtnStep}
                giftImageSet={giftImageSet}
                giftName={giftName}
                selectedGiftData={selectedGiftData}
                characterId={characterId}
                token={token}
                setUpdateGift={setUpdateGift}
                updateGift={updateGift}
                giftCategory={giftCategory}
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
        )
      }

      {giftModal && (
        <GiftCreateModal
          closeModal={setGiftModal}
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
          createGiftToggle={createGiftToggle}
          setCreateGiftToggle={setCreateGiftToggle}
        />
      )}
    </>
  );
}

export default Gifts;
