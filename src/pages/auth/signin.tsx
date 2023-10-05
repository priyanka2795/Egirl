import React,{ useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '../../../types/database'
import { useRouter } from 'next/router'
import logo from '../../../public/assets/Logo-white.png';
import modalImage from '../../../public/assets/sign-in-image.png';
import Image from 'next/image';
import googleIcon from '../../../public/assets/google-icon.png';
import discordIcon from '../../../public/assets/discord-icon.png';
import facebookIcon from '../../../public/assets/facebook-icon.png';
import vector1 from '../../../public/assets/Vector 1.png';
import vector2 from '../../../public/assets/Vector 2.png';

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
  },
];
const signin = () => {
  const router = useRouter()
  const supabase = useSupabaseClient<Database>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorMsg, setErrorMsg] = useState('')

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const loginHandler = async () => {
    console.log('loggin in with - email:', email, '| password:', password)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    console.log('results of logging in: ', data, error)
    if (!error) {
      router.push('/home')
    } else {
      setErrorMsg(error.message)
    }
  }

  const loginGoogleHandler = async () => {
    console.log('loggin in with google')
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${new URL(location.href).origin}/logging-in?redirect=/home`,
      },
    })
    console.log('results of logging in: ', data, error)
  }
  return (
    <div className='w-[1376px] h-screen flex justify-between'>
      <div className='flex'>
        <div className='pt-6 pl-[38px] w-max'>
          <Image className='' src={logo} alt={''} />
        </div>
        <Image className='object-contain' src={modalImage} alt={''} />
      </div>
      <div className='p-[54px] w-[500px]'>
        <div className='flex flex-col gap-8 p-10 rounded-[40px] bg-[#070707]'>
          <div className='text-white text-[32px] font-bold leading-10'>Login</div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
              {login.map((item,index) => {
                return(
                  <div key={index}>
                    <button className='w-full flex items-center justify-center gap-[10px] px-3 pt-[11px] pb-[13px] rounded-[16px] border border-white/[0.16]'>
                      <Image src={item.icon} alt={''} />
                      <div className='text-[15px] font-normal leading-5'>{item.text}</div>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className='flex gap-[6px]'>
              <div className='text-white text-[15px] font-normal leading-5'>New user?</div>
              <div className='text-[#5848BC] text-[15px] font-normal leading-5'>Sign up</div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
              <Image className='object-contain' src={vector1} alt={''} />
              <div className='text-[#979797] text-[15px] font-normal leading-5'>Or</div>
              <Image className='object-contain' src={vector2} alt={''} />
            </div>
            <div className='flex flex-col gap-[6px]'>
              <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Email address</div>
              <input type='text' placeholder='example@gmail.com' className='px-4 py-3 flex rounded-[14px] bg-white/[0.05] text-[#979797] text-[15px] font-normal leading-6 placeholder:text-[#979797] focus:ring-0 border-none bg-transparent'/>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-[6px]'>
                <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Password</div>
                <input type='text' placeholder='Password' className='px-4 py-3 flex rounded-[14px] bg-white/[0.05] text-[#979797] text-[15px] font-normal leading-6 placeholder:text-[#979797] focus:ring-0 border-none bg-transparent'/>
              </div>
              <div className='text-white text-[15px] font-normal leading-5'>Forgot your password?</div>
            </div>
          </div>
          <button className='flex items-center justify-center px-6 py-4 rounded-[16px] bg-[#5848BC] text-white text-[18px] font-bold leading-6'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default signin;

























// import React, { useState } from 'react'
// import { useSupabaseClient } from '@supabase/auth-helpers-react'
// import { Database } from '../../../types/database'
// import { useRouter } from 'next/router'

// export default function SignIn() {
//   const router = useRouter()
//   const supabase = useSupabaseClient<Database>()

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const [errorMsg, setErrorMsg] = useState('')

//   const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value)
//   }

//   const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value)
//   }

//   const loginHandler = async () => {
//     console.log('loggin in with - email:', email, '| password:', password)
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email: email,
//       password: password,
//     })
//     console.log('results of logging in: ', data, error)
//     if (!error) {
//       router.push('/home')
//     } else {
//       setErrorMsg(error.message)
//     }
//   }

//   const loginGoogleHandler = async () => {
//     console.log('loggin in with google')
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: 'google',
//       options: {
//         redirectTo: `${new URL(location.href).origin}/logging-in?redirect=/home`,
//       },
//     })
//     console.log('results of logging in: ', data, error)
//   }

//   return (
//     <>
//       <div className='grid h-screen place-items-center'>
//         <div className='flex flex-col gap-4 p-4 py-4 border-2'>
//           <h1 className='text-3xl font-bold underline'>Login Form</h1>
//           <input
//             type='email'
//             value={email}
//             onChange={onEmailChange}
//             placeholder='email'
//             className='p-4 border-2'
//           />
//           <input
//             type='password'
//             value={password}
//             onChange={onPasswordChange}
//             placeholder='password'
//             className='p-4 border-2'
//           />
//           <button onClick={loginHandler} className='p-4 border-2'>
//             Login
//           </button>
//           <button onClick={loginGoogleHandler} className='p-4 border-2'>
//             Google Login
//           </button>
//           <p className='text-red-400'>{errorMsg}</p>
//         </div>
//       </div>
//     </>
//   )
// }
