import React from 'react';
import googleIcon from '@/assets/google-icon.webp';
import discordIcon from '@/assets/discord-icon.webp';
import facebookIcon from '@/assets/facebook-icon.webp';
import Image from 'next/image';
import Link from 'next/link';
import { discordLogin, googleLogin } from 'services/services';
import axios from 'axios';

const login = [
  {
    icon: googleIcon,
    text: 'Login with Google'
  },
  {
    icon: discordIcon,
    text: 'Login with Discord'
  }
  // {
  //   icon: facebookIcon,
  //   text: 'Login with Facebook'
  // }
];

interface SignInLoginOptProp {
  heading: string;
  pageName: string;
}
const SigninLoginOpt = ({ heading, pageName }: SignInLoginOptProp) => {
  const handleDiscordLogin = async (index: number) => {
    if (index === 0) {
      try {
        let apiUrl = `https://api.egirls.ai/google/login?origin_url=https://api.egirls.ai`;
        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
        // return response;
        console.log(response);
      } catch (error) {
        return error;
      }
    }
    if (index === 1) {
      discordLogin()
        .then((res: any) => {
          console.log('discord????--', res);
          if (res.status === 307) {
            const redirectedURL = res.headers.get('Location');
            console.log('Redirected URL:', redirectedURL);
            window.location.href = redirectedURL;
          } else {
            console.log('reError????');
          }
        })
        .catch((err) => {
          console.log('discord????error--', err);
        });
    } else if (index == 0) {
      googleLogin()
        .then((res: any) => {
          console.log('google????--', res);
          window.location.href = res.data.redirectUrl;
          // if (res.status === 307) {
          //   const redirectedURL = res.headers.get('Location');
          //   console.log('Redirected URL:', redirectedURL);
          //   window.location.href = redirectedURL;
          // } else {
          //   console.log('reError????');
          // }
        })
        .catch((err) => {
          console.log('google????error--', err);
        });
    }
  };

  const handleGoogleLogin = (index: number) => {};

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
                <button
                  onClick={() => handleDiscordLogin(index)}
                  className='flex w-full items-center justify-center gap-[10px] rounded-[16px] border border-white/[0.16] px-3 pb-[13px] pt-[11px]'
                >
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
          <Link href={`/${pageName}`}>
            <a className='font-normal cursor-pointer text-[15px] leading-5 text-[#5848BC]'>
              {pageName === 'login' ? 'Sign in' : 'Sign up'}
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SigninLoginOpt;
