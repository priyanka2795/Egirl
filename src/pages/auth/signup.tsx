import React, { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../../../types/database';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import bgImage from '../../../public/assets/sign-in-bg-img.png';
import logo from '../../../public/assets/Logo-white.png';
import Image from 'next/image';
import googleIcon from '../../../public/assets/google-icon.png';
import discordIcon from '../../../public/assets/discord-icon.png';
import facebookIcon from '../../../public/assets/facebook-icon.png';
import vector1 from '../../../public/assets/Vector 1.png';
import vector2 from '../../../public/assets/Vector 2.png';
import Link from 'next/link';

const login = [
  {
    icon: googleIcon,
    text: 'Login with Google'
  },
  {
    icon: discordIcon,
    text: 'Login with Discord'
  },
  {
    icon: facebookIcon,
    text: 'Login with Facebook'
  }
];

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmpassword: '',
  phone: '',
  address: ''
};

const onSubmit = (values: any, onSubmitProps: any) => {
  console.log('Form data', values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  username: Yup.string().required('Please Enter a username'),
  email: Yup.string()
    .email("That's an invalid email")
    .required('Please Enter your Email'),
  verifyemail: Yup.string()
    .required()
    .oneOf([Yup.ref('email')], "That's an invalid email"),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "That's an invalid password"
    )
});
export default function SignIn() {
  const router = useRouter();
  const supabase = useSupabaseClient<Database>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

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

  return (
    <div className='mx-auto mx-auto flex  min-h-screen w-full max-w-[1440px] flex-col justify-center'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div
            className={`signin-page mx-8 my-[35px] flex justify-between !bg-top`}
          >
            <div className='pl-[38px] pt-6'>
              <Image className='' src={logo} alt={''} />
            </div>

            <div className='m-[54px] flex h-[inherit] max-h-[692px] w-[500px] flex-col overflow-y-auto rounded-[40px] bg-[#070707] '>
              <div className='flex flex-col gap-8 px-10 pt-10'>
                <div className='font-bold text-[32px] leading-10 text-white'>
                  Sign up
                </div>

                <div className='flex flex-col gap-3'>
                  <div className='flex flex-col gap-2'>
                    {login.map((item, index) => {
                      return (
                        <div key={index}>
                          <button className='flex w-full items-center justify-center gap-[10px] rounded-[16px] border border-white/[0.16] px-3 pb-[13px] pt-[11px]'>
                            <Image src={item.icon} alt={''} />
                            <div className='font-normal text-[15px] leading-5'>
                              {item.text}
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <div className='flex gap-[6px]'>
                    <div className='font-normal text-[15px] leading-5 text-white'>
                      New user?
                    </div>
                    <Link href='/auth/signin'>
                      <a className='font-normal text-[15px] leading-5 text-[#5848BC]'>
                        Sign up
                      </a>
                    </Link>
                  </div>
                </div>

                <div className='flex flex-col gap-4'>
                  <div className='flex gap-4'>
                    <Image className='object-contain' src={vector1} alt={''} />
                    <div className='font-normal text-[15px] leading-5 text-[#979797]'>
                      Or
                    </div>
                    <Image className='object-contain' src={vector2} alt={''} />
                  </div>

                  <div className='flex flex-col gap-[6px]'>
                    <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                      Username
                    </div>
                    <Field
                      type='text'
                      id='username'
                      name='username'
                      className='font-normal flex rounded-[14px] border-none bg-transparent bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                      placeholder='@Adamjohns'
                    />
                    <ErrorMessage
                      className='font-normal text-[14px] leading-[18px] text-[#FF5336]'
                      name='username'
                      component='div'
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
                      className='font-normal flex rounded-[14px] border-none bg-transparent bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                      placeholder='example@gmail.com'
                    />
                    <ErrorMessage
                      className='font-normal text-[14px] leading-[18px] text-[#FF5336]'
                      name='email'
                      component='div'
                    />
                  </div>

                  <div className='flex flex-col gap-[6px]'>
                    <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                      Verify Email address
                    </div>
                    <Field
                      type='email'
                      id='verifyemail'
                      name='verifyemail'
                      className='font-normal flex rounded-[14px] border-none bg-transparent bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                      placeholder='example@gmail.com'
                    />
                    <ErrorMessage
                      className='font-normal text-[14px] leading-[18px] text-[#FF5336]'
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
                      className='font-normal flex rounded-[14px] border-none bg-transparent bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                    />
                    <ErrorMessage
                      className='font-normal text-[14px] leading-[18px] text-[#FF5336]'
                      name='password'
                      component='div'
                    />
                  </div>
                </div>
              </div>

              <div className='w-full px-10 pb-10 pt-5'>
                <button
                  type='submit'
                  className='font-bold flex w-full items-center justify-center rounded-[16px] bg-[#5848BC] px-6 py-4 text-[18px] leading-6 text-white'
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
