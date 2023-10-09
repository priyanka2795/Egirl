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

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmpassword: '',
  phone: '',
  address: '',
};

const onSubmit = (values:any, onSubmitProps:any) => {
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
    ),
});
export default function SignIn() {
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
    <div className={`px-8 py-[35px] bg-[${bgImage}] flex justify-between`}>
      <div className='pt-6 pl-[38px]'>
        <Image className='' src={logo} alt={''} />
      </div>
    
      <div className='flex flex-col rounded-[40px] bg-[#070707] w-[500px] m-[54px] h-[inherit]'>
          <div className='flex flex-col gap-8 px-10 pt-10 h-[calc(115vh-100px)] overflow-y-auto'>
            <div className='text-white text-[32px] font-bold leading-10'>Sign up</div>
             
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
              <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Username</div>
              <Field type="text" id="username" name="username" className="px-4 py-3 flex rounded-[14px] bg-white/[0.05] text-[#979797] text-[15px] font-normal leading-6 placeholder:text-[#979797] focus:ring-0 border-none bg-transparent" placeholder='@Adamjohns' />
              <ErrorMessage className="text-[#FF5336] text-[14px] font-normal leading-[18px]" name="username" component="div" />
              </div>

              <div className='flex flex-col gap-[6px]'>
              <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Email address</div>
              <Field type="email" id="email" name="email" className="px-4 py-3 flex rounded-[14px] bg-white/[0.05] text-[#979797] text-[15px] font-normal leading-6 placeholder:text-[#979797] focus:ring-0 border-none bg-transparent" placeholder='example@gmail.com' />
              <ErrorMessage className="text-[#FF5336] text-[14px] font-normal leading-[18px]" name="email" component="div" />
              </div>

              <div className='flex flex-col gap-[6px]'>
              <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Verify Email address</div>
              <Field type="email" id="verifyemail" name="verifyemail" className="px-4 py-3 flex rounded-[14px] bg-white/[0.05] text-[#979797] text-[15px] font-normal leading-6 placeholder:text-[#979797] focus:ring-0 border-none bg-transparent" placeholder='example@gmail.com' />
              <ErrorMessage className="text-[#FF5336] text-[14px] font-normal leading-[18px]" name="verifyemail" component="div" />
              </div>

              <div className='flex flex-col gap-[6px]'>
              <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Password</div>
              <Field type="password" id="password" name="password" className="px-4 py-3 flex rounded-[14px] bg-white/[0.05] text-[#979797] text-[15px] font-normal leading-6 placeholder:text-[#979797] focus:ring-0 border-none bg-transparent"/>
              <ErrorMessage className="text-[#FF5336] text-[14px] font-normal leading-[18px]" name="password" component="div" />
              </div>
            </div>
          </div>
          
          <div className='w-full px-10 pt-5 pb-10'>
            <button type="submit" className='w-full flex items-center justify-center px-6 py-4 rounded-[16px] bg-[#5848BC] text-white text-[18px] font-bold leading-6'>Continue</button>
          </div>
      </div>
    </div>
  </Form>
  </Formik>
  );
};

