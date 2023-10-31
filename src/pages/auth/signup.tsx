import React, { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../../../types/database';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Image from 'next/image';
import vector1 from '../../../public/assets/Vector 1.png';
import vector2 from '../../../public/assets/Vector 2.png';
import CheckedIcon from './svg/checkedIcon.svg';
import CrossIcon from './svg/xMark.svg';
import SigninTemplate from './signinTemplate';
import WelcomeStepsModal from './welcomeSteps';
import SigninLoginOpt from './SigninLoginOpt';
import { ErrorMessage, Field, Form, Formik } from 'formik';

// const validationSchema = Yup.object({
//   username: Yup.string().required('Please Enter a username'),
//   email: Yup.string()
//     .email("That's an invalid email")
//     .required('Please Enter your Email'),
//   verifyemail: Yup.string()
//     .required()
//     .oneOf([Yup.ref('email')], "That's an invalid email"),
//   password: Yup.string()
//     .required('Please Enter your password')
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//       "That's an invalid password"
//     )
// });
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  verifyemail: Yup.string()
    .required()
    .oneOf([Yup.ref('email')], "That's an invalid email"),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must meet criteria'
    )
});
const initialValues = {
  username: '',
  email: '',
  verifyemail: '',
  password: ''
};
export default function SignUp() {
  const router = useRouter();
  const supabase = useSupabaseClient<Database>();
  const [password, setPassword] = useState('');
  const [isMinLength, setIsMinLength] = useState<boolean>(false);
  const [hasNumberOrSpecialChar, setHasNumberOrSpecialChar] =
    useState<boolean>(false);

  const [welcomeStepsModal, setWelcomeStepsModal] = useState<boolean>(false);

  const [errorMsg, setErrorMsg] = useState('');

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Check if the password meets the minimum length requirement (8 characters)
    setIsMinLength(newPassword.length >= 8);

    // Check if the password contains at least one number or special character
    setHasNumberOrSpecialChar(
      /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(newPassword)
    );
  };

  const handleSubmit = (values: any) => {
    console.log('Form data', values);
    // You can handle the form data submission here
    
  };

  return (
    <>
      <SigninTemplate>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className='flex h-[inherit] max-h-[692px] w-[500px] flex-col rounded-[40px] bg-[#070707] '>
                <div className='flex max-h-[600px] flex-col gap-8 overflow-y-auto px-10 pt-10'>
                  <SigninLoginOpt heading={'Sign up'} pageName={'signin'} />

                  <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                      <Image
                        className='object-contain'
                        src={vector1}
                        alt={''}
                      />
                      <div className='font-normal text-[15px] leading-5 text-[#979797]'>
                        Or
                      </div>
                      <Image
                        className='object-contain'
                        src={vector2}
                        alt={''}
                      />
                    </div>

                    <div className='input-username-error flex flex-col gap-[6px]'>
                      <label
                        htmlFor='username'
                        className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                      >
                        Username
                      </label>
                      <Field
                        type='text'
                        id='username'
                        name='username'
                        className='font-normal input-error-border flex rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-white placeholder:text-[#979797] focus:ring-0'
                        placeholder='@Adamjohns'
                      />
                      <ErrorMessage
                        className='font-normal Input-error text-[14px] leading-[18px] text-[#FF5336]'
                        name='username'
                        component='div'
                      />
                    </div>

                    <div className='input-email-error flex flex-col gap-[6px]'>
                      <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                        Email address
                      </div>
                      <Field
                        type='email'
                        id='email'
                        name='email'
                        className='font-normal input-error-border flex rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-white placeholder:text-[#979797] focus:ring-0'
                        placeholder='example@gmail.com'
                      />
                      <ErrorMessage
                        className='font-normal Input-error text-[14px] leading-[18px] text-[#FF5336] '
                        name='email'
                        component='div'
                      />
                    </div>

                    <div className='input-verifyemail-error flex flex-col gap-[6px]'>
                      <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                        Verify Email address
                      </div>
                      <Field
                        type='email'
                        id='verifyemail'
                        name='verifyemail'
                        className='font-normal input-error-border flex rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-white placeholder:text-[#979797] focus:ring-0'
                        placeholder='example@gmail.com'
                      />
                      <ErrorMessage
                        className='font-normal Input-error text-[14px] leading-[18px] text-[#FF5336]'
                        name='verifyemail'
                        component='div'
                      />
                    </div>

                    <div className='flex flex-col gap-[6px]'>
                      <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                        Password
                      </div>
                      <Field
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        // value={password}
                        // onChange={(e: any) => {
                        //   handlePasswordChange(e);
                        // }}
                        className={`font-normal // flex rounded-[14px] bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-white placeholder:text-[#979797] 
                     focus:ring-0 ${
                       errors.password
                         ? 'border border-[#FF5336] focus:border-[#FF5336] '
                         : ' focus:border-transparent '
                     }
                      `}
                      />

                      <ErrorMessage
                        name='password'
                        component='div'
                        className='text-red-500'
                      />
                      <div>
                        <ul>
                          <li className='mb-3'>Create a password that:</li>
                          <li className='flex items-center mb-2'>
                            {errors.password ? <CrossIcon /> : <CheckedIcon />}
                             contains at least 8 characters
                          </li>
                          <li className='flex items-center'>
                            {/* {hasNumberOrSpecialChar ? (
                            <CheckedIcon />
                          ) : (
                            <CrossIcon />
                          )}{' '} */}
                            {errors.password ? <CrossIcon /> : <CheckedIcon />}
                             contains at least one number (0-9) or a symbol
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='w-full px-10 pt-5 pb-10'>
                  <button
                    type='submit'
                    className='font-bold flex w-full items-center justify-center rounded-[16px] bg-[#5848BC] px-6 py-4 text-[18px] leading-6 text-white'
                  >
                    Continue
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </SigninTemplate>

      {/* {welcomeStepsModal && (
        <WelcomeStepsModal
          welcomeStepsModal={welcomeStepsModal}
          setWelcomeStepsModal={setWelcomeStepsModal}
        />
      )} */}
    </>
  );
}
