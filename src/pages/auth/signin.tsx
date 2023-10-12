import React, { useState } from 'react';
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
      <div className={`signin-page mx-8 my-[35px] flex justify-between`}>
        <div className='pl-[38px] pt-6'>
          <Image className='' src={logo} alt={''} />
        </div>
        <div className='p-[54px]'>
          <div className='flex w-[500px] flex-col gap-8 rounded-[40px] bg-[#070707] p-10'>
            <div className='font-bold text-[32px] leading-10 text-white'>
              Login
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
                <Link href='/auth/signup'>
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
                  Email address
                </div>
                <input
                  type='email'
                  placeholder='example@gmail.com'
                  className='font-normal flex rounded-[14px] border-none bg-transparent bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                />
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-[6px]'>
                  <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                    Password
                  </div>
                  <input
                    type='password'
                    placeholder='Password'
                    className='font-normal flex rounded-[14px] border-none bg-transparent bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                  />
                </div>
                <div className='font-normal text-[15px] leading-5 text-white'>
                  Forgot your password?
                </div>
              </div>
            </div>
            <button
              onClick={loginHandler}
              className='font-bold flex items-center justify-center rounded-[16px] bg-[#5848BC] px-6 py-4 text-[18px] leading-6 text-white'
            >
              Continue
            </button>
            {/* <button onClick={loginGoogleHandler} className='p-4 border-2'>
              Google Login
            </button> */}
            <p className='text-red-400'>{errorMsg}</p>
          </div>
        </div>
      </div>
    </div>
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
