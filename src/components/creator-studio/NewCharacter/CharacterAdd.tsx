// @ts-nocheck

import React from 'react';
import Cross from '../../../../public/assets/svgImages/close-icon.svg';
import Image from 'next/image';
import { Modal } from '@components/modal/modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UserDetails } from '@components/user/user-details';
import Cookies from 'js-cookie';
import { postCharacter } from 'services/services';

const initialValues = {
  name: '',
  username: ''
};

interface CharacterAddProps {
  setCreateCharacterData: any;
  NewCharacterClose?: React.Dispatch<React.SetStateAction<boolean>>;
  SetUserGuide?: (value: boolean) => void;
  SetIsTourOpen?: (value: boolean) => void;
  UserGuide?: any;
  setTourCount?: React.Dispatch<React.SetStateAction<number>> | any;
  setUserDetails:any
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  username: Yup.string().required('Username is required')
});

const CharacterAdd: React.FC<CharacterAddProps> = ({
  NewCharacterClose,
  SetUserGuide,
  SetIsTourOpen,
  setTourCount,
  setCreateCharacterData,
  UserGuide,
  setUserDetails
}) => {
  const token: any = Cookies.get('accessToken');
  const onSubmit = (values: any, { resetForm }: any) => {
    setCreateCharacterData((prevState: any) => ({
      ...prevState,
      display_name: values?.name,
      username: values?.username
    }));
    setUserDetails((prevState: any) => ({
      ...prevState,
      display_name: values?.name,
      username: values?.username
    }));
    const createData = {
      display_name:values?.name,
      username: values?.username
    }

    postCharacter(createData , token)
    .then((res:any)=>{
      console.log(res);
    })
    .catch((err:any)=>{
      console.log(err);
    })

    resetForm();
    SetUserGuide?.(false);
    SetIsTourOpen?.(true);
    setTourCount?.(0);
  };

  return (
    <Modal
      open={true}
      closeModal={() => NewCharacterClose?.()}
      modalOverlayStyle='!bg-black/80 '
      modalClassName={`bg-[#121212] flex  flex-col flex-start rounded-[20px]`}
    >
      <div className='flex items-start gap-2 self-stretch border-b border-white/[0.08] p-6'>
        <div className='font-bold w-full gap-1 text-lg leading-6'>
          Add New Character
        </div>
        <div className='h-6 w-6'>
          <Cross onClick={() => NewCharacterClose?.()} />
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className='inline-flex flex-col items-start rounded-[20px] bg-[1A1A1A] '>
            <div className='flex flex-col items-start gap-8 p-6'>
              <div className='flex w-[420px] flex-col gap-1.5'>
                <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
                  Name
                </div>
                <div className='flex w-full flex-col gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
                  <Field
                    type='text'
                    name='name'
                    placeholder='ex. Mika-chan'
                    autoComplete='off'
                    className='font-normal border-none bg-transparent p-0 text-[15px] leading-6 text-[#979797] focus:ring-0'
                  />
                </div>
                <ErrorMessage
                  name='name'
                  component='p'
                  className='text-[#FF5336]'
                />
              </div>

              <div className='flex w-[420px] flex-col gap-1.5'>
                <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
                  Username
                </div>
                <div className='flex w-full flex-col gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
                  <Field
                    type='text'
                    name='username'
                    autoComplete='off'
                    placeholder='ex. Mika-chan'
                    className='font-normal border-none bg-transparent p-0 text-[15px] leading-6 text-[#979797] focus:ring-0'
                  />
                </div>
                <ErrorMessage
                  name='username'
                  component='p'
                  className='font-normal text-sm leading-[18px] text-[#FF5336]'
                />
              </div>

              <div className='flex items-start gap-3 self-stretch '>
                <button
                  type='button'
                  onClick={() => NewCharacterClose?.()}
                  className='font-bold h-12 w-[50%] items-center gap-2 rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-base leading-[22px]'
                >
                  Cancel
                </button>
                {UserGuide ? (
                  <button
                    type='submit'
                    className='font-bold h-12 w-[50%] items-center gap-2 rounded-[14px]  bg-[#5848BC] px-5 py-[13px] text-base leading-[22px]'
                  >
                    Create
                  </button>
                ) 
                : (
                  <button
                    type='submit'
                    className='font-bold h-12 w-[50%] items-center gap-2 rounded-[14px]  bg-[#5848BC] px-5 py-[13px] text-base leading-[22px]'
                    onClick={() => NewCharacterClose?.()}
                  >
                    Create
                  </button>
                )}
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default CharacterAdd;

// import React from 'react';
// import Cross from '../../../../public/assets/svgImages/close-icon.svg';
// import Image from 'next/image';
// import SearchIcon from '../../../../public/assets/search-alt.png';
// import { Modal } from '@components/modal/modal';
// import { useFormik } from 'formik';
// import { signUpSchema } from '../../../../src/schemas/index';

// const initialValues = {
//   name: '',
//   username: ''
// };
// interface CharacterAdd {
//   setUserDetails: any;
//   NewCharacterClose?: any;
//   SetUserGuide?: any;
//   SetIsTourOpen?: any;
//   UserGuide?: any;
//   setTourCount?: React.Dispatch<React.SetStateAction<number>> | any;
// }
// const CharacterAdd = ({
//   NewCharacterClose,
//   SetUserGuide,
//   SetIsTourOpen,
//   setTourCount,
//   setUserDetails,
//   UserGuide
// }: CharacterAdd) => {
//   const { values, errors, handleBlur, touched, handleChange, handleSubmit} =
//     useFormik({
//       initialValues: initialValues,
//       onSubmit: (values, action) => {
//         console.log(values , "val????");
//         setUserDetails((prevState: any) => ({
//           ...prevState,
//           display_name: values?.name,
//           username: values?.username
//         }));

//         console.log('Values', values);
//         action.resetForm();
//         SetUserGuide(false), SetIsTourOpen(true), setTourCount(0);
//         // NewCharacterClose(false);
//       }
//     });

//   const nameLength = values.name.length;
//   const usernameLength = values.username.length;
//   return (
//     <Modal
//       open={true}
//       closeModal={() => NewCharacterClose(false)}
//       modalOverlayStyle='!bg-black/80 '
//       modalClassName={`bg-[#121212] flex  flex-col flex-start rounded-[20px]`}
//     >
//       <div className='flex items-start gap-2 self-stretch border-b border-white/[0.08] p-6'>
//         <div className='w-full gap-1 text-lg font-bold leading-6'>
//           Add New Character
//         </div>
//         <div className='w-6 h-6'>
//           <Cross onClick={() => NewCharacterClose(false)} />
//         </div>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className='inline-flex flex-col items-start rounded-[20px] bg-[1A1A1A] '>
//           {/* input , buttons */}
//           <div className='flex flex-col items-start gap-8 p-6'>
//             {/* name */}
//             <div className='flex w-[420px] flex-col gap-1.5'>
//               <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
//                 Name
//               </div>
//               {/* <div className='items-center gap-2.5 py-3 px-4 self-stretch rounded-[14px] bg-white/[0.05]'>
//                            <input className='text-[#979797] bg-white/[0.05] text-[15px] font-normal leading-6' type='text'>

//                            </input>
//                        </div>
//               errors.name && touched.name   */}
//               <div
//                 className={
//                   nameLength == 0 && touched.name
//                     ? 'flex w-full flex-col gap-[10px] rounded-[14px] border border-[#FF5336] bg-white/[0.05] px-4 py-3'
//                     : 'flex w-full flex-col gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'
//                 }
//               >
//                 <input
//                   name='name'
//                   placeholder='ex. Mika-chan'
//                   type='text'
//                   autoComplete='off'
//                   value={values.name}
//                   // onChange={handleChange}
//                   onChange={(e) => {
//                     handleChange(e);
//                     console.log('Updated values:', values);
//                   }}
//                   onBlur={handleBlur}
//                   className='font-normal border-none bg-transparent p-0 text-[15px] leading-6 text-[#979797] focus:ring-0 '
//                 />
//               </div>
//               {nameLength == 0 && touched.name ? (
//                 <p className='text-[#FF5336] '>{errors.name}</p>
//               ) : null}
//             </div>

//             {/* username */}
//             <div className='flex w-[420px] flex-col gap-1.5'>
//               <div className='self-stretch text-[13px] font-semibold leading-[18px] text-[#979797]'>
//                 Username
//               </div>
//               {/* errors.username && touched.username  */}
//               <div
//                 className={
//                   usernameLength == 0 && touched.username
//                     ? 'flex w-full flex-col gap-[10px] rounded-[14px] border border-[#FF5336] bg-white/[0.05] px-4 py-3'
//                     : 'flex w-full flex-col gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'
//                 }
//               >
//                 <input
//                   name='username'
//                   autoComplete='off'
//                   value={values.username}
//                   // onChange={handleChange}
//                   onChange={(e) => {
//                     handleChange(e);
//                     console.log('Updated values:', values);
//                   }}
//                   onBlur={handleBlur}
//                   placeholder='ex. Mika-chan'
//                   type='text'
//                   className='font-normal border-none bg-transparent p-0 text-[15px] leading-6 text-[#979797] focus:ring-0 '
//                 />
//               </div>
//               {usernameLength == 0 && touched.username ? (
//                 <p className='font-normal text-sm leading-[18px] text-[#FF5336]'>
//                   {errors.username}
//                 </p>
//               ) : null}
//             </div>

//             {/* buttons */}
//             <div className='flex items-start self-stretch gap-3 '>
//               <button
//                 onClick={() => NewCharacterClose(false)}
//                 className='font-bold h-12 w-[50%] items-center gap-2 rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-base leading-[22px]'
//               >
//                 Cancel
//               </button>
//               {UserGuide ? (
//                 <button
//                   type='submit'
//                   className='font-bold h-12 w-[50%] items-center gap-2 rounded-[14px]  bg-[#5848BC] px-5 py-[13px] text-base leading-[22px]'
//                   // onClick={() => (
//                   //   SetUserGuide(false), SetIsTourOpen(true), setTourCount(0)
//                   // )}
//                   onClick={() => {
//                     SetUserGuide(false);
//                     SetIsTourOpen(true);
//                     setTourCount(0);
//                   }}
//                 >
//                   Create
//                 </button>
//               ) : (
//                 <button
//                   type='submit'
//                   className='font-bold h-12 w-[50%] items-center gap-2 rounded-[14px]  bg-[#5848BC] px-5 py-[13px] text-base leading-[22px]'
//                   onClick={() => {
//                     NewCharacterClose(false);
//                   }}
//                 >
//                   Create
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default CharacterAdd;
