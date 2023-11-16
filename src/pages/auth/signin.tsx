import React, { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../../../types/database';
import { useRouter } from 'next/router';
import bgImage from '../../../public/assets/sign-in-bg-img.png';
import logo from '../../../public/assets/Logo-white.png';
import Image from 'next/image';
import googleIcon from '../../../public/assets/google-icon.png';
import discordIcon from '../../../public/assets/discord-icon.png';
import facebookIcon from '../../../public/assets/facebook-icon.png';
import vector1 from '../../../public/assets/Vector 1.png';
import vector2 from '../../../public/assets/Vector 2.png';
import RotateIcon from '../../../public/assets/rotate-cw.png';
import Link from 'next/link';
import SigninTemplate from './signinTemplate';
import SigninLoginOpt from './SigninLoginOpt';
import OtpInput from './OtpInput';
import { CustomIcon } from '@components/ui/custom-icon';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Toast from '../../Toast';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { showToast, setToastVisible } from 'redux/reducers/toastReducer';
import { userLogin } from 'services/services';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SignIn {
  SetFormStep: boolean;
}
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
});
const initialValues = {
  email: '',
  password: ''
};
export default function SignIn({ SetFormStep }: SignIn) {
  const dispatch = useAppDispatch();
  const { isVisible, notification } = useAppSelector((state) => state.toast);
  const router = useRouter();
  const supabase = useSupabaseClient<Database>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const [signInSteps, setSignInSteps] = useState<number>();
  const [verifyCode, setVerifyCode] = useState<boolean>(false);

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginHandler = async () => {
    console.log('loggin in with - email:', email, '| password:', password);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });
    console.log('results of logging in: ', data, error);
    if (!error) {
      router.push('/home');
    } else {
      setErrorMsg(error.message);
    }
    setSignInSteps(1);
  };

  const loginGoogleHandler = async () => {
    console.log('loggin in with google');
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${new URL(location.href).origin}/logging-in?redirect=/home`
      }
    });
    console.log('results of logging in: ', data, error);
  };

  // Otp
  const [otp, setOtp] = useState('');
  const [valid, setValid] = useState(false);

  const onChange = (value: string) => {
    setOtp(value);
  };

  const handleSubmit = (values: any) => {
    setErrorMsg('');
    console.log('login form data---', values);
    userLogin(values)
      .then((res: any) => {
        console.log('login res--', res);
        if (res.status === 200) {
          toast.success('User login successful');
          Cookies.set('accessToken', res.data.access_token);
          Cookies.set('refreshToken', res.data.refresh_token);
          setTimeout(() => {
            router.push('/home');
          }, 1000);
        }
        if (res.response.status === 400) {
          setErrorMsg('email or password wrong!');
        }
      })
      .catch((err) => {
        console.log('err----', err);
      });
    // setSignInSteps(1);
    // let notify = {type:"ERROR", message:"response error"}
    // dispatch(setToastVisible())
    // dispatch(showToast(notify))
  };

  return (
    <>
      <SigninTemplate>
        <div className='w-[500px] rounded-[40px] bg-[#070707] px-10 pt-10'>
          {signInSteps === 1 ? (
            <div className='flex h-[400px] flex-col justify-between'>
              <div>
                <h2 className='font-bold text-[32px]'>Verify your identity</h2>
                <p className='mt-4 text-[15px]'>
                  {verifyCode
                    ? "Enter the code we've sent to "
                    : "To confirm your identity we'll send you a verification code to "}
                  <span className='font-bold' style={{ fontWeight: 700 }}>
                    {email}
                  </span>
                </p>
              </div>
              {verifyCode && (
                <div className='flex items-center justify-between '>
                  <OtpInput value={otp} valueLength={6} onChange={onChange} />
                </div>
              )}
              <div>
                {verifyCode ? (
                  <>
                    {otp.length < 6 ? (
                      <button className='font-bold flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FFFFFF14] px-5 py-4 text-center text-lg'>
                        <Image src={RotateIcon} /> Resend code
                      </button>
                    ) : (
                      <button className='font-bold flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5848BC] px-5 py-4 text-center text-lg'>
                        <CustomIcon iconName={'SpinnerIcon'} />
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    className='font-bold flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5848BC] px-5 py-4 text-center text-lg'
                    onClick={() => setVerifyCode(true)}
                  >
                    Continue
                  </button>
                )}

                <p className='mb-8 mt-4 text-[15px] '>
                  Sign in to a different account
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className='flex flex-col gap-8'>
                <SigninLoginOpt heading={'Login'} pageName={'signup'} />
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form>
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
                        <div className='flex flex-col gap-[6px]'>
                          <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                            Email address
                          </div>
                          <Field
                            type='email'
                            id='email'
                            name='email'
                            placeholder='example@gmail.com'
                            className='font-normal flex rounded-[14px] border-none bg-transparent bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                            // onChange={onEmailChange}
                          />
                          <ErrorMessage
                            className='font-normal Input-error text-[14px] leading-[18px] text-[#FF5336]'
                            name='email'
                            component='div'
                          />
                        </div>
                        <div className='flex flex-col gap-3'>
                          <div className='flex flex-col gap-[6px]'>
                            <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                              Password
                            </div>
                            <Field
                              type='password'
                              placeholder='Password'
                              name='password'
                              id='password'
                              // onChange={onPasswordChange}
                              className='font-normal flex rounded-[14px] border-none bg-transparent bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                            />
                            <ErrorMessage
                              name='password'
                              component='div'
                              className='font-normal Input-error text-[14px] leading-[18px] text-[#FF5336]'
                            />
                          </div>
                          <div className='font-normal text-[15px] leading-5 text-white'>
                            Forgot your password?
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={loginHandler}
                        type='submit'
                        className='font-bold mt-6 flex w-full items-center justify-center rounded-[16px] bg-[#5848BC] px-6 py-4 text-[18px] leading-6 text-white'
                      >
                        Continue
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
              <p className='py-5 text-red-400'>{errorMsg}</p>
            </>
          )}
        </div>
      </SigninTemplate>
      {isVisible && <Toast />}
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

{
  /* <div className='grid h-screen place-items-center'>
        <div className='flex flex-col gap-4 p-4 py-4 border-2'>
          <h1 className='text-3xl font-bold underline'>Login Form</h1>
          <input
            type='email'
            value={email}
            onChange={onEmailChange}
            placeholder='email'
            className='p-4 border-2'
          />
          <input
            type='password'
            value={password}
            onChange={onPasswordChange}
            placeholder='password'
            className='p-4 border-2'
          />
          <button onClick={loginHandler} className='p-4 border-2'>
            Login
          </button>
          <button onClick={loginGoogleHandler} className='p-4 border-2'>
            Google Login
          </button>
          <p className='text-red-400'>{errorMsg}</p>
        </div>
</div> */
}
