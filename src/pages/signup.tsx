import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Image from 'next/image';
import vector1 from '@/assets/Vector_1.webp';
import vector2 from '@/assets/Vector_1.webp';
import CheckedIcon from './auth/svg/checkedIcon.svg';
import CrossIcon from './auth/svg/xMark.svg';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { userSignUp } from 'services/services';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SigninTemplate from './auth/signinTemplate';
import SigninLoginOpt from './auth/SigninLoginOpt';
import WelcomeStepsModal from './auth/WelcomeSteps';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  verifyemail: Yup.string()
    .required('Verify email is a required')
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

  const [password, setPassword] = useState<any>('');
  const [isMinLength, setIsMinLength] = useState<boolean>(false);
  const [hasNumberOrSpecialChar, setHasNumberOrSpecialChar] =
    useState<boolean>(false);

  // const [welcomeStepsModal, setWelcomeStepsModal] = useState<boolean>(false);
  // const [updateState, setUpdateState] = useState(false)

  // useEffect(()=>{
  //   let signUpUser = Cookies.get('signUpUserId')
  //   if(signUpUser){
  //     setWelcomeStepsModal(true)
  //   }
  // },[updateState])

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

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    setErrorMsg('');
    // You can handle the form data submission here
    let data = {
      username: values.username,
      email: values.email,
      password: values.password
    };
    userSignUp(data)
      .then((res: any) => {
        console.log('sign up res---', res);
        sessionStorage.setItem('SignUpCompleted', 'true');
        if (res.status === 200) {
          Cookies.set('accessToken', res?.data?.access_token);
          Cookies.set('refreshToken', res?.data?.refresh_token);
          Cookies.set('signUpUserId', res?.data?.user_id);
          // setUpdateState(!updateState)
          toast.success('User login successful');
          setTimeout(() => {
            router.push('/home');
          }, 1000);
        }
        if (res.response?.status === 400) {
          setErrorMsg(res.response?.data?.detail);
        }
      })
      .catch((err) => {
        console.log('sign up err---', err);
      })
      .finally(() => {
        setSubmitting(false); // Set submitting to false to enable the button
      });
  };

  return (
    <>
      <SigninTemplate>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values }) => (
            <Form>
              <div className='flex h-[inherit] max-h-[692px] w-[500px] flex-col rounded-[40px] bg-[#070707] '>
                <div className='flex max-h-[600px] flex-col gap-8 overflow-y-auto px-10 pt-10'>
                  <SigninLoginOpt heading={'Sign up'} pageName={'login'} />

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
                        className={`font-normal // flex rounded-[14px] bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-white placeholder:text-[#979797] 
                     focus:ring-0 ${
                       errors.password
                         ? 'border border-[#FF5336] focus:border-[#FF5336] '
                         : ' focus:border-transparent '
                     }
                      `}
                      />

                      {/* <ErrorMessage
                        name='password'
                        component='div'
                        className='text-red-500'
                      /> */}
                      <div>
                        <ul>
                          <li className='mb-3'>Create a password that:</li>
                          <li className='flex items-center mb-2'>
                            {values.password ? (
                              errors.password ? (
                                <CrossIcon />
                              ) : (
                                <CheckedIcon />
                              )
                            ) : (
                              ''
                            )}
                            contains at least 8 characters
                          </li>
                          <li className='flex items-center mb-2'>
                            {values.password ? (
                              errors.password ? (
                                <CrossIcon />
                              ) : (
                                <CheckedIcon />
                              )
                            ) : (
                              ''
                            )}
                            contains at least one uppercase letter
                          </li>
                          <li className='flex items-center'>
                            {values.password ? (
                              errors.password ? (
                                <CrossIcon />
                              ) : (
                                <CheckedIcon />
                              )
                            ) : (
                              ''
                            )}
                            contains at least one symbol
                          </li>
                        </ul>
                      </div>
                      <div className='flex items-center gap-2 mb-1'>
                        <input
                          id='checked-checkbox'
                          type='checkbox'
                          value=''
                          className='w-4 h-4 text-[#5848BC] rounded focus:ring-0'
                        />
                        <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                          <a
                            href='https://egirls.ai/legal/terms-of-service'
                            target='_blank'
                          >
                            Terms and Conditions
                          </a>
                        </div>
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
                  <p className='font-normal Input-error ml-2 mt-5 text-[14px] leading-[1px] text-[#FF5336]'>
                    {errorMsg}
                  </p>
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
       
      )}  */}
      <ToastContainer
        position='bottom-center'
        pauseOnHover
        theme='colored'
        hideProgressBar={true}
        autoClose={2000}
      />
    </>
  );
}
