import React from 'react';
import googleIcon from '../../../public/assets/google-icon.png';
import discordIcon from '../../../public/assets/discord-icon.png';
import facebookIcon from '../../../public/assets/facebook-icon.png';
import Image from 'next/image';
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

interface SignInLoginOptProp {
  heading: string;
  pageName: string;
}
const SigninLoginOpt = ({ heading, pageName }: SignInLoginOptProp) => {
  return (
    <>
      <div className='font-bold text-[32px] leading-10 text-white'>
        {heading}
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
          <Link href={`/auth/${pageName}`}>
            <a className='font-normal cursor-pointer text-[15px] leading-5 text-[#5848BC]'>
              {pageName === 'signin' ? 'Sign in' : 'Sign up'}
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SigninLoginOpt;
