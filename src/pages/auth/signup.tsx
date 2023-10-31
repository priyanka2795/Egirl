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
import CheckedIcon from './svg/checkedIcon.svg';
import CrossIcon from './svg/xMark.svg';
import Link from 'next/link';
import SignIn from './signin';
import SigninTemplate from './signinTemplate';
import WelcomeStepsModal from './welcomeSteps';
import SigninLoginOpt from './SigninLoginOpt';

// const login = [
//   {
//     icon: googleIcon,
//     text: 'Login with Google'
//   },
//   {
//     icon: discordIcon,
//     text: 'Login with Discord'
//   },
//   {
//     icon: facebookIcon,
//     text: 'Login with Facebook'
//   }
// ];

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmpassword: '',
  phone: '',
  address: ''
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

const initialstate = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone:''

};

export default function SignUp() {
  const router = useRouter();
  const supabase = useSupabaseClient<Database>();
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

  const onSubmit = (values: any, onSubmitProps: any) => {
    console.log('Form data', values);
    console.log('onSubmitProps data', onSubmitProps);
    // onSubmitProps.setSubmitting(false);
    // onSubmitProps.resetForm();
    // setWelcomeStepsModal(true);

    // axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // })
  };

// Validations 
const [form, setForm] = useState(initialstate);
const [error, setError] = useState({});


const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
    ...form,
    [name]: value,
  });
  setError({
    ...error,
    [name]: '',
  });
};



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
                <SigninLoginOpt heading={'Sign up'} pageName={'signin'} />

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

                  <div className='input-verifyemail-error flex flex-col gap-[6px]'>
                    <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                      Verify Email address
                    </div>
                    <Field
                      type='email'
                      id='verifyemail'
                      name='verifyemail'
                      className='font-normal input-error-border flex rounded-[14px] border-none bg-transparent bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
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
                      value={password}
                      onChange={(e: any) => {
                        // setPassword(e.target.value),
                        //   console.log(password, 'dfdgdg');
                        handlePasswordChange(e);
                      }}
                      className={`font-normal flex rounded-[14px] bg-transparent bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] 
                      placeholder:text-[#979797]  focus:ring-0 ${
                        isMinLength && hasNumberOrSpecialChar
                          ? 'focus:border-transparent'
                          : 'border border-[#FF5336] focus:border-[#FF5336]'
                      }`}
                    />
                    {/* <input
                      type='password'
                      onChange={(e) => setPasswordAgain(e.target.value)}
                    /> */}

                    {/* <PasswordChecklist
                      rules={[
                        'minLength',
                        'specialChar',
                        'number'

                        // 'match'
                      ]}
                      minLength={8}
                      value={password}
                      valueAgain={passwordAgain}
                      messages={{
                        minLength: 'contains at least 8 characters',
                        specialChar: 'The password has special characters.',
                        number: 'The password has a number.'
                      }}
                    /> */}

                    {/* <ErrorMessage
                      className='font-normal text-[14px] leading-[18px] text-[#FF5336]'
                      name='password'
                      component='div'
                    /> */}
                    <div>
                      <ul>
                        <li className='mb-3'>Create a password that:</li>
                        <li className='flex items-center mb-2'>
                          {isMinLength ? <CheckedIcon /> : <CrossIcon />}{' '}
                          contains at least 8 characters
                        </li>
                        <li className='flex items-center'>
                          {hasNumberOrSpecialChar ? (
                            <CheckedIcon />
                          ) : (
                            <CrossIcon />
                          )}{' '}
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
                  onClick={() => setWelcomeStepsModal(true)}
                >
                  Continue
                </button>
              </div>
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
    </>
  );
}
