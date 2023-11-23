import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signupHandler = async () => {
    console.log('signing up with - email:', email, '| password:', password);
  };

  const signupWithGoogleHandler = async () => {
    console.log('signing up with google');
  };

  return (
    <>
      <div className='grid h-screen place-items-center'>
        <div className='flex flex-col gap-4 p-4 py-4 border-2'>
          <h1 className='text-3xl font-bold underline'>Register Form</h1>
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
          <button onClick={signupHandler} className='p-4 border-2'>
            Sign up
          </button>
          <button onClick={signupWithGoogleHandler} className='p-4 border-2'>
            Sign up with Google
          </button>
          <p className='text-red-400'>{errorMsg}</p>
        </div>
      </div>
    </>
  );
}