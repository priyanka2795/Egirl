import React from 'react';
import Cross from '../../../../public/assets/svgImages/close-icon.svg';
import Image from 'next/image';
import SearchIcon from '../../../../public/assets/search-alt.png';
import { Modal } from '@components/modal/modal';
import { useFormik } from 'formik';
import { signUpSchema } from '../../../../src/schemas/index';

const initialValues = {
  name: '',
  username: ''
};
interface CharacterAdd {
  NewCharacterClose: any;
}
const CharacterAdd = ({ NewCharacterClose }: CharacterAdd) => {
 
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      validationSchema: signUpSchema,
      initialValues: initialValues,
      onSubmit: (values, action) => {
        console.log('Values', values);
        action.resetForm();
        // NewCharacterClose(false);
      }
    });

  return (
    <Modal
      open={true}
      closeModal={() => NewCharacterClose(false)}
      modalOverlayStyle='!bg-black/80 '
      modalClassName={`bg-[#121212] flex  flex-col flex-start rounded-[20px]`}
    >
      <div className='flex items-start gap-2 self-stretch border-b border-white/[0.08] p-6'>
        <div className='w-full gap-1 text-lg font-bold leading-6'>
          Add New Character
        </div>
        <div className='w-6 h-6' onClick={() => NewCharacterClose(false)}>
          <Cross />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='inline-flex flex-col items-start rounded-[20px] bg-[1A1A1A] '>
          {/* input , buttons */}
          <div className='flex flex-col items-start gap-8 p-6'>
            {/* name */}
            <div className='flex w-[420px] flex-col gap-1.5'>
              <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
                Name
              </div>
              {/* <div className='items-center gap-2.5 py-3 px-4 self-stretch rounded-[14px] bg-white/[0.05]'>
                           <input className='text-[#979797] bg-white/[0.05] text-[15px] font-normal leading-6' type='text'>
                      
                           </input>
                       </div> */}
              <div className={errors.name && touched.name ? "border border-[#FF5336] flex w-full flex-col gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3":'flex w-full flex-col gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'}>
                <input
                  name='name'
                  placeholder='ex. Mika-chan'
                  type='text'
                  autoComplete='off'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='border-none bg-transparent p-0 text-[15px] font-normal leading-6 text-[#979797] focus:ring-0 '
                />

              </div>
              {errors.name && touched.name ? (
                  <p className='text-[#FF5336] '>{errors.name}</p>
                ) : null}
            </div>

            {/* username */}
            <div className='flex w-[420px] flex-col gap-1.5'>
              <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
                Username
              </div>

              <div className={errors.username && touched.username ? "border border-[#FF5336] flex w-full flex-col gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3":'flex w-full flex-col gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'}>
                <input
                  name='username'
                  autoComplete='off'
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='ex. Mika-chan'
                  type='text'
                  className='border-none bg-transparent p-0 text-[15px] font-normal leading-6 text-[#979797] focus:ring-0 '
                />
                
              </div>
              {errors.username && touched.username ? (
                  <p className='text-[#FF5336] text-sm font-normal leading-[18px]'>{errors.username}</p>
                ) : null}
            </div>

            {/* buttons */}
            <div className='flex items-start self-stretch gap-3 '>
              <button 
              onClick={()=>NewCharacterClose(false)}
              className='w-[50%] h-12 items-center gap-2 rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-base font-bold leading-[22px]'>
                Cancel
              </button>
              <button
                type='submit'
                className='w-[50%] h-12 items-center gap-2 rounded-[14px] bg-[#5848BC]  px-5 py-[13px] text-base font-bold leading-[22px]'
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default CharacterAdd;