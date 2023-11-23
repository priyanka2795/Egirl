import React, { useState } from 'react';
import { Database } from '../../types/database';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import bgImage from '../../../public/assets/sign-in-bg-img.png';
import logo from '../../../public/assets/Logo-white.png';
import Image from 'next/image';
import googleIcon from '../../public/assets/google-icon.png';
import discordIcon from '../../public/assets/discord-icon.png';
import facebookIcon from '../../public/assets/facebook-icon.png';
import vector1 from '../../public/assets/Vector_1.png';
import vector2 from '../../public/assets/Vector_2.png';
import CheckedIcon from '../../src/pages/auth/svg/checkedIcon.svg';
import CrossIcon from './svg/xMark.svg';
import Link from 'next/link';
import SignIn from './login';
import SigninTemplate from './auth/signinTemplate';
import WelcomeStepsModal from './auth/welcomeSteps';
import SigninLoginOpt from './auth/SigninLoginOpt';
import { userSignUp } from 'services/services';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialValues = {
  username: '',
  email: '',
  verifyEmail:'',
  password: '',
  phone: '',
};

const validationSchema = Yup.object({
  username: Yup.string().required('Please Enter a username'),
  email: Yup.string()
    .email("That's an invalid email")
    .required('Please Enter your Email'),
  verifyEmail: Yup.string()
    .required()
    .oneOf([Yup.ref('email')], "That's an invalid email"),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "That's an invalid password"
    )
});


export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [isMinLength, setIsMinLength] = useState<boolean>(false);
  const [hasNumberOrSpecialChar, setHasNumberOrSpecialChar] =
    useState<boolean>(false);

  const [welcomeStepsModal, setWelcomeStepsModal] = useState<boolean>(false);

  const [errorMsg, setErrorMsg] = useState('');

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

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



  const onSubmit = (values: any) => {
    setErrorMsg('')
    let data = {
      "username": values.username,
      "email": values.email,
      "password": values.verifyEmail,
      "phone": "1234567890"
    }
    userSignUp(data)
    .then((res:any)=>{
      console.log("sign up res---", res)
      if (res.status === 200) {
        toast.success('User signUp successful');
        Cookies.set('accessToken', res.data.access_token);
        Cookies.set('refreshToken', res.data.refresh_token);
        setTimeout(() => {
          router.push('/home');
        }, 1000);
      }
      if (res.response.status === 400) {
        setErrorMsg(res.response.data.detail);
      } 
    })
    .catch((err)=>{
      console.log("sign up err---", err)
    })
  };



// const handleChange = (e:any) => {
//   const { name, value } = e.target;
//   setForm({
//     ...form,
//     [name]: value,
//   });
//   setError({
//     ...error,
//     [name]: '',
//   });
// };



  return (
    <>
      <SigninTemplate>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className='flex h-[inherit] max-h-[692px] w-[500px] flex-col rounded-[40px] bg-[#070707] '>
              <div className='flex max-h-[600px] flex-col gap-8 overflow-y-auto px-10 pt-10'>
                {/* <div className='font-bold text-[32px] leading-10 text-white'>
                  Sign in
                </div> */}
                <SigninLoginOpt heading={'Sign up'} pageName={'login'} />

                {/* <div className='flex flex-col gap-3'>
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
                      <a className='font-normal cursor-pointer text-[15px] leading-5 text-[#5848BC]'>
                        Sign up
                      </a>
                    </Link>
                  </div>
                </div> */}

                <div className='flex flex-col gap-4'>
                  <div className='flex gap-4'>
                    <Image className='object-contain' src={vector1} alt={''} />
                    <div className='font-normal text-[15px] leading-5 text-[#979797]'>
                      Or
                    </div>
                    <Image className='object-contain' src={vector2} alt={''} />
                  </div>
                  <div className='input-username-error flex flex-col gap-[6px]'>
                    <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                      Username
                    </div>
                    <Field
                      type='text'
                      id='username'
                      name='username'
                      className='font-normal input-error-border flex rounded-[14px] border-none bg-transparent bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
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
                      className='font-normal input-error-border flex rounded-[14px] border-none bg-transparent bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                      placeholder='example@gmail.com'
                    />
                    <ErrorMessage
                      className='font-normal Input-error text-[14px] leading-[18px] text-[#FF5336] '
                      name='email'
                      component='div'
                    />
                  </div>

                  <div className='input-verifyEmail-error flex flex-col gap-[6px]'>
                    <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                      Verify Email address
                    </div>
                    <Field
                      type='email'
                      id='verifyEmail'
                      name='verifyEmail'
                      className='font-normal input-error-border flex rounded-[14px] border-none bg-transparent bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                      placeholder='example@gmail.com'
                    />
                    <ErrorMessage
                      className='font-normal Input-error text-[14px] leading-[18px] text-[#FF5336]'
                      name='verifyEmail'
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
                      className={`font-normal flex rounded-[14px] bg-transparent border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] 
                      placeholder:text-[#979797]  focus:ring-0 `}
                    />
                    <div>
                      <ul>
                        <li className='mb-3'>Create a password that:</li>
                        <li className='flex items-center mb-2'>
                          {/* {isMinLength ? */}
                           <CheckedIcon /> 
                           {/* : <CrossIcon />} */}
                          contains at least 8 characters
                        </li>
                        <li className='flex items-center'>
                          {/* {hasNumberOrSpecialChar ? ( */}
                            <CheckedIcon />
                          {/* ) : (
                            <CrossIcon />
                          )}{' '} */}
                          contains at least one number (0-9) and a symbol
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`w-full px-10 pt-5 ${errorMsg ? 'pb-5' : 'pb-10'} `}>
                <button
                  type='submit'
                  className='font-bold flex w-full items-center justify-center rounded-[16px] bg-[#5848BC] px-6 py-4 text-[18px] leading-6 text-white'
                  // onClick={() => setWelcomeStepsModal(true)}
                >
                  Continue
                </button>
              </div>
              <p className={`px-10 text-red-400 ${errorMsg ? 'pb-10' : ''}`}>{errorMsg}</p>
            </div>
            
          </Form>
        </Formik>
        
      </SigninTemplate>
      {/* {welcomeStepsModal && (
        <WelcomeStepsModal
          welcomeStepsModal={welcomeStepsModal}
          setWelcomeStepsModal={setWelcomeStepsModal}
        />
      )} */}
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

// ${
//   isMinLength && hasNumberOrSpecialChar
//     ? 'focus:border-transparent'
//     : 'border border-[#FF5336] focus:border-[#FF5336]'
// }
