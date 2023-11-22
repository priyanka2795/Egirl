import React, { useEffect, useState } from 'react';
import VerticalDots from '../svg/dots-vertical.svg';
import Search from '../../../../public/assets/search-alt (1).png';
import Image from 'next/image';
import plusIcon from '../../../../public/assets/plus-large.png';
import Delete from '../../../../public/assets/delete-icon.png';
import Pencil from '../../../../public/assets/pencil.png';
import EditCategoryAction from './editCategoryAction';
import CreateCategory from './createCategory';
import crossIcon from '../../../../public/assets/xmark (1).png';
import Tooltip from './tooltip';
import { deleteGiftCategory, updateGiftCategory } from 'services/services';

interface GiftCategoryAction {
  AddCategory: string[];
  SetCategory: React.Dispatch<React.SetStateAction<string[]>>;
  giftCategory: any;
  characterId: string | null;
  token: any;
  createCategoryToggle: boolean;
  setCreateCategoryToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<number>>;
}
function GiftCategoryAction({
  AddCategory,
  SetCategory,
  giftCategory,
  characterId,
  token,
  createCategoryToggle,
  setCreateCategoryToggle,
  setSelectedCategoryId
}: GiftCategoryAction) {
  const [toggle, setToggle] = useState<boolean>(false);
  const [closeState, setCloseState] = useState<boolean>(false);
  const [editCategoryActionModal, setEditCategoryActionModal] =
    useState<number>();
  const [createCategory, setCreateCategory] = useState<boolean>(false);
  const [isActive, setActive] = useState<boolean>(false);
  const [tabs, setTabs] = useState<number>(0);
  const [editName, setEditName] = useState<string>('');
  const [categoryActionIndex, setCategoryActionIndex] = useState<number>();
  const [toggledItemIndex, setToggledItemIndex] = useState<number | null>(null);
  const [editCategoryId, setEditCategoryId] = useState<number | undefined>();
  const [editCategoryData, setEditCategoryData] = useState<any>();
  const [deleteCategoryData, setDeleteCategoryData] = useState<any>({});

  const CategoryAction = (val: number) => {
    setEditCategoryActionModal(val);
    setCloseState(true);
  };
  const ActiveTab = (index: number, categoryId: number) => {
    setTabs(index);
    setSelectedCategoryId(categoryId);
  };

  const EditCategoryName = (name: string, id: number, step: number) => {
    setEditCategoryActionModal(step);
    setCloseState(true);
    setEditName(name);
    setEditCategoryId(id);
  };
  const UpdateCategoryName = () => {
    updateGiftCategory(editCategoryData, token)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setCreateCategoryToggle(!createCategoryToggle);
    setCloseState(false);
  };

  const DeleteActionCategoryModal = (
    index: number,
    Step: number,
    categoryId: number
  ) => {
    setEditCategoryActionModal(Step);
    setCloseState(true);
    setCategoryActionIndex(index);
    setDeleteCategoryData({
      character_id: characterId,
      gift_category_id: categoryId
    });
  };

  const DeleteActionCategory = (i: number) => {
    // SetCategory((oldValue: string[]) => {
    //   return oldValue.filter((item: string, index: number) => index !== i);
    // });
    console.log(deleteCategoryData, '????data');
    // deleteGiftCategory(deleteCategoryData , token)
    // .then((res:any)=>{
    //   console.log(res);
    // })
    // .catch((err:any)=>{
    //   console.log(err);
    // })
  };

  const handleToggle = (index: number) => {
    setToggle(!toggle);
    setToggledItemIndex(index);
  };

  return (
    <>
      <div className='mt-4 flex items-center justify-between'>
        <div className='flex items-center justify-center gap-3 '>
          {giftCategory?.map((items: any, index: number) => (
            <div
              className={`font-bold relative flex cursor-pointer items-center justify-center gap-2 rounded-xl px-3 py-1.5 ${
                tabs === index ? 'bg-[#FFFFFF29]' : 'bg-transparent'
              }`}
              onClick={() => ActiveTab(index, items?.gift_category_id)}
              key={index}
            >
              <span className={tabs == index ? 'text-white' : 'text-[#979797]'}>
                {items?.name}
              </span>
              <button className='' onClick={() => handleToggle(index)}>
                {tabs === index ? <VerticalDots /> : ''}
              </button>

              {toggle && toggledItemIndex === index ? (
                <>
                  {/* {tabs === items && ( */}
                  <div className='absolute left-0 top-12 z-50 flex h-[92px] w-[251px] flex-col gap-3 rounded-[14px] bg-[#1A1A1A] p-4'>
                    <button
                      className='flex items-center gap-2'
                      onClick={() =>
                        EditCategoryName(
                          items?.name,
                          items?.gift_category_id,
                          1
                        )
                      }
                    >
                      <Image src={Pencil} className='h-full w-full' alt='' />
                      <p>Edit name</p>
                    </button>

                    <button
                      className='flex items-center gap-2'
                      onClick={() =>
                        DeleteActionCategoryModal(
                          index,
                          2,
                          items?.gift_category_id
                        )
                      }
                    >
                      <Image src={Delete} className='h-full w-full' alt={''} />
                      <p>Delete</p>
                    </button>
                  </div>
                  {/* )} */}
                </>
              ) : (
                ''
              )}
            </div>
          ))}

          <button
            className='group relative pt-1 '
            onClick={() => setCreateCategory(true)}
          >
            <Image src={plusIcon} alt='' className='h-[18px] w-[18px]' />
            <div className='absolute -left-[119px] -top-[5px] z-50 w-max -translate-x-0 -translate-y-2/4 transform transition-all'>
              <Tooltip Text={'You can create only 4 categories'} />
            </div>
          </button>
        </div>
        <button className=''>
          <div className={`relative ${isActive ? 'w-[360px]' : 'w-[30px]'}`}>
            <span
              className='absolute left-2 top-[10px]'
              onClick={() => setActive(!isActive)}
            >
              <Image className='h-[24px] w-[24px]' src={Search} alt={''} />
            </span>
            <input
              type='text'
              className={`h-10 w-full rounded-[14px] border border-[#FFFFFF52] bg-transparent px-4 pl-10 text-[14px] placeholder:text-white focus:border-[#FFFFFF52] focus:ring-transparent active:border-[#FFFFFF52] ${
                isActive ? 'border' : 'border-none'
              }`}
              placeholder='Search'
            />
            {isActive ? (
              <span
                className='absolute right-2 top-2'
                onClick={() => setActive(!isActive)}
              >
                <Image className='h-full w-full' src={crossIcon} alt={''} />
              </span>
            ) : (
              ''
            )}
          </div>
        </button>
      </div>

      {closeState && (
        <EditCategoryAction
          closeModal={setCloseState}
          EditCategoryActionModal={editCategoryActionModal}
          EditName={editName}
          SetEditName={setEditName}
          UpdateCategoryName={UpdateCategoryName}
          DeleteActionCategory={DeleteActionCategory}
          CategoryActionIndex={categoryActionIndex}
          editCategoryId={editCategoryId}
          characterId={characterId}
          setEditCategoryData={setEditCategoryData}
        />
      )}
      {createCategory && (
        <CreateCategory
          CategoryClose={setCreateCategory}
          Steps={4}
          AddCategory={AddCategory}
          SetCategory={SetCategory}
          Previous
        />
      )}
    </>
  );
}

export default GiftCategoryAction;
