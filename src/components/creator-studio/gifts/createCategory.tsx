import Image from 'next/image';
import React, { useState } from 'react';
import crossIcon from '../../../../public/assets/xmark (1).png';
import { Modal } from '@components/modal/modal';
import SelectImage from './selectImage';
import NotFound from 'pages/404';

interface CreateCategory {
  CategoryClose: React.Dispatch<React.SetStateAction<boolean>>;
  Steps: any;
  Previous?: any;
  AddCategory: string[];
  SetCategory: React.Dispatch<React.SetStateAction<string[]>>;
}
const CreateCategory = ({
  CategoryClose,
  Steps,
  Previous,
  AddCategory,
  SetCategory
}: CreateCategory) => {
  const [inputvalue, setInputValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue(value);
  };
  const FindData = AddCategory.find((items) => items === inputvalue);

  const onSubmit = () => {
    if (inputvalue === '') {
      alert('Please Enter Value');
    } else if (Steps === 3) {
      if (inputvalue === FindData) {
        alert('Category Name is already defend');
      }else{
        SetCategory([...AddCategory, inputvalue]);
        Previous(false);
      }
    } else if (Steps === 4) {
      SetCategory([...AddCategory, inputvalue]);
      CategoryClose(false);
    } else {
      if (inputvalue === FindData) {
        alert('Category Name is already defend');
      } else {
        SetCategory([...AddCategory, inputvalue]);
        Steps(2);
      }
    }
    console.log(FindData, 'FindData');
  };
  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A] w-[385px]'
        closeModal={() => CategoryClose(false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6'>
          <h5 className='text-lg font-semibold'>Create a new category</h5>
          <div
            className='w-6 h-6 cursor-pointer'
            onClick={() => CategoryClose(false)}
          >
            <Image className='w-full h-full' src={crossIcon} alt={''} />
          </div>
        </div>
        <div className='p-6'>
          <div className='flex flex-col text-[#979797] '>
            <label htmlFor='category' className='pb-[6px] text-[13px]'>
              Category Name
            </label>
            <input
              type='text'
              id='category'
              placeholder='Type a category name'
              className='h-12 rounded-[14px] border-none bg-[#FFFFFF0D] px-4 text-white placeholder:text-[#979797] focus:border-[#5848BC] focus:ring-[#5848BC] active:border-[#5848BC]'
              name='category'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='grid grid-cols-2 gap-3 mt-6 font-semibold text-white'>
            {Steps === 3 ? (
              <button
                className='rounded-[14px] border border-[#FFFFFF52] px-5 py-3'
                onClick={() => Previous(false)}
              >
                Cancel
              </button>
            ) : (
              <button
                className='rounded-[14px] border border-[#FFFFFF52] px-5 py-3'
                onClick={() => CategoryClose(false)}
              >
                Cancel
              </button>
            )}
            {Steps === 3 ? (
              <button
                className='rounded-[14px] bg-[#5848BC] px-5 py-3'
                onClick={onSubmit}
              >
                Next
              </button>
            ) : Steps === 4 ? (
              <button
                className='rounded-[14px] bg-[#5848BC] px-5 py-3'
                onClick={() => onSubmit()}
              >
                Next
              </button>
            ) : (
              <button
                className='rounded-[14px] bg-[#5848BC] px-5 py-3'
                onClick={() => onSubmit()}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateCategory;
